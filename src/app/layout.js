import { EB_Garamond, Source_Serif_4 } from 'next/font/google'

import './globals.css'

const ebGaramond = EB_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  display: 'swap',
})

export const metadata = {
  title: 'Morse for Idaho — Fourth District Judge',
  description:
    'David Morse is an experienced prosecutor with a deep commitment to fairness and the rule of law. Running for Fourth District Judge, Idaho · May 19, 2026.',
}

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${sourceSerif.variable} antialiased`}
    >
      <body className="bg-parchment text-ink font-body">{children}</body>
    </html>
  )
}

export default RootLayout
