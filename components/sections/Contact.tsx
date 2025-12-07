'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [focused, setFocused] = useState<string | null>(null)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Error al enviar el mensaje'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-20 bg-neo-purple border-b-4 border-black relative overflow-hidden z-10"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-grotesk text-5xl md:text-6xl font-black mb-12 uppercase text-center text-white"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_#000]"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-6xl font-black mb-4 text-neo-coral"
              >
                ✓
              </motion.div>
              <p className="text-xl font-black text-black">
                Mensaje enviado correctamente
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="name"
                  className="block font-black mb-2 uppercase text-sm text-black"
                >
                  Nombre
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className={`w-full px-4 py-3 border-4 border-black font-black transition-all ${
                    focused === 'name' ? 'bg-neo-yellow' : 'bg-white'
                  }`}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="email"
                  className="block font-black mb-2 uppercase text-sm text-black"
                >
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className={`w-full px-4 py-3 border-4 border-black font-black transition-all ${
                    focused === 'email' ? 'bg-neo-lime' : 'bg-white'
                  }`}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="message"
                  className="block font-black mb-2 uppercase text-sm text-black"
                >
                  Mensaje
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  rows={6}
                  whileFocus={{ scale: 1.02 }}
                  className={`w-full px-4 py-3 border-4 border-black font-black resize-none transition-all ${
                    focused === 'message'
                      ? 'bg-neo-coral text-white'
                      : 'bg-white'
                  }`}
                />
              </motion.div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 py-3 border-4 border-black bg-red-500 text-white font-black text-sm"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                whileHover={!loading ? { scale: 1.05, y: -2 } : {}}
                whileTap={!loading ? { scale: 0.95 } : {}}
                className={`w-full px-8 py-4 border-4 border-black text-white transition-all font-black text-lg uppercase shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-neo-darkGreen hover:bg-green-800'
                }`}
              >
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
