- 检查所有可更新的包（按 y 确认更新）：sudo dnf check-update
- 搜索包：sudo dnf search package_name
- 安装包：sudo dnf install package_name
- 更换包源

    1. 备份

        ```
        sudo mv /etc/yum.repos.d/fedora.repo /etc/yum.repos.d/fedora.repo.backup
        sudo mv /etc/yum.repos.d/fedora-updates.repo /etc/yum.repos.d/fedora-updates.repo.backup
        ```

    2. 下载包源 repo

        ```
        sudo curl -o /etc/yum.repos.d/fedora.repo http://mirrors.aliyun.com/repo/fedora.repo
        sudo curl -o /etc/yum.repos.d/fedora-updates.repo http://mirrors.aliyun.com/repo/fedora-updates.repo
        ```