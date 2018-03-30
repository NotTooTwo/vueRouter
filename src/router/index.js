import Vue from 'vue'
import Router from 'vue-router'
// vuex
import VuexIndex from '@/components/vuex/index'
Vue.use(Router)

// import DemoList from '@/components/index'
// import Communication from '@/components/communication/index'
// import RouterIndex from ''
// import IndexChild from '@/components/routerTest/index/indexChild'
// import SecondChild from '@/components/routerTest/index/secondChild'

// import RouterMain from '@/components/routerTest/main/routerMain'
// import RedirectPage from '@/components/routerTest/main/redirectPage'

// import Debouce from '@/components/debouce/index'

// import Grid from '@/components/grid/index'



export default new Router({
  routes: [
    {
      path: '/',
      name: 'DemoList',
      component: () => import('@/components/index'),          
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Communication',
      name: 'Communication',
      component: () => import('@/components/communication/index'),          
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/routerIndex',
      component: ()=>import('@/components/routerTest/index/routerIndex'),
      children:[
        {
          path:'/',
          component: () => import('@/components/routerTest/index/indexChild'),          
        },
        {
          path:'/secondChild/:name',
          name:'SecondChild',
          component: () => import('@/components/routerTest/index/secondChild'),
          props:true
        },
        {
          path:'/asynPage',
          name:'asynPage',
          // component: resolve=> require(['@/components/routerTest/index/asynPage'],resolve),
          component: () => import('@/components/routerTest/index/asynPage'),
          props:true
        }
      ],
      beforeEnter: (to, from, next) => {
        // ...
        console.table({to:to,form:from});
        next(true)
      }
    },
    {
      path:'/routerMain',
      component:() => import('@/components/routerTest/main/routerMain'),
      children:[
            {
              path:'/',
              component:() => import('@/components/routerTest/main/redirectPage'),
            },
            {
              path:'/redirectPage/:name',
              redirect: { name: 'SecondChild' },
              // props:true,
              component:() => import('@/components/routerTest/main/redirectPage'),
            }
          ]

    },
    {
      path:'/vuexIndex',
      name:'VuexIndex',
      component:()=>import('@/components/vuex/index')
    },
    {
      path:'/debouce',
      name:'Debouce',
      component:()=>import('@/components/debouce/index')
    },
    {
      path:'/grid',
      name:'Grid',
      component:()=>import("@/components/grid/index")
    }
  ],
})
