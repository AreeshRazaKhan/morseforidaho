# A2P SMS Consent Pattern (Portable)

A reusable rule doc for projects that collect phone numbers through web forms
and forward them to GoHighLevel (or any CRM). Describes how to wire an A2P
10DLC-compliant SMS opt-in flow that is double-enforced on both the UI and the
server so non-consenting phone numbers can never leak into the SMS workflow.

Drop this file into `.claude/rules/` of any project using the same stack
(Next.js App Router + GHL webhook triggers). Read alongside the project's
existing forms/webhooks rule if one exists.

---

## The Problem

Carriers block unregistered or non-compliant SMS traffic. To stay A2P 10DLC
compliant, **every form that collects a phone number must capture explicit
SMS opt-in consent before sending the number to any automation that can SMS
the user**. The consent must be:

- Active (checkbox unchecked by default — no pre-ticked boxes)
- Tied to the specific number submitted (no stale opt-ins from old numbers)
- Enforced BEFORE the number reaches any SMS-enabled workflow

Two failure modes we're preventing:

1. User submits phone with no consent → A2P workflow still fires → carrier flag.
2. User submits phone, ticks consent, clears the phone, submits again → the
   previous consent follows the empty form state → stale opt-in recorded.

---

## Architecture

```
Client form
  └─> phone-gated consent checkbox (UI enforcement)
       │
       ▼
Local API route (/api/<form>)
  └─> Promise.all([
        fetch(primary webhook),   ← always fires
        postA2PWebhook(payload),  ← fires ONLY when sms_updates === 'Yes'
      ])
       │
       ▼
GHL workflow trigger URLs
  ├─ Primary form workflow (contact / volunteer / etc.)
  └─ A2P SMS Opt-in workflow (Inbound Webhook trigger)
```

- The A2P hook is a **side channel** — it never gates the form response.
- Both UI and server check consent. The server check is the source of truth.

---

## CRITICAL RULES

### 1. Consent lives next to the phone field

If the form has a phone input, it MUST have an SMS consent checkbox in the
same form. If it does not have a phone input, no consent checkbox is needed.

### 2. Checkbox state is derived from phone presence

| Phone field state | Checkbox state | Form validation |
|---|---|---|
| Empty / whitespace | Disabled, unchecked, visually dimmed | Not required |
| Non-empty (trimmed) | Enabled | **Required to be checked** |

### 3. Clearing the phone MUST auto-clear the consent

If the user types a phone, checks consent, then deletes the phone, the form
state MUST reset `sms_updates` to `false`. This prevents a stale opt-in from
following a different (or no) number into GHL.

### 4. Send consent as `'Yes'` / `'No'` strings

Never booleans. GHL webhook workflows handle string values reliably across
custom fields; booleans can collapse to empty in some trigger paths.

### 5. A2P webhook self-gates on consent

The server-side helper MUST verify `sms_updates === 'Yes'` before firing the
A2P hook, even though the UI also enforces it. Belt and suspenders — a
misconfigured client cannot bypass the server check.

### 6. A2P failure must NEVER gate the form response

The primary form workflow is the user-facing success. The A2P webhook is a
side channel. Wrap its fetch in `.catch(() => null)` so network errors don't
500 the form.

### 7. One shared A2P endpoint for every form

All forms in the project post to the **same** A2P webhook URL — hardcoded
once in the shared helper, not duplicated per route. The workflow's
If/Else condition differentiates by the `type` field in the payload if
per-form branching is needed.

---

## 1. Shared Helper (`src/lib/ghl.js` or equivalent)

```js
// A2P SMS opt-in shared webhook. Every form with a phone field POSTs here
// in parallel with its primary workflow hook. Resolves to null (no-op) when
// the user did not consent — keeps non-consenting submissions out of the
// SMS compliance flow entirely.
const A2P_WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/<hook-id>/webhook-trigger/<uuid>'

export const postA2PWebhook = (payload) => {
  if (payload?.sms_updates !== 'Yes' && payload?.sms_promo !== 'Yes') {
    return Promise.resolve(null)
  }
  return fetch(A2P_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch((err) => {
    console.error('[postA2PWebhook]:', err)
    return null
  })
}
```

**Also needed (shared with all form routes):**

