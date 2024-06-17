'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
const TextResourcePanel = observer(() => {
  const store = useContext(StoreContext)
  return <div>text</div>
})

export default TextResourcePanel
