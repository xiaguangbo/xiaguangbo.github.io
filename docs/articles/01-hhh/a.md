# 开始

1. 安装 nodejs

    fedora: `sudo dnf install nodejs`

2. 创建文件夹

    和仓库名保持一致。名称格式推荐`username.github.io`，这样在访问页面时只使用`https://username.github.io`，不用再加仓库名

    `username`：账号用户名

    ```sh
    mkdir username.github.io
    cd username.github.io
    ```

3. 初始化

    ```sh
    npm add -D vitepress
    npx vitepress init
    ```

4. 本地预览

    ```sh
    npm run docs:dev
    ```

# 自动生成导航栏搜索栏

```sh
npm install -D @types/node
```

# 部署

1. 添加 `.gitignore`

    参考仓库文件

2. 添加 `.github/workflows/deploy.yml`
    
    部署到 github 并使用 CI。不再使用本地编译的网页

    参考仓库文件

3. 创建 github 仓库
4. 上传
5. 设置 Setting/Pages

# 问题

- 预览时无法访问则需要关闭代理
- 没有`package-lock.json`时 CI 会失败，运行`npm add -D vitepress`会生成
- 使用他人模板时不能正常工作就自己搭建