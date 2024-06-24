'use client'
import { fabric } from 'fabric'
import { useEffect, useContext } from 'react'
import { StoreContext } from '@/store'
import Menu from '@/components/Menu'
import Resource from '@/components/Resource'
import TimeLine from '@/components/TimeLine'
const MainBoard = () => {
  const store = useContext(StoreContext)
  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      height: 500,
      width: 800,
      backgroundColor: '#ededed',
    })
    fabric.Object.prototype.transparentCorners = false
    fabric.Object.prototype.cornerColor = '#00a0f5'
    fabric.Object.prototype.cornerStyle = 'circle'
    fabric.Object.prototype.cornerStrokeColor = '#0063d8'
    fabric.Object.prototype.cornerSize = 10

    // 鼠标点击画布上的元素，若没有选中，则取消选中的状态
    canvas.on('mouse:down', function (e) {
      if (!e.target) {
        store.setSelectedElement(null)
      }
    })

    store.setCanvas(canvas)

    // requestAnimFrame 创建一个动画循环，持续地渲染画布上的所有对象
    fabric.util.requestAnimFrame(function render() {
      canvas.renderAll()
      fabric.util.requestAnimFrame(render)
    })
  }, [])
  return (
    <div className='flex h-screen w-screen'>
      <div className='min-w-48 min-h-full bg-blue-300'>
        <Menu />
      </div>
      <div className='min-w-64 min-h-full bg-blue-200'>
        <Resource />
      </div>
      <div className='flex flex-col flex-1 bg-blue-100'>
        <div className='flex w-full min-h-[50%]'>
          <div className='min-w-[80%]'>
            <canvas id='canvas'></canvas>
          </div>
          <div>top-2</div>
        </div>
        <div>
          <TimeLine />
        </div>
      </div>
    </div>
  )
}

export default MainBoard
