'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
const Resource = observer(() => {
  const store = useContext(StoreContext)
  const selectedMenuOption = store.selectedMenuOption
  return (
    <div>
        
    </div>
  )
})

export default Resource
