<!-- 鈑金塗装・保険ほか -->
<template>
  <div class="relative isolate py-24 sm:py-32 lg:py-56">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      >
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">鈑金塗装・保険ほか</h2>
        <p class="mt-2 text-lg/8 text-gray-400">お客様のカーライフを全力でサポートいたします</p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="post in services"
          :key="post.id"
          class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
        >
          <img :src="post.imageUrl" alt="" class="absolute inset-0 -z-10 size-full object-cover" />
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-800/40"></div>
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-700/10"></div>

          <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
            <div class="flex items-center gap-x-2">
              <span
                class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30"
              >
                {{ post.category }}
              </span>
            </div>
          </div>
          <h3 class="mt-3 text-xl/6 font-bold text-white">
            <a :href="post.href">
              <span class="absolute inset-0"></span>
              {{ post.title }}
            </a>
          </h3>
          <p class="mt-2 text-sm text-gray-400">{{ post.description }}</p>
        </article>
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      >
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    id: 1,
    category: '鈑金',
    title: '鈑金塗装',
    description: 'お車のキズやへこみ、歪みの状態をしっかり見極めて、最適な方法で迅速・丁寧に、まるで新車のボディのような仕上がりに修復いたします。小さなキズでも大掛かりな修理でもお任せください。',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    category: '保険',
    title: '自動車保険',
    description: '当社はあいおいニッセイ同和損保さんの代理店になっております。多種多様なカーライフに合わせて、数ある中から最適な自動車保険のプランをご提案させていただきます。',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    category: 'コーティング',
    title: 'KeePerコーティング',
    description: '当店はKeePer PRO SHOP です。KeePerコーティング商品を数多く取り預かっております。水弾きが良く洗車が楽になると好評です。1年・3年・5年コースに加え洗車を無料でお付けいたします！',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
]
</script>
