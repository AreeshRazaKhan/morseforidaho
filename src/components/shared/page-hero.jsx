import Image from 'next/image'
import PropTypes from 'prop-types'

const PageHero = ({
  volume,
  title,
  titleAccent,
  dek,
  backgroundImage,
  meta,
  watermark,
  watermarkItalic = true,
}) => {
  return (
    <section className="relative bg-navy text-parchment overflow-hidden pt-[72px]">
      {backgroundImage && (
        <>
          <div className="absolute inset-0 opacity-15" aria-hidden="true">
            <Image
              src={backgroundImage}
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
        </>
      )}
      <div
        className="pointer-events-none absolute inset-8 border border-gold/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-[38px] border border-gold/10"
        aria-hidden="true"
      />
      {watermark && (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -right-10 -bottom-28 font-display font-extrabold ${
            watermarkItalic ? 'italic' : ''
          } text-[260px] md:text-[440px] leading-[0.8] text-gold/[0.06] select-none`}
        >
          {watermark}
        </span>
      )}

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-28 md:pb-40">
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-10 bg-gold" />
          <span className="text-[12px] md:text-xs font-bold uppercase tracking-[4px] text-gold">
            {volume}
          </span>
        </div>

        <div className="grid grid-cols-12 gap-y-8 md:gap-12 items-end">
          <div className={meta ? 'col-span-12 lg:col-span-8' : 'col-span-12'}>
            <h1 className="font-display font-bold leading-[0.96] tracking-[-0.02em] text-[clamp(56px,9vw,128px)]">
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span className="italic text-gold font-medium">{titleAccent}</span>
                </>
              )}
            </h1>
            {dek && (
              <p className="mt-10 max-w-2xl text-base md:text-lg text-parchment/75 leading-[1.8]">
                {dek}
              </p>
            )}
          </div>

          {meta && (
            <aside className="col-span-12 lg:col-span-4 lg:pl-10 lg:border-l lg:border-gold/25 space-y-8">
              {meta.map((m) => (
                <div key={m.label}>
                  <div className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                    {m.label}
                  </div>
                  <div className="mt-1.5 font-display text-xl text-parchment">
                    {m.value}
                  </div>
                </div>
              ))}
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}

PageHero.propTypes = {
  volume: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleAccent: PropTypes.string,
  dek: PropTypes.string,
  backgroundImage: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.node.isRequired,
    })
  ),
  watermark: PropTypes.string,
  watermarkItalic: PropTypes.bool,
}

export default PageHero
