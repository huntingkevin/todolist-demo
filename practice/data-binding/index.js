import Vue from 'vue'

/*
vue模版里能访问的变量是 1. data里定义的变量，2. js定义的变量。外面自定义的全局变量是访问不到的
*/
new Vue({
  el: '#root',
  // template: `
  //   <!--<div v-bind:id="aaa" v-on:click="handleClick">-->
  //   <div :id="aaa" @click="handleClick">
  //     <!--{{isActive ? 'active' : 'not active'}}-->
  //     <!--{{arr.join(' ')}}-->
  //     <!--{{html}}-->
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <!-- 动态class写法1：-->
    <!--<div :class="{ active: !isActive }">-->
    
    <!-- 动态class写法2-->
    <!--<div :class="[isActive ? 'active' : '']">-->
    
    <!-- 动态class写法3 -->
    <!--style如果有相同的属性，后面的会替代前面的-->
    <div 
      :class="[{ active: isActive }]"
      :style="[styles, styles2]"  
    >
       <!--{{isActive ? 'active' : 'not active'}}-->
       <!--{{arr.join(' ')}}-->
       <!--{{html}}-->
       <!--<p v-html="html"></p>-->
      <p>{{getJoinedArr(arr)}}</p>
     </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'main',
    styles: {
      color: 'red',
      appearance: 'none'
    },
    styles2: {
      color: 'black'
    }
  },
  // computed: {
  //   classNames () {
  //
  //   }
  // },
  methods: {
    handleClick () {
      alert('clicked') // eslint-disable-line
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
