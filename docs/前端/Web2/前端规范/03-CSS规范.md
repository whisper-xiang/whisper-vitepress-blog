# CSS 规范

## 一、CSS 代码规范

### 1.1  kebab-case（短横线连接式）

```css
/* good */
.hotel-title {
  font-weight: bold;
}

/* bad */
.hotelTitle {
  font-weight: bold;
}
```

### 1.2 空格的使用规则

选择器与 `{` 之前要有空格  
属性名的 `:` 后要有空格  
属性名的 `:` 前禁止加空格

```css
.hotel-content {
  font-weight: bold;
}
```


### 1.3 多选择器规则之间换行

当样式针对多个选择器时每个选择器占一行

```css
a.btn,
input.btn,
input[type='button'] {
  ......;
}
```

### 1.4 禁止向 0 后添加单位

```css
.obj {
  left: 0px;
}
```

### 1.5 小图片必须 sprite 合并

**推荐文章**：[NodeJs 智能合并 CSS 精灵图工具 iSpriter](https://imatlas.com/post/nodejs-intelligent-merge-css-sprite)

### 1.6 推荐 reset.css 样式

**推荐网站**：[http://www.cssreset.com/](http://www.cssreset.com/)

### 1.7 链接的样式顺序

```css
a:link -> a:visited -> a:hover -> a:active
```




## 二、命名规范

### 2.1 命名原则

#### 2.1.1 祖孙命名

基于姓氏命名法（继承 + 外来），祖先模块不能出现下划线，除了是全站公用模块，如 mod\_ 系列的命名：

```html
<div class="modulename">
  <div class="modulename_info">
    <div class="modulename_son"></div>
    <div class="modulename_son"></div>
    ...
  </div>
</div>

<!-- 这个是全站公用模块，祖先模块允许直接出现下划线 -->
<div class="mod_info">
  <div class="mod_info_son"></div>
  <div class="mod_info_son"></div>
  ...
</div>
```

在子孙模块数量可预测的情况下，严格继承祖先模块的命名前缀

```html
<div class="modulename">
  <div class="modulename_cover"></div>
  <div class="modulename_info"></div>
</div>
```

当子孙模块超过 4 级或以上的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块

```html
<div class="modulename">
  <div class="modulename_cover"></div>
  <div class="modulename_info">
    <div class="modulename_info_user">
      <div class="modulename_info_user_img">
        <img src="" alt="" />
        <!-- 这个时候 miui 为 modulename_info_user_img 首字母缩写-->
        <div class="miui_tit"></div>
        <div class="miui_txt"></div>
        ...
      </div>
    </div>
    <div class="modulename_info_list"></div>
  </div>
</div>
```

### 2.2 BEM

`BEM（Block Element Modifier）`：Block 是组件的主结构，Element 是其内部的部分，Modifier 用来改变块或元素的外观或行为。

```html
<!-- Block: menu -->
<div class="menu">
  <!-- Element: menu__item -->
  <div class="menu__item menu__item--active">
    Home
  </div>
  <div class="menu__item">
    About
  </div>
  <div class="menu__item">
    Contact
  </div>
</div>
```
```css
// Block: menu
.menu {
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;

  // Element: menu__item
  .menu__item {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;

    // Modifier: menu__item--active
    &--active {
      background-color: #007bff;
      color: white;
    }

    &:hover {
      background-color: #dddddd;
    }
  }
}

```

### 2.3 模块命名

| ClassName              | 含义                                     |
| ---------------------- | ---------------------------------------- |
| about                  | 关于                                     |
| account                | 账户                                     |
| arrow                  | 箭头图标                                 |
| article                | 文章                                     |
| aside                  | 边栏                                     |
| audio                  | 音频                                     |
| avatar                 | 头像                                     |
| bg,background          | 背景                                     |
| bar                    | 栏（工具类）                             |
| branding               | 品牌化                                   |
| crumb,breadcrumbs      | 面包屑                                   |
| btn,button             | 按钮                                     |
| caption                | 标题，说明                               |
| category               | 分类                                     |
| chart                  | 图表                                     |
| clearfix               | 清除浮动                                 |
| close                  | 关闭                                     |
| col,column             | 列                                       |
| comment                | 评论                                     |
| community              | 社区                                     |
| container              | 容器                                     |
| content                | 内容                                     |
| copyright              | 版权                                     |
| current                | 当前态，选中态                           |
| default                | 默认                                     |
| description            | 描述                                     |
| details                | 细节                                     |
| disabled               | 不可用                                   |
| entry                  | 文章，博文                               |
| error                  | 错误                                     |
| even                   | 偶数，常用于多行列表或表格中             |
| fail                   | 失败（提示）                             |
| feature                | 专题                                     |
| fewer                  | 收起                                     |
| field                  | 用于表单的输入区域                       |
| figure                 | 图                                       |
| filter                 | 筛选                                     |
| first                  | 第一个，常用于列表中                     |
| footer                 | 页脚                                     |
| forum                  | 论坛                                     |
| gallery                | 画廊                                     |
| group                  | 模块，清除浮动                           |
| header                 | 页头                                     |
| help                   | 帮助                                     |
| hide                   | 隐藏                                     |
| hightlight             | 高亮                                     |
| home                   | 主页                                     |
| icon                   | 图标                                     |
| info,information       | 信息                                     |
| last                   | 最后一个，常用于列表中                   |
| links                  | 链接                                     |
| login                  | 登录                                     |
| logout                 | 退出                                     |
| logo                   | 标志                                     |
| main                   | 主体                                     |
| menu                   | 菜单                                     |
| meta                   | 作者、更新时间等信息栏，一般位于标题之下 |
| module                 | 模块                                     |
| more                   | 更多（展开）                             |
| msg,message            | 消息                                     |
| nav,navigation         | 导航                                     |
| next                   | 下一页                                   |
| nub                    | 小块                                     |
| odd                    | 奇数，常用于多行列表或表格中             |
| off                    | 鼠标离开                                 |
| on                     | 鼠标移过                                 |
| output                 | 输出                                     |
| pagination             | 分页                                     |
| pop,popup              | 弹窗                                     |
| preview                | 预览                                     |
| previous               | 上一页                                   |
| primary                | 主要                                     |
| progress               | 进度条                                   |
| promotion              | 促销                                     |
| rcommd,recommendations | 推荐                                     |
| reg,register           | 注册                                     |
| save                   | 保存                                     |
| search                 | 搜索                                     |
| secondary              | 次要                                     |
| section                | 区块                                     |
| selected               | 已选                                     |
| share                  | 分享                                     |
| show                   | 显示                                     |
| sidebar                | 边栏，侧栏                               |
| slide                  | 幻灯片，图片切换                         |
| sort                   | 排序                                     |
| sub                    | 次级的，子级的                           |
| submit                 | 提交                                     |
| subscribe              | 订阅                                     |
| subtitle               | 副标题                                   |
| success                | 成功（提示）                             |
| summary                | 摘要                                     |
| tab                    | 标签页                                   |
| table                  | 表格                                     |
| txt,text               | 文本                                     |
| thumbnail              | 缩略图                                   |
| time                   | 时间                                     |
| tips                   | 提示                                     |
| title                  | 标题                                     |
| video                  | 视频                                     |
| wrap                   | 容器，包，一般用于最外层                 |
| wrapper                | 容器，包，一般用于最外层                 |
