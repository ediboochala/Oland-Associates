'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
          background: scrolled ? 'rgba(8,6,16,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 3rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero') }} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <div style={{
              background: 'white',
              borderRadius: 8,
              padding: '5px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 16px rgba(0,0,0,0.35)',
            }}>
              <Image
                src="/Oland logo.png"
                alt="Oland Associates Enterprises"
                width={148}
                height={40}
                style={{ objectFit: 'contain', display: 'block' }}
                priority
              />
            </div>
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
                e.currentTarget.style.background = '#F97316'
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
              background: 'rgba(8,6,16,0.97)', backdropFilter: 'blur(20px)',
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
