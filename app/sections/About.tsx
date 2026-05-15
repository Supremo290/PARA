'use client'

import { motion } from 'framer-motion'
import { MapPin, BarChart3, Bot, Users, Bus, Car, Truck, ShieldCheck } from 'lucide-react'

const stats = [
  { icon: Users,   value: '25K+',   label: 'Active Commuters', color: '#3b82f6' },
  { icon: Bus,     value: '1,200+', label: 'Active Vehicles',   color: '#22c55e' },
  { icon: MapPin,  value: '320+',   label: 'Routes Covered',    color: '#a78bfa' },
]

const modes = [
  { icon: Bus,   label: 'Vans',       desc: 'Municipality-to-municipality travel', color: '#3b82f6' },
  { icon: Car,   label: 'Taxis',      desc: 'City transportation',                 color: '#eab308' },
  { icon: Truck, label: 'Mini Buses', desc: 'Longer provincial routes',            color: '#a78bfa' },
]

const brings = [
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    desc: 'Live vehicle locations and estimated arrival times for better visibility.',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.15)',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    desc: 'Forecast demand, peak hours, and route usage using historical data.',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.15)',
  },
  {
    icon: Bot,
    title: 'AI-Assisted Decisions',
    desc: 'Intelligent recommendations to optimize dispatch planning and operations.',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.15)',
  },
  {
    icon: Users,
    title: 'Cooperative Dashboard',
    desc: 'Centralized monitoring, reports, and insights for transport cooperatives.',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.15)',
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{ background: '#04091e', position: 'relative', padding: '6rem 1rem', overflow: 'hidden' }}
    >
      <style>{`
        .about-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .about-orb-left {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%);
          bottom: -100px; left: -150px; filter: blur(80px);
        }
        .about-orb-right {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%);
          top: -80px; right: -80px; filter: blur(80px);
        }
      `}</style>

      <div className="about-grid" />
      <div className="about-orb-left" />
      <div className="about-orb-right" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Top Section: Text (left) + Vehicle Image (right) ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center', marginBottom: '4rem' }}>

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            {/* Label */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ color: '#3b82f6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                About PARA
              </span>
              <div style={{ width: '36px', height: '2px', background: '#3b82f6', marginTop: '6px', borderRadius: '2px' }} />
            </div>

            {/* Heading */}
            <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.75rem)', fontWeight: 800, lineHeight: 1.18, color: '#ffffff', marginBottom: '1.25rem' }}>
              Building Smarter Mobility{' '}
              <br />
              for{' '}
              <span style={{
                background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Provincial Communities
              </span>
            </h2>

            {/* Description */}
            <p style={{ color: '#94a3b8', fontSize: '0.97rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              PARA is an AI-driven decision support system designed to modernize provincial public transportation. It connects commuters, drivers, and transport cooperatives through real-time data, predictive analytics, and intelligent recommendations.
            </p>
            <p style={{ color: '#64748b', fontSize: '0.93rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Our mission is to create a more efficient, reliable, and convenient transportation experience for every commuter in the provinces.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '2.5rem' }}>
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    viewport={{ once: false }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
                  >
                    <Icon style={{ width: '22px', height: '22px', color: stat.color, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '1.3rem', fontWeight: 800, color: stat.color, lineHeight: 1 }}>
                        {stat.value}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '3px' }}>
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Vehicle image placeholder + modes card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            style={{ position: 'relative' }}
          >
            {/* Vehicle photo — replace "/vehicles.jpg" with your actual image path */}
            <div style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              border: '1px solid rgba(59,130,246,0.18)',
              aspectRatio: '16/10',
              position: 'relative',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, rgba(15,23,60,0.95) 0%, rgba(10,14,39,1) 100%)',
            }}>
              <img
                src="/vehicles.jpg"
                alt="PARA transport vehicles on provincial road"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              />
              {/* Fallback visible when image is missing */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(29,78,216,0.22) 0%, rgba(10,14,39,0.9) 100%)',
              }}>
                <Bus style={{ width: '52px', height: '52px', color: 'rgba(59,130,246,0.45)', marginBottom: '0.6rem' }} />
                <span style={{ color: 'rgba(148,163,184,0.4)', fontSize: '0.78rem' }}>
                  Add vehicles photo to /public/vehicles.jpg
                </span>
              </div>
            </div>

            {/* Transport Modes Card */}
            <div style={{
              background: 'rgba(10, 16, 42, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(59,130,246,0.15)',
              borderRadius: '0.875rem',
              padding: '1.25rem 1.5rem',
            }}>
              <p style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 600, textAlign: 'center', marginBottom: '1rem' }}>
                We support different transportation modes
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {modes.map((mode, i) => {
                  const Icon = mode.icon
                  const rgb = mode.color === '#3b82f6'
                    ? '59,130,246'
                    : mode.color === '#eab308'
                    ? '234,179,8'
                    : '167,139,250'
                  return (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        background: `rgba(${rgb},0.15)`,
                        border: `1px solid rgba(${rgb},0.3)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 0.5rem',
                      }}>
                        <Icon style={{ width: '18px', height: '18px', color: mode.color }} />
                      </div>
                      <div style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 600 }}>{mode.label}</div>
                      <div style={{ color: '#64748b', fontSize: '0.7rem', lineHeight: 1.4, marginTop: '2px' }}>{mode.desc}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── What PARA Brings ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <h3 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 700 }}>What PARA Brings</h3>
          <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #a78bfa)', margin: '0.75rem auto 0', borderRadius: '2px' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginBottom: '3rem' }}>
          {brings.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false }}
                style={{
                  background: 'rgba(10, 16, 42, 0.8)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(59,130,246,0.12)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: item.color, borderRadius: '1rem 1rem 0 0', opacity: 0.85,
                }} />

                <div style={{
                  width: '46px', height: '46px', borderRadius: '0.625rem',
                  background: item.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  <Icon style={{ width: '22px', height: '22px', color: item.color }} />
                </div>
                <h4 style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {item.title}
                </h4>
                <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* ── Bottom Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          style={{
            background: 'rgba(10,16,42,0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(59,130,246,0.18)',
            borderRadius: '1rem',
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          <div style={{
            width: '52px', height: '52px', borderRadius: '50%', flexShrink: 0,
            background: 'rgba(59,130,246,0.15)',
            border: '1px solid rgba(59,130,246,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ShieldCheck style={{ width: '24px', height: '24px', color: '#3b82f6' }} />
          </div>
          <div>
            <p style={{ color: '#e2e8f0', fontSize: '0.97rem', fontWeight: 500, marginBottom: '2px' }}>
              PARA is more than a tracking system.
            </p>
            <p style={{
              fontSize: '0.97rem', fontWeight: 500,
              background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              It&apos;s a partner in building better transportation for every community.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}