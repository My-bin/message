// 实现使用函数调用message组件的逻辑
import { createVNode, render } from 'vue'
import Message from './message.vue'

// 准备dom容器
const div = document.createElement('div')
// 给div添加一个属性
div.setAttribute('class', 'message-container')
document.body.appendChild(div)
// 定时器标识
let timer = null

export default ({ type, text }) => {
  // 实现：根据message.vue渲染消息提示
  // 1. 导入组件
  // 2. 使用createVNode创建虚拟节点
  // 他的三个参数分别是，要变成虚拟节点的组件，接收的值，子节点
  const vnode = createVNode(Message, { type, text })
  // 3. 准备一个DOM容器
  // 4. 把虚拟节点渲染DOM容器中
  render(vnode, div)
  // 5. 开启定时，移出DOM容器内容
  clearTimeout(timer)
  timer = setTimeout(() => {
    // 销毁虚拟节点
    render(null, div)
  }, 2000)
}
