import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes } from './routes'
import NProgress from '@/until/progress'

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
  next() // 继续导航
})

router.afterEach(() => {
  NProgress.done() // 进度条结束
})

export default router
