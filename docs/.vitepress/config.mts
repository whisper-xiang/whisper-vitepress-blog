import { defineConfig } from "vitepress";

import { head, nav, sidebar } from "./configs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: "../dist",
  // base: process.env.APP_BASE_PATH || "/",
  base: "/",

  lang: "zh-CN",
  title: "轻语",
  description: "",
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },
  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: "/avatar.png",

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: "deep",
      label: "目录",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/whisper-xiang/vitepress-whisper-blog",
      },
    ],

    footer: {
      message: "识盈虚之有数",
      copyright: "Copyright © 2025-present whisper",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    /*** 自定义配置 ***/
    visitor: {
      badgeId: "",
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
  },
});
