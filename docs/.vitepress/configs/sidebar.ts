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
        // { text: "06-函数式编程", link: "/前端/Web2/JavaScript/06-函数式编程" },
        // { text: "07-异步编程", link: "/前端/Web2/JavaScript/07-异步编程" },
        // { text: "08-ES6新增内容", link: "/前端/Web2/JavaScript/08-ES6新增内容" },
        // { text: "06-设计模式", link: "/前端/Web2/JavaScript/06-设计模式" },
        // { text: "07-编程范式", link: "/前端/Web2/JavaScript/07-编程范式" },
      ],
    },
    {
      text: "HTML",
      collapsed: false,
      items: [
        { text: "01-语义化标签", link: "/前端/Web2/HTML/01-语义化标签" },
        { text: "02-Meta标签", link: "/前端/Web2/HTML/02-Meta标签" },
        {
          text: "03-DOCTYPE和浏览器渲染模式",
          link: "/前端/Web2/HTML/03-DOCTYPE和浏览器渲染模式",
        },
        { text: "04-HTML5新增内容", link: "/前端/Web2/HTML/04-HTML5新增内容" },
        // { text: "03-SEO", link: "/前端/Web2/HTML/03-SEO" },
      ],
    },
  ],
  "/前端/Web3/": [
    {
      text: "Web3",
      collapsed: false,
      items: [
        { text: "前言", link: "/前端/Web3/前言" },
        {
          text: "区块链的诞生",
          collapsed: false,
          items: [{ text: "简介", link: "/前端/Web3/区块链的诞生/01-简介" }],
        },
      ],
    },
  ],
  "/经济学": [
    {
      text: "阅读笔记",
      collapsed: false,
      items: [{ text: "钱从哪里来6", link: "/经济学/阅读笔记/钱从哪里来6" }],
    },
    {
      text: "加密货币生态",
      collapsed: false,
      items: [
        { text: "01-概览", link: "/经济学/加密货币生态/01-概览" },
        { text: "02-项目角色", link: "/经济学/加密货币生态/02-项目角色" },
      ],
    },
  ],
  "/阅读笔记": [
    {
      text: "阅读笔记",
      collapsed: false,
      items: [
        { text: "洞穴奇案", link: "/阅读笔记/洞穴奇案" },
        { text: "古诗词", link: "/阅读笔记/古诗词" },
      ],
    },
  ],
  "/哲学": [
    {
      text: "哲学",
      collapsed: false,
      items: [
        { text: "01-概述", link: "/哲学/01-概述" },
        { text: "02-上帝", link: "/哲学/02-上帝" },
        { text: "03-生活的意义", link: "/哲学/03-生活的意义" },
        { text: "04-自我", link: "/哲学/04-自我" },
      ],
    },
  ],
};
