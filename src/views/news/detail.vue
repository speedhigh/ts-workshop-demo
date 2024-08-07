<template>
  <!-- 新闻详情页 -->
  <div class="relative min-h-screen pb-16 pt-12 sm:pt-14 lg:mx-auto lg:max-w-[1000px] lg:pt-16 xl:max-w-7xl xl:px-[65px]">
    <!-- 固定在顶部的导航栏 -->
    <header class="fixed inset-x-0 top-0 z-50 bg-white sm:shadow">
      <base-navbar left-arrow title="News Detail">
        <!-- 右侧的登录链接 -->
        <template #right>
          <router-link
            to="/login"
            class="f-c-c h-full space-x-0.5 rounded-lg px-2 leading-[3rem] sm:px-4 sm:hover:bg-gray-200 lg:px-6"
          >
            <p class="text-sm text-gray-600 sm:text-base lg:text-lg">Login</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
              <path fill-rule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </template>
      </base-navbar>
    </header>
    <!-- 内容区域 -->
    <div class="p-3 sm:p-12">
      <!-- 新闻标题 -->
      <h1 class="text-2xl font-bold sm:text-3xl">{{ newsData.title }}</h1>
      <!-- 标签和日期 -->
      <div class="f-c mt-6 w-full space-x-4 text-sm sm:mt-8 lg:mt-12 lg:space-x-6 lg:text-base">
        <div
          v-for="(tag, index) in newsData.tags"
          :key="index"
          class="f-c space-x-1 lg:space-x-1.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 text-blue-400">
            <path fill-rule="evenodd" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v2.879a2.5 2.5 0 0 0 .732 1.767l4.5 4.5a2.5 2.5 0 0 0 3.536 0l2.878-2.878a2.5 2.5 0 0 0 0-3.536l-4.5-4.5A2.5 2.5 0 0 0 7.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
          </svg>
          <p class="text-gray-800">{{ tag }}</p>
        </div>
        <p>|</p>
        <p class="text-gray-500">{{ newsData.date }}</p>
      </div>
      <!-- 新闻图片和音频播放器 -->
      <div class="mt-4 overflow-hidden rounded-t shadow sm:rounded-lg">
        <img :src="newsData.imageUrl" alt="" class="w-full object-cover" />
        <audio-player
          audio-src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          :track-title="newsData.title"
        />
      </div>
      <!-- 新闻内容 -->
      <div class="mt-6 sm:mt-8 lg:mt-12 lg:text-lg">
        <p class="leading-7 text-gray-800">{{ newsData.content }}</p>
      </div>
      <!-- 视频播放器 -->
      <div class="mt-6 sm:mt-8 lg:mt-12">
        <video-player video-src="https://www.w3schools.com/html/mov_bbb.mp4" />
      </div>
      <!-- 再加一段文章内容（为了美观性） -->
      <div class="mt-6 sm:mt-8 lg:mt-12 lg:text-lg">
        <p class="leading-7 text-gray-800">{{ newsData.content }}</p>
      </div>
    </div>
    <!-- 回到顶部按钮 -->
    <BackToTop />
  </div>
</template>

<script lang="ts" setup>
import { useNewsStore } from '@/store/news'

// 使用新闻数据存储
const newsStore = useNewsStore()
// 从存储中获取新闻数据
const newsData = newsStore.newsData
</script>
