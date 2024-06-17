'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
const DownloadResourcePanel = observer(() => {
  const store = useContext(StoreContext)
  return <div>download</div>
})

export default DownloadResourcePanel
