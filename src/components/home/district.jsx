import Image from 'next/image'

const COUNTIES = ['Ada', 'Boise', 'Elmore', 'Valley']
const CITIES = ['Boise', 'Meridian', 'Eagle', 'Kuna', 'Mountain Home', 'McCall', 'Cascade']

const District = () => {
  return (
    <section id="district" className="relative bg-parchment-2 overflow-hidden py-32 md:py-48">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-16 right-8 font-display font-extrabold italic text-[180px] md:text-[280px] leading-none text-gold/15 select-none"
      >
        IV
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-8 md:gap-12">
        {/* Left dominant text — 7 cols */}
        <div className="col-span-12 lg:col-span-7">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-burgundy" />
            <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
              Chapter · III · The District
            </span>
          </div>
          <h2 className="font-display font-bold text-navy leading-[1.05] text-[clamp(40px,5.5vw,76px)]">
            About the <span className="italic text-burgundy font-medium">Fourth Judicial</span> District.
          </h2>
          <div className="mt-10 space-y-6 max-w-[60ch] text-ink-soft text-base md:text-lg leading-[1.8]">
            <p>
              The Fourth Judicial District is a state trial-court district serving Ada, Boise,
              Elmore, and Valley counties. It includes communities like Boise, Meridian, Eagle,
              Kuna, Mountain Home, McCall, Cascade, and the surrounding rural areas that make
              Idaho unique.
            </p>
            <p>
              This is one of Idaho's fastest-growing regions. The district handles a large and
              diverse caseload: serious criminal cases, civil disputes, family law, and juvenile
              matters. The decisions made in this court affect everyday life — public safety,
              families, property, businesses, and the community's trust in the justice system.
            </p>
          </div>
        </div>

        {/* Right orbiting bento — 5 cols, asymmetric inner grid */}
        <aside className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 content-start">
          {/* Counties tile — spans both cols */}
          <div className="col-span-2 bg-navy text-parchment rounded-2xl p-10 relative overflow-hidden min-h-[220px]">
            <div
              aria-hidden="true"
              className="absolute inset-4 border border-gold/30 pointer-events-none"
            />
            <span className="text-[12px] tracking-[2.5px] uppercase text-gold font-bold">
              Counties Served
            </span>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 font-display text-2xl md:text-3xl font-bold">
              {COUNTIES.map((c) => (
                <li key={c} className="flex items-baseline gap-3">
                  <span className="text-gold text-sm italic">·</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Community photograph tile */}
          <div className="relative rounded-2xl overflow-hidden min-h-[180px]">
            <Image
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=900&auto=format&fit=crop"
              alt="An Idaho community gathering in the Fourth Judicial District"
              fill
              sizes="(min-width: 1024px) 20vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,56,88,0)_30%,rgba(44,56,88,0.92)_100%)]"
            />
            <div className="absolute left-6 bottom-5 right-6">
              <span className="text-[12px] tracking-[2px] uppercase text-gold font-bold">
                Community
              </span>
              <div className="mt-1 font-display font-bold text-parchment text-lg leading-tight">
                Neighbors, Not <span className="italic text-gold">Numbers.</span>
              </div>
            </div>
          </div>

          {/* Quote tile */}
          <div className="bg-burgundy text-parchment rounded-2xl p-8 min-h-[180px] flex items-end">
            <p className="font-display italic text-lg md:text-xl leading-snug">
              "Humility. Efficiency. A steady commitment to the rule of law."
            </p>
          </div>

          {/* Cities strip */}
          <div className="col-span-2 bg-white border border-parchment-3 rounded-2xl p-8">
            <span className="text-[12px] tracking-[2.5px] uppercase text-gold-muted font-bold">
              Communities
            </span>
            <div className="mt-5 flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center border border-parchment-3 text-ink text-xs tracking-wide px-3 py-2 rounded-full font-semibold"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default District
