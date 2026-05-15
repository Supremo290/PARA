'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Clock,
  Hourglass,
  Users,
  TrendingUp,
  Building2,
  BarChart3,
} from 'lucide-react'

const steps = [
  {
    number: 1,
    status: 'done', // 'done' | 'next' | 'upcoming'
    title: 'PARA Developed, Tested & Deployed',
    accentColor: '#22c55e',
    borderColor: 'rgba(34,197,94,0.35)',
    bgGlow: 'rgba(34,197,94,0.06)',
    desc: 'PARA has been developed, tested with commuters and drivers, and deployed in a controlled environment to ensure reliability and performance.',
    statusLabel: 'COMPLETED',
    statusIcon: CheckCircle2,
  },
  {
    number: 2,
    status: 'next',
    title: 'PARA Implemented in Cagayan Soon for Van Vehicles',
    accentColor: '#3b82f6',
    borderColor: 'rgba(59,130,246,0.45)',
    bgGlow: 'rgba(59,130,246,0.07)',
    desc: 'We are preparing for the implementation of PARA across Cagayan, starting with van vehicles to improve transport coordination and commuter experience.',
    statusLabel: 'NEXT STEP',
    statusIcon: Clock,
  },
  {
    number: 3,
    status: 'upcoming',
    title: 'Add Other Type of Vehicle (Taxi & Mini Bus)',
    accentColor: '#22d3ee',
    borderColor: 'rgba(34,211,238,0.2)',
    bgGlow: 'rgba(34,211,238,0.04)',
    desc: 'Expanding PARA to include Taxi and Mini Bus services for broader coverage and more transport options.',
    statusLabel: 'UP NEXT',
    statusIcon: Hourglass,
  },
  {
    number: 4,
    status: 'upcoming',
    title: 'Expand to Other Regions',
    accentColor: '#a78bfa',
    borderColor: 'rgba(167,139,250,0.2)',
    bgGlow: 'rgba(167,139,250,0.04)',
    desc: 'Our goal is to bring PARA to other regions and communities, creating a nationwide smart transportation network.',
    statusLabel: 'UP NEXT',
    statusIcon: Hourglass,
  },
  {
    number: 5,
    status: 'upcoming',
    title: 'Add Digital Payment',
    accentColor: '#f43f5e',
    borderColor: 'rgba(244,63,94,0.2)',
    bgGlow: 'rgba(244,63,94,0.04)',
    desc: 'Future updates will include secure digital payment integration for a faster, easier, and cashless experience.',
    statusLabel: 'UP NEXT',
    statusIcon: Hourglass,
  },
  {
    number: 6,
    status: 'upcoming',
    title: 'Add Other Vehicle (Other Modes)',
    accentColor: '#84cc16',
    borderColor: 'rgba(132,204,22,0.2)',
    bgGlow: 'rgba(132,204,22,0.04)',
    desc: 'We will continue to add more transport modes such as jeepneys, tricycles, motorcycles, and more.',
    statusLabel: 'UP NEXT',
    statusIcon: Hourglass,
  },
]

const bottomStats = [
  { icon: Users,      label: 'Better Commuter Experience' },
  { icon: TrendingUp, label: 'Improved Transport Coordination' },
  { icon: Building2,  label: 'Smarter Governance & Planning' },
  { icon: BarChart3,  label: 'Data-Driven Decisions' },
]

