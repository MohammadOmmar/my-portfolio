import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center px-page-padding pt-24 pb-12 relative"
    >
      {/* SVG Decorative Element */}
      <svg 
        viewBox="0 0 320 154" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute top-[15%] left-[5%] w-2/3 md:w-1/2 pointer-events-none opacity-80"
        aria-hidden="true"
      >
        <path 
          className="svg-path"
          d="M138.27 11.7729C123.15 39.3885 106.223 85.497 102.06 100.029C98.6588 111.899 98.3721 128.792 98.6271 131.165" 
          stroke="#C0FE04" 
          strokeWidth="4" 
          fill="none"
          style={{ strokeDasharray: 200, strokeDashoffset: isVisible ? 0 : 200, transition: 'stroke-dashoffset 1.5s cubic-bezier(0.65, 0, 0.35, 1) 0.5s' }}
        />
        <path 
          className="svg-path"
          d="M78.2326 42.073C68.2519 91.6846 24.5171 161.888 11.6117 145.082C-3.90668 124.872 84.4229 80.042 149.127 70.3141C129.181 76.883 121.731 89.3385 127.224 93.3199C137.212 100.559 148.931 80.9071 154.826 68.4373C154.826 68.4373 145.919 84.0047 152.863 86.4553C163.666 90.2674 183.35 47.449 193.768 55.6123C200.863 61.1719 187.995 78.0438 180.889 75.6465C176.521 74.173 179.98 64.5401 184.583 59.6902C186.629 62.1747 192.878 65.6969 201.5 59.9093C210.123 54.1218 217.989 47.6358 220.844 45.1163" 
          stroke="#C0FE04" 
          strokeWidth="4" 
          fill="none"
          style={{ strokeDasharray: 400, strokeDashoffset: isVisible ? 0 : 400, transition: 'stroke-dashoffset 2s cubic-bezier(0.65, 0, 0.35, 1) 0.8s' }}
        />
        <path 
          className="svg-path"
          d="M235.554 43.4299C221.979 37.3731 206.4 60.4017 215.719 63.1233C224.115 65.5752 234.431 48.0119 239.203 40.1227C237.612 42.7522 234.822 53.6736 235.156 66.1976C235.574 81.8524 228.174 116.927 217.431 114.674C206.687 112.422 217.712 80.3645 242.778 57.3701C262.83 38.9746 269.549 28.9006 270.402 26.163C266.375 32.0516 260.249 44.2468 267.959 45.919C275.669 47.5912 298.148 19.8335 308.423 5.74565" 
          stroke="#C0FE04" 
          strokeWidth="4" 
          fill="none"
          style={{ strokeDasharray: 350, strokeDashoffset: isVisible ? 0 : 350, transition: 'stroke-dashoffset 1.8s cubic-bezier(0.65, 0, 0.35, 1) 1.1s' }}
        />
      </svg>

      {/* Main content */}
      <div className="grid grid-cols-12 gap-4 mt-32 md:mt-0">
        <div className="col-span-12 md:col-span-7 lg:col-span-8 md:col-start-5 lg:col-start-5">
          {/* Positioning tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {profile.positioning.map((tag, i) => (
              <span 
                key={i}
                className="text-xs font-mono text-muted border border-border rounded-full px-3 py-1"
                style={{ 
                  opacity: isVisible ? 1 : 0, 
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: `all 0.6s var(--ease-out-expo) ${0.2 + i * 0.1}s`
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Name */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.9] mb-8"
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-out-expo) 0.3s'
            }}
          >
            {profile.name}
          </h1>

          {/* Bio */}
          <p 
            className="text-lg md:text-xl text-muted max-w-md leading-relaxed"
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s var(--ease-out-expo) 0.5s'
            }}
          >
            {profile.shortBio}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease 1.5s'
        }}
      >
        <span className="text-xs font-mono text-muted">Scroll</span>
        <div className="w-[1px] h-8 bg-muted animate-pulse" />
      </div>
    </section>
  )
}
