<template>
  <div class="child">
    <h1>router redirect</h1>    
    <div>test for redirect  <br>   
    </div>
  </div>
</template>

<script>

export default {
  name: 'routerMain',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0,
      isShowP:false
    }
  },
  methods:{
    showP(){
      this.isShowP = !this.isShowP
    } 
  },
  // components:{
  //   // 'indexP':function(res){
  //   //    var a=  require(['./indexP.vue'],res);
  //   //   console.log(a)       
  //   // }
  // }

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
</style>
