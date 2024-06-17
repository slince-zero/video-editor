'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext, useRef, useState } from 'react'
import { formatTimeToMinSec } from '../utils'
import { AiOutlinePlayCircle } from 'react-icons/ai'

type AudioResourceProps = {
  audio: string
  index: number
}

const AudioResource = observer(({ audio, index }: AudioResourceProps) => {
  const store = useContext(StoreContext)
  const ref = useRef<HTMLAudioElement>(null)
  const [audioLength, setAudioLength] = useState('00:00')
  return (
    <div className="rounded-lg overflow-hidden items-center bg-slate-800 m-[15px] flex flex-col relative">
      <div className=" text-white py-1 absolute text-base top-2 right-2">
        {audioLength}
      </div>
      <button
        className="hover:bg-[#00a0f5] bg-[rgba(0,0,0,.25)] rounded z-10 text-white font-bold py-1 absolute text-lg bottom-2 right-2"
        onClick={() => console.log('添加到编辑界面')}
      >
        add
      </button>
      <div>
        <AiOutlinePlayCircle className="text-white w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="h-[100px]">
        <audio
          onLoadedData={() => {
            const audioLength = ref.current?.duration ?? 0
            setAudioLength(formatTimeToMinSec(audioLength))
          }}
          ref={ref}
          src={audio}
          id={`audio-${index}`}
        />
      </div>
    </div>
  )
})

export default AudioResource
