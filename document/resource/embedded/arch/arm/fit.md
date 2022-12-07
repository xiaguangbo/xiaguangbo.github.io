https://blog.csdn.net/qq_16933601/article/details/126982078

## fit、its、itb、fdt

```
fit：flattened image tree（扁平镜像树？扁平镜像树格式），一种可以同时包含多组启动文件的镜像格式
its：image tree source（镜像树源文件），类似于设备树的描述文件，描述 fit 模式的各个文件的位置和加载到内存的地址
itb：image tree binary（镜像树二进制？扁平镜像二进制），fit 格式的镜像文件，类似于 .img。包含 its、多个 dtb（设备树二进制）、多个 uboot 或 kernel 镜像。用于 uboot 一份，用于 kernel 一份
fdt：flattened device tree（扁平设备树？扁平镜像设备树），its 要记录的 dtb，在这里称为 fdt（flattened device tree）

.its + 镜像文件 => mkimage + dtc => .itb，会根据 .its 里写的路径去打包文件到 .itb 里。.its 里的路径是相对于 u-boot/ 或 kernel/ 的位置
```

## vmlinux、zImage、uImage 历史

```
内核经过编译后，会生成一个elf的可执行程序，叫vmlinux，这个就是原始的未经任何处理加工的原版内核elf文件。不过，最终烧写在嵌入式设备上的并不是这个文件。而是经过objcopy工具加工后的专门用于烧录的镜像格式Image。

原则上Image就可以直接被烧录到Flash上进行启动执行，但linux的内核开发者觉得Image还是太大了，因此对Image进行了压缩，并且在Image压缩后的文件的前端附加了一部分解压缩代码，构成了一个压缩格式的镜像文件就叫zImage。

解压的时候，通过zImage镜像头部的解压缩代码进行自解压，然后执行解压出来的内核镜像。

Uboot要正确启动Linux内核，就需要知道内核的一些信息，比如镜像的类型（kernel image，dtb，ramdisk image），镜像在内存的位置，镜像的链接地址，镜像文件是否有压缩等等。

Uboot为了拿到这些信息，发明了一种内核格式叫uImage，也叫Legacy uImage。uImage是由zImage加工得到的，uboot中有一个工具mkimage，该工具会给zImage加一个64字节的header，将启动内核所需的信息存储在header中。uboot启动后，从header中读取所需的信息，按照指示，进行相应的动作即可。

header格式可以参考：include/image.h。mkimage源码在tools/mkimage
```

## FIT image 历史

```
有了Legacy uImage后，为什么又搞出来一个FIT uImage呢？

在Linus Torvalds 看来，内核中arch/arm/mach-xxx充斥着大量的垃圾代码。因为内核并不关心板级细节，比如板上的platform设备、resource、i2c_board_info、spi_board_info等等。大家有兴趣可以看下s3c2410的板级目录，代码量在数万行。

因此，ARM社区引入了Device Tree，使用Device Tree后，许多硬件的细节可以直接透过它传递给Linux，而不再需要在kernel中进行大量的冗余编码。

为了更好的支持单个固件的通用性，Uboot也需要对这种uImage固件进行支持。FIT uImage中加入多个dtb文件 和ramdisk文件，当然如果需要的话，同样可以支持多个kernel文件。

内核中的FDT全程为flattened device tree，FIT全称叫flattened image tree。FIT利用了Device Tree Source files（DTS）的语法，生成的Image文件也和dtb文件类似（称作itb）。

这样的目的就是能够使同一个uImage能够在Uboot中选择特定的kernel/dtb和ramdisk进行启动了，达成一个uImage可以通用多个板型的目的。
```

## its语法结构

### 例子

