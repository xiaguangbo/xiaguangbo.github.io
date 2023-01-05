## 从 .itb 里提取

```
使用 u-boot/tools/dumpimage 工具可以对itb文件进行分离，示例如下:

dumpimage -l your.itb // 列出itb文件中描述内核、根文件系统、设备树等的相关信息
dumpimage -i your.itb -T flat_dt -p 0 uboot // 提取 “Image 0 (uboot)”，输出文件名为 uboot，文件名通常保持一致
```