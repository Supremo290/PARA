'use client'

import { motion } from 'framer-motion'
import { Users, Building2, Landmark, CheckCircle2, Bus, Car, Truck, MapPin, ShieldCheck } from 'lucide-react'

const stakeholders = [
  {
    id: 'passengers',
    icon: Users,
    title: 'Passengers',
    tagline: 'Travel with confidence.',
    taglineColor: '#3b82f6',
    iconBg: 'rgba(59,130,246,0.18)',
    iconBorder: 'rgba(59,130,246,0.35)',
    borderColor: 'rgba(59,130,246,0.22)',
    accentColor: '#3b82f6',
    features: [
      'Track vans, mini buses, and taxis in real-time',
      'See estimated time of arrival (ETA)',
      'Monitor distance and trip progress',
      'Access available vehicles and ride status',
    ],
    image: '/PARA-Passenger-View.png',
  },
  {
    id: 'drivers',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: '26px', height: '26px' }}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
    title: 'Drivers',
    tagline: 'Drive smarter. Operate better.',
    taglineColor: '#22c55e',
    iconBg: 'rgba(34,197,94,0.18)',
    iconBorder: 'rgba(34,197,94,0.35)',
    borderColor: 'rgba(34,197,94,0.22)',
    accentColor: '#22c55e',
    features: [
      'Start and manage trips',
      'Choose the best time to operate',
      'Monitor passenger count and trip status',
      'See where and when demand is highest',
    ],
    image: '/PARA-Driver-View.png',
  },
  {
    id: 'cooperatives',
    icon: Building2,
    title: 'Cooperatives',
    tagline: 'Coordinate operations efficiently.',
    taglineColor: '#a78bfa',
    iconBg: 'rgba(167,139,250,0.18)',
    iconBorder: 'rgba(167,139,250,0.35)',
    borderColor: 'rgba(167,139,250,0.22)',
    accentColor: '#a78bfa',
    features: [
      'Monitor active vehicles, drivers, and trips',
      'Analyze demand patterns and peak hours',
      'View demand forecasts and heatmaps',
      'AI-generated recommendations for dispatch planning',
    ],
    image: '/PARA-Cooperative-View.png',
  },
  {
    id: 'lgu',
    icon: Landmark,
    title: 'LGUs & Government',
    tagline: 'Enable smarter transportation governance.',
    taglineColor: '#f59e0b',
    iconBg: 'rgba(245,158,11,0.18)',
    iconBorder: 'rgba(245,158,11,0.35)',
    borderColor: 'rgba(245,158,11,0.22)',
    accentColor: '#f59e0b',
    features: [
      'Monitor transportation activity across municipalities',
      'View live vehicle operations and route coverage',
      'Analyze commuter demand and mobility trends',
      'Access transport analytics and operational reports',
      'Support data-driven transportation planning',
      'Improve coordination during peak seasons and emergencies',
    ],
    image: '/PARA-Goverment-View.png',
  },
]

const bottomStats = [
  { icon: Bus,    value: '786',  label: 'UV Express Vans',  sub: 'Serving the province',        color: '#3b82f6' },
  { icon: Car,    value: '50',   label: 'Taxis',            sub: 'Providing daily service',      color: '#f59e0b' },
  { icon: Truck,  value: '10',   label: 'Mini Buses',       sub: 'On provincial routes',         color: '#22c55e' },
  { icon: MapPin, value: '29',   label: 'LGUs in Cagayan',  sub: '28 Municipalities + 1 City',   color: '#a78bfa' },
]

