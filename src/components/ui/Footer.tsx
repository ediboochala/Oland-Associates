'use client'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Solar Energy Solutions',
  'Electronics Supply',
  'Building Materials',
  'Project Consultation',
]

const socials = [
  { label: 'LI', name: 'LinkedIn', href: '#' },
  { label: '𝕏', name: 'Twitter/X', href: '#' },
  { label: 'IG', name: 'Instagram', href: '#' },
  { label: 'WA', name: 'WhatsApp', href: '#' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <footer style={{ background: 'var(--ink)', borderTop: '1px solid var(--border)', padding: 'clamp(3.5rem,7vw,5.5rem) 0 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)' }}>

        {/* Top section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(2.5rem,5vw,4rem)', marginBottom: 'clamp(3rem,6vw,4.5rem)' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: 'linear-gradient(135deg, #E8630A, #9B3506)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'white', fontWeight: 600, boxShadow: '0 0 20px rgba(232,99,10,0.35)' }}>O</div>
              <div style={{ lineHeight: 1.15 }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '0.88rem', color: 'var(--text-primary)' }}>Oland Associates</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: '0.58rem', color: 'var(--text-muted)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Enterprises</div>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: 280 }}>
              Solar energy. Electronics supply. Building materials. One partner for every project that demands precision.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {socials.map(s => (
                <a key={s.name} href={s.href} aria-label={s.name}
                  style={{
                    width: 32, height: 32, borderRadius: 6, border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)',
                    transition: 'all 0.2s', textDecoration: 'none',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--ember)'; (e.currentTarget as HTMLElement).style.color = 'var(--ember)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Navigation</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {navLinks.map(l => (
                <li key={l.href}>
                  <button onClick={() => scrollTo(l.href)}
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--ember-bright)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Services</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {services.map(s => (
                <li key={s}>
                  <button onClick={() => scrollTo('#services')}
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--ember-bright)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >{s}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Get in Touch</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { icon: '→', label: 'info@olandassociates.com', href: 'mailto:info@olandassociates.com' },
                { icon: '→', label: '+234 800 000 0000', href: 'tel:+2348000000000' },
                { icon: '→', label: 'Abuja & Lagos, Nigeria', href: '#' },
              ].map(c => (
                <a key={c.label} href={c.href}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <span style={{ color: 'var(--ember)', marginTop: 1, flexShrink: 0, fontSize: '0.7rem' }}>{c.icon}</span>
                  {c.label}
                </a>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <button
                onClick={() => scrollTo('#contact')}
                style={{
                  fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '0.75rem 1.5rem', borderRadius: 3,
                  background: 'var(--ember)', color: 'white',
                  boxShadow: '0 0 24px rgba(232,99,10,0.3)',
                  transition: 'all 0.3s', border: 'none', cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(232,99,10,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(232,99,10,0.3)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Engage Us →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Oland Associates Enterprises. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms', 'Quality Guarantee'].map(l => (
              <a key={l} href="#"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
