'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const colorClasses: Record<string, string> = {
  'neo-purple': 'bg-neo-purple',
  'neo-darkGreen': 'bg-neo-darkGreen',
  'neo-coral': 'bg-neo-coral',
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Angular', 'TailwindCSS'],
      color: 'neo-purple',
    },
    {
      title: 'Backend y base de datos',
      skills: ['Node.js', 'Express', 'NestJS', 'Rest APIs', 'MySQL', 'MongoDB'],
      color: 'neo-darkGreen',
    },
    {
      title: 'Devops y herramientas',
      skills: ['GIT', 'Docker', 'CI/CD', 'Jenkins', 'Jira', 'Postman'],
      color: 'neo-coral',
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-neo-lime border-b-4 border-black relative overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-grotesk text-5xl md:text-6xl font-black mb-12 uppercase text-center text-black"
        >
          Skills
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`border-4 border-black ${colorClasses[category.color]} p-6 shadow-[8px_8px_0px_0px_#000]`}
            >
              <h3 className="font-grotesk text-2xl font-black mb-4 uppercase text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: index * 0.05 + skillIndex * 0.02,
                      duration: 0.15,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 2,
                      transition: { duration: 0.1 },
                    }}
                    className="border-4 border-black bg-white text-black px-4 py-2 font-black text-sm uppercase cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
