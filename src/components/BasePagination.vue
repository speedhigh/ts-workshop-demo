<template>
  <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-12 lg:justify-center">
    <div class="-mt-px flex w-0 flex-1 lg:mx-14 lg:flex-none">
      <button
        :disabled="props.currentPage === 1"
        class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-gray-700 disabled:cursor-not-allowed disabled:text-gray-300 lg:border-none"
        data-testid="prev-button"
        @click="prevPage"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-3 size-5 text-gray-400 lg:text-gray-700" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
        </svg>
        <span class="lg:hidden">Previous</span>
      </button>
    </div>
    <!-- 仅移动端展示在中间的 -->
    <div class="pt-4 text-sm text-gray-700 lg:hidden" data-testid="current-page">
      {{ props.currentPage }} / {{ props.totalPages }}
    </div>
    <div class="hidden lg:-mt-px lg:flex">
      <!-- 第一页 -->
      <button
        v-show="startEnd.start >= 2"
        class="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
        :class="[props.currentPage === 1 ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-700']"
        data-testid="page-1-button"
        @click="changePage(1)"
      >
        1
      </button>
      <!-- 省略号//连续页码向前 -->
      <button
        v-show="startEnd.start >= 3 && !arrow.showLast"
        class="inline-flex w-11 items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-700"
        data-testid="ellipsis-last"
        @mouseenter="arrow.showLast = true"
      >
        ...
      </button>
      <button
        v-show="startEnd.start >= 3 && arrow.showLast"
        class=" inline-flex w-11 items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-700"
        data-testid="last-arrow"
        @mouseleave="arrow.showLast = false"
        @click="changeArrow('last')"
      >
        «
      </button>
      <button
        v-for="(page, index) in startEnd.end"
        v-show="page >= startEnd.start"
        :key="index"
        class="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
        :class="[page === props.currentPage ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-700']"
        :data-testid="`page-${page}-button`"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
      <!-- 省略号//连续页码向后 -->
      <button
        v-show="startEnd.end <= props.totalPages - 2 && !arrow.showNext"
        class="inline-flex w-11 items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-700"
        data-testid="ellipsis-next"
        @mouseenter="arrow.showNext = true"
      >
        ...
      </button>
      <button
        v-show="startEnd.end <= props.totalPages - 2 && arrow.showNext"
        class=" inline-flex w-11 items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-700"
        data-testid="next-arrow"
        @mouseleave="arrow.showNext = false"
        @click="changeArrow('next')"
      >
        »
      </button>
      <!-- 最后一页 -->
      <button
        v-show="startEnd.end < props.totalPages"
        class="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
        :class="[props.currentPage === props.totalPages ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-700']"
        :data-testid="`page-${props.totalPages}-button`"
        @click="changePage(props.totalPages)"
      >
        {{ props.totalPages }}
      </button>
    </div>
    <!-- 下一页 -->
    <div class="-mt-px flex w-0 flex-1 justify-end lg:mx-14 lg:flex-none">
      <button
        :disabled="props.currentPage === props.totalPages"
        class=" inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-gray-700 disabled:cursor-not-allowed disabled:text-gray-300 lg:border-none"
        data-testid="next-button"
        @click="nextPage"
      >
        <span class="lg:hidden">Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="ml-3 size-5 text-gray-400 lg:text-gray-700" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <!-- Go -->
    <div class="hidden items-center justify-center space-x-2 pt-4 lg:-mt-px lg:flex">
      <div class="text-sm">Go to</div>
      <div class="rounded border bg-white px-2">
        <input
          v-model="goValue"
          type="number"
          class="input input-bordered focus:border-primary h-8 w-14"
          data-testid="goto-input"
          @keyup.enter="enter"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  currentPage: number // 当前页
  totalPages: number // 总页数
  continues: number // 中间连续页码数量
}

const props = defineProps<Props>()
const emit = defineEmits(['update:currentPage'])

// 切换页码
const changePage = (page: number) => {
  emit('update:currentPage', page)
}
// 上一页
const prevPage = () => {
  if (props.currentPage > 1) {
    changePage(props.currentPage - 1)
  }
}
// 下一页
const nextPage = () => {
  if (props.currentPage <= props.totalPages) {
    changePage(props.currentPage + 1)
  }
}

const goValue = ref<string>('')
const enter = () => {
  if (+goValue.value <= 0) { goValue.value = '1' }
  if (+goValue.value > props.totalPages) { goValue.value = String(props.totalPages) }
  changePage(+goValue.value)
}

// 中间连续页码切换
const arrow: { showLast: boolean, showNext: boolean } = reactive({
  showLast: false,
  showNext: false,
})

// 计算中间连续页码的开始、结束位置
const startEnd = computed(() => {
  let start = 0; let end = 0
  // 总页数不够，那么就不存在中间连续页码的问题了
  if (props.totalPages < props.continues) {
    start = 1
    end = props.totalPages
  }
  else {
    // 连续页码数量的一半
    const dx = Math.floor(props.continues / 2)
    start = props.currentPage - dx
    end = props.currentPage + dx
    if (start < 1) {
      start = 1
      end = props.continues
    }
    if (end > props.totalPages) {
      end = props.totalPages
      start = props.totalPages - props.continues + 1
    }
  }
  return { start, end }
})

// 切换中间页
const changeArrow = (state: string) => {
  if (state === 'next') {
    if (props.currentPage + props.continues > props.totalPages) {
      changePage(props.totalPages)
    }
    else {
      changePage(props.currentPage + props.continues)
    }
  }
  if (state === 'last') {
    if (props.currentPage - props.continues < 1) {
      changePage(1)
    }
    else {
      changePage(props.currentPage - props.continues)
    }
  }
}
</script>
