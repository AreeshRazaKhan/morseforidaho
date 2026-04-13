import SiteNav from '@/components/home/site-nav'
import SiteFooter from '@/components/home/site-footer'
import PageHero from '@/components/shared/page-hero'
import AskMorseForm from '@/components/ask-morse/ask-morse-form'

export const metadata = {
  title: 'Ask Morse — Morse For Idaho',
  description:
    'Submit a question directly to David Morse. Every question is read. Selected answers are published on the Ask Morse page ahead of Election Day.',
}

const PAST_QA = [
  {
    numeral: 'I',
    topic: 'Judicial Philosophy',
    q: 'What does "applying the law as written" actually mean in practice?',
    a: "It means starting with the text — the statute, the rule, the Constitution — and asking what it says before asking what I want it to say. A judge who reaches the outcome first and reasons backward is not interpreting the law; they are rewriting it.",
    asker: 'A voter · Boise',
  },
  {
    numeral: 'II',
    topic: 'Courtroom Experience',
    q: "What prepared you most for the bench?",
    a: "The heavy dockets. When you've argued in front of judges whose time is precious, you learn to prepare, to be direct, and to respect the court's attention. I'll bring that same respect from the other side of the bench.",
    asker: 'An Idaho attorney',
  },
  {
    numeral: 'III',
    topic: 'Something Personal',
    q: 'Why a judicial race and not a political one?',
    a: "Because the bench is a trust, not a platform. I'm not running on promises of outcomes. I'm running on a promise of process — that every person who walks into my courtroom will be heard, and that every ruling will be measured against the Constitution, not the headline.",
    asker: 'A Meridian neighbor',
  },
]

const AskMorsePage = () => {
  return (
    <>
      <SiteNav />
      <main>
        <PageHero
          volume="Volume V · The Questions"
          title="Ask"
          titleAccent="Morse."
          dek="Every question is read. Selected answers are published here ahead of Election Day — no political consultants, no canned responses. Just David, a serif font, and the same standard he brings to the bench."
          backgroundImage="/idaho-sawtooth.webp"
          watermark="?"
          watermarkItalic={false}
          meta={[
            { label: 'Questions Read', value: 'Every single one' },
            { label: 'Response Time', value: 'Published weekly' },
          ]}
        />

        {/* ═══════ FORM SECTION ═══════ */}
        <section className="relative bg-parchment overflow-hidden py-32 md:py-48">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-8 font-display font-extrabold italic text-[260px] md:text-[420px] leading-none text-parchment-3 select-none"
          >
            ?
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-y-8 md:gap-12">
            {/* Left — framing */}
            <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 self-start">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-burgundy" />
                <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
                  Chapter · I · Submit a Question
                </span>
              </div>
              <h2 className="font-display font-bold text-navy leading-[1.05] text-[clamp(40px,5vw,72px)]">
                Write it <span className="italic text-burgundy font-medium">plainly.</span>
              </h2>
              <p className="mt-8 text-ink-soft text-base md:text-lg leading-[1.8] max-w-md">
                Plain language is welcome. Legal jargon is welcome. Short is welcome. Long
                is welcome. The only rule is civility — the same standard David carries
                into every courtroom.
              </p>

              <div className="mt-12 space-y-6 border-t border-parchment-3 pt-8">
                {[
                  {
                    num: 'I',
                    title: 'Every question is read',
                    body: 'By David or a member of the campaign team.',
                  },
                  {
                    num: 'II',
                    title: 'Selected answers published',
                    body: 'With your name initialized unless you tell us otherwise.',
                  },
                  {
                    num: 'III',
                    title: 'No campaign spam',
                    body: 'Your email is used only for a reply — never sold, never shared.',
                  },
                ].map((p) => (
                  <div key={p.num} className="flex items-start gap-4">
                    <span className="font-display italic text-gold text-3xl font-bold leading-none shrink-0">
                      {p.num}
                    </span>
                    <div>
                      <div className="font-display font-bold text-navy text-base">
                        {p.title}
                      </div>
                      <p className="mt-1 text-ink-soft text-sm leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <AskMorseForm />
          </div>
        </section>

        {/* ═══════ PAST Q&A ═══════ */}
        <section className="relative bg-parchment-2 overflow-hidden py-32 md:py-40">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 font-display font-extrabold italic text-[240px] md:text-[380px] leading-none text-parchment-3 select-none"
          >
            Q&amp;A
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-12 gap-y-8 md:gap-8 items-end mb-20">
              <div className="col-span-12 lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-burgundy" />
                  <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
                    Chapter · II · Past Letters
                  </span>
                </div>
                <h2 className="font-display font-bold text-navy leading-[1.05] text-[clamp(40px,5.5vw,76px)]">
                  From the <span className="italic text-burgundy font-medium">record.</span>
                </h2>
              </div>
              <p className="col-span-12 lg:col-span-5 text-ink-soft text-base md:text-lg leading-relaxed max-w-md">
                A small sample of questions David has answered from voters across the
                Fourth District.
              </p>
            </div>

            <ol className="space-y-6">
              {PAST_QA.map((qa) => (
                <li
                  key={qa.numeral}
                  className="relative bg-white border border-parchment-3 rounded-2xl p-10 md:p-12 grid grid-cols-12 gap-y-6 md:gap-10 hover:border-gold/50 transition-colors"
                >
                  <div className="col-span-12 md:col-span-2">
                    <span className="font-display italic font-bold text-gold text-6xl leading-none block">
                      {qa.numeral}
                    </span>
                    <div className="mt-3 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                      {qa.topic}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-10 md:border-l md:border-parchment-3 md:pl-10">
                    <div className="text-[12px] tracking-[2px] uppercase text-burgundy font-bold">
                      The Question
                    </div>
                    <h3 className="mt-2 font-display font-bold text-navy text-2xl md:text-3xl leading-tight max-w-3xl">
                      {qa.q}
                    </h3>

                    <div className="mt-8 text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                      David's Answer
                    </div>
                    <blockquote className="mt-3 border-l-[3px] border-gold pl-6 py-1">
                      <p className="font-display italic text-navy text-lg md:text-xl leading-[1.5] max-w-[65ch]">
                        {qa.a}
                      </p>
                    </blockquote>
                    <div className="mt-6 text-[12px] tracking-[1.5px] uppercase text-ink-muted">
                      — {qa.asker}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default AskMorsePage
