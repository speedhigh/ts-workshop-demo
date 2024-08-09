# smart-news-portal

***

<br/>

## 访问地址

### https://smart-news-13d6e67652c7.herokuapp.com/#/login

<br/>

## 启动方法

<br/>

    pnpm install    // 安装依赖

<br />

    pnpm run dev    // 启动开发服务器

<br />
<br/>

## 技术栈

### 本项目使用了以下技术栈：

<br/>

- ### **Vue 3：** 用于构建用户界面。

- ### **Vite：** 用于快速构建和开发工具。

- ### **TailwindCss：** 用于快速设计和样式。

- ### **Vitest：** 用于单元测试。

- ### **VueUse：** 提供丰富的组合函数库，简化 Vue 3 开发。

<br />
<br/>

## 数据生成

### 项目在 generate.ts 中生成模拟数据，包括新闻数据和标签数据。主要函数有：

<br />

    generateTags(numTags: number): TagsInter[]    // 生成指定数量的标签。

    generateNews(numNews: number, tags: TagsInter[]): NewsInter[]   // 生成指定数量的新闻，并随机附加标签。

<br/>
<br/>

## 组件

### 项目组件位于 components 目录中包括：

<br/>

## **AudioPlayer.vue** 音频播放器
<br/>

![描述](/public/images/audio_player.jpg)

<br/>

### **AutocompleteTag.vue** 动态标签

<br/>

![描述](/public/images/auto_tag1.jpg)
![描述](/public/images/auto_tag2.jpg)

<br/>

### **BasePagination.vue** 分页

<br/>

![描述](/public/images/base_pagination1.jpg)
![描述](/public/images/base_pagination2.jpg)

<br/>

### **BackToTop.vue** 返回顶部

<br/>

![描述](/public/images/to_top.jpg)

<br/>

### **LazyLoadImage.vue** 图片懒加载

<br/>

### **BaseOverlay.vue** 遮罩层

<br/>

## 测试

### 项目使用 Vitest 进行单元测试。测试文件位于 tests 目录中。运行测试：

<br />

    pnpm run test

<br />

![描述](/public/images/test.jpg)
