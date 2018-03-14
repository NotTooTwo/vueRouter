<template>
  <div id="app">
    <div class="back"><span @click=goBack>back</span></div>
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"/>    
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>  
    <!-- http://www.jb51.net/article/126437.htm 路由缓存       -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
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
  padding-top: 50px;
  position: relative;
}
#app .back{
  height: 50px;
  line-height: 50px;
  background: #2c3e50;
  width: 100%;
  color:#fff;
  font-size: 17px;
  font-weight: bold;
  padding:0 12px;
  text-align: left ;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
