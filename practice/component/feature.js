import Vue from 'vue'

/**
 * slot插槽
 * 具名插槽
 * 作用域插槽 slot-scope
 *
 * ref的调用在组件上和html标签的区别
 *
 * 越级拿属性：provide方法和inject属性，必须要有上下级关系, provide不提供双向绑定功能，可以return一个实现了get方法的对象
 * 来实现，在每次调用value的时候都会调用一次get，但是官方不推荐这种实现
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
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //       <slot name="body"></slot>
  //     </div>
  //     <!--<slot></slot>-->
  //   </div>
  // `,
  template: `
    <div :style="style">
      <slot value="456" aaa="111"></slot>
      <child-component></child-component>
    </div>
  `,
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
  template: `
    <div>
      <comp-one ref="comp">
        <!--<span>{{value}}</span>-->
        <span slot-scope="props" ref="span">{{props.value}}: {{props.aaa}}</span>
      </comp-one>
        <input type="text" v-model="value" />
    </div>
  `
})
