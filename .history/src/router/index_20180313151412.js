import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/test/HelloWorld'
import HelloWorld from '@/components/routerTest/routerIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
