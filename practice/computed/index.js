import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>Number: {{number}}</p>
      <p>FullName: {{fullName}}</p>
      <p><input type="text" v-model="number"></p>
      <p>First Name: <input type="text" v-model="firstName"></p>
      <p>Last Name: <input type="text" v-model="lastName"></p>
      <p>Name: <input type="text" v-model="name"></p>
      <p>Obj.a: <input type="text" v-model="obj.a"></p>
    </div>
  `,
  data: {
    firstName: 'Kev',
    lastName: 'Lin',
    number: 0,
    fullName: ' ',
    obj: {
      a: '123'
    }
  },

  // computed性能开销比定义一个方法小，有缓存
  computed: {
    // 写法一：
    name () {
      console.log('new name')
      return `${this.firstName} ${this.lastName}`
    }

    // 写法二：
    // name: {
    //   get () {
    //     console.log('new name')
    //     return `${this.firstName} ${this.lastName}`
    //   },
    //   // 不建议这么做
    //   set (name) {
    //     const names = name.split(' ')
    //     this.firstName = names[0]
    //     this.lastName = names[1]
    //   }
    // }
  },

  /*
  * watch和computed最好都不好改变任何值，如果必须更改，一定不要更改在监听的值
  * */

  // watch: {
  //   firstName: {
  //     handler (newName, oldName) {
  //       this.fullName = newName + ' ' + this.lastName
  //     },
  //     immediate: true,
  //     deep: true
  //   }
  // },
  watch: {
    obj: {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true,
      deep: true
    }
  },
  mounted () {
    this.obj = {
      a: '345'
    }
  },
  methods: {
    getName () {
      console.log('get name method')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
