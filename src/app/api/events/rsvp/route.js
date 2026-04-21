import { nowIso, yesNo, fetchGHLEvent, postA2PWebhook } from '@/lib/ghl'

// Full URL hardcoded — Morse account uses a location-scoped hook ID
// (`BlWviZhz7Vyrg1cbGSYr`) rather than the template default.
const WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/BlWviZhz7Vyrg1cbGSYr/webhook-trigger/aee1c5b3-f9d1-4187-b8d8-f66626d5cecc'

export const POST = async (req) => {
  try {
    const data = await req.json()
    const firstName = (data.firstName || '').trim()
    const lastName = (data.lastName || '').trim()
    const email = (data.email || '').trim()
    const eventId = (data.eventId || '').trim()

    if (!firstName || !email) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const event = eventId ? await fetchGHLEvent(eventId) : null
    if (!event) {
      return Response.json({ error: 'Unknown or missing event' }, { status: 400 })
    }

    const payload = {
      type: 'Event_RSVP',
      firstName,
      lastName,
      email,
      phone: (data.phone || '').trim(),
      eventName: event.title,
      eventDate: `${event.date.month} ${event.date.day}, ${event.date.year}`,
      // Start time only — raw mapped label from GHL select_time,
      // or empty string if unset.
      eventTime: event.time || '',
      eventCategory: event.type,
      // A2P 10DLC compliance: consent is required on every form that
      // collects phone numbers. Sent as 'Yes'/'No' strings per rule §2.
      sms_updates: yesNo(data.sms_updates),
      sms_promo: 'No',
      source: 'src_event',
      submitted_at: nowIso(),
    }

    const [resp] = await Promise.all([
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }),
      postA2PWebhook(payload),
    ])
    if (!resp.ok) {
      console.error('[api/events/rsvp] upstream status:', resp.status)
      return Response.json({ error: 'Upstream webhook failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('[api/events/rsvp]:', err)
    return Response.json({ error: 'Internal error' }, { status: 500 })
  }
}
