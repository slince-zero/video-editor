import { makeAutoObservable } from 'mobx'
import { MenuOption, EditorElement } from '@/type'
class Store {
  selectedMenuOption: MenuOption
  images: string[]
  videos: string[]
  audios: string[]
  /**
   * @description
   * 播放状态(按钮切换，播放或者暂停)
   */
  playing: boolean

  /**
   * @description
   * 最大时间 30s
   */
  maxTime: number

  /**
   * @description
   * 选中的对象类型，视频、音频、图片、文本
   */
  selectedElement: EditorElement | null

  /**
   * @description
   * canvas 对象
   */
  canvas: fabric.Canvas | null

  constructor() {
    this.selectedMenuOption = 'Video'
    this.images = []
    this.videos = []
    this.audios = []
    this.playing = false
    this.maxTime = 30 * 1000
    this.selectedElement = null
    this.canvas = null
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

  setPlaying(playing: boolean) {
    this.playing = playing
  }

  /**
   * @description
   * 设置当前选中的元素，并在画布上更新相应的选中状态
   */
  setSelectedElement(selectedElement: EditorElement | null) {
    this.selectedElement = selectedElement
    if (this.canvas) {
      if (selectedElement?.fabricObject) {
        // 如果存在 fabric 对象，则设置选中的 fabric 对象
        this.canvas.setActiveObject(selectedElement.fabricObject)
      } else {
        // 如果不存在，则取消画布上选中对象的状态
        this.canvas.discardActiveObject()
      }
    }
  }

  /**
   * @description
   * 设置 canvas 对象 
   */
  setCanvas(canvas:fabric.Canvas | null){
    this.canvas = canvas
    // if(canvas){
    //   canvas.backgroundColor = this.backgroundColor
    // }
  }






  
}

export default Store
