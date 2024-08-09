<template>
  <div class="relative min-h-screen bg-gray-100 pb-16 pt-12 sm:pt-14 md:pt-16 lg:bg-white lg:pb-28 xl:pb-32">
    <!-- HeaderSections -->
    <div class="hidden lg:block">
      <HeaderSections />
    </div>
    <div class="sticky top-12 z-40 bg-white pb-2 shadow sm:top-14 md:top-16 lg:relative lg:top-0 lg:shadow-none">
      <div class="lg:mx-auto lg:max-w-[1000px] lg:pb-4 lg:pt-8 xl:max-w-7xl xl:px-16">
        <autocomplete-tag
          :options="tagsList"
          @search="toSearch"
        />
      </div>
    </div>
    <!-- 内容 -->
    <div class="lg:mx-auto lg:max-w-[1000px] xl:max-w-7xl xl:px-16">
      <div class="space-y-2.5 p-3 sm:space-y-3.5 sm:px-4 sm:py-5 md:space-y-4 md:px-6 lg:space-y-7">
        <div
          v-for="item in newsList"
          :key="item.id"
          class="group flex h-32 w-full cursor-pointer justify-between space-x-3 rounded bg-white p-3 sm:h-44 sm:space-x-5 sm:rounded-lg sm:p-4 lg:h-52 lg:space-x-8 lg:px-1 xl:h-64 xl:space-x-12"
          @click="toNewsDetail(item)"
        >
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
    <div class="fixed inset-x-0 bottom-0 bg-white/90 pb-4 backdrop-blur-sm xl:block">
      <base-pagination
        :current-page="params.page"
        :total-pages="Math.ceil(total / params.size)"
        :continues="5"
        @update:current-page="fetchPaginatedNews"
      />
    </div>
    <!-- 回到顶部按钮 -->
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import HeaderSections from './components/HeaderSections.vue'
import { paginateNews, tagsList } from '@/data/generate'
import { useNewsStore } from '@/store/news'
import type { NewsInter, ParamsInter } from '@/types/new'

// 使用 Vue Router
const router = useRouter()

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
  params.tags = tagsData
  fetchPaginatedNews(1)
}

// 初始获取新闻数据
fetchPaginatedNews(1)

// 跳转到新闻详情页面
const toNewsDetail = (data: NewsInter) => {
  useNewsStore().updateData(data)
  router.push(`/news-detail/${data.id}`)
}
</script>
