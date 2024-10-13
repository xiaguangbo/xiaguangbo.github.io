## 简介

文件同步工具，支持本地硬盘、ssh。默认使用文件大小和修改时间决定文件是否需要更新

## 示例

- 本地同步

  `rsync -avziPh --delete ~/abc ~/abcde`，会在`abcde`里看到包括`abc`和其子文件

- 从手机里同步回电脑上

  需要通过 ssh 来传输。安卓使用 [SimpleSSHD](http://www.galexander.org/software/simplesshd)，打开软件后点右上角三个点里的`Enable /sdcard`，再点击`START`就行。手机 ip 显示在主界面的蓝色区域里。每次进行 ssh 操作时软件都会生成一个密码

  因为安卓的原因，rsync 无法复制链接到安卓里，所以这里将链接替换成真实文件。而且文件所属用户也会被改成安卓里的 `root evrybordy`，但这没事，当同步回电脑时会自动改到调用 rsync 的用户

  电脑同步到手机：`rsync -rLtgoDvziPh --delete -e 'ssh -p 2222' ~/abc 192.168.1.143:/sdcard`

  手机同步到电脑：`rsync -avziPh --delete -e 'ssh -p 2222' 192.168.1.143:/sdcard/abc ~`

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
