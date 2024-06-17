'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
const ImageResourcePanel = observer(() => {
  const store = useContext(StoreContext)
  return <div>image</div>
})

export default ImageResourcePanel
