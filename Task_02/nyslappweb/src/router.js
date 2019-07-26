import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import( /* webpackChunkName: "about" */ './views/Schedule.vue')
    },
     {
       path: '/field',
       name: 'field',
       component: () => import( /* webpackChunkName: "about" */ './views/Field.vue')
     },
      {
        path: '/team',
        name: 'team',
        component: () => import( /* webpackChunkName: "about" */ './views/Team.vue')
      },
   {
     path: "*",
     component: NotFound
   },
  ]
  
})