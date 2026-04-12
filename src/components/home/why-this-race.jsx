const POINTS = [
  'The judge voters choose will handle serious criminal cases as well as complex civil disputes and post-conviction cases.',
  'David has held drug traffickers, violent offenders, and corrupt officials accountable while respecting constitutional rights and due process throughout his career.',
  'He will apply the laws as written, not legislate from the bench. He will treat every person equally, regardless of status or background.',
]

const WhyThisRace = () => {
  return (
    <section className="relative bg-navy-deep text-parchment overflow-hidden py-32 md:py-48">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-10 font-display font-extrabold text-[240px] md:text-[360px] leading-none text-gold/[0.05] select-none"
      >
        03
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-10 bg-gold" />
          <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
            Chapter · IV · The Stakes
          </span>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <h2 className="col-span-12 lg:col-span-6 font-display font-bold leading-[1.05] text-[clamp(40px,5.5vw,80px)]">
            Why This Race <span className="italic text-gold font-medium">Matters.</span>
          </h2>

          {/* Pull quote — spans 6 cols, offset */}
          <blockquote className="col-span-12 lg:col-span-6 border-l-[3px] border-gold pl-8 py-2">
            <p className="font-display italic text-2xl md:text-3xl leading-[1.35] text-parchment">
              <span className="text-gold">A judge's duty is not to the moment</span> — but to
              the Constitution that outlasts it.
            </p>
          </blockquote>
        </div>

        {/* Points grid — 4/4/4 */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {POINTS.map((point, i) => (
            <div
              key={i}
              className="relative border-t border-gold/20 pt-8"
            >
              <span className="font-display italic text-gold text-5xl font-bold leading-none">
                {['I', 'II', 'III'][i]}
              </span>
              <p className="mt-6 text-parchment/70 text-[15px] leading-[1.8]">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-20 border-t border-gold/15 pt-10 max-w-3xl">
          <p className="font-display italic text-xl md:text-2xl text-parchment/85 leading-snug">
            This race is about trust, stability, and confidence in Idaho's courts —
            <span className="text-gold"> not politics.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyThisRace
