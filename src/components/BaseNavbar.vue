<template>
  <header class="fixed inset-x-0 top-0 z-50 h-12 w-full bg-white p-1 shadow md:h-14 md:p-1.5 lg:h-16 lg:p-2">
    <div class="f-c-c relative size-full">
      <!-- 左侧返回 -->
      <div
        v-if="leftArrow"
        class="f-c-c absolute inset-y-0 left-0 w-12 cursor-pointer rounded-lg md:inset-y-auto md:w-auto md:py-1.5 md:pl-2 md:pr-4 md:hover:bg-gray-200 lg:pl-3 lg:pr-5"
        @click="$router.back()"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-7 md:size-8 lg:size-9">
          <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
        </svg>
        <p class="hidden text-lg font-bold md:block md:text-xl lg:text-2xl">{{ props.title }}</p>
      </div>
      <div v-else class="f-c-c left-0 hidden h-full cursor-default rounded-lg md:absolute md:px-6 lg:px-8">
        <p class="hidden text-lg font-bold md:block md:text-xl lg:text-2xl">{{ props.title }}</p>
      </div>
      <!-- 标题 -->
      <div class="md:hidden">
        <p class="text-lg font-bold md:text-xl">{{ props.title }}</p>
      </div>
      <!-- 右侧 -->
      <div class="f-c-c absolute inset-y-0 right-0">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title?: string
  leftArrow?: boolean
}>()
</script>

<style>

</style>
