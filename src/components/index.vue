<template>
  <ul class="list">
    <li>
      <router-link to='/Communication'>Communication</router-link>
    </li>
    <li>  
      <router-link to='/routerIndex'>routerIndex</router-link>
    </li>
    <li>  
      <router-link to='/vuexIndex'>vuexIndex</router-link>
    </li>
    <li>  
      <router-link to='/debouce'> debouce + regexp + throttle</router-link>
    </li>
    <li>  
      <router-link to='/grid'>grid</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'indexPage',
  methods:{
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
ul.list>li{
  padding: 12px;
  border-bottom: 1px solid #f1f1f1
}
</style>