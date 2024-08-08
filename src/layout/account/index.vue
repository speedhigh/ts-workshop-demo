<template>
  <div class="reactive flex min-h-screen flex-col overflow-x-hidden  text-[#493b32]">
    <header
      class="f-c-b sticky inset-x-0 top-0 z-40 h-11 w-full bg-white md:h-20"
      style="box-shadow: 0 1px 2px rgba(0,0,0,.2)"
    >
      <!-- logo -->
      <div class="f-c">
        <div class="f-c-c h-11 px-4 md:pl-10">
          <div class="h-[24px] w-[86px] md:h-[47px] md:w-[172px]">
            <img :src="logoImg" alt="logo" />
          </div>
        </div>
        <div class="hidden lg:block">
          <h1 class="text-sm font-bold leading-5">
            塾専用コミュニケーション <br />
            &業務管理システム
          </h1>
        </div>
      </div>
      <div class="hidden pr-10 md:block">
        <PcMenu :menu-tree="menuTree" />
      </div>
      <!-- menuIcon -->
      <div class="h-11 w-[60px] md:hidden">
        <div class="f-c-c h-full">
          <div
            class="f-c-b h-5 w-6 cursor-pointer flex-col"
            @click="mobleMenuUpdate"
          >
            <span
              class="block h-1 w-full origin-left rounded bg-[#493b32] transition-transform duration-500"
              :class="{ 'rotate-[42deg]': showMobleMenu }"
            ></span>
            <span
              class="block h-1 w-full rounded bg-[#493b32] transition-opacity duration-500"
              :class="{ 'opacity-0': showMobleMenu }"
            ></span>
            <span
              class="block h-1 w-full origin-left rounded bg-[#493b32] transition-transform duration-500"
              :class="{ 'rotate-[-42deg]': showMobleMenu }"
            ></span>
          </div>
        </div>
      </div>
    </header>
    <div class="flex h-full grow flex-col">
      <!-- mobile menu -->
      <div
        class="grow"
        :class="showMobleMenu ? 'block md:hidden' : 'hidden'"
      >
        <MobileMenu
          ref="mobileMenuRef"
          :menu-tree="menuTree"
        />
      </div>
      <!-- content -->
      <div
        class="px-4 pb-[100px] pt-4 md:px-[65px] lg:mx-auto xl:min-w-[1200px]"
        :class="{ 'hidden md:block': showMobleMenu }"
      >
        <router-view v-slot="{ Component }" class="h-full">
          <component :is="Component" />
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MobileMenu from './components/MobileMenu.vue'
import PcMenu from './components/PcMenu.vue'
import logoImg from '@/assets/images/login/logo.png'
import { menuTree } from '@/data/menu'

interface MobileMenuExpose {
  menuInit: () => void
}
// 控制移动端菜单
const mobileMenuRef = ref<MobileMenuExpose | null>(null)
const showMobleMenu = ref<boolean>(false)
const mobleMenuUpdate = () => {
  showMobleMenu.value = !showMobleMenu.value
  if (!showMobleMenu.value) {
    mobileMenuRef.value?.menuInit()
  }
}
</script>
