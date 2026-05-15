'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone, Globe } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'paracagayan@gmail.com',
    color: '#3b82f6',
  },
  {
    icon: MessageCircle,
    label: 'Facebook',
    value: 'Para Cagayan',
    color: '#3b82f6',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '09773606145',
    color: '#3b82f6',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'paravanph.com',
    color: '#3b82f6',
    href: 'https://paravanph.com',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: '#04091e',
        position: 'relative',
        padding: '7rem 4rem',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .contact-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .contact-orb-left {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%);
          bottom: -120px; left: -150px; filter: blur(80px);
        }
        .contact-orb-right {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%);
          top: -80px; right: -80px; filter: blur(80px);
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.25rem;
          background: rgba(10, 16, 42, 0.6);
          border: 1px solid rgba(59,130,246,0.15);
          border-radius: 0.875rem;
          transition: all 0.3s ease;
        }
        .contact-item:hover {
          background: rgba(10, 16, 42, 0.8);
          border-color: rgba(59,130,246,0.3);
          transform: translateX(8px);
        }
        .contact-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(59,130,246,0.2);
          border: 1px solid rgba(59,130,246,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
      `}</style>

      <div className="contact-grid" />
      <div className="contact-orb-left" />
      <div className="contact-orb-right" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ marginBottom: '0.75rem' }}>
            <span style={{
              color: '#3b82f6',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              Get in Touch
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.18,
            marginBottom: '1.25rem',
          }}>
            Contact Us
          </h2>

          <p style={{
            color: '#94a3b8',
            fontSize: '1.05rem',
            lineHeight: 1.75,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Have questions or ready to get started? Reach out to us through any of these channels.
          </p>
        </motion.div>

        {/* Contact Items */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {contactInfo.map((item, i) => {
            const Icon = item.icon
            const href = item.href || (
              item.label === 'Email' ? `mailto:${item.value}` :
              item.label === 'Phone' ? `tel:${item.value}` :
              '#'
            )
            const isExternal = item.label === 'Website'

            return (
              <motion.a
                key={i}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                style={{
                  textDecoration: 'none',
                  cursor: item.label === 'Facebook' ? 'default' : 'pointer',
                }}
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false }}
              >
                <div className="contact-icon">
                  <Icon style={{ width: '24px', height: '24px', color: item.color }} />
                </div>
                <div>
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.875rem',
                    marginBottom: '0.25rem',
                  }}>
                    {item.label}
                  </p>
                  <p style={{
                    color: '#e2e8f0',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                  }}>
                    {item.value}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </div>

      </div>
    </section>
  )
}