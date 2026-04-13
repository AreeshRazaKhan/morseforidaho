import Link from 'next/link'

const Election = () => {
  return (
    <section className="relative bg-burgundy text-parchment overflow-hidden py-32 md:py-48">
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
        className="pointer-events-none absolute -bottom-24 -left-6 font-display font-extrabold text-[280px] md:text-[440px] leading-none text-gold/[0.07] select-none"
      >
        2026
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-y-8 md:gap-8 items-center">
        <div className="col-span-12 lg:col-span-7">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
              Chapter · VII · Election Day
            </span>
          </div>
          <h2 className="font-display font-bold leading-[1.02] text-[clamp(48px,7vw,104px)]">
            Vote <span className="italic text-gold font-medium">Morse.</span>
            <br />
            May 19, 2026.
          </h2>
          <p className="mt-8 text-parchment/80 text-base md:text-lg max-w-xl">
            Judicial elections in Idaho are nonpartisan — every registered Idaho voter can
            vote for David. Save the date and make your voice heard.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-muted hover:text-parchment text-navy px-7 py-4 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
            >
              Pledge Your Vote →
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-navy px-7 py-4 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
            >
              Volunteer
            </Link>
          </div>
        </div>

        <aside className="col-span-12 lg:col-span-5 lg:pl-12 lg:border-l lg:border-gold/25">
          <div className="space-y-10">
            <div>
              <span className="text-[12px] tracking-[2.5px] uppercase text-gold font-bold">
                I · Primary Election
              </span>
              <div className="mt-3 font-display font-bold text-5xl md:text-6xl">05·19·26</div>
              <p className="mt-3 text-parchment/70 text-sm">
                Early voting and absentee ballot options will be available. Check with your
                county elections office for details.
              </p>
            </div>
            <div className="pt-10 border-t border-gold/20">
              <span className="text-[12px] tracking-[2.5px] uppercase text-gold font-bold">
                II · Nonpartisan Race
              </span>
              <p className="mt-4 font-display italic text-xl leading-snug">
                Running on qualifications, experience, and commitment to fairness — not a
                party label.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Election
