import { makeAutoObservable } from 'mobx'
import { MenuOption } from '@/type'
class Store {
  selectedMenuOption: MenuOption
  images: string[]
  constructor() {
    this.selectedMenuOption = 'Video'
    this.images = []
    makeAutoObservable(this)
  }

  setSelectedMenuOption(option: MenuOption) {
    this.selectedMenuOption = option
  }

  /**
   * @description
   * 添加图片到 images 数组里面
   */
  addImageResource(image: string) {
    this.images = [...this.images, image]
  }
}

export default Store
