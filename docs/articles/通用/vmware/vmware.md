## 简介

虚拟机

## 下载

需要注册 broadcom 账号，登陆后进入`My Downloads/VMware Workstation Pro`，下载`VMware Workstation Pro ... for Personal Use ...`，可选择 Windows 或 Linux 版本

## 安装

- fedora

    ```sh
    chmod +x ./VM...
    sudo ./VM...
    ```

    ```sh
    sudo dnf install kernel-devel kernel-headers gcc gcc-c++ make git
    ```

    ```sh
    git clone https://github.com/bytium/vm-host-modules.git
    cd vm-host-modules
    git checkout 17.6

    make
    sudo make install
    ```
