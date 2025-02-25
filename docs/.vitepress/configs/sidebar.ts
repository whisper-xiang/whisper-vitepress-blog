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
  "/经济学/阅读笔记": [
    {
      text: "阅读笔记",
      collapsed: false,
      items: [{ text: "钱从哪里来6", link: "/经济学/阅读笔记/钱从哪里来6" }],
    },
  ],
};
