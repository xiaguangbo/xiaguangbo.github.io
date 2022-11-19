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
