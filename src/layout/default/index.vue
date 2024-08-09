<template>
  <div>
    <header
      class="fixed inset-x-0 top-0 z-50 bg-white lg:shadow"
      :class="{ shadow: $route.meta.border }"
    >
      <LayoutNavbar />
    </header>
    <main>
      <router-view v-slot="{ Component, route }">
        <keep-alive>
          <component :is="Component" v-if="route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" v-if="!route.meta.keepAlive" />
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import LayoutNavbar from './components/LayoutNavbar.vue'
</script>
