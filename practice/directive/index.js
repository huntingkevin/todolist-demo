import Vue from 'vue'

/**
 * v-text
 * v-html
 * v-show: 设置display
 * v-if
 * 如果只是想显示／隐藏，建议使用v-show，因为v-if会把元素节点都删掉，性能不如v-show
 * v-else, v-else-if
 * v-for, 注意加:key
 * v-on
 * v-bind
 * v-model, v-model.number, v-model.trim, v-model.lazy
 * v-pre
 * v-cloak, v-once
 */

new Vue({
  el: '#root',
  template: `
    <div>
      <div v-if="active">{{text}}</div>
      <div v-else>else content</div>
      <div v-show="active">{{text}}</div>
      <div v-html="html"></div>
      <input type="text" v-model="text" />
      <input type="checkbox" v-model="active" />
      <div >
        <input type="checkbox" :value="1" v-model="arr" />  
        <input type="checkbox" :value="2" v-model="arr" />  
        <input type="checkbox" :value="3" v-model="arr" />  
      </div>
      <div>
        <input type="radio" value="one" v-model="picked">
        <input type="radio" value="two" v-model="picked">
      </div>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}}: {{index}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj">{{val}}: {{key}}: {{index}}</li>
      </ul>
    </div>
  `,
  data: {
    picked: '',
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    text: 0,
    active: true,
    html: '<span>this is html</span>'
  }
})
