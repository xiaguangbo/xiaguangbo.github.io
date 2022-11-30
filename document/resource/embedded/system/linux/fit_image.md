```
https://blog.csdn.net/ee230/article/details/53318027

Linux kernel 在 ARM 架构中引入 device tree（全称是flattened device tree，后续将会以FDT代称）的时候，其实怀揣了一个Unify Kernel的梦想，同一个Image，可以支持多个不同的平台。

在编译linux kernel的时候，不必特意的指定具体的架构和SOC，只需要告诉kernel本次编译需要支持哪些板级的platform即可，最终将会生成一个Kernel image，以及多个和具体的板子（哪个架构、哪个SOC、哪个版型）有关的FDT image（dtb文件）。

bootloader在启动的时候，根据硬件环境，加载不同的dtb文件，即可使linux kernel运行在不同的硬件平台上，从而达到unify kernel 的目标

u-boot 新的 uImage 格式（FIT image，Flattened uImage Tree）

使用 FDT 语言编写 its 文件，编译成 itb 文件
fdt 与 dts 语法几乎相同，只不过自定义了一些特有的节点，包括 images、configurations 等

其中 image source file(.its) 和 device tree source file(.dts) 类似，负责描述要生成的 image file 的信息。mkimage 和dtc 工具，可以将 .its 文件以及对应的 image data file，打包成一个 image file。我们将这个文件下载到内存中，使用 bootm 命令就可以执行了
```

将多个设备树和固件放到一起，可以让 uboot 启动时选择不同的搭配

全称是 flattened image tree uImage，为了更好的支持单个固件的通用性，类似于 kernel device tree 机制，uboot 也需要对这种 uImage 固件进行支持。FIT uImage 中加入多个 dtb 文件，和 ramdisk 文件，当然如果需要的话，同样可以支持多个 kernel 文件

需要准备的文件和工具:
```
1. DTC工具
2. mkimage
3. image  （在arch/arm/boot目录下）
4. 设备树文件
5. .its文件
```

以上前四个文件在传统生成系统镜像文件都会得到
