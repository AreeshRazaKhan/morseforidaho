import Link from 'next/link'

import SiteNav from '@/components/home/site-nav'
import SiteFooter from '@/components/home/site-footer'
import PageHero from '@/components/shared/page-hero'
import { fetchGHLEvents, formatEventTime } from '@/lib/ghl'

export const revalidate = 60

export const metadata = {
  title: 'Events — Morse For Idaho',
  description:
    'The Docket — every stop David Morse will make on the road to May 19, 2026. Town halls, meet & greets, veteran roundtables, volunteer drives.',
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

const EventsPage = async () => {
  const allEvents = await fetchGHLEvents()
  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)
  const events = allEvents.filter((e) => {
    const raw = e.endDate?.raw || e.date?.raw
    if (!raw) return false
    return new Date(raw) >= startOfToday
  })

  return (
    <>
      <SiteNav />
      <main>
        <PageHero
          volume="Volume III · The Docket"
          title="The Docket."
          titleAccent="On the Road to May 19."
          dek="Courthouse steps, kitchen tables, veteran halls — every stop on the road between now and election day. Free and open to every registered Idaho voter."
          backgroundImage="https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1800&auto=format&fit=crop"
          watermark="VI"
          meta={[
            { label: 'Total Stops', value: `${events.length} · Upcoming` },
            { label: 'Election Day', value: 'May 19 · 2026' },
          ]}
        />

        <section className="relative bg-parchment overflow-hidden py-32 md:py-40">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-8 font-display font-extrabold text-[260px] md:text-[420px] leading-none text-parchment-3 select-none"
          >
            I
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-burgundy" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
                Chapter · I · The Roster
              </span>
            </div>
            <h2 className="font-display font-bold text-navy leading-[1.05] text-[clamp(40px,5.5vw,76px)] max-w-3xl">
              Every stop on the <span className="italic text-burgundy font-medium">circuit.</span>
            </h2>

            {events.length === 0 ? (
              <div className="mt-20 bg-parchment-2 border-l-[3px] border-gold p-10 rounded-r-xl max-w-2xl">
                <div className="text-[12px] tracking-[2.5px] uppercase text-gold-muted font-bold">
                  No upcoming stops
                </div>
                <p className="mt-4 font-display italic text-navy text-2xl leading-snug">
                  The docket is between chapters. Check back soon — new stops are
                  added weekly as the road to May 19 unfolds.
                </p>
              </div>
            ) : (
              <ol className="mt-20 space-y-6 md:space-y-8">
                {events.map((ev, i) => {
                  const isEven = i % 2 === 0
                  const numeral = ROMAN[i] || String(i + 1)
                  return (
                    <li key={ev.id}>
                      <Link
                        href={`/events/${ev.id}`}
                        className="group block relative bg-white border border-parchment-3 rounded-2xl p-8 md:p-12 hover:border-gold/60 hover:-translate-y-1 transition-all overflow-hidden"
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute -top-4 ${
                            isEven ? '-right-2' : '-left-2'
                          } font-display font-extrabold italic text-parchment-3 text-[200px] leading-none group-hover:text-gold/15 transition-colors`}
                        >
                          {numeral}
                        </span>

                        <div className="relative grid grid-cols-12 gap-6 md:gap-10 items-center">
                          <div className="col-span-12 md:col-span-3 lg:col-span-2">
                            <div className="font-display italic text-gold-muted text-xs tracking-[2px] uppercase font-bold">
                              {ev.date.year}
                            </div>
                            <div className="mt-1 font-display font-bold text-navy text-6xl md:text-7xl leading-none">
                              {ev.date.day}
                            </div>
                            <div className="mt-1 text-[12px] tracking-[1.8px] uppercase text-burgundy font-bold">
                              {ev.date.month} · {ev.date.year}
                            </div>
                          </div>

                          <div className="col-span-12 md:col-span-6 lg:col-span-7 md:border-l md:border-parchment-3 md:pl-10">
                            <span className="text-[12px] tracking-[2.5px] uppercase text-gold-muted font-bold">
                              {numeral} · {ev.type}
                            </span>
                            <h3 className="mt-2 font-display font-bold text-navy text-2xl md:text-3xl lg:text-4xl leading-tight">
                              {ev.title}
                            </h3>
                            {ev.description && (
                              <p className="mt-3 text-ink-soft text-base leading-[1.7] max-w-[60ch] line-clamp-3">
                                {ev.description}
                              </p>
                            )}
                          </div>

                          <div className="col-span-12 md:col-span-3 md:border-l md:border-parchment-3 md:pl-8 space-y-4">
                            {formatEventTime(ev) && (
                              <div>
                                <div className="text-[12px] tracking-[1.8px] uppercase text-gold-muted font-bold">
                                  Time
                                </div>
                                <div className="mt-1 font-display text-navy text-lg">
                                  {formatEventTime(ev)}
                                </div>
                              </div>
                            )}
                            {ev.location && (
                              <div>
                                <div className="text-[12px] tracking-[1.8px] uppercase text-gold-muted font-bold">
                                  Venue
                                </div>
                                <div className="mt-1 font-display text-navy text-base leading-snug line-clamp-2">
                                  {ev.location}
                                </div>
                              </div>
                            )}
                            <div className="pt-2 flex items-center gap-2 text-burgundy text-xs font-bold uppercase tracking-[1.5px] group-hover:gap-3 transition-all">
                              Event Details <span aria-hidden="true">→</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ol>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default EventsPage
