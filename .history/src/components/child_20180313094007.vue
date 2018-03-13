<template>
  <div class="child">
    <h1>child</h1>
    <h2>count : {{count}}</h2>
    <button @click='add'>add</button>
    <div>
      <input type="text" v-model="childVal"><button @click="sendMsg">send to father</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0,
      childVal:'哈哈'
    }
  },
  props:[
    'countNum'
  ],
  created(){
    this.count=this.countNum;
  },
  methods:{
    add(){
      ++this.count;
      this.$emit('childCount',this.count)      
    },
    sendMsg(){
      console.log
      this.$parent.msg=this.childVal;
    }
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
