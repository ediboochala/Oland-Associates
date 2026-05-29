'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-context'

const stats = [
  { value: '8+', label: 'Years Operating' },
  { value: '₦2B+', label: 'Contract Value' },
  { value: '200+', label: 'Projects Executed' },
  { value: '99%', label: 'On-Time Delivery' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    const lineColor = theme === 'light' ? 'rgba(58,36,128,0.25)' : 'rgba(58,36,128,0.15)'

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232,99,10,${p.opacity})`
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const alpha = (theme === 'light' ? 0.25 : 0.15) * (1 - dist / 120)
            ctx.strokeStyle = `rgba(58,36,128,${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [theme])

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: 'calc(100vh - 6.5rem)',
      display: 'flex',
      alignItems: 'flex-end',
      paddingBottom: 'clamp(2.5rem, 6vw, 4.5rem)',
      overflow: 'hidden',
      margin: '5.5rem clamp(0.75rem, 2vw, 1.5rem) clamp(0.75rem, 2vw, 1.5rem)',
      borderRadius: 20,
      border: '1px solid var(--hero-border)',
      boxShadow: 'var(--hero-shadow)',
      transition: 'border-color 0.35s, box-shadow 0.35s',
    }}>
      {/* Background layers */}
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, var(--hero-g1) 0%, var(--hero-g2) 55%, var(--hero-g3) 100%)`, transition: 'background 0.35s' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 75% 40%, var(--purple-glow) 0%, transparent 65%)', pointerEvents: 'none', transition: 'background 0.35s' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 40% at 20% 75%, rgba(232,99,10,0.08) 0%, transparent 55%)', pointerEvents: 'none' }} />

      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.7 }} />

      {/* Fine grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse at 40% 50%, black 20%, transparent 75%)',
      }} />

      {/* Large ambient text */}
      <div style={{
        position: 'absolute', right: '-3%', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'var(--font-serif)', fontSize: 'clamp(8rem, 18vw, 16rem)',
        fontWeight: 300, color: 'var(--purple-ghost)', lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em',
        whiteSpace: 'nowrap', transition: 'color 0.35s',
      }}>OAE</div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)', width: '100%' }}>
        {/* Main headline */}
        <div style={{ marginBottom: '2rem', overflow: 'hidden' }}>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '0',
              color: 'var(--text-primary)',
              maxWidth: '18ch',
            }}
          >
            We Build the<br />
            <em style={{ fontStyle: 'normal', color: 'var(--ember-bright)' }}>Infrastructure</em><br />
            Nigeria Runs On.
          </motion.h1>
        </div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{
            fontFamily: 'var(--font-sans)', fontWeight: 500,
            fontSize: 'clamp(0.88rem, 1.2vw, 0.98rem)',
            color: 'var(--text-primary)', lineHeight: 1.8,
            maxWidth: 520, marginBottom: '2.75rem',
            opacity: 0.85,
          }}
        >
          Solar energy. Electronics supply. Premium building materials.
          One disciplined partner for the projects that cannot afford to fail.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '5rem' }}
        >
          <button
            onClick={() => { const el = document.querySelector('#contact'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }) }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.8rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '1.1rem 2.25rem', borderRadius: 3,
              background: 'var(--ember)', color: 'white',
              boxShadow: '0 0 36px rgba(232,99,10,0.4)',
              transition: 'all 0.3s',
              border: 'none', cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 56px rgba(232,99,10,0.6)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 36px rgba(232,99,10,0.4)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Submit Project Brief
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            onClick={() => { const el = document.querySelector('#services'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }) }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.8rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '1.1rem 2.25rem', borderRadius: 3,
              border: '1px solid var(--btn-outline)', color: 'var(--text-secondary)',
              transition: 'all 0.3s', background: 'none', cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--btn-outline-hover)'; e.currentTarget.style.color = 'var(--text-primary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--btn-outline)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
          >
            Our Capabilities
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          style={{ display: 'flex', gap: 'clamp(2rem,5vw,4.5rem)', flexWrap: 'wrap', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 + i * 0.1 }}
            >
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1, letterSpacing: '0' }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: '0.62rem', color: 'var(--text-secondary)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '0.35rem' }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ position: 'absolute', bottom: '2.5rem', right: 'clamp(1.25rem,4vw,3rem)', zIndex: 2, display: 'flex', alignItems: 'center', gap: '0.75rem' }}
      >
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', writingMode: 'vertical-rl' }}>Scroll</div>
        <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, var(--ember), transparent)', animation: 'scrollLine 2s ease-in-out infinite' }} />
      </motion.div>

      <style>{`
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(232,99,10,0.4)} 50%{box-shadow:0 0 0 8px rgba(232,99,10,0)} }
        @keyframes scrollLine { 0%{transform:scaleY(0);transform-origin:top} 50%{transform:scaleY(1);transform-origin:top} 51%{transform-origin:bottom} 100%{transform:scaleY(0);transform-origin:bottom} }
      `}</style>
    </section>
  )
}
