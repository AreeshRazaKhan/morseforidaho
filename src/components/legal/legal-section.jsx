import PropTypes from 'prop-types'

const LegalSection = ({ numeral, title, children }) => {
  return (
    <section className="relative border-t border-parchment-3 pt-12 first:border-t-0 first:pt-0">
      <div className="grid grid-cols-12 gap-8 md:gap-12">
        <div className="col-span-12 lg:col-span-3">
          <span className="font-display italic font-bold text-gold text-5xl leading-none">
            {numeral}
          </span>
          <h2 className="mt-4 font-display font-bold text-navy text-2xl md:text-3xl leading-tight max-w-[20ch]">
            {title}
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-9 space-y-5 text-ink-soft text-base md:text-[17px] leading-[1.8] max-w-[68ch]">
          {children}
        </div>
      </div>
    </section>
  )
}

LegalSection.propTypes = {
  numeral: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default LegalSection
