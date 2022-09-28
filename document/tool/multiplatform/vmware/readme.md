## 共享文件夹

vmware 软件里设置共享文件夹，然后进到 linux 里  
执行 vmware-hgfsclient，查看设置的共享文件夹的名字  
假设共享文件夹的名字是 abc

- 手动挂载：sudo vmhgfs-fuse .host:/ /mnt/hgfs -o allow_other

    .host:/ 的后面不跟 abc，就会在 /mnt/hgfs 里看到 abc 文件夹，如果跟了就没有 abc，就会直接看到 abc 里面的东西  
    -o allow_other 是让所有用户都能访问，不加这个默认只有root用户能访问

- 开机自动挂载：

    在 /etc/fstab 里添加 host:/ /mnt/hgfs fuse.vmhgfs-fuse allow_other 0 0  
    后面的两个零是两个功能，为零就代表不需要这个功能。第一个是和dump的备份功能有关，第二个是和fsck的开机自动扫描硬盘有关

### 问题

共享文件夹里的 git 仓库在 linux 里会因为所有权不是当前用户而无法执行 git 的命令，需要在 linux 里执行 git config --global --add safe.directory /mnt/hgfs/xiaguangbo/xiaguangbo.github.io 这样的