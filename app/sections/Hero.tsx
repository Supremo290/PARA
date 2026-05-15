'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, BarChart3, Shield, Sparkles, ArrowRight, Play } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

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
  const sectionRef = useRef<HTMLElement>(null)
  const [animationKey, setAnimationKey] = useState(0)
  const wasHiddenRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && wasHiddenRef.current) {
          // Section came back into view after being hidden — replay animations
          setAnimationKey((k) => k + 1)
          wasHiddenRef.current = false
        } else if (!entry.isIntersecting) {
          wasHiddenRef.current = true
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center"
      style={{
        background: '#04091e',
        backgroundImage: 'linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    >
      <style>{`
        .hero-grid {
          display: none;
        }

        @keyframes orbFloat1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(80px,-100px) scale(1.18); }
          66%      { transform: translate(-50px,60px) scale(0.88); }
        }
        @keyframes orbFloat2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(-90px,70px) scale(1.22); }
          70%      { transform: translate(60px,-40px) scale(0.82); }
        }
        @keyframes orbFloat3 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(40px,80px) scale(1.12); }
        }
        @keyframes orbFloat4 {
          0%,100% { transform: translate(0,0) scale(1); }
          45%      { transform: translate(-60px,-70px) scale(1.08); }
        }

        .orb { position: absolute; border-radius: 50%; pointer-events: none; }
        .orb-purple {
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%);
          top: -220px; right: -160px; filter: blur(70px);
          animation: orbFloat1 14s ease-in-out infinite;
        }
        .orb-blue {
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(29,78,216,0.38) 0%, transparent 70%);
          top: -80px; right: 100px; filter: blur(60px);
          animation: orbFloat2 17s ease-in-out infinite; animation-delay: -5s;
        }
        .orb-indigo {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%);
          bottom: -120px; right: 180px; filter: blur(80px);
          animation: orbFloat3 12s ease-in-out infinite; animation-delay: -3s;
        }
        .orb-cyan {
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%);
          top: 38%; left: 54%; filter: blur(50px);
          animation: orbFloat4 10s ease-in-out infinite; animation-delay: -7s;
        }

        .corner-glow-tr {
          position: absolute; pointer-events: none;
          top: 0; right: 0; width: 620px; height: 420px;
          background: radial-gradient(ellipse at top right, rgba(139,92,246,0.18) 0%, transparent 65%);
        }
        .corner-glow-bl {
          position: absolute; pointer-events: none;
          bottom: 0; left: 0; width: 500px; height: 360px;
          background: radial-gradient(ellipse at bottom left, rgba(29,78,216,0.14) 0%, transparent 65%);
        }

        @keyframes streakPulse  { 0%,100% { opacity:0.65; } 50% { opacity:1; } }
        @keyframes streakPulse2 { 0%,100% { opacity:0.42; } 50% { opacity:0.78; } }
        .sp1 { animation: streakPulse  4.5s ease-in-out infinite; }
        .sp2 { animation: streakPulse2 6s   ease-in-out infinite; animation-delay:-2s; }
        .sp3 { animation: streakPulse2 5s   ease-in-out infinite; animation-delay:-3.5s; }

        @keyframes particleDrift {
          0%   { transform: translateY(0) translateX(0); opacity:0; }
          10%  { opacity: 0.75; }
          90%  { opacity: 0.38; }
          100% { transform: translateY(-160px) translateX(18px); opacity:0; }
        }

        @keyframes badgeGlow {
          0%,100% { box-shadow: 0 0 14px rgba(99,102,241,0.5), 0 0 28px rgba(99,102,241,0.2), inset 0 0 10px rgba(139,92,246,0.08); }
          50%      { box-shadow: 0 0 28px rgba(139,92,246,0.8), 0 0 54px rgba(99,102,241,0.35), inset 0 0 18px rgba(139,92,246,0.15); }
        }
        .badge-pulse { animation: badgeGlow 3s ease-in-out infinite; }

        @keyframes deviceFloat {
          0%,100% { transform: translateY(0px) rotate(-2deg); }
          50%      { transform: translateY(-18px) rotate(-2deg); }
        }
        .device-float { animation: deviceFloat 6s ease-in-out infinite; }

        @keyframes deviceGlowPulse {
          0%,100% { opacity: 0.5; }
          50%      { opacity: 0.85; }
        }
        .device-glow { animation: deviceGlowPulse 4s ease-in-out infinite; }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-grid" />
        <div className="corner-glow-tr" />
        <div className="corner-glow-bl" />
        <div className="orb orb-purple" />
        <div className="orb orb-blue" />
        <div className="orb orb-indigo" />
        <div className="orb orb-cyan" />

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#a78bfa" stopOpacity="0" />
              <stop offset="35%"  stopColor="#7c3aed" stopOpacity="0.55" />
              <stop offset="65%"  stopColor="#6366f1" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="beam2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#93c5fd" stopOpacity="0" />
              <stop offset="45%"  stopColor="#60a5fa" stopOpacity="0.45" />
              <stop offset="75%"  stopColor="#3b82f6" stopOpacity="0.78" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="beam3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#c4b5fd" stopOpacity="0" />
              <stop offset="50%"  stopColor="#8b5cf6" stopOpacity="0.38" />
              <stop offset="80%"  stopColor="#6366f1" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient id="coreGlow" cx="82%" cy="49%" r="44%">
              <stop offset="0%"   stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="50%"  stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
            </radialGradient>
            <filter id="bBlur">
              <feGaussianBlur stdDeviation="2.5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="bBlurHard">
              <feGaussianBlur stdDeviation="5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="pGlow">
              <feGaussianBlur stdDeviation="2.2" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <ellipse cx="1185" cy="448" rx="490" ry="370" fill="url(#coreGlow)" />
          <path className="sp1" d="M 1440 445 C 1200 445, 950 430, 680 502" stroke="url(#beam1)" strokeWidth="2.6" fill="none" filter="url(#bBlurHard)" />
          <path className="sp2" d="M 1440 362 C 1265 378, 1025 372, 722 452" stroke="url(#beam2)" strokeWidth="1.8" fill="none" filter="url(#bBlur)" />
          <path className="sp3" d="M 1440 272 C 1325 298, 1125 308, 782 422" stroke="url(#beam3)" strokeWidth="1.2" fill="none" filter="url(#bBlur)" opacity="0.8" />
          <path className="sp2" d="M 1440 525 C 1265 512, 1025 508, 705 548" stroke="url(#beam2)" strokeWidth="1.6" fill="none" filter="url(#bBlur)" opacity="0.6" />
          <path className="sp1" d="M 1440 615 C 1315 598, 1105 588, 825 610" stroke="url(#beam3)" strokeWidth="1"   fill="none" filter="url(#bBlur)" opacity="0.42" />
          <circle cx="1215" cy="442" r="5"  fill="#c4b5fd" opacity="0.95" filter="url(#bBlurHard)" />
          <circle cx="1215" cy="442" r="17" fill="#7c3aed" opacity="0.18" filter="url(#bBlurHard)" />

          {([
            [762,522,1.4,0.7,8],[852,472,1.2,0.5,11],[922,492,1.6,0.8,6],
            [1012,462,1.3,0.62,9],[1082,447,1.1,0.42,13],[1142,432,1.5,0.7,7],
            [1222,440,1.3,0.6,10],[1312,424,1.2,0.5,14],[1382,412,1.0,0.42,12],
            [972,518,1.4,0.65,5],[1052,507,1.2,0.55,8],[1172,512,1.3,0.6,11],
            [802,442,1.3,0.6,6],[882,427,1.1,0.5,10],[1002,420,1.2,0.55,13],
          ] as [number,number,number,number,number][]).map(([cx,cy,r,op,dur],i) => (
            <circle
              key={i} cx={cx} cy={cy} r={r}
              fill={i % 3 === 0 ? '#c4b5fd' : i % 3 === 1 ? '#93c5fd' : '#a5b4fc'}
              opacity={op} filter="url(#pGlow)"
              style={{ animation: `particleDrift ${dur}s ${-(i * 0.65)}s linear infinite` }}
            />
          ))}
        </svg>

        {/* Left vignette */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 45% 80% at 0% 50%, rgba(4,9,30,0.92) 0%, rgba(4,9,30,0.4) 38%, transparent 55%)' }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-56"
          style={{ background: 'linear-gradient(to top, #04091e 20%, transparent)' }}
        />
      </div>

      {/* ── Two-column layout ── */}
      <div
        className="relative z-10 w-full pb-20"
        style={{ paddingLeft: '3.5rem', paddingRight: '0', paddingTop: '6rem', overflow: 'visible' }}
      >
        <div key={animationKey} style={{ display: 'grid', gridTemplateColumns: '420px 1fr', alignItems: 'center', gap: '2rem' }}>
          {/* ── LEFT: text content ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <div
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg"
                style={{
                  border: '1px solid rgba(59,130,246,0.25)',
                  background: 'rgba(10,18,50,0.9)',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                <span
                  style={{ color: '#cbd5e1', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.01em', whiteSpace: 'nowrap' }}
                >
                  Smart Transport Coordination System for Cagayan
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-5"
              style={{ isolation: 'isolate' }}
            >
              <h1
                className="font-extrabold leading-[1.1] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 3vw, 3.2rem)' }}
              >
                <span style={{ display: 'block', color: '#ffffff', WebkitTextFillColor: '#ffffff', whiteSpace: 'nowrap' }}>
                  No more guessing.
                </span>
                <span style={{ display: 'block', color: '#ffffff', WebkitTextFillColor: '#ffffff', whiteSpace: 'nowrap' }}>
                  No more waiting.
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              style={{ maxWidth: '460px', marginBottom: '1.75rem' }}
            >
              <p style={{ color: '#94a3b8', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                <span style={{
                  background: 'linear-gradient(90deg, #a78bfa, #60a5fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 600,
                }}>Smarter,</span>{' '}coordinated public transportation across Cagayan.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.93rem', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                PARA modernizes transportation through real-time vehicle tracking, transportation analytics, and centralized coordination for commuters, drivers, cooperatives, and LGUs.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.93rem', lineHeight: 1.75 }}>
                Built to create a safer, more connected, and data-driven commuting experience.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}
            >
              {/* Get Started */}
              <motion.button
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => window.open('https://paravanph.com', '_blank')}
  style={{
    display: 'flex', alignItems: 'center', gap: '0.55rem',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '0.6rem',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.925rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 24px rgba(37,99,235,0.45)',
                  transition: 'box-shadow 0.2s',
                }}
              >
                Download
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </motion.button>

              {/* Watch Demo */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.55rem',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '0.6rem',
                  background: 'rgba(10, 14, 40, 0.7)',
                  color: '#e2e8f0',
                  fontWeight: 600,
                  fontSize: '0.925rem',
                  border: '1px solid rgba(148,163,184,0.25)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  transition: 'border-color 0.2s',
                }}
              >
                Watch Demo
                <span style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '22px', height: '22px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                }}>
                  <Play style={{ width: '11px', height: '11px', fill: '#e2e8f0' }} />
                </span>
              </motion.button>
            </motion.div>

            {/* Feature icons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '2.5rem', justifyContent: 'start' }}
            >
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.42 + i * 0.1 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}
                  >
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '50%', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(99,102,241,0.22)',
                      border: '1px solid rgba(139,92,246,0.32)',
                      boxShadow: '0 0 18px rgba(99,102,241,0.22)',
                    }}>
                      <Icon style={{ width: '20px', height: '20px', color: '#a78bfa', flexShrink: 0 }} />
                    </div>
                    <div>
                      <h3 style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.2rem' }}>
                        {feature.title}
                      </h3>
                      <p style={{ color: '#64748b', fontSize: '0.76rem', lineHeight: 1.6, maxWidth: '130px' }}>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* ── RIGHT: device mockup image ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingRight: '1rem' }}
          >
            {/* Glow behind the image */}
            <div
              className="device-glow"
              style={{
                position: 'absolute',
                width: '90%', height: '72%',
                background: 'radial-gradient(ellipse, rgba(99,102,241,0.35) 0%, rgba(139,92,246,0.2) 40%, transparent 70%)',
                filter: 'blur(60px)',
                borderRadius: '50%',
                zIndex: 0,
              }}
            />
            {/* Floating device image */}
            <div className="device-float" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
              <Image
                src="/Final-PARA.png"
                alt="PARA dashboard and mobile app preview"
                width={2200}
                height={1610}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 24px 60px rgba(99,102,241,0.4)) drop-shadow(0 8px 24px rgba(0,0,0,0.6))',
                }}
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}