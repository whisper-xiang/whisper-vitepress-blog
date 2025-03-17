import type { NavLink } from "../.vitepress/theme/types";

type NavData = {
  title: string;
  items: NavLink[];
};

export const NAV_DATA: NavData[] = [
  // 常用工具
  {
    title: "常用工具",
    items: [
      {
        icon: "https://caniuse.com/img/favicon-128.png",
        title: "Can I use",
        desc: "前端 API 兼容性查询",
        link: "https://caniuse.com"
      },
      {
        icon: "https://tinypng.com/images/apple-touch-icon.png",
        title: "TinyPNG",
        desc: "在线图片压缩工具",
        link: "https://tinypng.com"
      }
    ]
  },
  // Web3
  {
    title: "Web3",
    items: [
      {
        icon: "https://favicon.im/yeasy.gitbook.io",
        title: "区块链技术指南",
        link: "https://yeasy.gitbook.io/blockchain_guide",
        desc: "介绍了区块链和分布式账本领域的核心技术，以及企业分布式账本方案的设计、架构和应用"
      }
    ]
  },
  // AI 导航
  {
    title: "AI 导航",
    items: [
      {
        icon: "https://favicon.im/chatexcel.com",
        title: "ChatExcel",
        link: "https://chatexcel.com",
        desc: "自然语言操作 Excel，支持图片、pdf转excel"
      }
    ]
  },
  // 摸鱼专用
  {
    title: "摸鱼专用",
    items: [
      {
        icon: "https://momoyu.cc/icon-192.png",
        title: "摸摸鱼热榜",
        // desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: "https://momoyu.cc"
      }
    ]
  }
];
