<template>
  <div
    ref="imageRef"
    class="relative flex size-full items-center justify-center bg-gray-200"
    data-testid="image-container"
  >
    <img
      v-if="isIntersecting"
      :src="loaded ? src : placeholderSrc"
      :alt="alt"
      class="size-full transition-opacity duration-500"
      :class="[objectFitClass, { 'opacity-0': !loaded, 'opacity-100': loaded }]"
      data-testid="lazy-image"
      @load="onLoad"
    />
    <div v-else class="flex size-full items-center justify-center">
      <div class="text-gray-500" data-testid="loading-text">Loading...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string
  alt: string
  placeholderSrc?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
}>(), {
  placeholderSrc: 'https://via.placeholder.com/300?text=Loading...',
  objectFit: 'cover',
})

const isIntersecting = ref(false) // 是否在视口内的标志
const loaded = ref(false) // 是否加载完成的标志
const imageRef = ref<HTMLDivElement | null>(null) // 图片容器的引用

let observer: IntersectionObserver | null = null

const onLoad = () => {
  loaded.value = true
}

const objectFitClass = computed(() => {
  switch (props.objectFit) {
    case 'contain':
      return 'object-contain'
    case 'fill':
      return 'object-fill'
    case 'none':
      return 'object-none'
    case 'scale-down':
      return 'object-scale-down'
    case 'cover':
    default:
      return 'object-cover'
  }
})

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isIntersecting.value = true
      observer?.disconnect() // 只需要加载一次图片，加载后断开观察
    }
  }, {
    root: null,
    threshold: 0.1,
  })

  if (imageRef.value) {
    observer.observe(imageRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
