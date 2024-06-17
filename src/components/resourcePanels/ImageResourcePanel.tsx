'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'

type ImageChooseButton = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  accept: string
}

// button 组件
const ImageChooseButton = (props: ImageChooseButton) => {
  return (
    <label htmlFor="fileInput" className={props.className}>
      <input
        id="fileInput"
        type="file"
        accept={props.accept}
        className="hidden"
        onChange={props.onChange}
      />
      Upload
    </label>
  )
}

const ImageResourcePanel = observer(() => {
  const store = useContext(StoreContext)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    store.addImageResource(URL.createObjectURL(file))
  }
  console.log(store.images);
  
  return (
    <div>
      <div>image</div>
      <ImageChooseButton
        accept="image/*"
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-center mx-4 py-2 px-4 rounded cursor-pointer"
        onChange={handleFileChange}
      />
    </div>
  )
})

export default ImageResourcePanel
