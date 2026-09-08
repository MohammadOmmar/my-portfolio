import { useEffect, useRef, useMemo } from 'react'
import { useMousePosition } from '../hooks/useMousePosition'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { useIsTouchDevice } from '../hooks/useIsTouchDevice'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface StickerConfig {
  id: string
  x: number
  y: number
  size: number
  rotation: number
  depth: number
  speed: number
  amplitude: number
  phase: number
  type: 'circle' | 'square' | 'triangle' | 'line' | 'dot' | 'cross'
  opacity: number
}

interface StickerProps {
  config: StickerConfig
  mouseX: number
  mouseY: number
  scrollProgress: number
  time: number
}

function generateStickers(): StickerConfig[] {
  const seed = 42
  const seededRandom = (i: number) => {
    const x = Math.sin(seed + i * 9999) * 10000
    return x - Math.floor(x)
  }

  const stickers: StickerConfig[] = []
  const types: StickerConfig['type'][] = ['circle', 'square', 'triangle', 'line', 'dot', 'cross']
  
  for (let i = 0; i < 18; i++) {
    stickers.push({
      id: 'sticker-' + i,
      x: seededRandom(i * 7) * 90 + 5,
      y: seededRandom(i * 13) * 300,
      size: seededRandom(i * 17) * 40 + 15,
      rotation: seededRandom(i * 23) * 360,
      depth: seededRandom(i * 31) * 0.5 + 0.1,
      speed: seededRandom(i * 37) * 0.5 + 0.3,
      amplitude: seededRandom(i * 41) * 20 + 5,
      phase: seededRandom(i * 47) * Math.PI * 2,
      type: types[Math.floor(seededRandom(i * 53) * types.length)],
      opacity: seededRandom(i * 59) * 0.15 + 0.03
    })
  }
  
  return stickers
}


function Sticker({ config, mouseX, mouseY, scrollProgress, time }: StickerProps) {
  const floatY = Math.sin(time * config.speed + config.phase) * config.amplitude
  const floatX = Math.cos(time * config.speed * 0.7 + config.phase) * config.amplitude * 0.5
  const rotation = config.rotation + time * config.speed * 10
  const mouseInfluence = config.depth * 30
  const offsetX = (mouseX - 0.5) * mouseInfluence
  const offsetY = (mouseY - 0.5) * mouseInfluence
  const scrollOffset = scrollProgress * config.depth * 100

  const style: React.CSSProperties = {
    position: 'absolute',
    left: config.x + '%',
    top: config.y + '%',
    width: config.size,
    height: config.size,
    transform: 'translate(' + (floatX + offsetX) + 'px, ' + (floatY + offsetY - scrollOffset) + 'px) rotate(' + rotation + 'deg)',
    opacity: config.opacity,
    willChange: 'transform'
  }

  const renderShape = () => {
    switch (config.type) {
      case 'circle':
        return <div className="w-full h-full rounded-full border border-foreground" style={{ opacity: 0.6 }} />
      case 'square':
        return <div className="w-full h-full border border-foreground" style={{ opacity: 0.5 }} />
      case 'triangle':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div style={{ width: 0, height: 0, borderLeft: config.size / 2 + 'px solid transparent', borderRight: config.size / 2 + 'px solid transparent', borderBottom: config.size + 'px solid var(--color-foreground)', opacity: 0.4 }} />
          </div>
        )
      case 'line':
        return <div className="w-full h-[1px] bg-foreground" style={{ opacity: 0.5, marginTop: config.size / 2 }} />
      case 'dot':
        return <div className="w-full h-full rounded-full bg-foreground" style={{ opacity: 0.6 }} />
      case 'cross':
        return (
          <div className="w-full h-full relative" style={{ opacity: 0.5 }}>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-foreground -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-foreground -translate-x-1/2" />
          </div>
        )
      default:
        return null
    }
  }

  return <div style={style}>{renderShape()}</div>
}

export default function BackgroundScene() {
  const mouse = useMousePosition()
  const scroll = useScrollProgress()
  const isTouch = useIsTouchDevice()
  const reducedMotion = useReducedMotion()
  const timeRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  const stickers = useMemo(() => generateStickers(), [])

  useEffect(() => {
    if (reducedMotion) return
    const animate = () => {
      timeRef.current += 0.016
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [reducedMotion])

  const time = timeRef.current

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at ' + (mouse.normalizedX * 100) + '% ' + (mouse.normalizedY * 100) + '%, rgba(192, 254, 4, 0.03) 0%, transparent 50%)',
          transition: 'background 0.3s ease'
        }}
      />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: '128px 128px'
        }}
      />
      {!reducedMotion && stickers.map(sticker => (
        <Sticker
          key={sticker.id}
          config={sticker}
          mouseX={isTouch ? 0.5 : mouse.normalizedX}
          mouseY={isTouch ? 0.5 : mouse.normalizedY}
          scrollProgress={scroll.progress}
          time={time}
        />
      ))}
    </div>
  )
}

