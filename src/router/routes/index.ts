import type { RoutesType } from '@/types/router'

export const basicRoutes: RoutesType = [
  {
    path: '/',
    redirect: '/main',
  },
  /** -- 新闻内容 -- */
  {
    path: '/main',
    component: () => import('~/src/layout/index.vue'),
    redirect: '/home',
    children: [
      /** -- 首页 -- */
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          keepAlive: true,
          title: 'Home',
          leftArrow: false,
          border: false,
        },
      },
      /** -- 列表 -- */
      {
        path: '/news-list',
        name: 'NewsList',
        component: () => import('@/views/news/index.vue'),
        meta: {
          keepAlive: true,
          title: 'News',
          leftArrow: false,
          border: false,
        },
      },
      /** -- 详情 -- */
      {
        path: '/news-detail/:id',
        name: 'NewsDetail',
        component: () => import('@/views/news/detail.vue'),
        meta: {
          keepAlive: false,
          title: 'News Detail',
          leftArrow: true,
          border: true,
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => '@/views/error-page/404.vue',
  },
]
