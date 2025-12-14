// components/common/AccessibleButton.tsx
import { motion } from 'framer-motion'
import { useRef } from 'react'

export const AccessibleButton = ({ children, onClick, ariaLabel }) => {
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05, boxShadow: '0 0 0 3px rgba(0, 255, 255, 0.5)' }}
      onClick={onClick}
      aria-label={ariaLabel}
      className="px-6 py-3 bg-neon-cyan text-dark-bg rounded-lg font-bold focus:outline-none"
    >
      {children}
    </motion.button>
  )
}