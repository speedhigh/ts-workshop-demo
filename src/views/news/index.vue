<template>
  <div class="relative min-h-screen bg-gray-100 pt-24 md:pt-28 lg:pt-32">
    <div class="fixed inset-x-0 top-0 z-50 bg-white">
      <base-navbar title="News">
        <template #right>
          <router-link
            to="/login"
            class="f-c-c h-full space-x-0.5 rounded-lg px-2 leading-[3rem] md:px-4 md:hover:bg-gray-200 lg:px-6"
          >
            <p class="text-sm text-gray-600 md:text-base lg:text-lg">Login</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
              <path fill-rule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </template>
      </base-navbar>
      <autocomplete-tag
        v-model="params.tags"
        @search="fetchPaginatedNews(false)"
      />
    </div>
    <div class="space-y-2.5 p-3">
      <div
        v-for="item in paginatedResult.list"
        :key="item.id"
        class="flex h-32 w-full justify-between space-x-3 rounded bg-white py-3 pl-4 pr-3"
      >
        <div class="grow">
          <h2 class="line-2 h-12 font-bold">{{ item.title }}</h2>
          <div class="f-c mt-2">
            <div
              v-for="(tag, idx) in item.tags"
              :key="idx"
              class="f-c h-5 space-x-1 px-2"
            >
              <div
                class="size-2 rounded-full"
                :class="params.tags.indexOf(tag) !== -1 ? 'bg-blue-500' : 'bg-gray-300'"
              >
              </div>
              <p
                class="text-xs leading-6"
                :class="params.tags.indexOf(tag) !== -1 ? 'text-blue-500' : 'text-gray-400'"
              >
                {{ tag }}
              </p>
            </div>
          </div>
          <div class="f-c mt-2 space-x-1 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-mt-0.5 size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
            </svg>
            <p class="text-xs">{{ item.date }}</p>
          </div>
        </div>
        <div class="h-full w-36 shrink-0 overflow-hidden rounded">
          <img :src="item.imageUrl" alt="img" class="size-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { paginateNews } from '@/data/generate'
import type { PaginateResultInter, ParamsInter } from '@/types/new'

const params: ParamsInter = reactive({
  page: 1,
  size: 10,
  tags: [],
})

const paginatedResult = reactive<PaginateResultInter>({
  page: 1,
  size: 10,
  total: 0,
  list: [],
})

const fetchPaginatedNews = (more = true) => {
  if (!more) { params.page = 1 }
  const result = paginateNews(params.page, params.size, params.tags)
  Object.assign(paginatedResult, result)
}

watch(() => params, fetchPaginatedNews, { immediate: true })
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
