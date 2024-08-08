<template>
  <Teleport :to="teleportTo">
    <div
      v-if="props.modelValue"
      class="fixed inset-0 z-30"
      :style="{ backgroundColor: props.overlayColor || 'rgba(0, 0, 0, 0.0)' }"
      data-testid="overlay"
      @click="handleClick"
    ></div>
  </Teleport>
</template>

<script lang="ts" setup>
// 定义组件的属性和事件
const props = defineProps<{
  modelValue: boolean
  overlayColor?: string
  teleportTo?: string // 新增的属性
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'maskClick'): void
}>()

// 处理点击遮罩层的事件
const handleClick = () => {
  emit('maskClick')
  emit('update:modelValue', false)
}

// 设置默认的挂载点为 body
const teleportTo = props.teleportTo || 'body'
</script>
