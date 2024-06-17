import { makeAutoObservable } from 'mobx'
import { MenuOption } from '@/type'
class Store {
  selectedMenuOption: MenuOption

  constructor() {
    this.selectedMenuOption = 'Video'
    makeAutoObservable(this)
  }

  setSelectedMenuOption(option: MenuOption) {
    this.selectedMenuOption = option
  }
}

export default Store
