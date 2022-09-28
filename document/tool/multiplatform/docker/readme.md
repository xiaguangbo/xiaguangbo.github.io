## 安装

### linux

dnf：sudo dnf install docker

启动 docker 服务：sudo systemctl start docker

## 命令

- 创建容器：docker create -it --privileged --name container_name image_name:image_version

    -it：i：可交互。t：交互方式是终端  
    --privileged：用户可以有 root 权限

- 运行容器：docker start ubuntu_container_name
- 进入容器：docker exec -it ubuntu_container_name bash
    
    bash：进入容器后执行 bash，一个终端程序。这样才能正常使用终端