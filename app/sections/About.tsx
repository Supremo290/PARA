'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 border border-purple-500/30">
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚌</div>
                  <p className="text-gray-400">Transportation Network</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About PARA
            </h2>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              PARA is a comprehensive transportation management and tracking platform designed for modern logistics networks. Built for cooperatives, transportation companies, and fleet operators, we provide real-time insights and intelligent routing solutions.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Our platform seamlessly integrates passenger monitoring, driver management, and cooperative analytics into one unified dashboard. With advanced real-time tracking and AI-powered optimization, PARA helps you operate smarter, faster, and more efficiently.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-lg p-4 border border-purple-500/20">
                <div className="text-2xl font-bold gradient-text mb-2">10K+</div>
                <p className="text-gray-400">Active Users</p>
              </div>
              <div className="glass rounded-lg p-4 border border-purple-500/20">
                <div className="text-2xl font-bold gradient-text mb-2">50+</div>
                <p className="text-gray-400">Cooperatives</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}