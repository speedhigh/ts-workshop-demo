import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BasePagination from '../src/components/BasePagination.vue'

describe('basePagination.vue', () => {
  // 测试渲染当前页码和总页数是否正确
  it('renders current and total pages correctly', () => {
    const wrapper = mount(BasePagination, {
      props: {
        currentPage: 2,
        totalPages: 5,
        continues: 3,
      },
    })

    // 查找显示当前页码的元素，并检查其文本内容是否正确
    const currentPage = wrapper.find('[data-testid="current-page"]').text()
    expect(currentPage).toBe('2 / 5')
    wrapper.unmount()
  })

  // 测试在第一页时，上一页按钮是否被禁用
  it('disables previous button on the first page', () => {
    const wrapper = mount(BasePagination, {
      props: {
        currentPage: 1,
        totalPages: 5,
        continues: 3,
      },
    })

    // 查找上一页按钮，并检查其disabled属性是否存在
    const prevButton = wrapper.find('[data-testid="prev-button"]')
    expect(prevButton.attributes('disabled')).toBeDefined()
    wrapper.unmount()
  })

  // 测试在最后一页时，下一页按钮是否被禁用
  it('disables next button on the last page', () => {
    const wrapper = mount(BasePagination, {
      props: {
        currentPage: 5,
        totalPages: 5,
        continues: 3,
      },
    })

    // 查找下一页按钮，并检查其disabled属性是否存在
    const nextButton = wrapper.find('[data-testid="next-button"]')
    expect(nextButton.attributes('disabled')).toBeDefined()
    wrapper.unmount()
  })

  // 测试点击页码按钮时，是否正确触发事件并更新页码
  it('emits update:currentPage event when a page number is clicked', async () => {
    const wrapper = mount(BasePagination, {
      props: {
        currentPage: 2,
        totalPages: 5,
        continues: 3,
      },
    })

    // 查找页码按钮并模拟点击事件
    const pageButton = wrapper.find('[data-testid="page-3-button"]')
    await pageButton.trigger('click')

    // 检查事件是否正确触发，并验证事件参数
    expect(wrapper.emitted('update:currentPage')).toBeTruthy()
    expect(wrapper.emitted('update:currentPage')![0]).toEqual([3])
    wrapper.unmount()
  })

  // 测试点击下一页按钮时，是否正确触发事件并更新页码
  it('emits update:currentPage event when next button is clicked', async () => {
    const wrapper = mount(BasePagination, {
      props: {
        currentPage: 1,
        totalPages: 5,
        continues: 3,
      },
    })

    // 查找下一页按钮并模拟点击事件
    const nextButton = wrapper.find('[data-testid="next-button"]')
    await nextButton.trigger('click')

    // 检查事件是否正确触发，并验证事件参数
    expect(wrapper.emitted('update:currentPage')).toBeTruthy()
    expect(wrapper.emitted('update:currentPage')![0]).toEqual([2])
    wrapper.unmount()
  })

  // 测试点击上一页按钮时，是否正确触发事件并更新页码
  it('emits update:currentPage event when previous button is clicked', async () => {
    const wrapper = mount(BasePagination, {
      props: {
        currentPage: 2,
        totalPages: 5,
        continues: 3,
      },
    })

    // 查找上一页按钮并模拟点击事件
    const prevButton = wrapper.find('[data-testid="prev-button"]')
    await prevButton.trigger('click')

    // 检查事件是否正确触发，并验证事件参数
    expect(wrapper.emitted('update:currentPage')).toBeTruthy()
    expect(wrapper.emitted('update:currentPage')![0]).toEqual([1])
    wrapper.unmount()
  })

  // 测试在 "Go to" 输入框中按下回车键时，是否正确跳转到指定页码
  it('goes to correct page when enter key is pressed in goto input', async () => {
    const wrapper = mount(BasePagination, {
      props: {
        currentPage: 2,
        totalPages: 5,
        continues: 3,
      },
    })

    // 查找 "Go to" 输入框并模拟输入和回车事件
    const gotoInput = wrapper.find('[data-testid="goto-input"]')
    await gotoInput.setValue('4')
    await gotoInput.trigger('keyup.enter')

    // 检查事件是否正确触发，并验证事件参数
    expect(wrapper.emitted('update:currentPage')).toBeTruthy()
    expect(wrapper.emitted('update:currentPage')![0]).toEqual([4])
    wrapper.unmount()
  })
})
