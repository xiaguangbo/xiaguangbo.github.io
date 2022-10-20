## 安装

- linux：包名为 docker

    启动 docker 服务：sudo systemctl start docker

- windows

    软件名为 docker desktop  
    如果出现 WslRegisterDistribution failed with error: 0x800701bc 这种错误说明需要更新 wsl 的 linux 内核，方法是在 windows 的终端里执行 wsl --update

## 命令

- 创建容器：sudo docker create -it --privileged --name container_name image_name:image_version  
    -it：i：可交互。t：交互方式是终端  
    --privileged：用户可以有 root 权限

- 查看所有容器：sudo docker ps -a
- 运行容器：sudo docker start container_name
- 进入容器：sudo docker exec -it container_name bash  
    bash：进入容器后执行 bash，一个终端程序。这样才能正常使用终端

- 停止容器：sudo docker stop container_name