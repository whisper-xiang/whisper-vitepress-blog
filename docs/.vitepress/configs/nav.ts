import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  { text: "前端导航", link: "/nav/" },
  {
    text: "WEB 2",
    items: [
      { text: "HTML", link: "/前端/Web2/HTML/01-语义化标签" },
      { text: "CSS", link: "/前端/Web2/CSS/01-Layout" },
      { text: "JavaScript", link: "/前端/Web2/JavaScript/01-简介" },
      // {text: '浏览器底层原理', link: '/前端/Web2/浏览器底层原理/01-概述'},
      // { text: "ES6", link: "/前端/Web2/ES6/01-简介" },
      // { text: "TypeScript", link: "/前端/Web2/TypeScript/01-简介" },
      { text: "前端规范", link: "/前端/Web2/前端规范/环境/环境和工具" }
      // { text: "JavaScript", link: "/前端/Web2/JavaScript/01-简介" },
      // { text: "HTML", link: "/前端/Web2/HTML/01-语义化标签" },
      // { text: "CSS", link: "/前端/Web2/CSS/01-简介" },
      // {
      //   text: '前端工程化',
      //   items: [
      //     { text: '规范', link: '/web2/engineering/normalize/environment/环境和工具' },
      //     { text: '框架', link: '/web2/framework/Angular基础/01-AngularCLI' },
      //     { text: '监控', link: '/web2/engineering/监控/01-概览' },
      //     { text: '架构', link: '/web2/架构/微前端/index' },
      //     { text: 'DevOps', link: '/web2/DevOps/index' },
      //     // { text: 'Docker', link: '/web2/DevOps/Docker' },
      //     // { text: 'Docker', link: '/web2/engineering/Docker' },
      //     // { text: 'Nginx', link: '/web2/engineering/Nginx' },
      //     // { text: 'Git', link: '/web2/engineering/Git' },
      //     // { text: '架构', link: '/web2/architect/概述' },
      //     // { text: '性能', link: '/web2/others/性能优化' },
      //     // { text: 'DevOps', link: '/web2/engineering/DevOps/index' },
      //   ],
      // },
    ]
  },
  {
    text: "WEB 3",
    items: [
      { text: "前言", link: "/前端/Web3/前言" },
      { text: "区块链", link: "/前端/Web3/区块链/01-简介" }
    ]
  },
  {
    text: "经济学",
    items: [
      { text: "阅读笔记", link: "/经济学/阅读笔记/钱从哪里来6" },
      { text: "加密货币生态", link: "/经济学/加密货币生态/01-概览" }
    ]
  },
  {
    text: "哲学",
    items: [{ text: "概述", link: "/哲学/01-概述" }]
  },
  {
    text: "阅读笔记",
    items: [{ text: "洞穴奇案", link: "/阅读笔记/洞穴奇案" }]
  }
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
