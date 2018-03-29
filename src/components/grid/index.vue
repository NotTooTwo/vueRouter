<template>
  <div class="child">
    <div class="grid-box">
        <div v-for='n in 10'>child{{n}}</div>
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

  created(){
  },
  watch:{
  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
.child{
  padding: 10px;
  border: 1px solid #f93;

}
.grid-box{
  border: #42b983;
  display: grid;
  /* display: inline-grid */
  /* grid-template-rows: 100px 100px 100px 100px; */
  /* repeat() :创建多个等尺寸的轨道 */
  grid-template-rows:repeat(10, 100px);
  /* grid-template-columns: 50px 1fr 2fr; */
  grid-template-columns:70px repeat(1,1fr) 70px;
  /* grid-column-gap: 10px; */
  /* grid-row-gap: 12px; */
  /* 'grid-gap': 网格间距 */
  grid-gap: 10px 12px;
}
</style>
