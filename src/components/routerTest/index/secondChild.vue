<template>
  <div class="child">
    <h1>router second child</h1>
    <div>url带参：name = <span class="mark">{{$route.params.name}}</span>(props.name:{{pname}})</div>
    <div class="child">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nemo assumenda rerum repudiandae laudantium ut, provident excepturi fugit porro nostrum id asperiores earum facilis sequi alias sapiente, animi molestiae nisi. 
    </div>
    <div>
      <router-link to='/routerMain'>to routerMain</router-link>
    </div>
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
  computed:{
    pname(){
      console.log(this.name)
      return this.name
    }
  },
  props:['name']

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
  color: #b94283;
}
.child{
  padding: 10px;
  border: 1px solid  #e4c;
  line-height: 30px;
}
.mark{
  color: aquamarine
}
</style>
