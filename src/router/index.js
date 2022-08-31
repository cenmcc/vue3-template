import { createRouter,createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;