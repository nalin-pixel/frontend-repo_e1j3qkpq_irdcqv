import { useEffect, useRef } from 'react'

// Canvas-based subtle, performant pixel tile shimmer
export default function BackgroundTiles() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      draw()
    }
    window.addEventListener('resize', onResize)

    const tile = 18
    const cols = Math.ceil(w / tile)
    const rows = Math.ceil(h / tile)

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const nx = x / cols
          const ny = y / rows
          const v = (Math.sin((nx + ny + performance.now() / 6000) * Math.PI * 2) + 1) / 2
          const alpha = 0.02 + v * 0.06
          ctx.fillStyle = `rgba(255,255,255,${alpha})`
          ctx.fillRect(x * tile, y * tile, 1, 1)
        }
      }
    }

    let raf
    const loop = () => {
      draw()
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen" />
}
