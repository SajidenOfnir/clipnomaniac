import { useEffect, useRef } from 'react'

interface ScenePlayerProps {
  videoUrl?: string
  title: string
  description: string
  onComplete?: () => void
}

export const ScenePlayer = ({ 
  videoUrl, 
  title, 
  description, 
  onComplete 
}: ScenePlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video play error:', err))
    }
  }, [videoUrl])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-dark-bg">
      {/* Video Background */}
      {videoUrl && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src={videoUrl}
          muted
          onEnded={onComplete}
        />
      )}
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent" />
      
      {/* Scene Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-12">
        <div className="max-w-4xl animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-cyber text-white mb-4 glow-text">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Holographic Frame Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-neon-cyan opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-neon-cyan opacity-30 animate-pulse" />
      </div>
    </div>
  )
}
