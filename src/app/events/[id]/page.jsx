import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import SiteNav from '@/components/home/site-nav'
import SiteFooter from '@/components/home/site-footer'
import RsvpForm from '@/components/events/rsvp-form'
import { fetchGHLEvent, fetchGHLEvents, formatEventTime } from '@/lib/ghl'

export const revalidate = 60

export const generateMetadata = async ({ params }) => {
  const { id } = await params
  const event = await fetchGHLEvent(id)
  if (!event) return { title: 'Event not found — Morse For Idaho' }
  return {
    title: `${event.title} — Morse For Idaho`,
    description: event.description?.slice(0, 160) || 'Morse For Idaho campaign event.',
  }
}

const isRemoteImage = (src) => typeof src === 'string' && /^https?:\/\//i.test(src)

const EventDetailPage = async ({ params }) => {
  const { id } = await params
  const event = await fetchGHLEvent(id)
  if (!event) notFound()

  const allEvents = await fetchGHLEvents()
  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)
  const related = allEvents
    .filter((e) => {
      if (e.id === id) return false
      const raw = e.endDate?.raw || e.date?.raw
      if (!raw) return false
      return new Date(`${raw}T00:00:00`) >= startOfToday
    })
    .slice(0, 2)

  return (
    <>
      <SiteNav />
      <main>
        {/* ═══════ HERO ═══════ */}
        <section className="relative bg-navy text-parchment overflow-hidden pt-[72px]">
          {event.image && (
            <>
              <div className="absolute inset-0 opacity-20" aria-hidden="true">
                {isRemoteImage(event.image) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={event.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={event.image}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                )}
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

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-28 md:pb-40">
            <div className="flex items-center gap-4 mb-10">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 py-3 text-[12px] tracking-[3px] uppercase text-gold/80 hover:text-gold font-bold"
              >
                <span aria-hidden="true">←</span> The Docket
              </Link>
              <span className="h-px w-10 bg-gold/40" />
              <span className="text-[12px] tracking-[3px] uppercase text-gold font-bold">
                {event.type}
              </span>
            </div>

            <div className="grid grid-cols-12 gap-y-8 md:gap-12 items-end">
              <div className="col-span-12 lg:col-span-8">
                <div className="text-sm md:text-base tracking-[2px] uppercase text-gold font-semibold mb-4">
                  {event.date.month} {event.date.day}, {event.date.year}
                </div>
                <h1 className="font-display font-bold leading-[0.98] tracking-[-0.01em] text-[clamp(44px,7vw,104px)]">
                  {event.title}
                </h1>
              </div>

              <aside className="col-span-12 lg:col-span-4 lg:pl-10 lg:border-l lg:border-gold/25 space-y-8">
                <div>
                  <div className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                    When
                  </div>
                  <div className="mt-2 font-display font-bold text-parchment text-3xl leading-none">
                    {event.date.day}
                    <span className="text-gold">·</span>
                    {event.date.month}
                  </div>
                  {formatEventTime(event) && (
                    <div className="mt-2 text-[12px] tracking-[1.8px] uppercase text-parchment/60">
                      {formatEventTime(event)}
                    </div>
                  )}
                </div>
                {event.location && (
                  <div>
                    <div className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                      Where
                    </div>
                    <div className="mt-2 font-display text-parchment text-base leading-snug">
                      {event.location}
                    </div>
                  </div>
                )}
                <div className="mt-4 inline-flex items-center gap-2 text-[12px] tracking-[1.5px] uppercase text-gold/70 font-semibold">
                  RSVP form below ↓
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ═══════ BODY ═══════ */}
        <section className="relative bg-parchment overflow-hidden py-32 md:py-40">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -left-8 font-display font-extrabold italic text-[260px] md:text-[420px] leading-none text-parchment-3 select-none"
          >
            I
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-y-8 md:gap-12">
            <article className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-burgundy" />
                <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
                  Chapter · I · About This Stop
                </span>
              </div>
              <h2 className="font-display font-bold text-navy leading-[1.05] text-[clamp(36px,4.5vw,64px)] max-w-3xl">
                {event.title}
              </h2>

              {event.description ? (
                <div className="mt-12 space-y-6">
                  {event.description.split(/\n\n+/).map((paragraph, i) => (
                    <p
                      key={i}
                      className={`text-base md:text-lg leading-[1.85] text-ink-soft max-w-[65ch] ${
                        i === 0
                          ? 'first-letter:font-display first-letter:font-bold first-letter:italic first-letter:text-[88px] first-letter:leading-[0.82] first-letter:float-left first-letter:pr-3 first-letter:pt-2 first-letter:text-burgundy'
                          : ''
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="mt-12 font-display italic text-ink-soft text-xl leading-relaxed">
                  Full details will be posted soon. RSVP below and we'll send updates as
                  the stop approaches.
                </p>
              )}
            </article>

            <aside className="col-span-12 lg:col-span-4 space-y-6">
              <div className="bg-navy text-parchment rounded-2xl p-10 relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-3 border border-gold/25 pointer-events-none rounded-xl"
                />
                <div className="relative">
                  <span className="text-[12px] tracking-[2.5px] uppercase text-gold font-bold">
                    I · The Details
                  </span>
                  <dl className="mt-6 space-y-5">
                    <div>
                      <dt className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                        Date
                      </dt>
                      <dd className="mt-1 font-display text-parchment text-lg">
                        {event.date.month} {event.date.day}, {event.date.year}
                      </dd>
                    </div>
                    {formatEventTime(event) && (
                      <div>
                        <dt className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                          Time
                        </dt>
                        <dd className="mt-1 font-display text-parchment text-lg">
                          {formatEventTime(event)}
                        </dd>
                      </div>
                    )}
                    <div>
                      <dt className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                        Category
                      </dt>
                      <dd className="mt-1 font-display text-parchment text-lg">
                        {event.type}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {event.location && (
                <div className="bg-burgundy text-parchment rounded-2xl p-10">
                  <span className="text-[12px] tracking-[2.5px] uppercase text-gold font-bold">
                    II · Find It
                  </span>
                  <div className="mt-5 font-display text-parchment text-lg leading-snug">
                    {event.location}
                  </div>
                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      event.location
                    )}`}
                    target="_blank"
                    rel="noopener"
                    className="mt-4 inline-flex items-center gap-2 py-3 text-gold font-bold uppercase text-[12px] tracking-[1.5px] hover:gap-3 transition-all"
                  >
                    Open in Maps →
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </section>

        {/* ═══════ RSVP FORM ═══════ */}
        <section className="relative bg-navy text-parchment overflow-hidden py-32 md:py-48">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-10 font-display font-extrabold text-[280px] md:text-[440px] leading-none text-gold/[0.05] select-none"
          >
            RSVP
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-y-8 md:gap-12">
            <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 self-start">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-gold" />
                <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
                  Chapter · II · Save a Seat
                </span>
              </div>
              <h2 className="font-display font-bold leading-[1.05] text-[clamp(40px,5.5vw,76px)]">
                Reserve your{' '}
                <span className="italic text-gold font-medium">place.</span>
              </h2>
              <p className="mt-8 text-parchment/70 text-base md:text-lg leading-[1.8] max-w-md">
                Tell us you're coming and we'll hold your chair. Free and open to every
                registered Idaho voter — bring a neighbor.
              </p>

              <div className="mt-12 space-y-6 border-t border-gold/15 pt-10">
                <div className="flex items-start gap-4">
                  <span className="font-display italic text-gold text-3xl font-bold leading-none shrink-0">
                    I
                  </span>
                  <div>
                    <div className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                      When
                    </div>
                    <p className="mt-1 font-display text-parchment text-lg leading-snug">
                      {event.date.month} {event.date.day}, {event.date.year}
                      {formatEventTime(event) ? ` · ${formatEventTime(event)}` : ''}
                    </p>
                  </div>
                </div>
                {event.location && (
                  <div className="flex items-start gap-4">
                    <span className="font-display italic text-gold text-3xl font-bold leading-none shrink-0">
                      II
                    </span>
                    <div>
                      <div className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                        Where
                      </div>
                      <p className="mt-1 font-display text-parchment text-lg leading-snug">
                        {event.location}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <RsvpForm event={event} />
          </div>
        </section>

        {/* ═══════ RELATED ═══════ */}
        {related.length > 0 && (
          <section className="relative bg-parchment-2 overflow-hidden py-24 md:py-32 border-t border-parchment-3">
            <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
              <div className="flex items-center justify-between gap-8 mb-12 flex-wrap">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="h-px w-10 bg-burgundy" />
                    <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
                      Chapter · III · Next on the Docket
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-navy text-3xl md:text-5xl leading-tight">
                    Other stops on the{' '}
                    <span className="italic text-burgundy font-medium">circuit.</span>
                  </h2>
                </div>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 border border-navy text-navy hover:bg-navy hover:text-parchment px-6 py-3 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
                >
                  Full Docket →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/events/${r.id}`}
                    className="group relative bg-white border border-parchment-3 rounded-2xl p-8 md:p-10 flex items-start gap-6 hover:border-gold/60 hover:-translate-y-1 transition-all overflow-hidden"
                  >
                    <div className="shrink-0 text-center">
                      <div className="font-display font-bold text-navy text-5xl leading-none">
                        {r.date.day}
                      </div>
                      <div className="text-[12px] tracking-[1.5px] uppercase text-burgundy font-bold mt-1">
                        {r.date.month}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 border-l border-parchment-3 pl-6">
                      <span className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                        {r.type}
                      </span>
                      <h3 className="mt-2 font-display font-bold text-navy text-xl md:text-2xl leading-tight">
                        {r.title}
                      </h3>
                      {r.location && (
                        <div className="mt-2 text-xs tracking-[1.5px] uppercase text-ink-muted line-clamp-1">
                          {r.location}
                        </div>
                      )}
                    </div>
                    <span
                      aria-hidden="true"
                      className="text-gold text-xl group-hover:translate-x-1 transition-transform shrink-0"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  )
}

export default EventDetailPage
