'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import ImageResource from '../entity/ImageResource'
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

  return (
    <div>
      <div>image</div>
      <ImageChooseButton
        accept="image/*"
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-center mx-4 py-2 px-4 rounded cursor-pointer"
        onChange={handleFileChange}
      />
      <div>
        {store.images.map((image, index) => (
          <ImageResource key={image} image={image} index={index} />
        ))}
      </div>
    </div>
  )
})

export default ImageResourcePanel
