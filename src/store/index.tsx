'use client'

import React, { createContext, useState } from 'react'

import Store from './store'

export const StoreContext = createContext(new Store())

export function StoreProvider(props: { children: React.ReactNode }) {
  const [store] = useState(new Store())

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  )
}
