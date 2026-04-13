'use client'

import Link from 'next/link'
import { useState } from 'react'

import SmsConsentText from '@/components/ui/sms-consent'

const TOPICS = [
  'Judicial Philosophy',
  'Courtroom Experience',
  'Constitutional Law',
  'Public Safety',
  'Victims & Due Process',
  'Veterans & Service',
  'The Fourth District',
  'The Bench vs. the Legislature',
  'Something Personal',
  'Other',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const AskMorseForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    category: '',
    subject: '',
    description: '',
    sms_updates: false,
  })
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
    if (!form.name.trim()) next.name = 'Required'
    if (!form.email.trim()) next.email = 'Required'
    else if (!EMAIL_RE.test(form.email.trim())) next.email = 'Invalid email'
    if (!form.category) next.category = 'Pick a topic'
    if (!form.subject.trim()) next.subject = 'Required'
    if (!form.description.trim()) next.description = 'Required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    setErrorMessage('')
    try {
      const resp = await fetch('/api/ask-morse', {
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
        name: '', email: '', phone: '', location: '',
        category: '', subject: '', description: '', sms_updates: false,
      })
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
      className="col-span-12 lg:col-span-7 relative bg-navy text-parchment rounded-2xl p-10 md:p-14 overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-4 border border-gold/25 pointer-events-none rounded-xl" />
      <div aria-hidden="true" className="absolute inset-[22px] border border-gold/10 pointer-events-none rounded-lg" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-6 font-display font-extrabold italic text-[220px] text-gold/[0.06] leading-none">
        ?
      </span>

      <div className="relative">
        <span className="text-[12px] tracking-[2.5px] uppercase text-gold font-bold">
          I · The Letter
        </span>
        <h3 className="mt-4 font-display font-bold text-parchment text-3xl md:text-4xl leading-tight max-w-md">
          A Question for <span className="italic text-gold font-medium">David.</span>
        </h3>
      </div>

      {status === 'success' && (
        <div className="relative mt-10 border-l-[3px] border-gold bg-gold/10 px-6 py-5 rounded-r-xl">
          <div className="font-display font-bold text-gold text-lg">Question received.</div>
          <p className="mt-2 text-parchment/80 text-sm leading-relaxed">
            David will read it. Selected answers are published on this page ahead of
            Election Day.
          </p>
        </div>
      )}

      <div className="relative mt-12 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
              <span className="size-1 rounded-full bg-gold" />
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              className={fieldClass('name')}
              placeholder="Jane Doe · or a pseudonym"
              disabled={status === 'submitting'}
            />
            {errors.name && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.name}</span>}
          </label>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <label className="block">
            <span className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
              Location · Optional
            </span>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={onChange}
              className={fieldClass('location')}
              placeholder="Street address or neighborhood"
              disabled={status === 'submitting'}
            />
          </label>
        </div>

        <div>
          <label className="block">
            <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
              <span className="size-1 rounded-full bg-gold" />
              Topic
            </span>
            <select
              name="category"
              value={form.category}
              onChange={onChange}
              className={`${fieldClass('category')} appearance-none`}
              disabled={status === 'submitting'}
            >
              <option value="" disabled>Pick the closest fit…</option>
              {TOPICS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.category && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.category}</span>}
          </label>
        </div>

        <label className="block">
          <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
            <span className="size-1 rounded-full bg-gold" />
            Subject
          </span>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={onChange}
            className={fieldClass('subject')}
            placeholder="A one-line summary of your question"
            disabled={status === 'submitting'}
          />
          {errors.subject && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.subject}</span>}
        </label>

        <label className="block">
          <span className="flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
            <span className="size-1 rounded-full bg-gold" />
            Your Question
          </span>
          <textarea
            name="description"
            value={form.description}
            onChange={onChange}
            rows={6}
            className={`${fieldClass('description')} resize-y`}
            placeholder="Ask David anything — about the bench, the Constitution, the district, or his record."
            disabled={status === 'submitting'}
          />
          {errors.description && <span className="mt-1 block text-[12px] text-burgundy-light">{errors.description}</span>}
        </label>

        <fieldset className="pt-2">
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
            <span><SmsConsentText /></span>
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
            {status === 'submitting' ? 'Sending…' : 'Send the Question →'}
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

export default AskMorseForm
