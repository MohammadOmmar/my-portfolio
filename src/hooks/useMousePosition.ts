import { useState, useEffect, useCallback, useRef } from 'react'

interface MousePosition {
  x: number
  y: number
  normalizedX: number
  normalizedY: number
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0.5,
    normalizedY: 0.5
  })
  const rafRef = useRef<number | null>(null)
  const latestEvent = useRef<{ x: number; y: number } | null>(null)

  const updatePosition = useCallback(() => {
    if (latestEvent.current) {
      const { x, y } = latestEvent.current
      setPosition({
        x,
        y,
        normalizedX: x / window.innerWidth,
        normalizedY: y / window.innerHeight
      })
    }
    rafRef.current = null
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      latestEvent.current = { x: e.clientX, y: e.clientY }
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updatePosition)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [updatePosition])

  return position
}
