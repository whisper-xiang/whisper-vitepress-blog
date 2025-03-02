# HTML 规范

## 一、代码规范

### 1.1 命名规范
HTML 标签名、类名、标签属性和大部分属性值统一用小写

```js
<div class="demo"></div>
```

### 1.2 代码嵌套

元素嵌套规范，每个块状元素独立一行，内联元素可选

```html
<!-- good -->
<div>
  <h1></h1>
  <p></p>
</div>
<p>
  <span></span>
  <span></span>
</p>

<!-- bad -->
<div>
  <h1></h1>
  <span></span>
</div>
```

### 1.3 语义化标签

结构性标签：

- `<header>`：页面或文章的头部区域，通常包含导航、标题等。
- `<nav>`：页面的导航部分，包含导航链接。
- `<section>`：文档中主题相关的内容块，表示页面的不同部分。
- `<article>`：独立的内容部分，可以是博客文章、新闻等独立内容。
- `<aside>`：页面主要内容之外的附属信息，通常用于侧边栏。
- `<footer>`：页面或文章的尾部，通常包含版权声明、联系信息等。
- `<main>`：页面的主要内容部分，一个页面中只能有一个 `<main>` 标签。

文本内容标签：

- `<h1>` - `<h6>`：标题标签，`<h1>` 为最高级别标题，`<h6>` 为最低级别。
- `<p>`：段落标签，用于表示普通文本段落。
- `<blockquote>`：引用块，用于表示长引用内容。
- `<ol>`：有序列表。
- `<ul>`：无序列表。
- `<li>`：列表项。
- `<pre>`：预格式化文本，保持内容的空格和换行。
- `<code>`：代码块，表示代码片段。
- `<em>`：强调文本，通常表示斜体。
- `<strong>`：加重文本，通常表示加粗。

媒体标签：

- `<img>`：图片标签，用于插入图片。
- `<audio>`：音频标签，用于嵌入音频文件。
- `<video>`：视频标签，用于嵌入视频文件。
- `<figure>`：用于包含图片、图表、插图等，并且与 `<figcaption>` 配合使用以提供标题。
- `<figcaption>`：为 `<figure>` 提供说明或标题。

表单标签：

- `<form>`：表单元素，包含用户提交的数据。
- `<input>`：输入框，用户可以输入数据的字段。
- `<textarea>`：多行文本输入框。
- `<button>`：按钮。
- `<select>`：下拉选择框。
- `<option>`：下拉选择框中的选项。
- `<label>`：为表单元素定义标签。

表格标签：

- `<table>`：表格标签，包含表格内容。
- `<caption>`：为表格提供标题。
- `<thead>`：表头部分。
- `<tbody>`：表格主体部分。
- `<tr>`：表格行。
- `<th>`：表头单元格。
- `<td>`：表格单元格。

链接与互动标签：

- `<a>`：超链接标签，用于创建链接。
- `<button>`：按钮，用于提交表单或执行操作。
- `<details>`：创建可展开的内容区域，用户可以点击展开或隐藏。
- `<summary>`：与 `<details>` 配合使用，作为可展开区域的标题。
- `<dialog>`：表示对话框或模式窗口。


## 二、文件命名规范

确保文件命名总是以字母开头而不是数字，且字母一律小写，以下划线连接且不带其他标点符号，如：

```shell
<!-- HTML -->
site.html
site_list.html
site_detail.html
```



## 三、注释规范

### 3.1 模块注释

一般用于描述模块的名称以及模块开始与结束的位置

注释内容前后各一个空格字符，
`<!-- S Comment Text -->` 表示模块开始，`<!-- E Comment Text --> `表示模块结束，模块与模块之间相隔一行

```html
<!-- S Comment Text A -->
<div class="mod_a">...</div>
<!-- E Comment Text A -->

<!-- S Comment Text B -->
<div class="mod_b">...</div>
<!-- E Comment Text B -->
```

### 3.2 嵌套模块注释

当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块改用

```html
<!-- /Comment Text -->
注释写在模块结尾标签底部，单独一行。
```

推荐写法：

```html
<!-- S Comment Text A -->
<div class="mod_a">
  <div class="mod_b">...</div>
  <!-- /mod_b -->

  <div class="mod_c">...</div>
  <!-- /mod_c -->
</div>
<!-- E Comment Text A -->
```

## 四、demo 

<details>
  <summary>代码示例</summary>

```html
<!-- 语义化标签示例  article_list.html -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="这是一个示例页面，展示了如何使用语义化标签构建网页。">
  <title>语义化标签示例页面</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- S 页面头部 -->
  <header>
    <h1>网站标题</h1>
    <nav aria-label="主导航">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">关于我们</a></li>
        <li><a href="#">服务</a></li>
        <li><a href="#">联系我们</a></li>
      </ul>
    </nav>
  </header>
  <!-- E 页面头部 -->

  <!-- S 页面主要内容 -->
  <main>
    <!-- S 文章部分 -->
    <article>
      <header>
        <h2>文章标题</h2>
        <p>作者：<span>张三</span> | 发布日期：<time datetime="2023-10-01">2023年10月1日</time></p>
      </header>
      <section>
        <h3>章节标题</h3>
        <p>这是一段示例文章内容，展示了如何使用语义化标签。</p>
        <blockquote cite="https://example.com">
          <p>这是一个引用块，用于表示长引用内容。</p>
          <footer>— 引用来源, <cite>示例网站</cite></footer>
        </blockquote>
        <pre><code>function example() {
  console.log('Hello, World!');
}</code></pre>
      </section>
      <section>
        <h3>另一个章节</h3>
        <p>这是另一个章节的内容。</p>
        <figure>
          <img src="example.jpg" alt="示例图片">
          <figcaption>这是一张示例图片。</figcaption>
        </figure>
      </section>
    </article>
    <!-- E 文章部分 -->

    <!-- S 侧边栏 -->
    <aside aria-label="相关链接">
      <h2>相关链接</h2>
      <ul>
        <li><a href="#">链接一</a></li>
        <li><a href="#">链接二</a></li>
        <li><a href="#">链接三</a></li>
      </ul>
    </aside>
    <!-- E 侧边栏 -->
  </main>
  <!-- E 页面主要内容 -->

  <!-- S 页面页脚 -->
  <footer>
    <p>&copy; 2023 示例公司. 保留所有权利.</p>
    <address>
      联系我们：<a href="mailto:info@example.com">info@example.com</a>
    </address>
  </footer>
  <!-- E 页面页脚 -->
</body>
</html>
```

</details>
