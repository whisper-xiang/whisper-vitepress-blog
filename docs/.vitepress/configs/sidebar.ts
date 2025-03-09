import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/前端/Web2/": [
    {
      text: "JavaScript",
      collapsed: false,
      items: [
        { text: "01-简介", link: "/前端/Web2/JavaScript/01-简介" },
        { text: "02-数据类型", link: "/前端/Web2/JavaScript/02-数据类型" },
        { text: "03-面向对象", link: "/前端/Web2/JavaScript/03-面向对象" },
        { text: "04-迭代方法", link: "/前端/Web2/JavaScript/04-迭代方法" },
        // { text: "05-函数", link: "/前端/Web2/JavaScript/05-函数" },
        { text: "06-编程范式", link: "/前端/Web2/JavaScript/06-编程范式" },
        { text: "07-设计模式", link: "/前端/Web2/JavaScript/07-设计模式" }
        // { text: "07-异步编程", link: "/前端/Web2/JavaScript/07-异步编程" },
        // { text: "08-ES6新增内容", link: "/前端/Web2/JavaScript/08-ES6新增内容" },
        // { text: "06-设计模式", link: "/前端/Web2/JavaScript/06-设计模式" },
        // { text: "07-编程范式", link: "/前端/Web2/JavaScript/07-编程范式" },
      ]
    },
    {
      text: "HTML",
      collapsed: false,
      items: [
        { text: "01-语义化标签", link: "/前端/Web2/HTML/01-语义化标签" },
        { text: "02-Meta标签", link: "/前端/Web2/HTML/02-Meta标签" },
        {
          text: "03-DOCTYPE和浏览器渲染模式",
          link: "/前端/Web2/HTML/03-DOCTYPE和浏览器渲染模式"
        },
        { text: "04-HTML5新增内容", link: "/前端/Web2/HTML/04-HTML5新增内容" }
        // { text: "03-SEO", link: "/前端/Web2/HTML/03-SEO" },
      ]
    },
    {
      text: "CSS",
      collapsed: false,
      items: [
        { text: "01-Layout", link: "/前端/Web2/CSS/01-Layout" }
        // { text: "02-盒模型", link: "/前端/Web2/CSS/02-盒模型" },
        // { text: "03-选择器", link: "/前端/Web2/CSS/03-选择器" },
        // { text: "04-布局", link: "/前端/Web2/CSS/04-布局" },
        // { text: "05-动画", link: "/前端/Web2/CSS/05-动画" },
        // { text: "06-Flexbox", link: "/前端/Web2/CSS/06-Flexbox" },
        // { text: "07-Grid", link: "/前端/Web2/CSS/07-Grid" },
        // { text: "08-媒体查询", link: "/前端/Web2/CSS/08-媒体查询" },
        // { text: "09-响应式Web设计", link: "/前端/Web2/CSS/09-响应式Web设计" },
        // { text: "10-CSS预处理器", link: "/前端/Web2/CSS/10-CSS预处理器" },
        // { text: "11-浏览器兼容性", link: "/前端/Web2/CSS/11-浏览器兼容性" },
      ]
    },
    {
      text: "前端规范",
      collapsed: false,
      items: [
        { text: "01-环境和工具", link: "/前端/Web2/前端规范/01-环境和工具" },
        { text: "02-HTML规范", link: "/前端/Web2/前端规范/02-HTML规范" },
        { text: "03-CSS规范", link: "/前端/Web2/前端规范/03-CSS规范" },
        { text: "04-JS规范", link: "/前端/Web2/前端规范/04-JS规范" },
        { text: "05-图片规范", link: "/前端/Web2/前端规范/05-图片规范" },
        { text: "06-Vue2命名规范", link: "/前端/Web2/前端规范/06-Vue2命名规范" },
        { text: "07-Vue3代码规范", link: "/前端/Web2/前端规范/07-Vue3代码规范" },
        { text: "08-Git提交规范", link: "/前端/Web2/前端规范/08-Git提交规范" }
        // {
        //   text: "05-浏览器兼容性",
        //   link: "/前端/Web2/前端规范/05-浏览器兼容性",
        // },
        // { text: "06-安全", link: "/前端/Web2/前端规范/06-安全" },
        // { text: "07-性能优化", link: "/前端/Web2/前端规范/07-性能优化" },
      ]
    },
    {
      text: "DevOps",
      collapsed: false,
      items: [
        { text: "01-简介", link: "/前端/Web2/DevOps/01-简介" }
        // { text: "02-盒模型", link: "/前端/Web2/CSS/02-盒模型" },
        // { text: "03-选择器", link: "/前端/Web2/CSS/03-选择器" },
        // { text: "04-布局", link: "/前端/Web2/CSS/04-布局" },
        // { text: "05-动画", link: "/前端/Web2/CSS/05-动画" },
        // { text: "06-Flexbox", link: "/前端/Web2/CSS/06-Flexbox" },
        // { text: "07-Grid", link: "/前端/Web2/CSS/07-Grid" },
        // { text: "08-媒体查询", link: "/前端/Web2/CSS/08-媒体查询" },
        // { text: "09-响应式Web设计", link: "/前端/Web2/CSS/09-响应式Web设计" },
        // { text: "10-CSS预处理器", link: "/前端/Web2/CSS/10-CSS预处理器" },
        // { text: "11-浏览器兼容性", link: "/前端/Web2/CSS/11-浏览器兼容性" },
      ]
    }
  ],
  "/前端/Web3/": [
    {
      text: "Web3",
      collapsed: false,
      items: [
        { text: "前言", link: "/前端/Web3/前言" },
        {
          text: "区块链",
          collapsed: false,
          items: [
            { text: "01-简介", link: "/前端/Web3/区块链/01-简介" },
            { text: "02-核心技术", link: "/前端/Web3/区块链/02-核心技术" },
            { text: "03-密码学与安全技术", link: "/前端/Web3/区块链/03-密码学与安全技术" }
          ]
        }
      ]
    }
  ],
  "/经济学": [
    {
      text: "香帅金融讲义",
      collapsed: false,
      items: [
        { text: "01-金融的定义和演化", link: "/经济学/香帅金融讲义/01-金融的定义" },
        { text: "02-银行", link: "/经济学/香帅金融讲义/02-银行" }
      ]
    },
    {
      text: "加密货币生态",
      collapsed: false,
      items: [
        { text: "01-概览", link: "/经济学/加密货币生态/01-概览" },
        { text: "02-项目角色", link: "/经济学/加密货币生态/02-项目角色" },
        { text: "03-加密货币", link: "/经济学/加密货币生态/03-加密货币" },
      ]
    },
    {
      text: "阅读笔记",
      collapsed: false,
      items: [{ text: "钱从哪里来6", link: "/经济学/阅读笔记/钱从哪里来6" }]
    }
  ],
  "/阅读笔记": [
    {
      text: "阅读笔记",
      collapsed: false,
      items: [
        { text: "洞穴奇案", link: "/阅读笔记/洞穴奇案" },
        { text: "古诗词", link: "/阅读笔记/古诗词" }
      ]
    }
  ],
  "/哲学": [
    {
      text: "哲学",
      collapsed: false,
      items: [
        { text: "01-概述", link: "/哲学/01-概述" },
        { text: "02-上帝", link: "/哲学/02-上帝" },
        { text: "03-生活的意义", link: "/哲学/03-生活的意义" },
        { text: "04-自我", link: "/哲学/04-自我" }
      ]
    }
  ]
};
