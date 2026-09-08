import { useState, useEffect } from 'react'
import { profile } from '../data/profile'

export default function Navigation() {
  const [time, setTime] = useState('')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour12: false }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-page-padding py-4 flex justify-between items-center mix-blend-difference">
      {/* Left section */}
      <div className="flex items-center gap-6">
        <span className="text-xs font-mono text-foreground tracking-tight">
          {profile.name.split(' ')[1]}©2026
        </span>
        <span className="text-xs font-mono text-foreground tracking-tight hidden sm:inline">
          {profile.name.toLowerCase().replace(' ', ' ')}.design
        </span>
      </div>

      {/* Center section */}
      <div className="flex items-center gap-4 text-xs font-mono text-foreground tracking-tight">
        <a href="#work" className="hover:text-accent transition-colors duration-300">Work</a>
        <a href="#contact" className="hover:text-accent transition-colors duration-300">Contact</a>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4 text-xs font-mono text-foreground tracking-tight">
        <span className="hidden md:inline">X {String(mousePos.x).padStart(4, '0')}</span>
        <span className="hidden md:inline">Y {String(mousePos.y).padStart(4, '0')}</span>
        <span>{time}</span>
      </div>
    </nav>
  )
}
