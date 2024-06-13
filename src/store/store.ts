import { makeAutoObservable } from 'mobx'

class Store {
  count = 0

  constructor() {
    makeAutoObservable(this)
  }
}

export default Store
