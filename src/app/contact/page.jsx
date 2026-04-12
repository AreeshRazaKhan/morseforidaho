import Image from 'next/image'
import Link from 'next/link'

import SiteNav from '@/components/home/site-nav'
import SiteFooter from '@/components/home/site-footer'
import ContactForm from '@/components/contact/contact-form'

export const metadata = {
  title: 'Contact — Morse For Idaho',
  description:
    'Reach the Morse For Idaho campaign — volunteer, endorse, host a stop on the docket, or send a message to David directly.',
}

const REASONS = [
  {
    numeral: 'I',
    label: 'Campaign Inquiries',
    body: 'General questions about the race, the district, or David\'s record on the bench.',
    tag: 'General',
  },
  {
    numeral: 'II',
    label: 'Volunteer',
    body: 'Door knocking, yard signs, event staffing — every hour helps carry the district.',
    tag: 'Get Involved',
  },
  {
    numeral: 'III',
    label: 'Host a Stop',
    body: 'Invite David to your community, veteran hall, or kitchen table between now and May 19.',
    tag: 'The Docket',
  },
  {
    numeral: 'IV',
    label: 'Press & Media',
    body: 'Interview requests, statements, endorsements, and media credentials for campaign events.',
    tag: 'Press',
  },
]

const ContactPage = () => {
  return (
    <>
      <SiteNav />
      <main>
        {/* ═══════ HERO ═══════ */}
        <section className="relative bg-navy text-parchment overflow-hidden pt-[72px]">
          <div className="absolute inset-0 opacity-15" aria-hidden="true">
            <Image
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1800&auto=format&fit=crop"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy"
          />
          <div
            className="pointer-events-none absolute inset-8 border border-gold/25"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-[38px] border border-gold/10"
            aria-hidden="true"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -bottom-24 font-display font-extrabold italic text-[260px] md:text-[440px] leading-[0.8] text-gold/[0.06] select-none"
          >
            &amp;
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-28 md:pb-40">
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[12px] md:text-xs font-bold uppercase tracking-[4px] text-gold">
                Volume II · The Correspondence
              </span>
            </div>

            <div className="grid grid-cols-12 gap-8 md:gap-12 items-end">
              <div className="col-span-12 lg:col-span-9">
                <h1 className="font-display font-bold leading-[0.96] tracking-[-0.02em] text-[clamp(56px,9vw,136px)]">
                  Write to
                  <br />
                  <span className="italic text-gold font-medium">David.</span>
                </h1>
                <p className="mt-10 max-w-2xl text-base md:text-lg text-parchment/75 leading-[1.8]">
                  Every message is read. Every voice matters to the campaign. Whether you're
                  volunteering, hosting a stop on the docket, or asking about the bench —
                  reach out and the campaign will respond within two business days.
                </p>
              </div>

              <aside className="col-span-12 lg:col-span-3 lg:pl-8 lg:border-l lg:border-gold/25">
                <div className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                  Response Time
                </div>
                <div className="mt-3 font-display italic text-gold text-5xl font-bold leading-none">
                  48h
                </div>
                <div className="mt-3 text-[12px] tracking-[1.5px] uppercase text-parchment/60">
                  Two Business Days
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ═══════ INFO + FORM BENTO ═══════ */}
        <section className="relative bg-parchment overflow-hidden py-32 md:py-48">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-8 font-display font-extrabold text-[260px] md:text-[420px] leading-none text-parchment-3 select-none"
          >
            I
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-8 md:gap-12">
            {/* Contact info column — 5 cols */}
            <aside className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 self-start">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-burgundy" />
                <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
                  Chapter · I · The Addresses
                </span>
              </div>
              <h2 className="font-display font-bold text-navy leading-[1.05] text-[clamp(40px,5vw,68px)]">
                Every <span className="italic text-burgundy font-medium">Door</span> to the Campaign.
              </h2>

              <div className="mt-14 space-y-10">
                <div className="border-l-[3px] border-gold pl-6 py-1">
                  <div className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                    I · By Phone
                  </div>
                  <a
                    href="tel:+15088016634"
                    className="mt-2 block font-display font-bold text-navy text-3xl md:text-4xl hover:text-burgundy transition-colors"
                  >
                    (508) 801-6634
                  </a>
                  <div className="mt-2 text-[12px] tracking-[1.5px] uppercase text-ink-muted">
                    Mon–Fri · 9am–6pm MST
                  </div>
                </div>

                <div className="border-l-[3px] border-gold pl-6 py-1">
                  <div className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                    II · By Email
                  </div>
                  <a
                    href="mailto:info@morseforidaho.com"
                    className="mt-2 block font-display font-bold text-navy text-2xl md:text-3xl hover:text-burgundy transition-colors break-all"
                  >
                    info@morseforidaho.com
                  </a>
                  <div className="mt-2 text-[12px] tracking-[1.5px] uppercase text-ink-muted">
                    Replies within 48 hours
                  </div>
                </div>

                <div className="border-l-[3px] border-gold pl-6 py-1">
                  <div className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                    III · By Mail
                  </div>
                  <div className="mt-2 font-display font-bold text-navy text-xl md:text-2xl leading-snug">
                    Morse For Idaho
                    <br />
                    P.O. Box 1776
                    <br />
                    Boise, ID 83701
                  </div>
                  <div className="mt-3 text-[12px] tracking-[1.5px] uppercase text-ink-muted">
                    Checks payable to "Morse For Idaho"
                  </div>
                </div>
              </div>
            </aside>

            <ContactForm />
          </div>
        </section>

        {/* ═══════ REASONS BENTO ═══════ */}
        <section className="relative bg-parchment-2 overflow-hidden py-32 md:py-48">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 font-display font-extrabold italic text-[240px] md:text-[380px] leading-none text-parchment-3 select-none"
          >
            III
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-12 gap-8 items-end mb-20">
              <div className="col-span-12 lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-burgundy" />
                  <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
                    Chapter · III · Which Door?
                  </span>
                </div>
                <h2 className="font-display font-bold text-navy leading-[1.05] text-[clamp(40px,5.5vw,80px)]">
                  Four ways to reach the <span className="italic text-burgundy font-medium">campaign.</span>
                </h2>
              </div>
              <p className="col-span-12 lg:col-span-5 text-ink-soft text-base md:text-lg leading-relaxed max-w-md">
                Not every message belongs in the same envelope. Pick the door that fits and
                the right desk will answer.
              </p>
            </div>

            {/* 7/5, 5/7 asymmetric bento */}
            <div className="grid grid-cols-12 gap-6 md:gap-8">
              {REASONS.map((r, i) => (
                <article
                  key={r.numeral}
                  className={`col-span-12 ${
                    i % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
                  } relative bg-white border border-parchment-3 rounded-2xl p-10 md:p-12 min-h-[260px] flex flex-col justify-between overflow-hidden group hover:border-gold/60 hover:-translate-y-1 transition-all`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 -right-2 font-display font-extrabold italic text-parchment-3 text-[160px] leading-none group-hover:text-gold/20 transition-colors"
                  >
                    {r.numeral}
                  </span>
                  <div className="relative">
                    <span className="text-[12px] tracking-[2.5px] uppercase text-gold-muted font-bold">
                      {r.numeral} · {r.tag}
                    </span>
                    <h3 className="mt-4 font-display font-bold text-navy text-3xl md:text-4xl leading-tight max-w-md">
                      {r.label}
                    </h3>
                  </div>
                  <div className="relative mt-10 flex items-end justify-between gap-6">
                    <p className="text-ink-soft text-[15px] leading-[1.75] max-w-[46ch]">
                      {r.body}
                    </p>
                    <span
                      aria-hidden="true"
                      className="text-gold text-xl group-hover:translate-x-1 transition-transform shrink-0"
                    >
                      →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ CTA STRIP ═══════ */}
        <section className="relative bg-burgundy text-parchment overflow-hidden py-24 md:py-32">
          <div
            className="pointer-events-none absolute inset-8 border border-gold/30"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-[38px] border border-gold/15"
            aria-hidden="true"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-10 font-display font-extrabold text-[240px] md:text-[380px] leading-none text-gold/[0.07] select-none"
          >
            2026
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-gold" />
                <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
                  Chapter · IV · Join the Legacy
                </span>
              </div>
              <h2 className="font-display font-bold leading-[1.02] text-[clamp(36px,5vw,72px)]">
                Can't wait?{' '}
                <span className="italic text-gold font-medium">Jump in.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-muted hover:text-parchment text-navy px-7 py-4 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
              >
                Join the Campaign →
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-navy px-7 py-4 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
              >
                See the Docket
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default ContactPage
