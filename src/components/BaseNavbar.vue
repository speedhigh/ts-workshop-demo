<template>
  <div class="h-12 w-full bg-white p-1 sm:h-14 sm:p-1.5 md:h-16 md:p-2">
    <div class="f-c-c relative size-full">
      <!-- 左侧返回 -->
      <div
        v-if="leftArrow"
        class="f-c-c absolute inset-y-0 left-0 w-12 cursor-pointer rounded-lg sm:inset-y-auto sm:w-auto sm:py-1.5 sm:pl-2 sm:pr-4 sm:hover:bg-gray-200 md:pl-3 md:pr-5"
        @click="$router.back()"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-7 sm:size-8 md:size-9">
          <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
        </svg>
        <p class="hidden text-lg font-bold sm:block sm:text-xl md:text-2xl">{{ props.title }}</p>
      </div>
      <div v-else class="f-c-c left-0 hidden h-full cursor-default rounded-lg sm:absolute sm:px-6 md:px-8">
        <p class="hidden text-lg font-bold sm:block sm:text-xl md:text-2xl">{{ props.title }}</p>
      </div>
      <!-- 标题 -->
      <div class="sm:hidden">
        <p class="text-lg font-bold sm:text-xl">{{ props.title }}</p>
      </div>
      <!-- 右侧 -->
      <div class="f-c-c absolute inset-y-0 right-0">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title?: string
  leftArrow?: boolean
}>()
</script>

<style>

</style>
