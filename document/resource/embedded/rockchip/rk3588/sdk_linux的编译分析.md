## 简介

build.sh 的本体在 device/rockchip/common/build.sh

build.sh 执行语句有两部分，一是从 109 行开始到 134 行，二是从 2155 行开始到 2258 行

## ./build.sh

需要先运行一次，选择要使用的板子的 mk 文件，比如 itx-3588j-buildroot.mk，然后再运行一次就会编译出最终的镜像文件

如果没有 device/rockchip/.BoardConfig.mk 就会执行 build_select_board，否则直接覆盖

```
118~120 build_select_board 选择配置文件并创建 device/rockchip/.BoardConfig.mk：
    在特定目录里找到 mk 文件
    choose_target_board 输出 mk 文件列表并让用户输入选择的 mk 文件的序号
    让 device/rockchip/.BoardConfig.mk 链接指向序号对应的 mk 文件
    输出 switching to board: /root/sdk_linux/rk3588_repo_sdk_v1.0.2a/device/rockchip/rk3588/itx-3588j-buildroot.mk
```

```
121 unset_board_config_all：
    里面执行了 device/rockchip/.BoardConfig.mk

OPTIONS 里的参数默认是 "allff"

2170~2258 for 遍历 OPTIONS 里的参数：
    输出 OPTIONS 里的参数 "processing option: $option"
    case 根据 OPTIONS 里的参数处理
        *.mk：修改 .BoardConfig.mk 链接指向新的 mk 文件
        lunch：build_select_board 选择配置文件并创建 device/rockchip/.BoardConfig.mk
        allff：build_allff{build_all build_firmware build_updateimg}
```

```
1207 build_all
    输出一堆 TARGET_ARCH 变量，变量来自 unset_board_config_all 执行的 device/rockchip/.BoardConfig.mk 里的 RK_... 变量
    echo "TARGET_ARCH=$RK_ARCH"
    ...
```