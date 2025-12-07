'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="about"
      className="py-20 bg-white border-b-4 border-black relative overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-grotesk text-5xl md:text-6xl font-black mb-6 uppercase">
              About
              <br />
              <span className="text-neo-coral">Me</span>
            </h2>

            <div className="space-y-4 text-lg leading-relaxed">
              <p className="font-black text-xl">
                He participado en diferentes proyectos, incluyendo el desarrollo
                del frontend completo de una plataforma para un aeropuerto de
                Finlandia (Angular 17), una plataforma de reservas marítimas
                (Next.js + Node.js), etc.
              </p>
              <p>
                Me enfoco en arquitectura modular, performance, testing y CI/CD.
                Trabajo bien en equipos ágiles y colaborativos, y me gusta tomar
                responsabilidades.
              </p>
              <p>
                Actualmente desempeño tareas de frontend pero mantengo un perfil
                full-stack y estoy abierto a conversaciones técnicas y
                oportunidades de crecimiento.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="border-4 border-black bg-neo-yellow p-8 shadow-[8px_8px_0px_0px_#000] relative">
              <div className="w-64 h-64 md:w-80 md:h-80 border-4 border-black bg-neo-purple flex items-center justify-center">
                <div className="text-6xl font-black text-white">AV</div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-black bg-neo-lime"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-4 border-black bg-neo-coral"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
