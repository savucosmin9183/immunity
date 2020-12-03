import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Successa from '../views/Successa.vue'
import Successb from '../views/Successb.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/successa',
    name: 'Successa',
    component: Successa,
  
  },
  {
    path: '/successb',
    name: 'Successb',
    component: Successb
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
