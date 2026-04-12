'use client'

import Link from 'next/link'
import PropTypes from 'prop-types'
import { useState } from 'react'

import { SMS_UPDATES_CONSENT, SMS_PROMO_CONSENT } from '@/constants/a2p'

// GHL rule §4 lists only First Name, Last Name, Email, Contact Number.
// The A2P 10DLC SOP (Operation 1776) requires both SMS consent checkboxes
// on EVERY form that collects phone numbers — A2P compliance overrides
// the GHL convention because carriers block unregistered/non-compliant
// traffic. SMS consent is sent to GHL as 'Yes'/'No' strings per rule §2.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  sms_updates: false,
  sms_promo: false,
}

const RsvpForm = ({ event }) => {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'Required'
    if (!form.lastName.trim()) next.lastName = 'Required'
    if (!form.email.trim()) next.email = 'Required'
    else if (!EMAIL_RE.test(form.email.trim())) next.email = 'Invalid email'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    setErrorMessage('')
    try {
      const resp = await fetch('/api/events/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, eventId: event.id }),
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
        M
      </span>

      <div className="relative">
        <span className="text-[12px] tracking-[2.5px] uppercase text-gold font-bold">
          I · Your Seat
        </span>
        <h3 className="mt-4 font-display font-bold text-parchment text-3xl md:text-4xl leading-tight">
          Reserve Your <span className="italic text-gold font-medium">Place.</span>
        </h3>
      </div>

      {status === 'success' && (
        <div className="relative mt-10 border-l-[3px] border-gold bg-gold/10 px-6 py-5 rounded-r-xl">
          <div className="font-display font-bold text-gold text-lg">Seat held.</div>
          <p className="mt-2 text-parchment/80 text-sm leading-relaxed">
            A confirmation will land in your inbox shortly. See you on the docket.
          </p>
        </div>
      )}

      <div className="relative mt-12 space-y-6">
        <div className="border-l-[3px] border-gold pl-5 py-2">
          <div className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
            {event.type || 'Your Stop'}
          </div>
          <div className="mt-2 font-display font-bold text-parchment text-xl md:text-2xl leading-tight">
            {event.title}
          </div>
          <div className="mt-1 text-[12px] tracking-[1.5px] uppercase text-parchment/60">
            {event.date?.month} {event.date?.day}
            {event.time ? ` · ${event.time}` : ''}
            {event.location ? ` · ${event.location}` : ''}
          </div>
        </div>

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
              placeholder="Barbara"
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
              placeholder="Kahl"
              disabled={status === 'submitting'}
            />
            {errors.lastName && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.lastName}</span>}
          </label>
        </div>

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
            placeholder="you@email.com"
            disabled={status === 'submitting'}
          />
          {errors.email && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.email}</span>}
        </label>

        <label className="block">
          <span className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
            Contact Number · Optional
          </span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onChange}
            className={fieldClass('phone')}
            placeholder="(503) 555-1234"
            disabled={status === 'submitting'}
          />
        </label>

        <fieldset className="space-y-4 pt-2">
          <legend className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold mb-2">
            SMS Consent · Optional
          </legend>
          <label className="flex items-start gap-3 text-parchment/60 text-[12px] leading-relaxed cursor-pointer">
            <input
              type="checkbox"
              name="sms_updates"
              checked={form.sms_updates}
              onChange={onChange}
              className="mt-0.5 shrink-0 accent-gold"
              disabled={status === 'submitting'}
            />
            <span>{SMS_UPDATES_CONSENT}</span>
          </label>
          <label className="flex items-start gap-3 text-parchment/60 text-[12px] leading-relaxed cursor-pointer">
            <input
              type="checkbox"
              name="sms_promo"
              checked={form.sms_promo}
              onChange={onChange}
              className="mt-0.5 shrink-0 accent-gold"
              disabled={status === 'submitting'}
            />
            <span>{SMS_PROMO_CONSENT}</span>
          </label>
        </fieldset>

        <div className="pt-4 border-t border-gold/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-[12px] text-parchment/50 leading-relaxed max-w-sm">
            Your seat is held by email confirmation. See the{' '}
            <Link href="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.
          </p>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-light text-parchment px-8 py-5 text-xs font-bold uppercase tracking-[1.8px] transition-colors shrink-0 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
          >
            {status === 'submitting' ? 'Holding seat…' : 'Confirm My Seat →'}
          </button>
        </div>

        {status === 'error' && (
          <p className="text-[12px] text-burgundy-light border-l-2 border-burgundy-light pl-3">{errorMessage}</p>
        )}
      </div>
    </form>
  )
}

RsvpForm.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    time: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.shape({
      month: PropTypes.string,
      day: PropTypes.string,
      year: PropTypes.string,
      raw: PropTypes.string,
    }),
  }).isRequired,
}

export default RsvpForm
