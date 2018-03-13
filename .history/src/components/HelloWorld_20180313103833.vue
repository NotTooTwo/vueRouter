<template>
  <div class="hello">
    <h1>child count ：{{childNum}}</h1>
    <!-- 子组件给父组件传参：子组件内(add()函数)$emit触发父组件的预定义的触发函数 -->
    <Child :countNum=1 v-on:childCount="countChildNum"></Child>
    <h1>child input value：{{msg}}</h1>
  </div>
</template>

<script>
import Child from './child'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      childNum:1
    }
  },
methods:{
  countChildNum(num){
      this.childNum = num;
  }
},
mounted(){],}
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
