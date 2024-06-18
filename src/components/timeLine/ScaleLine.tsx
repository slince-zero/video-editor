'use client'

import { observer } from 'mobx-react-lite'
import { StoreContext } from '@/store'
import { useContext } from 'react'

const ScaleLine = observer(() => {
  const store = useContext(StoreContext)
  return <div className="w-full h-[1px] bg-slate-300"></div>
})

export default ScaleLine
