'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from '@/lib/animations'

const contactDetails = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'olandassociateenterprises@gmail.com',
    href: 'mailto:olandassociateenterprises@gmail.com',
    sub: 'We respond within 24 hours',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 5.72 5.72l1.17-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+234 802 904 6161',
    href: 'tel:+2348029046161',
    sub: 'Mon – Fri, 8am – 6pm WAT',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Address',
    value: 'No 62 France Road by Kano Pillars Stadium',
    href: '#',
    sub: 'Kano, Kano State, Nigeria',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: 'Chat with us',
    href: 'https://wa.me/2348029046161?text=' + encodeURIComponent("Hello! I'd like to learn more about Oland Associates Enterprises' services."),
    sub: 'Quick responses guaranteed',
  },
]

const services = [
  'Solar Energy Systems',
  'Electronics Supply',
  'Building Materials',
  'Industrial UPS & Power',
  'Multiple Services',
  'Other / Not Sure',
]

const guarantees = [
  'Free consultation',
  '24-hr proposal',
  'No lock-in',
  'Fully certified',
]

export default function ContactPage() {
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const formInView = useInView(formRef, { once: true, margin: '-60px' })

  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <main style={{ background: 'var(--ink)', minHeight: '100vh' }}>
      <Navbar />

      {/* ── Page Header ─────────────────────────────────────────── */}
      <section ref={heroRef} style={{
        position: 'relative',
        padding: 'clamp(7rem,14vw,11rem) 0 clamp(4rem,8vw,6rem)',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(58,36,128,0.18), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 40% 40% at 80% 50%, rgba(232,99,10,0.06), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.3rem 0.85rem', borderRadius: 4, background: 'rgba(232,99,10,0.1)', border: '1px solid rgba(232,99,10,0.22)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ember-bright)', marginBottom: '1.25rem' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ember)', display: 'inline-block' }} />
              Get In Touch
            </div>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem,3.5vw,3rem)',
              fontWeight: 800, lineHeight: 1.1,
              color: 'var(--text-primary)',
              maxWidth: '18ch',
              marginBottom: '1.25rem',
            }}>
              Start your project<br />
              <em style={{ fontStyle: 'normal', color: 'var(--ember-bright)' }}>with one brief.</em>
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 480 }}>
              Tell us what you need. We'll respond within 24 hours with a full proposal — scope, pricing, timeline. No sales pitch. Just a clear answer.
            </p>
          </motion.div>
        </div>

        {/* Large ambient text */}
        <div style={{ position: 'absolute', right: '-2%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-serif)', fontSize: 'clamp(5rem,14vw,12rem)', fontWeight: 300, color: 'var(--purple-ghost)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em', whiteSpace: 'nowrap', transition: 'color 0.35s' }}>
          OAE
        </div>
      </section>

      {/* ── Contact Grid ────────────────────────────────────────── */}
      <section ref={formRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem) clamp(5rem,10vw,8rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,480px), 1fr))', gap: 'clamp(3rem,6vw,5rem)', alignItems: 'start' }}>

          {/* ── Left: Form ───────────────────────────────────────── */}
          <motion.div initial="hidden" animate={formInView ? 'visible' : 'hidden'} variants={fadeLeft}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Project Brief
            </div>

            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ background: 'var(--ink-2)', border: '1px solid var(--ember-border)', borderRadius: 14, padding: 'clamp(2.5rem,5vw,3.5rem)', textAlign: 'center' }}
              >
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Brief Received</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Thank you. We'll review your requirements and respond with a full proposal within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.45rem' }}>Full Name *</label>
                    <input
                      className="oae-input"
                      type="text"
                      required
                      placeholder="Chukwuemeka Eze"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.45rem' }}>Phone</label>
                    <input
                      className="oae-input"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.45rem' }}>Email Address *</label>
                  <input
                    className="oae-input"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.45rem' }}>Service Required *</label>
                  <select
                    className="oae-input"
                    required
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.45rem' }}>Project Brief *</label>
                  <textarea
                    className="oae-input"
                    required
                    rows={5}
                    placeholder="Describe your project — scope, timeline, location, special requirements..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ resize: 'vertical', minHeight: 130 }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                      fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.8rem',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      padding: '1.05rem 2.25rem', borderRadius: 3,
                      background: status === 'sending' ? 'var(--ink-3)' : 'var(--ember)',
                      color: 'white', border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      boxShadow: status === 'sending' ? 'none' : '0 0 32px rgba(232,99,10,0.35)',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.boxShadow = '0 0 52px rgba(232,99,10,0.55)'; e.currentTarget.style.transform = 'translateY(-2px)' } }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 32px rgba(232,99,10,0.35)'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    {status === 'sending' ? (
                      <>Sending…</>
                    ) : (
                      <>Submit Brief <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></>
                    )}
                  </button>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {guarantees.map(g => (
                      <span key={g} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        <span style={{ color: 'var(--ember)', fontSize: '0.65rem' }}>✓</span>
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </form>
            )}
          </motion.div>

          {/* ── Right: Contact Info ─────────────────────────────── */}
          <motion.div initial="hidden" animate={formInView ? 'visible' : 'hidden'} variants={fadeRight}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Contact Details
            </div>

            <motion.div variants={staggerContainer} initial="hidden" animate={formInView ? 'visible' : 'hidden'} style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', borderRadius: 14, overflow: 'hidden', marginBottom: '2rem' }}>
              {contactDetails.map(c => (
                <motion.a
                  key={c.label}
                  variants={staggerItem}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'grid', gridTemplateColumns: '2.75rem 1fr', gap: '1rem',
                    alignItems: 'center', padding: '1.5rem 1.75rem',
                    background: 'var(--ink)', textDecoration: 'none',
                    transition: 'background 0.25s',
                    color: 'inherit',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--ink-2)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--ember-pale)', border: '1px solid var(--ember-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ember)', flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>{c.label}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.15rem', wordBreak: 'break-all' }}>{c.value}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.sub}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Office hours card */}
            <div style={{ background: 'var(--ink-2)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem 1.75rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>Office Hours</div>
              {[
                { days: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
                { days: 'Saturday', hours: '9:00 AM – 2:00 PM' },
                { days: 'Sunday', hours: 'By appointment' },
              ].map(row => (
                <div key={row.days} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{row.days}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ember-bright)' }}>{row.hours}</span>
                </div>
              ))}
              <div style={{ marginTop: '1.25rem', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                All times are <strong style={{ color: 'var(--text-secondary)' }}>West Africa Time (WAT, UTC+1)</strong>. For urgent matters, reach us via WhatsApp at any time.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
