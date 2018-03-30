
import Vue from 'vue'

Vue.use(Vuex)

import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'//要注意，logger 插件会生成状态快照，所以仅在开发环境使用。

const moduleA = {
  // 命名空间
  namespaced: true,
  state: { count: 0 },
  mutations: {
    incrementChild (state) {
        // mutations中只能使用同步方法，否则会使状态监听失效
        // setTimeout(function(){
        //     state.count++;
        // },500)
      // 这里的 `state` 对象是模块的局部状态
      state.count++;
    }
  },
  // 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：
  actions:{
    countAddRootCount(context){
      context.state.count+=context.rootState.count
    },
    // 在全局命名空间内分发 action 或提交 mutation，将 { root: true } 作为第三参数传给 dispatch 或 commit 即可。
    rootCountAdd({state,commit,dispatch}){
      commit('increment',null,{root:true})
    }
  },
  // 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：
  getters: {
    doubleCount (state,getters,rootState) {
      console.log(state,getters,rootState)
      return( state.count + rootState.count)* 2
    },
  }
}
/* eslint-disable no-new */
export default new Vuex.Store({
    plugins: [createLogger()],//要注意，logger 插件会生成状态快照，所以仅在开发环境使用。
    // 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
    strict: true,
    // 严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。

// 类似于插件，我们可以让构建工具来处理这种情况：
    // strict: process.env.NODE_ENV !== 'production',
  modules:{
    a:moduleA
  },
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