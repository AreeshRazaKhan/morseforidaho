import SiteNav from '@/components/home/site-nav'
import SiteFooter from '@/components/home/site-footer'
import LegalHero from '@/components/legal/legal-hero'
import LegalSection from '@/components/legal/legal-section'

export const metadata = {
  title: 'Terms of Service — Morse For Idaho',
  description:
    'Legally binding conditions for using services and communications with Morse For Idaho.',
}

const TermsOfServicePage = () => {
  return (
    <>
      <SiteNav />
      <main>
        <LegalHero
          chapter="Chapter · The Covenant · Terms"
          title="Terms of Service."
          effectiveDate="April 12, 2026"
        />

        <section className="relative bg-parchment py-24 md:py-32">
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <p className="text-ink-soft text-base md:text-lg leading-[1.8] max-w-3xl">
              These Terms of Service ("Agreement") establish legally binding conditions
              for using services and communications with Morse For Idaho, including this
              website.
            </p>

            <div className="mt-24 space-y-16">
              <LegalSection numeral="I" title="Services and Communications">
                <p>
                  The Committee provides campaign-related information, updates, and engagement
                  opportunities including event invitations, volunteer coordination, donation
                  requests, voter outreach, and constituent support. Users agree to use
                  services lawfully without misusing or interfering with provided systems.
                </p>
              </LegalSection>

              <LegalSection numeral="II" title="Participation and Contributions">
                <p>
                  Participants may voluntarily engage in campaign activities, volunteer, or
                  make financial contributions. All contributions remain voluntary and subject
                  to applicable campaign finance laws. Users must provide accurate information
                  when engaging.
                </p>
              </LegalSection>

              <LegalSection numeral="III" title="No Guarantee of Outcomes">
                <p>
                  The Committee makes no guarantees regarding election outcomes, policy
                  implementation, or event availability or participation opportunities.
                </p>
              </LegalSection>

              <LegalSection numeral="IV" title="Intellectual Property">
                <p>
                  Campaign materials, website content, graphics, branding, and messaging belong
                  to Morse For Idaho and cannot be copied, reproduced, or distributed without
                  written permission.
                </p>
              </LegalSection>

              <LegalSection numeral="V" title="Media and Testimonial Release">
                <p>
                  By participating in campaign events, individuals grant permission to use
                  their name, image, voice, and likeness in photographs, videos, or media for
                  campaign purposes without compensation.
                </p>
              </LegalSection>

              <LegalSection numeral="VI" title="SMS Messaging and Communications">
                <p>
                  <strong className="text-navy font-display">Program Name:</strong> Morse For
                  Idaho Campaign Messaging. By opting in, users agree to receive text messages
                  from Morse For Idaho regarding the campaign and its activities.
                </p>
                <p>
                  <strong className="text-navy font-display">Message Types:</strong> Users who
                  opt in may receive campaign updates, event invitations, volunteer
                  opportunities, donation requests, fundraising appeals, and voter engagement
                  messages. Informational consent and promotional consent are collected
                  separately; each authorizes only its corresponding message category.
                </p>
                <p>
                  <strong className="text-navy font-display">Opt-In Process:</strong> Users
                  select an unchecked SMS consent checkbox on the website forms. Phone numbers
                  alone do not constitute consent.
                </p>
                <p>
                  <strong className="text-navy font-display">STOP — Opt-Out:</strong> You can
                  cancel the SMS service at any time. Simply text "STOP" to any message and
                  you will immediately be unsubscribed. Opt-out requests are processed within
                  10 business days.
                </p>
                <p>
                  <strong className="text-navy font-display">HELP — Assistance:</strong> If you
                  experience issues with the messaging program, reply with the keyword "HELP"
                  for more assistance, or reach out directly to david@morseforidaho.com or
                  (508) 801-6634.
                </p>
                <p>
                  <strong className="text-navy font-display">Data Rates & Frequency:</strong>{' '}
                  As always, message and data rates may apply for messages sent to you from
                  us and to us from you. Message frequency varies.
                </p>
                <p>
                  <strong className="text-navy font-display">Carrier Liability:</strong>{' '}
                  Carriers are not liable for delayed or undelivered messages.
                </p>
                <p>
                  <strong className="text-navy font-display">Consent Disclaimer:</strong>{' '}
                  Consent to receive SMS messages is not a condition of any purchase,
                  donation, or participation.
                </p>
                <p>
                  <strong className="text-navy font-display">Data Privacy:</strong> Morse For
                  Idaho does not sell or share mobile information or opt-in data for
                  marketing. For privacy-related inquiries, please refer to our{' '}
                  <a href="/privacy-policy" className="text-burgundy hover:underline font-semibold">
                    Privacy Policy
                  </a>
                  .
                </p>
                <p>
                  <strong className="text-navy font-display">Age:</strong> Users must be 18 or
                  older.
                </p>
              </LegalSection>

              <LegalSection numeral="VII" title="Privacy">
                <p>
                  Use is governed by the Privacy Policy describing information collection,
                  use, and protection.
                </p>
              </LegalSection>

              <LegalSection numeral="VIII" title="Relationship of Parties">
                <p>
                  This Agreement creates no partnership, employment, or agency relationship.
                </p>
              </LegalSection>

              <LegalSection numeral="IX" title="Modification of Terms">
                <p>
                  The Committee may update Terms at any time. Updates become effective upon
                  posting. Continued use indicates acceptance.
                </p>
              </LegalSection>

              <LegalSection numeral="X" title="Governing Law">
                <p>
                  This Agreement follows applicable state law without conflict-of-law
                  principles.
                </p>
              </LegalSection>

              <LegalSection numeral="XI" title="Limitation of Liability">
                <p>
                  To the fullest extent permitted by law, the Committee shall not be liable
                  for indirect, incidental, or consequential damages. Services are provided
                  "as is" without warranties.
                </p>
              </LegalSection>

              <LegalSection numeral="XII" title="Indemnification">
                <p>
                  Users agree to indemnify and hold harmless Morse For Idaho, its affiliates,
                  officers, and representatives from claims arising from website use or
                  Agreement violations.
                </p>
              </LegalSection>

              <LegalSection numeral="XIII" title="Severability">
                <p>
                  If provisions are unenforceable, remaining provisions continue in full
                  effect.
                </p>
              </LegalSection>

              <LegalSection numeral="XIV" title="Entire Agreement">
                <p>
                  This Agreement constitutes the entire understanding regarding service use
                  and communications.
                </p>
              </LegalSection>

              <LegalSection numeral="XV" title="Contact Information">
                <div className="bg-parchment-2 border-l-[3px] border-gold p-8 rounded-r-xl not-prose">
                  <div className="font-display text-navy text-2xl font-bold">
                    Morse For Idaho
                  </div>
                  <div className="mt-4 space-y-1 text-ink">
                    <div>P.O. Box 171101, Boise, ID 83716</div>
                    <div>
                      <a
                        href="mailto:david@morseforidaho.com"
                        className="inline-block py-2 text-burgundy hover:text-burgundy-deep underline-offset-4 hover:underline"
                      >
                        david@morseforidaho.com
                      </a>
                    </div>
                    <div>
                      <a
                        href="tel:+15088016634"
                        className="inline-block py-2 text-burgundy hover:text-burgundy-deep underline-offset-4 hover:underline"
                      >
                        (508) 801-6634
                      </a>
                    </div>
                  </div>
                </div>
              </LegalSection>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default TermsOfServicePage
