'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import AudioResourcePanel from './resourcePanels/AudioResourcePanel'
import VideoResourcePanel from './resourcePanels/VideoResourcePanel'
import ImageResourcePanel from './resourcePanels/ImageResourcePanel'
import TextResourcePanel from './resourcePanels/TextResourcePanel'
import ColorResourcePanel from './resourcePanels/ColorResourcePanel'
import DownloadResourcePanel from './resourcePanels/DownloadResourcePanel'
const Resource = observer(() => {
  const store = useContext(StoreContext)
  const selectedMenuOption = store.selectedMenuOption
  return (
    <div>
      {selectedMenuOption === 'Video' ? <VideoResourcePanel /> : null}
      {selectedMenuOption === 'Audio' ? <AudioResourcePanel /> : null}
      {selectedMenuOption === 'Image' ? <ImageResourcePanel /> : null}
      {selectedMenuOption === 'Text' ? <TextResourcePanel /> : null}
      {selectedMenuOption === 'Color' ? <ColorResourcePanel /> : null}
      {selectedMenuOption === 'Download' ? <DownloadResourcePanel /> : null}
    </div>
  )
})

export default Resource
