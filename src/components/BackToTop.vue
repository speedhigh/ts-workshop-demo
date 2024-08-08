<template>
  <button
    v-if="y > 200"
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

const { y } = useScroll(window)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
