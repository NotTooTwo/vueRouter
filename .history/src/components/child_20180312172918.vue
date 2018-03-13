<template>
  <div class="child">
    <h1>child</h1>
    <h2>count : {{count}}</h2>
    <button>add</button>
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 1,
    }
  },
  mounted:{
    add(){
      this.count++
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
