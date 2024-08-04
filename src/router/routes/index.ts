import type { RoutesType } from '@/types/router'
import ErrorPage from '@/views/error-page/404.vue'

export const basicRoutes: RoutesType = [
  {
    path: '/',
    redirect: '/main',
  },
  /** -- 登录页 -- */
  {
    path: '/account',
    component: () => import('@/layout/account/index.vue'),
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
      },
    ],
  },
  /** -- 后台内容 -- */
  {
    path: '/main',
    component: () => import('@/layout/default/index.vue'),
    redirect: '/news-list',
    children: [
      /** -- 新闻 -- */
      {
        path: '/news-list',
        name: 'NewsList',
        component: () => import('@/views/news/index.vue'),
      },
      /** -- 新闻详情 -- */
      {
        path: '/news-detail/:id',
        name: 'NewsDetail',
        component: () => import('@/views/news/detail.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => ErrorPage,
  },
]
