<template>
  <button
    v-if="isVisible"
    class="fixed bottom-16 right-5 size-10 rounded-full bg-black/50 text-xl text-white sm:size-12 sm:text-2xl lg:bottom-20"
    aria-label="Back to top"
    data-testid="back-to-top-button"
    @click="scrollToTop"
  >
    ↑
  </button>
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'

// 定义一个响应式变量，用于控制按钮的显示
const isVisible = ref(false)

// 回到顶部的函数
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 使用 useScroll 监听滚动事件
const { y } = useScroll(window)

// 当 y 大于 200 时，显示按钮
watch(y, (newY) => {
  isVisible.value = newY > 200
})
</script>
