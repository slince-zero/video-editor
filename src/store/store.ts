import { makeAutoObservable } from 'mobx'
import { MenuOption } from '@/type'
class Store {
  selectedMenuOption: MenuOption
  images: string[]
  videos: string[]
  audios: string[]

  constructor() {
    this.selectedMenuOption = 'Video'
    this.images = []
    this.videos = []
    this.audios = []
    makeAutoObservable(this)
  }

  setSelectedMenuOption(option: MenuOption) {
    this.selectedMenuOption = option
  }

  /**
   * @description
   * 添加图片到 images 数组里面,用于 resource 模块的展示
   */
  addImageResource(image: string) {
    this.images = [...this.images, image]
  }

  /**
   * @description
   * 添加视频到 videos 数组里面,用于 resource 模块的展示
   */
  addVideoResource(video: string) {
    this.videos = [...this.videos, video]
  }

  /**
   * @description
   * 添加音频到 audios 数组里面,用于 resource 模块的展示
   */
  addAudioResource(audio: string) {
    this.audios = [...this.audios, audio]
  }
}

export default Store
