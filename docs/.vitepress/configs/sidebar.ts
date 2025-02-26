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
        // { text: "05-异步编程", link: "/前端/Web2/JavaScript/05-异步编程" },
        // { text: "06-函数式编程", link: "/前端/Web2/JavaScript/06-函数式编程" },
      ],
    },
  ],
  "/前端/Web3/": [
    {
      text: "Web3",
      collapsed: false,
      items: [{ text: "前言", link: "/前端/Web3/前言" }],
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
      items: [{ text: "洞穴奇案", link: "/阅读笔记/洞穴奇案" }],
    },
  ],
};
