import * as fs from 'node:fs'
import * as path from 'node:path'

// 生成随机标签
function generateTags(numTags: number): string[] {
  const tags = []
  for (let i = 0; i < numTags; i++) {
    tags.push(`Tag${i + 1}`)
  }
  return tags
}

// 生成随机新闻
function generateNews(numNews: number, tags: string[]): any[] {
  const news = []
  for (let i = 0; i < numNews; i++) {
    const randomTags = Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => tags[Math.floor(Math.random() * tags.length)])
    news.push({
      id: i + 1,
      title: `News Title ${i + 1}`,
      tags: randomTags,
      content: `This is the content of news item ${i + 1}.`,
    })
  }
  return news
}

// 生成数据集
function generateDataSet(numTags: number, numNews: number) {
  const tags = generateTags(numTags)
  const news = generateNews(numNews, tags)

  return {
    tags,
    news,
  }
}

// 指定标签和新闻条目数量
const numTags = Math.floor(Math.random() * 901) + 100 // 100 到 1000 个标签
const numNews = Math.floor(Math.random() * 901) + 100 // 100 到 1000 条新闻

const dataSet = generateDataSet(numTags, numNews)

// 确保 src/data 目录存在
const dataDir = path.join(__dirname, 'src/data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// 将数据集写入 JSON 文件
fs.writeFileSync(path.join(dataDir, 'newsData.json'), JSON.stringify(dataSet, null, 2), 'utf-8')
