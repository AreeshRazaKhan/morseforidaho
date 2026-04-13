import Image from 'next/image'

import SiteNav from '@/components/home/site-nav'
import SiteFooter from '@/components/home/site-footer'

export const metadata = {
  title: 'Donate — Morse For Idaho',
  description:
    'Support the Morse For Idaho campaign. Every dollar fuels our fight for experienced, ethical, and fair leadership on the Fourth District bench.',
}

const CHECKOUT_BASE = 'https://www.clover.com/urlshortener'

const OTHER_HREF = `${CHECKOUT_BASE}/p3DrTy`

const AMOUNT_100 = `${CHECKOUT_BASE}/yTPsv5`
const AMOUNT_200 = `${CHECKOUT_BASE}/gppfPw`
const AMOUNT_500 = `${CHECKOUT_BASE}/vyFJMb`
const AMOUNT_1000 = `${CHECKOUT_BASE}/zTRQMv`

const QR_METHODS = [
  {
    name: 'Venmo',
    handle: '@Morse-For-Idaho',
    qr: '/donate/venmo-qr.png',
    href: 'https://venmo.com/Morse-For-Idaho',
  },
  {
    name: 'Zelle',
    handle: 'david@morseforidaho.com',
    qr: '/donate/zelle-qr.png',
    href: 'mailto:david@morseforidaho.com',
  },
  {
    name: 'Cash App',
    handle: '$MorseForIdaho',
    qr: '/donate/cashapp-qr.png',
    href: 'https://cash.app/$MorseForIdaho',
  },
]

