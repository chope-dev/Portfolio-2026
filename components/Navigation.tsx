'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SideMenu from './SideMenu'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-neo-coral border-4 border-white shadow-[8px_8px_0px_0px_#000]"
    >
      {/* Browser Window Header */}
      <div className="bg-white border-b-4 border-black px-4 py-2 relative">
        {/* Left: Controls and Logo */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-4 h-4 rounded-full bg-neo-pink border-2 border-black"></div>
            <div className="w-4 h-4 rounded-full bg-neo-yellow border-2 border-black"></div>
            <div className="w-4 h-4 rounded-full bg-neo-lime border-2 border-black"></div>
          </div>
          <div className="border-4 border-black bg-white px-3 py-1">
            <span className="font-grotesk font-black text-sm text-black">
              Santiago Giorgetti
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-end">
          {/* Right: Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button className="border-4 border-black bg-neo-darkGreen text-white px-4 py-2 font-black text-sm uppercase shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all">
              full-stack
            </button>
            <button className="border-4 border-black bg-neo-purple text-white px-4 py-2 font-black text-sm uppercase shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all">
              Futuro Data Engineer
            </button>
          </div>
        </div>

        {/* Menu Button - Always at the end */}
        <motion.button
          onClick={() => setIsMenuOpen(true)}
          animate={{
            x: isMenuOpen ? -148 : 0,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="absolute right-4 top-2 border-4 border-black bg-white w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <div className="flex flex-col gap-1">
            <div className="w-4 h-0.5 bg-black"></div>
            <div className="w-4 h-0.5 bg-black"></div>
            <div className="w-4 h-0.5 bg-black"></div>
          </div>
        </motion.button>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b-4 border-black">
        <a
          href="#home"
          className="border-r-4 border-black bg-neo-yellow text-black px-6 py-3 font-black text-sm uppercase hover:bg-yellow-300 transition-colors"
        >
          HOME
        </a>
        <a
          href="#projects"
          className="border-r-4 border-black bg-neo-coral text-white px-6 py-3 font-black text-sm uppercase hover:bg-neo-coralDark transition-colors"
        >
          PROJECTS
        </a>
        <a
          href="#about"
          className="border-r-4 border-black bg-neo-darkGreen text-white px-6 py-3 font-black text-sm uppercase hover:bg-green-800 transition-colors"
        >
          ABOUT US
        </a>
        <a
          href="#skills"
          className="border-r-4 border-black bg-neo-purple text-white px-6 py-3 font-black text-sm uppercase hover:bg-purple-700 transition-colors"
        >
          SKILLS
        </a>
        <a
          href="#contact"
          className="bg-neo-yellow text-black px-6 py-3 font-black text-sm uppercase hover:bg-yellow-300 transition-colors"
        >
          CONTACT
        </a>
      </div>

      {/* Side Menu */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </motion.nav>
  )
}
