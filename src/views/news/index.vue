<template>
  <div class="pt-12 md:pt-14 lg:pt-16">
    <!-- header -->
    <base-navbar title="新闻列表">
      <template #right>
        <router-link
          to="/login"
          class="f-c-c h-full rounded-lg px-2 leading-[3rem] md:px-4 md:hover:bg-gray-200 lg:px-6"
        >
          <p class="text-sm md:text-base lg:text-lg">去登录</p>
        </router-link>
      </template>
    </base-navbar>
    <!-- main -->
    <main>
      <!-- search -->
      <div>
        <autocomplete-tag />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// import { generateNews, generateTags, tagsList } from '@/data/generate'
import type { ParamsInter } from '@/types/new'

const params: ParamsInter = reactive({
  page: 1,
  size: 10,
  tag: '',
})
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
