<template>
  <div class="child" ref="scrollBox">
    <div>
      <h1>debounce</h1>    
      <h3 @click="ballShow=false">search ball will show where window is scrolling</h3>
      <p v-html='afterSearch' class="msg-box"></p>
      <div class="ball" :class="{show:ballShow}" @click="showSearch=true;ballShow=false">search</div>
    </div>
    <div class="search-box" :class="{show:showSearch}">
      <!-- <div>  -->
        <input type="text" @input="keyDownThrottle()" v-model="searchKey" placeholder="palce enter the keyword">
        <span @click="showSearch=false;ballShow=true;searchKey=''">close</span>
      <!-- </div> -->
    </div>
    <div class="search-control" :class="{show:searchKey}">
      <!-- <div @click="searchDirection(-1)">上一个</div> -->
      <div @click="searchDirection()">下一个</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'debouceIndex',
  data () {
    return {
      msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis consequatur accusamus sunt non, aliquam quo ea, cupiditate atque enim perspiciatis nobis minus velit quos sed. Maxime accusantium sequi veritatis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minus possimus quidem explicabo eaque quisquam, cupiditate officiis nisi praesentium expedita accusantium odit fugiat totam ex non, earum, numquam tenetur aspernatur.        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit vero explicabo fugit facere esse! Sint id magni asperiores, earum alias suscipit cupiditate expedita ea quae praesentium. Quod repellendus impedit praesentium!        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ex inventore cum aperiam deserunt corporis sint, perspiciatis accusamus provident quam facere ad explicabo tenetur? Deleniti ut libero excepturi aliquid accusantium?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ex inventore cum aperiam deserunt corporis sint, perspiciatis accusamus provident quam facere ad explicabo tenetur? Deleniti ut libero excepturi aliquid accusantium?',
      afterSearchMsg:'',
      // count:store.state,
      isShowP:false,
      ballShow:true,
      showSearch:true,
      searchKey:'',
      searchIndex:0,
    }
  },
  created(){
    this.afterSearchMsg = msg;
  },
  mounted(){
    console.log(0);
    console.log(this.$refs.scrollBox.style)
    //滚动监听需要在组件销毁/组件销毁前移除
    window.addEventListener('scroll',this.debounce(this.debounceDo,1000),false)
  },
  beforeDestroy(){
    window.removeEventListener('scroll',this.debounce(this.debounceDo,1000),false);
    console.log('移除滚动监听')

  },
  computed:{
    afterSearch(){
      var _this =this
      if(this.searchKey===''||this.searchKey===' '){
        // 重置索引起始
        this.searchIndex = 0;
        return this.msg ;
      }else{
        return _this.searchFun() 
      }
    }
  },
  methods:{
    keyDownThrottle(){
      var _this  = this;
      var keyInterval = '';
      return function(){
        if(keyInterval){
          clearInterval(keyInterval)
        }
        keyInterval = setInterval(function(){
             var msg = _this.msg ;
        var reg = new RegExp(_this.searchKey);
        var index = _this.searchIndex;

        // string.indexOf(searchvalue,start)
        _this.searchIndex = index = msg.indexOf(_this.searchKey,index);

        if(index===-1){
          return msg
        }

        msg =  msg.slice(0,index)+"<span style='background-color:#42b983;color:#fff'>"+_this.searchKey+"</span>"+msg.slice(index+_this.searchKey.length,msg.length)
        console.log(msg)
        },1000)
      }
    },
    searchFun(_this = this){
         var msg = _this.msg ;
        var reg = new RegExp(_this.searchKey);
        var index = _this.searchIndex;

        // string.indexOf(searchvalue,start)
        _this.searchIndex = index = msg.indexOf(_this.searchKey,index);

        if(index===-1){
          return msg
        }

        return msg.slice(0,index)+"<span style='background-color:#42b983;color:#fff'>"+_this.searchKey+"</span>"+msg.slice(index+_this.searchKey.length,msg.length)
    },
    searchDirection(direction){
      if(direction===-1){
        this.searchIndex++
      }else{
        if(this.searchIndex === -1){
          this.searchIndex =0
        }
        this.searchIndex++
      }
    },
      // 将会包装事件的 debounce 函数
    debounce(fn, delay) {
      let _this  = this;
      // 维护一个 timer
      let timer = null;
      return function() {
        if(_this.ballShow){
          _this.ballShow = false;
        }
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
      }
    },
    // 当用户滚动时被调用的函数
    debounceDo() {
      if(!this.showSearch){
      this.ballShow = true;      
      }
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
  overflow: hidden
}
.ball{
  position: fixed;
  bottom: 50px;
  left: -50px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  background: #42b983;
  transition: all 100ms;
}
.ball.show{
  left: 12px
}
.search-box{
  position: fixed;
  top: -100px;
  left: 0;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 500ms linear;  
  opacity: 0
}

.search-box>input{
  width: 100%;
  height: 100%;
  padding: 0 12px;
  flex: 1;
  outline: #42b983;
}
.search-box>span{
  width: 50px;
  height: 100%;
  line-height: 40px;
  text-align: center;
  border: 1px solid #999;
  border-left: none;
  background: #fff;
}
.search-box.show{
  top: 70px;
  opacity: 1
}
.search-control{
  position: fixed;
  opacity: 0;
  bottom: -112px;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 12px;
  width: 100%;
  height: 40px;
  transition:all 500ms linear
}
.search-control.show{
  bottom: 12px;
  opacity: 1;
}
.search-control>div{
  flex: 1;
  background: #fff;
  color: #333;
  font-size: 14px;
  border: 1px solid #42b983;
}
.search-control>div:not(:last-child){
  margin-right: 12px
}
</style>
