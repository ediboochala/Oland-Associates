'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'

const services = [
  {
    index: '01',
    icon: '◐',
    name: 'Solar Energy Systems',
    headline: 'Cut your energy costs by 60–80%. Permanently.',
    body: 'Diesel generators are a liability. We design and install solar energy systems that turn your energy bill from a recurring expense into a one-time investment — with full ROI modelling before a single panel is ordered.',
    features: [
      'On-grid, off-grid, and hybrid configurations',
      'Commercial rooftop & ground-mount installations',
      'Industrial inverter and battery storage systems',
      'Energy audits with documented savings projections',
      'Maintenance SLAs and 24/7 monitoring support',
    ],
    cta: 'Get Solar Proposal',
    accent: 'rgba(232,99,10,0.08)',
    accentBorder: 'rgba(232,99,10,0.2)',
  },
  {
    index: '02',
    icon: '◑',
    name: 'Electronics Supply',
    headline: 'Reliable sourcing for projects that can\'t afford substitutes.',
    body: 'Grey-market components fail at the worst possible moment. We supply authenticated, certified electrical and electronic products — with full traceability and volume pricing for contractors, developers, and corporate procurement teams.',
    features: [
      'Industrial electrical components and switchgear',
      'UPS, AVR, and power management systems',
      'Certified, traceable supply chain — no substitutions',
      'Bulk and scheduled supply for large-scale projects',
      'Technical specification support on request',
    ],
    cta: 'Request Supply Quotation',
    accent: 'rgba(58,36,128,0.15)',
    accentBorder: 'rgba(58,36,128,0.35)',
  },
  {
    index: '03',
    icon: '◒',
    name: 'Building Materials',
    headline: 'Quality that holds up. Because your projects have to.',
    body: 'We supply premium-grade construction materials to developers and contractors who understand that sub-standard inputs produce sub-standard structures. Phased, project-scheduled delivery keeps your site moving without overstocking.',
    features: [
      'Structural steel, iron rods, and high-grade cement',
      'Roofing, cladding, and finishing materials',
      'Tiles, plumbing fittings, and interior supplies',
      'Phased delivery aligned to your construction schedule',
      'Quality certificates provided for all critical materials',
    ],
    cta: 'Request Materials Quote',
    accent: 'rgba(255,255,255,0.03)',
    accentBorder: 'rgba(255,255,255,0.08)',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" ref={ref} style={{ padding: 'clamp(5rem,10vw,9rem) 0', position: 'relative' }}>
      {/* top rule */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, var(--purple-mid) 50%, transparent 100%)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: 'clamp(3rem,6vw,5rem)', maxWidth: 700 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.3rem 0.85rem', borderRadius: 4, background: 'rgba(232,99,10,0.1)', border: '1px solid rgba(232,99,10,0.22)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ember-bright)', marginBottom: '1rem' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ember)', display: 'inline-block', flexShrink: 0 }} />
            Three Pillars. One Standard.
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,2.2vw,2rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '0', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            Every service we offer is built on the same premise:<br />
            <em style={{ color: 'var(--ember-bright)', fontStyle: 'normal' }}>no excuses, no shortcuts.</em>
          </h2>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: 2, background: 'var(--border)', borderRadius: 16, overflow: 'hidden' }}
        >
          {services.map((s) => (
            <motion.div
              key={s.index}
              variants={staggerItem}
              style={{ background: 'var(--ink-2)', padding: 'clamp(2rem,3.5vw,2.75rem)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'background 0.35s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--ink-3)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink-2)')}
            >
              {/* Top accent bar on hover */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, var(--ember), transparent)`, transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s var(--ease-out)' }}
                className="service-bar"
              />

              {/* Index */}
              <div style={{ position: 'absolute', top: 'clamp(1.5rem,3vw,2rem)', right: 'clamp(1.5rem,3vw,2rem)', fontFamily: 'var(--font-serif)', fontSize: '5rem', fontWeight: 300, color: 'var(--index-ghost)', lineHeight: 1, userSelect: 'none' }}>
                {s.index}
              </div>

              {/* Icon */}
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.75rem', color: 'var(--ember)', marginBottom: '1.5rem', lineHeight: 1 }}>{s.icon}</div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{s.name}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(0.95rem,1.4vw,1.1rem)', fontWeight: 700, lineHeight: 1.3, color: 'var(--text-primary)', marginBottom: '1rem' }}>{s.headline}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>{s.body}</p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', flex: 1 }}>
                {s.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--ember)', marginTop: '0.1rem', flexShrink: 0, fontSize: '0.6rem' }}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => { const el = document.querySelector('#contact'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }) }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.72rem',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--ember-bright)', background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'gap 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.gap = '0.8rem')}
                onMouseLeave={e => (e.currentTarget.style.gap = '0.5rem')}
              >
                {s.cta}
                <span style={{ fontSize: '0.9rem' }}>→</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .service-bar { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); }
        div:hover > .service-bar { transform: scaleX(1) !important; }
      `}</style>
    </section>
  )
}