```
/*
 * U-Boot uImage source file with multiple kernels, ramdisks and FDT blobs
 */

/dts-v1/;

/ {
	description = "Various kernels, ramdisks and FDT blobs";
	#address-cells = <1>;

	images {
		kernel@1 {
			description = "vanilla-2.6.23";
			data = /incbin/("./vmlinux.bin.gz");
			type = "kernel";
			arch = "ppc";
			os = "linux";
			compression = "gzip";
			load = <00000000>;
			entry = <00000000>;
			hash@1 {
				algo = "md5";
			};
			hash@2 {
				algo = "sha1";
			};
		};

		kernel@2 {
			description = "2.6.23-denx";
			data = /incbin/("./2.6.23-denx.bin.gz");
			type = "kernel";
			arch = "ppc";
			os = "linux";
			compression = "gzip";
			load = <00000000>;
			entry = <00000000>;
			hash@1 {
				algo = "sha1";
			};
		};

		kernel@3 {
			description = "2.4.25-denx";
			data = /incbin/("./2.4.25-denx.bin.gz");
			type = "kernel";
			arch = "ppc";
			os = "linux";
			compression = "gzip";
			load = <00000000>;
			entry = <00000000>;
			hash@1 {
				algo = "md5";
			};
		};

		ramdisk@1 {
			description = "eldk-4.2-ramdisk";
			data = /incbin/("./eldk-4.2-ramdisk");
			type = "ramdisk";
			arch = "ppc";
			os = "linux";
			compression = "gzip";
			load = <00000000>;
			entry = <00000000>;
			hash@1 {
				algo = "sha1";
			};
		};

		ramdisk@2 {
			description = "eldk-3.1-ramdisk";
			data = /incbin/("./eldk-3.1-ramdisk");
			type = "ramdisk";
			arch = "ppc";
			os = "linux";
			compression = "gzip";
			load = <00000000>;
			entry = <00000000>;
			hash@1 {
				algo = "crc32";
			};
		};

		fdt@1 {
			description = "tqm5200-fdt";
			data = /incbin/("./tqm5200.dtb");
			type = "flat_dt";
			arch = "ppc";
			compression = "none";
			hash@1 {
				algo = "crc32";
			};
		};

		fdt@2 {
			description = "tqm5200s-fdt";
			data = /incbin/("./tqm5200s.dtb");
			type = "flat_dt";
			arch = "ppc";
			compression = "none";
			load = <00700000>;
			hash@1 {
				algo = "sha1";
			};
		};

	};

	configurations {
		default = "config@1";

		config@1 {
			description = "tqm5200 vanilla-2.6.23 configuration";
			kernel = "kernel@1";
			ramdisk = "ramdisk@1";
			fdt = "fdt@1";
		};

		config@2 {
			description = "tqm5200s denx-2.6.23 configuration";
			kernel = "kernel@2";
			ramdisk = "ramdisk@1";
			fdt = "fdt@2";
		};

		config@3 {
			description = "tqm5200s denx-2.4.25 configuration";
			kernel = "kernel@3";
			ramdisk = "ramdisk@2";
		};
	};
};
```

### 根节点

```
description：描述uImage的文本。

timestamp：修改Image镜像的时间，由mkimage工具自动生成。在security boot中，timestamp不同也会被认为是不同的Image。

images：子镜像，如kernel Image，ramdisk Image。

configurations：配置项节点，可以将不同类型的二进制文件，根据不同的场景，组合起来，形成一个个的配置项。u-boot在boot的时候，以配置项为单位加载、执行，这样就可以根据不同的场景，方便的选择不同的配置。
```

### images 节点

```
该节点中描述了Image镜像必要的信息

description：子镜像的文本描述，可以随便写。

type：子镜像的类型，比如standalone，kernel，ramdisk，firmware等等。

data：包含该节点二进制文件的路径相对于 u-boot 目录的位置。

compression：压缩方式，比如none，gzip，bzip2。

os：操作系统的名称，如solaris，uboot，qnx等。

arch：平台架构，如arm，mips，i386等。

entry：二进制文件入口地址，即链接地址。

load：二进制文件的加载位置。

hash@1：镜像使用的校验算法，如sha256，crc32等。

algo：算法名称，如crc32，md5，sha256等。

value：算法校验值，即algo计算后的数值。
```

### configurations 节点

```
default：默认的子节点的配置

config@1: 该配置具体使用那些kernel Image，ramdisk Image等

description：该配置的名称。

kernel：镜像类型为kernel的单元的名称。

ramdisk：镜像类型为ramdisk的单元的名称。

fdt：镜像类型为fdt的单元的名称。

loadables：额外的可加载的二进制文件的列表，U-Boot将在给定的起始地址加载每个二进制文件。
```

## FIT Image的编译和启动

制作FIT Image需要用到两个工具，mkimage和的dtc。dtc要导入到环境变量$PATH中，mkimage会调用dtc。

