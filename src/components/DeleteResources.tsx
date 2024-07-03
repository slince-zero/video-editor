'use client'
import { StoreContext } from '@/store'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'

const DeleteResource = observer(() => {
  const store = useContext(StoreContext)
  return (
    <div className="bg-slate-200 h-full">
      <div className="flex flex-row justify-between">
        <div className="text-sm px-[16px] py-[7px] font-semibold">Elements</div>
      </div>
      <div className="flex flex-col">
        {store.editorElements.map((element) => {
          if (element.type === 'video') {
            return (
              <video
                key={element.id}
                className="opacity-0 max-w-[20px] max-h-[20px]"
                src={element.properties.src}
                onLoad={() => {
                  store.refreshElements()
                }}
                onLoadedData={() => {
                  store.refreshElements()
                }}
                height={20}
                width={20}
                id={element.properties.elementId}
              ></video>
            )
          }
        })}
      </div>
    </div>
  )
})

export default DeleteResource
