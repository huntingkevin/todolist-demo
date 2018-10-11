import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  render (h) {
    throw new TypeError('render error')
    // console.log('render function invoked')
    // return h('div', {}, this.text)
  },
  // 正式环境一般不用
  renderError (h, error) {
    return h('div', {}, error.stack)
  },
  // 捕捉错误
  errorCaptured () {
    // 与renderError类似，但会向上冒泡，正式环境可以使用
  }
})

// 同在Vue对象中加el
// app.$mount('#root')

// 会调用beforeUpdate和updated
// setInterval(() => {
//   app.text += 1
// }, 1000)

// 调用beforeDestroy和destroyed
setTimeout(() => {
  app.$destroy()
}, 1000)
