import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/web2/": [
    {
      text: "JavaScript 基础",
      collapsed: false,
      items: [{ text: "简介", link: "/web2/javascript/01-简介" }],
    },
  ],
};
