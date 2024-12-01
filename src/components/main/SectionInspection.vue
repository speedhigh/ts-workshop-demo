<!-- 車検・12ヵ月点検・整備 -->
<template>
  <div class="min-h-screen bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">車検・12ヵ月点検・整備</h2>
        <p class="mt-2 text-lg/8 text-gray-600">安心・安全なカーライフをサポート</p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:gap-x-14">
        <article v-for="post in posts" :key="post.id" class="flex flex-col items-start justify-between">
          <div class="relative w-full">
            <img
              :src="post.imageUrl"
              alt=""
              class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
              <a
                :href="post.category.href"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >{{
                post.category.title }}</a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <a :href="post.href">
                  <span class="absolute inset-0"></span>
                  {{ post.title }}
                </a>
              </h3>
              <p class="mt-5 text-sm/6 text-gray-600">{{ post.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: '車検',
    href: '#',
    description: '安心・安全なカーライフをエンジョイしていただくために、テクニカルスタッフが豊富な知識と確かな技術で作業させていただきます。当日納車などお急ぎの場合でもお気軽にご相談ください。日本車はもちろん、外車もご相談に乗ります。お車の状態を確認してから、お客様のお車の使い方を分析し、見積り作成してから作業をさせていただきます。',
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    date: '2024-03-16',
    datetime: '2024-03-16',
    category: { title: '車検', href: '#' },
  },
  {
    id: 2,
    title: '点検・整備',
    href: '#',
    description: '不具合や故障は早めに点検・整備することで、事故を未然に防いだり、車検時の負担を減らすことができます。設備の整った自社工場において、素早く的確に丁寧に作業いたします。壊れてから治すのではなく、定期的にメンテナンスを行い、壊れる前に整備をさせていただきます。',
    imageUrl: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    date: '2024-03-16',
    datetime: '2024-03-16',
    category: { title: '整備', href: '#' },
  },
  {
    id: 3,
    title: 'トヨタ系ハイブリッドバッテリ交換整備',
    href: '#',
    description: '当社では、トヨタハイブリッド車の走行用バッテリの交換を数多くやっております。安価で高品質で純正同等のハイブリッドバッテリはリビルト品の使用を推奨しております。作業時間はリビルト品到着してから早くて2時間でご納車できます。費用は工賃込みで10万～20万円になります。',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    date: '2024-03-16',
    datetime: '2024-03-16',
    category: { title: 'ハイブリッド', href: '#' },
  },
  {
    id: 4,
    title: '200系ハイエース 整備パック',
    href: '#',
    description: '当社では、200系ハイエース専用パックをご用意しております。事業用様の過走行車、毎日重たい荷物を載せている方々に朗報です。別々で整備すると工賃が高くてまとめると結局高くなっていませんか？？10万キロパック、20万キロパック、25万キロパックをご用意しています。それ以外にも、各期間ごとの点検もございます。',
    imageUrl: 'https://images.unsplash.com/photo-1600661653561-629509216228?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    date: '2024-03-16',
    datetime: '2024-03-16',
    category: { title: 'ハイエース', href: '#' },
  },
]
</script>
