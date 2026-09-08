import { useState, useEffect, useRef } from 'react'

interface MouseVelocity {
  velocityX: number
  velocityY: number
  speed: number
}

export function useMouseVelocity(): MouseVelocity {
  const [velocity, setVelocity] = useState<MouseVelocity>({
    velocityX: 0,
    velocityY: 0,
    speed: 0
  })
  const lastPosition = useRef({ x: 0, y: 0 })
  const lastTime = useRef(Date.now())
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      const dt = now - lastTime.current
      if (dt === 0) return

      const dx = e.clientX - lastPosition.current.x
      const dy = e.clientY - lastPosition.current.y

      const velocityX = dx / dt
      const velocityY = dy / dt
      const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY)

      lastPosition.current = { x: e.clientX, y: e.clientY }
      lastTime.current = now

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          setVelocity({ velocityX, velocityY, speed })
          rafRef.current = null
        })
      }
    }

    const decayVelocity = () => {
      setVelocity(prev => ({
        velocityX: prev.velocityX * 0.92,
        velocityY: prev.velocityY * 0.92,
        speed: prev.speed * 0.92
      }))
    }

    const interval = setInterval(decayVelocity, 16)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(interval)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return velocity
}
