- 更新包源信息：sudo dnf update
- 更新所有包：sudo dnf upgrade
- 搜索包：sudo dnf search package_name
- 安装包：sudo dnf install package_name
- 更换包源

    1. 备份

        ```
        sudo mv /etc/yum.repos.d/fedora.repo /etc/yum.repos.d/fedora.repo.backup
        sudo mv /etc/yum.repos.d/fedora-updates.repo /etc/yum.repos.d/fedora-updates.repo.backup
        ```

    2. 下载

        ```
        sudo curl -o /etc/yum.repos.d/fedora.repo http://mirrors.aliyun.com/repo/fedora.repo
        sudo curl -o /etc/yum.repos.d/fedora-updates.repo http://mirrors.aliyun.com/repo/fedora-updates.repo
        ```

    3. 更新包源信息