## 驱动

```
所有会用到的驱动和模块都要添加到设备树里，也就是要添加 node。可以通过 node 里的 compatible 参数来调用它的驱动或者模块
开机自动启用的驱动不写 status 属性，设置 status 属性为 okay 或 ok 都是启动设备，如果设置 disabled 就是不启用
驱动可以编译成模块和内核镜像放同一目录或者直接编译进内核镜像里，因为这样驱动就是内核态，用户软件只能通过系统提供的接口访问驱动，防止用户随意使用硬件，避免恶意操作
```

```
一、.ko 文件介绍

.ko 文件是 kernel object文件（内核模块），该文件的意义就是把内核的一些功能移动到内核外边， 需要的时候插入内核，不需要时卸载。

优点（1）这样可以缩小内核体积；（2）使用方便。


二、使用.ko 文件

1、加载驱动模块test.ko

（1）方法一

进入test.ko驱动模块文件所在的目录，然后直接 insmod test.ko

（2）方法二

将test.ko文件拷贝到/lib/module/#uname-r#/目录下，这里，#uname -r#意思是，在终端中输入

uname -r后显示的内核版本及名称，例如mini2440中#uname-r#就是2.6.32.2-FriendlyARM。

然后 depmod（会在/lib/modules/#uname -r#/目录下生成modules.dep和modules.dep.bb文件，表明模块的依赖关系）

最后 modprobe test（注意这里无需输入.ko后缀） 即可

注：两种方法的区别

modprobe和insmod类似，都是用来动态加载驱动模块的，区别在于modprobe可以解决load module时的依赖关系，它是通过/lib/modules/#uname -r/modules.dep(.bb)文件来查找依赖关系的；而insmod不能解决依赖问题。也就是说，如果你确定你要加载的驱动模块不依赖其他驱动模块的话，既可以insmod也可以modprobe，当然insmod可以在任何目录下执行，更方便一些。而如果你要加载的驱动模块还依赖其他ko驱动模块的话，就只能将模块拷贝到上述的特定目录，depmod后再modprobe。

查看已加载的驱动模块列表：

在任何目录下输入命令 lsmod

卸载驱动模块：

在任何目录下， 输入命令

rmmod <module_name> 注：“module_name”是lsmod显示的模块名称，而不是对应的ko文件名
```

## ramdisk

```
ramdisk是一个基于内存的文件系统，特点是访问不需要驱动。

ramdisk在Linux内核中的作用是什么？
中介作用，即内核通过执行ramdisk的init文件来设置真正的根文件系统，并执行根文件系统的init文件

在Linux内核中使用ramdisk，可以减少内核的代码量。
如果没有ramdisk，要启动存储系统的init进程，内核要能直接运行存储系统的init文件。因为Linux系统访问存储设备，需要有驱动才能进行，所以要将存储系统的驱动代码放进内核。现在有各式各样的存储设备，如果将这些存储设备的驱动代码放进内核，则会导致内核的代码量太大。
引入基于内存的文件系统ramdisk，由于访问内存不需要驱动，则就不用将各种设备的驱动代码放入内核代码中，即减少的代码量是各种设备的驱动代码。
```