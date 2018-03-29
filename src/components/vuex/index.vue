<template>
  <div class="child">
    <h1>vuexIndex</h1>  
    <VuexChild>
      <div>
        <button @click="aAsynTest">a asyn action test</button>
        <button @click="$store.commit('increment')">add vuex count ( commit increment )</button><br>
        <button @click="$store.dispatch('increment',{time:500})"> add vuex count ( dispatch increment ) timeOut 500</button> <br>
        <button @click="addCount"> add vuex count ( dispatch increment payload ) timeOut 1000 </button>
        <button @click="countUp({time:1500})">countUp time 1500</button>
        <h5>$store.state.count:</h5>
        <ul class="num-box">
            <li v-for="(item,key) in $store.state.count">{{key}}</li>
        </ul>
      </div> 
    </VuexChild>
    <h5>this.$store.getters.screenListByIsBoss:</h5>
    <ul class="list">
      <li><span>id</span><span>name</span></li>
      <li v-for="item in screenListByIsBoss">
        <span>{{item.id}}</span>
        <span>{{item.name}}</span>
      </li>
    </ul>
    <h5>this.$store.getters.id===4:</h5>
    <ul class="list">
      <li><span>id</span><span>name</span></li>      
      <li v-for="item in screenListById(4)">
        <span>{{item.id}}</span>
        <span>{{item.name}}</span>
      </li>
    </ul>
    
  </div>
</template>

<script>
import VuexChild from "./child"
import {mapState, mapGetters, mapActions} from "vuex"
export default {
  name: 'vuexIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // count:store.state,
      isShowP:false
    }
  },
  created(){
    console.log(this.$store.state.count)
  },
  // 获取getter
  // computed: {
  //   screenList () {
  //     return this.$store.getters.screenList
  //   }
  // },
  // 获取state
  // computed: mapState({
  //   // 箭头函数可使代码更简练
  //   count: state => state.count,

  //   // 传字符串参数 'count' 等同于 `state => state.count`
  //   countAlias: 'count',

  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   countPlusLocalState (state) {
  //     return state.count + this.localCount
  //   }
  // }),
  computed:{
    // 对象展开符
    ...mapState({
      countNum:state=>state.count
    }),
    ...mapGetters(['screenListByIsBoss','screenListById'])
  },
  components:{VuexChild},
  methods:{
    ...mapActions({
      countUp:'increment'
    }),
    aAsynTest(){
      this.$store.dispatch('aAsynTest').then(()=>{setTimeout(()=>{
          console.log('asyn test was ended before 1s')
          this.$store.commit('increment');
          console.log('call incrememnt');
          },1000)
        }
      )
    },
    addCount(){
      this.$store.dispatch(
        {
          type:'increment',
          time:1000
          }
      )
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin: 10px auto;
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
.child{
  padding: 10px;
  border: 1px solid #e4393c;
  line-height: 30px;
}
.num-box{
  padding: 0;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  width: 302px;
  border: 1px solid #42b983;
  min-height: 30px;
}
.num-box>li{
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
  border: 1px solid #ff9e01;
  text-align: center;
  line-height: 30px;
}
.list{
  border:1px solid #d9d8ed;
  margin: 10px auto;
}
.list>li{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.list>li:first-child{
  font-weight: bold;
}
.list>li>span{
  flex: 1;
  text-align: center;
}
.list>li>span:not(:last-child){
  border-right: 1px solid #d9d8ed
}
.list>li:not(:last-child){
  border-bottom: 1px solid #d9d8ed;
}
</style>
