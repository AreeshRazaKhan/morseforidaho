import Image from 'next/image'

const BIO_PARAGRAPHS = [
  "Before joining the U.S. Attorney's Office, David served as a Deputy Attorney General in Idaho's Special Prosecutions Unit. There he prosecuted public corruption, insurance fraud, and violent crime, holding both government officials and private citizens equally accountable under the law.",
  'David has handled complex felony cases across trial and appellate courts, including arguing a Fifth Amendment issue before the Ninth Circuit Court of Appeals. This depth of courtroom experience has given him firsthand knowledge of the constitutional principles a judge must apply every day.',
  'He earned his law degree from the University of Idaho and has been licensed to practice law in Idaho since 2016. David also served in the U.S. Marine Corps as an Intelligence Specialist, Imagery Analyst, and Arabic Linguist — service that instilled the discipline and integrity he brings to every case.',
]

const MeetDavid = () => {
  return (
    <section id="meet" className="relative bg-parchment overflow-hidden py-32 md:py-48">
      {/* Oversized numeral watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-8 font-display font-extrabold text-[260px] md:text-[400px] leading-none text-parchment-3 select-none"
      >
        01
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-10 bg-burgundy" />
          <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
            Chapter · I · The Candidate
          </span>
        </div>
        <h2 className="font-display font-bold text-navy leading-[1.05] text-[clamp(44px,6vw,88px)] max-w-4xl">
          Meet <span className="italic font-medium text-burgundy">David Morse.</span>
        </h2>

        {/* Asymmetric 12-col bento */}
        <div className="mt-20 grid grid-cols-12 gap-y-6 md:gap-8">
          {/* Drop-cap opening paragraph — spans 7 */}
          <article className="col-span-12 lg:col-span-7 bg-white border border-parchment-3 rounded-2xl p-10 md:p-14">
            <p className="font-body text-lg leading-[1.75] text-ink-soft first-letter:font-display first-letter:font-bold first-letter:italic first-letter:text-[88px] first-letter:leading-[0.82] first-letter:float-left first-letter:pr-3 first-letter:pt-2 first-letter:text-burgundy">
              David Morse is an Assistant United States Attorney in the District of Idaho.
              Every day, he prosecutes serious federal crimes — drug trafficking, firearms
              offenses, fraud, and identity theft — to keep Idaho families safe.
            </p>
          </article>

          {/* Portrait tile — photograph with brand gradient per guide */}
          <div className="col-span-12 lg:col-span-5 relative bg-navy rounded-2xl min-h-[420px] md:min-h-[520px] overflow-hidden flex items-end p-10">
            <Image
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop"
              alt="David Morse, candidate for Fourth District Judge, on the courthouse steps in Boise"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            {/* Brand-guide overlay: 180° transparent → navy/90 starting at 40% */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,56,88,0)_0%,rgba(44,56,88,0)_40%,rgba(44,56,88,0.95)_100%)]"
            />
            <div className="absolute inset-4 border border-gold/40 pointer-events-none z-10" />
            <div className="absolute inset-[22px] border border-gold/20 pointer-events-none z-10" />
            <div className="relative z-10">
              <div className="text-[12px] tracking-[2.5px] uppercase text-gold font-bold mb-4">
                Portrait · Candidate
              </div>
              <div className="font-display font-bold text-parchment text-3xl md:text-4xl leading-tight">
                Experienced.
                <br />
                Ethical. <span className="italic text-gold font-medium">Fair.</span>
              </div>
            </div>
          </div>

          {/* Bio continuation — three body paragraphs, asymmetric spans */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 space-y-6 mt-4">
            {BIO_PARAGRAPHS.map((p) => (
              <p key={p.slice(0, 20)} className="text-base md:text-lg leading-[1.8] text-ink-soft max-w-[65ch]">
                {p}
              </p>
            ))}
          </div>

          {/* Closing credential card */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 mt-6 border-l-2 border-gold pl-8 py-4">
            <p className="font-display italic text-xl md:text-2xl text-navy leading-relaxed">
              "David is an active member of the Idaho State Bar and has served on the
              Professional Conduct Board since 2019 — committed to respectful treatment of
              every person who appears in court."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetDavid
