import { useState, useEffect, useRef } from 'react'

export function useScrollVelocity(): number {
  const [velocity, setVelocity] = useState(0)
  const lastScrollY = useRef(0)
  const lastTime = useRef(Date.now())

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now()
      const dt = now - lastTime.current
      if (dt === 0) return

      const currentScrollY = window.scrollY
      const dy = currentScrollY - lastScrollY.current
      const currentVelocity = Math.abs(dy / dt)

      lastScrollY.current = currentScrollY
      lastTime.current = now

      setVelocity(currentVelocity)
    }

    const decayVelocity = () => {
      setVelocity(prev => prev * 0.9)
    }

    const interval = setInterval(decayVelocity, 16)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [])

  return velocity
}
