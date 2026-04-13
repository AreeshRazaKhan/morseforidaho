'use client'

import Link from 'next/link'
import { useState } from 'react'

import { SMS_CONSENT } from '@/constants/a2p'

// Values below are locked to .claude/rules/ghl-forms-webhooks.md §2.
// Do not edit the string values without updating the GHL workflow tags.
const HELP_OPTIONS = [
  'Host a Fundraiser',
  'Phone Banking',
  'Volunteer Coordination',
  'Digital/Social Media',
  'Door Knocking',
  'Host a Meet & Greet',
  'Event Planning',
  'Media',
]

const COUNTIES = [
  'Ada', 'Adams', 'Bannock', 'Bear Lake', 'Benewah', 'Bingham', 'Blaine',
  'Boise', 'Bonner', 'Bonneville', 'Boundary', 'Butte', 'Camas', 'Canyon',
  'Caribou', 'Cassia', 'Clark', 'Clearwater', 'Custer', 'Elmore', 'Franklin',
  'Fremont', 'Gem', 'Gooding', 'Idaho', 'Jefferson', 'Jerome', 'Kootenai',
  'Latah', 'Lemhi', 'Lewis', 'Lincoln', 'Madison', 'Minidoka', 'Nez Perce',
  'Oneida', 'Owyhee', 'Payette', 'Power', 'Shoshone', 'Teton', 'Twin Falls',
  'Valley', 'Washington',
]
const REGIONS = [
  'North Idaho (Panhandle)',
  'North Central Idaho',
  'Southwestern Idaho',
  'South Central Idaho',
  'Southeastern Idaho',
  'Eastern Idaho',
  'Central Idaho',
]
const EXPERIENCE = [
  'None',
  'Some Volunteering',
  'Regular Volunteer',
  'Campaign Staff',
  'Campaign Management',
  'Elected/Appointed Office',
]
const AVAILABILITY = [
  '1-2 hours/week',
  '3-5 hours/week',
  '5-10 hours/week',
  '10-20 hours/week',
  'Full-time',
  'Remote Help Only',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  zipCode: '',
  county: '',
  region: '',
  registeredVoter: '',
  campaignExperience: '',
  helpOptions: [],
  availability: '',
  issues: '',
  anythingElse: '',
  sms_updates: false,
}

