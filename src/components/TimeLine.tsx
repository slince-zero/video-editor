'use client'

import { observer } from 'mobx-react-lite'
import { StoreContext } from '@/store'
import { useContext } from 'react'
import Player from './timeLine/Player'
const TimeLine = observer(() => {
  const store = useContext(StoreContext)
  return (
    <div className="flex flex-col">
      {/* 时间轴 */}
      <div>
        <Player />
      </div>
      {/* 可以横向拖动的区域*/}
      <div className="flex-1 relative"></div>
    </div>
  )
})

export default TimeLine
