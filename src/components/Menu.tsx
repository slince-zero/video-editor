'use client'

import { useContext } from 'react'
import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'

const MENU_OPTIONS = [
  {
    name: 'Video',
    icon: MdVideoLibrary,
    action: (store: Store) => {
      store.setSelectedMenuOption('Video')
    },
  },
]

const Menu = observer(() => {
  const store = useContext(StoreContext)
  return <></>
})
