## virtualbox

### 双向拖拽

```
不能拖拽单文件，必须要放在文件夹里，拖拽文件夹

除了要勾选，还要安装增强功能，点击后在资源管理器找到该光盘并安装，重启虚拟机里的系统
```

### 问题

```
如果虚拟机里的 windows 一段时间不动就会假死，表现为画面定格，任何操作都没反应，使用虚拟机的正常关机也没用，只能使用虚拟机的强制退出才能关闭，起初以为是 屏幕自动熄灭时间 搞的鬼，结果不是
```

## vmware

### 共享文件夹

vmware 软件里设置共享文件夹，然后进到 linux 里  
执行 vmware-hgfsclient，查看设置的共享文件夹的名字  

- 手动挂载：sudo vmhgfs-fuse .host:/ /mnt/hgfs -o allow_other  
    如果 .host:/ 的后面不加 share_floder_name，就会在 /mnt/hgfs 里看到 share_floder_name，如果加了就没有 share_floder_name 这一级，会直接看到 share_floder_name 里面的东西  
    -o allow_other 是让所有用户都能访问，不加这个就只有 root 用户能访问

- 开机自动挂载：在 /etc/fstab 里添加 host:/ /mnt/hgfs fuse.vmhgfs-fuse allow_other 0 0  
    后面的两个零是两个功能，为零就代表不需要这个功能。第一个是和 dump 的备份功能有关，第二个是和 fsck 的开机自动扫描硬盘有关

### 问题

共享文件夹里的 git 仓库在 linux 里会因为所有权不是当前用户而无法执行 git 的命令，需要在 linux 里执行 git config --global --add safe.directory /mnt/hgfs/share_floder_name/git_repository_name