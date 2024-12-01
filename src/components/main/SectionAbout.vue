<!-- 会社情報・アクセス -->
<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 -z-10">
      <img
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
        alt="background"
        class="size-full object-cover opacity-20"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80"></div>
    </div>

    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>

    <!-- 主标题 -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl">会社概要・マップ</h2>
        <p class="mt-6 text-lg/8 text-gray-300">
          私たちは、お客様の大切なお車を心を込めて整備し、安全で快適なカーライフをサポートいたします。
          確かな技術と誠実なサービスで、お客様との信頼関係を築き、地域社会に貢献してまいります。
        </p>
      </div>
    </div>

    <!-- 会社概要 -->
    <div class="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <dl class="grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
          <div>
            <dt class="text-sm font-semibold leading-6 text-gray-300">会社名</dt>
            <dd class="mt-2 text-base leading-7 text-white">株式会社 TDG</dd>
          </div>
          <div>
            <dt class="text-sm font-semibold leading-6 text-gray-300">設立</dt>
            <dd class="mt-2 text-base leading-7 text-white">2018年（平成30年）8月</dd>
          </div>
          <div>
            <dt class="text-sm font-semibold leading-6 text-gray-300">代表</dt>
            <dd class="mt-2 text-base leading-7 text-white">代表取締役 唐 徳剛（トウ トクゴウ）</dd>
          </div>
          <div>
            <dt class="text-sm font-semibold leading-6 text-gray-300">所在地</dt>
            <dd class="mt-2 text-base leading-7 text-white">〒224-0044 神奈川県横浜市都筑区川向町4-1 A号棟</dd>
          </div>
          <div>
            <dt class="text-sm font-semibold leading-6 text-gray-300">アクセス</dt>
            <dd class="mt-2 text-base leading-7 text-white">第3京浜「港北IC」から車で約5分、JR横浜線「小机駅」から車で約8分</dd>
          </div>
          <div>
            <dt class="text-sm font-semibold leading-6 text-gray-300">TEL</dt>
            <dd class="mt-2 text-base leading-7 text-white">045-620-9919</dd>
          </div>
          <div>
            <dt class="text-sm font-semibold leading-6 text-gray-300">FAX</dt>
            <dd class="mt-2 text-base leading-7 text-white">045-620-9619</dd>
          </div>
          <div>
            <dt class="text-sm font-semibold leading-6 text-gray-300">営業時間</dt>
            <dd class="mt-2 text-base leading-7 text-white">9:00～18:00 ※日曜・祝日定休</dd>
          </div>
          <div class="sm:col-span-2">
            <dt class="text-sm font-semibold leading-6 text-gray-300">業務内容</dt>
            <dd class="mt-2 text-base leading-7 text-white">
              一般整備、車検・点検、鈑金塗装、自動車販売、洗車・車内清掃、自動車保険ほか、オークション代行
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- 地図位置 -->
    <div class="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="aspect-video w-full overflow-hidden rounded-xl bg-white/5 shadow-2xl ring-1 ring-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12990.102807366844!2d139.56951715884048!3d35.51600447907607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601858f264d9fa75%3A0xb8b8a56dc3ce80d5!2z44CSMjI0LTAwNDQg56We5aWI5bed55yM5qiq5rWc5biC6YO9562R5Yy65bed5ZCR55S677yU4oiS77yR!5e0!3m2!1sja!2sjp!4v1540290538212"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>
  </div>
</template>
