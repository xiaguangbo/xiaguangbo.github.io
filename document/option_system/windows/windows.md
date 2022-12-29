## vc 运行库

https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170

## 区分文件大小写

开启：fsutil file SetCaseSensitiveInfo D:\xiaguangbo\resource\embedded\code enable  
关闭：fsutil file SetCaseSensitiveInfo D:\xiaguangbo\resource\embedded\code disable

前提：文件夹为空，命令行为管理员权限

## powershell 不能执行脚本

set-executionpolicy remotesigned