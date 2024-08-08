import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
import BackToTop from '../src/components/BackToTop.vue' // 使用相对路径导入组件

// 模拟 useScroll 方法
vi.mock('@vueuse/core', () => {
  return {
    useScroll: vi.fn(),
  }
})

describe('backToTop.vue', () => {
  let wrapper: ReturnType<typeof mount>
  const scrollY = ref(0)

  // 模拟 useScroll 返回值
  beforeEach(() => {
    (useScroll as ReturnType<typeof vi.fn>).mockReturnValue({ y: scrollY })
    wrapper = mount(BackToTop)
  })

  // 测试按钮初始状态是否不可见
  it('button is initially not visible', () => {
    const button = wrapper.find('[data-testid="back-to-top-button"]')
    expect(button.exists()).toBe(false)
  })

  // 测试滚动超过 200 时按钮是否可见
  it('button becomes visible when scrolled down', async () => {
    scrollY.value = 250
    await wrapper.vm.$nextTick()
    const button = wrapper.find('[data-testid="back-to-top-button"]')
    expect(button.exists()).toBe(true)
  })

  // 测试滚动回顶部时按钮是否不可见
  it('button becomes invisible when scrolled to top', async () => {
    scrollY.value = 250
    await wrapper.vm.$nextTick()
    scrollY.value = 150
    await wrapper.vm.$nextTick()
    const button = wrapper.find('[data-testid="back-to-top-button"]')
    expect(button.exists()).toBe(false)
  })

  // 测试按钮点击事件
  it('scrolls to top when button is clicked', async () => {
    window.scrollTo = vi.fn()
    scrollY.value = 250
    await wrapper.vm.$nextTick()
    const button = wrapper.find('[data-testid="back-to-top-button"]')
    await button.trigger('click')
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
