- 更新包源信息：sudo apt update
- 更新所有包：sudo apt upgrade
- 搜索包：sudo apt-cache search package_name
- 安装包：sudo apt install package_name
- 更换包源

    1. 安装：sudo apt install ca-certificates
    2. 备份：sudo cp /etc/apt/sources.list /etc/apt/sources.list.backup
    3. 将 /etc/apt/sources.list 内容替换如下：

        ```
        deb https://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
        deb https://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
        deb https://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
        deb https://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
        ```

        bionic 是 ubuntu 18 的代号，不同的大版本的 ubuntu 的代号也不一样，代号看 /etc/apt/sources.list 里的或者上网搜索  

    4. 更新包源信息