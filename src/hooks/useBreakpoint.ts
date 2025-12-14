// hooks/useBreakpoint.ts
import { useState, useEffect } from 'react'

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) setBreakpoint('mobile')
      else if (width < 1024) setBreakpoint('tablet')
      else setBreakpoint('desktop')
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return breakpoint
}