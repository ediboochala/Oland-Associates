'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'

const projects = [
  {
    id: 1, category: 'solar',
    title: '200kW Commercial Rooftop Solar',
    client: 'Lagos Island Office Estate',
    year: '2024', outcome: '72% reduction in energy costs',
    bg: 'linear-gradient(145deg, #0E0B1E 0%, #251959 100%)',
    icon: '◐',
  },
  {
    id: 2, category: 'materials',
    title: 'Full Materials Supply — 120-Unit Estate',
    client: 'Abuja North Development',
    year: '2024', outcome: 'Zero delays across 18-month build',
    bg: 'linear-gradient(145deg, #100E0A 0%, #2A1F08 100%)',
    icon: '◒',
  },
  {
    id: 3, category: 'electronics',
    title: 'Industrial UPS & Power Management',
    client: 'Corporate Campus, Port Harcourt',
    year: '2023', outcome: '100% uptime achieved post-installation',
    bg: 'linear-gradient(145deg, #0A100E 0%, #082A1F 100%)',
    icon: '◑',
  },
  {
    id: 4, category: 'solar',
    title: 'Off-Grid Solar + Battery Storage System',
    client: 'Rural Electrification Initiative',
    year: '2023', outcome: 'First power for 3,200 residents',
    bg: 'linear-gradient(145deg, #0B0E1A 0%, #1A2040 100%)',
    icon: '◐',
  },
  {
    id: 5, category: 'electronics',
    title: 'Electrical Components — Retail Chain',
    client: '15 Locations, South-West Nigeria',
    year: '2023', outcome: 'Consolidated supply, 40% cost reduction',
    bg: 'linear-gradient(145deg, #100A0A 0%, #2A0E0E 100%)',
    icon: '◑',
  },
  {
    id: 6, category: 'materials',
    title: '5-Star Hotel Construction Supply',
    client: 'Victoria Island, Lagos',
    year: '2022', outcome: 'Delivered in 6 phases, on-schedule',
    bg: 'linear-gradient(145deg, #0E0A10 0%, #250E2A 100%)',
    icon: '◒',
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Solar', value: 'solar' },
  { label: 'Electronics', value: 'electronics' },
  { label: 'Building Materials', value: 'materials' },
]

export default function Projects() {
  const [active, setActive] = useState('all')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" ref={ref} style={{ padding: 'clamp(5rem,10vw,9rem) 0' }}>
      <div style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--purple-mid), transparent)', transform: 'translateY(-1px)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.3rem 0.85rem', borderRadius: 4, background: 'rgba(232,99,10,0.1)', border: '1px solid rgba(232,99,10,0.22)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ember-bright)', marginBottom: '0.75rem' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ember)', display: 'inline-block', flexShrink: 0 }} />
              Selected Engagements
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4.5vw,4rem)', fontWeight: 600, lineHeight: 0.95, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              Work that speaks<br />before we do.
            </h2>
          </div>
          <button
            onClick={() => { const el = document.querySelector('#contact'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }) }}
            style={{
              fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: 4,
              color: 'var(--text-secondary)', background: 'none', cursor: 'pointer', transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ember)'; e.currentTarget.style.color = 'var(--ember-bright)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
          >
            Discuss Your Project →
          </button>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}
        >
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '0.5rem 1.1rem', borderRadius: 3,
                border: `1px solid ${active === f.value ? 'var(--ember)' : 'var(--border)'}`,
                background: active === f.value ? 'var(--ember-pale)' : 'none',
                color: active === f.value ? 'var(--ember-bright)' : 'var(--text-muted)',
                cursor: 'pointer', transition: 'all 0.25s',
              }}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: '1.5rem' }}
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{
                  background: 'var(--ink-2)', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden',
                  transition: 'transform 0.35s var(--ease-out), box-shadow 0.35s, border-color 0.35s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)'; e.currentTarget.style.borderColor = 'var(--ember-border)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                {/* Visual */}
                <div style={{ height: 180, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '7rem', fontWeight: 300, color: 'rgba(255,255,255,0.06)', lineHeight: 1 }}>{p.icon}</div>
                  <div style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                    padding: '0.3rem 0.7rem', borderRadius: 3,
                    background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', border: '1px solid var(--border)',
                    color: 'var(--ember)',
                  }}>
                    {p.category.charAt(0).toUpperCase() + p.category.slice(1)}
                  </div>
                </div>
                {/* Body */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{p.title}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>{p.client}</span>
                    <span style={{ width: 2, height: 2, borderRadius: '50%', background: 'var(--text-muted)', display: 'inline-block' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>{p.year}</span>
                  </div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.35rem 0.75rem', borderRadius: 3,
                    background: 'var(--ember-pale)', border: '1px solid var(--ember-border)',
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.08em', color: 'var(--ember-bright)',
                  }}>
                    <span>↑</span> {p.outcome}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
