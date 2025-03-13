---
layout: home
layoutClass: 'home-layout'

hero:
  name: 轻语
  text: 个人博客
  tagline: 洋洋洒洒，信手涂鸦
  image:
    src: /avatar.png
    alt: 轻语
  actions:
    - text: 前端导航
      link: /nav/
      theme: alt
    - text: Web2
      link: /前端/Web2/JavaScript/01-简介
    - text: Web3
      link: /前端/Web3/前言
      theme: alt
    - text: 阅读笔记
      link: /阅读笔记/洞穴奇案
features:
  - icon: 📖
    title: Web 2
    details: Web2基础<br />~
    link: /前端/Web2/JavaScript/01-简介
    linkText: 前端常用知识

  - icon: 📖
    title: Web 3
    details: Web3基础<br />~
    link: /前端/Web3/前言
    linkText: 区块链

  - icon: 📘
    title: 阅读笔记
    details: 记录阅读过程中的思考<br />许还有些对世界的看法
    link: /阅读笔记/洞穴奇案
    linkText: 悟已往之不谏，知来者之可追

  # - icon: 📘
  #   title: 源码阅读
  #   details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
  #   link: https://notes.fe-mm.com/analysis/utils/only-allow
  #   linkText: 源码阅读
  # - icon: 💡
  #   title: Workflow
  #   details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
  #   link: https://notes.fe-mm.com/workflow/utils/library
  #   linkText: 常用工具库
  # - icon: 🧰
  #   title: 提效工具
  #   details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
  #   link: https://notes.fe-mm.com/efficiency/online-tools
  #   linkText: 提效工具
  # - icon: 🐞
  #   title: 踩坑记录
  #   details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
  #   link: https://notes.fe-mm.com/pit/npm
  #   linkText: 踩坑记录
  # - icon: 💯
  #   title: 吾志所向，一往无前。
  #   details: '<small class="bottom-small">一个想躺平的小开发</small>'
  #   link: https://notes.fe-mm.com/mao
---

<style>
@keyframes rotateForever {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);  /* 初始状态 */
  }
  100% {
    transform: translate(-50%, -50%) rotate(666deg);  /* 结束时旋转666度 */
  }
}

.home-layout .image-src {
  animation: rotateForever 59s linear infinite;  /* 59秒，线性，循环播放 */
}

.home-layout .details small {
  opacity: 0.8;
}

.home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
