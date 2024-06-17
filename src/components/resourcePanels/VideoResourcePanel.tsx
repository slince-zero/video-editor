'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
const VideoResourcePanel = observer(() => {
  const store = useContext(StoreContext)
  return <div>video</div>
})

export default VideoResourcePanel
