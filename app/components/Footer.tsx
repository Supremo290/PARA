'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative border-t border-accent-blue/10 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-bg to-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">PARA</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Smart transportation tracking platform for modern communities.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-accent-blue transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-gray-400 hover:text-accent-blue transition-colors text-sm">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-accent-blue transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-accent-blue transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-400 hover:text-accent-blue transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-accent-blue transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#docs" className="text-gray-400 hover:text-accent-blue transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#support" className="text-gray-400 hover:text-accent-blue transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#status" className="text-gray-400 hover:text-accent-blue transition-colors text-sm">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-blue/10 py-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 PARA. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <Link href="#privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <Link href="#terms" className="text-gray-500 hover:text-gray-300 transition-colors">
              Terms
            </Link>
            <Link href="#cookies" className="text-gray-500 hover:text-gray-300 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}