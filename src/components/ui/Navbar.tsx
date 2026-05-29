'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@/lib/theme-context'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden>
      <circle cx="8.5" cy="8.5" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="8.5" y1="1" x2="8.5" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8.5" y1="14" x2="8.5" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="1" y1="8.5" x2="3" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="8.5" x2="16" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="3.44" y1="3.44" x2="4.85" y2="4.85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12.15" y1="12.15" x2="13.56" y2="13.56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="3.44" y1="13.56" x2="4.85" y2="12.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12.15" y1="4.85" x2="13.56" y2="3.44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M14 10.5A6.5 6.5 0 0 1 5.5 2c0-.55.07-1.08.2-1.58A6.5 6.5 0 1 0 14 10.5z" fill="currentColor"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
          padding: scrolled ? '0.875rem 0' : '1.4rem 0',
          transition: 'padding 0.4s ease, background 0.4s ease, border-color 0.4s ease',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 3rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero') }} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image
              src="/Oland logo wh.png"
              alt="Oland Associates Enterprises"
              width={200}
              height={54}
              style={{
                objectFit: 'contain',
                display: 'block',
                filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none',
                transition: 'filter 0.35s ease',
              }}
              priority
            />
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="nav-desktop">
            {links.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href)} style={{
                fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.78rem',
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)',
                transition: 'color 0.2s', background: 'none', border: 'none', cursor: 'pointer',
                padding: '0.25rem 0',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                width: 38, height: 38, borderRadius: 8,
                border: '1px solid var(--border)',
                background: 'var(--surface-1)',
                color: 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.25s',
                flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ember)'; e.currentTarget.style.color = 'var(--ember)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              style={{
                fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.78rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '0.75rem 1.5rem', borderRadius: 4,
                background: 'var(--ember)', color: 'white',
                boxShadow: '0 0 28px rgba(232,99,10,0.35)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--ember-bright)'
                e.currentTarget.style.boxShadow = '0 0 44px rgba(232,99,10,0.55)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--ember)'
                e.currentTarget.style.boxShadow = '0 0 28px rgba(232,99,10,0.35)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Engage Us
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="nav-hamburger"
              style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 4, background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--text-primary)', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--text-primary)', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--text-primary)', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: 72, left: 0, right: 0, zIndex: 899,
              background: 'var(--nav-bg)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '1.5rem clamp(1.25rem, 4vw, 3rem) 2rem',
              display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}
          >
            {links.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href)} style={{
                fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.1rem',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                color: 'var(--text-primary)', background: 'none', border: 'none',
                cursor: 'pointer', textAlign: 'left', padding: '0.5rem 0',
                borderBottom: '1px solid var(--border)',
              }}>
                {link.label}
              </button>
            ))}
            <button
              onClick={toggle}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.85rem',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                color: 'var(--text-secondary)', background: 'none', border: 'none',
                cursor: 'pointer', textAlign: 'left', padding: '0.5rem 0',
              }}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
