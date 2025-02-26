import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  { text: "前端导航", link: "/nav/" },
  {
    text: "WEB 2",
    items: [{ text: "JavaScript", link: "/前端/Web2/JavaScript/01-简介" }],
  },
  {
    text: "WEB 3",
    items: [{ text: "前言", link: "/前端/Web3/前言" }],
  },
  {
    text: "经济学",
    items: [
      { text: "阅读笔记", link: "/经济学/阅读笔记/钱从哪里来6" },
      { text: "加密货币生态", link: "/经济学/加密货币生态/01-概览" },
    ],
  },
  // { text: '茂茂主页', link: 'https://fe-mm.com' },
  // {
  //   text: '茂茂物语',
  //   link: 'https://notes.fe-mm.com',
  // },
  // { text: 'mmPlayer', link: 'https://netease-music.fe-mm.com' },
  // {
  //   text: '油猴脚本',
  //   link: 'https://github.com/maomao1996/tampermonkey-scripts',
  // },
];
