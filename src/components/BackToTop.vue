<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-8 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-8 opacity-0"
  >
    <button
      v-if="y > 200"
      class="group fixed bottom-16 right-5 size-12 cursor-pointer rounded-xl bg-gray-900/50
             ring-1 ring-white/10 backdrop-blur-sm
             transition duration-200 ease-in-out hover:-translate-y-1
             hover:ring-white/20 sm:size-14 lg:bottom-20"
      aria-label="ページトップへ戻る"
      data-testid="back-to-top-button"
      @click="scrollToTop"
    >
      <div
        class="flex size-full items-center justify-center text-gray-400
               transition duration-200 group-hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </div>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
