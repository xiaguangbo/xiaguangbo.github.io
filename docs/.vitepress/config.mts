import { defineConfig } from "vitepress";
import { getSidebarData, getNavData } from "./nav_sidebar.mts";

export default defineConfig({
  head: [["link", { rel: "icon", href: "/logo.svg" }]], // 浏览器标签栏网页图标
  title: "Home", // 顶部的 Home 名，浏览器标签栏名

  themeConfig: {
    logo: "/logo.svg", // 顶部的 Home 图标
    nav: getNavData(), // 顶部的导航栏
    sidebar: getSidebarData(), // 侧边栏
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/xiaguangbo/xiaguangbo.github.io",
      },
    ], // 顶部右侧的社交链接

    // 页脚翻页按钮
    docFooter: {
      prev: "上一章",
      next: "下一章",
    },

    // 标题栏
    outline: {
      label: "标题栏",
    },

    // 移动端
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "文章栏",
    darkModeSwitchLabel: "主题颜色",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    // 搜索框
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
          },
          modal: {
            displayDetails: "展开",
            resetButtonTitle: "清除",
            noResultsText: "未找到",
            footer: {
              navigateText: "移动",
              selectText: "选择",
              closeText: "关闭",
            },
          },
        },
      },
    },
  },
});
