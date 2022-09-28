## 在 docker 里使用 ubuntu 18.04 开发

### 准备软件

1. 安装软件

    ```
    sudo apt install repo git ssh make gcc libssl-dev liblz4-tool expect g++ patchelf chrpath gawk texinfo chrpath diffstat binfmt-support qemu-user-static live-build bison flex fakeroot cmake gcc-multilib g++-multilib unzip device-tree-compiler ncurses-dev
    ```

    需要补充的软件包：
    ```
    p7zip bc time rsync
    ```

### 准备文件

1. 将下载的文件复制到 ubuntu 里

    ```
    docker cp C:\xiaguangbo\other\编程\嵌入式\rockchip\rk3588\sdk_linux ubuntu_container:/home/xiaguangbo/
    ```

    在 windows 下执行

2. 解压、更新

    ```
    cd ~/sdk_linux
    sudo 7zr x rk3588_repo_sdk_v0.1.0a.7z
    cd rk3588
    sudo .repo/repo/repo sync -l
    sudo .repo/repo/repo start rk3588/firefly --all
    sudo cp ../bundle/* ./
    sudo chmod 777 ./update.sh
    sudo ./update.sh
    ```

    update.sh 里的 7z 命令要改成 7zr

3. 其他

    ```
    sudo rm -rf rk3588-v*
    ```
    
    ```
    sudo mkdir rockdev
    ```

## 编译

1. 配置

    ```
    cd ~/sdk_linux/rk3588
    sudo ./build.sh itx-3588j-buildroot.mk
    ```

2. 编译

    ```
    sudo ./build.sh
    ```

    编译后的镜像在 /home/xiaguangbo/sdk_linux/rk3588/rockdev/pack 里

3. 将编译好的文件复制到 windows

    ```
    docker cp ubuntu_container:/home/xiaguangbo/sdk_linux/rk3588/rockdev/pack C:\Users\16175\Downloads
    ```