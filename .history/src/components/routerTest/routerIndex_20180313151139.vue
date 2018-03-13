<template>
  <div class="child">
    <h1>second child</h1>
    <h2>from child count : {{count}}</h2>
  </div>
</template>

<script>

export default {
  name: 'secondChild',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0,
    }
  },
  props:[
    'countNum'
  ]
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
</style>