mkimage的输入为 image source file,它定义了启动过程中image的各种属性，扩展名为.its。its只是描述了Image的属性，实际的Image data 是在uImage中，具体路径由its指定。

mkimage的输出是一个后缀为.itb的二进制文件，包含了所有需要的数据（kernel，dtb，ramdisk）。itb文件制作好之后，就可以直接加载到嵌入式设备上，通过bootm命令启动。

在服务器上，可以使用mkimage工具制作 FIT Image。

如下是kernel_fdt.its，下面将使用该文件制作itb。

```
/*
 * Simple U-Boot uImage source file containing a single kernel and FDT blob
 */

/dts-v1/;

/ {
	description = "Simple image with single Linux kernel and FDT blob";
	#address-cells = <1>;

	images {
		kernel@1 {
			description = "Vanilla Linux kernel";
			data = /incbin/("./vmlinux.bin.gz");
			type = "kernel";
			arch = "ppc";
			os = "linux";
			compression = "gzip";
			load = <00000000>;
			entry = <00000000>;
			hash@1 {
				algo = "crc32";
			};
			hash@2 {
				algo = "sha1";
			};
		};
		fdt@1 {
			description = "Flattened Device Tree blob";
			data = /incbin/("./target.dtb");
			type = "flat_dt";
			arch = "ppc";
			compression = "none";
			hash@1 {
				algo = "crc32";
			};
			hash@2 {
				algo = "sha1";
			};
		};
	};

	configurations {
		default = "conf@1";
		conf@1 {
			description = "Boot Linux kernel with FDT blob";
			kernel = "kernel@1";
			fdt = "fdt@1";
		};
	};
};
```

### 编译

```
$ mkimage -f kernel_fdt.its kernel_fdt.itb
DTC: dts->dtb  on file "kernel_fdt.its"
$
$ mkimage -l kernel_fdt.itb
FIT description: Simple image with single Linux kernel and FDT blob
Created:	 Tue Mar 11 16:29:22 2008
 Image 0 (kernel@1)
  Description:	Vanilla Linux kernel
  Type:		Kernel Image
  Compression:	gzip compressed
  Data Size:	1092037 Bytes = 1066.44 kB = 1.04 MB
  Architecture: PowerPC
  OS:		Linux
  Load Address: 0x00000000
  Entry Point:	0x00000000
  Hash algo:	crc32
  Hash value:	2c0cc807
  Hash algo:	sha1
  Hash value:	264b59935470e42c418744f83935d44cdf59a3bb
 Image 1 (fdt@1)
  Description:	Flattened Device Tree blob
  Type:		Flat Device Tree
  Compression:	uncompressed
  Data Size:	16384 Bytes = 16.00 kB = 0.02 MB
  Architecture: PowerPC
  Hash algo:	crc32
  Hash value:	0d655d71
  Hash algo:	sha1
  Hash value:	25ab4e15cd4b8a5144610394560d9c318ce52def
 Default Configuration: 'conf@1'
 Configuration 0 (conf@1)
  Description:	Boot Linux kernel with FDT blob
  Kernel:	kernel@1
  FDT:		fdt@1

在当前目录下就可以找到 kernel_fdt.itb，itb 文件就可以加载到设备上启动。
```

### 加载 itb

