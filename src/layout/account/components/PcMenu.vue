<template>
  <div class="w-full">
    <ul class="flex space-x-4">
      <li
        v-for="(item, index) in menuTreeList"
        :key="item.value"
        class="f-c relative cursor-pointer rounded px-2 hover:bg-gray-100"
        @mouseenter="menuActiveChange(item.value, !!item.children)"
        @mouseleave="menuActiveChange('', false)"
      >
        <div class="f-c space-x-2">
          <p class="font-bold">{{ item.label }}</p>
          <div
            v-if="item.children"
            class="transition-all duration-500"
            :class="menuActive === item.value && showSecMenu ? '-rotate-180' : ''"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-5">
              <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <!-- 二级菜单 -->
        <transition name="dropdown">
          <div
            v-if="menuActive === item.value && showSecMenu"
            class="absolute top-8 z-10 min-w-40 pt-4 transition-all duration-300"
            :class="showLastMenu && index === menuTreeList.length - 1 ? 'right-10' : 'right-0 left-0'"
          >
            <ul class="size-full rounded-md bg-white py-1 shadow-lg">
              <li
                v-for="secItem in item.children"
                :key="secItem.value"
                class="relative h-10 hover:bg-[#16bfb7] hover:text-white"
                @mouseenter="secMenuActiveChange(secItem.value, !!secItem.children)"
                @mouseleave="secMenuActiveChange('', false)"
              >
                <div class="f-c-c h-full space-x-2">
                  <p>{{ secItem.label }}</p>
                  <div v-if="secItem.children">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-2.5">
                      <path d="M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z" />
                    </svg>
                  </div>
                </div>
                <!-- 三级菜单 -->
                <div
                  v-if="secMenuActive === secItem.value && showLastMenu"
                  class="absolute left-full top-0 z-10 min-w-56 bg-white text-[#493b32]"
                >
                  <ul class="size-full rounded-md py-1 shadow-lg">
                    <li
                      v-for="lastItem in secItem.children"
                      :key="lastItem.value"
                      class="f-c-c relative h-10 hover:bg-[#16bfb7] hover:text-white"
                    >
                      <p>{{ lastItem.label }}</p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </transition>
      </li>
      <button class="h-8 rounded-2xl bg-[#fddc3e] px-2.5 font-bold leading-8">
        {{ props.menuTree[props.menuTree.length - 1].label }}
      </button>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'

const props = defineProps<{
  menuTree: TreeNode[]
}>()
const { width } = useWindowSize() // 屏幕宽度
interface TreeNode {
  label: string
  value: string
  children: TreeNode[] | null
}
const menuTreeList = computed(() => {
  if (width.value < 1500) {
    return props.menuTree.filter(item => item.children && item.children.length > 0)
  }
  else {
    return props.menuTree.slice(0, props.menuTree.length - 1)
  }
})

// 菜单默认值
const menuActive = ref<string>('')
// 二级菜单默认值
const secMenuActive = ref<string>('')
// 控制二级菜单
const showSecMenu = ref<boolean>(false)
// 控制三级菜单
const showLastMenu = ref<boolean>(false)
// 菜单 选中
const menuActiveChange = (active: string, hasChildren: boolean) => {
  menuActive.value = active
  showSecMenu.value = hasChildren
}
// 二级菜单 选中
const secMenuActiveChange = (active: string, hasChildren: boolean) => {
  secMenuActive.value = active
  showLastMenu.value = hasChildren
}
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.5s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
