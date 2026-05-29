'use client'

const clients = [
  'VERDE PROPERTIES', 'APEX CONSTRUCTION GROUP', 'NEXGEN REALTY',
  'SUNBRIDGE CAPITAL', 'METRO DEVELOPERS', 'PINNACLE HOLDINGS',
  'FCT INFRASTRUCTURE', 'GREENFIELD ESTATES',
]

export default function TrustBar() {
  return (
    <div style={{
      background: 'var(--section-tint)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '1.5rem 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, var(--ink), transparent)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, var(--ink), transparent)', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', animation: 'marquee 28s linear infinite', whiteSpace: 'nowrap' }}>
        {[...clients, ...clients].map((c, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--trust-color)', flexShrink: 0 }}>
              {c}
            </span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--ember)', opacity: 0.4, flexShrink: 0, display: 'inline-block' }} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>
    </div>
  )
}
