'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, staggerItem } from '@/lib/animations'

const projects = [
  {
    id: 1, category: 'solar',
    title: '200kW Commercial Rooftop Solar',
    client: 'Kano Commercial District',
    year: '2026', outcome: '72% reduction in energy costs',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=75&fit=crop',
  },
  {
    id: 2, category: 'materials',
    title: 'Full Materials Supply — 120-Unit Estate',
    client: 'Kano North Development',
    year: '2026', outcome: 'Zero delays across 18-month build',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=75&fit=crop',
  },
  {
    id: 3, category: 'electronics',
    title: 'Industrial UPS & Power Management',
    client: 'Corporate Campus, Kano',
    year: '2026', outcome: '100% uptime achieved post-installation',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22731c9c72?w=800&q=75&fit=crop',
  },
  {
    id: 4, category: 'solar',
    title: 'Off-Grid Solar + Battery Storage System',
    client: 'Rural Communities, Kano State',
    year: '2026', outcome: 'First power for 3,200 residents',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=75&fit=crop',
  },
  {
    id: 5, category: 'electronics',
    title: 'Electrical Components — Retail Chain',
    client: '10 Locations, Kano State',
    year: '2026', outcome: 'Consolidated supply, 40% cost reduction',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=75&fit=crop',
  },
  {
    id: 6, category: 'materials',
    title: '5-Star Hotel Construction Supply',
    client: 'City Centre, Kano',
    year: '2026', outcome: 'Delivered in 6 phases, on-schedule',
    img: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=75&fit=crop',
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
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,2.2vw,2rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '0', color: 'var(--text-primary)' }}>
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
                className="project-card"
                style={{
                  background: 'var(--ink-2)', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden',
                  transition: 'transform 0.35s var(--ease-out), box-shadow 0.35s, border-color 0.35s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'; e.currentTarget.style.borderColor = 'var(--ember-border)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                {/* Image */}
                <div style={{ height: 200, position: 'relative', overflow: 'hidden' }}>
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    style={{ objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}
                    className="project-img"
                  />
                  {/* Gradient overlay for readability */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)', pointerEvents: 'none' }} />
                  {/* Category badge */}
                  <div style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                    padding: '0.3rem 0.7rem', borderRadius: 3,
                    background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'white',
                    fontWeight: 600,
                  }}>
                    {p.category === 'materials' ? 'Materials' : p.category.charAt(0).toUpperCase() + p.category.slice(1)}
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

      <style>{`
        .project-card:hover .project-img { transform: scale(1.06) !important; }
      `}</style>
    </section>
  )
}
