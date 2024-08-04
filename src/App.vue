<template>
  <view class="container text-gray-900">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </view>
</template>
