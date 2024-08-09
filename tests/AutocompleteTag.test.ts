import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AutocompleteTag from '../src/components/AutocompleteTag.vue'

describe('autocompleteTag.vue', () => {
  // 模拟的选项数据
  const mockOptions = [
    { id: 1, label: 'Tag1' },
    { id: 2, label: 'Tag2' },
    { id: 3, label: 'Tag3' },
  ]

  // 测试输入框聚焦时，所有选项是否显示
  it('displays all options when input is focused', async () => {
    const wrapper = mount(AutocompleteTag, {
      props: { options: mockOptions },
    })

    const inputField = wrapper.find('[data-testid="input-field"]')
    await inputField.trigger('focus')

    const tagItems = wrapper.findAll('[data-testid="tag-item"]')
    expect(tagItems.length).toBe(mockOptions.length)
  })

  // 测试输入关键字时，选项是否正确过滤
  it('filters options based on input', async () => {
    const wrapper = mount(AutocompleteTag, {
      props: { options: mockOptions },
    })

    const inputField = wrapper.find('[data-testid="input-field"]')
    await inputField.setValue('Tag1')
    await new Promise(resolve => setTimeout(resolve, 300)) // 输入框有防抖，延迟 300ms

    const tagItems = wrapper.findAll('[data-testid="tag-item"]')
    expect(tagItems.length).toBe(1)
    expect(tagItems[0].text()).toBe('Tag1')
  })

  // 测试点击选项时，标签是否被正确添加
  it('adds a tag when an option is clicked', async () => {
    const wrapper = mount(AutocompleteTag, {
      props: { options: mockOptions },
    })

    const tagsAreaRef = wrapper.vm.$refs.tagsAreaRef as HTMLElement
    if (tagsAreaRef) {
      Object.defineProperty(tagsAreaRef, 'clientWidth', { value: 500, writable: true })
    }

    const inputField = wrapper.find('[data-testid="input-field"]')
    await inputField.trigger('focus')

    const firstTag = wrapper.find('[data-testid="tag-item"]')
    await firstTag.trigger('mousedown')

    await (wrapper.vm as any).updateDisplayedLabels()

    expect((wrapper.vm as any).displayedLabels.length).toBe(1)
    expect((wrapper.vm as any).displayedLabels[0].label).toBe('Tag1')
  })

  // 测试点击搜索按钮时，是否正确触发 search 事件
  it('emits search event with selected tags when search button is clicked', async () => {
    const wrapper = mount(AutocompleteTag, {
      props: { options: mockOptions },
    })

    const inputField = wrapper.find('[data-testid="input-field"]')
    await inputField.trigger('focus')

    const firstTag = wrapper.find('[data-testid="tag-item"]')
    await firstTag.trigger('mousedown')

    const searchButton = wrapper.find('[data-testid="search-button"]')
    await searchButton.trigger('click')

    expect(wrapper.emitted('search')).toBeTruthy()
    expect(wrapper.emitted('search')![0][0]).toEqual(['Tag1'])
  })
})
