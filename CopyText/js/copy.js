/**
 * 复制文本
 * @param {String} value 需要复制的文本
 */
export const copy = value => {
  if (!value) return console.log('无复制内容')
  // 判断当前环境是否支持navigator.clipboard 对象
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(value).then(() => {
      console.log('复制成功')
    }).catch(() => {
      console.log('复制失败')
    })
  } else {
    // 动态创建 input 标签
    const input = document.createElement("input")
    // 将该 input 设为 readonly 防止 iOS 下自动唤起键盘
    input.setAttribute('readonly', true)
    // 将要 copy 的值赋给 input 标签的 value 属性
    input.setAttribute('value', value)
    // 将 input 插入到 body 中
    document.body.appendChild(input)
    // 选中值并复制
    input.select()
    input.setSelectionRange(0, input.value.length)
    const result = document.execCommand('copy')
    if (result) {
      console.log('复制成功')
    } else {
      console.log('复制失败')
    }
    // 操作完成后删除标签
    document.body.removeChild(input)
  }
}