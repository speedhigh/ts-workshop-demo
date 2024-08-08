<template>
  <div class="flex w-full max-w-full items-center rounded-lg bg-white p-4">
    <!-- 播放/暂停按钮 -->
    <button
      class="f-c-c mr-4 w-12 shrink-0 sm:w-16 md:w-20"
      data-testid="play-pause-button"
      @click="togglePlay"
    >
      <span v-if="isPlaying">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
          <path d="M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z" />
        </svg>
      </span>
      <span v-else>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
          <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a.75.75 0 0 0 0-1.27L6.3 2.841Z" />
        </svg>
      </span>
    </button>
    <!-- 音频信息和进度条 -->
    <div class="flex-1">
      <div class="line-1 text-sm font-semibold sm:text-base" data-testid="track-title">{{ props.trackTitle }}</div>
      <div class="mt-2 text-xs text-gray-500">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</div>
      <input v-model="currentTime" type="range" min="0" :max="duration" class="mt-2 w-full" data-testid="range-input" @input="seek" />
    </div>
    <!-- 隐藏的音频元素 -->
    <audio ref="audio" :src="props.audioSrc" data-testid="audio-element" @timeupdate="updateTime" @loadedmetadata="updateDuration"></audio>
  </div>
</template>

<script setup lang="ts">
// 定义组件的 props 类型
interface Props {
  audioSrc: string
  trackTitle: string
}

// 使用 withDefaults 设置默认值
const props = withDefaults(defineProps<Props>(), {
  audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  trackTitle: 'Sample Track',
})

// 定义播放状态和时间相关的响应式变量
const isPlaying: Ref<boolean> = ref(false)
const currentTime: Ref<number> = ref(0)
const duration: Ref<number> = ref(0)
const audio: Ref<HTMLAudioElement | null> = ref(null)

// 播放/暂停音频的函数
const togglePlay = () => {
  if (isPlaying.value) {
    audio.value?.pause()
  }
  else {
    audio.value?.play()
  }
  isPlaying.value = !isPlaying.value
}

// 更新当前播放时间的函数
const updateTime = () => {
  if (audio.value) {
    currentTime.value = audio.value.currentTime
  }
}

// 更新音频总时长的函数
const updateDuration = () => {
  if (audio.value) {
    duration.value = audio.value.duration
  }
}

// 跳转到指定时间的函数
const seek = () => {
  if (audio.value) {
    audio.value.currentTime = currentTime.value
  }
}

// 监听播放和暂停事件
onMounted(() => {
  if (audio.value) {
    audio.value.addEventListener('play', () => (isPlaying.value = true))
    audio.value.addEventListener('pause', () => (isPlaying.value = false))
  }
})

// 移除播放和暂停事件监听器
onUnmounted(() => {
  if (audio.value) {
    audio.value.removeEventListener('play', () => (isPlaying.value = true))
    audio.value.removeEventListener('pause', () => (isPlaying.value = false))
  }
})

// 格式化时间为 mm:ss 格式
const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
</script>
