'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Donate', href: '/donate' },
  { label: 'Ask Morse', href: '/ask-morse' },
  { label: 'Contact', href: '/contact' },
]

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI']

const SiteNav = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close drawer when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 h-[72px] bg-navy-deep/95 backdrop-blur border-b border-gold/15">
        <nav className="mx-auto max-w-[1400px] h-full px-5 md:px-12 lg:px-20 flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Morse For Idaho — Home"
            className="relative block shrink-0 h-[56px] w-[80px] md:h-[64px] md:w-[92px] -my-2"
          >
            <Image
              src="/logo-morse.png"
              alt="Morse For Idaho"
              fill
              sizes="92px"
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop link list */}
          <ul className="hidden lg:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname?.startsWith(link.href + '/')
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`relative block py-4 px-1 text-[12px] tracking-[1.6px] uppercase font-semibold transition-colors ${
                      active
                        ? 'text-gold after:absolute after:left-0 after:right-0 after:bottom-2 after:h-px after:bg-gold'
                        : 'text-parchment/60 hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/volunteer"
            className="hidden lg:inline-flex bg-burgundy hover:bg-burgundy-deep text-parchment px-5 py-4 text-[12px] font-bold uppercase tracking-[1.5px] transition-colors"
          >
            Join the Legacy →
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative p-3 -mr-3 text-parchment hover:text-gold transition-colors cursor-pointer"
          >
            <span className="block w-6 h-5 relative" aria-hidden="true">
              <span
                className={`absolute left-0 right-0 h-px bg-current transition-all duration-300 ${
                  open ? 'top-1/2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-px bg-current top-1/2 transition-opacity duration-300 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-px bg-current transition-all duration-300 ${
                  open ? 'top-1/2 -rotate-45' : 'bottom-0'
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile drawer + backdrop */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-navy-ink/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        <aside
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          className={`absolute top-[72px] right-0 bottom-0 w-full max-w-sm bg-navy border-l border-gold/25 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Double-rule frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-5 border border-gold/25"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[26px] border border-gold/10"
          />
          {/* Oversized watermark */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 bottom-0 font-display font-extrabold italic text-[280px] leading-[0.8] text-gold/[0.05] select-none"
          >
            M
          </span>

          <div className="relative h-full flex flex-col px-8 py-12 overflow-y-auto">
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
                The Campaign
              </span>
            </div>

            <ul className="space-y-1">
              {NAV_LINKS.map((link, i) => {
                const active = pathname === link.href || pathname?.startsWith(link.href + '/')
                return (
                  <li
                    key={link.href}
                    className="border-b border-gold/10 last:border-0"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className="flex items-center gap-5 py-5 group"
                    >
                      <span className="font-display italic text-gold text-2xl font-bold shrink-0 w-10">
                        {ROMAN[i]}
                      </span>
                      <span
                        className={`font-display text-2xl font-bold transition-colors flex-1 ${
                          active ? 'text-gold' : 'text-parchment group-hover:text-gold'
                        }`}
                      >
                        {link.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`text-xl transition-all ${
                          active
                            ? 'text-gold translate-x-1'
                            : 'text-gold/50 group-hover:text-gold group-hover:translate-x-1'
                        }`}
                      >
                        →
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="mt-auto pt-10 border-t border-gold/15">
              <Link
                href="/volunteer"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-burgundy hover:bg-burgundy-deep text-parchment px-7 py-5 text-xs font-bold uppercase tracking-[1.8px] transition-colors"
              >
                Join the Legacy →
              </Link>

              <div className="mt-8 flex items-center gap-3 justify-center text-[12px] tracking-[2px] uppercase text-parchment/50 font-semibold">
                <span className="h-px w-6 bg-gold/40" />
                <span>Vote · May 19 · 2026</span>
                <span className="h-px w-6 bg-gold/40" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

export default SiteNav
