/**
 * @description
 * 共用的上传文件按钮（video, audio, image）
 */
type ImageChooseButton = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  accept: string
}

const SharedButton = (props: ImageChooseButton) => {
  return (
    <label htmlFor="fileInput" className={props.className}>
      <input
        id="fileInput"
        type="file"
        accept={props.accept}
        className="hidden"
        onChange={props.onChange}
      />
      Upload
    </label>
  )
}
export default SharedButton
