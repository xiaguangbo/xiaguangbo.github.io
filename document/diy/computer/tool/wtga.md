制作 wintogo 的工具  
会将移动硬盘整个格式化掉

制作的 vhdx 可以配合 ventoy 使用

## 功能

- 主界面

    - 第一行：将 windows.iso 挂载，选择里面的 sources/install.esd 文件
    - 第二行：选择要安装 wintogo 的移动硬盘。会将整个硬盘格式化
    - 第三行：选择要安装的 windows 版本，专业版、家庭版之类的。专业版是带 pro 字样的

- 高级功能

    - 常用

        “传统”和“虚拟硬盘”的区别是在系统部分，“传统”是直接释放到分区里的，“虚拟硬盘”是放到了 vhdx 里  
        下面的就选择“UEFI+GPT”，其他的不用动

    - 虚拟硬盘

        如果用“虚拟硬盘”则选择动态 vhdx

    分区和备份功能不用动

## vhdx 系统

制作的 vhdx 使用动态 vhdx，静态 vhdx 会直接占用设定大小，而动态 vhdx 只会启动后才会占用设定大小

windows vhdx 系统启动后修改注册表的 HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\FsDepends\Parameters 的 VirtualDiskExpandOnMount 项的值为 4，这样能防止动态 vhdx 启动后扩展到设定的最大大小，防止占硬盘空间，而且也能防止 vhdx 所处的硬盘空间不够导致扩展失败而无法启动  
如果出现 windows vhdx 系统更新失败的情况，就在能正常更新系统的系统盘里，用 BCD 编辑器（如 bootice）添加启动该 vhdx 的启动项，启动后就能正常更新了。直接把 vhdx 所在的移动硬盘的路径添加进去

可以使用 bootice 添加 vhdx 启动项

## wintogo

电脑里的 nvme 或 sata 硬盘安装好系统后拿出来使用移动硬盘盒驱动，并不能顺利启动系统，但能启动引导程序。猜测是引导由 BIOS 加载并启动，但是引导程序记录的系统的位置是在电脑内部，而不是移动硬盘

但反过来好像可以