const DonatePage = () => {
  return (
    <>
      <SiteNav />
      <main>
        {/* Hero — asymmetric 12-col break */}
        <section className="relative bg-navy text-parchment pt-40 pb-24 md:pt-48 md:pb-40 overflow-hidden">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-8 -bottom-24 font-display font-extrabold italic text-[360px] md:text-[520px] leading-[0.8] text-gold/[0.05] select-none"
          >
            $
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-32 hidden md:block font-display font-extrabold italic text-[220px] text-gold/[0.07] select-none"
          >
            VI
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-y-10 md:gap-10">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-4 mb-10">
                <span className="h-px w-10 bg-gold" />
                <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
                  Chapter · VI · The Offering
                </span>
              </div>
              <h1 className="font-display font-bold text-parchment text-7xl md:text-9xl leading-[0.92] tracking-[-0.02em]">
                Stand <span className="italic text-gold font-medium">for</span>
                <br />
                the Bench.
              </h1>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:pt-10">
              <div className="border-l-[3px] border-gold pl-6 py-2">
                <p className="font-display italic text-parchment text-2xl md:text-3xl leading-[1.35]">
                  <span className="text-gold">"Every dollar</span> is a vote for
                  a courtroom run with humility, experience, and the rule of
                  law."
                </p>
              </div>
              <p className="mt-10 text-parchment/65 text-[15px] leading-[1.85] max-w-sm">
                Contributions fuel yard signs, community events, and the work
                of carrying David's message to every corner of the Fourth
                District.
              </p>
            </div>
          </div>
        </section>

        {/* I · Card checkout — bento, dominant $1000 tile */}
        <section className="relative bg-parchment py-24 md:py-36 overflow-hidden">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 top-20 font-display font-extrabold italic text-[320px] md:text-[440px] leading-[0.8] text-parchment-3 select-none"
          >
            I
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-12 gap-y-8 md:gap-8 items-end mb-14">
              <div className="col-span-12 md:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-burgundy" />
                  <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
                    Article · I · Contribute by Card
                  </span>
                </div>
                <h2 className="font-display font-bold text-navy text-5xl md:text-7xl leading-[1.02]">
                  Pick an amount.
                  <br />
                  <span className="italic text-burgundy font-medium">
                    Secure checkout.
                  </span>
                </h2>
              </div>
              <div className="col-span-12 md:col-span-5 md:pb-4">
                <p className="text-ink-soft text-[15px] leading-[1.85] max-w-sm">
                  Every amount is processed through Clover's PCI-compliant
                  gateway. You'll be redirected to a secure page to finish the
                  transaction.
                </p>
                <div className="mt-5 h-px w-24 bg-gold" />
              </div>
            </div>

            {/* Bento grid: 3+4+5 asymmetry */}
            <div className="grid grid-cols-12 gap-y-4 md:gap-6">
              {/* $100 — small square */}
              <a
                href={AMOUNT_100}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative col-span-6 lg:col-span-3 bg-parchment-2 border border-parchment-3 hover:border-gold transition-colors p-8 md:p-10 min-h-[160px] md:min-h-[200px] flex flex-col justify-between"
              >
                <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold-muted">
                  I · Seed
                </span>
                <span className="font-display font-bold text-navy text-5xl md:text-6xl tracking-[-0.02em] group-hover:text-burgundy transition-colors">
                  $100
                </span>
              </a>

              {/* $200 — small square */}
              <a
                href={AMOUNT_200}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative col-span-6 lg:col-span-3 bg-parchment-2 border border-parchment-3 hover:border-gold transition-colors p-8 md:p-10 min-h-[160px] md:min-h-[200px] flex flex-col justify-between"
              >
                <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold-muted">
                  II · Supporter
                </span>
                <span className="font-display font-bold text-navy text-5xl md:text-6xl tracking-[-0.02em] group-hover:text-burgundy transition-colors">
                  $200
                </span>
              </a>

              {/* $1000 — dominant wide tile */}
              <a
                href={AMOUNT_1000}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative col-span-12 lg:col-span-6 lg:row-span-2 bg-navy hover:bg-navy-deep text-parchment border border-gold/40 hover:border-gold transition-colors p-10 md:p-14 min-h-[260px] lg:min-h-[420px] overflow-hidden flex flex-col justify-between"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-4 border border-gold/25"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-[22px] border border-gold/10"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-10 -right-6 font-display font-extrabold italic text-[260px] text-gold/[0.07] leading-none select-none"
                >
                  M
                </span>

                <div className="relative">
                  <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                    IV · Patron of the Bench
                  </span>
                  <p className="mt-6 font-display italic text-parchment/70 text-base md:text-lg leading-[1.55] max-w-sm">
                    The maximum named tier — reserved for those who carry the
                    campaign across the finish line.
                  </p>
                </div>
                <div className="relative flex items-end justify-between gap-6">
                  <span className="font-display font-bold text-parchment text-7xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-[-0.03em]">
                    $1000
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display italic text-gold text-3xl md:text-4xl shrink-0 pb-3 group-hover:translate-x-1 transition-transform"
                  >
                    →
                  </span>
                </div>
              </a>

              {/* $500 — medium wide */}
              <a
                href={AMOUNT_500}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative col-span-12 lg:col-span-6 bg-parchment-2 border border-parchment-3 hover:border-gold transition-colors p-8 md:p-10 min-h-[160px] md:min-h-[200px] flex items-center justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold-muted">
                    III · Sustainer
                  </span>
                  <div className="mt-3 font-display font-bold text-navy text-5xl md:text-7xl tracking-[-0.02em] group-hover:text-burgundy transition-colors">
                    $500
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="font-display italic text-gold text-3xl md:text-4xl shrink-0 group-hover:translate-x-1 transition-transform"
                >
                  →
                </span>
              </a>
            </div>

            {/* Other — gold button (the ONE donate exception) */}
            <div className="mt-12 grid grid-cols-12 gap-y-6 md:gap-6 items-center">
              <div className="col-span-12 md:col-span-7 flex items-center gap-6">
                <span className="h-px w-16 bg-gold shrink-0" />
                <p className="font-display italic text-navy text-xl md:text-2xl leading-snug">
                  Any amount, any time. Name your own contribution.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 md:text-right">
                <a
                  href={OTHER_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gold hover:bg-gold-muted text-navy hover:text-parchment px-9 py-5 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
                >
                  Choose Your Amount →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* II · QR wallets — dominant Venmo + two orbiters */}
        <section className="relative bg-navy-deep text-parchment py-24 md:py-36 overflow-hidden">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 top-16 font-display font-extrabold italic text-[320px] md:text-[440px] leading-[0.8] text-gold/[0.05] select-none"
          >
            II
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-12 gap-y-8 md:gap-8 items-end mb-16">
              <div className="col-span-12 md:col-span-7 md:col-start-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-gold" />
                  <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
                    Article · II · Wallet Apps
                  </span>
                </div>
                <h2 className="font-display font-bold text-parchment text-5xl md:text-7xl leading-[1.02]">
                  Scan.{' '}
                  <span className="italic text-gold font-medium">Send.</span>{' '}
                  Done.
                </h2>
              </div>
            </div>

            {/* Dominant left + two stacked right */}
            <div className="grid grid-cols-12 gap-y-6 md:gap-6">
              {/* Venmo dominant */}
              <a
                href={QR_METHODS[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative col-span-12 lg:col-span-7 bg-parchment text-navy p-10 md:p-14 overflow-hidden border border-gold/30 hover:border-gold transition-colors"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-4 border border-gold/25"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-[22px] border border-gold/10"
                />
                <div className="relative flex flex-col md:flex-row md:items-center gap-10">
                  <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] shrink-0 bg-white p-4 rounded-sm">
                    <Image
                      src={QR_METHODS[0].qr}
                      alt={`${QR_METHODS[0].name} QR code for Morse For Idaho`}
                      fill
                      sizes="280px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold-muted">
                      I · Venmo
                    </span>
                    <h3 className="mt-4 font-display font-bold text-navy text-5xl md:text-6xl leading-[0.95] tracking-[-0.02em]">
                      @Morse-
                      <br />
                      For-Idaho
                    </h3>
                    <div className="mt-6 h-px w-24 bg-gold" />
                    <p className="mt-5 text-ink-soft text-[14px] leading-[1.75] max-w-sm">
                      Instant transfer, no card details, no checkout page. Tap
                      the QR or the handle to open Venmo.
                    </p>
                  </div>
                </div>
              </a>

              {/* Zelle + Cash App stacked */}
              <div className="col-span-12 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {QR_METHODS.slice(1).map((m, idx) => (
                  <a
                    key={m.name}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-parchment text-navy p-6 md:p-8 border border-gold/30 hover:border-gold transition-colors flex items-center gap-6"
                  >
                    <div className="relative w-[130px] h-[130px] shrink-0 bg-white p-2 rounded-sm">
                      <Image
                        src={m.qr}
                        alt={`${m.name} QR code for Morse For Idaho`}
                        fill
                        sizes="130px"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold-muted">
                        {['II', 'III'][idx]} · {m.name}
                      </span>
                      <div className="mt-3 font-display font-bold text-navy text-xl md:text-2xl leading-tight break-all">
                        {m.handle}
                      </div>
                      <span className="mt-3 inline-block text-gold text-xl group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* III · Mail a check — certificate feel */}
        <section className="relative bg-parchment-2 py-24 md:py-36 overflow-hidden">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -bottom-16 font-display font-extrabold italic text-[320px] md:text-[440px] leading-[0.8] text-parchment-3 select-none"
          >
            III
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-y-10 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-burgundy" />
                <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
                  Article · III · Mail a Check
                </span>
              </div>
              <h2 className="font-display font-bold text-navy text-5xl md:text-7xl leading-[1.02]">
                The{' '}
                <span className="italic text-burgundy font-medium">
                  old way
                </span>
                <br />
                still works.
              </h2>
              <p className="mt-8 text-ink-soft text-[15px] leading-[1.85] max-w-sm">
                Prefer pen and paper? So does David. Mail a check payable to{' '}
                <span className="font-display italic text-navy font-bold">
                  "Morse For Idaho"
                </span>{' '}
                to the campaign PO box.
              </p>
            </div>

            <div className="col-span-12 md:col-span-7 md:col-start-7 md:-mt-6">
              <div className="relative bg-parchment border border-gold/50 p-10 md:p-14 rounded-sm">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-3 border border-gold/35"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-[18px] border border-gold/15"
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-gold" />
                    <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold-muted">
                      Mail To
                    </span>
                  </div>
                  <div className="mt-6 font-display font-bold text-navy text-3xl md:text-5xl leading-[1.05] tracking-[-0.01em]">
                    Morse For Idaho
                  </div>
                  <div className="mt-5 text-ink text-lg md:text-xl leading-[1.7] font-display">
                    P.O. Box 171101
                    <br />
                    Boise, Idaho 83717
                  </div>
                  <div className="mt-8 h-px w-24 bg-gold" />
                  <p className="mt-5 font-display italic text-ink-soft text-sm md:text-base leading-[1.7] max-w-md">
                    Make checks payable to{' '}
                    <span className="not-italic font-bold text-navy">
                      "Morse For Idaho"
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}

export default DonatePage
