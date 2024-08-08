<template>
  <div
    ref="imageRef"
    class="relative flex size-full items-center justify-center bg-gray-200"
    data-testid="image-container"
  >
    <img
      v-if="isIntersecting"
      :src="src"
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
interface Props {
  src: string // 图片的 URL
  alt: string // 图片的替代文本
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' // 图片的 object-fit 属性，默认为 'cover'
}

const props = defineProps<Props>()

const isIntersecting = ref(false) // 是否在视口内的标志
const loaded = ref(false) // 是否加载完成的标志
const observer = ref<IntersectionObserver | null>(null) // IntersectionObserver 实例
const imageRef = ref<HTMLDivElement | null>(null) // 图片容器的引用

/**
 * 处理 IntersectionObserver 回调
 * @param entries IntersectionObserverEntry 数组
 */
const loadImage = (entries: IntersectionObserverEntry[]) => {
  if (entries[0].isIntersecting) {
    isIntersecting.value = true
    if (observer.value) {
      observer.value.disconnect()
    }
  }
}
// 处理图片加载完成事件
const onLoad = () => {
  loaded.value = true
}
// 计算图片的 object-fit 样式类
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
// 组件挂载时创建 IntersectionObserver 并开始观察图片容器
onMounted(() => {
  observer.value = new IntersectionObserver(loadImage, {
    root: null,
    threshold: 0.1,
  })

  if (imageRef.value) {
    observer.value.observe(imageRef.value)
  }
})
// 组件卸载时断开 IntersectionObserver
onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})

defineExpose({
  loadImage,
})
</script>
