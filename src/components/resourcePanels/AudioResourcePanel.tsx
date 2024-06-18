'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import AudioResource from '../entity/AudioResource'
import SharedButton from '../../utils/SharedButton'

const AudioResourcePanel = observer(() => {
  const store = useContext(StoreContext)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    store.addAudioResource(URL.createObjectURL(file))
  }

  return (
    <div>
      <div>image</div>
      <SharedButton
        accept="audio/mp3,audio/*"
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-center mx-2 py-2 px-4 rounded cursor-pointer"
        onChange={handleFileChange}
      />
      {store.audios.map((audio, index) => {
        return <AudioResource key={audio} audio={audio} index={index} />
      })}
    </div>
  )
})

export default AudioResourcePanel
