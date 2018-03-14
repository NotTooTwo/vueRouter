import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/test/HelloWorld'
import RouterIndex from '@/components/routerTest/index/routerIndex'
import IndexChild from '@/components/routerTest/index/indexChild'
import SecondChild from '@/components/routerTest/index/secondChild'

import RouterMain from '@/components/routerTest/main/routerMain'
import RedirectPage from '@/components/routerTest/main/redirectPage'

// vuex
import VuexIndex from '@/components/vuex/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
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
    }
  ],
})
