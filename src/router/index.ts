import NProgress from '@/until/progress'
import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
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
