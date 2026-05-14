'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-24 pb-20 grid-bg flex items-center justify-center">
      {/* Animated Background Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-accent-blue/30 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                <span className="text-sm font-medium text-gray-200 tracking-widest">
                  SMART TRANSPORT. REAL IMPACT.
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Building Smarter Journeys for</span>
                <br />
                <span className="gradient-text">Stronger Communities.</span>
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              PARA connects passengers, drivers, and transport cooperatives through real-time data, intelligent analytics, and seamless coordination to improve public transportation in Cagayan and beyond.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-accent-blue to-blue-600 rounded-lg font-semibold text-white flex items-center gap-2 btn-glow hover:gap-3 transition-all duration-300 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 border border-accent-blue/50 rounded-lg font-semibold text-white hover:bg-accent-blue/10 transition-all duration-300 flex items-center gap-2 group">
                <Play className="w-5 h-5 fill-accent-blue group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-full min-h-[520px] hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-full max-w-3xl">
                <div className="mx-auto w-[92%] h-4 bg-[#0b122f] rounded-b-2xl border border-accent-blue/20 border-t-0 shadow-[0_12px_35px_rgba(8,12,30,0.7)]" />
                <div className="glass rounded-3xl border border-accent-blue/30 overflow-hidden shadow-2xl glow-blue transform-gpu [transform:perspective(1200px)_rotateY(-8deg)_rotateX(5deg)]">
                  <div className="h-8 border-b border-accent-blue/20 bg-[#0b122f]/90 px-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="p-5 lg:p-6 grid grid-cols-[170px_1fr] gap-5">
                    <aside className="rounded-2xl border border-accent-blue/15 bg-[#0b122f]/70 p-4 space-y-3">
                      <p className="text-sm font-semibold text-white">PARA Dashboard</p>
                      <div className="space-y-2 text-xs">
                        <div className="rounded-lg bg-accent-blue/20 text-accent-blue px-3 py-2">Overview</div>
                        <div className="rounded-lg bg-white/5 text-gray-300 px-3 py-2">Drivers</div>
                        <div className="rounded-lg bg-white/5 text-gray-300 px-3 py-2">Vehicles</div>
                        <div className="rounded-lg bg-white/5 text-gray-300 px-3 py-2">Trips</div>
                        <div className="rounded-lg bg-white/5 text-gray-300 px-3 py-2">Analytics</div>
                      </div>
                    </aside>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent-blue" />
                          <span className="text-xs uppercase tracking-widest text-gray-300">Live Operations</span>
                        </div>
                        <div className="text-xs text-green-400">Synced now</div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="rounded-xl border border-accent-blue/20 bg-[#0b122f]/70 p-3 space-y-1">
                          <div className="text-[11px] text-gray-400">Active Drivers</div>
                          <div className="text-xl font-bold text-accent-blue">32</div>
                          <div className="text-[11px] text-green-400">+2 today</div>
                        </div>
                        <div className="rounded-xl border border-accent-blue/20 bg-[#0b122f]/70 p-3 space-y-1">
                          <div className="text-[11px] text-gray-400">Vehicles</div>
                          <div className="text-xl font-bold text-purple-400">28</div>
                          <div className="text-[11px] text-green-400">+1 today</div>
                        </div>
                        <div className="rounded-xl border border-accent-blue/20 bg-[#0b122f]/70 p-3 space-y-1">
                          <div className="text-[11px] text-gray-400">Passengers</div>
                          <div className="text-xl font-bold text-cyan-400">1,248</div>
                          <div className="text-[11px] text-green-400">+18%</div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-accent-blue/20 bg-[#0b122f]/70 p-4">
                        <div className="text-xs text-gray-400 mb-3">Live Transport Heatmap</div>
                        <div className="relative h-36 rounded-xl border border-accent-blue/20 bg-gradient-to-br from-accent-blue/15 via-transparent to-purple-500/10 overflow-hidden">
                          <div className="absolute top-5 left-12 w-24 h-24 rounded-full bg-orange-400/30 blur-2xl" />
                          <div className="absolute bottom-2 right-6 w-20 h-20 rounded-full bg-red-400/25 blur-2xl" />
                          <div aria-hidden="true" className="absolute top-8 left-8 text-lg">🚐</div>
                          <div aria-hidden="true" className="absolute top-12 right-10 text-lg">🚌</div>
                          <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-lg">🚕</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-2 right-2 w-48 glass rounded-2xl p-4 glow-purple border-purple-500/30 shadow-2xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-300">Trip in progress</p>
                  <span className="text-[10px] text-green-400">LIVE</span>
                </div>
                <div className="text-sm font-semibold text-white">Route CAG-102</div>
                <div className="text-xs text-gray-400">Baggao Terminal → Centro</div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-accent-blue to-purple-400 rounded-full" />
                </div>
                <div className="text-[11px] text-gray-300">ETA: 12 mins · 14 passengers</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Dashboard Mockup */}
        <motion.div
          className="lg:hidden mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="glass rounded-2xl p-6 glow-blue border-accent-blue/20">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-accent-blue/20">
              <span className="text-sm font-semibold text-gray-300">Dashboard</span>
              <div className="text-xs text-green-400">Live</div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="space-y-1">
                <div className="text-xs text-gray-400">Drivers</div>
                <div className="text-xl font-bold text-accent-blue">32</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-400">Vehicles</div>
                <div className="text-xl font-bold text-purple-400">28</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-400">Passengers</div>
                <div className="text-xl font-bold text-cyan-400">1.2K</div>
              </div>
            </div>
            <div className="h-24 bg-gradient-to-b from-accent-blue/20 to-transparent rounded-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
