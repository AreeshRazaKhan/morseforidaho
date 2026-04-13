import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative bg-navy text-parchment overflow-hidden pt-[72px]">
      {/* Ambient background image — courtroom mood, deeply recessed */}
      <div className="absolute inset-0 opacity-20 mix-blend-luminosity" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1800&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy"
      />

      {/* Double-rule frame */}
      <div
        className="pointer-events-none absolute inset-8 border border-gold/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-[38px] border border-gold/10"
        aria-hidden="true"
      />

      {/* Oversized watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-32 font-display font-extrabold text-[clamp(280px,40vw,520px)] leading-[0.8] text-gold/[0.06] select-none"
      >
        MORSE
      </div>

      {/* Circular seal */}
      <div
        aria-hidden="true"
        className="hidden lg:flex absolute top-28 right-16 xl:right-32 size-32 xl:size-40 rounded-full border border-gold/50 items-center justify-center"
      >
        <div className="absolute inset-2 rounded-full border border-dashed border-gold/30" />
        <span className="font-display italic text-gold text-5xl xl:text-6xl font-bold">
          M
        </span>
        <span className="absolute bottom-4 left-0 right-0 text-center text-[8px] tracking-[3px] font-bold text-gold">
          · FOURTH DISTRICT ·
        </span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-24 md:pt-32 lg:pt-40 pb-32 md:pb-48">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-10 bg-gold" />
          <span className="text-[12px] md:text-xs font-bold uppercase tracking-[4px] text-gold">
            Official Candidate · Idaho 2026
          </span>
        </div>

        {/* Asymmetric bento: 7-col headline + 5-col meta */}
        <div className="grid grid-cols-12 gap-y-8 md:gap-12 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="font-display font-bold leading-[0.95] tracking-[-0.02em] text-[clamp(56px,9vw,128px)]">
              David
              <br />
              <span className="text-gold italic font-medium">Morse.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-parchment/70 leading-relaxed">
              Experienced Federal and State Prosecutor committed to fairness,
              integrity, and the rule of law for Ada, Boise, Elmore, and Valley
              Counties.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-deep text-parchment px-7 py-4 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
              >
                Meet David →
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-navy px-7 py-4 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
              >
                Join the Campaign
              </Link>
            </div>
          </div>

          {/* Meta side rail */}
          <aside className="col-span-12 lg:col-span-4 lg:pl-10 lg:border-l lg:border-gold/20 space-y-10">
            <div>
              <div className="font-display text-5xl md:text-6xl text-gold font-bold leading-none">
                05·19
              </div>
              <div className="mt-3 text-[12px] tracking-[2px] uppercase text-parchment/60">
                Election Day · 2026
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gold/15">
              <div>
                <div className="font-display text-2xl text-gold font-bold">10+</div>
                <div className="mt-1 text-[12px] tracking-[1.5px] uppercase text-parchment/50">
                  Years Law
                </div>
              </div>
              <div>
                <div className="font-display text-2xl text-gold font-bold">15+</div>
                <div className="mt-1 text-[12px] tracking-[1.5px] uppercase text-parchment/50">
                  Years Service
                </div>
              </div>
              <div>
                <div className="font-display text-2xl text-gold font-bold">1000+</div>
                <div className="mt-1 text-[12px] tracking-[1.5px] uppercase text-parchment/50">
                  Court Cases
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom endorsement pillars */}
        <div className="relative mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gold/15 pt-10">
          {['Law Enforcement Leaders', 'Idaho Legal Community', 'Grassroots Supporters'].map(
            (label, i) => (
              <div key={label} className="flex items-start gap-4">
                <span className="font-display italic text-gold text-xl">
                  {['I', 'II', 'III'][i]}
                </span>
                <span className="text-[12px] tracking-[2px] uppercase text-parchment/70 font-semibold">
                  {label}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
