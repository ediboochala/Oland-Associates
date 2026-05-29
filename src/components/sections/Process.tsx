'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'

const steps = [
  {
    num: '01',
    title: 'Project Brief',
    body: 'You brief us on scope, timeline, and constraints. We listen more than we talk. No assumptions — just a thorough understanding of what success looks like for your project.',
  },
  {
    num: '02',
    title: 'Scoping & Proposal',
    body: 'Within 24 hours, you receive a comprehensive proposal: materials list, pricing, phased delivery schedule, and projected outcomes. No surprises. No hidden line items.',
  },
  {
    num: '03',
    title: 'Controlled Execution',
    body: 'We procure, coordinate, and deliver in line with your site schedule. Your dedicated project contact is reachable throughout — not after something goes wrong.',
  },
  {
    num: '04',
    title: 'Delivery & Documentation',
    body: 'Every engagement closes with full handover documentation, quality certificates, and post-delivery support. Your records are clean. Your warranty is real.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="process" ref={ref} style={{ padding: 'clamp(5rem,10vw,9rem) 0', background: 'var(--section-tint)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--purple-mid), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--purple-mid), transparent)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(3rem,6vw,5rem)', maxWidth: 640, margin: '0 auto clamp(3rem,6vw,5rem)' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.3rem 0.85rem', borderRadius: 4, background: 'rgba(232,99,10,0.1)', border: '1px solid rgba(232,99,10,0.22)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ember-bright)', marginBottom: '1rem' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ember)', display: 'inline-block', flexShrink: 0 }} />
            Engagement Model
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4.5vw,4rem)', fontWeight: 600, lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
            From your first call<br />to your last handover —<br /><em style={{ fontStyle: 'italic', color: 'var(--ember-bright)' }}>we own it.</em>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1px', background: 'var(--border)', borderRadius: 14, overflow: 'hidden' }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              variants={staggerItem}
              style={{
                background: 'var(--ink)', padding: 'clamp(2rem,3.5vw,2.75rem)',
                position: 'relative', overflow: 'hidden',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--ink-2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
            >
              {/* step number watermark */}
              <div style={{ position: 'absolute', bottom: '-0.5rem', right: '1rem', fontFamily: 'var(--font-serif)', fontSize: '8rem', fontWeight: 300, color: 'var(--watermark)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{s.num}</div>

              {/* Connector dot (not on last) */}
              {i < steps.length - 1 && (
                <div style={{ position: 'absolute', top: '3.5rem', right: -6, width: 11, height: 11, borderRadius: '50%', border: '2px solid var(--ember)', background: 'var(--ink)', zIndex: 2 }} />
              )}

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 40, height: 40, borderRadius: '50%',
                  border: '1px solid var(--ember-border)', background: 'var(--ember-pale)',
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--ember)',
                }}>
                  {s.num}
                </div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
