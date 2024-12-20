## 简介

文件同步工具，支持本地硬盘、ssh。默认使用文件大小和修改时间决定文件是否需要更新

## 示例

- 本地同步

  `rsync -avziPh --delete ~/abc ~/123`，会在`123`里看到`abc`，并删除`~/123/abc`里有的但`~/abc`里没有的文件，相当于是`~/123/abc`是`~/abc`的镜像。不影响`123`里的其他文件和文件夹

- linux、windows 与手机同步

  需要通过 ssh 来传输。安卓使用 [SimpleSSHD](http://www.galexander.org/software/simplesshd)或其他可以使用 ssh 的软件，打开软件后点右上角三个点里的`Enable /sdcard`，再点击`START`。手机 ip 显示在主界面的蓝色区域里。每次进行 ssh 操作时软件都会生成一个密码

  因为安卓的原因，rsync 无法复制链接到安卓里，所以这里将链接替换成真实文件。而且文件所属用户也会被改成安卓里的 `root evrybordy`，但这没事，当同步回电脑时会自动改到调用 rsync 的用户

  windows 需要安装 msys2，然后更改为清华源，执行`pacman -S rsync openssh`。即使 windows 在虚拟机里用 NAT 网络也可以，可以使用`ping`来测试是否能连接到手机，或者手机使用 usb 连接虚拟机并开启 rndis/网络共享，这样虚拟机也能连接手机

  linux 同步到手机：`rsync -rLtgoDvziPh --delete -e 'ssh -p 2222' /home/xiaguangbo/linux 192.168.166.203:/sdcard/xiaguangbo`

  windows 同步到手机：`rsync -rLtgoDvziPh --delete -e 'ssh -p 2222' /c/Users/16175/Desktop/windows 192.168.166.203:/sdcard/xiaguangbo`

  手机同步到 linux（在电脑上执行），windows 同理：`rsync -avziPh --delete -e 'ssh -p 2222' 192.168.166.203:/sdcard/xiaguangbo/linux /home/xiaguangbo`

## 参数

- `-a`：等同于`-rlptgoD`，可以递归同步，同步元信息（比如修改时间、权限等）
- `-v`：将结果输出到终端，这样就可以看到哪些内容会被同步
- `-n`：模拟命令执行的结果，并不真的执行命令。用于看会改变什么
- `--delete`：将删除只存在于目标目录不存在于源目录的文件
- `-z`：压缩传输的数据，降低带宽需求
- `-i`：传输时显示文件操作码
- `-e`：指定 ssh 和 ssh 的参数
- `-P`：显示进度 + 接收方接收文件被中断时依然保留已经接收的部分，下次传输可续传
- `-h`：将字节数自适应转换到`K M G T P`
- `-l`：`--links, -l: copy symlinks as symlinks`
- `-L`：`--copy-links, -L: transform symlink into referent file/dir`
- `-p`：复制到目标的文件的所属用户保持和源一致


## 问题

- symlink has no referent

  源文件里的链接的文件不存在。删除源文件的无效链接或者不管
