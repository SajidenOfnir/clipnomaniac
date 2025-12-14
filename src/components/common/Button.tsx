import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: React.ReactNode
}

export const Button = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-cyber text-sm tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white hover:shadow-lg hover:shadow-neon-cyan/50 hover:scale-105',
    secondary: 'bg-dark-surface border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg hover:shadow-lg hover:shadow-neon-cyan/50',
    ghost: 'bg-transparent border border-neon-cyan/50 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10'
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}