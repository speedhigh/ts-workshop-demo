<template>
  <div class="f-c w-full px-3 pb-2 shadow">
    <!-- 输入框样式 -->
    <div
      ref="inputAreaRef"
      class="f-c-b relative min-h-10 w-full rounded border border-blue-500 pl-2 pr-1"
      :class="{
        'ring-2 ring-blue-100': showDropdownMenu,
        'border-none': showRemainingTags,
      }"
    >
      <div class="f-c grow space-x-2">
        <!-- 选中标签 -->
        <div
          v-if="selectedTags.length > 0"
          class="flex max-w-96 shrink-0 items-center space-x-1.5 overflow-x-hidden"
          @mousedown="preventBlur"
        >
          <template v-for="(item, index) in selectedTags" :key="item.id">
            <div
              v-if="index < 2"
              class="f-c h-7 rounded bg-gray-100 pl-2 text-gray-800"
            >
              <p class="text-xs leading-7">{{ item.label }}</p>
              <div
                class="f-c-c h-full cursor-pointer px-2"
                @click="tagDelete(index)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                  <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                </svg>
              </div>
            </div>
          </template>
          <div
            v-if="selectedTags.length > 2"
            class="h-7 shrink-0 rounded bg-gray-100 px-2 text-gray-800"
            @click="toggleRemainingTags"
          >
            <p class="text-xs leading-7">+{{ selectedTags.length - 2 }}</p>
          </div>
        </div>
        <!-- 输入区 -->
        <div class="grow">
          <input
            ref="inputRef"
            v-model="input.keyWord"
            type="text"
            class="w-full"
            @input="input.keyWordChange"
            @focus="input.focus"
            @blur="input.blur"
          />
        </div>
      </div>
      <!-- 搜索按钮 -->
      <div class="f-c-c shrink-0">
        <div class="h-8 w-16 cursor-pointer rounded bg-blue-500 text-white" @click="onSearchClick">
          <p class="text-center text-sm leading-8">search</p>
        </div>
      </div>
      <!-- 下拉菜单展开 -->
      <div
        ref="externalAreaRef"
        class="absolute inset-x-0 top-10 rounded bg-white transition-all"
        :class="showDropdownMenu ? 'scale-100 opacity-100' : 'scale-90 invisible opacity-0'"
        style="box-shadow: 0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)"
      >
        <div
          v-if="tagsList.length"
          ref="dropdownMenuRef"
          class="hide-scrollbar max-h-72 overflow-y-scroll p-1"
        >
          <ul>
            <li
              v-for="item in tagsList"
              :key="item.id"
              class="f-c-b h-9 w-full pl-3 pr-2 leading-9 hover:bg-gray-100"
              @click="tagClick(item)"
            >
              <p :class="isTagSelected(item) ? 'text-blue-600' : 'text-gray-600'">{{ item.label }}</p>
              <div v-show="isTagSelected(item)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 text-blue-600">
                  <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                </svg>
              </div>
            </li>
          </ul>
        </div>
        <!-- 无数据 empty -->
        <div
          v-else
          class="f-c-c h-40 flex-col space-y-2 p-1 text-gray-400"
        >
          <div class="size-12">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z" fill="currentColor" /><path d="M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z" fill="currentColor" />
            </svg>
          </div>
          <p class="text-sm">无数据</p>
        </div>
      </div>
      <!-- 剩余标签展开 -->
      <div
        v-if="showRemainingTags"
        class="fixed inset-0 z-20 bg-black/0 bg-opacity-50"
        @click="hideRemainingTags"
      ></div>
      <div
        class="absolute inset-x-0 top-0 z-30 min-h-16 rounded bg-white transition-all"
        :class="showRemainingTags ? 'scale-100 opacity-100' : 'scale-90 invisible opacity-0'"
        style="box-shadow: 0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)"
        @click.stop
      >
        <div class="flex flex-wrap px-2 pt-2">
          <div
            v-for="(item, index) in selectedTags"
            :key="item.id"
            class="f-c mb-2 mr-2 h-7 rounded bg-gray-100 pl-2 text-gray-800"
          >
            <p class="text-xs leading-7">{{ item.label }}</p>
            <div
              class="f-c-c h-full cursor-pointer px-2"
              @click="tagDelete(index)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import type { TagsInter } from '@/types/new'
