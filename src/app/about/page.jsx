import Image from 'next/image'
import Link from 'next/link'

import SiteNav from '@/components/home/site-nav'
import SiteFooter from '@/components/home/site-footer'

export const metadata = {
  title: 'About David Morse — Morse For Idaho',
  description:
    'Assistant United States Attorney, former Deputy Attorney General, U.S. Marine Corps veteran — the experience and values David Morse brings to the Fourth District bench.',
}

const CAREER_CHAPTERS = [
  {
    numeral: 'I',
    year: 'Veteran',
    role: 'U.S. Marine Corps',
    subtitle: 'Intelligence · Imagery · Arabic Linguist',
    body: 'David served his country as an Intelligence Specialist, Imagery Analyst, and Arabic Linguist in the United States Marine Corps — service that instilled the discipline and integrity he brings to every case.',
  },
  {
    numeral: 'II',
    year: 'Admitted 2016',
    role: 'University of Idaho · College of Law',
    subtitle: 'Juris Doctor',
    body: 'Earned his law degree from the University of Idaho, grounding his practice in the state that raised him. Admitted to the Idaho State Bar in 2016.',
  },
  {
    numeral: 'III',
    year: 'Former',
    role: 'Deputy Attorney General',
    subtitle: "Idaho Special Prosecutions Unit",
    body: "Served in Idaho's Special Prosecutions Unit, prosecuting public corruption, insurance fraud, and violent crime — holding government officials and private citizens equally accountable under the law.",
  },
  {
    numeral: 'IV',
    year: 'Present',
    role: 'Assistant United States Attorney',
    subtitle: 'District of Idaho',
    body: "Today, David prosecutes serious federal crimes — drug trafficking, firearms offenses, fraud, and identity theft — to keep Idaho families safe. He has argued a Fifth Amendment issue before the Ninth Circuit Court of Appeals.",
  },
  {
    numeral: 'V',
    year: 'Since 2019',
    role: 'Professional Conduct Board',
    subtitle: 'Idaho State Bar',
    body: 'An active member of the Idaho State Bar, David serves on the Professional Conduct Board, participating in professionalism and ethics initiatives that promote civility and high standards of practice.',
  },
]

const VALUES = [
  {
    numeral: 'I',
    word: 'Experienced',
    body: 'More than a decade in Idaho courtrooms — trial and appellate, state and federal — prosecuting the most serious cases the Fourth District sees.',
  },
  {
    numeral: 'II',
    word: 'Ethical',
    body: 'The same standard for public officials and private citizens. No one is above the law; every ruling measured against the Constitution, not the headline.',
  },
  {
    numeral: 'III',
    word: 'Fair',
    body: 'Listen carefully. Ensure both sides are heard. Apply the law consistently — so every person leaves the courtroom knowing they were heard.',
  },
]

