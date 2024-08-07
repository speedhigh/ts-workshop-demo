<template>
  <view class="container text-gray-900">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </view>
</template>

<style>
#nprogress .bar {
  background: #0064c8 !important;
}
/* 设置滚动条滑块的样式 */
/* 1,滚动条 */
::-webkit-scrollbar {
  width: 6px;
  cursor: pointer;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  width: 4px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
