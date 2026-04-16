import Link from 'next/link'

import { fetchGHLEvents, formatEventTime } from '@/lib/ghl'

const ROMAN = ['I', 'II', 'III', 'IV', 'V']
const ZIGZAG_OFFSETS = [
  'lg:-translate-y-10',
  'lg:translate-y-16',
  'lg:-translate-y-6',
  'lg:translate-y-20',
  'lg:-translate-y-14',
]

const Events = async () => {
  const allEvents = await fetchGHLEvents()
  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)
  const upcoming = allEvents.filter((e) => {
    const raw = e.endDate?.raw || e.date?.raw
    if (!raw) return false
    return new Date(raw) >= startOfToday
  })
  const stops = upcoming.slice(0, 5)

  return (
    <section id="events" className="relative bg-navy text-parchment overflow-hidden py-32 md:py-48">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-10 font-display font-extrabold text-[260px] md:text-[440px] leading-[0.8] text-gold/[0.05] select-none"
      >
        VI
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-16 right-10 font-display font-extrabold italic text-[180px] md:text-[240px] leading-none text-gold/10 select-none hidden lg:block"
      >
        Docket
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        {/* Header — right-aligned to shift rhythm from previous sections */}
        <div className="grid grid-cols-12 gap-y-8 md:gap-8 items-end mb-24">
          <p className="col-span-12 lg:col-span-4 lg:col-start-1 text-parchment/70 text-base md:text-lg leading-relaxed max-w-md order-2 lg:order-1">
            Courthouse steps, kitchen tables, veteran halls. The campaign travels the Fourth
            District every week — come meet David on the road.
          </p>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 text-left lg:text-right order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6 lg:justify-end">
              <span className="h-px w-10 bg-gold lg:order-2" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-gold lg:order-1">
                Chapter · VI · The Docket
              </span>
            </div>
            <h2 className="font-display font-bold leading-[1.02] text-[clamp(44px,6vw,96px)]">
              On the Road to{' '}
              <span className="italic text-gold font-medium">May 19.</span>
            </h2>
          </div>
        </div>

        {/* Empty state */}
        {stops.length === 0 ? (
          <div className="bg-navy-deep border-l-[3px] border-gold p-10 max-w-2xl">
            <div className="text-[12px] tracking-[2.5px] uppercase text-gold font-bold">
              No upcoming stops
            </div>
            <p className="mt-4 text-parchment/85 text-base leading-[1.75]">
              No upcoming stops are on the calendar right now. Check back soon — new stops
              are added as the campaign travels the Fourth District.
            </p>
            <Link
              href="/events"
              className="mt-8 inline-flex items-center gap-2 py-3 text-gold font-bold uppercase text-[12px] tracking-[1.5px] hover:gap-3 transition-all"
            >
              Full Docket →
            </Link>
          </div>
        ) : (
          <>
            {/* Horizontal timeline rail */}
            <div className="relative">
              {/* Gold hairline running through the middle */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
              />
              {/* Ornamental diamond bookends */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 size-2 rotate-45 bg-gold"
              />
              <div
                aria-hidden="true"
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 size-2 rotate-45 bg-gold"
              />

              {/* Zigzagged stop cards */}
              <ol
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 lg:gap-4 items-stretch ${
                  stops.length >= 5
                    ? 'lg:grid-cols-5'
                    : stops.length === 4
                      ? 'lg:grid-cols-4'
                      : stops.length === 3
                        ? 'lg:grid-cols-3'
                        : 'lg:grid-cols-2'
                }`}
              >
                {stops.map((ev, i) => {
                  const numeral = ROMAN[i] || String(i + 1)
                  const offset = ZIGZAG_OFFSETS[i] || ''
                  const timeLine = formatEventTime(ev)
                  return (
                    <li
                      key={ev.id}
                      className={`relative ${offset} transition-transform`}
                    >
                      {/* Tether dot on the rail */}
                      <span
                        aria-hidden="true"
                        className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-gold ring-4 ring-navy"
                      />

                      <article className="group relative bg-navy-deep border border-gold/20 rounded-xl p-7 min-h-[280px] flex flex-col justify-between hover:border-gold hover:bg-navy-deep/80 transition-colors">
                        <Link
                          href={`/events/${ev.id}`}
                          className="absolute inset-0 z-[1]"
                          aria-label={`Open event details for ${ev.title}`}
                        />

                        {/* Large Roman numeral + date block */}
                        <div className="relative flex items-start justify-between">
                          <span className="font-display italic font-bold text-gold text-5xl leading-none">
                            {numeral}
                          </span>
                          <div className="text-right border-l border-gold/25 pl-4">
                            <div className="font-display font-bold text-parchment text-4xl leading-none">
                              {ev.date.day || '—'}
                            </div>
                            <div className="text-[12px] tracking-[1.8px] uppercase text-gold font-bold mt-1">
                              {ev.date.month || 'TBA'}
                              {ev.date.year ? ` · ${ev.date.year}` : ''}
                            </div>
                          </div>
                        </div>

                        {/* Title + category */}
                        <div className="relative mt-8">
                          <span className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                            {ev.type || 'Event'}
                          </span>
                          <h3 className="mt-2 font-display font-bold text-parchment text-xl leading-tight line-clamp-2">
                            {ev.title}
                          </h3>
                        </div>

                        {/* Footer meta — location + start/end time */}
                        <div className="relative mt-6 pt-4 border-t border-gold/15 space-y-1.5">
                          {ev.location && (
                            <div className="flex items-center gap-2">
                              <span
                                aria-hidden="true"
                                className="size-1 rounded-full bg-gold shrink-0"
                              />
                              <span className="text-[12px] text-parchment/70 truncate">
                                {ev.location}
                              </span>
                            </div>
                          )}
                          {timeLine && (
                            <div className="flex items-center gap-2">
                              <span
                                aria-hidden="true"
                                className="size-1 rounded-full bg-gold/50 shrink-0"
                              />
                              <span className="text-[12px] tracking-[1.5px] uppercase text-parchment/60 truncate">
                                {timeLine}
                              </span>
                            </div>
                          )}
                        </div>
                      </article>
                    </li>
                  )
                })}
              </ol>
            </div>
          </>
        )}

        {/* Bottom CTA */}
        <div className="mt-28 md:mt-36 border-t border-gold/15 pt-12 flex justify-center lg:justify-end">
          <Link
            href="/events"
            className="inline-flex items-center gap-3 bg-burgundy hover:bg-burgundy-deep text-parchment px-8 py-5 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
          >
            See the Full Docket →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Events
