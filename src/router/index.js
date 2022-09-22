import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HomeView from '@/components/HomeView'
import TestView from '@/components/TestView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },

    {
      path: '/HomeView',
      name: 'HomeView',
      component: HomeView
    },

    {
      path: '/TestView',
      name: 'TestView',
      component: TestView
    }
  ]
})
