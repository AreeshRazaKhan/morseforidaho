import Image from 'next/image'
import Link from 'next/link'

const SiteFooter = () => {
  return (
    <footer className="bg-navy-ink text-parchment/70 border-t border-gold/20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-20 grid grid-cols-12 gap-y-10 md:gap-8">
        <div className="col-span-12 md:col-span-4">
          <Link
            href="/"
            aria-label="Morse For Idaho — Home"
            className="relative block h-[110px] w-[158px]"
          >
            <Image
              src="/logo-morse.png"
              alt="Morse For Idaho"
              fill
              sizes="158px"
              className="object-contain object-left"
            />
          </Link>
          <div className="mt-4 h-px w-20 bg-gold" />
          <div className="mt-3 text-[12px] font-bold uppercase tracking-[2.5px] text-parchment/60">
            Fourth District Judge · Idaho
          </div>
          <p className="mt-8 text-sm leading-relaxed max-w-sm">
            Experienced Federal and State Prosecutor committed to fairness, integrity, and the
            rule of law.
          </p>
        </div>

        <nav className="col-span-6 md:col-span-3">
          <div className="text-[12px] tracking-[2.5px] uppercase text-gold-muted font-bold mb-4">
            The Campaign
          </div>
          <ul className="text-sm">
            <li><Link href="/about" className="block py-2.5 hover:text-gold">About David</Link></li>
            <li><Link href="/events" className="block py-2.5 hover:text-gold">Events</Link></li>
            <li><Link href="/volunteer" className="block py-2.5 hover:text-gold">Volunteer</Link></li>
            <li><Link href="/ask-morse" className="block py-2.5 hover:text-gold">Ask Morse</Link></li>
            <li><Link href="/contact" className="block py-2.5 hover:text-gold">Contact</Link></li>
          </ul>
        </nav>

        <address className="col-span-6 md:col-span-5 not-italic">
          <div className="text-[12px] tracking-[2.5px] uppercase text-gold-muted font-bold mb-4">
            Contact
          </div>
          <ul className="space-y-5 text-sm">
            <li>
              <div className="text-[12px] tracking-[2px] uppercase text-parchment/40 font-bold mb-1">
                Phone
              </div>
              <a
                href="tel:+12086155086"
                className="inline-block py-2 font-display text-parchment text-lg hover:text-gold transition-colors"
              >
                (208) 615-5086
              </a>
            </li>
            <li>
              <div className="text-[12px] tracking-[2px] uppercase text-parchment/40 font-bold mb-1">
                Email
              </div>
              <a
                href="mailto:david@morseforidaho.com"
                className="inline-block py-2 font-display text-parchment text-lg hover:text-gold transition-colors break-all"
              >
                david@morseforidaho.com
              </a>
            </li>
            <li>
              <div className="text-[12px] tracking-[2px] uppercase text-parchment/40 font-bold mb-1">
                Mailing Address
              </div>
              <div className="text-parchment leading-relaxed">
                Morse For Idaho<br />
                P.O. Box 171101<br />
                Boise, ID 83717
              </div>
            </li>
          </ul>
        </address>
      </div>
      <div className="border-t border-gold/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[12px] tracking-[1.5px] uppercase text-parchment/40">
          <div className="flex flex-col gap-1">
            <span>© 2026 Morse For Idaho. All rights reserved. Paid for by Morse For Idaho.</span>
            <span className="text-parchment/60">
              Powered by{' '}
              <a
                href="https://op1776.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-muted underline-offset-4 hover:underline transition-colors"
              >
                Operation 1776
              </a>
            </span>
          </div>
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="block py-3 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-parchment/20">·</span>
            <Link href="/terms-and-conditions" className="block py-3 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
