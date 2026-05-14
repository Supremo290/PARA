'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 glass border-b border-accent-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#home" className="flex items-center gap-2 transition-glow hover:opacity-90">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-blue to-blue-700 flex items-center justify-center shadow-lg shadow-accent-blue/30">
              <span className="text-white font-bold text-lg leading-none">p</span>
            </div>
            <span className="text-xl font-bold text-white">PARA</span>
          </Link>

          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-300 hover:text-accent-blue transition-colors duration-300 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-blue to-purple-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-300" />
              )}
            </button>

            <Link
              href="#contact"
              className="hidden md:inline-flex px-3 py-2 text-sm text-gray-200 hover:text-white transition-colors"
            >
              Log In
            </Link>
            <Link
              href="#contact"
              className="hidden md:inline-flex px-4 py-2 rounded-lg text-sm font-semibold bg-accent-blue hover:bg-blue-500 transition-colors text-white"
            >
              Get Started
            </Link>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6 space-y-3 border-t border-accent-blue/10 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-accent-blue transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="#contact"
                className="px-3 py-2 text-sm text-gray-200 hover:text-white transition-colors"
              >
                Log In
              </Link>
              <Link
                href="#contact"
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-accent-blue hover:bg-blue-500 transition-colors text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