import { filterTags } from '@/data/generate'

const emit = defineEmits(['search'])

const tags = defineModel<Array<string>>({
  type: Array as PropType<string[]>,
  required: true,
})

const selectedTags = ref<TagsInter[]>([]) // 定义模型，用于标签列表
const showDropdownMenu = ref<boolean>(false) // 控制下拉菜单显示状态
const showRemainingTags = ref<boolean>(false) // 控制剩余标签展开

function onSearchClick() {
  tags.value = selectedTags.value.map(item => item.label)
  emit('search')
}

// 输入框和下拉菜单的引用
const inputAreaRef = ref<HTMLInputElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const externalAreaRef = ref<HTMLElement | null>(null)
const dropdownMenuRef = ref<HTMLElement | null>(null)

// 输入相关的响应式对象
const input = reactive({
  keyWord: '',
  focus: () => { showDropdownMenu.value = true },
  blur: () => {
    // 检查当前焦点是否在下拉菜单内部
    if (externalAreaRef.value && externalAreaRef.value.contains(document.activeElement)) {
      inputRef.value?.focus()
    }
    else {
      // 否则，隐藏下拉菜单并清空输入框
      showDropdownMenu.value = false
      input.keyWord = ''
    }
  },
  keyWordChange: () => {
    // 滚动条置顶
    if (dropdownMenuRef.value) {
      dropdownMenuRef.value.scrollTop = 0
    }
  },
})

// 切换剩余标签显示状态
const toggleRemainingTags = () => {
  if (showDropdownMenu.value) {
    showDropdownMenu.value = false
    inputRef.value?.blur()
    return
  }
  showRemainingTags.value = !showRemainingTags.value
}

// 过滤后的标签列表
const tagsList = computed(() => filterTags(input.keyWord))

// 使用 onClickOutside 钩子检测点击是否发生在输入框外部 ，如果是，隐藏下拉菜单
onClickOutside(inputAreaRef, (event: MouseEvent) => {
  if (externalAreaRef.value && externalAreaRef.value.contains(event.target as Node)) {
    return
  }
  showDropdownMenu.value = false
})

// 防止失焦
const preventBlur = (event: MouseEvent) => {
  event.preventDefault()
}

// 判断某条数据是否在已选标签列表中
const isTagSelected = (tagItem: TagsInter) => selectedTags.value.some(tag => tag.id === tagItem.id)

// 检查标签是否已经在已选标签列表中,根据结果添加或删除
const tagClick = (tagItem: TagsInter) => {
  const index = selectedTags.value.findIndex(tag => tag.id === tagItem.id)
  if (index !== -1) {
    selectedTags.value.splice(index, 1)
  }
  else {
    selectedTags.value.push(tagItem)
    input.keyWord = ''
  }
}

// 删除一条标签
const tagDelete = (index: number) => selectedTags.value.splice(index, 1)

// 隐藏剩余标签
const hideRemainingTags = () => showRemainingTags.value = false

// 处理鼠标按下事件 ，阻止事件冒泡
const handleMouseDown = (event: MouseEvent) => {
  if (externalAreaRef.value && externalAreaRef.value.contains(event.target as Node)) {
    event.preventDefault()
  }
}

// 组件挂载时添加全局鼠标按下事件监听器
onMounted(() => document.addEventListener('mousedown', handleMouseDown))

// 组件卸载时移除全局鼠标按下事件监听器
onBeforeUnmount(() => document.removeEventListener('mousedown', handleMouseDown))
</script>
