在 docker 里使用 ubuntu 18.04 开发

## sdk_linux

### 准备包

官方说明的包：
```
sudo apt install repo git ssh make gcc libssl-dev liblz4-tool expect g++ patchelf chrpath gawk texinfo chrpath diffstat binfmt-support qemu-user-static live-build bison flex fakeroot cmake gcc-multilib g++-multilib unzip device-tree-compiler ncurses-dev
```

需要补充的包：
```
sudo apt install p7zip-full bc time rsync
```

### 准备文件

1. 将文件复制进来
2. 解压、更新

    ```
    cd ~/sdk_linux
    sudo 7z x rk3588_repo_sdk_v0.1.0a.7z
    cd rk3588
    sudo .repo/repo/repo sync -l
    sudo .repo/repo/repo start rk3588/firefly --all
    sudo cp ../bundle/* ./
    sudo chmod 777 ./update.sh
    sudo ./update.sh
    ```

3. 其他

    ```
    sudo rm -rf rk3588-v*
    sudo mkdir rockdev
    ```

### 编译

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

## npu

### 准备包

官方说明的包：
```
sudo apt install python3 python3-dev python3-pip libxslt1-dev zlib1g-dev libglib2.0 libsm6 libgl1-mesa-glx libprotobuf-dev gcc
```

需要补充的包：
```
sudo apt install p7zip-full
```

### 准备文件

1. 将文件复制进来
2. 解压

    ```
    7z x rknn-toolkit2-master.zip -orknn-toolkit2-master
    7z x rknpu2-master.zip -orknpu2-master
    ```

### 准备包

```
cd ~/npu/rknn-toolkit2-master
python3 -m pip install --upgrade pip
pip3 install numpy scikit-build
pip3 install -r doc/requirements_cp36-1.4.0.txt
pip3 install package/rknn_toolkit2-1.4.0_22dcfef4-cp36-cp36m-linux_x86_64.whl
```