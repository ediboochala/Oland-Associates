'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeLeft, fadeRight, staggerContainer, staggerItem } from '@/lib/animations'

const reasons = [
  {
    num: '01',
    title: 'We Compete on Execution, Not Price',
    body: 'Our clients aren\'t looking for the cheapest option — they\'re looking for the option that doesn\'t fail. We price for quality and we deliver it. Every time.',
  },
  {
    num: '02',
    title: 'A Single Point of Contact for Three Critical Verticals',
    body: 'Managing three different suppliers creates three times the friction. Oland Associates consolidates solar, electronics, and materials under one contract, one relationship, one outcome.',
  },
  {
    num: '03',
    title: 'We Build for the Long Term — Not the Invoice',
    body: 'We flag problems before they become yours. If a specified material has a better alternative, we say so. That\'s the difference between a vendor and a partner.',
  },
  {
    num: '04',
    title: 'Scale-Ready Infrastructure',
    body: 'From single-site installations to multi-phase estate developments and government infrastructure contracts — our supply chain and execution capacity is built for volume.',
  },
  {
    num: '05',
    title: 'Fully Documented, Audit-Ready Projects',
    body: 'Every material has certificates. Every installation has sign-off documentation. Your compliance team, your bank, or your investor can review everything with confidence.',
  },
]

const metrics = [
  { label: 'On-Time Delivery', value: 99 },
  { label: 'Client Retention', value: 94 },
  { label: 'Quality Compliance', value: 100 },
  { label: 'Post-Project Satisfaction', value: 97 },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="why" ref={ref} style={{ padding: 'clamp(5rem,10vw,9rem) 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 5% 50%, rgba(232,99,10,0.04), transparent 50%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,460px), 1fr))', gap: 'clamp(3rem,7vw,6rem)', alignItems: 'start' }}>

          {/* Left: reasons list */}
          <div>
            <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeLeft} style={{ marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.3rem 0.85rem', borderRadius: 4, background: 'rgba(232,99,10,0.1)', border: '1px solid rgba(232,99,10,0.22)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ember-bright)', marginBottom: '1rem' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ember)', display: 'inline-block', flexShrink: 0 }} />
                The Case for Oland
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,2.2vw,2rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '0', color: 'var(--text-primary)' }}>
                What separates us<br />isn't what we <em style={{ fontStyle: 'normal', color: 'var(--ember-bright)' }}>offer</em>.<br />It's what we <em style={{ fontStyle: 'normal' }}>guarantee</em>.
              </h2>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              {reasons.map((r) => (
                <motion.div
                  key={r.num}
                  variants={staggerItem}
                  style={{
                    display: 'grid', gridTemplateColumns: '2.5rem 1fr', gap: '1.25rem',
                    padding: '1.5rem 0', borderBottom: '1px solid var(--border)',
                    transition: 'padding-left 0.3s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.paddingLeft = '0.5rem')}
                  onMouseLeave={e => (e.currentTarget.style.paddingLeft = '0')}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(232,99,10,0.5)', paddingTop: '0.2rem', letterSpacing: '0.08em' }}>{r.num}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>{r.title}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{r.body}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: metrics card */}
          <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeRight}>
            <div style={{
              background: 'var(--ink-2)', border: '1px solid var(--border)', borderRadius: 16,
              padding: 'clamp(2rem,4vw,2.75rem)', position: 'sticky', top: '6rem',
            }}>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Performance Record</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--ember)', fontSize: '1.1rem', letterSpacing: 2 }}>★★★★★</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>5.0 average — 50+ corporate clients</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {metrics.map((m) => (
                  <div key={m.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{m.label}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--ember-bright)', fontWeight: 500 }}>{m.value}%</span>
                    </div>
                    <div style={{ height: 2, background: 'var(--progress-track)', borderRadius: 99, overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${m.value}%` } : { width: 0 }}
                        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, var(--ember), var(--ember-bright))', borderRadius: 99 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.75rem' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  "Working with Oland Associates feels like having an in-house procurement director who actually delivers."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg, var(--purple-mid), var(--ember))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.72rem', flexShrink: 0 }}>AO</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.78rem', color: 'var(--text-primary)' }}>Adekunle Ogunleye</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>CEO, Verde Properties Ltd.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
