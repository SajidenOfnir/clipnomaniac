// components/layout/PageTransition.tsx
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ 
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  )
}