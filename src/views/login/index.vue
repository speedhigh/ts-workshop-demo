<template>
  <main class="text-[13px] md:text-[15.875px]">
    <!-- その他の登録 -->
    <section>
      <div
        class="mt-5 pb-2.5 md:mt-0"
        style="border-bottom: 1px solid #eee"
      >
        <h2 class="text-[25px] font-bold leading-4 md:leading-[27px]">その他の登録</h2>
      </div>
      <div class="mt-5 flex flex-col md:flex-row">
        <div class="border-b-solid w-full border-b-2 border-[#b4a094] px-2 py-4 text-center md:border-b-0 md:border-r-2 md:px-1 md:py-0">
          <p class="mb-3 leading-[18px] md:leading-[22px]">
            メールアドレス（共通アカウント）で
            <br />
            ログインする場合はこちら
          </p>
          <button
            class="h-8 rounded-[4px] bg-[#fddc3e] px-7 text-center text-sm font-bold leading-8"
          >
            共通アカウントログイン
          </button>
        </div>

        <div class="border-b-solid w-full border-b-2 border-[#b4a094] px-2 py-4 text-center md:border-b-0 md:border-r-2 md:py-0">
          <p class="mb-3 leading-[18px] md:leading-[22px]">
            Comiruをすでに友達に追加済みの方
            <br />
            以下のアイコンをクリックしてログイン
          </p>
          <a
            class="inline-block size-9"
            href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&amp;client_id=1567784603&amp;redirect_uri=https%3A%2F%2Fcomiru.jp%2Fauth%2Fcheck_social_account%3Fidentity_type%3Dline&amp;state=537424b1-1358-4d72-837b-f4cf4e93214b-school-id-1&amp;scope=openid%20profile&amp;bot_prompt=aggressive"
          >
            <img :src="btnBaseImg" class="inline-block w-full" />
          </a>
        </div>

        <div class="border-b-solid w-full px-2 py-4 text-center md:py-0">
          <p class="mb-3 leading-[18px] md:leading-[22px]">
            ComiruをLINEではじめてお使いの方
            <br />
            以下のアイコンをクリックして友だち追加
          </p>
          <a
            href="https://line.me/R/ti/p/%40onw0127a"
            class="inline-block h-[36px] w-[116px]"
          >
            <img :src="jaImg" alt="友だち追加" height="36" width="116" border="0" />
          </a>
        </div>
      </div>
    </section>
    <!-- 生徒・保護者ログイン -->
    <section class="mt-5 md:mt-10">
      <div
        class="pb-2.5"
        style="border-bottom: 1px solid #eee"
      >
        <h2 class="text-[25px] font-bold leading-5">
          生徒・保護者ログイン
          <span class="text-[80%]">（スクールポパー）</span>
        </h2>
      </div>

      <p class="mb-5 mt-4 leading-[19px] md:text-[15px] md:leading-[21px]">
        生徒番号とパスワードを入力してログインしてください。
        <span class="text-[15px] text-black">生徒番号</span>や
        <span class="text-[15px] text-black">パスワード</span>
        がわからない場合は、教室にお問い合わせください。
      </p>
      <div>
        <ul class="text-[#e53935]">
          <li v-show="!loginForm.studentNo && showError">生徒番号 を入力してください</li>
          <li v-show="!loginForm.password && showError">パスワード を入力してください</li>
        </ul>
      </div>
      <form method="POST" class="mt-2.5">
        <div>
          <div class="f-c space-x-2">
            <label class="flex items-center" @click="selectOption(1)">
              <input v-model="selectedOption" type="radio" name="option" value="1" class="hidden" />
              <span
                class="flex size-4 items-center justify-center rounded-full border bg-white"
                :class="[selectedOption === 1 ? 'border-[#16bfb7]' : 'border-gray-300']"
              >
                <span
                  class="size-2.5 rounded-full"
                  :class="[selectedOption === 1 ? 'bg-[#16bfb7]' : 'bg-white']"
                ></span>
              </span>
              <span class="ml-2">保護者</span>
            </label>
            <label class="flex items-center" @click="selectOption(2)">
              <input v-model="selectedOption" type="radio" name="option" value="2" class="hidden" />
              <span
                class="flex size-4 items-center justify-center rounded-full border bg-white"
                :class="[selectedOption === 2 ? 'border-[#16bfb7]' : 'border-gray-300']"
              >
                <span
                  class="size-2.5 rounded-full"
                  :class="[selectedOption === 2 ? 'bg-[#16bfb7]' : 'bg-white']"
                ></span>
              </span>
              <span class="ml-2">生徒</span>
            </label>
          </div>
        </div>
        <div class="mt-2">
          <div>
            <label
              for="student-no"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              生徒番号
            </label>
            <div class="mt-1 max-w-[540px]">
              <input
                id="student-no"
                v-model="loginForm.studentNo"
                type="text"
                name="student-no"
                autocomplete="student-no"
                class="block w-full rounded border border-gray-300 px-2 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#16bfb7] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="mt-2">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              パスワード
            </label>
            <div class="mt-1 max-w-[540px]">
              <input
                id="password"
                v-model="loginForm.password"
                type="password"
                name="password"
                autocomplete="current-password"
                class="block w-full rounded border border-gray-300 px-2 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#16bfb7] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="mt-2">
            <label for="show-password" class="f-c block text-sm font-medium leading-6 text-gray-900">
              <input id="show-password" type="checkbox" class="peer hidden" />
              <div class="f-c-c mr-2 size-4 rounded  border border-gray-300 peer-checked:border-[#16bfb7] peer-checked:bg-[#16bfb7]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 text-white">
                  <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                </svg>
              </div>
              パスワードを表示
            </label>
          </div>
          <button
            type="button"
            class="mt-5 h-[36.4px] rounded-2xl bg-[#16bfb7] px-7 text-sm text-white"
            style="box-shadow: 0 4px 8px rgba(0,0,0,.1)"
            @click="login"
          >
            ログインする
          </button>
          <div class="mt-5">
            <li>
              <span class="text-[#16bfb7] underline">パスワードを忘れた方はこちら</span>
            </li>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script lang="ts" setup>
import btnBaseImg from '@/assets/images/btn_base.png'
import jaImg from '@/assets/images/ja.png'

const router = useRouter()
const showError = ref<boolean>(false)

// 单选框
const selectedOption = ref<number>(1)
const selectOption = (value: number) => {
  selectedOption.value = value
}

// 登录
const loginForm = reactive({
  studentNo: '',
  password: '',
})
const login = () => {
  if (!loginForm.studentNo || !loginForm.password) {
    showError.value = true
    return
  }
  showError.value = false
  router.push(`/news-list`)
}
</script>
