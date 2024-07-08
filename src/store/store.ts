import { makeAutoObservable } from 'mobx'
import { MenuOption, EditorElement, Placement } from '@/type'
import { getUid, isHtmlVideoElement } from '@/utils'
import { fabric } from 'fabric'
import { CoverVideo } from '@/utils/fabric-utils'
class Store {
  selectedMenuOption: MenuOption
  images: string[]
  videos: string[]
  audios: string[]

  /**
   * @description
   * 真正媒体文件，存储了要被渲染到编辑区域上的视频、图片、音频、文本
   */
  editorElements: EditorElement[]
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
    this.editorElements = []
    makeAutoObservable(this)
  }

  /**
   * @description
   *
   */
  updateSelectedElement() {
    this.selectedElement =
      this.editorElements.find(
        (element) => element.id === this.selectedElement?.id
      ) ?? null
  }

  /**
   * @description
   */
  setEditorElements(editorElements: EditorElement[]) {
    this.editorElements = editorElements
    this.updateSelectedElement()
  }

  /**
   * @description
   */
  addEditorElement(editorElement: EditorElement) {
    // 将视频、音频、图片等添加到 editorElements 数组当中去
    // this.setEditorElements([...this.editorElements, editorElement])
    this.editorElements.push(editorElement)
    // 这里可以正常打印出来，说明已经添加到editorElements这个数组里面去了，
    console.log(this.editorElements)

    // 渲染媒体文件到页面上
    this.refreshElements()
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
  setCanvas(canvas: fabric.Canvas | null) {
    this.canvas = canvas
    // if(canvas){
    //   canvas.backgroundColor = this.backgroundColor
    // }
  }

  /**
   * @description
   * 添加视频
   */
  addVideo(index: number) {
    const videoElement = document.getElementById(`video-${index}`)

    if (!isHtmlVideoElement(videoElement)) {
      return
    }
    const videoDurationMs = videoElement.duration * 1000
    const aspectRatio = videoElement.videoWidth / videoElement.videoHeight
    const id = getUid()

    this.addEditorElement({
      id,
      name: `Media(video) ${index + 1}`,
      type: 'video',
      placement: {
        x: 0,
        y: 0,
        width: 100 * aspectRatio,
        height: 100,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
      },
      properties: {
        elementId: `video-${id}`,
        src: videoElement.src,
        // effect: {
        //   type: 'none',
        // },
      },
    })
  }

  updateEditorElement(editorElement: EditorElement) {
    this.setEditorElements(
      this.editorElements.map((element) =>
        element.id === editorElement.id ? editorElement : element
      )
    )
  }

  /**
   * @description
   * 渲染图片、视频等到编辑区域上-核心函数
   */
  refreshElements() {
    const store = this
    if (!store.canvas) return
    const canvas = store.canvas
    store.canvas.remove(...store.canvas.getObjects())
    for (let i = 0; i < store.editorElements.length; i++) {
      const element = store.editorElements[i]
      console.log(element, 'element')

      switch (element.type) {
        case 'video': {
          console.log('elementid', element.properties.elementId)
          console.log(
            document.getElementById(element.properties.elementId),
            'logg'
          )

          // if (document.getElementById(element.properties.elementId) == null) {
          //   continue
          // }
          // debugger
          const videoElement = document.getElementById(
            element.properties.elementId
          )
          console.log(videoElement, 'ssaa')

          if (!isHtmlVideoElement(videoElement)) continue
          console.log(typeof fabric.CoverVideo, 'diing')
          console.log(CoverVideo, 'coverVideo')

          debugger
          const videoObject = new fabric.CoverVideo(videoElement, {
            name: element.id,
            left: element.placement.x,
            top: element.placement.y,
            width: element.placement.width,
            height: element.placement.height,
            scaleX: element.placement.scaleX,
            scaleY: element.placement.scaleY,
            angle: element.placement.rotation,
            objectCaching: false,
            selectable: true,
            lockUniScaling: true,
          })

          element.fabricObject = videoObject
          element.properties.imageObject = videoObject
          videoElement.width = 100
          videoElement.height =
            (videoElement.videoHeight * 100) / videoElement.videoWidth
          canvas.add(videoObject)
          canvas.on('object:modified', function (e) {
            if (!e.target) return
            const target = e.target
            if (target != videoObject) return

            const placement = element.placement
            const newPlacement: Placement = {
              ...placement,
              x: target.left ?? placement.x,
              y: target.top ?? placement.y,
              rotation: target.angle ?? placement.rotation,
              width:
                target.width && target.scaleX
                  ? target.width * target.scaleX
                  : placement.width,
              height:
                target.height && target.scaleY
                  ? target.height * target.scaleY
                  : placement.height,
              scaleX: 1,
              scaleY: 1,
            }
            const newElement = {
              ...element,
              placement: newPlacement,
            }
            store.updateEditorElement(newElement)
          })
        }
        default: {
          console.log('222')
        }
      }
    }
  }
}

export default Store