```js
export const nowIso = () => new Date().toISOString()
export const yesNo = (val) => (val ? 'Yes' : 'No')
```

---

## 2. API Route Pattern (single primary webhook)

```js
import { nowIso, postA2PWebhook, yesNo } from '@/lib/ghl'

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/.../webhook-trigger/...'

export const POST = async (req) => {
  try {
    const data = await req.json()
    // ... validation ...

    const payload = {
      type: 'Contact_Form',
      firstName, lastName, email,
      phone: (data.phone || '').trim(),
      // ... other fields ...
      sms_updates: yesNo(data.sms_updates),
      sms_promo: 'No',
      source: 'src_contact',
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
      console.error('[api/contact] upstream status:', resp.status)
      return Response.json({ error: 'Upstream webhook failed' }, { status: 502 })
    }
    return Response.json({ success: true })
  } catch (err) {
    console.error('[api/contact]:', err)
    return Response.json({ error: 'Internal error' }, { status: 500 })
  }
}
```

### Variant: multiple primary webhooks

When a form fires to several primary workflows in parallel (the Morse
volunteer form fires to three), add A2P to the array but EXCLUDE it from the
"any success" check — it must not gate the response:

```js
const results = await Promise.all([
  ...WEBHOOK_URLS.map((url) =>
    fetch(url, { method: 'POST', headers: {...}, body: JSON.stringify(payload) })
      .catch((err) => ({ ok: false, err }))
  ),
  postA2PWebhook(payload),
])
const primaryResults = results.slice(0, WEBHOOK_URLS.length)
const anySuccess = primaryResults.some((r) => r && r.ok)
```

---

## 3. Form Component Pattern (React, `'use client'`)

Three changes to any form that has a phone input:

### a. `onChange` — auto-clear consent when phone empties

```jsx
const onChange = (e) => {
  const { name, value, type, checked } = e.target
  setForm((f) => {
    const next = { ...f, [name]: type === 'checkbox' ? checked : value }
    if (name === 'phone' && !value.trim()) next.sms_updates = false
    return next
  })
  if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
}
```

### b. `validate` — require consent when phone is filled

```jsx
const validate = () => {
  const next = {}
  // ... other field validations ...
  if (form.phone.trim() && !form.sms_updates) {
    next.sms_updates = 'SMS consent is required when a phone number is provided'
  }
  setErrors(next)
  return Object.keys(next).length === 0
}
```

### c. Checkbox markup — disabled + styled based on phone presence

```jsx
<fieldset className="pt-2">
  <legend className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold mb-2">
    SMS Consent
  </legend>
  <label
    className={`flex items-start gap-3 text-[12px] leading-relaxed ${
      form.phone.trim()
        ? 'text-parchment/60 cursor-pointer'
        : 'text-parchment/30 cursor-not-allowed'
    }`}
  >
    <input
      type="checkbox"
      name="sms_updates"
      checked={form.sms_updates}
      onChange={onChange}
      disabled={!form.phone.trim() || status === 'submitting'}
      className="mt-0.5 shrink-0 accent-gold disabled:cursor-not-allowed"
    />
    <span><SmsConsentText /></span>
  </label>
  {errors.sms_updates && (
    <span className="mt-1 block text-[12px] text-burgundy-light">{errors.sms_updates}</span>
  )}
</fieldset>
```

Swap Tailwind tokens for your project's palette. Structural logic stays.

### Consent text component

Put the full A2P legal consent text in a shared `<SmsConsentText />` component
so every form uses the same wording. The text must include:

- Campaign/organization name receiving consent
- That messages are automated
- Message frequency disclosure
- Message & data rates disclosure
- STOP/HELP keyword instructions
- Link to Privacy Policy and Terms of Service

Example template (replace bracketed placeholders):

> By checking this box, I consent to receive campaign updates from [ORG NAME]
> via automated text messages at the phone number provided. Message frequency
> may vary. Message and data rates may apply. Text STOP to opt out or HELP
> for help. View our Privacy Policy and Terms of Service.

---

## 4. GHL Workflow Setup

1. Create a new workflow named "A2P Compliant SMS Opt-in" (or similar).
2. **Trigger:** `Inbound Webhook` (NOT `Form Submitted` — that trigger only
   fires for GHL-native forms, never for custom website forms).
