'use client'

import { useContext } from 'react'
import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import Store from '@/store/store'
const MENU_OPTIONS = [
  {
    name: 'Video',
    icon: AiOutlineVideoCameraAdd,
    action: (store: Store) => {},
  },
]

const Menu = observer(() => {
  const store = useContext(StoreContext)
  return <></>
})
