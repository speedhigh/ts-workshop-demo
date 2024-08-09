import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import LazyLoadImage from '../src/components/LazyLoadImage.vue'

// 简单的 IntersectionObserver 模拟类
class IntersectionObserverMock implements Partial<IntersectionObserver> {
  callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }

  observe = vi.fn((element: Element) => {
    // 立即触发回调，模拟元素进入视口
    this.callback([{ isIntersecting: true, target: element }] as IntersectionObserverEntry[], this as unknown as IntersectionObserver)
  })

  unobserve = vi.fn()
  disconnect = vi.fn()
}

// 将模拟的 IntersectionObserver 设置为全局
globalThis.IntersectionObserver = IntersectionObserverMock as any

describe('lazyLoadImage.vue', () => {
  it('renders loading text when image is not in viewport', () => {
    const wrapper = mount(LazyLoadImage, {
      props: {
        src: 'https://example.com/image.jpg',
        alt: 'Example Image',
      },
    })

    expect(wrapper.find('[data-testid="loading-text"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="lazy-image"]').exists()).toBe(false)

    wrapper.unmount()
  })

  it('renders image when it is in viewport', async () => {
    const wrapper = mount(LazyLoadImage, {
      props: {
        src: 'https://example.com/image.jpg',
        alt: 'Example Image',
      },
    })

    await wrapper.vm.$nextTick()

    // 检查图片元素是否正确显示
    expect(wrapper.find('[data-testid="lazy-image"]').exists()).toBe(true)

    wrapper.unmount()
  })

  it('applies correct styles when image is loaded', async () => {
    const wrapper = mount(LazyLoadImage, {
      props: {
        src: 'https://example.com/image.jpg',
        alt: 'Example Image',
      },
    })

    await wrapper.vm.$nextTick()

    const image = wrapper.find('[data-testid="lazy-image"]')
    image.element.dispatchEvent(new Event('load'))

    await wrapper.vm.$nextTick()

    expect(image.classes()).toContain('opacity-100')
    expect(image.classes()).not.toContain('opacity-0')

    wrapper.unmount()
  })
})
