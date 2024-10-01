import { defineConfig } from 'vitepress'
import { getSidebarData, getNavData } from './nav_sidebar.mts'

export default defineConfig({
  head: [["link", { rel: "icon", href: "/logo.svg" }]], // 网页标签栏图标
  title: "泽生电气", // 顶部的 Home 名

  themeConfig: {
    logo: '/logo.svg', // 顶部的 Home 图标
    nav: getNavData(), // 顶部的导航栏
    sidebar: getSidebarData(), // 侧边栏
    socialLinks: [{ icon: 'github', link: 'https://github.com/xiaguangbo/xiaguangbo.github.io' }],

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
              navigateText: "切换",
              selectText: "选择",
              closeText: "关闭"
            },
          },
        },
      },
    },
  }
})
