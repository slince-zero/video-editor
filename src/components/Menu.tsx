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
    action: (store: Store) => {
      store.setSelectedMenuOption('Video')
    },
  },
  {
    name: 'Audio',
    icon: AiOutlineAudio,
    action: (store: Store) => {
      store.setSelectedMenuOption('Audio')
    },
  },
  {
    name: 'Image',
    icon: AiOutlineFileImage,
    action: (store: Store) => {
      store.setSelectedMenuOption('Image')
    },
  },
  {
    name: 'Text',
    icon: AiOutlineFileText,
    action: (store: Store) => {
      store.setSelectedMenuOption('Text')
    },
  },
  {
    name: 'Color',
    icon: AiOutlineBgColors,
    action: (store: Store) => {
      store.setSelectedMenuOption('Color')
    },
  },
  {
    name: 'Download',
    icon: AiOutlineDownload,
    action: (store: Store) => {
      store.setSelectedMenuOption('Download')
    },
  },
]

const Menu = observer(() => {
  const store = useContext(StoreContext)

  return (
    <ul>
      {MENU_OPTIONS.map((option) => {
        const isSelected = store.selectedMenuOption === option.name
        return (
          <li key={option.name}>
            <button
              className={`flex items-center w-full p-4 text-left ${
                isSelected ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => option.action(store)}
            >
              <option.icon className="mr-2" />
              {option.name}
            </button>
          </li>
        )
      })}
    </ul>
  )
})

export default Menu
