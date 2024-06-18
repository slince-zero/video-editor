'use client'

import { observer } from 'mobx-react-lite'
import { StoreContext } from '@/store'
import { useContext } from 'react'
import { MdPlayArrow, MdPause } from 'react-icons/md'
import { formatTimeToMinSecMili } from '@/utils'
const Player = observer(() => {
  const store = useContext(StoreContext)
  // const formattedTime = formatTimeToMinSecMili(store.currentTime)
  const formattedMaxTime = formatTimeToMinSecMili(store.maxTime)
  const Icon = store.playing ? MdPause : MdPlayArrow
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center px-2">
        <button
          className="w-[80px] rounded px-2 py-2"
          onClick={() => {
            store.setPlaying(!store.playing)
          }}
        >
          <Icon size="40"></Icon>
        </button>
        {/* <span className="font-mono">{formattedTime}</span> */}
        <span className="font-mono">00:00</span>
        <div className="w-[1px] h-[25px] bg-slate-300 mx-[10px]"></div>
        <span className="font-mono">{formattedMaxTime}</span>
      </div>
    </div>
  )
})

export default Player
