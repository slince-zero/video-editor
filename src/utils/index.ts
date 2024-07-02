/**
 *
 * @description
 * .padStart(minDigits, '0')：如果字符串长度小于 minDigits，在字符串左边填充字符 '0' 直到字符串长度达到 minDigits。
 * 例如，appendZero(7, 2) 会返回 '07'，因为需要确保长度至少为 2。
 */
function appendZero(value: number, minDigits: number = 2) {
  return value.toString().padStart(minDigits, '0')
}

/**
 *
 * @description
 * 例如，如果 time = 125，minutes = 2，seconds = 5，appendZero(5, 2) 返回 '05'，因此最终返回 2:05。
 */
export function formatTimeToMinSec(time: number) {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${appendZero(seconds, 2)}`
}

/**
 *
 * @param time 毫秒数
 * @description  例如，如果 time = 125，mili = 5，appendZero(5, 2) 返回 '05'，因此最终返回 0:05
 */
export function formatTimeToMinSecMili(time: number) {
  const mili = Math.floor((time % 1000) / 10)
  return formatTimeToMinSec(time / 1000) + `.${appendZero(mili, 2)}`
}

/**
 * @description
 * 获取随机id，返回一个长度为 7 的字符串
 */
export function getUid() {
  // 使用基数36，这意味着字符串可能包含数字0-9和字母a-z。
  return Math.random().toString(36).substring(2, 9)
}

/**
 * @description
 * 类型保护函数,检查是否是 video 类型，如果函数返回 true，则 element 被推断为 HTMLVideoElement类型
 */
export function isHtmlVideoElement(
  element:
    | HTMLVideoElement
    | HTMLImageElement
    | HTMLCanvasElement
    | null
    | HTMLElement
): element is HTMLVideoElement {
  if (!element) return false
  return element.tagName === 'VIDEO'
}
