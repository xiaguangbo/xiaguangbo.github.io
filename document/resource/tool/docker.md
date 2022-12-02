## 安装

- linux

    包名为 docker  
    启动 docker 服务：sudo systemctl start docker

- windows

    软件名为 docker desktop  
    需要先安装 wsl，执行 wsl --install。如果还是有问题就更新 wsl 的 linux 内核，执行 wsl --update

## 命令

需要先启动 docker 才能执行命令

- 创建容器：sudo docker create -it --privileged --name container_name image_name:image_version  
    -it：i：可交互。t：交互方式是终端  
    --privileged：用户可以有 root 权限

- 列出所有容器：sudo docker ps -a
- 列出所有镜像：sudo docker images
- 运行容器：sudo docker start container_name
- 进入容器：sudo docker exec -it container_name bash  
    bash：进入容器后执行 bash，一个终端程序。这样才能正常使用终端

- 停止容器：sudo docker stop container_name
- 删除容器：sudo rm container_name
- 删除镜像：sudo rmi image_name:image_version

- 复制：docker cp  
    从主机到 docker：docker cp path container_name:path  
    从 docker 到主机：docker cp container_name:path path

    路径不能带 /*