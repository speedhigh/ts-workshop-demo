<template>
  <!-- <div class="pt-20">
    <header class="fixed inset-x-0 top-0 z-50 shadow">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="font-semibold">Responsive News Portal</span>
          </a>
        </div>
        <div class="flex gap-x-4 sm:gap-x-12">
          <router-link
            to="/news-list"
            class="text-sm font-semibold leading-6"
            :class="{ hidden: $route.name === 'NewsList' }"
          >
            News articles List
          </router-link>
          <router-link
            to="/login"
            class="text-sm font-semibold leading-6"
          >
            Log in →
          </router-link>
        </div>
      </nav>
    </header>

  </div> -->
  <router-view v-slot="{ Component }" class="h-full">
    <transition name="slide-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
