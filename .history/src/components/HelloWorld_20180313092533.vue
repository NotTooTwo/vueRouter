<template>
  <div class="hello">
    <h1>{{ childNum }}</h1>
    <h2>Essential Links</h2>
    子组件给父组件传参：子组件触发函数内 触发父组件的
    <Child :countNum=1 v-on:childCount="countChildNum"></Child>
  </div>
</template>

<script>
import Child from './child'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      childNum:1
    }
  },
methods:{
  countChildNum(num){
      this.childNum = num;
  }
},
components:{
    Child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