3. Copy the generated webhook URL into the `A2P_WEBHOOK_URL` constant in
   `src/lib/ghl.js`.
4. First step after the trigger: an **If/Else** condition on the payload's
   `sms_updates` field (equals `Yes`) — server already filters, this is a
   guardrail.
5. Branch on the payload's `type` field if you want per-form messaging
   (Contact_Form, Volunteer_Form, etc.).
6. **Publish** the workflow. Draft workflows do not fire on trigger.

---

## 5. Testing Recipe

Two levels — direct webhook test and end-to-end through the dev server.

### A. Direct webhook test (confirms GHL is receiving)

```bash
curl -s -w "HTTP %{http_code}\n" \
  -X POST "<A2P_WEBHOOK_URL>" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "Contact_Form",
    "firstName": "TEST",
    "lastName": "A2PTest",
    "email": "test-a2p@example.test",
    "phone": "+15035550101",
    "sms_updates": "Yes",
    "source": "src_contact",
    "submitted_at": "2026-04-22T00:00:00.000Z"
  }'
```

Expect `HTTP 200`. Check the workflow's Execution Logs for the run.

### B. End-to-end through the dev server

Run `npm run dev`, then for each form route:

```bash
# Consenting submission — A2P must fire
curl -X POST "http://localhost:3000/api/contact" \
  -H "Content-Type: application/json" \
  -d '{"firstName":"TEST","lastName":"LiveRoute","email":"t@example.test",
       "phone":"+15035550201","message":"test","sms_updates":true}'

# Non-consenting submission — A2P must NOT fire
curl -X POST "http://localhost:3000/api/contact" \
  -H "Content-Type: application/json" \
  -d '{"firstName":"TEST","lastName":"NoConsent","email":"t2@example.test",
       "phone":"+15035550202","message":"test","sms_updates":false}'
```

Both return `{"success":true}`. In GHL, only the first run shows up in the
A2P workflow's Execution Logs. The primary workflow logs both.

### Cleanup

Use an obvious test identifier (last name `A2PTest` or email domain
`@example.test`) so you can bulk-delete test contacts after verification.

---

## 6. Implementation Checklist

When adapting this pattern to a new project:

- [ ] Create the A2P workflow in GHL with `Inbound Webhook` trigger, publish it.
- [ ] Add `postA2PWebhook` helper to `src/lib/ghl.js` with the URL hardcoded.
- [ ] Identify every form that has a phone input — they all need this treatment.
- [ ] For each form's API route: add `postA2PWebhook(payload)` to the
      `Promise.all` alongside the primary fetch.
- [ ] For each form component:
  - [ ] `onChange` clears `sms_updates` when phone is emptied
  - [ ] `validate` errors when phone filled but consent unchecked
  - [ ] Checkbox `disabled` when phone empty
  - [ ] Legend reads `SMS Consent` — no Optional/Required suffix
  - [ ] Visual dim (opacity/color) when disabled
  - [ ] Validation error surfaces under the checkbox
- [ ] Verify the `sms_updates` field in every payload uses `yesNo(data.sms_updates)`
      (string `'Yes'`/`'No'`, not boolean).
- [ ] Direct webhook test → expect HTTP 200, check execution logs.
- [ ] End-to-end test with consenting + non-consenting submissions.
- [ ] Confirm the RSVP / event / any other niche form with a phone field is
      also covered. Easy to miss.

---

## 7. Common Mistakes

- **Only wiring the UI gate.** Without the server-side `postA2PWebhook`
  consent guard, a malformed client or direct API hit can bypass the check.
- **Hardcoding the A2P URL in every route.** Keep it in one place
  (`src/lib/ghl.js`) so you rotate it once.
- **Leaving the consent checkbox pre-checked.** A2P compliance requires
  ACTIVE opt-in — the default state must be unchecked.
- **Forgetting to auto-clear consent on phone-empty.** Users edit forms
  non-linearly. A stale opt-in is a compliance violation even if unintended.
- **Putting A2P in the `anySuccess` gate.** A missing env var or a transient
  A2P-side failure should never 502 the user-facing form.
- **Using booleans in the payload.** GHL webhook workflows are more reliable
  with `'Yes'`/`'No'` strings, especially when the value is read inside
  If/Else conditions or written to custom string fields.
