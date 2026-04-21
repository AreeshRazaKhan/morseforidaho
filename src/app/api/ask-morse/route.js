import { nowIso, postA2PWebhook, yesNo } from '@/lib/ghl'

// Per .claude/rules/ghl-forms-webhooks.md the Ask Morse form is the
// Issue Report form renamed — payload type/source stay as Issue_Report.
// Full URL is hardcoded because the Morse account uses a different hook ID
// than the template default (location-scoped hook `BlWviZhz7Vyrg1cbGSYr`).
const WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/BlWviZhz7Vyrg1cbGSYr/webhook-trigger/00803d48-88bb-4077-bb05-0c62cc1c4d0f'

export const POST = async (req) => {
  try {
    const data = await req.json()
    const name = (data.name || '').trim()
    const email = (data.email || '').trim()
    const subject = (data.subject || '').trim()
    const description = (data.description || '').trim()

    if (!name || !email || !subject || !description) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const parts = name.split(/\s+/)
    const firstName = parts[0]
    const lastName = parts.slice(1).join(' ') || ''

    const payload = {
      type: 'Issue_Report',
      firstName,
      lastName,
      email,
      phone: (data.phone || '').trim(),
      issue_category: (data.category || '').trim(),
      issue_location: (data.location || '').trim(),
      issue_subject: subject,
      issue_description: description,
      issue_image: '',
      sms_updates: yesNo(data.sms_updates),
      sms_promo: 'No',
      source: 'src_issue',
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
      console.error('[api/ask-morse] upstream status:', resp.status)
      return Response.json({ error: 'Upstream webhook failed' }, { status: 502 })
    }
    return Response.json({ success: true })
  } catch (err) {
    console.error('[api/ask-morse]:', err)
    return Response.json({ error: 'Internal error' }, { status: 500 })
  }
}
