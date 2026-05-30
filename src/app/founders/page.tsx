'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from '@/lib/animations'

const credentials = [
  { value: '23+', label: 'Years in Sales & Trade' },
  { value: 'Pan-North', label: 'Regional Coverage' },
  { value: '₦2B+', label: 'Contract Value' },
  { value: '200+', label: 'Projects Executed' },
]

const values = [
  {
    num: '01',
    title: 'Built on the Ground, Not from a Boardroom',
    body: '23 years managing sales across all of northern Nigeria — from Kano to Maiduguri, Sokoto to Jos — means Olaiya understands the terrain, the relationships, and the realities of doing business in the region better than anyone. That ground-level knowledge is the company\'s core advantage.',
  },
  {
    num: '02',
    title: 'Multinational Precision, Local Reach',
    body: 'A career built inside multinational trading and distribution companies taught him what professional supply chains look like — documentation standards, delivery discipline, quality controls. He brought that discipline back into a locally owned company that could serve Nigerian clients with the same rigour.',
  },
  {
    num: '03',
    title: 'One Relationship, Full Accountability',
    body: 'Managing multiple suppliers for a single project creates friction, blame-shifting, and delays. He built Oland Associates to eliminate that — one contract, one contact, full accountability across solar, electronics, and materials.',
  },
  {
    num: '04',
    title: 'Long-Term Thinking Over Quick Invoices',
    body: 'He doesn\'t optimise for the invoice. If a specified material has a better alternative, he says so. If a timeline is at risk, he flags it early. That is what separates a vendor from a partner — and it\'s the standard every engagement is held to.',
  },
]

const milestones = [
  { year: '2001', label: 'Began regional sales career across northern Nigeria' },
  { year: '2008', label: 'Appointed Regional Sales Manager, covering all northern states' },
  { year: '2014', label: 'Completed senior roles within Indian-owned multinational trading firms' },
  { year: '2016', label: 'Founded Oland Associates Enterprises in Kano' },
  { year: '2020', label: 'Launched solar energy systems division' },
  { year: '2022', label: 'Crossed ₦1B in cumulative contract value' },
  { year: '2026', label: '200+ projects, 50+ corporate clients across northern Nigeria' },
]

