'use client'

import { motion } from 'framer-motion'
import { MapPin, BarChart3, Shield, Sparkles } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Real-time Tracking',
    description: 'Live vehicle updates and estimated arrival times.',
  },
  {
    icon: BarChart3,
    title: 'Demand Insights',
    description: 'Smarter decisions with real-time and historical data.',
  },
  {
    icon: Shield,
    title: 'Better Coordination',
    description: 'Connecting passengers, drivers, and cooperatives.',
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center"
      style={{ background: '#04091e' }}
    >
      {/* ── Background: sweeping blue light highway (Image 2 style) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Deep base gradient — blue on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 85% 55%, rgba(20,60,180,0.55) 0%, rgba(10,20,80,0.3) 50%, transparent 75%)',
          }}
        />

        {/* Highway light streaks — curved lines fanning from right */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="streakGlow" cx="80%" cy="55%" r="50%">
              <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#2563eb" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
            </radialGradient>
            {/* Glowing line gradient along path */}
            <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
              <stop offset="40%" stopColor="#60a5fa" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.4" />
              <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-strong">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Large radial glow behind streaks */}
          <ellipse cx="1150" cy="500" rx="500" ry="380" fill="url(#streakGlow)" />

          {/* Main highway curves — fanning from right-center */}
          {/* Center bright streak */}
          <path
            d="M 1440 480 C 1200 480, 950 460, 700 520"
            stroke="url(#line1)"
            strokeWidth="2.5"
            fill="none"
            filter="url(#glow-strong)"
            opacity="0.9"
          />
          {/* Top arc */}
          <path
            d="M 1440 380 C 1250 400, 1000 390, 700 480"
            stroke="url(#line2)"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
            opacity="0.7"
          />
          {/* Upper outer arc */}
          <path
            d="M 1440 280 C 1300 310, 1100 320, 750 440"
            stroke="#60a5fa"
            strokeWidth="1"
            fill="none"
            filter="url(#glow)"
            opacity="0.4"
          />
          {/* Below center */}
          <path
            d="M 1440 560 C 1250 550, 1000 540, 700 580"
            stroke="url(#line2)"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
            opacity="0.65"
          />
          {/* Lower arc */}
          <path
            d="M 1440 650 C 1300 630, 1100 620, 800 640"
            stroke="#3b82f6"
            strokeWidth="1"
            fill="none"
            filter="url(#glow)"
            opacity="0.35"
          />
          {/* Very top faint */}
          <path
            d="M 1440 180 C 1350 220, 1150 240, 900 380"
            stroke="#60a5fa"
            strokeWidth="0.8"
            fill="none"
            opacity="0.25"
          />
          {/* Very bottom faint */}
          <path
            d="M 1440 750 C 1350 720, 1150 700, 850 720"
            stroke="#3b82f6"
            strokeWidth="0.8"
            fill="none"
            opacity="0.2"
          />

          {/* Bright core dot at convergence */}
          <circle cx="1200" cy="480" r="6" fill="#93c5fd" opacity="0.8" filter="url(#glow-strong)" />
          <circle cx="1200" cy="480" r="18" fill="#3b82f6" opacity="0.2" filter="url(#glow-strong)" />

          {/* Floating particles along the streaks */}
          {[
            [950, 490], [1050, 478], [1150, 472], [1300, 465],
            [980, 510], [1080, 500], [1200, 510],
            [1000, 455], [1120, 445], [1250, 440],
            [920, 530], [1060, 545], [1180, 540],
            [1320, 390], [1380, 370], [1280, 310],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={Math.random() > 0.5 ? 1.5 : 1}
              fill="#93c5fd"
              opacity={0.3 + (i % 5) * 0.1}
              filter="url(#glow)"
            />
          ))}

          {/* Vertical accent lines (right side) */}
          <line x1="1380" y1="200" x2="1380" y2="340" stroke="#60a5fa" strokeWidth="1" opacity="0.3" />
          <line x1="1350" y1="240" x2="1350" y2="360" stroke="#60a5fa" strokeWidth="0.8" opacity="0.2" />
        </svg>

        {/* Subtle top-left vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 0% 0%, rgba(4,9,30,0.7) 0%, transparent 60%)',
          }}
        />

        {/* Bottom dark fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: 'linear-gradient(to top, #04091e 20%, transparent)' }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pt-32 pb-24">
        <div className="max-w-xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                border: '1px solid rgba(96,165,250,0.35)',
                background: 'rgba(29,78,216,0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-semibold tracking-widest text-blue-200 uppercase">
                Smart Transport. Real Impact.
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6"
          >
            <h1
              className="font-extrabold leading-[1.08] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
            >
              <span className="text-white block">Smarter Journeys.</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(90deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Stronger Communities.
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '480px', marginBottom: '3.5rem' }}
          >
            PARA connects passengers, drivers, and transport cooperatives through real-time data, intelligent insights, and seamless coordination for a better commuting experience.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '3rem', justifyContent: 'start' }}
          >
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.42 + i * 0.1 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                >
                  {/* Icon circle — fixed size, never stretches */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(29,78,216,0.3)',
                      border: '1px solid rgba(96,165,250,0.25)',
                    }}
                  >
                    <Icon style={{ width: '24px', height: '24px', color: '#60a5fa', flexShrink: 0 }} />
                  </div>
                  <div>
                    <h3 style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>{feature.title}</h3>
                    <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: 1.6, maxWidth: '140px' }}>{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}