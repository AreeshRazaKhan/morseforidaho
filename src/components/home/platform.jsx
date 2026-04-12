const PILLARS = [
  {
    numeral: 'I',
    chapter: 'Foundation',
    title: 'Experience in the Courtroom',
    body: 'David has spent his career in trial and appellate courts, prosecuting serious crimes and handling complex legal questions. He has managed heavy caseloads, navigated intricate evidentiary issues, and argued before both state and federal judges.',
    span: 'lg:col-span-7',
    tall: true,
  },
  {
    numeral: 'II',
    chapter: 'Justice',
    title: 'Ethics and Accountability',
    body: 'In the Special Prosecutions Unit, David held public officials and private citizens to the same standard. He believes no one should be above the law. As a judge, he will carry that principle into every ruling.',
    span: 'lg:col-span-5',
  },
  {
    numeral: 'III',
    chapter: 'Honor',
    title: 'Fairness and Respect',
    body: 'David will listen carefully, ensure both sides are heard, and apply the law consistently. People should leave court — even when they lose — knowing they were heard and that the judge followed the law.',
    span: 'lg:col-span-5',
  },
  {
    numeral: 'IV',
    chapter: 'Record',
    title: 'Proven Track Record',
    body: "David has successfully prosecuted some of Idaho's most serious cases — protecting families, upholding the Constitution, and building the courtroom experience a district judge must bring to the bench every day.",
    span: 'lg:col-span-7',
    tall: true,
  },
]

const Platform = () => {
  return (
    <section id="platform" className="relative bg-navy text-parchment overflow-hidden py-32 md:py-48">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-10 font-display font-extrabold text-[300px] md:text-[440px] leading-none text-gold/[0.05] select-none"
      >
        02
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-8 items-end mb-20">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
                Chapter · II · The Platform
              </span>
            </div>
            <h2 className="font-display font-bold leading-[1.05] text-[clamp(44px,6vw,88px)]">
              How David Will <span className="italic text-gold font-medium">Serve.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-4 text-parchment/70 text-base md:text-lg leading-relaxed max-w-md">
            Four principles — earned in the courtroom, built on the Constitution, and carried
            into every ruling the bench will demand.
          </p>
        </div>

        {/* Asymmetric bento: 7/5, 5/7 */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {PILLARS.map((p) => (
            <article
              key={p.numeral}
              className={`col-span-12 ${p.span} relative bg-navy-deep border border-gold/15 rounded-2xl p-10 md:p-14 ${p.tall ? 'min-h-[380px]' : 'min-h-[320px]'} flex flex-col justify-between overflow-hidden group hover:border-gold/40 transition-colors`}
            >
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-2 font-display font-extrabold italic text-gold/20 text-[180px] leading-none group-hover:text-gold/30 transition-colors"
              >
                {p.numeral}
              </div>
              <div className="relative">
                <span className="text-[12px] tracking-[2.5px] uppercase text-gold-muted font-bold">
                  {`${p.numeral} · ${p.chapter}`}
                </span>
                <h3 className="mt-5 font-display text-3xl md:text-4xl font-bold text-parchment leading-tight max-w-md">
                  {p.title}
                </h3>
              </div>
              <p className="relative mt-10 text-parchment/70 text-[15px] md:text-base leading-[1.75] max-w-[52ch]">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Platform
