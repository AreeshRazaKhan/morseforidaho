import Link from 'next/link'

const GetInvolved = () => {
  return (
    <section id="get-involved" className="relative bg-navy text-parchment overflow-hidden py-32 md:py-48">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-10 font-display font-extrabold italic text-[260px] md:text-[420px] leading-none text-gold/[0.05] select-none"
      >
        VII
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-y-8 md:gap-12">
        <div className="col-span-12 lg:col-span-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
              Chapter · IX · Join the Legacy
            </span>
          </div>
          <h2 className="font-display font-bold leading-[1.05] text-[clamp(40px,5.5vw,80px)]">
            A Judge You Can <span className="italic text-gold font-medium">Trust.</span>
          </h2>
          <p className="mt-8 text-parchment/75 text-base md:text-lg max-w-xl leading-[1.8]">
            David Morse is an experienced prosecutor with a deep commitment to fairness and
            the rule of law. He's ready to serve the Fourth Judicial District with integrity,
            humility, and respect for every person who enters the courtroom.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-gold/15 pt-10">
            <div>
              <span className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                Phone
              </span>
              <div className="mt-2 font-display text-xl text-parchment">(208) 615-5086</div>
            </div>
            <div>
              <span className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                Mail a Check
              </span>
              <div className="mt-2 font-display text-xl text-parchment">Morse For Idaho</div>
              <div className="text-xs text-parchment/60 mt-1">Payable to "Morse For Idaho"</div>
            </div>
          </div>
        </div>

        {/* CTA card — asymmetric right column */}
        <div className="col-span-12 lg:col-span-6 bg-navy-deep border border-gold/20 rounded-2xl p-10 md:p-14 flex flex-col justify-between relative overflow-hidden min-h-[400px]">
          <div
            aria-hidden="true"
            className="absolute inset-4 border border-gold/15 pointer-events-none rounded-xl"
          />
          <div className="relative">
            <span className="text-[12px] tracking-[2.5px] uppercase text-gold font-bold">
              I · Get Involved
            </span>
            <h3 className="mt-4 font-display font-bold text-3xl md:text-4xl text-parchment leading-tight">
              Join the <span className="italic text-gold font-medium">Campaign.</span>
            </h3>
            <p className="mt-6 text-parchment/70 text-base leading-[1.75] max-w-md">
              Stand with David Morse. Volunteer your time, attend an event, or
              help spread the word across the Fourth District. Every voice matters.
            </p>
          </div>

          <div className="relative mt-10 space-y-4">
            <Link
              href="/volunteer"
              className="block w-full bg-burgundy hover:bg-burgundy-light text-parchment text-center px-7 py-5 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
            >
              Volunteer Now →
            </Link>
            <div className="flex gap-4">
              <Link
                href="/events"
                className="flex-1 text-center border border-gold/20 hover:bg-gold/10 text-parchment px-7 py-4 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
              >
                Upcoming Events
              </Link>
              <Link
                href="/contact"
                className="flex-1 text-center border border-gold/20 hover:bg-gold/10 text-parchment px-7 py-4 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved
