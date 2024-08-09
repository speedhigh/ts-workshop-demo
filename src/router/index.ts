import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes } from './routes'
import NProgress from '@/until/progress'

const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
