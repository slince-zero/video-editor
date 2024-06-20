'use client'

import { useRef, useState, useEffect, useMemo } from 'react'

type ScaleVerticalLine = {
  interval: number
  color: string
  size: number
  width: number
}

type ScaleLineProps = {
  max: number
}

const ScaleLine: React.FC<ScaleLineProps> = (props) => {
  const { max } = props
  const [canvasSize, setCanvasSize] = useState({ width: 50, height: 30 })
  const canvasRef = useRef<HTMLCanvasElement>(null)

  /**
   * @description
   * 时间轴上的刻度线
   * useMemo 优化,只会在组件首次渲染时执行一次，用到useMemo是因为useEffect的依赖项中有ScaleVerticalLine
   * 所以为了避免重复渲染，用到useMemo
   */
  const ScaleVerticalLine: ScaleVerticalLine[] = useMemo(
    () => [
      {
        interval: 5000,
        color: 'black',
        size: 16,
        width: 1,
      },
      {
        interval: 1000,
        color: 'black',
        size: 8,
        width: 1,
      },
    ],
    []
  )

  useEffect(() => {
    // 动态设置 canvas 大小
    const handleResize = () => {
      if (canvasRef.current) {
        setCanvasSize({
          width: canvasRef.current.parentElement?.clientWidth ?? 50,
          height: canvasRef.current.parentElement?.clientHeight ?? 30,
        })
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // 初始化调用

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    // 获取 canvas 元素
    const canvas = canvasRef.current
    if (canvas) {
      // 设置 canvas 宽高
      canvas.width = canvasSize.width
      canvas.height = canvasSize.height

      // getContext('2d') 获取 2D 绘图上下文，用于在 canvas 上绘图。
      const ctx = canvas.getContext('2d')

      if (ctx) {
        ctx.fillStyle = 'white'
        // 绘制填充，ctx.fillRect(x, y, width, height)，x、y 为矩形左上角的坐标，width、height 为矩形的宽高。
        ctx.fillRect(0, 0, canvasSize.width, canvasSize.height)
        ScaleVerticalLine.forEach((item) => {
          ctx.strokeStyle = item.color
          ctx.lineWidth = item.width
          // 开始新的绘图路径
          ctx.beginPath()
          for (let i = 0; i < max; i += item.interval) {
            // 绘制直线 moveTo() 和 lineTo() 配合使用
            // 从当前位置开始绘制直线到指定的坐标。
            const x = (i / max) * canvasSize.width
            ctx.moveTo(x, 0)
            ctx.lineTo(x, item.size)
          }
          ctx.stroke()
        })
      }
    }
  }, [max, canvasSize, ScaleVerticalLine])

  const updateFormMouseEvent = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) {
      const x = e.clientX - rect.left
      const value = (x / canvasSize.width) * max
      const normalizedValue = Math.min(max, Math.max(0, value))
      // onChange(normalizedValue)
    }
  }

  return (
    <div className="relative w-full bg-slate-300">
      <canvas ref={canvasRef}></canvas>
      <div
        className="rounded-full bg-black w-[4px] absolute top-0 left-0"
        style={{
          height: `${canvasSize.height}px`,
          // transform: `translateX(${
          //   (value / max) * canvasSize.width
          // }px) translateX(-2px)`,
        }}
      ></div>
    </div>
  )
}

export default ScaleLine
