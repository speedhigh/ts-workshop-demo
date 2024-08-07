<template>
  <div
    class="relative min-h-screen bg-gray-100 pb-20 pt-24 sm:pt-28 md:pt-32 lg:bg-white lg:pb-28 lg:pt-16 xl:pb-32"
  >
    <!-- 顶部固定导航栏 -->
    <header class="fixed inset-x-0 top-0 z-50 bg-white pb-2 shadow sm:pb-3 md:pb-5 lg:pb-0">
      <base-navbar title="News">
        <!-- 右侧登录按钮 -->
        <template #right>
          <router-link
            to="/login"
            class="f-c-c h-full space-x-0.5 rounded-lg px-2 leading-[3rem] sm:px-4 sm:hover:bg-gray-200 md:px-6"
          >
            <p class="text-sm text-gray-600 sm:text-base md:text-lg">Login</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
              <path fill-rule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </template>
      </base-navbar>
      <!-- 自动完成标签组件 -->
      <div class="lg:hidden">
        <autocomplete-tag
          v-model="tags"
          @search="toSearch"
        />
      </div>
    </header>

    <div class="relative isolate hidden overflow-hidden bg-gray-900 py-24 sm:py-32 lg:block">
      <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 size-full object-cover" />
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-16">
        <div class="mx-auto max-w-3xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Latest News Updates</h2>
          <div class="mt-6 text-lg leading-8 text-gray-300">
            <p>Discover the latest news, insights, and stories from around the world. </p>
            <p>Stay up-to-date with current events and explore in-depth articles that matter to you.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 内容 -->
    <div class="lg:mx-auto lg:max-w-[1000px] xl:max-w-7xl xl:px-16">
      <div class="mt-4 hidden py-4 lg:block">
        <autocomplete-tag
          v-model="tags"
          @search="toSearch"
        />
      </div>
      <div class="space-y-2.5 p-3 sm:space-y-3.5 sm:px-4 sm:py-5 md:space-y-4 md:px-6 lg:space-y-7">
        <div
          v-for="item in newsList"
          :key="item.id"
          class="group flex h-32 w-full cursor-pointer justify-between space-x-3 rounded bg-white p-3 sm:h-44 sm:space-x-5 sm:rounded-lg sm:p-4 lg:h-52 lg:space-x-8 lg:px-1 xl:h-64 xl:space-x-12"
          @click="toNewsDetail(item)"
        >
          <!-- 新闻内容 -->
          <div class="grow lg:py-1 xl:py-2">
            <h2 class="line-clamp-2 h-12 break-words font-bold sm:line-clamp-1 sm:h-8 sm:text-2xl lg:text-[1.75rem] xl:h-9 xl:text-3xl">{{ item.title }}</h2>
            <div class="mt-[1.38rem] hidden h-12 sm:block lg:h-14 xl:mt-8 xl:h-[84px]">
              <p class="line-clamp-2 break-words text-gray-500 lg:text-lg xl:line-clamp-3 xl:text-xl">{{ item.content }}</p>
            </div>
            <div class="f-c mt-2 sm:mt-3.5 lg:mt-6">
              <!-- 标签 -->
              <div
                v-for="(tag, idx) in item.tags"
                :key="idx"
                class="f-c mr-2 h-5 space-x-1 sm:mr-6 sm:h-auto sm:space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="size-3 sm:block sm:size-4 lg:size-5 xl:size-6"
                  :class="params.tags.indexOf(tag) !== -1 ? 'text-blue-500' : 'text-gray-500'"
                >
                  <path fill-rule="evenodd" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v2.879a2.5 2.5 0 0 0 .732 1.767l4.5 4.5a2.5 2.5 0 0 0 3.536 0l2.878-2.878a2.5 2.5 0 0 0 0-3.536l-4.5-4.5A2.5 2.5 0 0 0 7.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                </svg>
                <p
                  class="line-1 max-w-16 text-xs leading-6 sm:max-w-24 sm:text-sm lg:max-w-32 lg:text-base"
                  :class="params.tags.indexOf(tag) !== -1 ? 'text-blue-500' : 'text-gray-700'"
                >
                  {{ tag }}
                </p>
              </div>
              <!-- 发布日期 -->
              <div class="ml-4 hidden space-x-1 text-gray-700 sm:flex lg:space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5 xl:size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                </svg>
                <p class="text-xs sm:text-sm lg:text-base">{{ item.date }}</p>
              </div>
            </div>
            <div class="f-c mt-2 space-x-1 text-gray-700 sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-mt-0.5 size-4 sm:size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
              </svg>
              <p class="text-xs sm:text-sm lg:text-base">{{ item.date }}</p>
            </div>
          </div>
          <!-- 新闻图片 -->
          <div class="h-full w-36 shrink-0 overflow-hidden rounded sm:w-52 sm:rounded-lg lg:w-72 xl:w-96">
            <lazy-load-image :src="item.imageUrl" alt="News Image" />
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <div
      class="fixed inset-x-0 bottom-0 pb-4 xl:block"
      :class="isScrolling ? 'bg-white/30' : 'bg-white/90 backdrop-blur-sm'"
    >
      <base-pagination
        :current-page="params.page"
        :total-pages="Math.ceil(total / params.size)"
        :continues="5"
        @update:current-page="fetchPaginatedNews"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { paginateNews } from '@/data/generate'
import { useNewsStore } from '@/store/news'
import type { NewsInter, PaginateResultInter, ParamsInter, TagsInter } from '@/types/new'

// 使用 Vue Router
const router = useRouter()
const { isScrolling } = useScroll(window)

const tags = ref<TagsInter[]>([])

// 初始化查询参数
const params: ParamsInter = reactive({
  page: 1,
  size: 10,
  tags: [],
})

const total = ref<number>(0)
const newsList = ref<NewsInter[]>([])

// 获取分页新闻数据
const fetchPaginatedNews = (page: number) => {
  params.page = page < 1 ? 1 : page
  const result = paginateNews(params)
  total.value = result.total
  newsList.value = result.list
  window.scrollTo({ top: 0 })
}

// 标签搜索
const toSearch = (tagsData: string[]) => {
  if (tagsData.length > 0) {
    params.tags = tagsData
    fetchPaginatedNews(1)
  }
}

// 初始获取新闻数据
fetchPaginatedNews(1)

// 跳转到新闻详情页面
const toNewsDetail = (data: NewsInter) => {
  useNewsStore().updateData(data)
  router.push(`/news-detail/${data.id}`)
}
</script>
