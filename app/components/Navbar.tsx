'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home')

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="fixed w-full top-0 z-50"
      style={{
        background: 'transparent',
        /* No border-bottom — removed */
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>

          {/* Logo — left-aligned naturally by flex */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => setActiveLink('Home')}>
            <Image
              src="/para-title-logo.png"
              alt="PARA Logo"
              width={130}
              height={44}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                style={{ textDecoration: 'none', position: 'relative', paddingBottom: '4px' }}
              >
                <span
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: activeLink === link.label ? '#60a5fa' : '#cbd5e1',
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </span>
                {activeLink === link.label && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: '#60a5fa',
                      borderRadius: '9999px',
                      display: 'block',
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  )
}