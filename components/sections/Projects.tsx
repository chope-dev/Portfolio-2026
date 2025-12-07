'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'SHIFT PILOT',
      description:
        'Proyecto personal: Aplicación web para gestionar turnos, licencias y reemplazos en empresas medianas.',
      features: [
        'Autenticación y autorización (login, registro, JWT tokens y middleware)',
        'Sistema de roles y permisos (employee, manager, admin con control de acceso)',
        'Gestión completa de turnos (CRUD, filtros avanzados, estadísticas)',
        'Gestión de equipos (CRUD de usuarios, métricas de productividad)',
        'Sistema de notificaciones (creación, lectura, eliminación, contador)',
        'Dashboard interactivo (estadísticas, horas trabajadas, productividad)',
        'Gestión de empresas (CRUD completo con validaciones)',
        'Interfaz responsive (sidebar colapsable, navegación móvil)',
        'API RESTful completa (arquitectura en capas)',
        'Validación y manejo de errores (middleware personalizado)',
      ],
      tech: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
      github: 'https://github.com/chope-dev/Shift-pilot-Frontend-Readme',
      demo: null,
    },
    {
      title: 'Bluhar',
      description:
        'Plataforma de reservas de travesías náuticas desarrollada para una software factory.',
      features: [
        'Implementé el flujo de autenticación, desarrollando el login y signup con validaciones de email y contraseña, además de la integración con Google Sign-In.',
        'Colaboré en el onboarding de creación de cuenta, mejorando la experiencia del usuario en los primeros pasos dentro de la aplicación.',
        'Desarrollé la pantalla de inicio, incluyendo filtros avanzados por precio, ubicación y cantidad de pasajeros para optimizar la búsqueda de travesías.',
        'Implementé un chat para facilitar la comunicación entre los turistas y los capitanes de los barcos.',
        'Diseñé y desarrollé las pantallas de creación y edición de perfil, permitiendo a los usuarios personalizar su información.',
        'Flujo de compra integrado con PayPal.',
      ],
      tech: ['Angular', 'Node.js', 'Express'],
      github: null,
      demo: 'https://bluhar.com/',
    },
    {
      title: 'GO MANGO',
      description:
        'Plataforma de beneficios corporativos con cupones y descuentos exclusivos para empleados desarrollada para una software factory. ',
      features: [
        'Implementé Google Analytics para el seguimiento y análisis del comportamiento de los usuarios.',
        'Maqueté la pantalla de inicio, asegurando un diseño responsivo y alineado al estilo del proyecto.',
        'Cargué y gestioné contenido mediante Strapi, organizando la información de forma eficiente.',
        'Desarrollé validaciones y mejoras en la experiencia del usuario para asegurar un flujo más intuitivo.',
      ],
      tech: ['Angular', 'Node.js', 'Strapi'],
      github: null,
      demo: 'https://www.gomango.co/',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-neo-coral border-b-4 border-black relative overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-grotesk text-5xl md:text-6xl font-black mb-12 uppercase text-center text-white"
        >
          Projects
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="border-4 border-white bg-white p-6 shadow-[8px_8px_0px_0px_#000] relative"
            >
              {/* Folder Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="border-4 border-black bg-neo-yellow w-16 h-12 flex items-center justify-center">
                  <div className="w-12 h-8 border-2 border-black bg-white"></div>
                </div>
                {/* Flag Icon */}
                <div className="border-4 border-black bg-neo-darkGreen w-8 h-8"></div>
              </div>

              <h3 className="font-grotesk text-2xl font-black mb-3 uppercase text-black">
                {project.title}
              </h3>

              <p className="mb-4 text-gray-800 text-sm leading-relaxed">
                {project.description}
              </p>

              {project.features && (
                <ul className="mb-4 text-gray-800 text-xs leading-relaxed space-y-1 list-none">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="border-2 border-black bg-neo-lime px-3 py-1 text-xs font-black uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-4 border-black bg-neo-purple text-white px-4 py-2 font-black text-sm uppercase shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all"
                  >
                    GitHub
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-4 border-black bg-neo-darkGreen text-white px-4 py-2 font-black text-sm uppercase shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all"
                  >
                    Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
