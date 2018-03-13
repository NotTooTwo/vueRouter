<template>
  <div id="app">
    <div class="back"><span>back</span></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#app .back{
  height: 50px;
  line-height: 50px;
  background: #2c3e50;
  width: 100%;
  color: #f1f1f1;
  font-size: 17px;
  font-weight: bold;
  padding:0 12px;
  text-align: left ;
}
#app .back.canBack{
  color:#fff 
}
</style>