const VolunteerForm = () => {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const toggleHelpOption = (option) => {
    setForm((f) => ({
      ...f,
      helpOptions: f.helpOptions.includes(option)
        ? f.helpOptions.filter((r) => r !== option)
        : [...f.helpOptions, option],
    }))
    if (errors.helpOptions) setErrors((prev) => ({ ...prev, helpOptions: null }))
  }

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'Required'
    if (!form.lastName.trim()) next.lastName = 'Required'
    if (!form.email.trim()) next.email = 'Required'
    else if (!EMAIL_RE.test(form.email.trim())) next.email = 'Invalid email'
    if (!form.region) next.region = 'Select a region'
    if (!form.registeredVoter) next.registeredVoter = 'Required'
    if (!form.campaignExperience) next.campaignExperience = 'Required'
    if (form.helpOptions.length === 0) next.helpOptions = 'Pick at least one'
    if (!form.availability) next.availability = 'Required'
    if (!form.issues.trim()) next.issues = 'Required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    setErrorMessage('')
    try {
      const resp = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = await resp.json().catch(() => ({}))
      if (!resp.ok) {
        setStatus('error')
        setErrorMessage(json.error || 'Something went wrong.')
        return
      }
      setStatus('success')
      setForm(initial)
    } catch {
      setStatus('error')
      setErrorMessage('Network error — please try again.')
    }
  }

  const fieldClass = (name) =>
    `mt-2 w-full bg-navy-ink/60 border text-parchment px-5 py-4 font-body focus:outline-none focus:border-gold transition-colors rounded-none ${
      errors[name] ? 'border-burgundy-light' : 'border-gold/20'
    }`

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="col-span-12 lg:col-span-7 relative bg-navy-deep border border-gold/20 rounded-2xl p-10 md:p-14 overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-4 border border-gold/15 pointer-events-none rounded-xl" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-6 font-display font-extrabold italic text-[200px] text-gold/[0.06] leading-none">
        V
      </span>

      <div className="relative">
        <span className="text-[12px] tracking-[2.5px] uppercase text-gold font-bold">
          I · Your Details
        </span>
        <h3 className="mt-4 font-display font-bold text-parchment text-3xl md:text-4xl leading-tight">
          Enlist in the <span className="italic text-gold font-medium">Final Push.</span>
        </h3>
      </div>

      {status === 'success' && (
        <div className="relative mt-10 border-l-[3px] border-gold bg-gold/10 px-6 py-5 rounded-r-xl">
          <div className="font-display font-bold text-gold text-lg">You're in.</div>
          <p className="mt-2 text-parchment/80 text-sm leading-relaxed">
            An organizer will reach out within two business days.
          </p>
        </div>
      )}

      <div className="relative mt-12 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
              <span className="size-1 rounded-full bg-gold" />
              First Name
            </span>
            <input type="text" name="firstName" value={form.firstName} onChange={onChange}
              className={fieldClass('firstName')} placeholder="Jane" disabled={status === 'submitting'} />
            {errors.firstName && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.firstName}</span>}
          </label>
          <label className="block">
            <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
              <span className="size-1 rounded-full bg-gold" />
              Last Name
            </span>
            <input type="text" name="lastName" value={form.lastName} onChange={onChange}
              className={fieldClass('lastName')} placeholder="Doe" disabled={status === 'submitting'} />
            {errors.lastName && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.lastName}</span>}
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
              <span className="size-1 rounded-full bg-gold" />
              Email
            </span>
            <input type="email" name="email" value={form.email} onChange={onChange}
              className={fieldClass('email')} placeholder="you@idaho.gov" disabled={status === 'submitting'} />
            {errors.email && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.email}</span>}
          </label>
          <label className="block">
            <span className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
              Phone · Optional
            </span>
            <input type="tel" name="phone" value={form.phone} onChange={onChange}
              className={fieldClass('phone')} placeholder="(208) 555-0199" disabled={status === 'submitting'} />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">ZIP Code</span>
            <input type="text" name="zipCode" value={form.zipCode} onChange={onChange}
              className={fieldClass('zipCode')} placeholder="83702" disabled={status === 'submitting'} />
          </label>
          <label className="block">
            <span className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">County</span>
            <select name="county" value={form.county} onChange={onChange}
              className={`${fieldClass('county')} appearance-none`} disabled={status === 'submitting'}>
              <option value="">Select a county…</option>
              {COUNTIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
            <span className="size-1 rounded-full bg-gold" />
            Region
          </span>
          <select name="region" value={form.region} onChange={onChange}
            className={`${fieldClass('region')} appearance-none`} disabled={status === 'submitting'}>
            <option value="" disabled>Select a region…</option>
            {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          {errors.region && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.region}</span>}
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
              <span className="size-1 rounded-full bg-gold" />
              Registered to Vote in Idaho?
            </span>
            <select name="registeredVoter" value={form.registeredVoter} onChange={onChange}
              className={`${fieldClass('registeredVoter')} appearance-none`} disabled={status === 'submitting'}>
              <option value="" disabled>Select…</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.registeredVoter && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.registeredVoter}</span>}
          </label>
          <label className="block">
            <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
              <span className="size-1 rounded-full bg-gold" />
              Prior Campaign Experience
            </span>
            <select name="campaignExperience" value={form.campaignExperience} onChange={onChange}
              className={`${fieldClass('campaignExperience')} appearance-none`} disabled={status === 'submitting'}>
              <option value="" disabled>Select…</option>
              {EXPERIENCE.map((x) => <option key={x} value={x}>{x}</option>)}
            </select>
            {errors.campaignExperience && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.campaignExperience}</span>}
          </label>
        </div>

        <fieldset>
          <legend className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold mb-4">
            <span className="size-1 rounded-full bg-gold" />
            How Would You Like to Help?
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {HELP_OPTIONS.map((option) => {
              const checked = form.helpOptions.includes(option)
              return (
                <label
                  key={option}
                  className={`flex items-center gap-3 bg-navy-ink/40 border px-4 py-3 cursor-pointer transition-colors ${
                    checked ? 'border-gold' : 'border-gold/15 hover:border-gold/40'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleHelpOption(option)}
                    className="accent-gold shrink-0"
                    disabled={status === 'submitting'}
                  />
                  <span className="font-display text-parchment text-sm font-bold">
                    {option}
                  </span>
                </label>
              )
            })}
          </div>
          {errors.helpOptions && <span className="mt-2 block text-[12px] text-burgundy-light">{errors.helpOptions}</span>}
        </fieldset>

        <label className="block">
          <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
            <span className="size-1 rounded-full bg-gold" />
            Availability
          </span>
          <select name="availability" value={form.availability} onChange={onChange}
            className={`${fieldClass('availability')} appearance-none`} disabled={status === 'submitting'}>
            <option value="" disabled>Select…</option>
            {AVAILABILITY.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
          {errors.availability && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.availability}</span>}
        </label>

        <label className="block">
          <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
            <span className="size-1 rounded-full bg-gold" />
            What Issues Matter Most?
          </span>
          <textarea name="issues" value={form.issues} onChange={onChange} rows={3}
            className={`${fieldClass('issues')} resize-y`}
            placeholder="Courtroom fairness, public safety, veterans, constitutional interpretation…"
            disabled={status === 'submitting'} />
          {errors.issues && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.issues}</span>}
        </label>

        <label className="block">
          <span className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
            Anything Else to Share · Optional
          </span>
          <textarea name="anythingElse" value={form.anythingElse} onChange={onChange} rows={3}
            className={`${fieldClass('anythingElse')} resize-y`}
            placeholder="Skills, languages, mobility notes, or anything the organizer should know…"
            disabled={status === 'submitting'} />
        </label>

        <fieldset className="pt-2">
          <legend className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold mb-2">
            SMS Consent · Optional
          </legend>
          <label className="flex items-start gap-3 text-parchment/60 text-[12px] leading-relaxed cursor-pointer">
            <input type="checkbox" name="sms_updates" checked={form.sms_updates} onChange={onChange}
              className="mt-0.5 shrink-0 accent-gold" />
            <span>{SMS_CONSENT}</span>
          </label>
        </fieldset>

        <div className="pt-4 border-t border-gold/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-[12px] text-parchment/50 leading-relaxed max-w-sm">
            By submitting you agree to the{' '}
            <Link href="/terms-of-service" className="text-gold hover:underline">Terms of Service</Link>{' '}
            and{' '}
            <Link href="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.
          </p>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-light text-parchment px-8 py-5 text-xs font-bold uppercase tracking-[1.8px] transition-colors shrink-0 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
          >
            {status === 'submitting' ? 'Signing up…' : 'Count Me In →'}
          </button>
        </div>

        {status === 'error' && (
          <p className="text-[12px] text-burgundy-light border-l-2 border-burgundy-light pl-3">{errorMessage}</p>
        )}
      </div>
    </form>
  )
}

export default VolunteerForm
