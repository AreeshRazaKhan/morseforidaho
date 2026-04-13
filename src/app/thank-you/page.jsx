import Link from 'next/link'

import SiteNav from '@/components/home/site-nav'
import SiteFooter from '@/components/home/site-footer'

export const metadata = {
  title: 'Thank You — Morse For Idaho',
  description: 'Your submission has been received. Watch your email for next steps.',
}

const ThankYouPage = () => {
  return (
    <>
      <SiteNav />
      <main>
        <section className="relative bg-navy text-parchment overflow-hidden pt-[72px] min-h-[calc(100vh-72px)] flex items-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep"
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
            className="pointer-events-none absolute -right-16 -bottom-32 font-display font-extrabold italic text-[280px] md:text-[520px] leading-[0.8] text-gold/[0.06] select-none"
          >
            &amp;
          </span>

          <div className="relative mx-auto max-w-[1100px] w-full px-6 md:px-12 lg:px-20 py-24 md:py-32 text-center">
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[12px] md:text-xs font-bold uppercase tracking-[4px] text-gold">
                With Gratitude
              </span>
              <span className="h-px w-10 bg-gold" />
            </div>

            <h1 className="font-display font-bold leading-[0.96] tracking-[-0.02em] text-[clamp(64px,10vw,152px)]">
              Thank
              <br />
              <span className="italic text-gold font-medium">you.</span>
            </h1>

            <div className="mt-12 mx-auto max-w-xl">
              <div className="h-px w-16 bg-gold mx-auto mb-8" />
              <p className="text-lg md:text-xl text-parchment/85 leading-[1.8]">
                Your submission has been received.
              </p>
              <p className="mt-4 text-base md:text-lg text-parchment/70 leading-[1.8]">
                Please watch your email for further instructions from the campaign office.
              </p>
            </div>

            <div className="mt-14 flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-deep text-parchment px-7 py-4 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
              >
                Back to Home →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default ThankYouPage
