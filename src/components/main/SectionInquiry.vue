<!-- お問い合わせフォーム -->
<template>
  <div class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)]"></div>
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      >
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">お問い合わせフォーム</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          以下項目にご記入いただき送信してください
          <br />
          ＜お急ぎの場合はお電話でご連絡ください＞
        </p>
      </div>

      <form class="mx-auto mt-16 max-w-xl" @submit="handleSubmit">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <!-- お問い合わせ内容 -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-semibold leading-6 text-gray-900">
              お問い合わせ内容
              <span class="ml-1 inline-flex items-center rounded-md bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">必須</span>
            </label>
            <div class="mt-3 space-y-3">
              <div class="flex flex-wrap gap-x-6 gap-y-3">
                <div class="flex items-center gap-x-2">
                  <input v-model="formData.content" type="checkbox" class="size-4 rounded border-gray-300" value="車検・点検整備" />
                  <label class="text-sm text-gray-600">車検・点検整備</label>
                </div>
                <div class="flex items-center gap-x-2">
                  <input v-model="formData.content" type="checkbox" class="size-4 rounded border-gray-300" value="鈑金塗装" />
                  <label class="text-sm text-gray-600">鈑金塗装</label>
                </div>
                <div class="flex items-center gap-x-2">
                  <input v-model="formData.content" type="checkbox" class="size-4 rounded border-gray-300" value="新車・中古車販売" />
                  <label class="text-sm text-gray-600">新車・中古車販売</label>
                </div>
                <div class="flex items-center gap-x-2">
                  <input v-model="formData.content" type="checkbox" class="size-4 rounded border-gray-300" value="自動車保険" />
                  <label class="text-sm text-gray-600">自動車保険</label>
                </div>
                <div class="flex items-center gap-x-2">
                  <input v-model="formData.content" type="checkbox" class="size-4 rounded border-gray-300" value="洗車・車内清掃" />
                  <label class="text-sm text-gray-600">洗車・車内清掃</label>
                </div>
                <div class="flex items-center gap-x-2">
                  <input v-model="formData.content" type="checkbox" class="size-4 rounded border-gray-300" value="求人関連" />
                  <label class="text-sm text-gray-600">求��関連</label>
                </div>
                <div class="flex items-center gap-x-2">
                  <input v-model="formData.content" type="checkbox" class="size-4 rounded border-gray-300" value="その他" />
                  <label class="text-sm text-gray-600">その他</label>
                </div>
              </div>
              <div v-if="errors.content" class="text-sm text-red-500">
                {{ errors.content }}
              </div>
            </div>
          </div>

          <!-- 氏名 -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-semibold leading-6 text-gray-900">
              氏名
              <span class="ml-1 inline-flex items-center rounded-md bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">必須</span>
            </label>
            <input v-model="formData.name" type="text" class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <div v-if="errors.name" class="text-sm text-red-500">
              {{ errors.name }}
            </div>
          </div>

          <!-- 氏名カナ -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-semibold leading-6 text-gray-900">氏名カナ</label>
            <input v-model="formData.name1" type="text" class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>

          <!-- 会社・店舗・施設名 -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-semibold leading-6 text-gray-900">会社・店舗・施設名</label>
            <input v-model="formData.company" type="text" class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>

          <!-- メールアドレス -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-semibold leading-6 text-gray-900">
              メールアドレス
              <span class="ml-1 inline-flex items-center rounded-md bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">必須</span>
            </label>
            <input v-model="formData.email" type="email" class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <div v-if="errors.email" class="text-sm text-red-500">
              {{ errors.email }}
            </div>
          </div>

          <!-- 電話番号 -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-semibold leading-6 text-gray-900">
              電話番号
              <span class="ml-1 inline-flex items-center rounded-md bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">必須</span>
            </label>
            <input v-model="formData.mobile" type="tel" class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <div v-if="errors.mobile" class="text-sm text-red-500">
              {{ errors.mobile }}
            </div>
          </div>

          <!-- 住所 -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-semibold leading-6 text-gray-900">住所</label>
            <input v-model="formData.address" type="text" class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>

          <!-- メッセージ欄 -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-semibold leading-6 text-gray-900">
              メッセージ欄
              <span class="ml-1 inline-flex items-center rounded-md bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">必須</span>
            </label>
            <textarea v-model="formData.detail" rows="4" placeholder="ご相談やご質問などの内容など具体的にご記入ください" class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            <div v-if="errors.detail" class="text-sm text-red-500">
              {{ errors.detail }}
            </div>
          </div>

          <!-- 折り返しのご連絡希望 -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-semibold leading-6 text-gray-900">折り返しのご連絡希望</label>
            <div class="mt-3 grid grid-cols-2 gap-4">
              <div class="flex items-center gap-x-2">
                <input v-model="formData.want" type="radio" name="contact" class="size-4 border-gray-300" value="電話" />
                <label class="text-sm text-gray-600">電話</label>
              </div>
              <div class="flex items-center gap-x-2">
                <input v-model="formData.want" type="radio" name="contact" class="size-4 border-gray-300" value="メール" />
                <label class="text-sm text-gray-600">メール</label>
              </div>
              <div class="flex items-center gap-x-2">
                <input v-model="formData.want" type="radio" name="contact" class="size-4 border-gray-300" value="電話・メールのどちらでもいい" />
                <label class="text-sm text-gray-600">電話・メールのどちらでもいい</label>
              </div>
              <div class="flex items-center gap-x-2">
                <input v-model="formData.want" type="radio" name="contact" class="size-4 border-gray-300" value="不要" />
                <label class="text-sm text-gray-600">不要</label>
              </div>
            </div>
          </div>

          <!-- 画像認証 -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-semibold leading-6 text-gray-900">
              画像認証
              <span class="ml-1 inline-flex items-center rounded-md bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">必須</span>
            </label>
            <div class="mt-2.5 flex items-center gap-x-4">
              <img src="https://dummyimage.com/120x40/eee/aaa" alt="captcha" class="h-10 w-32 rounded" />
              <button type="button" class="text-sm text-indigo-600 hover:text-indigo-500" @click="updateCaptcha">更新</button>
            </div>
            <input v-model="formData.captcha" type="text" placeholder="上記画像内の文字を半角英数字で入力して下さい" class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <div v-if="errors.captcha" class="text-sm text-red-500">
              {{ errors.captcha }}
            </div>
          </div>
        </div>

        <!-- 送信ボタン -->
        <div class="mt-10">
          <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            送信する
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

