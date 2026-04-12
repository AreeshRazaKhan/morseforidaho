import { nowIso, yesNo } from '@/lib/ghl'

// Three parallel webhooks per rule §2. Each triggers a different GHL
// workflow. All three use the Morse account's location-scoped hook ID
// (`BlWviZhz7Vyrg1cbGSYr`). Succeeds if any return 2xx.
const WEBHOOK_URLS = [
  'https://services.leadconnectorhq.com/hooks/BlWviZhz7Vyrg1cbGSYr/webhook-trigger/6bb08aa8-e17a-4594-aba5-e7b66178f2ab',
  'https://services.leadconnectorhq.com/hooks/BlWviZhz7Vyrg1cbGSYr/webhook-trigger/f9ab8e9f-646d-4404-9e06-e79b11b6f249',
  'https://services.leadconnectorhq.com/hooks/BlWviZhz7Vyrg1cbGSYr/webhook-trigger/dce7c6fe-1b1c-4870-b162-b050c9d7c88a',
]

export const POST = async (req) => {
  try {
    const data = await req.json()
    const firstName = (data.firstName || '').trim()
    const lastName = (data.lastName || '').trim()
    const email = (data.email || '').trim()

    if (!firstName || !lastName || !email) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // helpOptions is a multi-select → comma-separated string per rule §2.
    // availability is a single select per rule §2 — keep as string.
    const helpOptions = Array.isArray(data.helpOptions)
      ? data.helpOptions.join(', ')
      : (data.helpOptions || '').toString()

    const payload = {
      type: 'Volunteer_Form',
      firstName,
      lastName,
      email,
      phone: (data.phone || '').trim(),
      zipCode: (data.zipCode || '').trim(),
      county: (data.county || '').trim(),
      region: (data.region || '').trim(),
      registeredVoter: (data.registeredVoter || '').trim(),
      campaignExperience: (data.campaignExperience || '').trim(),
      helpOptions,
      availability: (data.availability || '').trim(),
      issues: (data.issues || '').trim(),
      anythingElse: (data.anythingElse || '').trim(),
      sms_updates: yesNo(data.sms_updates),
      sms_promo: yesNo(data.sms_promo),
      source: 'src_volunteer',
      submitted_at: nowIso(),
    }

    const results = await Promise.all(
      WEBHOOK_URLS.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch((err) => ({ ok: false, err }))
      )
    )
    const anySuccess = results.some((r) => r && r.ok)
    if (!anySuccess) {
      console.error('[api/volunteer] all webhooks failed')
      return Response.json({ error: 'Upstream webhooks failed' }, { status: 502 })
    }
    return Response.json({ success: true })
  } catch (err) {
    console.error('[api/volunteer]:', err)
    return Response.json({ error: 'Internal error' }, { status: 500 })
  }
}
