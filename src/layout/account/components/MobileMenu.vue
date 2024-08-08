<template>
  <div
    v-for="item in props.menuTree"
    :key="item.value"
    class="relative"
    :class="showSecMenu ? 'w-1/2 duration-300 transition-all ease-out' : 'w-full'"
  >
    <div
      class="f-c-b h-[60px] pl-4"
      :class="menuActive === item.value && showSecMenu ? 'bg-[#f8f8f8]' : 'bg-white'"
      style="border-bottom: .5px solid #d0d0d5"
      @click="menuActiveChange(item.value, !!item.children)"
    >
      <p class="text-lg font-bold">{{ item.label }}</p>
      <div v-if="item.children" class="px-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-8">
          <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <!-- 二级菜单 -->
    <div
      class="fixed inset-y-0 right-0 z-10 h-full w-1/2 overflow-y-scroll bg-[#f8f8f8] pt-11"
      :class="menuActive === item.value && showSecMenu ? 'opacity-100 transition-all duration-300' : ' ease-out invisible opacity-50'"
    >
      <template
        v-for="secItem in item.children"
        :key="secItem.value"
      >
        <div
          class="f-c-b h-[60px] pl-4 transition-all"
          :class="secMenuActive === secItem.value && showLastMenu ? 'bg-[#16bfb7] text-white' : 'bg-[#f8f8f8]'"
          style="border-bottom: .5px solid #d0d0d5"
          @click="secMenuActiveChange(secItem.value, !!item.children)"
        >
          <p class="text-lg">{{ secItem.label }}</p>
          <div
            v-if="secItem.children"
            class="px-2 transition-all"
            :class="secMenuActive === secItem.value && showLastMenu ? 'rotate-90 text-white' : ''"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
              <path d="M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z" />
            </svg>
          </div>
        </div>
        <!-- 三级菜单 -->
        <div
          :class="secMenuActive === secItem.value && showLastMenu ? 'max-h-screen transition-max-height duration-500' : 'max-h-0 overflow-hidden transition-max-height duration-200 ease-in-out'"
        >
          <div
            v-for="lastItem in secItem.children"
            :key="lastItem.value"
            class="f-c h-[46px] w-full px-4 text-sm"
            style="border-bottom: .5px solid #d0d0d5"
          >
            {{ lastItem.label }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface TreeNode {
  label: string
  value: string
  children: TreeNode[] | null
}
const props = defineProps<{
  menuTree: TreeNode[]
}>()

// 菜单默认值
const menuActive = ref<string>('')
// 二级菜单默认值
const secMenuActive = ref<string>('')
// 控制二级菜单
const showSecMenu = ref<boolean>(false)
// 控制三级菜单
const showLastMenu = ref<boolean>(false)
// menu 点击
const menuActiveChange = (active: string, hasChildren: boolean) => {
  if (menuActive.value !== active && showLastMenu.value) {
    secMenuActive.value = ''
    showLastMenu.value = false
  }
  if (hasChildren) {
    menuActive.value = active
    showSecMenu.value = hasChildren
  }
}
// 二级菜单 点击
const secMenuActiveChange = (active: string, hasChildren: boolean) => {
  secMenuActive.value = active === secMenuActive.value ? '' : active
  showLastMenu.value = hasChildren
}
// 初始化默认菜单
const menuInit = () => {
  menuActive.value = secMenuActive.value = ''
  showSecMenu.value = showLastMenu.value = false
}

defineExpose({
  menuInit,
})
</script>
