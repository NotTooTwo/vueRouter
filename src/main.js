// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false

Vue.use(Vuex)
/* eslint-disable no-new */
const store = new Vuex.Store({
  state:{
    count:0,
    num:0,
    countNum:0,
    list:[
      {id:1,name:'name1',isBoss:true},
      {id:2,name:'name2',isBoss:true},
      {id:3,name:'name3',isBoss:false},
      {id:4,name:'name4',isBoss:false},
      {id:5,name:'name5',isBoss:false},
      {id:6,name:'name6',isBoss:false}
    ]
  },
  getters:{
    screenListByIsBoss:state=>{
      return state.list.filter(item=>item.isBoss)
    },
    screenListById:(state)=>(id)=>{
      return [state.list.find(item=>item.id===id)]
    }
  },
  mutations:{
    increment(state){
      state.count++;
    },
    clearCount(state){
      state.count=0
    }
  },
  actions:{
    increment(context,option){
      console.log(option);
      setTimeout(()=>{
        context.commit('increment');
      },option.time)
    },
    aAsynTest ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    }
  }
})
var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
