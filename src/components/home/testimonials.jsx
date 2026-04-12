const QUOTES = [
  {
    body: "David Morse has the integrity, legal expertise, and temperament we need on the bench. He'll serve all Idahoans fairly.",
    author: 'Community Leader',
    role: 'Boise',
    span: 'lg:col-span-7',
  },
  {
    body: "I've watched David in the courtroom — he's thorough, prepared, and treats every person with respect. That's the kind of judge we deserve.",
    author: 'Idaho State Representative',
    role: '',
    span: 'lg:col-span-5',
  },
  {
    body: "David understands Idaho values. His commitment to fairness and the rule of law is exactly what the Fourth District needs.",
    author: 'Former United States Attorney',
    role: 'District of Idaho',
    span: 'lg:col-span-5',
  },
  {
    body: "I've had the opportunity to work on the other side of some of the most serious cases with David Morse. He's always been professional, honest, and plays by the rules. He'd be a great judge.",
    author: 'Partner',
    role: 'Hooper Mitchell & Associates',
    span: 'lg:col-span-7',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-parchment overflow-hidden py-32 md:py-48">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-0 font-display font-extrabold italic text-[200px] md:text-[320px] leading-none text-parchment-3 select-none"
      >
        V
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-8 items-end mb-20">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-burgundy" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
                Chapter · V · The Endorsements
              </span>
            </div>
            <h2 className="font-display font-bold text-navy leading-[1.05] text-[clamp(40px,5.5vw,80px)]">
              What People Are <span className="italic text-burgundy font-medium">Saying.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {QUOTES.map((q, i) => (
            <figure
              key={i}
              className={`col-span-12 ${q.span} bg-white border border-parchment-3 rounded-2xl p-10 md:p-12 flex flex-col justify-between min-h-[300px]`}
            >
              <blockquote className="border-l-[3px] border-gold pl-6 py-1">
                <p className="font-display italic text-xl md:text-2xl text-navy leading-[1.4]">
                  <span className="text-gold">{q.body.split(' ').slice(0, 4).join(' ')}</span>
                  {' '}
                  {q.body.split(' ').slice(4).join(' ')}
                </p>
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-parchment-3">
                <div className="font-display font-bold text-navy text-base">{q.author}</div>
                {q.role && (
                  <div className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold mt-1">
                    {q.role}
                  </div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
