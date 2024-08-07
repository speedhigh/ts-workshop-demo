<template>
  <div class="flex w-full items-center justify-center rounded-lg bg-white shadow-lg">
    <video ref="video" class="w-full rounded-md shadow-lg" controls :src="props.videoSrc"></video>
  </div>
</template>

<script setup lang="ts">
// 定义组件的 props 类型
interface Props {
  videoSrc: string
}

const props = withDefaults(defineProps<Props>(), {
  videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
})

const video: Ref<HTMLVideoElement | null> = ref(null)

// 监听播放和暂停事件
onMounted((): void => {
  if (video.value) {
    video.value.addEventListener('play', () => {})
    video.value.addEventListener('pause', () => {})
  }
})

// 移除播放和暂停事件监听器
onUnmounted((): void => {
  if (video.value) {
    video.value.removeEventListener('play', () => {})
    video.value.removeEventListener('pause', () => {})
  }
})
</script>

<style scoped>
/* 如果需要添加任何全局样式，可以在这里添加 */
</style>
