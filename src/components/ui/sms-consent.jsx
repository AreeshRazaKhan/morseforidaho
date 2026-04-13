import Link from 'next/link'

import { LEGAL_BUSINESS_NAME } from '@/constants/a2p'

const SmsConsentText = () => {
  return (
    <>
      By providing your phone number, you consent to receive calls and text messages from{' '}
      {LEGAL_BUSINESS_NAME}, Msg & data rates may apply. Msg frequency may vary. Messaging may
      include requests for donation. Reply STOP to unsubscribe or HELP for help. View{' '}
      <Link href="/privacy-policy" className="underline hover:text-gold">
        Privacy Policy
      </Link>{' '}
      for more info.
    </>
  )
}

export default SmsConsentText
