'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-neo-coral border-b-4 border-black relative overflow-hidden z-10 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="font-grotesk text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-tight">
              <span className="text-white">Santiago</span>
              <br />
              <span className="text-white">Giorgetti</span>
            </h1>

            <div className="mt-4">
              <span className="text-white text-4xl md:text-5xl font-black">
                Fullstack developer
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="border-4 border-black bg-white text-black px-8 py-4 font-black text-lg uppercase shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] transition-all inline-block"
              >
                Get Started Now
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="border-4 border-black bg-neo-purple text-white px-8 py-4 font-black text-lg uppercase shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] transition-all inline-flex items-center gap-2"
              >
                Enter →
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Windows 98 Window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="border-2 border-gray-800 bg-gray-200 shadow-[4px_4px_0px_0px_#000] ml-8">
              {/* Title Bar */}
              <div className="bg-[#0080FF] text-white px-2 py-1 flex items-center justify-between border-b-2 border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white border border-gray-800"></div>
                  <span className="font-bold text-sm">
                    Santiago Giorgetti - Info
                  </span>
                </div>
                <button className="w-6 h-6 bg-red-600 border-2 border-gray-800 flex items-center justify-center hover:bg-red-700 transition-colors">
                  <span className="text-white font-bold text-xs leading-none">
                    ×
                  </span>
                </button>
              </div>

              {/* Window Content */}
              <div className="bg-white p-6 min-h-[300px] border-2 border-gray-300">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 border-2 border-gray-800 bg-gray-100 flex items-center justify-center overflow-hidden relative">
                      {imageError ? (
                        <span className="text-2xl font-black">SG</span>
                      ) : (
                        <Image
                          src="/assets/1754333424875.jpeg"
                          alt="Santiago Giorgetti"
                          fill
                          className="object-cover"
                          sizes="64px"
                          onError={() => setImageError(true)}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-lg mb-2">
                        Santiago Giorgetti
                      </h3>
                      <p className="text-sm text-gray-700 mb-1">
                        <strong>Rol:</strong> Fullstack Developer
                      </p>
                      <p className="text-sm text-gray-700 mb-1">
                        <strong>Ubicación:</strong> Rosario, Santa Fe,
                        Argentina.
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Teléfono:</strong> +54 9 341 6416442
                      </p>
                    </div>
                  </div>

                  <div className="border-t-2 border-gray-300 pt-4">
                    <h4 className="font-black text-sm mb-2">Sobre mí:</h4>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      Soy Full Stack Developer con ~3 años de experiencia
                      construyendo aplicaciones web end-to-end usando Angular,
                      Next.js y Node.js con Express.
                    </p>
                  </div>

                  <div className="border-t-2 border-gray-300 pt-4">
                    <h4 className="font-black text-sm mb-2">
                      Stack Principal:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'React',
                        'Next.js',
                        'Angular',
                        'Node.js',
                        'Express',
                        'Docker',
                        'CI / CD',
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="border-2 border-gray-800 bg-gray-100 px-2 py-1 text-xs font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Control Circles */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-black bg-white"
                ></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
