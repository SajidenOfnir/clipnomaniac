interface CardProps {
  children: React.ReactNode
  className?: string
  glowing?: boolean
}

export const Card = ({ children, className = '', glowing = false }: CardProps) => {
  return (
    <div 
      className={`
        bg-dark-surface/80 backdrop-blur-lg rounded-xl border border-neon-cyan/30 
        p-6 transition-all duration-300
        ${glowing ? 'shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40' : ''}
        ${className}
      `}
    >
      {/* Corner accents */}
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-neon-cyan opacity-50"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-neon-cyan opacity-50"></div>
      
      {children}
    </div>
  )
}