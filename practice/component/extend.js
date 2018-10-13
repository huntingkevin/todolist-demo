import Vue from 'vue'

/**
 * 有两种extends的方法
 */
const component = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text" />
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: 123
    }
  },
  mounted () {
    // console.log('component mounted')
    console.log(this.$parent)
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// const CompVue = Vue.extend(component)

const component2 = {
  extends: component,
  data () {
    return {
      text: 234
    }
  }
}

/**
 * props要通过propsData传递
 */
// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'
//   },
//   data: {
//     text: 456
//   },
//   mounted () {
//     console.log('extend mounted')
//   }
// })

new Vue({
  name: 'ROOT',
  el: '#root',
  components: {
    Comp: component2
  },
  template: `<comp></comp>`
})
