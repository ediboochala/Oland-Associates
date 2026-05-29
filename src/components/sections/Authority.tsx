'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from '@/lib/animations'

const credentials = [
  { icon: '◈', title: 'Solar Certified Installer', sub: 'Certified for grid-tied and off-grid systems up to 500kW' },
  { icon: '◈', title: 'Grade-A Material Sourcing', sub: 'Every product traceable to verified, certified manufacturers' },
  { icon: '◈', title: 'Licensed Electronics Supplier', sub: 'No grey-market sourcing. Authentic supply chains, always.' },
  { icon: '◈', title: 'Full Project Accountability', sub: 'We don\'t sub-contract and disappear. We own every outcome.' },
]

const metrics = [
  { val: '200+', label: 'Completed Projects' },
  { val: '₦2B+', label: 'Contract Value Delivered' },
  { val: '50+', label: 'Repeat Corporate Clients' },
  { val: '99%', label: 'On-Time Delivery Rate' },
]

export default function Authority() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} style={{ padding: 'clamp(5rem,10vw,9rem) 0', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: '40%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,25,89,0.4), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(3rem,7vw,6rem)', alignItems: 'start' }}>

          {/* Left: Positioning copy */}
          <div>
            <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeLeft}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.3rem 0.85rem', borderRadius: 4, background: 'rgba(232,99,10,0.1)', border: '1px solid rgba(232,99,10,0.22)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ember-bright)', marginBottom: '1.25rem' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ember)', display: 'inline-block', flexShrink: 0 }} />
                The Distinction
              </div>
              <h2 style={{
                fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,2.2vw,2rem)',
                fontWeight: 800, lineHeight: 1.15, letterSpacing: '0',
                color: 'var(--text-primary)', marginBottom: '1.75rem',
              }}>
                Your contractors deliver materials.<br />
                <em style={{ color: 'var(--ember-bright)', fontStyle: 'normal' }}>We deliver certainty.</em>
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: 480 }}>
                Developers and corporations who've worked with Oland Associates don't leave. Not because of loyalty programmes or discounts — because a partner who executes with this level of discipline is too rare to risk replacing.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 480 }}>
                We handle the complexity so your project stays clean — one point of contact, three critical supply verticals, and a single contractual commitment to deliver.
              </p>
            </motion.div>

            {/* Credentials */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', marginTop: '2.5rem', background: 'var(--border)', borderRadius: 12, overflow: 'hidden' }}
            >
              {credentials.map((c) => (
                <motion.div key={c.title} variants={staggerItem}
                  style={{ background: 'var(--ink-2)', padding: '1.5rem', transition: 'background 0.25s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--ink-3)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink-2)')}
                >
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--ember)', marginBottom: '0.5rem' }}>{c.icon}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{c.title}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{c.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Metrics card */}
          <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeRight}>
            <div style={{
              background: 'linear-gradient(145deg, var(--ink-3) 0%, var(--ink-2) 100%)',
              border: '1px solid var(--border)', borderRadius: 16,
              padding: 'clamp(2rem,4vw,3rem)', position: 'relative', overflow: 'hidden',
            }}>
              {/* Decorative corner */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: 160, height: 160, background: 'radial-gradient(circle at top right, rgba(232,99,10,0.12), transparent 65%)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative' }}>
                <div style={{
                  fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem,5vw,4rem)',
                  fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.02em',
                  color: 'rgba(37,25,89,0.6)', marginBottom: '-0.5rem',
                }}>8</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Years of Flawless Execution
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                  Trusted across Lagos, Abuja, Port Harcourt and beyond.
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', borderRadius: 10, overflow: 'hidden' }}>
                  {metrics.map(m => (
                    <div key={m.label} style={{ background: 'var(--card-bg)', padding: '1.25rem' }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--ember-bright)', letterSpacing: '0', lineHeight: 1 }}>{m.val}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.35rem' }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: '2rem', padding: '1.25rem',
                  background: 'var(--ember-pale)', border: '1px solid var(--ember-border)', borderRadius: 8,
                  display: 'flex', alignItems: 'center', gap: '1rem',
                }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--ember)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0 }}>★</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>5.0 Client Satisfaction Rating</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>Across 50+ corporate engagements</div>
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
