import { postMultipleWebhooks, nowIso, yesNo } from '@/lib/ghl'

const WEBHOOK_UUIDS = [
  '23834100-4e00-4579-82e7-f9ec69ed8542',
  'df947411-0c7e-4a6c-8c2e-7f20291c333f',
  '19e7758c-f5c5-44fa-a770-5c18cefa0645',
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

    const results = await postMultipleWebhooks(WEBHOOK_UUIDS, payload)
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
