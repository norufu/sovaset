import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Split from '@/views/Split.vue'
import Haven from '@/views/Haven.vue'
import Bind from '@/views/Bind.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/split',
    name: 'Split',
    component: Split
  },
  {
    path: '/haven',
    name: 'Haven',
    component: Haven
  },
  {
    path: '/bind',
    name: 'Bind',
    component: Bind
  },
  {
    path: '/about',
    name: 'About'
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
