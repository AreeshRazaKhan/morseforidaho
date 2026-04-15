import SiteNav from '@/components/home/site-nav'
import SiteFooter from '@/components/home/site-footer'
import LegalHero from '@/components/legal/legal-hero'
import LegalSection from '@/components/legal/legal-section'

export const metadata = {
  title: 'Terms and Conditions — Morse For Idaho',
  description:
    'Terms and Conditions governing access to and use of the Morse For Idaho website.',
}

const TermsAndConditionsPage = () => {
  return (
    <>
      <SiteNav />
      <main>
        <LegalHero
          chapter="Chapter · The Covenant · Terms"
          title="Terms and Conditions."
          effectiveDate="March 27, 2026"
        />

        <section className="relative bg-parchment py-24 md:py-32">
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <p className="text-ink-soft text-base md:text-lg leading-[1.8] max-w-3xl">
              These Terms and Conditions ("Agreement") set forth the legally binding terms
              governing your access to and use of the Morse For Idaho website located at
              morseforidaho.com ("the Website"), operated by Morse For Idaho ("the
              Campaign," "we," "us," or "our"). By accessing or using the Website, you
              ("you" or "User") agree to be bound by this Agreement. If you do not agree
              to these terms, please do not use the Website.
            </p>

            <div className="mt-24 space-y-16">
              <LegalSection numeral="I" title="About the Website">
                <p>
                  The Website is a political campaign website for David Morse, a candidate
                  for Fourth District Judge in Idaho. The Website provides campaign
                  information, volunteer sign-up opportunities, donation instructions, and
                  campaign updates. The Website does not sell products or services, does
                  not offer memberships or subscriptions, and does not process payments
                  directly.
                </p>
              </LegalSection>

              <LegalSection numeral="II" title="Use of the Website">
                <p>
                  You agree to use the Website only for lawful purposes and in accordance
                  with this Agreement. You agree not to:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li>
                    · Use the Website in any manner that could damage, disable,
                    overburden, or impair the Website or interfere with any other party's
                    use of the Website.
                  </li>
                  <li>
                    · Attempt to gain unauthorized access to any portion of the Website,
                    other accounts, computer systems, or networks connected to the
                    Website.
                  </li>
                  <li>
                    · Use any automated means, including bots, scrapers, or spiders, to
                    access the Website or collect information from it without our prior
                    written consent.
                  </li>
                  <li>
                    · Use the Website to transmit any material that is unlawful,
                    threatening, abusive, harassing, defamatory, or otherwise
                    objectionable.
                  </li>
                  <li>
                    · Reproduce, distribute, modify, or create derivative works of the
                    Website content without our prior written consent.
                  </li>
                  <li>· Misrepresent your identity or affiliation with any person or entity.</li>
                  <li>
                    · Use the Website in any manner that violates any applicable federal,
                    state, or local law or regulation.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection numeral="III" title="Volunteer Information">
                <p>
                  When you submit information through the "Get Involved" form or other
                  forms on the Website, you are voluntarily providing your personal
                  information to assist with the Campaign. By submitting a volunteer form,
                  you acknowledge that:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li>· The information you provide is accurate and complete.</li>
                  <li>
                    · We may use your information to contact you about volunteer
                    opportunities, campaign events, and campaign updates.
                  </li>
                  <li>
                    · Your information will be handled in accordance with our Privacy
                    Policy.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection numeral="IV" title="Donations">
                <p>
                  The Campaign accepts donations through third-party payment platforms,
                  including Venmo, Zelle, Clover, and Cash App, as well as by check mailed
                  to the Campaign's mailing address. By making a donation, you acknowledge
                  and agree that:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li>
                    · All donations are processed entirely by the applicable third-party
                    payment platform and are subject to that platform's terms of service
                    and privacy policy. The Campaign does not directly process or store
                    any payment card or bank account information.
                  </li>
                  <li>
                    · Donations to the Campaign are subject to applicable campaign finance
                    laws, including the Idaho Sunshine Law (Idaho Code Title 67, Chapter
                    66). Under Idaho Code § 67-6610, contributions exceeding $50 require
                    the contributor's full name and complete address to be disclosed in
                    publicly filed campaign finance reports with the Idaho Secretary of
                    State.
                  </li>
                  <li>
                    · Contributions of $1,000 are subject to a 48-hour reporting
                    requirement under Idaho Code § 67-6607(3).
                  </li>
                  <li>
                    · You are making your donation voluntarily and in compliance with all
                    applicable federal, state, and local campaign contribution laws and
                    limits.
                  </li>
                  <li>
                    · Political donations are generally non-refundable. If you have
                    questions or concerns about a donation, please contact us.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection numeral="V" title="SMS and Text Message Communications">
                <p>
                  Morse For Idaho offers an SMS messaging program for individuals who
                  voluntarily opt in to receive text messages. End users provide consent
                  by selecting an optional, unchecked SMS consent checkbox on the forms
                  located at morseforidaho.com. Providing a phone number alone does not
                  constitute consent — you must actively select the SMS opt-in checkbox to
                  receive text messages. Carriers are not liable for delayed or
                  undelivered messages. You must be 18 years of age or older to use this
                  SMS service.
                </p>
                <p>
                  <strong className="text-navy font-display">Types of Messages</strong>
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li>
                    ·{' '}
                    <strong className="text-navy font-display">
                      Campaign Communications:
                    </strong>{' '}
                    Campaign updates, volunteer coordination, event notifications,
                    get-out-the-vote reminders, and responses to inquiries.
                  </li>
                  <li>
                    ·{' '}
                    <strong className="text-navy font-display">
                      Promotional Messages:
                    </strong>{' '}
                    Fundraising appeals, donation requests, and campaign calls to action
                    (requires separate opt-in consent).
                  </li>
                </ul>
                <p>
                  <strong className="text-navy font-display">Key Terms</strong>
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li>
                    · Message frequency varies based on campaign activity but typically
                    ranges from 1 to 4 messages per week.
                  </li>
                  <li>
                    · Message and data rates may apply depending on your mobile carrier
                    plan.
                  </li>
                  <li>· You may opt out at any time by replying STOP to any message.</li>
                  <li>
                    · For assistance, reply HELP or contact us at
                    David@MorseForIdaho.com or call (508) 801-6634.
                  </li>
                  <li>
                    · Consent to receive SMS messages is not a condition of any purchase,
                    donation, or volunteering.
                  </li>
                  <li>
                    · Morse For Idaho does not sell or share mobile information or opt-in
                    consent data with third parties for marketing or promotional purposes.
                  </li>
                </ul>
                <p>
                  <strong className="text-navy font-display">
                    Text Messaging Opt-In Data:
                  </strong>{' '}
                  We will not share or sell your text messaging opt-in data, consent, or
                  related personal information with any third parties, unless required by
                  law.
                </p>
              </LegalSection>

              <LegalSection numeral="VI" title="Intellectual Property">
                <p>
                  All content on the Website, including but not limited to text, graphics,
                  photographs, logos, campaign materials, and the overall design and
                  layout of the Website ("Campaign Content"), is the property of Morse For
                  Idaho or its licensors and is protected by applicable copyright,
                  trademark, and other intellectual property laws.
                </p>
                <p>
                  You may share Campaign Content on social media or other platforms for
                  the purpose of supporting or discussing the Campaign, provided that you
                  do not alter the content or remove any attribution. Any other
                  reproduction, distribution, modification, or use of Campaign Content
                  without our prior written consent is prohibited.
                </p>
              </LegalSection>

              <LegalSection numeral="VII" title="Google reCAPTCHA">
                <p>
                  This Website uses Google reCAPTCHA to protect forms from spam and abuse.
                  By using our forms, you acknowledge that your use of reCAPTCHA is
                  subject to Google's Privacy Policy and Terms of Service.
                </p>
              </LegalSection>

              <LegalSection numeral="VIII" title="Disclaimer">
                <p>
                  The Website is provided for informational and campaign purposes only.
                  Morse For Idaho makes no representations or warranties of any kind,
                  express or implied, regarding the operation of the Website or the
                  accuracy, completeness, or reliability of any information on the
                  Website.
                </p>
                <p className="uppercase">
                  THE WEBSITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE"
                  WITHOUT ANY WARRANTY OF ANY KIND, INCLUDING BUT NOT LIMITED TO IMPLIED
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT. MORSE FOR IDAHO DOES NOT WARRANT THAT THE WEBSITE WILL
                  BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL
                  COMPONENTS.
                </p>
                <p>
                  The Campaign makes no guarantees or predictions regarding the outcome of
                  any election.
                </p>
              </LegalSection>

              <LegalSection numeral="IX" title="Limitation of Liability">
                <p className="uppercase">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MORSE FOR IDAHO, ITS
                  OFFICERS, VOLUNTEERS, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING
                  OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE WEBSITE, EVEN
                  IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="uppercase">
                  IN NO EVENT SHALL MORSE FOR IDAHO'S TOTAL LIABILITY TO YOU FOR ALL
                  CLAIMS ARISING OUT OF OR RELATED TO THE WEBSITE OR THIS AGREEMENT EXCEED
                  ONE HUNDRED DOLLARS ($100.00).
                </p>
              </LegalSection>

              <LegalSection numeral="X" title="Indemnification">
                <p>
                  You agree to indemnify and hold harmless Morse For Idaho, its officers,
                  volunteers, agents, and affiliates from any claims, liabilities,
                  damages, losses, costs, or expenses (including reasonable attorneys'
                  fees) arising out of or related to: (a) your use of the Website; (b)
                  your violation of this Agreement; (c) your violation of any applicable
                  law or the rights of any third party; or (d) any content you submit or
                  transmit through the Website.
                </p>
              </LegalSection>

              <LegalSection numeral="XI" title="Third-Party Links and Services">
                <p>
                  The Website may contain links to third-party websites or services,
                  including but not limited to payment platforms (Venmo, Zelle, Clover,
                  Cash App), social media platforms (Facebook, X), and government
                  websites. These links are provided for your convenience only. Morse For
                  Idaho does not control, endorse, or assume responsibility for the
                  content, privacy policies, or practices of any third-party websites or
                  services. Your use of third-party websites is at your own risk and
                  subject to their respective terms and conditions.
                </p>
              </LegalSection>

              <LegalSection numeral="XII" title="Modifications to This Agreement">
                <p>
                  Morse For Idaho may modify this Agreement from time to time. When we
                  make changes, we will update the "Last Updated" date at the top of this
                  page. Your continued use of the Website after any modification
                  constitutes your acceptance of the revised Agreement. We encourage you
                  to review this Agreement periodically.
                </p>
              </LegalSection>

              <LegalSection numeral="XIII" title="Governing Law">
                <p>
                  This Agreement shall be governed by and construed in accordance with the
                  laws of the State of Idaho, without regard to its conflict of law
                  provisions.
                </p>
              </LegalSection>

              <LegalSection numeral="XIV" title="Dispute Resolution">
                <p>
                  <strong className="text-navy font-display">Informal Resolution</strong>
                </p>
                <p>
                  Any dispute arising under or in connection with this Agreement will
                  initially be addressed through good-faith negotiation between the
                  parties. If the dispute cannot be resolved informally within thirty (30)
                  days, either party may proceed to binding arbitration as described
                  below.
                </p>
                <p>
                  <strong className="text-navy font-display">Binding Arbitration</strong>
                </p>
                <p>
                  Any claim, dispute, or controversy arising from or relating to this
                  Agreement or the Website shall be resolved exclusively by binding
                  arbitration administered by the American Arbitration Association ("AAA")
                  under its Commercial Arbitration Rules in effect at the time the claim
                  is filed. The arbitration shall be conducted before a single arbitrator
                  and shall take place in Ada County, Idaho. The arbitrator's decision
                  shall be final and binding, and judgment may be entered in any court of
                  competent jurisdiction.
                </p>
                <p>
                  Claims shall be brought on an individual basis only. You agree to waive
                  any right to participate in a class action, collective action, or
                  representative proceeding.
                </p>
                <p className="uppercase">
                  PLEASE READ THIS SECTION CAREFULLY. BY AGREEING TO ARBITRATION, YOU AND
                  MORSE FOR IDAHO ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY AND THE
                  RIGHT TO PARTICIPATE IN A CLASS ACTION.
                </p>
                <p>
                  If either party prevails in arbitration, the non-prevailing party shall
                  reimburse the prevailing party's AAA fees and reasonable attorneys' fees
                  incurred in the arbitration.
                </p>
              </LegalSection>

              <LegalSection numeral="XV" title="Severability">
                <p>
                  If any provision of this Agreement is held to be unenforceable by a
                  court or tribunal of competent jurisdiction, that provision shall be
                  enforced to the maximum extent permissible under applicable law, and the
                  remaining provisions shall continue in full force and effect.
                </p>
              </LegalSection>

              <LegalSection numeral="XVI" title="Waiver">
                <p>
                  No failure by either party to exercise or enforce any right under this
                  Agreement shall constitute a waiver of that right or of any subsequent
                  breach.
                </p>
              </LegalSection>

              <LegalSection numeral="XVII" title="Entire Agreement">
                <p>
                  This Agreement, together with the Privacy Policy, represents the entire
                  understanding between you and Morse For Idaho relating to the Website.
                  This Agreement supersedes any prior or contemporaneous communications,
                  whether oral or written, regarding the subject matter herein.
                </p>
              </LegalSection>

              <LegalSection numeral="XVIII" title="Text Messaging Opt-In Data">
                <p>
                  We will not share or sell your text messaging opt-in data, consent, or
                  related personal information with any third parties, unless required by
                  law.
                </p>
              </LegalSection>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default TermsAndConditionsPage
