<template>
  <div ref="imageRef" class="relative size-full bg-gray-200">
    <img
      v-if="isIntersecting"
      :src="src"
      :alt="alt"
      class="size-full transition-opacity duration-500"
      :class="[objectFitClass, { 'opacity-0': !loaded, 'opacity-100': loaded }]"
      @load="onLoad"
    />
    <div v-else class="size-full animate-pulse bg-gray-300"></div>
  </div>
</template>

<script setup lang="ts">
/**
 * 定义组件的属性类型
 */
interface Props {
  src: string // 图片的 URL
  alt: string // 图片的替代文本
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' // 图片的 object-fit 属性，默认为 'cover'
}

/**
 * 获取传递给组件的属性
 */
const props = defineProps<Props>()

/**
 * 是否在视口内的标志
 */
const isIntersecting = ref(false)

/**
 * 是否加载完成的标志
 */
const loaded = ref(false)

/**
 * IntersectionObserver 实例
 */
const observer = ref<IntersectionObserver | null>(null)

/**
 * 图片容器的引用
 */
const imageRef = ref<HTMLDivElement | null>(null)

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

/**
 * 处理图片加载完成事件
 */
const onLoad = () => {
  loaded.value = true
}

/**
 * 计算图片的 object-fit 样式类
 */
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

/**
 * 组件挂载时创建 IntersectionObserver 并开始观察图片容器
 */
onMounted(() => {
  observer.value = new IntersectionObserver(loadImage, {
    root: null,
    threshold: 0.1,
  })

  if (imageRef.value) {
    observer.value.observe(imageRef.value)
  }
})

/**
 * 组件卸载时断开 IntersectionObserver
 */
onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})
</script>

<style scoped>
/* 图片过渡效果的样式 */
.transition-opacity {
  transition: opacity 0.5s;
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}
</style>
