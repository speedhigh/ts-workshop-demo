<!-- 新車・中古車販売 -->
<template>
  <div class="min-h-screen bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">新車・中古車販売</h2>
        <p class="mt-2 text-lg/8 text-gray-600">お客様のニーズに合わせた最適な一台をご提案</p>
      </div>

      <div class="relative mt-16">
        <swiper-container
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :breakpoints="{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }"
          :autoplay="{ delay: 3000 }"
        >
          <swiper-slide v-for="car in cars" :key="car.id" class="mb-12 px-0.5">
            <div class="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/10">
              <!-- 车辆图片 -->
              <div class="aspect-[4/3] overflow-hidden">
                <img :src="car.imageUrl" :alt="car.name" class="size-full object-cover transition duration-300 group-hover:scale-110" />
              </div>

              <!-- 车辆信息 -->
              <div class="flex flex-1 flex-col p-6">
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-gray-900">{{ car.name }}</h3>
                  <div class="mt-4 space-y-2 text-sm text-gray-600">
                    <p v-for="(feature, index) in car.features" :key="index">{{ feature }}</p>
                  </div>
                </div>

                <!-- 详细规格 -->
                <div class="mt-6 space-y-2 text-sm">
                  <div class="flex justify-between border-b border-gray-100 py-2">
                    <span class="font-medium text-gray-500">価格（税込・リ済別）</span>
                    <span class="font-bold text-gray-900">{{ car.price }}</span>
                  </div>
                  <div class="flex justify-between border-b border-gray-100 py-2">
                    <span class="font-medium text-gray-500">年式（初度登録）</span>
                    <span class="text-gray-900">{{ car.year }}</span>
                  </div>
                  <div class="flex justify-between border-b border-gray-100 py-2">
                    <span class="font-medium text-gray-500">走行距離</span>
                    <span class="text-gray-900">{{ car.mileage }}</span>
                  </div>
                  <div class="flex justify-between border-b border-gray-100 py-2">
                    <span class="font-medium text-gray-500">排気</span>
                    <span class="text-gray-900">{{ car.engine }}</span>
                  </div>
                  <div class="flex justify-between py-2">
                    <span class="font-medium text-gray-500">車検</span>
                    <span class="text-gray-900">{{ car.inspection }}</span>
                  </div>
                </div>

                <!-- お問い合わせフォーム -->
                <div class="mt-6">
                  <a
                    href="#"
                    class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    @click="handleScroll"
                  >
                    お問い合わせフォーム
                  </a>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/pagination'

register()

const cars = [
  {
    id: 1,
    name: 'VW GOLF TSIハイライン',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: [
      '●ハイライン！',
      '●ストラーダ7HDDナビ･地デジ！',
      '●1.4ℓターボ(ツインチャージャー)！',
      '●7速ダブルクラッチギアボックスDSG！',
      '●スポーツシート',
      '●17インチAW',
    ],
    price: '40万円',
    year: '2009年',
    mileage: '6.3万km',
    engine: '1400cc',
    inspection: '車検2年付',
  },
  {
    id: 2,
    name: 'VW GOLF GT',
    imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: [
      '● 人気のGT！',
      '● ツインチャージャー！',
      '● HDDナビ･地デジ･DVD！',
      '● 黒レザーシート！',
      '● 低走行3万km台！',
      '● 車検満タン！',
    ],
    price: '45万円',
    year: '2009年',
    mileage: '3.1万km',
    engine: '1400cc',
    inspection: 'R4/6',
  },
  {
    id: 3,
    name: 'ソニカ　RSターボ',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: [
      '● 車検ロング！',
      '● インタークーラーターボ！',
      '● キセノンヘッドライト！',
      '● キーフリー！',
      '● 艶消しボンネット！',
      '● 社外フロントリップスポイラー！',
    ],
    price: '17万円',
    year: '2007年',
    mileage: '12.9万km',
    engine: '660cc',
    inspection: 'R4/6',
  },
  {
    id: 4,
    name: 'ヴェルファイア 3.5Z-Gエディション',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: [
      '● 両側パワースライドドア！',
      '● 純正ナビ・地デジ・Bモニター！',
      '● フリップダウンモニター！',
      '● 社外3連CCFLリングヘッドライト！',
      '● 社外LEDテール！',
      '● パワーバックドア！',
    ],
    price: '115万円',
    year: '2008年',
    mileage: '9.7万km',
    engine: '3500cc',
    inspection: '車検2年付',
  },
]

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

<style>
:root {
  --swiper-theme-color: #4f46e5;
  --swiper-pagination-bullet-inactive-color: #9ca3af;
}

/* 添加一些额外的动画效果 */
.swiper-slide {
  transition: transform 0.3s;
}

.swiper-slide:hover {
  transform: translateY(-5px);
}

/* 优化分页器样式 */
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  margin: 0 6px !important;
}

.swiper-pagination-bullet-active {
  transform: scale(1.2);
}
</style>
