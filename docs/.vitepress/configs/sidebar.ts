import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/前端/Web2.0/": [
    {
      text: "JavaScript 基础",
      collapsed: false,
      items: [{ text: "01-简介", link: "/前端/Web2.0/JavaScript/01-简介" }],
    },
  ],
  "/前端/Web3.0/": [
    {
      text: "JavaScript 基础",
      collapsed: false,
      items: [{ text: "01-简介", link: "/前端/Web2.0/JavaScript/01-简介" }],
    },
  ],
};
