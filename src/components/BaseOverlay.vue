<template>
  <Teleport :to="teleportTo">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-30"
      :style="{ backgroundColor: overlayColor || 'rgba(0, 0, 0, 0.0)' }"
      data-testid="overlay"
      @click="handleClick"
    ></div>
  </Teleport>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean
  overlayColor?: string
  teleportTo?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'maskClick'): void
}>()

const handleClick = () => {
  emit('maskClick')
  emit('update:modelValue', false)
}

const teleportTo = props.teleportTo || 'body'
</script>
