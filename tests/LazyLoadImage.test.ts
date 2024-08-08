import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import LazyLoadImage from '../src/components/LazyLoadImage.vue'

// 简化 IntersectionObserver 的模拟类
class IntersectionObserverMock {
  constructor(public callback: IntersectionObserverCallback) {}

  observe = vi.fn() // 模拟 observe 方法
  unobserve = vi.fn() // 模拟 unobserve 方法
  disconnect = vi.fn() // 模拟 disconnect 方法

  // 手动触发观察者的回调函数
  triggerIntersect = (entries: IntersectionObserverEntry[]) => {
    this.callback(entries, this as unknown as IntersectionObserver)
  }
}

// 设置全局的 IntersectionObserver 模拟
globalThis.IntersectionObserver = IntersectionObserverMock as any

describe('lazyLoadImage.vue', () => {
  // 测试图片未在视口内时的渲染情况
  it('renders loading text when image is not in viewport', () => {
    const wrapper = mount(LazyLoadImage, {
      props: {
        src: 'https://example.com/image.jpg',
        alt: 'Example Image',
      },
    })

    // 查找加载文本和图片元素
    const loadingText = wrapper.find('[data-testid="loading-text"]')
    const image = wrapper.find('[data-testid="lazy-image"]')

    // 断言加载文本存在，图片元素不存在
    expect(loadingText.exists()).toBe(true)
    expect(image.exists()).toBe(false)

    wrapper.unmount()
  })

  // 测试图片在视口内时的渲染情况
  it('renders image when it is in viewport', async () => {
    const wrapper = mount(LazyLoadImage, {
      props: {
        src: 'https://example.com/image.jpg',
        alt: 'Example Image',
      },
    })

    // 创建 IntersectionObserverMock 实例并手动触发
    const observerInstance = new IntersectionObserverMock(wrapper.vm.loadImage)
    observerInstance.triggerIntersect([{ isIntersecting: true } as IntersectionObserverEntry])

    // 等待 DOM 更新
    await wrapper.vm.$nextTick()

    // 查找图片元素
    const image = wrapper.find('[data-testid="lazy-image"]')
    // 断言图片元素存在
    expect(image.exists()).toBe(true)

    wrapper.unmount()
  })

  // 测试图片加载完成后的样式应用情况
  it('applies correct styles when image is loaded', async () => {
    const wrapper = mount(LazyLoadImage, {
      props: {
        src: 'https://example.com/image.jpg',
        alt: 'Example Image',
      },
    })

    // 创建 IntersectionObserverMock 实例并手动触发
    const observerInstance = new IntersectionObserverMock(wrapper.vm.loadImage)
    observerInstance.triggerIntersect([{ isIntersecting: true } as IntersectionObserverEntry])

    // 等待 DOM 更新
    await wrapper.vm.$nextTick()

    // 查找图片元素
    const image = wrapper.find('[data-testid="lazy-image"]')
    // 模拟图片加载完成事件
    image.element.dispatchEvent(new Event('load'))
    await wrapper.vm.$nextTick()

    // 断言图片元素的样式类
    expect(image.classes()).toContain('opacity-100')
    expect(image.classes()).not.toContain('opacity-0')

    wrapper.unmount()
  })
})
