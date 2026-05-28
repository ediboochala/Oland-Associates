'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const guarantees = [
  'Free initial consultation',
  '24-hr proposal turnaround',
  'No lock-in contracts',
  'Full quality certification',
]

export default function CtaSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const scrollToContact = () => {
    const el = document.querySelector('#contact-form')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section id="contact" ref={ref} style={{ padding: 'clamp(5rem,10vw,9rem) 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, var(--ink-3) 0%, var(--ink) 50%, rgba(37,25,89,0.2) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(232,99,10,0.08), transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--ember), transparent)' }} />

      {/* Decorative serif text */}
      <div style={{ position: 'absolute', bottom: '-5%', left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-serif)', fontSize: 'clamp(8rem,20vw,18rem)', fontWeight: 300, color: 'rgba(255,255,255,0.02)', lineHeight: 1, whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em' }}>
        Let's Build
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.3rem 0.85rem', borderRadius: 4, background: 'rgba(232,99,10,0.1)', border: '1px solid rgba(232,99,10,0.22)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ember-bright)', marginBottom: '1.25rem' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ember)', display: 'inline-block', flexShrink: 0 }} />
            Begin Your Engagement
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem,6vw,6rem)',
            fontWeight: 600, lineHeight: 0.92, letterSpacing: '-0.03em',
            color: 'var(--text-primary)', marginBottom: '1.5rem',
          }}>
            Your next project<br />deserves a partner<br /><em style={{ color: 'var(--ember-bright)', fontStyle: 'italic' }}>who delivers.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '3rem', maxWidth: 520, margin: '0 auto 3rem' }}>
            Send us your project brief. We'll respond within 24 hours with a full proposal — scope, pricing, timeline, and projected outcomes. No sales pitch. Just a clear answer.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a
              href="mailto:info@olandassociates.com"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '1.15rem 2.5rem', borderRadius: 3,
                background: 'var(--ember)', color: 'white',
                boxShadow: '0 0 40px rgba(232,99,10,0.45)',
                transition: 'all 0.3s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 64px rgba(232,99,10,0.7)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(232,99,10,0.45)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >
              Submit Project Brief
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="tel:+2348000000000"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '1.15rem 2.5rem', borderRadius: 3,
                border: '1px solid rgba(255,255,255,0.12)', color: 'var(--text-secondary)',
                transition: 'all 0.3s', background: 'none',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)' }}
            >
              Call Directly
            </a>
          </div>

          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {guarantees.map(g => (
              <div key={g} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                <span style={{ color: 'var(--ember)', fontSize: '0.7rem' }}>✓</span>
                {g}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
