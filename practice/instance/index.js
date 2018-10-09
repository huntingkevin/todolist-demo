import Vue from 'vue'

// new Vue({
//   el: '#root',
//   template: '<div>this is content</div>'
// })

const app = new Vue({
  template: '<div>{{text}}</div>',
  data: {
    text: 0
  }
})

app.$mount('#root')

let i = 0
// app.text = 'text1'
setInterval(() => {
  i++
  // app.text += 1
  // 把a声明为reactive并赋值
  app.$set(app.obj, 'a', i)
  // app.$options.data += 1
  // app.$data.text += 1
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)

// 下一个值变化时会调用
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }

// console.log(app.$root === app)

// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)

// 快速定位某一个节点
// console.log(app.$refs)

// 一般不用，只有服务端渲染才会用
// console.log(app.$isServer)

// console.log(app.$isServer)

// 监听与出发事件
// app.$on('test', (a, b) => {
//   console.log(`test emitted ${a} ${b}`)
// })
// app.$emit('test', 3, 4)
// setInterval(() => {
//   app.$emit('test', 3, 4)
// }, 1000)
//
// app.$once('test2', (a, b) => {
//   console.log(`test2 emitted ${a} ${b}`)
// })
// setInterval(() => {
//   app.$emit('test2', 1, 2)
// }, 1000)

// 强制整个组件重新渲染，不建议使用
// app.$forceUpdate()
