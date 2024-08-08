import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AutocompleteTag from '../src/components/AutocompleteTag.vue' // 请将 'AutocompleteTag' 替换为组件的实际名称

describe('autocompleteTag.vue', () => {
  // 测试组件是否正确渲染
  it('renders correctly', () => {
    const wrapper = mount(AutocompleteTag, {
      props: {
        modelValue: [], // 传递空的 modelValue 作为初始值
      },
    })
    expect(wrapper.exists()).toBe(true) // 断言组件存在
    wrapper.unmount() // 确保在每次测试后卸载组件
  })

  // 测试输入框是否正确渲染
  it('renders input field', () => {
    const wrapper = mount(AutocompleteTag, {
      props: {
        modelValue: [],
      },
    })
    const inputField = wrapper.find('[data-testid="input-field"]')
    expect(inputField.exists()).toBe(true) // 断言输入框存在
    wrapper.unmount() // 确保在每次测试后卸载组件
  })

  // 测试搜索按钮点击事件是否触发
  it('emits search event when search button is clicked', async () => {
    const wrapper = mount(AutocompleteTag, {
      props: {
        modelValue: [],
      },
    })
    const searchButton = wrapper.find('[data-testid="search-button"]')
    await searchButton.trigger('click') // 模拟点击事件
    expect(wrapper.emitted('search')).toBeTruthy() // 断言触发了搜索事件
    wrapper.unmount() // 确保在每次测试后卸载组件
  })

  // 测试标签是否正确渲染
  it('renders tags correctly', () => {
    const tags = [{ id: 1, label: 'Tag1' }, { id: 2, label: 'Tag2' }]
    const wrapper = mount(AutocompleteTag, {
      props: {
        modelValue: tags,
      },
    })
    const tagElements = wrapper.findAll('[data-testid="tag-element"]')
    expect(tagElements.length).toBe(tags.length) // 断言标签数量正确
    tags.forEach((tag, index) => {
      expect(tagElements[index].text()).toContain(tag.label) // 断言标签内容正确
    })
    wrapper.unmount() // 确保在每次测试后卸载组件
  })

  // 测试点击标签删除按钮是否触发删除操作
  it('removes tag when delete button is clicked', async () => {
    const tags = [{ id: 1, label: 'Tag1' }, { id: 2, label: 'Tag2' }]
    const wrapper = mount(AutocompleteTag, {
      props: {
        modelValue: tags,
      },
    })
    const deleteButtons = wrapper.findAll('[data-testid="delete-button"]')
    const deleteButton = deleteButtons.at(0)
    if (deleteButton) {
      await deleteButton.trigger('click') // 模拟点击删除按钮
      await wrapper.setProps({ modelValue: wrapper.vm.tags }) // 设置新的 modelValue
      await wrapper.vm.$nextTick() // 确保 DOM 更新
      const tagElements = wrapper.findAll('[data-testid="tag-element"]')
      expect(tagElements.length).toBe(1) // 断言标签数量正确
      expect(tagElements[0].text()).toContain('Tag2') // 断言剩余标签内容正确
    }
    else {
      throw new Error('Delete button not found')
    }
    wrapper.unmount() // 确保在每次测试后卸载组件
  })

  // 测试逐步添加标签并显示溢出按钮
  it('shows +n button when tags overflow', async () => {
    const wrapper = mount(AutocompleteTag, {
      props: {
        modelValue: [],
      },
    })

    const tags = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, label: `Tag${i + 1}` }))

    for (const tag of tags) {
      wrapper.setProps({ modelValue: [...wrapper.props().modelValue, tag] }) // 逐步添加标签
      await wrapper.vm.$nextTick()
      wrapper.vm.calculateOverflow() // 手动触发溢出计算
      await wrapper.vm.$nextTick()
    }

    const overflowButton = wrapper.find('[data-testid="overflow-button"]')
    expect(overflowButton.exists()).toBe(true) // 断言溢出按钮存在
    if (overflowButton.exists()) {
      expect(overflowButton.text()).toContain(`+${tags.length - wrapper.vm.maxTagCount}`) // 断言溢出按钮显示正确的数量
    }
    wrapper.unmount() // 确保在每次测试后卸载组件
  })

  // 测试点击 +n 按钮时，剩余标签是否正确显示
  it('toggles remaining tags display when +n button is clicked', async () => {
    const tags = Array.from({ length: 10 }, (_, i) => ({ id: i + 1, label: `Tag${i + 1}` }))
    const wrapper = mount(AutocompleteTag, {
      props: {
        modelValue: tags,
      },
    })
    // 手动触发溢出计算
    wrapper.vm.calculateOverflow()
    await wrapper.vm.$nextTick()
    const overflowButton = wrapper.find('[data-testid="overflow-button"]')
    expect(overflowButton.exists()).toBe(true) // 断言溢出按钮存在
    if (overflowButton.exists()) {
      await overflowButton.trigger('click') // 模拟点击溢出按钮
      await wrapper.vm.$nextTick() // 确保 DOM 更新
      expect(wrapper.vm.showRemainingTags).toBe(true) // 断言显示剩余标签
    }
    wrapper.unmount() // 确保在每次测试后卸载组件
  })
})
