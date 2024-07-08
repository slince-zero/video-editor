import { fabric } from 'fabric'

/**
 * @description
 * 它是 fabric.Image 类的扩展，用于在 Fabric.js 画布上渲染视频元素，同时支持裁剪和自定义滤镜
 */
export const CoverVideo = fabric.util.createClass(fabric.Image, {
  type: 'coverVideo', // 指定对象类型为 coverVideo
  customFilter: 'none', // 自定义滤镜的默认值为 none
  disableCrop: false, // 是否禁用裁剪功能，默认是 false
  cropWidth: 0, // 裁剪区域的宽度，默认为 0
  cropHeight: 0, // 裁剪区域的高度，默认为 0

  // 初始化
  initialize(element: HTMLVideoElement, options: any) {
    options = options || {}

    // 将默认裁剪宽高与传入的选项合并
    options = Object.assign(
      {
        cropHeight: this.height,
        cropWidth: this.width,
      },
      options
    )
    // 调用父类 fabric.Image 的初始化方法
    this.callSuper('initialize', element, options)
  },

  // 计算裁剪区域
  getCrop(
    image: { width: number; height: number },
    size: { width: number; height: number }
  ) {
    const width = size.width // 目标尺寸的宽度
    const height = size.height
    const aspectRatio = width / height //目标尺寸的宽高比

    let newWidth
    let newHeight

    const imageRatio = image.width / image.height // 计算图像的宽高比

    if (aspectRatio >= imageRatio) {
      newWidth = image.width
      newHeight = image.height
    } else {
      newWidth = image.height * aspectRatio
      newHeight = image.height
    }

    // 计算裁剪区域的起始坐标
    const x = (image.width - newWidth) / 2
    const y = (image.height - newHeight) / 2

    return {
      cropX: x,
      cropY: y,
      cropWidth: newWidth,
      cropHeight: newHeight,
    }
  },

  // 在 canvas 上渲染视频元素
  _render(ctx: CanvasRenderingContext2D) {
    if (this.disableCrop) {
      this.callSuper('_render', ctx)
      return
    }

    const width = this.width
    const height = this.height
    const crop = this.getCrop(this.getOriginalSize(), {
      width: this.getScaledWidth(),
      height: this.getScaledHeight(),
    })

    const { cropX, cropY, cropWidth, cropHeight } = crop
    ctx.save()
    // const customFilter: EffecType = this.customFilter
    // ctx.filter = getFilterFromEffectType(customFilter)
    ctx.drawImage(
      this._element,
      Math.max(cropX, 0),
      Math.max(cropY, 0),
      Math.max(1, cropWidth),
      Math.max(1, cropHeight),
      -width / 2,
      -height / 2,
      Math.max(0, width),
      Math.max(0, height)
    )
    ctx.filter = 'none'
    ctx.restore()
  },
})

declare module 'fabric' {
  namespace fabric {
    class CoverVideo extends Image {
      type: 'coverVideo'
      disableCrop: boolean
      cropWidth: number
      cropHeight: number

      constructor(element: HTMLVideoElement, options: any)
    }
  }
}

fabric.CoverVideo = CoverVideo
