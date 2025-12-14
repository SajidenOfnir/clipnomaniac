interface ProgressBarProps {
  current: number
  total: number
  chapter: string
}

export const ProgressBar = ({ current, total, chapter }: ProgressBarProps) => {
  const progress = (current / total) * 100
  
  return (
    <div className="fixed top-20 left-0 right-0 z-40 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-cyber text-neon-cyan tracking-wider">
            {chapter}
          </span>
          <span className="text-sm text-gray-400 font-cyber">
            SCENE {current} / {total}
          </span>
        </div>
        
        <div className="relative h-1 bg-dark-surface rounded-full overflow-hidden">
          <div 
            className="absolute h-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  )
}