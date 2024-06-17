'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext, useRef, useState } from 'react'
import { formatTimeToMinSec } from '../utils'

type VideoResourceProps = {
  video: string
  index: number
}

const VideoResource = observer(({ video, index }: VideoResourceProps) => {
  const store = useContext(StoreContext)
  const ref = useRef<HTMLVideoElement>(null)
  const [videoLength, setVideoLength] = useState('00:00')
  return (
    <div className="rounded-lg overflow-hidden items-center bg-slate-800 m-[15px] flex flex-col relative">
      <div className=" text-white py-1 absolute text-base top-2 right-2">
        {videoLength}
      </div>
      <button
        className="hover:bg-[#00a0f5] bg-[rgba(0,0,0,.25)] rounded z-10 text-white font-bold py-1 absolute text-lg bottom-2 right-2"
        onClick={() => console.log('添加到编辑界面')}
      >
        add
      </button>
      <video
        onLoadedData={() => {
          const videoLength = ref.current?.duration ?? 0
          setVideoLength(formatTimeToMinSec(videoLength))
        }}
        ref={ref}
        className="max-h-[100px] max-w-[150px]"
        src={video}
        height={200}
        width={200}
        id={`video-${index}`}
      />
    </div>
  )
})

export default VideoResource
