'use client'

import Link from 'next/link'
import { useState } from 'react'

import SmsConsentText from '@/components/ui/sms-consent'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Mask user input as (XXX) XXX-XXXX while typing. Strips non-digits, caps at
// 10 digits, and lays them into the US format so the payload sent to GHL is
// always in the same shape regardless of what the user typed or pasted.
const formatPhone = (raw) => {
  const digits = (raw || '').replace(/\D/g, '').slice(0, 10)
  if (digits.length === 0) return ''
  if (digits.length <= 3) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    sms_updates: false,
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => {
      const rawValue = type === 'checkbox' ? checked : value
      const nextValue = name === 'phone' ? formatPhone(rawValue) : rawValue
      const next = { ...f, [name]: nextValue }
      // Clearing the phone disables SMS consent — reset the box too so we
      // never send a stale opt-in if the user re-enters a different number.
      if (name === 'phone' && !nextValue) next.sms_updates = false
      return next
    })
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'Required'
    if (!form.lastName.trim()) next.lastName = 'Required'
    if (!form.email.trim()) next.email = 'Required'
    else if (!EMAIL_RE.test(form.email.trim())) next.email = 'Invalid email'
    if (!form.message.trim()) next.message = 'Required'
    if (form.phone.trim() && !form.sms_updates) {
      next.sms_updates = 'SMS consent is required when a phone number is provided'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    setErrorMessage('')
    try {
      const resp = await fetch('/api/contact', {
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
      setForm({
        firstName: '', lastName: '', email: '', phone: '',
        message: '', sms_updates: false,
      })
    } catch (err) {
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
      className="col-span-12 lg:col-span-7 relative bg-navy text-parchment rounded-2xl p-10 md:p-14 overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-4 border border-gold/25 pointer-events-none rounded-xl" />
      <div aria-hidden="true" className="absolute inset-[22px] border border-gold/10 pointer-events-none rounded-lg" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-6 font-display font-extrabold italic text-[220px] text-gold/[0.06] leading-none">
        M
      </span>

      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-10 bg-gold" />
          <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
            Chapter · II · Send a Message
          </span>
        </div>
        <h2 className="font-display font-bold text-parchment text-4xl md:text-5xl leading-[1.05] max-w-md">
          A Letter to the <span className="italic text-gold font-medium">Candidate.</span>
        </h2>
        <p className="mt-6 text-parchment/70 text-sm md:text-base max-w-lg leading-relaxed">
          Fill the form below and the campaign will route your note to the right desk.
          Required fields are marked with a gold bullet.
        </p>
      </div>

      {status === 'success' && (
        <div className="relative mt-10 border-l-[3px] border-gold bg-gold/10 px-6 py-5 rounded-r-xl">
          <div className="font-display font-bold text-gold text-lg">Letter received.</div>
          <p className="mt-2 text-parchment/80 text-sm leading-relaxed">
            The campaign will respond within two business days. Thank you for writing.
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
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={onChange}
              className={fieldClass('firstName')}
              placeholder="Jane"
              disabled={status === 'submitting'}
            />
            {errors.firstName && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.firstName}</span>}
          </label>
          <label className="block">
            <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
              <span className="size-1 rounded-full bg-gold" />
              Last Name
            </span>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={onChange}
              className={fieldClass('lastName')}
              placeholder="Doe"
              disabled={status === 'submitting'}
            />
            {errors.lastName && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.lastName}</span>}
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
              <span className="size-1 rounded-full bg-gold" />
              Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              className={fieldClass('email')}
              placeholder="you@idaho.gov"
              disabled={status === 'submitting'}
            />
            {errors.email && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.email}</span>}
          </label>
          <label className="block">
            <span className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
              Phone · Optional
            </span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={onChange}
              className={fieldClass('phone')}
              placeholder="(208) 555-0199"
              disabled={status === 'submitting'}
            />
          </label>
        </div>

        <label className="block">
          <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
            <span className="size-1 rounded-full bg-gold" />
            Message
          </span>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={5}
            className={`${fieldClass('message')} resize-y`}
            placeholder="Tell David what's on your mind…"
            disabled={status === 'submitting'}
          />
          {errors.message && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.message}</span>}
        </label>

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

        <div className="pt-4 flex flex-col md:flex-row md:items-center gap-6 justify-between border-t border-gold/15">
          <p className="text-[12px] text-parchment/50 leading-relaxed max-w-sm">
            By submitting you agree to the{' '}
            <Link href="/terms-and-conditions" className="text-gold hover:underline">Terms of Service</Link>{' '}
            and{' '}
            <Link href="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.
          </p>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-light text-parchment px-8 py-5 text-xs font-bold uppercase tracking-[1.8px] transition-colors shrink-0 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
          >
            {status === 'submitting' ? 'Sending…' : 'Send the Letter →'}
          </button>
        </div>

        {status === 'error' && (
          <p className="text-[12px] text-burgundy-light border-l-2 border-burgundy-light pl-3">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm
