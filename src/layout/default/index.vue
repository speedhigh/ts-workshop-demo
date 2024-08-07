<template>
  <div class="">
    <router-view v-slot="{ Component }" class="h-full">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
