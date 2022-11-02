## 简介

build.sh 的本体在 device/rockchip/common/build.sh

build.sh 选择配置文件是从 109 行开始到 134 行，编译是从 2155 行开始到 2258 行

## ./build.sh

需要先运行一次，选择要使用的板子的 mk 文件，比如 itx-3588j-buildroot.mk，然后再运行一次就会编译出最终的镜像文件

选择配置文件：
```
build_select_board：
    找到 mk 文件
    choose_target_board 输出 mk 文件列表并让用户输入选择的 mk 文件的序号
    让 device/rockchip/.BoardConfig.mk 指向序号对应的 mk 文件
    输出 switching to board: /root/sdk_linux/rk3588_repo_sdk_v1.0.2a/device/rockchip/rk3588/itx-3588j-buildroot.mk
    
unset_board_config_all：
    删除配置？里面先执行了 .BoardConfig.mk 再卸载了
```
