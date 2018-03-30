<template>
  <div class="child">
    <h1>vuex nameSpaced</h1>
    <slot></slot>
    <div class="child-blue">
      <h5> module a count:{{this.$store.state.a.count}}</h5>
        <!-- 启用了命名空间的 getter 和 action 会收到局部化的 getter，dispatch 和 commit。 -->
        <!-- 换言之，你在使用模块内容（module assets）时不需要在同一模块内额外添加空间名前缀。
              更改 namespaced 属性后不需要修改模块内的代码。 -->
      <h5> ( a.count + rootState.count ) * 2 = {{this.$store.getters['a/doubleCount']}}</h5>
      <button @click="$store.state.a.count++">this.$store.state.a.count++</button> <br> 以上不会被插件状态监听 且严格模式会报错 <br>
      <button @click="incrementChild"> count ++ </button>
      <button @click="countAddRootCount"> count + root count</button>
      <button @click="rootCountAdd"> rootCount++</button>
      <!-- <button @click="$store.dispatch('a/countAddRootCount')"> add root count </button> -->
      <!-- <button @click="$store.dispatch('a/rootCountAdd')">  rootCountAdd </button> -->
    </div>
  </div>
</template>

<script>
// import {mapState , mapActions , mapMutations} from "vuex"
import {createNamespacedHelpers} from "vuex"
const { mapState, mapActions ,mapMutations} = createNamespacedHelpers('a');
export default {
  name: 'nameSpaced',
  data () {
    return {
    }
  },
  methods:{
    clearCount(){
      this.$store.commit("clearCount")
    },
    ...mapMutations(['incrementChild']),
    ...mapActions(['countAddRootCount','rootCountAdd'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.child{
  padding: 10px;  
  margin: 10px auto;
  border: 1px solid #33e;
}
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
.box{
  padding: 12px;
  border: 1px solid #ddd;
  margin : 10px auto
}
</style>
