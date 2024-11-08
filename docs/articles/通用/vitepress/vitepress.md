## 简介

一个博客框架

## 开始

1. 安装 nodejs

   fedora：`sudo dnf install nodejs`

2. 创建文件夹

   ```sh
   mkdir username.github.io
   cd username.github.io
   ```

   和仓库名保持一致。名称格式推荐用`username.github.io`，这样在访问页面时只需要用`https://username.github.io`，不用再加仓库名

   `username`：github 账号用户名

3. 初始化

   ```sh
   npm add -D vitepress
   npx vitepress init
   ```

4. 本地预览

   ```sh
   npm run docs:dev
   ```

## 自动生成导航栏和侧边栏

1. 安装 node 库

   ```sh
   npm install -D @types/node
   ```

2. 添加 `docs/.vitepress/nav_sidebar.mts`

   参考仓库文件

3. 修改 `docs/.vitepress/config.mts`

   ```js
   import { getSidebarData, getNavData } from './nav_sidebar.mts'

   ...

   nav: getNavData(), // 顶部的导航栏
   sidebar: getSidebarData(), // 侧边栏
   ```

## 搜索框

参考`docs/.vitepress/config.mts`里的`search`

## 首页

参考`docs/index.md`

## 部署

1. 添加 `.gitignore`

   参考仓库文件

   忽略不需要上传的文件夹和文件

2. 添加 `.github/workflows/deploy.yml`

   参考仓库文件

   github CI 脚本。自动编译，无需本地编译

3. 创建 github 仓库

   仓库名格式使用`username.github.io`

4. 上传

   ```sh
   echo "# username.github.io" >> README.md
   git init
   git add README.md
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

   不熟悉 git 的建议一行一行的执行，避免出现问题时不知道是哪一行有问题

5. 设置 Pages

   在`Settings/Pages/Build and deployment/Source`里选择 GitHub Actions。使用 CI 输出的文件

## 问题

- 预览时没任何显示一片空白，应关闭代理
- 没有`package-lock.json`时 CI 会失败，运行`npm add -D vitepress`会生成
- 使用他人模板时不能正常工作就自己搭建
- git 没设置提交用的用户名和邮箱会在`commit`时报错并提示
- 第一次`push`时需要输入 github 账户和 token 密码。不同的 token 具有不同的权限

  获取 token，在 github 网页上点击自己的头像，进入`Settings/Developer Settings/Personal access tokens/Tokens (classic)`，在这里添加 token 或更新 token 的权限。这里需要勾选`workflow`的权限

  token 一旦生成就要自己存下来以便下次使用，刷新网页就会消失
