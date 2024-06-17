'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
const ColorResourcePanel = observer(() => {
  const store = useContext(StoreContext)
  return <div>color</div>
})

export default ColorResourcePanel
