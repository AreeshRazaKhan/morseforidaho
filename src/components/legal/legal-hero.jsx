import PropTypes from 'prop-types'

const LegalHero = ({ chapter, title, effectiveDate }) => {
  return (
    <section className="relative bg-navy text-parchment overflow-hidden pt-[72px]">
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
        className="pointer-events-none absolute -right-16 -bottom-24 font-display font-extrabold text-[260px] md:text-[420px] leading-[0.8] text-gold/[0.06] select-none"
      >
        M
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-24 md:pb-32">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-10 bg-gold" />
          <span className="text-[12px] md:text-xs font-bold uppercase tracking-[4px] text-gold">
            {chapter}
          </span>
        </div>
        <h1 className="font-display font-bold leading-[1.02] tracking-[-0.01em] text-[clamp(48px,7vw,104px)] max-w-4xl">
          {title}
        </h1>
        <div className="mt-10 flex items-center gap-4 text-[12px] tracking-[2px] uppercase text-parchment/60 font-semibold">
          <span className="size-1.5 rounded-full bg-gold" />
          <span>Last Updated · {effectiveDate}</span>
        </div>
      </div>
    </section>
  )
}

LegalHero.propTypes = {
  chapter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  effectiveDate: PropTypes.string.isRequired,
}

export default LegalHero
