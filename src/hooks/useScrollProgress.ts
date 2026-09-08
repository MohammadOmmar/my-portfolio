import { useState, useEffect, useRef } from 'react'

interface ScrollProgress {
  progress: number
  scrollY: number
  direction: 'up' | 'down' | 'idle'
}

export function useScrollProgress(): ScrollProgress {
  const [scroll, setScroll] = useState<ScrollProgress>({
    progress: 0,
    scrollY: 0,
    direction: 'idle'
  })
  const lastScrollY = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const updateScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollY / docHeight : 0
      const direction = scrollY > lastScrollY.current ? 'down' : scrollY < lastScrollY.current ? 'up' : 'idle'

      lastScrollY.current = scrollY

      setScroll({
        progress: Math.min(1, Math.max(0, progress)),
        scrollY,
        direction
      })
    }

    const handleScroll = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          updateScroll()
          rafRef.current = null
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return scroll
}
