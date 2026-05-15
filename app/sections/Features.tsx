'use client'

import { motion } from 'framer-motion'
import { MapPin, Users, BarChart3, Zap, Shield } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Monitor vehicles and passengers in real-time with GPS accuracy.',
  },
  {
    icon: Users,
    title: 'Driver Management',
    description: 'Manage driver profiles, ratings, and performance metrics.',
  },
  {
    icon: Users,
    title: 'Passenger Monitoring',
    description: 'Track passenger journeys and optimize pickup/dropoff points.',
  },
  {
    icon: BarChart3,
    title: 'Cooperative Analytics',
    description: 'Detailed analytics and insights for cooperative management.',
  },
  {
    icon: Zap,
    title: 'Route Optimization',
    description: 'AI-powered route planning to reduce time and fuel costs.',
  },
  {
    icon: Shield,
    title: 'Secure Data System',
    description: 'Enterprise-grade security and data encryption protocols.',
  },
]

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Powerful Features for Modern Transportation
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to manage your transportation network efficiently
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group glass rounded-2xl p-8 border border-purple-500/20 hover:border-cyan-500/50 transition cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <div className="mb-6 inline-block p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 group-hover:from-purple-500/40 group-hover:to-cyan-500/40 transition">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}