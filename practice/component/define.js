import Vue from 'vue'

// const data = {
//   text: 0
// }

/**
 * props是外部组件用来限制内部组件的展示行为的,推荐使用单项数据流
 */
const component = {
  // props: {
  //   active: Boolean,
  //   propOne: String
  // },
  props: {
    active: {
      // type: Boolean,
      // required: true,
      // default {} (),
      validator (value) {
        return typeof value === 'boolean'
      }
    },
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
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

/**
 * 错误演示
 */
// const component = {
//   template: `
//     <div>
//       <input type="text" v-model.number="text" />
//     </div>
//   `,
//   data () {
//     return data
//   }
// }

// 定义了一个叫Comp的组件，注意命名。这是全局声明组件的方式
// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  template: `
    <div>
      <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one :active="true" prop-one="text2"></comp-one>
    </div>
  `,
  data: {
    prop1: 'text1'
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  mounted () {
    console.log(this.$refs.comp1)
  }
})
