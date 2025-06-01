import { useRef, useEffect, useState, useCallback } from 'react'

interface Point {
  x: number
  y: number
}

interface CanvasProps {
  width: number
  height: number
  brushSize: number
  color: string
}

export default function Canvas({ width, height, brushSize, color }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastPoint, setLastPoint] = useState<Point | null>(null)

  const getPointFromEvent = useCallback((event: TouchEvent | MouseEvent): Point => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }

    const rect = canvas.getBoundingClientRect()
    
    if ('touches' in event) {
      const touch = event.touches[0] || event.changedTouches[0]
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      }
    } else {
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      }
    }
  }, [])

  const drawPencilStroke = useCallback((from: Point, to: Point) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const distance = Math.sqrt(
      Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)
    )
    
    if (distance < 1) return

    const steps = Math.ceil(distance / 2)
    
    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = color  // fillStyleを設定
    ctx.strokeStyle = color
    ctx.lineWidth = brushSize
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    
    // 基本の線を描画
    ctx.globalAlpha = 0.8
    ctx.beginPath()
    ctx.moveTo(from.x, from.y)
    ctx.lineTo(to.x, to.y)
    ctx.stroke()
    
    // 鉛筆の質感を出すための点を追加
    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const x = from.x + (to.x - from.x) * t
      const y = from.y + (to.y - from.y) * t
      
      const jitterX = (Math.random() - 0.5) * Math.min(1.5, brushSize * 0.3)
      const jitterY = (Math.random() - 0.5) * Math.min(1.5, brushSize * 0.3)
      
      const opacity = 0.3 + Math.random() * 0.4
      ctx.globalAlpha = opacity
      
      ctx.beginPath()
      ctx.arc(x + jitterX, y + jitterY, Math.max(0.8, brushSize * 0.2), 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.globalAlpha = 1
  }, [brushSize, color])

  const startDrawing = useCallback((event: TouchEvent | MouseEvent) => {
    event.preventDefault()
    const point = getPointFromEvent(event)
    setIsDrawing(true)
    setLastPoint(point)
  }, [getPointFromEvent])

  const draw = useCallback((event: TouchEvent | MouseEvent) => {
    event.preventDefault()
    if (!isDrawing || !lastPoint) return

    const currentPoint = getPointFromEvent(event)
    drawPencilStroke(lastPoint, currentPoint)
    setLastPoint(currentPoint)
  }, [isDrawing, lastPoint, getPointFromEvent, drawPencilStroke])

  const stopDrawing = useCallback((event: TouchEvent | MouseEvent) => {
    event.preventDefault()
    setIsDrawing(false)
    setLastPoint(null)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleTouchStart = (e: TouchEvent) => startDrawing(e)
    const handleTouchMove = (e: TouchEvent) => draw(e)
    const handleTouchEnd = (e: TouchEvent) => stopDrawing(e)

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false })
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false })
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false })
    canvas.addEventListener('touchcancel', handleTouchEnd, { passive: false })

    const handleMouseDown = (e: MouseEvent) => startDrawing(e)
    const handleMouseMove = (e: MouseEvent) => draw(e)
    const handleMouseUp = (e: MouseEvent) => stopDrawing(e)

    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseup', handleMouseUp)
    canvas.addEventListener('mouseleave', handleMouseUp)

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchend', handleTouchEnd)
      canvas.removeEventListener('touchcancel', handleTouchEnd)
      canvas.removeEventListener('mousedown', handleMouseDown)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseup', handleMouseUp)
      canvas.removeEventListener('mouseleave', handleMouseUp)
    }
  }, [startDrawing, draw, stopDrawing])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, width, height)
  }, [width, height])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        touchAction: 'none',
        backgroundColor: '#ffffff'
      }}
    />
  )
}