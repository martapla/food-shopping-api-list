import { createRouter, createWebHistory } from 'vue-router'
import BuyView from '../views/BuyView.vue'
import IdeasView from '../views/IdeasView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BuyView
    },
    {
      path: '/recipes',
      name: 'recipes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RecipesView.vue')
    },
    {
      path: '/ideas',
      name: 'ideas',
      component: IdeasView
    },
  ]
})

export default router
