<template>
  <div class="child">
    <div>
      <indexP></indexP>
    </div>
    <h1 v-for = 'n in 100'>router index</h1>
      
  </div>
</template>

<script>

export default {
  name: 'secondChild',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0,
      isShowP:false
    }
  },
  methods:{
    showP(){

    }
  },
  components:{
    'indexP':function(res){
        require(['./indexP.vue'],res);
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
  border: 1px solid #e4393c;
  line-height: 30px;
}
</style>
