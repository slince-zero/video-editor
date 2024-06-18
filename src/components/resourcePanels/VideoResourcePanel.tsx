'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import VideoResource from '../entity/VideoResource'
import SharedButton from '../../utils/SharedButton'
const VideoResourcePanel = observer(() => {
  const store = useContext(StoreContext)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    store.addVideoResource(URL.createObjectURL(file))
  }
  return (
    <div>
      <div>video</div>
      <SharedButton
        accept="video/mp4,video/x-m4v,video/*"
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-center mx-2 py-2 px-4 rounded cursor-pointer"
        onChange={handleFileChange}
      />
      {store.videos.map((video, index) => (
        <VideoResource key={video} video={video} index={index} />
      ))}
    </div>
  )
})

export default VideoResourcePanel
