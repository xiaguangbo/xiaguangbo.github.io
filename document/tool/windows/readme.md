## vhdx 系统

制作的 vhdx 使用动态 vhdx，静态 vhdx 会直接占用设定大小，而动态 vhdx 只会启动后才会占用设定大小

windows vhdx 系统启动后修改注册表的 HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\FsDepends\Parameters 的 VirtualDiskExpandOnMount 项的值为 4，这样能防止动态 vhdx 启动后扩展到设定的最大大小，防止占硬盘空间，而且也能防止 vhdx 所处的硬盘空间不够导致扩展失败而无法启动  
如果出现 windows vhdx 系统更新失败的情况，就在能正常更新系统的系统盘里，用 BCD 编辑器（如 bootice）添加启动该 vhdx 的启动项，启动后就能正常更新了。直接把 vhdx 所在的移动硬盘的路径添加进去

可以使用 bootice 添加 vhdx 启动项

## 区分文件大小写

开启：fsutil file SetCaseSensitiveInfo D:\xiaguangbo\resource\embedded\code enable  
关闭：fsutil file SetCaseSensitiveInfo D:\xiaguangbo\resource\embedded\code disable

前提：文件夹为空，命令行为管理员权限

## powershell 不能执行脚本

set-executionpolicy remotesigned