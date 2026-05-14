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

          {/* Right Column - Dashboard Mockup */}
          <motion.div
            className="relative h-full min-h-[500px] hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Dashboard */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-full max-w-2xl glass rounded-2xl p-6 lg:p-8 shadow-2xl glow-blue border-accent-blue/20">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-accent-blue/20">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-blue" />
                    <span className="text-sm font-semibold text-gray-300">Dashboard</span>
                  </div>
                  <div className="text-xs text-gray-500">Live</div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="text-xs text-gray-400">Active Drivers</div>
                    <div className="text-2xl font-bold text-accent-blue">32</div>
                    <div className="text-xs text-green-400">+2 today</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-gray-400">Vehicles</div>
                    <div className="text-2xl font-bold text-purple-400">28</div>
                    <div className="text-xs text-green-400">+1 today</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-gray-400">Passengers</div>
                    <div className="text-2xl font-bold text-cyan-400">1,248</div>
                    <div className="text-xs text-green-400">+18%</div>
                  </div>
                </div>

                {/* Heatmap Visualization */}
                <div className="space-y-4">
                  <div className="text-xs text-gray-400">Live Transport Map</div>
                  <div className="relative h-32 rounded-lg bg-gradient-to-b from-accent-blue/20 to-transparent border border-accent-blue/20 overflow-hidden">
                    {/* Heatmap gradient circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 blur-2xl opacity-40 animate-pulse" />
                    </div>
                    {/* Vehicle icons */}
                    <div className="absolute top-8 left-6 text-lg">🚗</div>
                    <div className="absolute top-12 right-8 text-lg">🚌</div>
                    <div className="absolute bottom-6 left-1/3 text-lg">🚕</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Mobile Card */}
            <motion.div
              className="absolute -bottom-16 -right-12 w-40 glass rounded-2xl p-4 glow-purple border-purple-500/20 shadow-2xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="space-y-3">
                <div className="h-20 bg-gradient-to-br from-purple-500/20 to-accent-blue/20 rounded-lg" />
                <div className="space-y-2">
                  <div className="h-2 bg-gradient-to-r from-purple-500/30 to-transparent rounded" />
                  <div className="h-2 bg-gradient-to-r from-accent-blue/30 to-transparent rounded w-4/5" />
                </div>
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