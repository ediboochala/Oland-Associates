'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'

const testimonials = [
  {
    quote: 'We\'ve worked with three other suppliers before Oland. None of them combined documentation discipline with actual delivery consistency. These people are in a different category.',
    name: 'Adekunle Ogunleye',
    role: 'CEO, Verde Properties Ltd.',
    initials: 'AO',
    gradient: 'linear-gradient(135deg, #251959, #E8630A)',
    detail: '120-unit estate development, 2024',
  },
  {
    quote: 'Our energy bills dropped 68% in the first year after Oland installed our solar system. What impressed me more was that they told us exactly that figure before we signed anything.',
    name: 'Funmilayo Kehinde',
    role: 'Operations Director, Apex Logistics Group',
    initials: 'FK',
    gradient: 'linear-gradient(135deg, #0D3321, #16A34A)',
    detail: '200kW commercial installation, 2024',
  },
  {
    quote: 'For a government procurement contract, we can\'t afford unverified suppliers. Oland Associates provided full audit documentation, traceable certificates, and delivered on every line item. They\'re on our preferred vendor list permanently.',
    name: 'Engr. Emmanuel Ihejirika',
    role: 'Project Director, FCT Infrastructure Unit',
    initials: 'EI',
    gradient: 'linear-gradient(135deg, #330D0D, #DC2626)',
    detail: 'Federal infrastructure supply contract, 2023',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="testimonials" ref={ref} style={{ padding: 'clamp(5rem,10vw,9rem) 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,25,89,0.2), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(3rem,6vw,5rem)' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.3rem 0.85rem', borderRadius: 4, background: 'rgba(232,99,10,0.1)', border: '1px solid rgba(232,99,10,0.22)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ember-bright)', marginBottom: '1rem' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ember)', display: 'inline-block', flexShrink: 0 }} />
            Client Testimony
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4.5vw,4rem)', fontWeight: 600, lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
            Our reputation is built<br />on other people's outcomes.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,340px), 1fr))', gap: '1.5rem' }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              style={{
                background: 'var(--ink-2)', border: '1px solid var(--border)', borderRadius: 14, padding: '2.25rem',
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.35s var(--ease-out)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ember-border)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Large quote glyph */}
              <div style={{ position: 'absolute', top: '0.5rem', right: '1.5rem', fontFamily: 'var(--font-serif)', fontSize: '8rem', lineHeight: 1, color: 'rgba(232,99,10,0.05)', userSelect: 'none', pointerEvents: 'none' }}>"</div>

              <div style={{ color: 'var(--ember)', fontSize: '0.85rem', letterSpacing: 3, marginBottom: '1.25rem' }}>★★★★★</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                "{t.quote}"
              </p>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: t.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '0.7rem', color: 'white', flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>{t.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>{t.role}</div>
                </div>
              </div>
              <div style={{ marginTop: '0.875rem', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ember)', opacity: 0.6 }}>
                ↳ {t.detail}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
