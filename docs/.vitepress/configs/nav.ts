import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  { text: "前端导航", link: "/nav/" },
  {
    text: "WEB 2.0",
    items: [{ text: "JavaScript", link: "/前端/Web2/JavaScript/01-简介" }],
  },
  {
    text: "WEB 3.0",
    items: [{ text: "前言", link: "/前端/Web3/前言" }],
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
