'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-12 border border-purple-500/30 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Transform Your Transportation?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join cooperatives and transportation companies that are already optimizing their operations with PARA. Get started today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold btn-glow hover:shadow-2xl transition"
            >
              Get Started Now
            </motion.button>
            <button className="px-10 py-4 border border-purple-500 rounded-xl font-semibold hover:bg-purple-500/10 transition">
              Schedule Demo
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-8">
            No credit card required. Start free for 14 days.
          </p>
        </motion.div>
      </div>
    </section>
  )
}