import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue' 
import WorksView from '../views/WorksView.vue'
import BlogView from '../views/BlogView.vue' 
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: AboutView,
    },
    {
      path: '/trabalhos',
      name: 'trabalhos',
      component: WorksView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/contato',
      name: 'contato',
      component: ContactView,
    },
  ],
})

export default router
