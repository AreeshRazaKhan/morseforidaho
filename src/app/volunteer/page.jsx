import SiteNav from '@/components/home/site-nav'
import SiteFooter from '@/components/home/site-footer'
import PageHero from '@/components/shared/page-hero'
import VolunteerForm from '@/components/volunteer/volunteer-form'

export const metadata = {
  title: 'Volunteer — Morse For Idaho',
  description:
    'Join the Final Push. Door knock, phone bank, host a yard sign, or crew an event for the Morse For Idaho campaign.',
}

const ROLES = [
  {
    numeral: 'I',
    tag: 'On Foot',
    title: 'Door Knocking',
    body: 'Walk a turf, introduce David, and have real conversations with voters. Two-hour shifts, partners provided, no experience required.',
  },
  {
    numeral: 'II',
    tag: 'From Home',
    title: 'Phone Banking',
    body: 'Call voters from your kitchen table. We provide the script, the list, and the coffee. Evenings and weekends.',
  },
  {
    numeral: 'III',
    tag: 'On Your Lawn',
    title: 'Host a Yard Sign',
    body: 'Show your neighbors. A yard sign is the simplest and most effective form of advocacy in a judicial race.',
  },
  {
    numeral: 'IV',
    tag: 'At the Venue',
    title: 'Event Crew',
    body: 'Set up chairs, welcome guests, hand out literature, and break down at the end of every stop on the docket.',
  },
  {
    numeral: 'V',
    tag: 'Behind the Scenes',
    title: 'Data & Research',
    body: 'Help the campaign with voter file work, research projects, and list management. Ideal for a few focused hours from home.',
  },
  {
    numeral: 'VI',
    tag: 'At the Party',
    title: 'Host an Event',
    body: 'Open your home or business for a coffee, a meet & greet, or a kitchen-table conversation. We handle logistics.',
  },
]

const COUNTIES = ['Ada', 'Boise', 'Elmore', 'Valley', 'Other / Out of District']

const VolunteerPage = () => {
  return (
    <>
      <SiteNav />
      <main>
        <PageHero
          volume="Volume IV · The Volunteers"
          title="Volunteer."
          titleAccent="Six weeks, one district."
          dek="The Final Push begins now. Every door knocked, every neighbor called, every yard sign planted is a vote of confidence in a courtroom that works. Pick a role — the campaign will meet you halfway."
          backgroundImage="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1800&auto=format&fit=crop"
          watermark="IV"
          meta={[
            { label: 'Days to May 19', value: 'The Final Push' },
            { label: 'Roles Open', value: `${ROLES.length} · All skill levels` },
          ]}
        />

        {/* ═══════ ROLES BENTO ═══════ */}
        <section className="relative bg-parchment overflow-hidden py-32 md:py-40">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-10 font-display font-extrabold text-[260px] md:text-[420px] leading-none text-parchment-3 select-none"
          >
            I
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-12 gap-y-8 md:gap-8 items-end mb-20">
              <div className="col-span-12 lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-burgundy" />
                  <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
                    Chapter · I · The Roles
                  </span>
                </div>
                <h2 className="font-display font-bold text-navy leading-[1.05] text-[clamp(40px,5.5vw,80px)]">
                  Six ways to{' '}
                  <span className="italic text-burgundy font-medium">lean in.</span>
                </h2>
              </div>
              <p className="col-span-12 lg:col-span-5 text-ink-soft text-base md:text-lg leading-relaxed max-w-md">
                Pick one, pick three, pick whatever fits your week. Every hour helps carry
                the Fourth District on May 19.
              </p>
            </div>

            <div className="grid grid-cols-12 gap-y-6 md:gap-8">
              {ROLES.map((r, i) => {
                const span =
                  i === 0 ? 'lg:col-span-7' : i === 1 ? 'lg:col-span-5' : i === 4 ? 'lg:col-span-5' : i === 5 ? 'lg:col-span-7' : 'lg:col-span-4'
                return (
                  <article
                    key={r.numeral}
                    className={`col-span-12 md:col-span-6 ${span} relative bg-white border border-parchment-3 rounded-2xl p-10 md:p-12 min-h-[280px] flex flex-col justify-between overflow-hidden group hover:border-gold/60 hover:-translate-y-1 transition-all`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -top-2 -right-2 font-display font-extrabold italic text-parchment-3 text-[150px] leading-none group-hover:text-gold/20 transition-colors"
                    >
                      {r.numeral}
                    </span>
                    <div className="relative">
                      <span className="text-[12px] tracking-[2.5px] uppercase text-gold-muted font-bold">
                        {r.numeral} · {r.tag}
                      </span>
                      <h3 className="mt-4 font-display font-bold text-navy text-3xl leading-tight max-w-xs">
                        {r.title}
                      </h3>
                    </div>
                    <p className="relative mt-8 text-ink-soft text-[15px] leading-[1.75] max-w-[46ch]">
                      {r.body}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════ FORM ═══════ */}
        <section className="relative bg-navy text-parchment overflow-hidden py-32 md:py-48">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-10 font-display font-extrabold text-[280px] md:text-[440px] leading-none text-gold/[0.05] select-none"
          >
            Join
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-y-8 md:gap-12">
            <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 self-start">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-gold" />
                <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
                  Chapter · II · Sign Up
                </span>
              </div>
              <h2 className="font-display font-bold leading-[1.05] text-[clamp(40px,5.5vw,80px)]">
                Sign your <span className="italic text-gold font-medium">name.</span>
              </h2>
              <p className="mt-8 text-parchment/70 text-base md:text-lg leading-[1.8] max-w-md">
                The campaign will route you to the right organizer within two business days.
                You'll hear from a real person — not a robot.
              </p>

              <blockquote className="mt-12 border-l-[3px] border-gold pl-6 py-2 max-w-md">
                <p className="font-display italic text-parchment/90 text-lg leading-[1.5]">
                  <span className="text-gold">Every door knocked</span> is a vote of
                  confidence in a courtroom that works.
                </p>
              </blockquote>
            </div>

            <VolunteerForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default VolunteerPage
