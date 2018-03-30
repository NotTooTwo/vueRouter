<template>
  <div class="child">
    <h1>this is a asyn component</h1>
  </div>
</template>

<script>

export default {
  name: 'asynOage',
  data () {
    return {
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
