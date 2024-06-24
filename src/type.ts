import { fabric } from 'fabric'
/**
 * @description
 * menu 的图标的各个类型
 */
export type MenuOption =
  | 'Video'
  | 'Audio'
  | 'Text'
  | 'Image'
  | 'Color'
  | 'Download'

/**
 * @description
 * 通用类型，定义编辑器中基础元素的结构，接受两个范型参数，T 和 P
 */
type EditorElementBase<T extends string, P> = {
  readonly id: string
  fabricObject?: fabric.Object
  name: string
  // 必须是字符串类型
  readonly type: T
  // 元素的属性集合
  properties: P
}

/**
 * @description
 * 继承自 EditorElementBase，用于定义视频元素的结构
 */
type VideoEditorElement = EditorElementBase<
  'video',
  {
    src: string
    elementId: string
    imageObject?: fabric.Image
  }
>

/**
 * @description
 * 继承自 EditorElementBase，用于定义图片元素的结构
 */
type ImageEditorElement = EditorElementBase<
  'image',
  {
    src: string
    elementId: string
    imageObject?: fabric.Object
  }
>

/**
 * @description
 * 继承自 EditorElementBase，用于定义音频元素的结构
 */
type AudioEditorElement = EditorElementBase<
  'audio',
  {
    src: string
    elementId: string
  }
>

/**
 * @description
 * 继承自 EditorElementBase，用于定义文本元素的结构
 */
type TextEditorElement = EditorElementBase<
  'text',
  {
    text: string
    fontSize: number
    fontWeight: number
    // 一个 fabric.Text 对象的数组，表示分割后的文本片段。
    splittedTexts: fabric.Text[]
  }
>

/**
 * @description
 * 中间编辑器中，显示的视频、图片、音频、文本类型
 */
export type EditorElement =
  | VideoEditorElement
  | ImageEditorElement
  | AudioEditorElement
  | TextEditorElement
