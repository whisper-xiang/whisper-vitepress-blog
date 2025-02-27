# Layout (布局)

浏览器排版技术大概分成三代：

1. **正常流（Normal Flow）**，代表是 display: block、display: inline-block、display: inline、position: absolute、position: relative、float、clear。
2. **弹性布局（Flexiable Box Layout）**，就是 display: flex。
3. **网格布局（Grid Layout）**，就是 display: grid。

这几代的排版方式都是以 display 的不同值来控制的。
而在 CSS 中排版的基本单位是「**文字**」和「**Box（盒**）」。

## 一、Box（盒）

在 CSS 中，所有的元素都被一个个的“盒子（box）”包围。「盒」可以理解为，为了展现一个元素，在界面上产生的一个矩形的区域。


### 1.1 Block Box（块级盒子）和 Inline Box（行内级盒子）

盒子主要分为「块级盒子」和「行内级盒子」，这两种盒子会在页面流（page flow）和元素之间的关系方面表现出不同的行为。

1. 块级盒子的表现如下：
    - 块级盒子会在行内级的方向（就是排版的方向）上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着块级盒子会和父容器一样宽。
    - 每个块级盒子都会换行。
    - width 和 height 属性可以使用。
    - 设置 padding、margin、border 都会将周围其他盒子“推开”。

2. 行内级盒子的表现如下：
    - 行内级盒子不会换行。
    - width 和 height 属性不会起作用。
    - 垂直方向的 padding、margin、border 属性会被应用，但是不会把其他处于 `inline` 状态的盒子推开。
    - 水平方向的 padding、margin、border 属性会被应用，会把其他处于 `inline` 状态的盒子推开。


这两种盒子还可以根据 `display` 来设置，如果是带 `inline` 就开头的就是行内盒子。

> display 现在基本都是分成两种，不带 inline 的和带 inline 的。如，block、flex、grid 和 inline-block、inlie-flex、inline-grid 等。
>
> 关于 display 的属性在 [CSS Display Module Level 3](https://www.w3.org/TR/2020/CR-css-display-3-20200519/) 有定义。

## 2. Box Model（盒模型）

盒模型就是描述盒是怎么表示的，完整的 `CSS` 盒模型应用于块级盒子，但是行内级盒子只使用盒模型中定义的部分内容。

盒模型主要由 4 层组成：

- **Content box**：这个区域是用来显示内容的，大小可以通过 width 和 height 设置。
- **Padding box**：包围在内容区域外部的空白区域，大小可以通过 padding 相关属性设置。
- **Border box**：边框包裹 content 和 padding，大小可以通过 border 相关属性设置。
- **Margin box**：这是最外面的区域，是盒子和其他元素之间的空白区域，大小可以通过 margin 相关属性设置。

在「标准盒模型」中，`width`、`height` 指的是 `content box`。它们再加上 `padding` 和 `border` 决定了整个盒子的大小。

在「（IE）盒模型」中，`width`、`height` 指的是 `border box`。它们就决定了整个盒子的大小。

然后盒的宽度 `width` 可以使用 **box-sizing** 进行调整，默认的值是 **content-box**。还可以设置为为 **border-box**。

> margin  不计入实际大小  ——  当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止  ——  不会延伸到 margin。

<!-- ![image.png](./img/2jSkFhOahEwkpLoc/1591508610818-07e5803d-9945-47d3-88c4-7613e292659b-985480.png) -->

## 3.  BFC（块级格式化上下文）

所谓 BFC，即为 Web 页面中盒模型布局的 CSS 渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

### 3.1 特性

- 1.内部的元素会在垂直方向，从顶部开始一个接一个地放置。
- 2.元素垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻元素的 margin 会发生叠加
- 3.都是从最左边开始的。每个元素的 margin box 的左边，与包含块 border box 的左边(对于从左往右的格式化，否则 相反)。即使存在浮动也是如此 4.BFC 的区域不会与 float box 叠加。
- 5.BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
- 6.计算 BFC 的高度时，浮动元素也参与计算（当 BFC 内部有浮动时，为了不影响外部元素的布局，BFC 计算高度时会包 括浮动元素的高度）

**创建方式**

- 根元素（<`html`>)
- 浮动元素 （float 不为 none)
- 绝对定位元素（ position 为 absolute 或者 fixed）
- 行内块元素（display 为 inline-block）
- display 为 flow-root 的元素
- overflow 不为 visible 的块元素
- 表格系列（display 为 table-cell\table-caption\table\table-\*）
- 弹性元素（display 为 flex 的元素的子元素）
- 网格元素（display 为 grid 的元素的子元素）
- contain 值为 layout\content\paint 的元素
- column-span 设置为 all 的元素


#### 作用

**利用 BFC 避免 margin 重叠**  
**自适应两栏布局**  
**清除浮动**  
**...**  

## 参考

- [BFC](https://blog.csdn.net/sinat_36422236/article/details/88763187?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164934299216780271967578%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=164934299216780271967578&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-88763187.142^v7^control,157^v4^control&utm_term=BFC&spm=1018.2226.3001.4187)
- [什么是BFC](https://blog.csdn.net/good_moring_/article/details/111032632)
