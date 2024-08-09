import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import BaseOverlay from '../src/components/BaseOverlay.vue'

describe('baseOverlay.vue', () => {
  it('should render overlay with correct props', async () => {
    const wrapper = mount(BaseOverlay, {
      props: {
        modelValue: true,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        teleportTo: 'body',
      },
      attachTo: document.body, // 将组件挂载到文档的body
    })

    // 等待 DOM 更新完成
    await new Promise(resolve => setTimeout(resolve, 0))

    // 查找遮罩层元素
    const overlay = document.querySelector('[data-testid="overlay"]')

    // 检查遮罩层是否存在
    expect(overlay).not.toBeNull()

    // 检查遮罩层的背景颜色
    const style = overlay!.getAttribute('style')
    expect(style).toContain('background-color: rgba(0, 0, 0, 0.5)')

    wrapper.unmount() // 解除挂载
  })

  it('should emit events when overlay is clicked', async () => {
    const wrapper = mount(BaseOverlay, {
      props: {
        modelValue: true,
      },
      attachTo: document.body, // 将组件挂载到文档的body
    })

    // 等待 DOM 更新完成
    await new Promise(resolve => setTimeout(resolve, 0))

    // 模拟点击遮罩层
    const overlay = document.querySelector('[data-testid="overlay"]')
    if (overlay) {
      overlay.dispatchEvent(new MouseEvent('click'))
    }

    // 检查事件是否正确发射
    expect(wrapper.emitted()).toHaveProperty('maskClick')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false])

    wrapper.unmount() // 解除挂载
  })

  it('should not render overlay when modelValue is false', async () => {
    const wrapper = mount(BaseOverlay, {
      props: {
        modelValue: false,
      },
      attachTo: document.body, // 将组件挂载到文档的body
    })

    // 等待 DOM 更新完成
    await new Promise(resolve => setTimeout(resolve, 0))

    // 检查是否未渲染遮罩层
    const overlay = document.querySelector('[data-testid="overlay"]')
    expect(overlay).toBeNull()

    wrapper.unmount() // 解除挂载
  })
})
