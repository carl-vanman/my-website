import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cbout',
    name: 'About',
    component: About
  },
  {
    path: '/Crojects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Projects
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
