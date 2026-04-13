import SiteNav from '@/components/home/site-nav'
import SiteFooter from '@/components/home/site-footer'
import LegalHero from '@/components/legal/legal-hero'
import LegalSection from '@/components/legal/legal-section'

export const metadata = {
  title: 'Privacy Policy — Morse For Idaho',
  description:
    'How Morse For Idaho collects, uses, and safeguards your personal information.',
}

const PrivacyPolicyPage = () => {
  return (
    <>
      <SiteNav />
      <main>
        <LegalHero
          chapter="Chapter · The Covenant · Privacy"
          title="Privacy Policy."
          effectiveDate="April 13, 2026"
        />

        <section className="relative bg-parchment py-24 md:py-32">
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <p className="font-display italic text-navy text-xl md:text-2xl leading-[1.5] max-w-3xl border-l-[3px] border-gold pl-6 py-2">
              <span className="text-gold">Morse For Idaho</span> ("the Campaign,"
              "we," "us," or "our") is committed to protecting your privacy. This
              Privacy Policy describes how we collect, use, and safeguard your
              personal information when you visit our website or interact with our
              campaign.
            </p>

            <div className="mt-24 space-y-16">
              <LegalSection numeral="I" title="Information We Collect">
                <ul className="space-y-3 list-none pl-0">
                  <li>
                    <strong className="text-navy font-display">
                      Contact Information:
                    </strong>{' '}
                    Name, email address, phone number, and mailing address you
                    voluntarily provide through forms on our website.
                  </li>
                  <li>
                    <strong className="text-navy font-display">
                      Volunteer Preferences:
                    </strong>{' '}
                    Information about how you'd like to support the campaign.
                  </li>
                  <li>
                    <strong className="text-navy font-display">
                      Donation Information:
                    </strong>{' '}
                    Records of donations made through third-party payment platforms
                    (Venmo, Clover, Zelle, Cash App). We do not directly process or
                    store payment card information.
                  </li>
                  <li>
                    <strong className="text-navy font-display">Usage Data:</strong>{' '}
                    Non-personal information such as browser type, device type,
                    pages visited, and time spent on our site, collected through
                    standard analytics tools.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection numeral="II" title="How We Use Your Information">
                <ul className="space-y-3 list-none pl-0">
                  <li>
                    · To communicate with you about campaign news, events, and
                    volunteer opportunities.
                  </li>
                  <li>
                    · To send you text messages and calls if you have opted in to
                    receive them.
                  </li>
                  <li>· To process and acknowledge donations.</li>
                  <li>
                    · To comply with applicable campaign finance reporting
                    requirements.
                  </li>
                  <li>· To improve our website and campaign outreach efforts.</li>
                </ul>
              </LegalSection>

              <LegalSection numeral="III" title="Text Messaging & TCPA Consent">
                <p>
                  By providing your phone number and checking the consent box on
                  our forms, you expressly consent to receive recurring autodialed
                  or prerecorded calls and text messages from Morse For Idaho at
                  the phone number you provided. Message and data rates may apply.
                  Message frequency varies. You may opt out at any time by replying
                  STOP to any message. Consent is not a condition of any purchase,
                  donation, or volunteering.
                </p>
              </LegalSection>

              <LegalSection numeral="IV" title="Information Sharing">
                <p>
                  We do not sell, rent, or trade your personal information to third
                  parties.
                </p>
                <p className="bg-parchment-2 border-l-[3px] border-gold pl-5 py-3 rounded-r">
                  <strong className="text-navy font-display">
                    Text Messaging Opt-In Data:
                  </strong>{' '}
                  We will not share or sell your text messaging opt-in data,
                  consent, or related personal information with any third parties,
                  unless required by law.
                </p>
                <p>
                  We may share your information with trusted service providers who
                  assist us in operating our website and conducting campaign
                  activities, subject to confidentiality obligations. We may also
                  disclose information as required by law, including campaign
                  finance disclosure requirements.
                </p>
              </LegalSection>

              <LegalSection numeral="V" title="Data Security">
                <p>
                  We implement reasonable administrative, technical, and physical
                  safeguards to protect your personal information. However, no
                  method of transmission over the Internet or electronic storage is
                  completely secure, and we cannot guarantee absolute security.
                </p>
              </LegalSection>

              <LegalSection numeral="VI" title="Your Rights">
                <p>You have the right to:</p>
                <ul className="space-y-3 list-none pl-0">
                  <li>
                    · Request access to the personal information we hold about you.
                  </li>
                  <li>
                    · Request correction or deletion of your personal information.
                  </li>
                  <li>
                    · Opt out of receiving communications at any time by contacting
                    us or replying STOP to text messages.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection numeral="VII" title="Contact Us">
                <p>
                  If you have questions about this Privacy Policy or your personal
                  information, please contact us at:
                </p>
                <div className="bg-parchment-2 border-l-[3px] border-gold p-8 rounded-r-xl not-prose">
                  <div className="font-display text-navy text-2xl font-bold">
                    Morse For Idaho
                  </div>
                  <div className="mt-4 space-y-1 text-ink">
                    <div>PO Box 171101</div>
                    <div>Boise, Idaho 83717</div>
                    <div>
                      <a
                        href="tel:+15088016634"
                        className="inline-block py-2 text-burgundy hover:text-burgundy-deep underline-offset-4 hover:underline"
                      >
                        (508) 801-6634
                      </a>
                    </div>
                    <div>
                      <a
                        href="mailto:david@morseforidaho.com"
                        className="inline-block py-2 text-burgundy hover:text-burgundy-deep underline-offset-4 hover:underline"
                      >
                        david@morseforidaho.com
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
