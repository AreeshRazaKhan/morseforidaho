import SiteNav from '@/components/home/site-nav'
import SiteFooter from '@/components/home/site-footer'
import LegalHero from '@/components/legal/legal-hero'
import LegalSection from '@/components/legal/legal-section'

export const metadata = {
  title: 'Privacy Policy — Morse For Idaho',
  description:
    'How Morse For Idaho collects, uses, discloses, and safeguards personal information.',
}

const PrivacyPolicyPage = () => {
  return (
    <>
      <SiteNav />
      <main>
        <LegalHero
          chapter="Chapter · The Covenant · Privacy"
          title="Privacy Policy."
          effectiveDate="April 12, 2026"
        />

        <section className="relative bg-parchment py-24 md:py-32">
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <p className="font-display italic text-navy text-xl md:text-2xl leading-[1.5] max-w-3xl border-l-[3px] border-gold pl-6 py-2">
              <span className="text-gold">Morse For Idaho</span> operates this website and is
              committed to protecting visitor privacy. This policy outlines how personal
              information is collected, used, disclosed, and safeguarded per the Oregon
              Consumer Privacy Act (OCPA), Oregon campaign finance law (ORS Chapter 260), the
              CAN-SPAM Act, and federal laws.
            </p>
            <p className="mt-8 text-ink-soft text-base md:text-lg max-w-3xl leading-[1.8]">
              By accessing the website, you consent to these practices.
            </p>

            <div className="mt-24 space-y-16">
              <LegalSection numeral="I" title="Information We Collect">
                <h3 className="font-display text-navy text-xl font-bold">
                  1.1 · Information You Provide
                </h3>
                <ul className="space-y-3 list-none pl-0">
                  <li>
                    <strong className="text-navy font-display">Contact Information:</strong>{' '}
                    Name, email, phone, mailing address from forms.
                  </li>
                  <li>
                    <strong className="text-navy font-display">
                      Contribution Information:
                    </strong>{' '}
                    Payment details and contributor information required by campaign finance
                    law.
                  </li>
                  <li>
                    <strong className="text-navy font-display">
                      User-Submitted Content:
                    </strong>{' '}
                    Comments and feedback via the website.
                  </li>
                  <li>
                    <strong className="text-navy font-display">
                      Text Messaging Opt-In Data:
                    </strong>{' '}
                    Not shared or sold with third parties unless legally required.
                  </li>
                </ul>

                <h3 className="font-display text-navy text-xl font-bold pt-4">
                  1.2 · Information Collected Automatically
                </h3>
                <ul className="space-y-3 list-none pl-0">
                  <li>
                    <strong className="text-navy font-display">Usage Data:</strong> IP address,
                    browser type, device information, pages visited, time spent, referrer URLs.
                  </li>
                  <li>
                    <strong className="text-navy font-display">Analytics Data:</strong> User
                    interaction aggregates via Google Analytics.
                  </li>
                </ul>
                <p>
                  Cookies can be disabled through browser settings but may limit functionality.
                </p>
              </LegalSection>

              <LegalSection numeral="II" title="How We Use Your Information">
                <ul className="space-y-3 list-none pl-0">
                  <li>· Campaign operations and event communication</li>
                  <li>· Campaign finance law compliance and contribution reporting</li>
                  <li>· Marketing and outreach via newsletters (CAN-SPAM compliant)</li>
                  <li>· Website improvement and accessibility analysis</li>
                  <li>· Legal obligations and government authority requests</li>
                </ul>
                <p>
                  Morse For Idaho does not engage in targeted advertising or sell personal
                  information.
                </p>
              </LegalSection>

              <LegalSection numeral="III" title="How We Share Your Information">
                <ul className="space-y-3 list-none pl-0">
                  <li>
                    <strong className="text-navy font-display">Service Providers:</strong>{' '}
                    Payment processors and email providers under confidentiality agreements.
                  </li>
                  <li>
                    <strong className="text-navy font-display">Legal Compliance:</strong>{' '}
                    State election authorities for reporting; law enforcement when required.
                  </li>
                  <li>
                    <strong className="text-navy font-display">Public Disclosure:</strong>{' '}
                    Contributor information per campaign finance law requirements.
                  </li>
                  <li>
                    <strong className="text-navy font-display">Aggregated Data:</strong>{' '}
                    Non-identifiable data with analytics providers.
                  </li>
                </ul>
                <p>
                  No sharing occurs with unaffiliated third parties for commercial purposes.
                </p>
              </LegalSection>

              <LegalSection numeral="IV" title="SMS / Text Messaging Privacy">
                <p>
                  <strong className="text-navy font-display">What phone numbers are collected for:</strong>{' '}
                  Phone numbers are collected through the website's opt-in forms (contact,
                  volunteer, event RSVP) so that Morse For Idaho can send the specific
                  categories of messages the user has consented to receive. Providing a phone
                  number alone does not constitute consent — the user must also tick the
                  corresponding SMS consent checkbox.
                </p>
                <p>
                  <strong className="text-navy font-display">How they are used for SMS:</strong>{' '}
                  Phone numbers collected via SMS consent checkboxes are used solely for the
                  opted-in message types. Informational consent authorizes campaign updates,
                  event reminders, and volunteer coordination messages. Promotional consent
                  authorizes fundraising requests, donation drives, and event promotions.
                  Consent for one category does not authorize the other.
                </p>
                <p>
                  <strong className="text-navy font-display">Types of messages sent:</strong>{' '}
                  Campaign updates, event invitations, volunteer opportunities, donation
                  requests, and voter engagement messages. Message frequency varies; message
                  and data rates may apply.
                </p>
                <p className="bg-parchment-2 border-l-[3px] border-gold pl-5 py-3 rounded-r">
                  <strong className="text-navy font-display">No sharing with third parties:</strong>{' '}
                  We will not share or sell your text messaging opt-in data, consent, or
                  related personal information with any third parties, unless required by law.
                </p>
                <p>
                  <strong className="text-navy font-display">Data Retention:</strong> Phone
                  numbers and consent records are retained for the duration of the campaign
                  plus a reasonable post-campaign period for legal compliance (typically two
                  years), after which they are deleted unless longer retention is required by
                  law.
                </p>
                <p>
                  <strong className="text-navy font-display">Data Deletion:</strong> You may
                  request deletion of your phone number and consent records by emailing
                  info@morseforidaho.com or calling (508) 801-6634. Requests are processed
                  within 10 business days.
                </p>
                <p>
                  <strong className="text-navy font-display">Opt-Out:</strong> Reply "STOP" to
                  any message to immediately unsubscribe, or reply "HELP" for help. You may
                  also contact us at info@morseforidaho.com. Opt-out requests are processed
                  within 10 business days.
                </p>
              </LegalSection>

              <LegalSection numeral="V" title="Your Privacy Rights">
                <p>Eligible residents may request:</p>
                <ul className="space-y-3 list-none pl-0">
                  <li>· Access confirmation and copies of personal information</li>
                  <li>· Correction of inaccurate information</li>
                  <li>· Deletion (subject to campaign finance reporting exemptions)</li>
                  <li>· Opt-out of targeted advertising, data sales, or profiling</li>
                  <li>· Data portability in machine-readable format</li>
                </ul>
                <p>
                  Responses provided within 45 days; complex requests may be extended as
                  permitted by law.
                </p>
              </LegalSection>

              <LegalSection numeral="VI" title="Data Security">
                <p>
                  Safeguards include encryption via PCI DSS-compliant processors, secure
                  contributor information storage per applicable regulations, and regular
                  security assessments. However, no system guarantees absolute security.
                </p>
              </LegalSection>

              <LegalSection numeral="VII" title="Data Retention">
                <p>Information retained only as necessary or per legal requirements:</p>
                <ul className="space-y-3 list-none pl-0">
                  <li>· Contribution records per campaign finance law</li>
                  <li>· Newsletter contacts until unsubscription</li>
                  <li>· Usage data anonymized where possible</li>
                </ul>
              </LegalSection>

              <LegalSection numeral="VIII" title="Third-Party Links">
                <p>
                  The website may link to external sites. Morse For Idaho is not responsible
                  for their privacy practices.
                </p>
              </LegalSection>

              <LegalSection numeral="IX" title="Children's Privacy">
                <p>
                  The website is not directed to individuals under 13. Parental consent is
                  required for under-13 information collection per the Children's Online
                  Privacy Protection Act. Minor contributions must comply with applicable
                  campaign finance laws.
                </p>
              </LegalSection>

              <LegalSection numeral="X" title="Accessibility">
                <p>
                  Morse For Idaho strives for accessibility per Section 508 of the
                  Rehabilitation Act and the Americans with Disabilities Act.
                </p>
              </LegalSection>

              <LegalSection numeral="XI" title="Changes to This Privacy Policy">
                <p>
                  Updates posted with a revised "Last Updated" date. Email notification may
                  occur for material changes. Continued use constitutes acceptance.
                </p>
              </LegalSection>

              <LegalSection numeral="XII" title="Contact Information">
                <div className="bg-parchment-2 border-l-[3px] border-gold p-8 rounded-r-xl not-prose">
                  <div className="font-display text-navy text-2xl font-bold">
                    Morse For Idaho
                  </div>
                  <div className="mt-4 space-y-1 text-ink">
                    <div>P.O. Box 1776, Boise, ID 83701</div>
                    <div>
                      <a
                        href="mailto:info@morseforidaho.com"
                        className="inline-block py-2 text-burgundy hover:text-burgundy-deep underline-offset-4 hover:underline"
                      >
                        info@morseforidaho.com
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

export default PrivacyPolicyPage
