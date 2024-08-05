import type { NewsInter, PaginateResult, TagsInter } from '@/types/new'

import newImage1 from '@/assets/images/new/new_01.jpg'
import newImage2 from '@/assets/images/new/new_02.jpg'
import newImage3 from '@/assets/images/new/new_03.jpg'
import newImage4 from '@/assets/images/new/new_04.jpg'
import newImage5 from '@/assets/images/new/new_05.jpg'

// 图片地址列表
const imageUrls: string[] = [newImage1, newImage2, newImage3, newImage4, newImage5]

// 生成随机标题
function generateRandomTitle(length: number): string {
  const words = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'.split(' ')
  let title = ''
  while (title.length < length) {
    title += `${words[Math.floor(Math.random() * words.length)]} `
  }
  return title.trim().substring(0, length)
}

// 生成随机内容
function generateRandomContent(length: number): string {
  const words = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'.split(' ')
  let content = ''
  while (content.length < length) {
    content += `${words[Math.floor(Math.random() * words.length)]} `
  }
  return content.trim().substring(0, length)
}

// 生成标签数据集
function generateTags(numTags: number): TagsInter[] {
  const tagsArray: TagsInter[] = []
  const tagNames = new Set<string>()

  // 生成标签名
  while (tagNames.size < numTags) {
    tagNames.add(`Tag${Math.random().toString(36).substring(2, 8)}`)
  }

  // 生成标签
  let id = 1
  for (const tagName of tagNames) {
    tagsArray.push({
      id: id++,
      label: tagName,
    })
  }

  // 返回标签数组
  return tagsArray
}

// 生成新闻数据集
function generateNews(numNews: number, tags: TagsInter[]): NewsInter[] {
  const newsArray: NewsInter[] = []
  const titles = new Set<string>()

  while (titles.size < numNews) {
    titles.add(generateRandomTitle(30)) // 生成 30 字符的标题
  }

  let id = 1
  for (const title of titles) {
    const randomTags = getRandomTags(tags, 2) // 随机选择两个标签
    const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)] // 随机选择一个图片
    const content = generateRandomContent(300) // 生成 300 字符的内容
    newsArray.push({
      id: id++,
      title,
      content,
      tags: randomTags.map(tag => tag.label),
      date: new Date().toISOString().split('T')[0],
      imageUrl: randomImage, // 添加图片URL字段
    })
  }

  return newsArray
}

// 获取随机标签
function getRandomTags(tags: TagsInter[], numTags: number): TagsInter[] {
  const shuffled = [...tags].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, numTags)
}

// 生成数据
const tagsList = generateTags(100)
const newsList = generateNews(1000, tagsList)

// 搜索标签列表
function filterTags(query: string): TagsInter[] {
  return tagsList.filter(tag => tag.label.toLowerCase().includes(query.toLowerCase()))
}

// 分页方法
function paginateNews(page: number, size: number, tags: string[] = []): PaginateResult {
  let filteredNews = newsList
  if (tags.length > 0) {
    const tagSet = new Set(tags)
    filteredNews = newsList.filter(news => news.tags.some(tag => tagSet.has(tag)))
  }

  const total = filteredNews.length
  const start = (page - 1) * size
  const end = start + size
  const list = filteredNews.slice(start, end)

  return {
    page,
    size,
    total,
    list,
  }
}

export {
  filterTags,
  paginateNews,
}
