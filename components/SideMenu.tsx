'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const menuItems = [
    { label: 'HOME', href: '#home' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CONTACT', href: '#contact' },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Menu Window */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-96 z-50 border-l-4 border-black"
          >
            {/* Title Bar */}
            <div className="bg-[#9B59B6] text-white px-4 py-2 flex items-center justify-between border-b-4 border-black">
              <span className="font-black text-sm uppercase">Menu</span>
              <div className="flex items-center gap-1">
                <button className="w-6 h-6 border-2 border-white bg-transparent flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors">
                  <span className="text-white text-xs">−</span>
                </button>
                <button className="w-6 h-6 border-2 border-white bg-transparent flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors">
                  <span className="text-white text-xs">□</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-6 h-6 border-2 border-white bg-transparent flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <span className="text-white text-xs">×</span>
                </button>
              </div>
            </div>

            {/* Content Area with Checkerboard Pattern */}
            <div
              className="h-[calc(100%-48px)] bg-white relative overflow-y-auto"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, #FFE5E5 25%, transparent 25%),
                  linear-gradient(-45deg, #FFE5E5 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #FFE5E5 75%),
                  linear-gradient(-45deg, transparent 75%, #FFE5E5 75%),
                  linear-gradient(45deg, #FFF8E5 25%, transparent 25%),
                  linear-gradient(-45deg, #FFF8E5 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #FFF8E5 75%),
                  linear-gradient(-45deg, transparent 75%, #FFF8E5 75%)
                `,
                backgroundSize: '40px 40px',
                backgroundPosition:
                  '0 0, 0 20px, 20px -20px, -20px 0px, 0 0, 0 20px, 20px -20px, -20px 0px',
              }}
            >
              <div className="p-6 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: -5 }}
                    className="block border-4 border-black bg-white px-6 py-4 font-black text-lg uppercase shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:bg-neo-yellow transition-all"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
