<template>
  <div class="hello">
    <h1>father</h1>
    <h2>child count ：{{childNum}}</h2>
    <h2> vuex count:{{$store.state.count}} <br>   </h2>    
    <!-- 子组件给父组件传参：子组件内(add()函数)$emit触发父组件的预定义的触发函数 -->
    <Child :countNum=childNum v-on:childCount="countChildNum"></Child>
    <h2>child input value：{{msg||'null'}}</h2>
    <second-child :countNum=childNum></second-child>
  </div>
</template>

<script>
import Child from './child'
import SecondChild from './secondChild'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      childNum:0
    }
  },
    beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // console.log(to,from);
    // to.meta.keepAlive = true; //开启路由 页面 缓存
    next()
  },
    beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
  },
methods:{
  countChildNum(num){
      this.childNum = num;
  }
},
mounted(){
  // console.log(this.$events)
},
components:{
    Child,
    'second-child':SecondChild
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
