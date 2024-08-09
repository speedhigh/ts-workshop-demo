# smart-news-portal

***

<br/>

### 访问地址

#### https://smart-news-13d6e67652c7.herokuapp.com

<br/>

### 技术栈

#### ***Vue 3*** + ***Vite*** + ***TailwindCss*** + ***Vitest*** + ***VueUse***

<br/>

### 启动方法

<br/>

    pnpm install

<br />

    pnpm run dev

<br />

### 数据生成

#### 项目在 ***src/data/generate.ts*** 中生成模拟数据，包括新闻数据和标签数据。主要函数有：

<br />

    /* 生成指定数量的标签。 */
    generateTags(numTags: number): TagsInter[]

    /* 生成指定数量的新闻，并随机附加标签。 */
    generateNews(numNews: number, tags: TagsInter[]): NewsInter[]

<br/>

### **AutocompleteTag.vue** 动态标签

#### 组件概述：

这是一个动态标签组件，适用于需要标签输入和筛选的应用场景。通过其简洁的界面和强大的功能，用户可以方便地选择、删除、查看和管理多个标签。

#### 组件预览：

![组件预览](/public/md/auto_complete_tag.gif)

#### 组件特点：

- #### 动态展示与隐藏标签 ####

    根据容器的宽度自动调整显示的标签数量。对于不能完全展示的标签，会自动隐藏，并通过 +n 按钮显示剩余标签的数量。用户可以点击 +n 按钮查看所有隐藏的标签，确保用户在有限空间内仍能清晰管理所有标签。

- #### 响应式设计 ####

    能够适应不同的屏幕尺寸，自动调整标签的展示方式，无论是在移动端还是桌面端都能保持最佳的显示效果。同时，组件在窗口大小或标签数量发生变化时，会自动更新显示的标签数量，确保始终提供流畅的用户体验。

#### 组件原理：

- #### 标签宽度测量与隐藏标签计算 ####

    组件通过 **measureTextWidth** 方法来模拟生成一个标签元素并测量其实际宽度。该方法将标签元素创建并隐藏在页面上，通过计算标签内容的宽度，获取其实际占用空间。在此基础上 **updateDisplayedLabels** 方法根据容器的可用宽度，逐个累加标签的宽度，判断当前容器中可以显示的标签数量，超出部分的标签则会折叠成`+n

- #### 响应式调整与防抖处理 ####

    使用了 **VueUse** 库中的 **useElementBounding** 方法来实时获取容器宽度变化，并结合 **watchDebounced** 对标签列表和容器宽度进行监控。通过防抖处理，减少不必要的计算和渲染，提高性能，确保组件在各种场景下都能迅速响应并更新显示。

<br/>

### 测试

#### 项目使用 Vitest 进行单元测试。测试文件位于 tests 目录中。运行测试：

<br />

    pnpm run test

<br />

![描述](/public/md/test.jpg)

<br />

### 项目预览

<br>

#### 登录页：

![描述](/public/md/page1.jpg)

<br>

#### 新闻列表页：

![描述](/public/md/page2.jpg)

<br>

#### 新闻详情页：

![描述](/public/md/page3.jpg)

<br>
