'use client'

import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext, useRef, useState } from 'react'
import Image from 'next/image'
type ImageResourceProps = {
  image: string
  index: number
}

const ImageResource = observer(({ image, index }: ImageResourceProps) => {
  const store = useContext(StoreContext)
  const ref = useRef<HTMLImageElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })
  return (
    <div className="rounded-lg overflow-hidden items-center bg-slate-800 m-[15px] flex flex-col relative">
      <div className=" text-white py-1 absolute text-base top-2 right-2">
        {size.width} x {size.height}
      </div>
      <button
        className="hover:bg-[#00a0f5] bg-[rgba(0,0,0,.25)] rounded z-10 text-white font-bold py-1 absolute text-lg bottom-2 right-2"
        onClick={() => console.log('添加到编辑界面')}
      >
        add
      </button>
      <Image
        onLoad={() => {
          setSize({
            width: ref.current?.naturalWidth ?? 0,
            height: ref.current?.naturalHeight ?? 0,
          })
        }}
        ref={ref}
        className="transition-transform duration-200  hover:scale-105 rounded m-2 cursor-pointer w-5/12 object-cover h-24"
        src={image}
        height={200}
        width={200}
        id={`image-${index}`}
        alt={`image-${index}`}
      />
    </div>
  )
})

export default ImageResource
