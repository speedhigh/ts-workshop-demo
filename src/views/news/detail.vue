<template>
  <div class="relative min-h-screen pb-16 pt-12 sm:pt-14 lg:mx-auto lg:max-w-[1000px] lg:pt-16 xl:max-w-7xl xl:px-16">
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
          :audio-src="newsData.audioUrl"
          :track-title="newsData.title"
        />
      </div>
      <!-- 新闻内容 -->
      <div class="mt-6 sm:mt-8 lg:mt-12 lg:text-lg">
        <p class="leading-7 text-gray-800">{{ newsData.content }}</p>
      </div>
      <!-- 视频播放器 -->
      <div class="mt-6 sm:mt-8 lg:mt-12">
        <video-player :video-src="newsData.videoUrl" />
      </div>
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