export default function Features() {
  return (
    <section
      id="features"
      style={{
        background: '#04091e',
        position: 'relative',
        padding: '7rem 4rem',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .feat-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .feat-orb-1 {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
          top: -150px; left: -200px; filter: blur(80px);
        }
        .feat-orb-2 {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%);
          bottom: -100px; right: -100px; filter: blur(80px);
        }
        .feat-orb-3 {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%);
          top: 50%; right: 10%; filter: blur(60px);
        }

        .stakeholder-card {
          background: rgba(10, 16, 42, 0.8);
          backdrop-filter: blur(16px);
          border-radius: 1.25rem;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .stakeholder-card:hover {
          transform: translateY(-6px);
        }

        .feature-check-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          margin-bottom: 0.6rem;
        }

        .stat-bottom-card {
          background: rgba(10,16,42,0.8);
          backdrop-filter: blur(16px);
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform 0.25s ease;
        }
        .stat-bottom-card:hover {
          transform: translateY(-4px);
        }

        .mockup-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        @media (max-width: 1200px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="feat-grid" />
      <div className="feat-orb-1" />
      <div className="feat-orb-2" />
      <div className="feat-orb-3" />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ color: '#3b82f6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Key Features
            </span>
            <div style={{ width: '36px', height: '2px', background: '#3b82f6', margin: '6px auto 0', borderRadius: '2px' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Smart tools for every{' '}
            <span style={{
              background: 'linear-gradient(90deg, #3b82f6, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>stakeholder.</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '680px', margin: '0 auto' }}>
            PARA empowers passengers, drivers, cooperatives, and the government with real-time data, analytics, and intelligent insights for better transportation management.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div
          className="cards-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}
        >
          {stakeholders.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.id}
                className="stakeholder-card"
                style={{ border: `1px solid ${s.borderColor}` }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
              >
                {/* Top accent bar */}
                <div style={{ height: '3px', background: s.accentColor, opacity: 0.85, flexShrink: 0 }} />

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '46px', height: '46px', borderRadius: '50%',
                      background: s.iconBg,
                      border: `1px solid ${s.iconBorder}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {typeof Icon === 'function' && Icon.toString().includes('svg') ? (
                        <span style={{ color: s.accentColor }}><Icon /></span>
                      ) : (
                        <Icon style={{ width: '22px', height: '22px', color: s.accentColor }} />
                      )}
                    </div>
                    <div>
                      <h3 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '2px' }}>
                        {s.title}
                      </h3>
                      <p style={{ color: s.taglineColor, fontSize: '0.75rem', fontWeight: 600, lineHeight: 1.4 }}>
                        {s.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Feature list */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    {s.features.map((f, fi) => (
                      <div key={fi} className="feature-check-item">
                        <CheckCircle2 style={{ width: '14px', height: '14px', color: s.accentColor, flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ color: '#cbd5e1', fontSize: '0.8rem', lineHeight: 1.55 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mockup image */}
                  <div style={{
                    overflow: 'hidden',
                    borderRadius: '0.75rem',
                    border: `1px solid ${s.borderColor}`,
                    background: 'rgba(4,9,30,0.6)',
                    marginTop: 'auto',
                  }}>
                    <img
                      src={s.image}
                      alt={`${s.title} app view`}
                      className="mockup-image"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── Bottom Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          style={{
            background: 'rgba(10,16,42,0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: '1.25rem',
            padding: '2.5rem',
            marginTop: '2rem',
          }}
        >
          {/* Banner tagline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%', flexShrink: 0,
              background: 'rgba(59,130,246,0.15)',
              border: '1px solid rgba(59,130,246,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <ShieldCheck style={{ width: '26px', height: '26px', color: '#3b82f6' }} />
            </div>
            <div>
              <p style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: 600, marginBottom: '2px' }}>
                Building a smarter, safer, and more connected Cagayan.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.65 }}>
                Together with our LGUs, cooperatives, and transport operators, we can create a modern transportation system for every Cagayano.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {bottomStats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  className="stat-bottom-card"
                  style={{ border: `1px solid ${stat.color}22` }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: false }}
                >
                  <Icon style={{ width: '28px', height: '28px', color: stat.color, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: stat.color, lineHeight: 1 }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#e2e8f0', fontWeight: 600, marginTop: '2px' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '1px' }}>
                      {stat.sub}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}