export default function FoundersPage() {
  const heroRef = useRef(null)
  const founderRef = useRef(null)
  const valuesRef = useRef(null)
  const timelineRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const founderInView = useInView(founderRef, { once: true, margin: '-60px' })
  const valuesInView = useInView(valuesRef, { once: true, margin: '-60px' })
  const timelineInView = useInView(timelineRef, { once: true, margin: '-60px' })

  return (
    <main style={{ background: 'var(--ink)', minHeight: '100vh' }}>
      <Navbar />

      {/* ── Page Header ─────────────────────────────────────────── */}
      <section ref={heroRef} style={{
        position: 'relative',
        padding: 'clamp(7rem,14vw,11rem) 0 clamp(4rem,8vw,6rem)',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(58,36,128,0.18), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 40% 40% at 20% 50%, rgba(232,99,10,0.06), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.3rem 0.85rem', borderRadius: 4, background: 'rgba(232,99,10,0.1)', border: '1px solid rgba(232,99,10,0.22)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ember-bright)', marginBottom: '1.25rem' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ember)', display: 'inline-block' }} />
              The Person Behind the Work
            </div>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem,3.5vw,3rem)',
              fontWeight: 800, lineHeight: 1.1,
              color: 'var(--text-primary)',
              maxWidth: '20ch',
              marginBottom: '1.25rem',
            }}>
              23 years in the field.<br />
              <em style={{ fontStyle: 'normal', color: 'var(--ember-bright)' }}>One company built to last.</em>
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 520 }}>
              Oland Associates Enterprises wasn't built in a conference room. It was built from two decades of knowing exactly how northern Nigeria's trade and infrastructure markets work — and deciding to serve them better.
            </p>
          </motion.div>
        </div>

        <div style={{ position: 'absolute', right: '-2%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-serif)', fontSize: 'clamp(5rem,14vw,12rem)', fontWeight: 300, color: 'var(--purple-ghost)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em', whiteSpace: 'nowrap', transition: 'color 0.35s' }}>
          OAE
        </div>
      </section>

      {/* ── Founder Profile ──────────────────────────────────────── */}
      <section ref={founderRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem) clamp(5rem,10vw,8rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,420px), 1fr))', gap: 'clamp(3rem,6vw,5rem)', alignItems: 'start' }}>

          {/* ── Left: Identity card ───────────────────────────────── */}
          <motion.div initial="hidden" animate={founderInView ? 'visible' : 'hidden'} variants={fadeLeft}>
            <div style={{
              background: 'var(--ink-2)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 'clamp(2rem,4vw,2.75rem)',
              position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.3s',
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 180, height: 180, background: 'radial-gradient(circle at top right, rgba(232,99,10,0.08), transparent 65%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: 140, height: 140, background: 'radial-gradient(circle at bottom left, rgba(58,36,128,0.12), transparent 65%)', pointerEvents: 'none' }} />

              {/* Avatar */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: 18,
                  background: 'linear-gradient(135deg, #251959 0%, #3A2480 45%, #E8630A 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 800,
                  color: 'white', letterSpacing: '-0.02em',
                  boxShadow: '0 8px 32px rgba(232,99,10,0.25)',
                }}>
                  OA
                </div>
              </div>

              <div style={{ marginBottom: '0.3rem', fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem,1.6vw,1.35rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                Olaiya O. Adeniran
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ember)', marginBottom: '1.75rem' }}>
                Founder &amp; Chief Executive Officer
              </div>

              {/* Stats row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', borderRadius: 10, overflow: 'hidden', marginBottom: '1.75rem' }}>
                {credentials.map(c => (
                  <div key={c.label} style={{ background: 'var(--ink-3)', padding: '1rem 1.1rem' }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>{c.value}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.3rem' }}>{c.label}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Regional Sales', 'Northern Nigeria', 'Multinational Experience', 'Solar & Energy', 'Supply Chain', 'Oyo State / Kano'].map(tag => (
                  <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 0.7rem', borderRadius: 4, background: 'var(--ember-pale)', border: '1px solid var(--ember-border)', color: 'var(--ember-bright)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Bio ────────────────────────────────────────── */}
          <motion.div initial="hidden" animate={founderInView ? 'visible' : 'hidden'} variants={fadeRight}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Founder's Story
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Olaiya O. Adeniran spent over two decades on the ground across northern Nigeria — not in offices, but in markets, on project sites, and inside the supply chains of multinational trading companies. As a Regional Sales Manager, he covered the full northern corridor, building the kind of relationships and market knowledge that cannot be taught in a classroom.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                His career inside Indian-owned multinational companies gave him first-hand exposure to how world-class procurement and distribution operations are run — the documentation standards, the quality controls, the execution discipline. He saw what was possible. He also saw what was missing for local Nigerian clients who needed that same standard but couldn't access it.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Originally from Oyo State and long based in the north, Olaiya made a deliberate choice to plant roots in Kano and build something that served the region he knew best. In 2016, he founded Oland Associates Enterprises — combining his network, his operational standards, and his understanding of northern Nigeria's infrastructure needs into one company.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Today, that company spans solar energy systems, electronics supply, and premium building materials — with every project held to the same standard he learned over 23 years in the field: deliver what you promised, document everything, and never leave a client without a clear answer.
              </p>
            </div>

            {/* Pull quote */}
            <div style={{ marginTop: '2.25rem', padding: '1.5rem 1.75rem', borderLeft: '3px solid var(--ember)', background: 'var(--ember-pale)', borderRadius: '0 10px 10px 0' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.98rem', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                "The north has the projects. What it needs are partners who show up, deliver, and leave proper records behind. That's the entire business model."
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ember)' }}>
                — Olaiya O. Adeniran, Founder &amp; CEO
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Founding Principles ──────────────────────────────────── */}
      <section ref={valuesRef} style={{ padding: 'clamp(5rem,10vw,9rem) 0', background: 'var(--section-tint)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--purple-mid), transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--purple-mid), transparent)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto clamp(3rem,6vw,5rem)' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.3rem 0.85rem', borderRadius: 4, background: 'rgba(232,99,10,0.1)', border: '1px solid rgba(232,99,10,0.22)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ember-bright)', marginBottom: '1rem' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ember)', display: 'inline-block' }} />
              How He Runs the Company
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,2.2vw,2rem)', fontWeight: 800, lineHeight: 1.15, color: 'var(--text-primary)' }}>
              Principles forged from<br /><em style={{ fontStyle: 'normal', color: 'var(--ember-bright)' }}>23 years on the ground.</em>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,260px), 1fr))', gap: '1px', background: 'var(--border)', borderRadius: 14, overflow: 'hidden' }}
          >
            {values.map(v => (
              <motion.div
                key={v.num}
                variants={staggerItem}
                style={{ background: 'var(--ink)', padding: 'clamp(2rem,3.5vw,2.75rem)', position: 'relative', overflow: 'hidden', transition: 'background 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--ink-2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
              >
                <div style={{ position: 'absolute', bottom: '-0.5rem', right: '1rem', fontFamily: 'var(--font-serif)', fontSize: '8rem', fontWeight: 300, color: 'var(--watermark)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{v.num}</div>
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--ember-border)', background: 'var(--ember-pale)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--ember)' }}>
                    {v.num}
                  </div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{v.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Career Timeline ──────────────────────────────────────── */}
      <section ref={timelineRef} style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,4vw,3rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: 'clamp(3rem,5vw,4.5rem)' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.3rem 0.85rem', borderRadius: 4, background: 'rgba(232,99,10,0.1)', border: '1px solid rgba(232,99,10,0.22)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ember-bright)', marginBottom: '1rem' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ember)', display: 'inline-block' }} />
            Career &amp; Company History
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,2.2vw,2rem)', fontWeight: 800, lineHeight: 1.15, color: 'var(--text-primary)' }}>
            Two decades of groundwork.<br /><em style={{ fontStyle: 'normal', color: 'var(--ember-bright)' }}>One company to show for it.</em>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={timelineInView ? 'visible' : 'hidden'}
          style={{ position: 'relative' }}
        >
          <div style={{ position: 'absolute', left: 'calc(4.5rem - 1px)', top: 0, bottom: 0, width: 1, background: 'var(--border)' }} />

          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              variants={staggerItem}
              style={{ display: 'grid', gridTemplateColumns: '4.5rem 1.75rem 1fr', alignItems: 'center', marginBottom: i < milestones.length - 1 ? 'clamp(1.5rem,3vw,2.5rem)' : 0 }}
            >
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', fontWeight: 800, color: 'var(--ember)', textAlign: 'right', paddingRight: '1.25rem' }}>{m.year}</div>
              <div style={{ width: 11, height: 11, borderRadius: '50%', border: '2px solid var(--ember)', background: 'var(--ink)', zIndex: 1, justifySelf: 'center', flexShrink: 0 }} />
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.25rem' }}>{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--section-tint)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,4vw,3rem)', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,2.5vw,2.2rem)', fontWeight: 800, lineHeight: 1.2, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Ready to work with a partner<br />who <em style={{ fontStyle: 'normal', color: 'var(--ember-bright)' }}>actually delivers?</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 2.25rem' }}>
              Send us your project brief. We'll respond within 24 hours with a full proposal — no sales pitch, just a clear answer.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '1.1rem 2.25rem', borderRadius: 3,
                  background: 'var(--ember)', color: 'white',
                  boxShadow: '0 0 32px rgba(232,99,10,0.4)', textDecoration: 'none', transition: 'all 0.3s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 52px rgba(232,99,10,0.6)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(232,99,10,0.4)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
              >
                Submit a Brief
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a
                href="tel:+2348029046161"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '1.1rem 2.25rem', borderRadius: 3,
                  border: '1px solid var(--btn-outline)', color: 'var(--text-secondary)',
                  textDecoration: 'none', transition: 'all 0.3s', background: 'none',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--btn-outline-hover)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--btn-outline)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)' }}
              >
                Call Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
