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
  sudo dnf install kernel-devel gcc gcc-c++ make
  ```

  如果启动后直接提示`install`也没有让选什么东西的路径就不需要下面的步骤

  ```sh
  git clone https://github.com/bytium/vm-host-modules.git
  cd vm-host-modules
  git checkout 17.6

  make
  sudo make install
  ```

## 问题

问题|答案
---|---
启动虚拟机报无法启动，无法分配 ...MB 内存|比如电脑内存 32G 分配 16G 给虚拟机就可能出现这个问题，这时可以点一下显示分配内存大小旁边的`-`号（内存会减少 4MB）就可以了
