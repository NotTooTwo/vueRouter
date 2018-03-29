import Vue from 'vue'
import Router from 'vue-router'
// vuex
import VuexIndex from '@/components/vuex/index'
Vue.use(Router)

import DemoList from '@/components/index'
import Communication from '@/components/communication/index'
import RouterIndex from '@/components/routerTest/index/routerIndex'
import IndexChild from '@/components/routerTest/index/indexChild'
import SecondChild from '@/components/routerTest/index/secondChild'

import RouterMain from '@/components/routerTest/main/routerMain'
import RedirectPage from '@/components/routerTest/main/redirectPage'

import Debouce from '@/components/debouce/index'

import Grid from '@/components/grid/index'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DemoList',
      component: DemoList,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Communication',
      name: 'Communication',
      component: Communication,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/routerIndex',
      component: RouterIndex,
      children:[
        {
          path:'/',
          component: IndexChild          
        },
        {
          path:'/secondChild/:name',
          name:'SecondChild',
          component:SecondChild,
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
      component:RouterMain,
      children:[
            {
              path:'/',
              component:RedirectPage
            },
            {
              path:'/redirectPage/:name',
              redirect: { name: 'SecondChild' },
              // props:true,
              component:RedirectPage
            }
          ]

    },
    {
      path:'/vuexIndex',
      name:'VuexIndex',
      component:VuexIndex
    },
    {
      path:'/debouce',
      name:'Debouce',
      component:Debouce
    },
    {
      path:'/grid',
      name:'Grid',
      component:Grid
    }
  ],
})
