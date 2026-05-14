'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home')

  const navLinks = [
    { label: 'Home',         href: '#home' },
    { label: 'About',        href: '#about' },
    { label: 'Features',     href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Solutions',    href: '#solutions' },
    { label: 'Contact',      href: '#contact' },
  ]

  return (
    <nav className="fixed w-full top-0 z-50" style={{ background: 'transparent' }}>
      <div style={{ paddingLeft: '6rem', paddingRight: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>

          {/* Logo — bigger, far left */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}
            onClick={() => setActiveLink('Home')}
          >
            <Image
              src="/para-title-logo.png"
              alt="PARA Logo"
              width={190}
              height={62}
              style={{ objectFit: 'contain' }}
              priority
            />
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