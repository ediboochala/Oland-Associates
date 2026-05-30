'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useTheme } from '@/lib/theme-context'

const navLinks = [
  { label: 'Services', href: '#services', type: 'scroll' },
  { label: 'Why Us', href: '#why', type: 'scroll' },
  { label: 'Projects', href: '#projects', type: 'scroll' },
  { label: 'Founders', href: '/founders', type: 'page' },
  { label: 'Contact', href: '/contact', type: 'page' },
]

const services = [
  'Solar Energy Solutions',
  'Electronics Supply',
  'Building Materials',
  'Project Consultation',
]

const socials = [
  {
    label: 'FB',
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'IG',
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'WA',
    name: 'WhatsApp',
    href: 'https://wa.me/2348029046161',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'GM',
    name: 'Gmail',
    href: 'mailto:olandassociateenterprises@gmail.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const { theme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const handleNavClick = (href: string, type: string) => {
    if (type === 'page') {
      router.push(href)
      return
    }
    if (pathname === '/') {
      const el = document.querySelector(href)
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
    } else {
      router.push(`/${href}`)
    }
  }

  return (
    <footer style={{ background: 'var(--ink)', borderTop: '1px solid var(--border)', padding: 'clamp(3.5rem,7vw,5.5rem) 0 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)' }}>

        {/* Top section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(2.5rem,5vw,4rem)', marginBottom: 'clamp(3rem,6vw,4.5rem)' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <Image
                src="/Oland logo wh.png"
                alt="Oland Associates Enterprises"
                width={320}
                height={87}
                style={{
                  objectFit: 'contain',
                  display: 'block',
                  width: 'clamp(130px, 20vw, 220px)',
                  height: 'auto',
                  filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none',
                  transition: 'filter 0.35s ease',
                }}
              />
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: 280 }}>
              Solar energy. Electronics supply. Building materials. One partner for every project that demands precision.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {socials.map(s => (
                <a key={s.name} href={s.href} aria-label={s.name} target={s.href.startsWith('http') ? '_blank' : undefined} rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    width: 34, height: 34, borderRadius: 7, border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s', textDecoration: 'none',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--ember)'; (e.currentTarget as HTMLElement).style.color = 'var(--ember)'; (e.currentTarget as HTMLElement).style.background = 'var(--ember-pale)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  {s.icon}
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
                  <button onClick={() => handleNavClick(l.href, l.type)}
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
                  <button onClick={() => handleNavClick('#services', 'scroll')}
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
                { icon: '→', label: 'olandassociateenterprises@gmail.com', href: 'mailto:olandassociateenterprises@gmail.com' },
                { icon: '→', label: '+234 802 904 6161', href: 'tel:+2348029046161' },
                { icon: '→', label: 'No 62 France Road by Kano Pillars Stadium, Kano', href: '#' },
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
                onClick={() => handleNavClick('/contact', 'page')}
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
