# smart-news-portal

***

## 启动方法

    pnpm install    // 安装依赖

    pnpm run dev    // 启动开发服务器

    pnpm run test    // 运行测试

<br />

## 技术栈

#### 本项目使用了以下技术栈：

- Vue 3：用于构建用户界面。

- Vite：用于快速构建和开发工具。

- Tailwind CSS：用于快速设计和样式。

- Vitest：用于单元测试。

- VueUse：提供丰富的组合函数库，简化 Vue 3 开发。

<br />

## 数据生成

#### 项目中使用了 generate.ts 来生成模拟数据，包括新闻数据和标签数据。主要函数有：

    generateTags(numTags: number): TagsInter[]    // 生成指定数量的标签。

    generateNews(numNews: number, tags: TagsInter[]): NewsInter[]   // 生成指定数量的新闻，并随机附加标签。

<br/>

## 测试

#### 项目使用 Vitest 进行单元测试。测试文件位于 tests 目录中。运行测试：

    pnpm run test
