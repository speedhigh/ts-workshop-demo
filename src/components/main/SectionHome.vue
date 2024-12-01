<template>
  <div class="relative isolate h-screen overflow-hidden pt-14">
    <div class="absolute inset-0 -z-10">
      <img
        src="https://cdn.pixabay.com/photo/2017/11/19/23/25/bmw-2964072_1280.jpg"
        alt="background"
        class="size-full object-cover"
      />
      <div class="absolute inset-0 bg-gray-900/70"></div>
    </div>
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      >
      </div>
    </div>
    <div class="mx-auto max-w-5xl px-6 lg:px-8">
      <div class="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56 xl:py-72">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            お車のことなら何でもご相談ください！
            <a href="#inquiry" class="font-bold text-white" @click="handleScroll">
              <span class="absolute inset-0" aria-hidden="true"></span>
              お問い合わせフォーム
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-balance text-5xl font-bold tracking-tight text-white sm:text-7xl">
            お車のことならTDGにお任せください！
          </h1>
          <p class="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            お車の点検・車検・板金・オー行クション代行などのお車に関する様々なサービスはTDGへGO！！さらに無料代車もあります！！これまでの豊富な経験や専門的な知識、そして確かな技術力を活かして、様々なご要望やニーズにお応えし、皆様の快適なカーライフをサポートいたします。お車のことでお悩み・お困り事がございましたら、TDGまでお気軽にお問い合わせ・ご相談ください。
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
              お電話はこちら
            </a>
            <a href="#inquiry" class="text-sm/6 font-bold text-white" @click="handleScroll">
              お問い合わせフォーム
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      >
      </div>
    </div>
  </div>
</template>

<script setup>
const handleScroll = (event) => {
  event.preventDefault()

  nextTick(() => {
    const element = document.querySelector('#inquiry')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  })
}
</script>
