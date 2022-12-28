```
bl1：bootrom

bl21：会返回一个值将决定 bootrom 加载 spl（值0） 还是 usbplug（值1）。使用 rkbin/tools/ddrbin_tool 生成，rkbin/bin/rk35/rk3588_ddr_lp4_2112MHz_lp5_2736MHz_v1.08.bin
bl22：rkbin/bin/rk35/rk3588_spl_v1.11.bin
bl21、bl22 加 rkbin/bin/rk35/rk3588_usbplug_v1.09.bin 合并后的固件：rk3588_spl_loader_v1.08.111.bin（RK3588MINIALL.ini）

bl31：rkbin/bin/rk35/rk3588_bl31_v1.30.elf
bl32：rkbin/bin/rk35/rk3588_bl32_v1.12.bin
bl31、bl32 合并后的固件：trust.img（RK3588TRUST.ini），但这里并没这么做，而是和 uboot.img 放在一起了

bl33：非安全侧程序。uboot > kernel

使用 RK3588MINIALL.ini 和 RK3588TRUST.ini 在 u-boot/configs/rk3588_defconfig 里写了
```

```
https://blog.csdn.net/ZCShouCSDN/article/details/121925283

U-Boot 的启动过程划分为两个阶段：芯片初始化 和 板级初始化。芯片初始化阶段的代码主要是位于 ./arch/架构/cpu 目录下，其中再根据架构的不同来区分，主要以汇编语言为主

U-Boot 源码文件众多，我们如何知道最开始的启动文件（程序入口）是哪个呢？这就需要查看 .\arch\arm\cpu 目录下的 u-boot.lds 文件了（对于 SPL/TPL 对应的就是 .\arch\arm\cpu\u-boot-spl.lds 文件）。.lds 是连接脚本文件，它描述了如何生成最终的二进制文件，其中就包含程序入口
```

```
https://opensource.rock-chips.com/wiki_Boot_option

启动流 1 是典型的瑞芯微启动流程，带有瑞芯微加载器;
引导流 2 用于大多数 SoC，U-Boot TPL 用于 DDR 初始化和 SPL 用于信任 （ATF/OP-TEE） 加载并运行到下一阶段;

注1.如果 loader1 有 1 个以上的阶段，程序将返回到 bootrom 和 bootrom 加载并运行到下一阶段。例如。如果 loader1 是 tpl 和 spl，bootrom 将首先运行到 tpl，tpl init ddr 并返回到 bootrom，然后 bootrom 加载并运行到 spl。
注2.如果启用了信任，loader1 需要同时加载信任和 you-boot，然后在安全模式下运行信任（armv8 中的 EL3），信任进行初始化并在非安全模式下运行到 U-Boot（armv8 中的 EL2）。
注3.对于trust（在trust.img或u-boot.itb中），armv7只有一个发球台.bin有或没有ta，armv8有bl31.elf和bl32选项。
注4.在boot.img中，内容可以是zImage及其Linux的dtb，也可以是grub.efi，也可以是AOSP boot.img，ramdisk是可选的;
```