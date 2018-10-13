import Vue from 'vue'

/**
 * template最后会变编译成render方法
 * createElement是虚拟节点
 */

const childComponent = {
  template: '<div>child component: {{data.value}}</div>',
  inject: ['yeye', 'data'],
  mounted () {
    console.log(this.yeye, this.value)
  }
}

const component = {
  name: 'comp',
  components: {
    childComponent
  },
  render (createElement) {
    return createElement('div', {
      style: this.style
    }, [
      this.$slots.default,
      this.prop1
    ])
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  provide () {
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      data
    }
  },
  el: '#root',
  data () {
    return {
      value: '234'
    }
  },
  mounted () {
    console.log(this.$refs.comp, this.$refs.span)
  },
  render (createElement) {
    return createElement('comp-one',
      {
        ref: 'comp',
        props: {
          prop1: this.value
        }
      },
      [
        createElement('span', {
          ref: 'span'
        }, this.value)])
  }
})
