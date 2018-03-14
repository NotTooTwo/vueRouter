<template>
  <div class="child">
    <h1>router index child</h1>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error, itaque modi est asperiores quae perspiciatis totam optio dolores? Esse aspernatur odio numquam eos vero ut modi eum molestiae deleniti.
    </div>
    <router-link to='/secondChild/fromScondChild' replace>to secondChild</router-link>
  </div>
</template>

<script>

export default {
  name: 'indexChild',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0,
    }
  },

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
</style>