```
> tftp 900000 /path/to/tftp/location/kernel_fdt.itb
Using FEC device
TFTP from server 192.168.1.1; our IP address is 192.168.160.5
Filename '/path/to/tftp/location/kernel_fdt.itb'.
Load address: 0x900000
Loading: #################################################################
	 ###########
done
Bytes transferred = 1109776 (10ef10 hex)
=> iminfo

## Checking Image at 00900000 ...
   FIT image found
   FIT description: Simple image with single Linux kernel and FDT blob
   Created:	    2008-03-11	15:29:22 UTC
    Image 0 (kernel@1)
     Description:  Vanilla Linux kernel
     Type:	   Kernel Image
     Compression:  gzip compressed
     Data Start:   0x009000ec
     Data Size:    1092037 Bytes =  1 MB
     Architecture: PowerPC
     OS:	   Linux
     Load Address: 0x00000000
     Entry Point:  0x00000000
     Hash algo:    crc32
     Hash value:   2c0cc807
     Hash algo:    sha1
     Hash value:   264b59935470e42c418744f83935d44cdf59a3bb
    Image 1 (fdt@1)
     Description:  Flattened Device Tree blob
     Type:	   Flat Device Tree
     Compression:  uncompressed
     Data Start:   0x00a0abdc
     Data Size:    16384 Bytes = 16 kB
     Architecture: PowerPC
     Hash algo:    crc32
     Hash value:   0d655d71
     Hash algo:    sha1
     Hash value:   25ab4e15cd4b8a5144610394560d9c318ce52def
    Default Configuration: 'conf@1'
    Configuration 0 (conf@1)
     Description:  Boot Linux kernel with FDT blob
     Kernel:	   kernel@1
     FDT:	   fdt@1
=> bootm
## Booting kernel from FIT Image at 00900000 ...
   Using 'conf@1' configuration
   Trying 'kernel@1' kernel subimage
     Description:  Vanilla Linux kernel
     Type:	   Kernel Image
     Compression:  gzip compressed
     Data Start:   0x009000ec
     Data Size:    1092037 Bytes =  1 MB
     Architecture: PowerPC
     OS:	   Linux
     Load Address: 0x00000000
     Entry Point:  0x00000000
     Hash algo:    crc32
     Hash value:   2c0cc807
     Hash algo:    sha1
     Hash value:   264b59935470e42c418744f83935d44cdf59a3bb
   Verifying Hash Integrity ... crc32+ sha1+ OK
   Uncompressing Kernel Image ... OK
## Flattened Device Tree from FIT Image at 00900000
   Using 'conf@1' configuration
   Trying 'fdt@1' FDT blob subimage
     Description:  Flattened Device Tree blob
     Type:	   Flat Device Tree
     Compression:  uncompressed
     Data Start:   0x00a0abdc
     Data Size:    16384 Bytes = 16 kB
     Architecture: PowerPC
     Hash algo:    crc32
     Hash value:   0d655d71
     Hash algo:    sha1
     Hash value:   25ab4e15cd4b8a5144610394560d9c318ce52def
   Verifying Hash Integrity ... crc32+ sha1+ OK
   Booting using the fdt blob at 0xa0abdc
   Loading Device Tree to 007fc000, end 007fffff ... OK
[    0.000000] Using lite5200 machine description
[    0.000000] Linux version 2.6.24-rc6-gaebecdfc (m8@hekate) (gcc version 4.0.0 (DENX ELDK 4.1 4.0.0)) #1 Sat Jan 12 15:38:48 CET 2008
```

### bootm 启动不同的配置

```
对于FIT Image，bootm有多种启动方式。

1. bootm <addr1>
2. bootm [<addr1>]:<subimg1>
3. bootm [<addr1>]#<conf>[#<extra-conf[#...]]
4. bootm [<addr1>]:<subimg1> [<addr2>]:<subimg2>
5. bootm [<addr1>]:<subimg1> [<addr2>]:<subimg2> [<addr3>]:<subimg3>
6. bootm [<addr1>]:<subimg1> [<addr2>]:<subimg2> <addr3>
7. bootm [<addr1>]:<subimg1> -			  [<addr3>]:<subimg3>
8. bootm [<addr1>]:<subimg1> -			  <addr3>
对于有多种镜像，多套配置的itb，都是以configurations 中default 指定的配置启动。

bootm 200000
也可以手动指定使用那套配置

bootm 200000#cfg@1
也可以手动搭配不同的镜像节点启动

bootm 200000:kernel@1 800000:ramdisk@2
bootm 200000:kernel@1 800000:ramdisk@1 800000:fdt@1
bootm 200000:kernel@2 200000:ramdisk@2 600000
bootm 200000:kernel@2 - 200000:fdt@1
如果bootm的时候不指定地址，则会使用CONFIG_SYS_LOAD_ADDR配置的地址。
```

### 总结

```
FIT Image可以兼容于多种板子，而无需重新进行编译烧写。 对于有多个kernel节点或者fdt节点等等，兼容性更强。同时，可以有多种configurations，来对kernel、fdt、ramdisk来进行组合。
```

## 从 .itb 里提取

```
使用 u-boot/tools/dumpimage 工具可以对itb文件进行分离，示例如下:

dumpimage -l your.itb // 列出itb文件中描述内核、根文件系统、设备树等的相关信息
dumpimage -i your.itb -T flat_dt -p 0 uboot // 提取 “Image 0 (uboot)”，输出文件名为 uboot，文件名通常保持一致
```