const AboutPage = () => {
  return (
    <>
      <SiteNav />
      <main>
        {/* ═══════ HERO ═══════ */}
        <section className="relative bg-navy text-parchment overflow-hidden pt-[72px]">
          <div className="absolute inset-0 opacity-15" aria-hidden="true">
            <Image
              src="/idaho-sawtooth.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy"
          />
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
            className="pointer-events-none absolute -right-10 -bottom-28 font-display font-extrabold italic text-[260px] md:text-[440px] leading-[0.8] text-gold/[0.06] select-none"
          >
            I
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-28 md:pb-40">
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[12px] md:text-xs font-bold uppercase tracking-[4px] text-gold">
                Volume I · The Candidate · About David
              </span>
            </div>

            <div className="grid grid-cols-12 gap-y-8 md:gap-12 items-end">
              <div className="col-span-12 lg:col-span-8">
                <h1 className="font-display font-bold leading-[0.96] tracking-[-0.02em] text-[clamp(56px,9vw,128px)]">
                  About
                  <br />
                  <span className="italic text-gold font-medium">David Morse.</span>
                </h1>
                <p className="mt-10 max-w-2xl text-base md:text-lg text-parchment/75 leading-[1.8]">
                  Assistant United States Attorney. Former Deputy Attorney General. U.S.
                  Marine Corps veteran. University of Idaho College of Law. Experienced
                  federal and state prosecutor committed to fairness, integrity, and the
                  rule of law for Ada, Boise, Elmore, and Valley Counties.
                </p>
              </div>

              {/* Credentials meta rail */}
              <aside className="col-span-12 lg:col-span-4 lg:pl-10 lg:border-l lg:border-gold/25 space-y-8">
                {[
                  { label: 'Degree', value: 'J.D. · U. of Idaho' },
                  { label: 'Admitted', value: 'Idaho Bar · 2016' },
                  { label: 'Service', value: 'U.S. Marine Corps' },
                  { label: 'Practice', value: 'District of Idaho' },
                ].map((c) => (
                  <div key={c.label}>
                    <div className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                      {c.label}
                    </div>
                    <div className="mt-1.5 font-display text-xl text-parchment">{c.value}</div>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* ═══════ OPENING — DROP CAP ═══════ */}
        <section className="relative bg-parchment overflow-hidden py-32 md:py-48">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-10 font-display font-extrabold text-[260px] md:text-[420px] leading-none text-parchment-3 select-none"
          >
            II
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-y-8 md:gap-12">
            {/* Portrait — spans 5, tall, offset low */}
            <div className="col-span-12 lg:col-span-5 lg:row-span-2 relative bg-navy rounded-2xl min-h-[480px] md:min-h-[640px] overflow-hidden">
              <Image
                src="/david-morse-portrait.webp"
                alt="David Morse, candidate for Fourth District Judge"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,56,88,0)_0%,rgba(44,56,88,0)_40%,rgba(44,56,88,0.95)_100%)]"
              />
              <div className="absolute inset-4 border border-gold/40 pointer-events-none z-10" />
              <div className="absolute inset-[22px] border border-gold/20 pointer-events-none z-10" />
              <div className="absolute left-10 right-10 bottom-10 z-10">
                <div className="font-display font-bold text-parchment text-3xl md:text-4xl leading-tight">
                  Experienced. Ethical.{' '}
                  <span className="italic text-gold font-medium">Fair.</span>
                </div>
              </div>
            </div>

            {/* Drop-cap opening */}
            <article className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-burgundy" />
                <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
                  Chapter · I · The Story
                </span>
              </div>
              <h2 className="font-display font-bold text-navy leading-[1.05] text-[clamp(40px,5vw,72px)] max-w-2xl">
                Meet <span className="italic text-burgundy font-medium">David Morse.</span>
              </h2>

              <p className="mt-12 font-body text-lg leading-[1.85] text-ink-soft first-letter:font-display first-letter:font-bold first-letter:italic first-letter:text-[96px] first-letter:leading-[0.82] first-letter:float-left first-letter:pr-4 first-letter:pt-2 first-letter:text-burgundy">
                David Morse is an Assistant United States Attorney in the District of Idaho.
                Every day, he prosecutes serious federal crimes — drug trafficking, firearms
                offenses, fraud, and identity theft — to keep Idaho families safe.
              </p>

              <p className="mt-6 text-base md:text-lg text-ink-soft leading-[1.85] max-w-[65ch]">
                Before joining the U.S. Attorney's Office, David served as a Deputy Attorney
                General in Idaho's Special Prosecutions Unit. There he prosecuted public
                corruption, insurance fraud, and violent crime, holding both government
                officials and private citizens equally accountable under the law.
              </p>

              <p className="mt-6 text-base md:text-lg text-ink-soft leading-[1.85] max-w-[65ch]">
                David has handled complex felony cases across trial and appellate courts,
                including arguing a Fifth Amendment issue before the Ninth Circuit Court of
                Appeals. This depth of courtroom experience has given him firsthand knowledge
                of the constitutional principles a judge must apply every day.
              </p>
            </article>

            {/* Stat strip below portrait column */}
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 grid grid-cols-3 gap-6 border-t border-parchment-3 pt-10 mt-6">
              {[
                { n: '10+', l: 'Years Law' },
                { n: '15+', l: 'Years Service' },
                { n: '1000+', l: 'Court Cases' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display font-bold text-navy text-4xl md:text-5xl leading-none">
                    {s.n}
                  </div>
                  <div className="mt-3 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ CAREER TIMELINE ═══════ */}
        <section className="relative bg-navy-deep text-parchment overflow-hidden py-32 md:py-48">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 top-10 font-display font-extrabold text-[260px] md:text-[420px] leading-none text-gold/[0.05] select-none"
          >
            03
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-12 gap-y-8 md:gap-8 items-end mb-20">
              <div className="col-span-12 lg:col-span-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-gold" />
                  <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
                    Chapter · II · The Record
                  </span>
                </div>
                <h2 className="font-display font-bold leading-[1.05] text-[clamp(40px,5.5vw,80px)]">
                  A Career Earned{' '}
                  <span className="italic text-gold font-medium">One Case at a Time.</span>
                </h2>
              </div>
              <p className="col-span-12 lg:col-span-4 text-parchment/70 text-base md:text-lg leading-relaxed max-w-md">
                Five chapters — Marine, student, state prosecutor, federal prosecutor, and
                steward of the Bar. Each one prepared him for the bench.
              </p>
            </div>

            {/* Vertical editorial timeline */}
            <ol className="relative space-y-4 md:space-y-6">
              {/* Central gold rail */}
              <div
                aria-hidden="true"
                className="hidden md:block absolute left-[116px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent"
              />
              {CAREER_CHAPTERS.map((c) => (
                <li
                  key={c.numeral}
                  className="relative grid grid-cols-12 gap-y-6 md:gap-8 items-start bg-navy/40 border border-gold/15 rounded-xl p-6 md:p-8 hover:border-gold/40 transition-colors"
                >
                  {/* Numeral + rail tether */}
                  <div className="col-span-12 md:col-span-2 flex md:flex-col items-center md:items-start gap-4 md:gap-2 relative">
                    <span className="font-display italic font-bold text-gold text-5xl md:text-6xl leading-none">
                      {c.numeral}
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden md:block absolute left-[92px] top-6 size-3 rounded-full bg-gold ring-4 ring-navy-deep"
                    />
                    <div className="text-[12px] tracking-[1.8px] uppercase text-gold-muted font-bold">
                      {c.year}
                    </div>
                  </div>

                  {/* Role + subtitle + body */}
                  <div className="col-span-12 md:col-span-10 md:pl-8">
                    <h3 className="font-display font-bold text-parchment text-2xl md:text-3xl leading-tight">
                      {c.role}
                    </h3>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="h-px w-6 bg-gold" />
                      <span className="text-[12px] tracking-[2px] uppercase text-gold font-semibold">
                        {c.subtitle}
                      </span>
                    </div>
                    <p className="mt-5 text-parchment/70 text-base leading-[1.8] max-w-[62ch]">
                      {c.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══════ VALUES ═══════ */}
        <section className="relative bg-navy text-parchment overflow-hidden py-32 md:py-48">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-10 font-display font-extrabold text-[300px] md:text-[460px] leading-none text-gold/[0.05] select-none"
          >
            04
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
                Chapter · IV · The Values
              </span>
            </div>
            <h2 className="font-display font-bold leading-[1.05] text-[clamp(44px,6vw,96px)] max-w-4xl">
              Experienced. Ethical.
              <br />
              <span className="italic text-gold font-medium">Fair.</span>
            </h2>

            <div className="mt-20 grid grid-cols-12 gap-y-6 md:gap-8">
              {VALUES.map((v, i) => (
                <article
                  key={v.numeral}
                  className={`col-span-12 ${
                    i === 1 ? 'lg:col-span-4 lg:mt-16' : 'lg:col-span-4'
                  } relative bg-navy-deep border border-gold/20 rounded-2xl p-10 md:p-12 min-h-[320px] flex flex-col justify-between overflow-hidden group hover:border-gold/50 transition-colors`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-4 -right-2 font-display font-extrabold italic text-gold/15 text-[160px] leading-none group-hover:text-gold/25 transition-colors"
                  >
                    {v.numeral}
                  </span>
                  <div className="relative">
                    <span className="text-[12px] tracking-[2.5px] uppercase text-gold-muted font-bold">
                      Principle · {v.numeral}
                    </span>
                    <h3 className="mt-4 font-display font-bold text-parchment text-4xl md:text-5xl leading-tight">
                      {v.word}
                      <span className="text-gold">.</span>
                    </h3>
                  </div>
                  <p className="relative mt-10 text-parchment/70 text-[15px] leading-[1.8] max-w-[40ch]">
                    {v.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ CTA ═══════ */}
        <section className="relative bg-burgundy text-parchment overflow-hidden py-32 md:py-40">
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
            className="pointer-events-none absolute -bottom-24 -right-10 font-display font-extrabold text-[280px] md:text-[440px] leading-none text-gold/[0.07] select-none"
          >
            2026
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-y-8 md:gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-gold" />
                <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
                  Chapter · V · Ready to Serve
                </span>
              </div>
              <h2 className="font-display font-bold leading-[1.02] text-[clamp(44px,6vw,92px)]">
                A Judge You Can{' '}
                <span className="italic text-gold font-medium">Trust.</span>
              </h2>
              <p className="mt-8 text-parchment/80 text-base md:text-lg max-w-xl leading-[1.8]">
                David Morse is ready to serve the Fourth Judicial District with integrity,
                humility, and respect for every person who enters the courtroom. Election
                day — May 19, 2026.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/volunteer"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-muted hover:text-parchment text-navy px-7 py-4 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
                >
                  Join the Campaign →
                </Link>
                <Link
                  href="/ask-morse"
                  className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-navy px-7 py-4 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default AboutPage
