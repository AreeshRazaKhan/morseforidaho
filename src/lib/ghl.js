// ── GHL SHARED MODULE ─────────────────────────────────────────
// Covers two integrations:
//  1. Webhook triggers for forms     — per .claude/rules/ghl-forms-webhooks.md
//  2. Events custom object fetching  — per .claude/rules/ghl-events-integration.md

const HOOK_ID = 'HK7KWJYbw33yisOBMGEO'
const GHL_BASE_URL = 'https://services.leadconnectorhq.com'
const GHL_API_KEY = process.env.GHL_API_KEY
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID

const EVENTS_SCHEMA_KEY = 'custom_objects.events'

// ══════════════════════════════════════════════════════════════
// 1. WEBHOOK HELPERS  (forms → GHL workflow triggers)
// ══════════════════════════════════════════════════════════════

export const ghlWebhookUrl = (uuid) =>
  `${GHL_BASE_URL}/hooks/${HOOK_ID}/webhook-trigger/${uuid}`

export const postWebhook = async (uuid, payload) =>
  fetch(ghlWebhookUrl(uuid), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

export const postMultipleWebhooks = async (uuids, payload) =>
  Promise.all(
    uuids.map((uuid) =>
      postWebhook(uuid, payload).catch((err) => ({ ok: false, err }))
    )
  )

export const nowIso = () => new Date().toISOString()

export const yesNo = (val) => (val ? 'Yes' : 'No')

// ══════════════════════════════════════════════════════════════
// 2. REST HEADERS + CONTACT/APPOINTMENT HELPERS
// ══════════════════════════════════════════════════════════════

const restHeaders = () => ({
  Authorization: `Bearer ${GHL_API_KEY}`,
  Version: '2021-07-28',
  Accept: 'application/json',
})

export const ghlRestHeaders = () => ({
  ...restHeaders(),
  'Content-Type': 'application/json',
})

const parseTimeLabel = (label) => {
  if (!label) return '12:00'
  const m = label.match(/(\d+):(\d+)\s*(AM|PM)/i)
  if (!m) return '12:00'
  let hours = parseInt(m[1], 10)
  const minutes = m[2]
  const period = m[3].toUpperCase()
  if (period === 'PM' && hours !== 12) hours += 12
  if (period === 'AM' && hours === 12) hours = 0
  return `${String(hours).padStart(2, '0')}:${minutes}`
}

export const eventIsoStart = (event) => {
  const raw = event?.date?.raw
  if (!raw) return null
  return `${raw}T${parseTimeLabel(event.time)}:00`
}

export const searchGhlContactByEmail = async (email) => {
  if (!GHL_API_KEY || !GHL_LOCATION_ID) return null
  try {
    const url = `${GHL_BASE_URL}/contacts/search/duplicate?locationId=${GHL_LOCATION_ID}&email=${encodeURIComponent(email)}`
    const resp = await fetch(url, { headers: restHeaders() })
    if (!resp.ok) return null
    const json = await resp.json()
    return json?.contact?.id || null
  } catch (err) {
    console.error('[ghl.searchContact]:', err)
    return null
  }
}

export const createGhlAppointment = async ({ contactId, event }) => {
  if (!GHL_API_KEY || !GHL_LOCATION_ID || !contactId) return null
  const isoStart = eventIsoStart(event)
  if (!isoStart) return null
  try {
    const start = new Date(isoStart)
    const end = new Date(start.getTime() + 60 * 60 * 1000)
    const calendarId = process.env.GHL_EVENTS_CALENDAR_ID || 'UTM5EkrGwiZjQyc19WGN'
    const resp = await fetch(`${GHL_BASE_URL}/calendars/events/appointments`, {
      method: 'POST',
      headers: ghlRestHeaders(),
      body: JSON.stringify({
        calendarId,
        locationId: GHL_LOCATION_ID,
        contactId,
        title: `RSVP: ${event.title}`,
        appointmentStatus: 'confirmed',
        startTime: start.toISOString(),
        endTime: end.toISOString(),
        timezone: 'America/Boise',
        notes: 'RSVP submitted via campaign website',
      }),
    })
    return resp.ok
  } catch (err) {
    console.error('[ghl.createAppointment]:', err)
    return null
  }
}

// ══════════════════════════════════════════════════════════════
// 3. EVENTS CUSTOM OBJECT — list + single fetch
// Per .claude/rules/ghl-events-integration.md
// ══════════════════════════════════════════════════════════════

// Slug → human-readable time label. 30-minute increments, 6:00 AM through 9:00 PM.
// Slug format: {h}{mm}_{am|pm} — hour NOT zero-padded, minutes ARE.
const TIME_LABELS = {
  '600_am': '6:00 AM', '630_am': '6:30 AM',
  '700_am': '7:00 AM', '730_am': '7:30 AM',
  '800_am': '8:00 AM', '830_am': '8:30 AM',
  '900_am': '9:00 AM', '930_am': '9:30 AM',
  '1000_am': '10:00 AM', '1030_am': '10:30 AM',
  '1100_am': '11:00 AM', '1130_am': '11:30 AM',
  '1200_pm': '12:00 PM', '1230_pm': '12:30 PM',
  '100_pm': '1:00 PM', '130_pm': '1:30 PM',
  '200_pm': '2:00 PM', '230_pm': '2:30 PM',
  '300_pm': '3:00 PM', '330_pm': '3:30 PM',
  '400_pm': '4:00 PM', '430_pm': '4:30 PM',
  '500_pm': '5:00 PM', '530_pm': '5:30 PM',
  '600_pm': '6:00 PM', '630_pm': '6:30 PM',
  '700_pm': '7:00 PM', '730_pm': '7:30 PM',
  '800_pm': '8:00 PM', '830_pm': '8:30 PM',
  '900_pm': '9:00 PM',
}

// Slug → human-readable category label. Note `protest__march` uses a double
// underscore — that's how GHL slugifies the "/" in "Protest / March".
const CATEGORY_LABELS = {
  rally: 'Rally',
  town_hall: 'Town Hall',
  fundraiser: 'Fundraiser',
  debate: 'Debate',
  press_conference: 'Press Conference',
  community_meetup: 'Community Meetup',
  volunteer_drive: 'Volunteer Drive',
  doortodoor_campaign: 'Door-to-Door Campaign',
  victory_celebration: 'Victory Celebration',
  protest__march: 'Protest / March',
  other: 'Other',
}

const MONTH_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

// Parse GHL's YYYY-MM-DD string to a pre-split object the UI consumes directly.
// Suffix 'T00:00:00' avoids UTC/local drift that would otherwise shift the day.
// Returns null for missing/invalid input — callers must handle null.
const parseDate = (dateStr) => {
  if (!dateStr || typeof dateStr !== 'string') return null
  const d = new Date(dateStr + 'T00:00:00')
  if (Number.isNaN(d.getTime())) return null
  return {
    month: MONTH_SHORT[d.getMonth()],
    day: String(d.getDate()).padStart(2, '0'),
    year: String(d.getFullYear()),
    raw: dateStr,
  }
}

// Always return a safe date object so the UI never has to null-check .date
const EMPTY_DATE = { month: '', day: '', year: '', raw: '' }

// Normalize a raw GHL custom object record into the shape consumed by the UI.
export const normalizeEvent = (record) => {
  const p = record?.properties || {}
  const startDate = parseDate(p.event_date)
  const endDate = parseDate(p.event_end_date)
  // `date` is always an object so the UI never null-checks. When start is
  // missing but end is present, fall back to end so events with only an end
  // date render cleanly. Truly malformed records (neither set) still surface
  // at the top of the sorted list via EMPTY_DATE → epoch 0.
  const displayDate = startDate || endDate || EMPTY_DATE

  // Keep start and end times cleanly separated — no fallback conflation.
  // UI uses formatEventTime() to render the appropriate combination.
  const startTime = TIME_LABELS[p.select_time] || p.select_time || ''
  const endTime = TIME_LABELS[p.end_time] || p.end_time || ''

  const location = p.event_location || ''
  const categorySlug = p.event_category || 'other'
  const imageList = Array.isArray(p.event_image) ? p.event_image : []
  const firstImage = imageList[0]?.url || '/placeholder-event.svg'

  return {
    id: record?.id || '',
    title: p.event_name || 'Untitled Event',
    description: p.event_description || '',
    date: displayDate,
    endDate,
    time: startTime,    // start time (empty string if unset)
    endTime,            // end time (empty string if unset)
    location,
    address: location, // alias — RSVP form reads `address`, cards read `location`
    image: firstImage,
    type: CATEGORY_LABELS[categorySlug] || categorySlug,
    source: 'ghl',
  }
}

// Shared display helper — single source of truth for start/end time rendering.
// Returns '' when both times are unset so consumers can conditionally hide the
// whole time row with a simple `formatEventTime(event) && (...)` guard.
export const formatEventTime = (event) => {
  const time = event?.time || ''
  const endTime = event?.endTime || ''
  if (time && endTime) return `${time} – ${endTime}`
  if (time) return time
  if (endTime) return `Ends ${endTime}`
  return ''
}

// List all events. POST /objects/custom_objects.events/records/search
export const fetchGHLEvents = async () => {
  if (!GHL_API_KEY || !GHL_LOCATION_ID) {
    console.warn('[fetchGHLEvents] GHL_API_KEY or GHL_LOCATION_ID not set')
    return []
  }
  try {
    const res = await fetch(
      `${GHL_BASE_URL}/objects/${EVENTS_SCHEMA_KEY}/records/search`,
      {
        method: 'POST',
        headers: ghlRestHeaders(),
        body: JSON.stringify({
          locationId: GHL_LOCATION_ID,
          page: 1,
          pageLimit: 50,
          query: '',
          searchAfter: [],
        }),
        next: { revalidate: 60 },
      }
    )

    if (!res.ok) {
      console.error('[fetchGHLEvents] status:', res.status)
      return []
    }

    const data = await res.json()
    const records = data.records ?? []

    return records
      .map(normalizeEvent)
      .sort((a, b) => {
        const da = a.date.raw ? new Date(a.date.raw) : new Date(0)
        const db = b.date.raw ? new Date(b.date.raw) : new Date(0)
        return da - db
      })
  } catch (err) {
    console.error('[fetchGHLEvents]:', err)
    return []
  }
}

// Single event. GET /objects/custom_objects.events/records/{id}
export const fetchGHLEvent = async (eventId) => {
  if (!GHL_API_KEY || !GHL_LOCATION_ID || !eventId) return null
  try {
    const res = await fetch(
      `${GHL_BASE_URL}/objects/${EVENTS_SCHEMA_KEY}/records/${eventId}`,
      { headers: restHeaders(), next: { revalidate: 60 } }
    )

    if (!res.ok) {
      if (res.status !== 404) console.error('[fetchGHLEvent] status:', res.status)
      return null
    }

    const data = await res.json()
    const record = data.record ?? data
    if (!record?.id && !record?.properties) return null

    return normalizeEvent(record)
  } catch (err) {
    console.error('[fetchGHLEvent]:', err)
    return null
  }
}
