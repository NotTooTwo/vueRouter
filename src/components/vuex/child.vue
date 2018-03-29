<template>
  <div class="child">
    <h1>vuex child</h1>
    <slot></slot>
    <div class="box">$store.state.count:{{this.$store.state.count}}</div>
    <div>
      <button @click="clearCount">clear</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'child',
  data () {
    return {
    }
  },
  methods:{
    clearCount(){
      this.$store.commit("clearCount")
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
.child{
  padding: 10px;
  border: 1px solid #42b983;

}
.box{
  padding: 12px;
  border: 1px solid #ddd;
  margin : 10px auto
}
</style>
