import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import AudioPlayer from '../src/components/AudioPlayer.vue' // 使用相对路径导入组件

describe('audioPlayer.vue', () => {
  let wrapper: ReturnType<typeof mount>

  // 在每个测试用例之前执行，挂载组件
  beforeEach(() => {
    wrapper = mount(AudioPlayer, {
      props: {
        audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        trackTitle: 'Sample Track',
      },
    })
  })

  // 测试组件是否正确渲染了传递的 prop
  it('renders track title correctly', () => {
    const trackTitle = wrapper.find('[data-testid="track-title"]')
    expect(trackTitle.text()).toBe('Sample Track')
  })

  // 测试播放/暂停按钮点击后的行为
  it('toggles play/pause when button is clicked', async () => {
    const audioElement = wrapper.find('[data-testid="audio-element"]').element as HTMLAudioElement
    const playSpy = vi.spyOn(audioElement, 'play')
    const pauseSpy = vi.spyOn(audioElement, 'pause')

    const button = wrapper.find('[data-testid="play-pause-button"]')

    // 初始状态点击播放按钮
    await button.trigger('click')
    expect(playSpy).toHaveBeenCalled()

    // 再次点击播放按钮
    await button.trigger('click')
    expect(pauseSpy).toHaveBeenCalled()
  })

  // 测试进度条跳转功能
  it('seeks to the correct time when range input is changed', async () => {
    const audioElement = wrapper.find('[data-testid="audio-element"]').element as HTMLAudioElement

    // 模拟用户拖动进度条
    await wrapper.find('[data-testid="range-input"]').setValue(60)
    expect(audioElement.currentTime).toBe(60)
  })
})
