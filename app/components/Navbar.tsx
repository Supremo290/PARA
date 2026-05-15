'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home')
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { label: 'Home',         href: '#home' },
    { label: 'About',        href: '#about' },
    { label: 'Features',     href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Team',         href: '#team' },
    { label: 'Contact',      href: '#contact' },
  ]

  useEffect(() => {
    // Navbar background on scroll
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)

    // Auto-highlight active nav link based on visible section
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const matched = navLinks.find((l) => l.href === `#${id}`)
            if (matched) setActiveLink(matched.label)
          }
        },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  return (
    <nav
      className="fixed w-full top-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? 'rgba(4, 9, 30, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(139, 92, 246, 0.1)' : 'none',
      }}
    >
      <div style={{ paddingLeft: '0.5rem', paddingRight: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '96px' }}>

          {/* Logo + Brand text */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: '0.1rem', textDecoration: 'none', flexShrink: 0 }}
            onClick={() => setActiveLink('Home')}
          >
            <Image
              src="/PARA-logo.png"
              alt="PARA Logo"
              width={72}
              height={72}
              style={{ objectFit: 'contain', flexShrink: 0 }}
              priority
            />
            {/* Brand name + tagline */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: 1, marginLeft: '-8px' }}>
              <span style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.04em',
              }}>
                PARA
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 400,
                color: '#94a3b8',
                letterSpacing: '0.03em',
                marginTop: '3px',
              }}>
                PUV Tracking System
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                style={{ textDecoration: 'none', position: 'relative', paddingBottom: '4px' }}
              >
                <span style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: activeLink === link.label ? '#a78bfa' : '#cbd5e1',
                  transition: 'color 0.2s',
                }}>
                  {link.label}
                </span>
                {activeLink === link.label && (
                  <span style={{
                    position: 'absolute', bottom: 0, left: 0,
                    width: '100%', height: '2px',
                    background: 'linear-gradient(90deg, #a78bfa, #818cf8)',
                    borderRadius: '9999px', display: 'block',
                  }} />
                )}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  )
}