'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url('/Landingpagegif.MP4')" // Replace with your image path
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl rounded-2xl  md:px-40 px-4 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12 text-white shadow-lg"
      >
        {/* Text Content */}
        <div className="flex-1">
          <motion.h1
            className="text-4xl pt-20  sm:text-5xl lg:text-7xl md:pt-20  font-extrabold leading-tight tracking-tight space-y-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Grow Your
              </span>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Business{' '}
              <span className="relative inline-block">
                With
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-cyan-500 rounded-md animate-pulse" />
              </span>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-400">
                Us Now
              </span>{' '}
              <span className="text-cyan-500">?</span>
            </motion.div>
          </motion.h1>

          <motion.p
            className="mt-6 text-base sm:text-lg text-gray-200 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Partner with us for{' '}
            <span className="text-cyan-300 font-medium">
              innovative software solutions
            </span>{' '}
            that drive your business forward and empower your growth.
          </motion.p>

          <motion.button
            className="mt-8 bg-cyan-400 text-white px-7 py-3 rounded-full font-semibold text-sm sm:text-base shadow-md hover:bg-cyan-500 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Get Started
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
