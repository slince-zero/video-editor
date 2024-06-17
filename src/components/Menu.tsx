'use client'

import { useContext } from 'react'
import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import {
  AiOutlineVideoCameraAdd,
  AiOutlineAudio,
  AiOutlineFileImage,
  AiOutlineFileText,
  AiOutlineBgColors,
  AiOutlineDownload,
} from 'react-icons/ai'
import Store from '@/store/store'
const MENU_OPTIONS = [
  {
    name: 'Video',
    icon: AiOutlineVideoCameraAdd,
    action: (store: Store) => {},
  },
  {
    name: 'Audio',
    icon: AiOutlineAudio,
    action: (store: Store) => {},
  },
  {
    name: 'Image',
    icon: AiOutlineFileImage,
    action: (store: Store) => {},
  },
  {
    name: 'Text',
    icon: AiOutlineFileText,
    action: (store: Store) => {},
  },
  {
    name: 'Color',
    icon: AiOutlineBgColors,
    action: (store: Store) => {},
  },
  {
    name: 'Download',
    icon: AiOutlineDownload,
    action: (store: Store) => {},
  },
]

const Menu = observer(() => {
  const store = useContext(StoreContext)
  return <></>
})
