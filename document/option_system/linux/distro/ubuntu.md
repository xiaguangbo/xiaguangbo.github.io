## docker 里装 ubuntu

1. 容器
    1. 创建容器：sudo docker create -it --privileged --name ubuntu_1804_container ubuntu:18.04
    2. 启动容器：sudo docker start ubuntu_1804_container
    3. 进入容器：sudo docker exec -it ubuntu_1804_container bash

2. 包
    1. 换源
    2. 更新包源信息
    3. 更新所有包

3. 用户
    1. 安装软件：apt install vim sudo
    2. 修改 root 的密码
    3. 添加用户
    4. 让用户可以获得 root 权限
    5. 切换到普通用户
    6. 更新包源信息
    7. 更新所有包

## 用户

- 设置用户密码：passwd user_name  
- 添加用户：adduser user_name  
- 让用户可以获得 root 权限：在 /etc/sudoers 里的 root ALL=(ALL:ALL) ALL 下面添加 user_name ALL=(ALL:ALL) ALL，然后强制写入  
- 切换用户：su user_name