interface FormData {
  content: string[] // 问询内容(复选框)
  name: string // 姓名
  name1: string // 姓名假名
  company: string // 公司名
  email: string // 邮箱
  mobile: string // 电话
  address: string // 地址
  detail: string // 详细信息
  want: string // 联系方式偏好
  captcha: string // 验证码
}

// 表单数据
const formData = reactive<FormData>({
  content: [],
  name: '',
  name1: '',
  company: '',
  email: '',
  mobile: '',
  address: '',
  detail: '',
  want: '',
  captcha: '',
})

// 错误信息
const errors = reactive({
  content: '',
  name: '',
  email: '',
  mobile: '',
  detail: '',
  captcha: '',
})

// 验证邮箱格式
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(email)
}

// 验证电话号码格式
const validateMobile = (mobile: string) => {
  return /^[0-9-]{10,}$/.test(mobile)
}

// 表单验证
const validateForm = () => {
  let isValid = true

  // 重置错误信息
  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = ''
  })

  // 验证必填项
  if (formData.content.length === 0) {
    errors.content = 'お問い合わせ内容を選択してください'
    isValid = false
  }

  if (!formData.name) {
    errors.name = '氏名を入力してください'
    isValid = false
  }

  if (!formData.email) {
    errors.email = 'メールアドレスを入力してください'
    isValid = false
  }
  else if (!validateEmail(formData.email)) {
    errors.email = '正しいメールアドレスを入力してください'
    isValid = false
  }

  if (!formData.mobile) {
    errors.mobile = '電話番号を入力してください'
    isValid = false
  }
  else if (!validateMobile(formData.mobile)) {
    errors.mobile = '正しい電話番号を入力してください'
    isValid = false
  }

  if (!formData.detail) {
    errors.detail = 'メッセージを入力してください'
    isValid = false
  }

  if (!formData.captcha) {
    errors.captcha = '画像認証を入力してください'
    isValid = false
  }

  return isValid
}

const addContactus = async () => {
  // TODO: 实现添加联系人逻辑
}

// 提交表单
const handleSubmit = async (e: Event) => {
  e.preventDefault()

  if (!validateForm()) {
    return
  }

  addContactus()
}

// 更新验证码
const updateCaptcha = () => {
  // TODO: 实现验证码更新逻辑
}
</script>
