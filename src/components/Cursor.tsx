import { useEffect, useRef, useState } from 'react'
import { useMousePosition } from '../hooks/useMousePosition'
import { useIsTouchDevice } from '../hooks/useIsTouchDevice'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface CursorState {
  x: number
  y: number
  scale: number
  isHovering: boolean
  isHidden: boolean
}

export default function Cursor() {
  const mouse = useMousePosition()
  const isTouch = useIsTouchDevice()
  const reducedMotion = useReducedMotion()
  
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const smoothMouse = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  
  const [state, setState] = useState<CursorState>({
    x: 0,
    y: 0,
    scale: 1,
    isHovering: false,
    isHidden: false
  })

  useEffect(() => {
    if (isTouch || reducedMotion) return

    const updateCursor = () => {
      const lerp = 0.15
      smoothMouse.current.x += (mouse.x - smoothMouse.current.x) * lerp
      smoothMouse.current.y += (mouse.y - smoothMouse.current.y) * lerp

      setState(prev => ({
        ...prev,
        x: smoothMouse.current.x,
        y: smoothMouse.current.y
      }))

      rafRef.current = requestAnimationFrame(updateCursor)
    }

    rafRef.current = requestAnimationFrame(updateCursor)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [mouse.x, mouse.y, isTouch, reducedMotion])

  useEffect(() => {
    if (isTouch || reducedMotion) return

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [data-cursor-hover]')
      const isHidden = target.closest('[data-cursor-hidden]')
      
      setState(prev => ({
        ...prev,
        isHovering: !!isInteractive,
        isHidden: !!isHidden
      }))
    }

    const handleMouseLeave = () => {
      setState(prev => ({ ...prev, isHidden: true }))
    }

    const handleMouseEnter = () => {
      setState(prev => ({ ...prev, isHidden: false }))
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isTouch, reducedMotion])

  if (isTouch || reducedMotion) return null

  return (
    <>
      {/* Cursor Ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${state.x - 20}px, ${state.y - 20}px) scale(${state.isHovering ? 1.8 : 1})`,
          opacity: state.isHidden ? 0 : 1,
          transition: 'transform 0.15s var(--ease-out-expo), opacity 0.2s ease'
        }}
      >
        <div
          className="w-10 h-10 rounded-full border border-foreground"
          style={{
            transition: 'all 0.15s var(--ease-out-expo)'
          }}
        />
      </div>
      
      {/* Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: `translate(${state.x - 4}px, ${state.y - 4}px)`,
          opacity: state.isHidden ? 0 : 1,
          transition: 'opacity 0.2s ease'
        }}
      >
        <div className="w-2 h-2 rounded-full bg-accent" />
      </div>
    </>
  )
}