export default function Traction() {
  return (
    <section
      id="traction"
      style={{
        background: '#04091e',
        position: 'relative',
        padding: '7rem 4rem 5rem',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .traction-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .traction-orb-tl {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%);
          top: -200px; left: -200px; filter: blur(100px);
        }
        .traction-orb-br {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%);
          bottom: -150px; right: -150px; filter: blur(100px);
        }

        /* Timeline dot styles */
        .tl-dot-done {
          width: 56px; height: 56px; border-radius: 50%;
          background: #16a34a;
          border: 3px solid #22c55e;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 24px rgba(34,197,94,0.5), 0 0 48px rgba(34,197,94,0.2);
          flex-shrink: 0;
          position: relative;
        }
        .tl-dot-next {
          width: 56px; height: 56px; border-radius: 50%;
          background: #1d4ed8;
          border: 3px solid #3b82f6;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 24px rgba(59,130,246,0.5), 0 0 48px rgba(59,130,246,0.2);
          flex-shrink: 0;
          position: relative;
        }
        .tl-dot-upcoming {
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(15,23,42,0.9);
          border: 2px solid rgba(100,116,139,0.4);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .tl-dot-badge {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 3px 8px;
          border-radius: 999px;
        }
        .tl-line-done {
          flex: 1;
          height: 3px;
          background: linear-gradient(90deg, #22c55e, #3b82f6);
          border-radius: 2px;
        }
        .tl-line-upcoming {
          flex: 1;
          height: 2px;
          border-top: 2px dashed rgba(100,116,139,0.3);
        }

        /* Step cards */
        .step-card {
          border-radius: 1rem;
          padding: 1.75rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s;
          min-height: 380px;
        }
        .step-card:hover {
          transform: translateY(-4px);
        }

        /* Bottom bar */
        .bottom-bar {
          background: rgba(10,16,48,0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(59,130,246,0.18);
          border-radius: 1rem;
          padding: 1.5rem 2.5rem;
          display: flex;
          align-items: center;
          gap: 2.5rem;
          margin-top: 3.5rem;
          flex-wrap: wrap;
        }
        .bottom-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
          min-width: 120px;
          text-align: center;
          padding: 0.5rem 1rem;
          border-right: 1px solid rgba(59,130,246,0.12);
        }
        .bottom-stat:last-child {
          border-right: none;
        }
      `}</style>

      <div className="traction-grid-bg" />
      <div className="traction-orb-tl" />
      <div className="traction-orb-br" />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.75rem)',
            fontWeight: 900,
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            <span style={{ color: '#ffffff' }}>PARA TRACTION </span>
            <span style={{
              background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              ROADMAP
            </span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Building a smarter, more connected transportation system for Cagayan and beyond.
          </p>
        </motion.div>

        {/* ── Timeline Row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '3rem',
            padding: '2rem 0 1rem',
            position: 'relative',
          }}
        >
          {steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? '1' : '0' }}>
              {/* Dot */}
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Badge above dot */}
                {step.status === 'done' && (
                  <span className="tl-dot-badge" style={{ background: '#16a34a', color: '#fff', top: '-28px' }}>
                    DONE
                  </span>
                )}
                {step.status === 'next' && (
                  <span className="tl-dot-badge" style={{ background: '#1d4ed8', color: '#fff', top: '-28px' }}>
                    NEXT STEP
                  </span>
                )}

                {/* Circle */}
                {step.status === 'done' && (
                  <div className="tl-dot-done">
                    <CheckCircle2 style={{ width: '26px', height: '26px', color: '#ffffff' }} />
                  </div>
                )}
                {step.status === 'next' && (
                  <div className="tl-dot-next">
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>2</span>
                  </div>
                )}
                {step.status === 'upcoming' && (
                  <div className="tl-dot-upcoming">
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#64748b' }}>{step.number}</span>
                  </div>
                )}

                {/* Small indicator dot below */}
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%', marginTop: '8px',
                  background: step.status === 'done' ? '#22c55e'
                    : step.status === 'next' ? '#3b82f6'
                    : 'rgba(100,116,139,0.35)',
                }} />
              </div>

              {/* Connector line (not after last) */}
              {i < steps.length - 1 && (
                <div
                  className={i === 0 ? 'tl-line-done' : 'tl-line-upcoming'}
                  style={{ margin: '0 4px', marginBottom: '16px' }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* ── Step Cards ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '1.25rem',
          marginBottom: '2rem',
        }}>
          {steps.map((step, i) => {
            const StatusIcon = step.statusIcon
            return (
              <motion.div
                key={i}
                className="step-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                viewport={{ once: false }}
                style={{
                  background: `rgba(10, 16, 42, 0.88)`,
                  border: `1px solid ${step.borderColor}`,
                  boxShadow: step.status !== 'upcoming' ? `0 0 40px ${step.bgGlow}` : 'none',
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: step.accentColor,
                  borderRadius: '1rem 1rem 0 0',
                  opacity: step.status === 'upcoming' ? 0.5 : 1,
                }} />

                {/* Step number badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.75rem',
                }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '6px',
                    background: step.status === 'upcoming'
                      ? 'rgba(100,116,139,0.15)'
                      : `rgba(${step.accentColor === '#22c55e' ? '34,197,94' : step.accentColor === '#3b82f6' ? '59,130,246' : step.accentColor === '#22d3ee' ? '34,211,238' : step.accentColor === '#a78bfa' ? '167,139,250' : step.accentColor === '#f43f5e' ? '244,63,94' : '132,204,22'},0.18)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{
                      fontSize: '0.82rem', fontWeight: 800,
                      color: step.status === 'upcoming' ? '#64748b' : step.accentColor,
                    }}>{step.number}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  color: step.status === 'upcoming' ? '#94a3b8' : step.accentColor,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  lineHeight: 1.45,
                  marginBottom: '0.75rem',
                }}>
                  {step.title}
                </h3>

                {/* Thin accent underline */}
                <div style={{
                  width: '32px', height: '2px',
                  background: step.accentColor,
                  borderRadius: '2px',
                  marginBottom: '1rem',
                  opacity: step.status === 'upcoming' ? 0.45 : 1,
                }} />

                {/* Description */}
                <p style={{
                  color: '#64748b',
                  fontSize: '0.82rem',
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: '1.5rem',
                }}>
                  {step.desc}
                </p>

                {/* Status badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.625rem',
                  border: `1px solid ${step.status === 'done'
                    ? 'rgba(34,197,94,0.3)'
                    : step.status === 'next'
                    ? 'rgba(59,130,246,0.3)'
                    : 'rgba(100,116,139,0.2)'}`,
                  background: step.status === 'done'
                    ? 'rgba(34,197,94,0.1)'
                    : step.status === 'next'
                    ? 'rgba(59,130,246,0.1)'
                    : 'rgba(15,23,42,0.6)',
                  width: 'fit-content',
                }}>
                  <StatusIcon style={{
                    width: '14px', height: '14px',
                    color: step.status === 'done' ? '#22c55e'
                      : step.status === 'next' ? '#3b82f6'
                      : '#64748b',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: step.status === 'done' ? '#22c55e'
                      : step.status === 'next' ? '#3b82f6'
                      : '#64748b',
                  }}>
                    {step.statusLabel}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── Bottom Bar ── */}
        <motion.div
          className="bottom-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {/* Left: tagline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexShrink: 0 }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%',
              background: 'rgba(59,130,246,0.15)',
              border: '1px solid rgba(59,130,246,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              {/* Steering wheel icon using SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="3"/>
                <line x1="12" y1="2" x2="12" y2="9"/>
                <line x1="4.22" y1="6.22" x2="9.17" y2="9"/>
                <line x1="19.78" y1="6.22" x2="14.83" y2="9"/>
              </svg>
            </div>
            <div>
              <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '2px' }}>
                One Journey. Smarter Future.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.5, maxWidth: '280px' }}>
                PARA is building a connected transportation ecosystem for a better travel experience for everyone.
              </p>
            </div>
          </div>

          {/* Right: stats */}
          <div style={{ display: 'flex', flex: 1 }}>
            {bottomStats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="bottom-stat">
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: 'rgba(59,130,246,0.12)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon style={{ width: '18px', height: '18px', color: '#3b82f6' }} />
                  </div>
                  <span style={{ color: '#94a3b8', fontSize: '0.78rem', fontWeight: 500, lineHeight: 1.4 }}>
                    {stat.label}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}