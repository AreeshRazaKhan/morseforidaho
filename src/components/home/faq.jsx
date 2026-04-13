'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    q: 'What does a Fourth District Judge do?',
    a: 'The Fourth Judicial District covers Ada, Valley, Elmore and Boise counties. District judges hear felony criminal cases, civil disputes and appeals from magistrate courts. They play a critical role in upholding justice for our community.',
  },
  {
    q: 'What qualifies David Morse for the bench?',
    a: "David brings over 10 years of legal experience, including extensive courtroom practice and deep roots in Idaho's legal community. He is committed to applying the law fairly and impartially.",
  },
  {
    q: 'Is this a partisan race?',
    a: 'Judicial elections in Idaho are nonpartisan. David Morse is running on his qualifications, experience, and commitment to fairness — not a party label.',
  },
  {
    q: 'When is the election?',
    a: 'Election Day is May 19, 2026. Early voting and absentee ballot options will be available. Check with your county elections office for details.',
  },
  {
    q: 'How can I volunteer?',
    a: "Fill out the 'Get Involved' form on this page. You can volunteer for door knocking, host a yard sign, help at events, or simply spread the word to friends and family.",
  },
  {
    q: 'How are donations used?',
    a: "All contributions go directly toward campaign operations. Yard signs, community events, voter outreach, and getting David's message to every corner of the Fourth District. Every dollar counts.",
  },
  {
    q: 'How is my personal information protected?',
    a: 'We take your privacy seriously. Your information is used solely for campaign communications and is never sold to third parties. You can opt out of text or email communications at any time. See our Privacy Policy and Terms & Conditions for full details.',
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative bg-parchment-2 overflow-hidden py-32 md:py-48">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 font-display font-extrabold italic text-[220px] md:text-[340px] leading-none text-parchment-3 select-none"
      >
        VI
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-y-12 md:gap-12">
        <div className="col-span-12 lg:col-span-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-burgundy" />
            <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
              Chapter · VIII · Answers
            </span>
          </div>
          <h2 className="font-display font-bold text-navy leading-[1.05] text-[clamp(40px,5vw,72px)]">
            Frequently <span className="italic text-burgundy font-medium">Asked.</span>
          </h2>
          <p className="mt-8 text-ink-soft text-base max-w-sm leading-relaxed">
            Everything you need to know about the race, the district, and how to get involved
            before May 19.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-8 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`bg-white border rounded-xl transition-[border-color,box-shadow] duration-300 ease-out ${
                  isOpen
                    ? 'border-gold/60 shadow-[0_14px_40px_-20px_rgba(44,56,88,0.25)]'
                    : 'border-parchment-3'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-baseline gap-6 p-8 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-xl"
                >
                  <span className="font-display italic text-gold-muted text-2xl font-bold shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 font-display font-bold text-navy text-xl md:text-2xl leading-snug">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-gold-muted text-2xl leading-none transition-transform duration-300 ease-out ${
                      isOpen ? 'rotate-45 text-burgundy' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-8 pb-8 pl-20 transition-opacity duration-300 ${
                        isOpen ? 'opacity-100 delay-100' : 'opacity-0'
                      }`}
                    >
                      <div className="border-t border-parchment-3 pt-5">
                        <p className="text-ink-soft leading-[1.8] text-base">{item.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
