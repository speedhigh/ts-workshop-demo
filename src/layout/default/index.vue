<template>
  <div>
    <header
      class="fixed inset-x-0 top-0 z-50 bg-white"
      :class="{ shadow: $route.meta.border }"
    >
      <LayoutNavbar />
    </header>
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" v-if="route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!route.meta.keepAlive" />
    </router-view>
  </div>
</template>

<script setup lang="ts">
import LayoutNavbar from './components/LayoutNavbar.vue'
</script>
