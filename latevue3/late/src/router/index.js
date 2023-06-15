import { createRouter, createWebHistory } from 'vue-router'
import killView from '../views/PeopleKilled.vue'
import hurtView from '../views/PeopleOuchied.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/killed',
      name: 'killed',
      component: killView
    },
    {
      path: '/hurt',
      name: 'hurt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: hurtView
    }
  ]
})

export default router
