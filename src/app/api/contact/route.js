import { nowIso, yesNo } from '@/lib/ghl'

// Full URL hardcoded — Morse account uses a location-scoped hook ID
// (`BlWviZhz7Vyrg1cbGSYr`) rather than the template default.
const WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/BlWviZhz7Vyrg1cbGSYr/webhook-trigger/54b2c3c5-6276-4ebf-9b44-94a46ed4fb27'

export const POST = async (req) => {
  try {
    const data = await req.json()
    const firstName = (data.firstName || '').trim()
    const lastName = (data.lastName || '').trim()
    const email = (data.email || '').trim()
    const message = (data.message || '').trim()

    if (!firstName || !lastName || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = {
      type: 'Contact_Form',
      firstName,
      lastName,
      email,
      phone: (data.phone || '').trim(),
      message,
      sms_updates: yesNo(data.sms_updates),
      sms_promo: yesNo(data.sms_promo),
      source: 'src_contact',
      submitted_at: nowIso(),
    }

    const resp = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!resp.ok) {
      console.error('[api/contact] upstream status:', resp.status)
      return Response.json({ error: 'Upstream webhook failed' }, { status: 502 })
    }
    return Response.json({ success: true })
  } catch (err) {
    console.error('[api/contact]:', err)
    return Response.json({ error: 'Internal error' }, { status: 500 })
  }
}
