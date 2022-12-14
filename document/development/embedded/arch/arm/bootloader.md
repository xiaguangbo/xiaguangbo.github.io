```
bl1：bootrom，EL3。完成中断向量表设定以及其他 CPU 相关设定、提供 usb 下载固件等，是厂商写在 cpu 自带的 flash 里的

bl21：tpl，EL3，初始化 ddr。tpl 应该也属于 spl，可能初始化 ddr 涉及芯片关键寄存器，为安全考虑就单独拿出来了作为 tpl 了
bl22：spl，EL3，加载 bl31、bl32、bl33 到对应权限的 RAM 中

bl31：安全侧与非安全侧的切换。atf。管理 smc 指令的处理和中断的主力，运行在 secure monitor（EL3） 状态
bl32：安全侧程序。tee os：optee，EL2
bl33：非安全侧程序。uboot，EL2

APP，EL0
kernel，EL1

atf 会提供 bl1 到 bl31，但实际上只用 bl31，bl21 会由 uboot-spl 提供，其他部分做参考。bl32 由 optee 提供，厂商也会提供这些

现在很多处理器都内置一个 bootrom，执行部分初始化，并可从各种外设和存储器中加载程序并执行，bootrom 中固化的程序被称为一级程序加载器，被它加载的程序就称为二级程序加载器（secondary program loader，即 SPL）。
其实 u-boot 本身就可以作为二级程序加载器，但不幸的是一般BOOT ROM之后，主存储器都是没有初始化的，例如 BBB 只有 109KB 的内置 RAM 可用，这就限制了程序的大小，于是精简的 u-boot，u-boot-spl 就此问世。
spl 代码和 uboot 的代码是在一起的，在 uboot 基础上定义一些和 spl 有关的宏来控制一些由变化的代码，编译的时候会将这些文件单独放在 u-boot 的根目录下的 tpl、spl 目录里。
```

```
安全侧与非安全侧的区别就是当非安全侧想获取安全侧的功能时必须过验证（CSF 头中的签名），验证不通过就无法获取，并没有限制安全侧程序不能是其他程序。这可以保护重要数据，比如指纹、支付密码。

EL0：一般的应用程序。
EL1：操作系统，比如 Linux。
EL2：虚拟化（Hypervisor），虚拟机管理器。
EL3：最底层的安全固件（安全监视器），比如 ARM Trusted Firmware（ARM 安全固件，ATF，也就是 TF-A）。
数字越大，级别越高
```

```
1. bl1跳转到bl2执行

　　在bl1完成了bl2 image加载到RAM中的操作，中断向量表设定以及其他CPU相关设定之后，在bl1_main函数中解析出bl2 image的描述信息，获取入口地址，并设定下一个阶段的cpu上下文，完成之后，调用el3_exit函数实现bl1到bl2的跳转操作，进入到bl2中执行.

2.bl2跳转到bl31执行

　　在bl2中将会加载bl31, bl32, bl33的image到对应权限的RAM中，并将该三个image的描述信息组成一个链表保存起来，以备bl31启动bl32和bl33使用.在AACH64中，bl31位EL3 runtime software，运行时的主要功能是管理smc指令的处理和中断的主力，运行在secure monitor状态中

　　bl32一般为TEE OS image，本章节以OP-TEE为例进行说明

　　bl33为非安全image，例如uboot, linux kernel等，当前该部分为bootloader部分的image，再由bootloader来启动linux kernel.

　　从bl2跳转到bl31是通过带入bl31的entry point info调用smc指令触发在bl1中设定的smc异常来通过cpu将全向交给bl31并跳转到bl31中执行。

3.bl31跳转到bl32执行

　　在bl31中会执行runtime_service_inti操作，该函数会调用注册到EL3中所有service的init函数，其中有一个service就是为TEE服务，该service的init函数会将TEE OS的初始化函数赋值给bl32_init变量，当所有的service执行完init后，在bl31中会调用bl32_init执行的函数来跳转到TEE OS的执行

4.bl31跳转到bl33执行

　　当TEE_OS image启动完成之后会触发一个ID为TEESMC_OPTEED_RETURN_ENTRY_DONE的smc调用来告知EL3 TEE OS image已经完成了初始化，然后将CPU的状态恢复到bl31_init的位置继续执行。

　　bl31通过遍历在bl2中记录的image链表来找到需要执行的bl33的image。然后通过获取到bl33 image的镜像信息，设定下一个阶段的CPU上下文，退出el3然后进入到bl33 image的执行
```