<template>
  <div class="h-12 w-full p-1 sm:h-14 sm:p-1.5 md:h-16 md:p-2">
    <div class="f-c-c relative size-full">
      <!-- 左侧返回 -->
      <div
        v-if="$route.meta.leftArrow"
        class="left-arrow"
        @click="$router.back()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-7 md:size-8"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="title-large">{{ $route.meta.title || '' }}</p>
      </div>
      <div
        v-else
        class="f-c-c left-0 hidden h-full cursor-default rounded-lg sm:absolute sm:px-6 md:px-8"
      >
        <p class="title-large">{{ $route.meta.title || '' }}</p>
      </div>
      <!-- 标题(移动端) -->
      <p class="title-default">{{ $route.meta.title || '' }}</p>
      <!-- 右侧 -->
      <div class="f-c-c absolute inset-y-0 right-0">
        <router-link
          to="/login"
          class="f-c-c h-full space-x-0.5 rounded-lg px-2 leading-[3rem] sm:px-4 sm:hover:bg-gray-200 md:px-6"
        >
          <p class="text-sm text-gray-600 sm:text-base md:text-lg">Login</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-3"
          >
            <path
              fill-rule="evenodd"
              d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.left-arrow {
  @apply flex items-center justify-center absolute inset-y-0 left-0 w-12 cursor-pointer rounded-lg sm:inset-y-auto sm:w-auto sm:py-1.5 sm:pl-2 sm:pr-4 sm:hover:bg-gray-200 md:pl-3 md:pr-5;
}
.title-default {
  @apply text-lg font-bold sm:hidden;
}
.title-large {
  @apply hidden text-lg font-bold sm:block md:text-xl;
}
</style>
