'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
const AudioResourcePanel = observer(() => {
  const store = useContext(StoreContext)
  return <div>audio</div>
})

export default AudioResourcePanel
