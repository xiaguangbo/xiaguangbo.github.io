```
DDR Version V1.08 20220617
LPDDR4X, 2112MHz
channel[0] BW=16 Col=10 Bk=8 CS0 Row=16 CS=1 Die BW=16 Size=1024MB
channel[1] BW=16 Col=10 Bk=8 CS0 Row=16 CS=1 Die BW=16 Size=1024MB
channel[2] BW=16 Col=10 Bk=8 CS0 Row=16 CS=1 Die BW=16 Size=1024MB
channel[3] BW=16 Col=10 Bk=8 CS0 Row=16 CS=1 Die BW=16 Size=1024MB
Manufacturer ID:0x1 Samsung
CH0 RX Vref:32.7%, TX Vref:19.8%,0.0%
CH1 RX Vref:32.7%, TX Vref:18.8%,0.0%
CH2 RX Vref:32.7%, TX Vref:18.8%,0.0%
CH3 RX Vref:33.7%, TX Vref:18.8%,0.0%
change to F1: 528MHz
change to F2: 1068MHz
change to F3: 1560MHz
change to F0: 2112MHz
out
U-Boot SPL board init
U-Boot SPL 2017.09-gc060f28d70-220414 #zyf (Apr 18 2022 - 18:13:34)
Failed to set cpub01
Failed to set cpub23
unknown raw ID phN
unrecognized JEDEC id bytes: 00, 00, 00
Trying to boot from MMC2
Trying fit image at 0x4000 sector
## Verified-boot: 0
## Checking atf-1 0x00040000 ... sha256(ce2098067b...) + OK
## Checking uboot 0x00200000 ... sha256(b08efe298f...) + OK
## Checking fdt 0x0035b300 ... sha256(c07f4a4d71...) + OK
## Checking atf-2 0x000f0000 ... sha256(ebc45c531e...) + OK
## Checking atf-3 0xff100000 ... sha256(9ded9f3bb5...) + OK
## Checking optee 0x08400000 ... sha256(fde0860845...) + OK
Jumping to U-Boot(0x00200000) via ARM Trusted Firmware(0x00040000)
Total: 247.630 ms

INFO:    Preloader serial: 2
NOTICE:  BL31: v2.3():v2.3-444-g1450d21e8:derrick.huang
NOTICE:  BL31: Built : 16:25:50, Oct 12 2022
INFO:    spec: 0x1
INFO:    ext 32k is not valid
INFO:    ddr: stride-en 4CH
INFO:    GICv3 without legacy support detected.
INFO:    ARM GICv3 driver initialized in EL3
INFO:    valid_cpu_msk=0xff bcore0_rst = 0x0, bcore1_rst = 0x0
INFO:    system boots from cpu-hwid-0
INFO:    idle_st=0x21fff, pd_st=0x11fff9, repair_st=0xfff70001
INFO:    dfs DDR fsp_params[0].freq_mhz= 2112MHz
INFO:    dfs DDR fsp_params[1].freq_mhz= 528MHz
INFO:    dfs DDR fsp_params[2].freq_mhz= 1068MHz
INFO:    dfs DDR fsp_params[3].freq_mhz= 1560MHz
INFO:    BL31: Initialising Exception Handling Framework
INFO:    BL31: Initializing runtime services
INFO:    BL31: Initializing BL32
INFO:    hdmirx_handler: dma not on, ret
I/TC:
I/TC: OP-TEE version: 3.13.0-652-g4542e1efd #derrick.huang (gcc version 10.2.1 20201103 (GNU Toolchain for the A-profile Architecture 10.2-2020.11 (arm-10.16))) #5 2022年 09月 20日 星期二 09:41:09 CST aarch64
I/TC: Primary CPU initializing
I/TC: Primary CPU switching to normal world boot
INFO:    BL31: Preparing for EL3 exit to normal world
INFO:    Entry point address = 0x200000
INFO:    SPSR = 0x3c9


U-Boot 2017.09(u-boot commit id: e8b5ef0c39)(sdk version: rk3588_linux_release_20221012_v1.0.2a)-ge8b5ef0c39-dirty # (Dec 01 2022 - 19:08:48 +0800)

Model: Rockchip RK3588 Evaluation Board
PreSerial: 2, raw, 0xfeb50000
DRAM:  3.7 GiB
Sysmem: init
Relocation Offset: eda1c000
Relocation fdt: eb9f9fd8 - eb9fecd8
CR: M/C/I
Using default environment

no mmc device at slot 1
mmc@fe2c0000: 1 (SD), mmc@fe2e0000: 0
Bootdev(atags): mmc 1
MMC1: Legacy, 52Mhz
PartType: EFI
DM: v2
No misc partition
boot mode: None
FIT: no signed, no conf required
** Unrecognized filesystem type **
DTB: rk-kernel.dtb
HASH(c): OK
I2c0 speed: 100000Hz
vsel-gpios- not found!
en-gpios- not found!
vdd_cpu_big0_s0 800000 uV
vsel-gpios- not found!
en-gpios- not found!
vdd_cpu_big1_s0 800000 uV
I2c1 speed: 100000Hz
vsel-gpios- not found!
en-gpios- not found!
vdd_npu_s0 800000 uV
spi2: RK806: 2
ON=0x00, OFF=0x00
vdd_gpu_s0 750000 uV
vdd_cpu_lit_s0 750000 uV
vdd_log_s0 750000 uV
vdd_vdenc_s0 init 750000 uV
vdd_ddr_s0 850000 uV
I2c6 speed: 400000Hz
get vp0 plane mask:0x5, primary id:2, cursor_plane:-1, from dts
get vp1 plane mask:0xa, primary id:3, cursor_plane:-1, from dts
get vp2 plane mask:0x140, primary id:8, cursor_plane:-1, from dts
get vp3 plane mask:0x280, primary id:9, cursor_plane:-1, from dts
Could not find baseparameter partition
Model: Firefly ITX-3588J HDMI(Linux)
Rockchip UBOOT DRM driver version: v1.0.1
vp0 have layer nr:2[0 2 ], primary plane: 2
vp1 have layer nr:2[1 3 ], primary plane: 3
vp2 have layer nr:2[6 8 ], primary plane: 8
vp3 have layer nr:2[7 9 ], primary plane: 9
hdmi@fde80000 disconnected
hdmi@fdea0000 disconnected
CLK: (uboot. arm: enter 1008000 KHz, init 1008000 KHz, kernel 0N/A)
  b0pll 24000 KHz
  b1pll 24000 KHz
  lpll 24000 KHz
  v0pll 24000 KHz
  aupll 786431 KHz
  cpll 1500000 KHz
  gpll 1188000 KHz
  npll 850000 KHz
  ppll 1100000 KHz
  aclk_center_root 702000 KHz
  pclk_center_root 100000 KHz
  hclk_center_root 396000 KHz
  aclk_center_low_root 500000 KHz
  aclk_top_root 594000 KHz
  pclk_top_root 100000 KHz
  aclk_low_top_root 396000 KHz
No misc partition
Net:   eth0: ethernet@fe1b0000, eth1: ethernet@fe1c0000
Hit key to stop autoboot('CTRL+C'):  0
Could not find misc partition
ANDROID: reboot reason: "(none)"
optee api revision: 2.0
TEEC: Waring: Could not find security partition
Not AVB images, AVB skip
No valid android hdr
Android image load failed
Android boot failed, error -1.
## Booting FIT Image at 0xe6cc65c0 with size 0x04b32a00
Fdt Ramdisk skip relocation
No misc partition
## Loading kernel from FIT Image at e6cc65c0 ...
   Using 'conf' configuration
## Verified-boot: 0
   Trying 'kernel' kernel subimage
     Description:  unavailable
     Type:         Kernel Image
     Compression:  uncompressed
     Data Start:   0xe6cee7c0
     Data Size:    41753088 Bytes = 39.8 MiB
     Architecture: AArch64
     OS:           Linux
     Load Address: 0x00400000
     Entry Point:  0x00400000
     Hash algo:    sha256
     Hash value:   fd27762d4205ce9031ee0dee5b4b20cf6affb9510e1ad90bb2337d45adfbfab1
   Verifying Hash Integrity ... sha256+ OK
## Loading ramdisk from FIT Image at e6cc65c0 ...
   Using 'conf' configuration
   Trying 'ramdisk' ramdisk subimage
     Description:  unavailable
     Type:         RAMDisk Image
     Compression:  uncompressed
     Data Start:   0xe94c01c0
     Data Size:    36932945 Bytes = 35.2 MiB
     Architecture: AArch64
     OS:           Linux
     Load Address: 0x0a200000
     Entry Point:  unavailable
     Hash algo:    sha256
     Hash value:   993174280a559715c65c49c171ee705cba9c0043aa3dcea430d4bae4a474bb1e
   Verifying Hash Integrity ... sha256+ OK
   Loading ramdisk from 0xe94c01c0 to 0x0a200000
## Loading fdt from FIT Image at e6cc65c0 ...
   Using 'conf' configuration
   Trying 'fdt' fdt subimage
     Description:  unavailable
     Type:         Flat Device Tree
     Compression:  uncompressed
     Data Start:   0xe6cc6dc0
     Data Size:    162205 Bytes = 158.4 KiB
     Architecture: AArch64
     Load Address: 0x08300000
     Hash algo:    sha256
     Hash value:   764950c02ef4226fc48fa5acef115814093d67b4dab50e4dc9765b6a7f19827b
   Verifying Hash Integrity ... sha256+ OK
   Loading fdt from 0x08300000 to 0x08300000
   Booting using the fdt blob at 0x08300000
   Loading Kernel Image from 0xe6cee7c0 to 0x00400000 ... OK
   kernel loaded at 0x00400000, end = 0x02bd1a00
  'reserved-memory' cma: addr=10000000 size=10000000
  'reserved-memory' ramoops@110000: addr=110000 size=f0000
   Using Device Tree in place at 0000000008300000, end 000000000832a99c
Adding bank: 0x00200000 - 0x08400000 (size: 0x08200000)
Adding bank: 0x09400000 - 0xf0000000 (size: 0xe6c00000)
Total: 6954.391 ms

Starting kernel ...

[    7.082426] Booting Linux on physical CPU 0x0000000000 [0x412fd050]
[    7.082449] Linux version 5.10.110 (root@5e42e5e27730) (kernel commit id: 4a55b55733a0) (sdk version: rk3588_linux_release_20221012_v1.0.2a) (aarch64-none-linux-gnu-gcc (GNU Toolchain for the A-profile Architecture 10.3-2021.07 (arm-10.29)) 10.3.1 20210621, GNU ld (GNU Toolchain for the A-profile Architecture 10.3-2021.07 (arm-10.29)) 2.36.1.20210621) #1 SMP Fri Dec 2 15:50:58 CST 2022
[    7.089821] Machine model: Firefly ITX-3588J HDMI(Linux)
[    7.089903] earlycon: uart8250 at MMIO32 0x00000000feb50000 (options '')
[    7.094654] printk: bootconsole [uart8250] enabled
[    7.096840] efi: UEFI not found.
[    7.101107] OF: fdt: Reserved memory: failed to reserve memory for node 'drm-cubic-lut@00000000': base 0x0000000000000000, size 0 MiB
[    7.102249] Reserved memory: created CMA memory pool at 0x0000000010000000, size 256 MiB
[    7.102985] OF: reserved mem: initialized node cma, compatible id shared-dma-pool
[    7.165839] Zone ranges:
[    7.166080]   DMA      [mem 0x0000000000200000-0x00000000efffffff]
[    7.166649]   DMA32    empty
[    7.166915]   Normal   empty
[    7.167180] Movable zone start for each node
[    7.167569] Early memory node ranges
[    7.167897]   node   0: [mem 0x0000000000200000-0x00000000083fffff]
[    7.168470]   node   0: [mem 0x0000000009400000-0x00000000efffffff]
[    7.169043] Initmem setup node 0 [mem 0x0000000000200000-0x00000000efffffff]
[    7.191849] psci: probing for conduit method from DT.
[    7.192316] psci: PSCIv1.1 detected in firmware.
[    7.192737] psci: Using standard PSCI v0.2 function IDs
[    7.193215] psci: Trusted OS migration not required
[    7.193663] psci: SMC Calling Convention v1.2
[    7.194446] percpu: Embedded 32 pages/cpu s93160 r8192 d29720 u131072
[    7.195241] Detected VIPT I-cache on CPU0
[    7.195642] CPU features: detected: GIC system register CPU interface
[    7.196229] CPU features: detected: Virtualization Host Extensions
[    7.196797] CPU features: detected: ARM errata 1165522, 1319367, or 1530923
[    7.197439] alternatives: patching kernel code
[    7.199907] Built 1 zonelists, mobility grouping on.  Total pages: 963080
[    7.200531] Kernel command line: storagemedia=sd androidboot.storagemedia=sd androidboot.mode=normal  storagenode=/mmc@fe2c0000 androidboot.verifiedbootstate=orange ro rootwait earlycon=uart8250,mmio32,0xfeb50000 console=ttyFIQ0 irqchip.gicv3_pseudo_nmi=0 root=PARTLABEL=rootfs rootfstype=ext4 overlayroot=device:dev=PARTLABEL=userdata,fstype=ext4,mkfs=1 coherent_pool=1m systemd.gpt_auto=0 cgroup_enable=memory swapaccount=1
[    7.204595] Dentry cache hash table entries: 524288 (order: 10, 4194304 bytes, linear)
[    7.205516] Inode-cache hash table entries: 262144 (order: 9, 2097152 bytes, linear)
[    7.206222] mem auto-init: stack:off, heap alloc:off, heap free:off
[    7.237580] Memory: 3495532K/3913728K available (22336K kernel code, 3782K rwdata, 6888K rodata, 7616K init, 656K bss, 156052K reserved, 262144K cma-reserved)
[    7.238983] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=8, Nodes=1
[    7.239605] ftrace: allocating 67395 entries in 264 pages
[    7.335971] ftrace: allocated 264 pages with 2 groups
[    7.336690] rcu: Hierarchical RCU implementation.
[    7.337122] rcu:     RCU event tracing is enabled.
[    7.337537]  Rude variant of Tasks RCU enabled.
[    7.337950]  Tracing variant of Tasks RCU enabled.
[    7.338388] rcu: RCU calculated value of scheduler-enlistment delay is 30 jiffies.
[    7.343981] NR_IRQS: 64, nr_irqs: 64, preallocated irqs: 0
[    7.346379] GICv3: GIC: Using split EOI/Deactivate mode
[    7.346859] GICv3: 480 SPIs implemented
[    7.347209] GICv3: 0 Extended SPIs implemented
[    7.347636] GICv3: Distributor has no Range Selector support
[    7.348157] GICv3: 16 PPIs implemented
[    7.348541] GICv3: CPU0: found redistributor 0 region 0:0x00000000fe680000
[    7.349268] ITS [mem 0xfe640000-0xfe65ffff]
[    7.349693] ITS@0x00000000fe640000: allocated 8192 Devices @3220000 (indirect, esz 8, psz 64K, shr 0)
[    7.350549] ITS@0x00000000fe640000: allocated 32768 Interrupt Collections @3230000 (flat, esz 2, psz 64K, shr 0)
[    7.351477] ITS: using cache flushing for cmd queue
[    7.351948] ITS [mem 0xfe660000-0xfe67ffff]
[    7.352371] ITS@0x00000000fe660000: allocated 8192 Devices @3250000 (indirect, esz 8, psz 64K, shr 0)
[    7.353227] ITS@0x00000000fe660000: allocated 32768 Interrupt Collections @3260000 (flat, esz 2, psz 64K, shr 0)
[    7.354154] ITS: using cache flushing for cmd queue
[    7.354721] GICv3: using LPI property table @0x0000000003270000
[    7.355367] GIC: using cache flushing for LPI property table
[    7.355887] GICv3: CPU0: using allocated LPI pending table @0x0000000003280000
[    7.356689] random: get_random_bytes called from start_kernel+0x3f0/0x65c with crng_init=0
[    7.464139] arch_timer: cp15 timer(s) running at 24.00MHz (phys).
[    7.465458] clocksource: arch_sys_counter: mask: 0xffffffffffffff max_cycles: 0x588fe9dc0, max_idle_ns: 440795202592 ns
[    7.466451] sched_clock: 56 bits at 24MHz, resolution 41ns, wraps every 4398046511097ns
[    7.468076] Console: colour dummy device 80x25
[    7.468507] Calibrating delay loop (skipped), value calculated using timer frequency.. 48.00 BogoMIPS (lpj=80000)
[    7.469453] pid_max: default: 32768 minimum: 301
[    7.469962] LSM: Security Framework initializing
[    7.470441] Mount-cache hash table entries: 8192 (order: 4, 65536 bytes, linear)
[    7.471129] Mountpoint-cache hash table entries: 8192 (order: 4, 65536 bytes, linear)
[    7.473322] rcu: Hierarchical SRCU implementation.
[    7.474522] Platform MSI: msi-controller@fe640000 domain created
[    7.475087] Platform MSI: msi-controller@fe660000 domain created
[    7.475898] PCI/MSI: /interrupt-controller@fe600000/msi-controller@fe640000 domain created
[    7.476670] PCI/MSI: /interrupt-controller@fe600000/msi-controller@fe660000 domain created
[    7.477525] EFI services will not be available.
[    7.478206] smp: Bringing up secondary CPUs ...
I/TC: Secondary CPU 1 initializing
I/TC: Secondary CPU 1 switching to normal world boot
I/TC: Secondary CPU 2 initializing
I/TC: Secondary CPU 2 switching to normal world boot
I/TC: Secondary CPU 3 initializing
I/TC: Secondary CPU 3 switching to normal world boot
I/TC: Secondary CPU 4 initializing
I/TC: Secondary CPU 4 switching to normal world boot
I/TC: Secondary CPU 5 initializing
I/TC: Secondary CPU 5 switching to normal world boot
I/TC: Secondary CPU 6 initializing
I/TC: Secondary CPU 6 switching to normal world boot
I/TC: Secondary CPU 7 initializing
I/TC: Secondary CPU 7 switching to normal world boot
[    7.479756] Detected VIPT I-cache on CPU1
[    7.479784] GICv3: CPU1: found redistributor 100 region 0:0x00000000fe6a0000
[    7.479799] GICv3: CPU1: using allocated LPI pending table @0x0000000003290000
[    7.479841] CPU1: Booted secondary processor 0x0000000100 [0x412fd050]
[    7.481018] Detected VIPT I-cache on CPU2
[    7.481039] GICv3: CPU2: found redistributor 200 region 0:0x00000000fe6c0000
[    7.481052] GICv3: CPU2: using allocated LPI pending table @0x00000000032a0000
[    7.481089] CPU2: Booted secondary processor 0x0000000200 [0x412fd050]
[    7.482241] Detected VIPT I-cache on CPU3
[    7.482259] GICv3: CPU3: found redistributor 300 region 0:0x00000000fe6e0000
[    7.482272] GICv3: CPU3: using allocated LPI pending table @0x00000000032b0000
[    7.482306] CPU3: Booted secondary processor 0x0000000300 [0x412fd050]
[    7.483462] CPU features: detected: Spectre-v4
[    7.483464] CPU features: detected: Spectre-BHB
[    7.483466] Detected PIPT I-cache on CPU4
[    7.483477] GICv3: CPU4: found redistributor 400 region 0:0x00000000fe700000
[    7.483485] GICv3: CPU4: using allocated LPI pending table @0x00000000032c0000
[    7.483508] CPU4: Booted secondary processor 0x0000000400 [0x414fd0b0]
[    7.484619] Detected PIPT I-cache on CPU5
[    7.484631] GICv3: CPU5: found redistributor 500 region 0:0x00000000fe720000
[    7.484639] GICv3: CPU5: using allocated LPI pending table @0x00000000032d0000
[    7.484661] CPU5: Booted secondary processor 0x0000000500 [0x414fd0b0]
[    7.485782] Detected PIPT I-cache on CPU6
[    7.485794] GICv3: CPU6: found redistributor 600 region 0:0x00000000fe740000
[    7.485802] GICv3: CPU6: using allocated LPI pending table @0x00000000032e0000
[    7.485824] CPU6: Booted secondary processor 0x0000000600 [0x414fd0b0]
[    7.486934] Detected PIPT I-cache on CPU7
[    7.486945] GICv3: CPU7: found redistributor 700 region 0:0x00000000fe760000
[    7.486953] GICv3: CPU7: using allocated LPI pending table @0x00000000032f0000
[    7.486975] CPU7: Booted secondary processor 0x0000000700 [0x414fd0b0]
[    7.487029] smp: Brought up 1 node, 8 CPUs
[    7.504107] SMP: Total of 8 processors activated.
[    7.504546] CPU features: detected: Privileged Access Never
[    7.505057] CPU features: detected: User Access Override
[    7.505546] CPU features: detected: 32-bit EL0 Support
[    7.506018] CPU features: detected: Common not Private translations
[    7.506592] CPU features: detected: RAS Extension Support
[    7.507088] CPU features: detected: Data cache clean to the PoU not required for I/D coherence
[    7.507882] CPU features: detected: CRC32 instructions
[    7.508354] CPU features: detected: Speculative Store Bypassing Safe (SSBS)
[    7.508994] CPU features: detected: RCpc load-acquire (LDAPR)
[    7.509594] CPU: All CPU(s) started at EL2
[    7.510886] devtmpfs: initialized
[    7.518974] Registered cp15_barrier emulation handler
[    7.519441] Registered setend emulation handler
[    7.519918] clocksource: jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 6370867519511994 ns
[    7.520816] futex hash table entries: 2048 (order: 5, 131072 bytes, linear)
[    7.521555] pinctrl core: initialized pinctrl subsystem
[    7.522233] DMI not present or invalid.
[    7.522683] NET: Registered protocol family 16
[    7.523566] DMA: preallocated 1024 KiB GFP_KERNEL pool for atomic allocations
[    7.524285] DMA: preallocated 1024 KiB GFP_KERNEL|GFP_DMA pool for atomic allocations
[    7.525011] audit: initializing netlink subsys (disabled)
[    7.525557] audit: type=2000 audit(0.056:1): state=initialized audit_enabled=0 res=1
[    7.525966] thermal_sys: Registered thermal governor 'fair_share'
[    7.526266] thermal_sys: Registered thermal governor 'step_wise'
[    7.526823] thermal_sys: Registered thermal governor 'user_space'
[    7.527372] thermal_sys: Registered thermal governor 'power_allocator'
[    7.528040] thermal thermal_zone1: power_allocator: sustainable_power will be estimated
[    7.529387] thermal thermal_zone2: power_allocator: sustainable_power will be estimated
[    7.530137] thermal thermal_zone3: power_allocator: sustainable_power will be estimated
[    7.530887] thermal thermal_zone4: power_allocator: sustainable_power will be estimated
[    7.531644] thermal thermal_zone5: power_allocator: sustainable_power will be estimated
[    7.532395] thermal thermal_zone6: power_allocator: sustainable_power will be estimated
[    7.533138] cpuidle: using governor menu
[    7.533500] Registered FIQ tty driver
[    7.533931] hw-breakpoint: found 6 breakpoint and 4 watchpoint registers.
[    7.534638] ASID allocator initialised with 65536 entries
[    7.536090] ramoops: dmesg-0 0x20000@0x0000000000110000
[    7.536577] ramoops: console 0x80000@0x0000000000130000
[    7.537068] ramoops: pmsg    0x50000@0x00000000001b0000
[    7.537740] printk: console [ramoops-1] enabled
[    7.538154] pstore: Registered ramoops as persistent store backend
[    7.538720] ramoops: using 0xf0000@0x110000, ecc: 0
[    7.570412] rockchip-gpio fd8a0000.gpio: probed /pinctrl/gpio@fd8a0000
[    7.571190] rockchip-gpio fec20000.gpio: probed /pinctrl/gpio@fec20000
[    7.571937] rockchip-gpio fec30000.gpio: probed /pinctrl/gpio@fec30000
[    7.572712] rockchip-gpio fec40000.gpio: probed /pinctrl/gpio@fec40000
[    7.573482] rockchip-gpio fec50000.gpio: probed /pinctrl/gpio@fec50000
[    7.574099] rockchip-pinctrl pinctrl: probed pinctrl
[    7.582642] HugeTLB registered 1.00 GiB page size, pre-allocated 0 pages
[    7.583258] HugeTLB registered 32.0 MiB page size, pre-allocated 0 pages
[    7.583871] HugeTLB registered 2.00 MiB page size, pre-allocated 0 pages
[    7.584484] HugeTLB registered 64.0 KiB page size, pre-allocated 0 pages
[    7.644729] raid6: neonx8   gen()  5751 MB/s
[    7.701458] raid6: neonx8   xor()  4536 MB/s
[    7.758189] raid6: neonx4   gen()  5652 MB/s
[    7.814917] raid6: neonx4   xor()  4828 MB/s
[    7.871650] raid6: neonx2   gen()  5414 MB/s
[    7.928377] raid6: neonx2   xor()  4285 MB/s
[    7.985110] raid6: neonx1   gen()  4474 MB/s
[    8.041839] raid6: neonx1   xor()  3714 MB/s
[    8.098573] raid6: int64x8  gen()  2694 MB/s
[    8.155305] raid6: int64x8  xor()  1596 MB/s
[    8.212036] raid6: int64x4  gen()  3014 MB/s
[    8.268767] raid6: int64x4  xor()  1604 MB/s
[    8.325496] raid6: int64x2  gen()  2574 MB/s
[    8.382224] raid6: int64x2  xor()  1388 MB/s
[    8.438954] raid6: int64x1  gen()  2109 MB/s
[    8.495698] raid6: int64x1  xor()  1108 MB/s
[    8.496090] raid6: using algorithm neonx8 gen() 5751 MB/s
[    8.496584] raid6: .... xor() 4536 MB/s, rmw enabled
[    8.497039] raid6: using neon recovery algorithm
[    8.497942] fiq_debugger fiq_debugger.0: IRQ fiq not found
[    8.498446] fiq_debugger fiq_debugger.0: IRQ wakeup not found
[    8.498973] fiq_debugger_probe: could not install nmi irq handler
[[    8.499571] printk: console [ttyFIQ0] enabled
    8.499571] printk: console [ttyFIQ0] enabled
[    8.500347] printk: bootconsole [uart8250] disabled
[    8.500347] printk: bootconsole [uart8250] disabled
[    8.500863] Registered fiq debugger ttyFIQ0
[    8.501124] vcc5v0_sys: supplied by vcc12v_dcin
[    8.501213] vcc5v0_usbdcin: supplied by vcc12v_dcin
[    8.501296] vcc5v0_usb: supplied by vcc12v_dcin
[    8.501373] vcc_1v1_nldo_s3: supplied by vcc5v0_sys
[    8.501511] vcc3v3_pcie30: supplied by vcc12v_dcin
[    8.501757] iommu: Default domain type: Passthrough
[    8.501815] rk_iommu fdab9000.iommu: version = 2
[    8.502107] rk_iommu fdb50800.iommu: version = 2
[    8.502302] rk_iommu fdb60f00.iommu: version = 2
[    8.502441] rk_iommu fdb70f00.iommu: version = 2
[    8.502572] rk_iommu fdb90480.iommu: version = 2
[    8.502726] rk_iommu fdba0800.iommu: version = 2
[    8.502882] rk_iommu fdba4800.iommu: version = 2
[    8.503036] rk_iommu fdba8800.iommu: version = 2
[    8.503184] rk_iommu fdbac800.iommu: version = 2
[    8.503334] rk_iommu fdbb0800.iommu: version = 2
[    8.503483] rk_iommu fdbdf000.iommu: version = 2
[    8.503691] rk_iommu fdbef000.iommu: version = 2
[    8.503920] rk_iommu fdc38700.iommu: version = 2
[    8.504153] rk_iommu fdc48700.iommu: version = 2
[    8.504321] rk_iommu fdce0800.iommu: version = 2
[    8.504408] rk_iommu fdd97e00.iommu: version = 2
[    8.504643] usbcore: registered new interface driver usbfs
[    8.504656] usbcore: registered new interface driver hub
[    8.504668] usbcore: registered new device driver usb
[    8.504694] mc: Linux media interface: v0.10
[    8.504703] videodev: Linux video capture interface: v2.00
[    8.504723] pps_core: LinuxPPS API ver. 1 registered
[    8.504726] pps_core: Software ver. 5.3.6 - Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>
[    8.504731] PTP clock support registered
[    8.504932] arm-scmi firmware:scmi: SCMI Notifications - Core Enabled.
[    8.504960] arm-scmi firmware:scmi: SCMI Protocol v2.0 'rockchip:' Firmware version 0x0
[    8.505819] Advanced Linux Sound Architecture Driver Initialized.
[    8.505978] Bluetooth: Core ver 2.22
[    8.505988] NET: Registered protocol family 31
[    8.505991] Bluetooth: HCI device and connection manager initialized
[    8.505995] Bluetooth: HCI socket layer initialized
[    8.505999] Bluetooth: L2CAP socket layer initialized
[    8.506006] Bluetooth: SCO socket layer initialized
[    8.507261] rockchip-cpuinfo cpuinfo: SoC            : 35880000
[    8.507266] rockchip-cpuinfo cpuinfo: Serial         : 15111290a17b9816
[    8.507514] clocksource: Switched to clocksource arch_sys_counter
[    8.763346] NET: Registered protocol family 2
[    8.763423] IP idents hash table entries: 65536 (order: 7, 524288 bytes, linear)
[    8.764445] tcp_listen_portaddr_hash hash table entries: 2048 (order: 4, 81920 bytes, linear)
[    8.764498] TCP established hash table entries: 32768 (order: 6, 262144 bytes, linear)
[    8.764663] TCP bind hash table entries: 32768 (order: 8, 1048576 bytes, linear)
[    8.765037] TCP: Hash tables configured (established 32768 bind 32768)
[    8.765077] UDP hash table entries: 2048 (order: 5, 196608 bytes, linear)
[    8.765154] UDP-Lite hash table entries: 2048 (order: 5, 196608 bytes, linear)
[    8.765269] NET: Registered protocol family 1
[    8.765502] RPC: Registered named UNIX socket transport module.
[    8.765505] RPC: Registered udp transport module.
[    8.765508] RPC: Registered tcp transport module.
[    8.765511] RPC: Registered tcp NFSv4.1 backchannel transport module.
[    8.765841] PCI: CLS 0 bytes, default 64
[    8.766081] Trying to unpack rootfs image as initramfs...
[    9.306841] Freeing initrd memory: 36064K
[    9.307389] hw perfevents: enabled with armv8_pmuv3 PMU driver, 7 counters available
[    9.307872] kvm [1]: IPA Size Limit: 40 bits
[    9.307883] kvm [1]: GICv3: no GICV resource entry
[    9.307886] kvm [1]: disabling GICv2 emulation
[    9.307890] kvm [1]: GIC system register CPU interface enabled
[    9.307990] kvm [1]: vgic interrupt IRQ9
[    9.308113] kvm [1]: VHE mode initialized successfully
[    9.310448] Initialise system trusted keyrings
[    9.310525] workingset: timestamp_bits=46 max_order=20 bucket_order=0
[    9.312369] squashfs: version 4.0 (2009/01/31) Phillip Lougher
[    9.312607] NFS: Registering the id_resolver key type
[    9.312618] Key type id_resolver registered
[    9.312621] Key type id_legacy registered
[    9.312626] Installing knfsd (copyright (C) 1996 okir@monad.swb.de).
[    9.313168] Key type cifs.spnego registered
[    9.313174] Key type cifs.idmap registered
[    9.313179] ntfs: driver 2.1.32 [Flags: R/O].
[    9.313228] jffs2: version 2.2. (NAND) © 2001-2006 Red Hat, Inc.
[    9.313304] fuse: init (API version 7.32)
[    9.313439] SGI XFS with security attributes, no debug enabled
[    9.333616] NET: Registered protocol family 38
[    9.333623] xor: measuring software checksum speed
[    9.335003]    8regs           :  7169 MB/sec
[    9.336149]    32regs          :  8622 MB/sec
[    9.337005]    arm64_neon      : 11558 MB/sec
[    9.337009] xor: using function: arm64_neon (11558 MB/sec)
[    9.337015] Key type asymmetric registered
[    9.337019] Asymmetric key parser 'x509' registered
[    9.337032] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 242)
[    9.337106] io scheduler mq-deadline registered
[    9.337111] io scheduler kyber registered
[    9.337547] rockchip-csi2-dphy-hw fedc0000.csi2-dphy0-hw: csi2 dphy hw probe successfully!
[    9.337764] rockchip-csi2-dphy csi2-dphy0: csi2 dphy0 probe successfully!
[    9.339627] rockchip-usb2phy fd5d8000.syscon:usb2-phy@8000: failed to create phy
[    9.339979] rockchip-usb2phy fd5dc000.syscon:usb2-phy@c000: failed to create phy
[    9.340445] rockchip-usb2phy fd5d4000.syscon:usb2-phy@4000: failed to create phy
[    9.342242] rockchip-hdptx-phy-hdmi fed60000.hdmiphy: hdptx phy init success
[    9.342821] rockchip-hdptx-phy-hdmi fed70000.hdmiphy: hdptx phy init success
[    9.343809] Firefly gpio driver init!
[    9.343892] Firefly gpio driver register return : 0
[    9.344817] rk-pcie fe150000.pcie: invalid prsnt-gpios property in node
[    9.344953] rk-pcie fe170000.pcie: invalid prsnt-gpios property in node
[    9.344976] rk-pcie fe170000.pcie: no vpcie3v3 regulator found
[    9.345104] iep: Module initialized.
[    9.345131] mpp_service mpp-srv: 75e32fd43421 author: daijh 2022-11-02 Merge branch 'rk3588/rockchip' into rk3588/firefly
[    9.345134] mpp_service mpp-srv: probe start
[    9.345216] rk-pcie fe170000.pcie: missing legacy IRQ resource
[    9.345235] rk-pcie fe170000.pcie: IRQ msi not found
[    9.345243] rk-pcie fe170000.pcie: use outband MSI support
[    9.345252] rk-pcie fe170000.pcie: Missing *config* reg space
[    9.345266] rk-pcie fe170000.pcie: host bridge /pcie@fe170000 ranges:
[    9.345290] rk-pcie fe170000.pcie:      err 0x00f2000000..0x00f20fffff -> 0x00f2000000
[    9.345307] rk-pcie fe170000.pcie:       IO 0x00f2100000..0x00f21fffff -> 0x00f2100000
[    9.345325] rk-pcie fe170000.pcie:      MEM 0x00f2200000..0x00f2ffffff -> 0x00f2200000
[    9.345338] rk-pcie fe170000.pcie:      MEM 0x0980000000..0x09bfffffff -> 0x0980000000
[    9.345371] rk-pcie fe170000.pcie: Missing *config* reg space
[    9.345401] rk-pcie fe170000.pcie: invalid resource
[    9.346438] mpp_vdpu2 fdb50400.vdpu: Adding to iommu group 1
[    9.346450] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[    9.346621] mpp_vdpu2 fdb50400.vdpu: probe device
[    9.346710] mpp_vdpu2 fdb50400.vdpu: reset_group->rw_sem_on=0
[    9.346716] mpp_vdpu2 fdb50400.vdpu: reset_group->rw_sem_on=0
[    9.346812] mpp_vdpu2 fdb50400.vdpu: probing finish
[    9.346979] mpp_vepu2 jpege-ccu: probing start
[    9.346983] mpp_vepu2 jpege-ccu: probing finish
[    9.347073] mpp_vepu2 fdba0000.jpege-core: Adding to iommu group 5
[    9.347083] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[    9.347204] mpp_vepu2 fdba0000.jpege-core: probing start
[    9.347288] mpp_vepu2 fdba0000.jpege-core: attach ccu success
[    9.347368] mpp_vepu2 fdba0000.jpege-core: probing finish
[    9.347449] mpp_vepu2 fdba4000.jpege-core: Adding to iommu group 6
[    9.347458] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[    9.347583] mpp_vepu2 fdba4000.jpege-core: probing start
[    9.347661] mpp_vepu2 fdba4000.jpege-core: attach ccu success
[    9.347739] mpp_vepu2 fdba4000.jpege-core: probing finish
[    9.347811] mpp_vepu2 fdba8000.jpege-core: Adding to iommu group 7
[    9.347820] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[    9.347954] mpp_vepu2 fdba8000.jpege-core: probing start
[    9.348028] mpp_vepu2 fdba8000.jpege-core: attach ccu success
[    9.348126] mpp_vepu2 fdba8000.jpege-core: probing finish
[    9.348208] mpp_vepu2 fdbac000.jpege-core: Adding to iommu group 8
[    9.348218] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[    9.348333] mpp_vepu2 fdbac000.jpege-core: probing start
[    9.348412] mpp_vepu2 fdbac000.jpege-core: attach ccu success
[    9.348495] mpp_vepu2 fdbac000.jpege-core: probing finish
[    9.348722] mpp-iep2 fdbb0000.iep: Adding to iommu group 9
[    9.348730] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[    9.348845] mpp-iep2 fdbb0000.iep: probe device
[    9.348941] mpp-iep2 fdbb0000.iep: allocate roi buffer failed
[    9.349023] mpp-iep2 fdbb0000.iep: probing finish
[    9.349199] mpp_jpgdec fdb90000.jpegd: Adding to iommu group 4
[    9.349209] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[    9.349381] mpp_jpgdec fdb90000.jpegd: probe device
[    9.349550] mpp_jpgdec fdb90000.jpegd: probing finish
[    9.349834] mpp_rkvdec2 fdc30000.rkvdec-ccu: rkvdec-ccu, probing start
[    9.349876] mpp_rkvdec2 fdc30000.rkvdec-ccu: probing finish
[    9.349933] mpp_rkvdec2 fdc38100.rkvdec-core: Adding to iommu group 12
[    9.349942] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[    9.350147] mpp_rkvdec2 fdc38100.rkvdec-core: rkvdec-core, probing start
[    9.350248] mpp_rkvdec2 fdc38100.rkvdec-core: shared_niu_a is not found!
[    9.350252] rkvdec2_init:1008: No niu aclk reset resource define
[    9.350256] mpp_rkvdec2 fdc38100.rkvdec-core: shared_niu_h is not found!
[    9.350260] rkvdec2_init:1011: No niu hclk reset resource define
[    9.350273] mpp_rkvdec2 fdc38100.rkvdec-core: no regulator, devfreq is disabled
[    9.350320] mpp_rkvdec2 fdc38100.rkvdec-core: core_mask=00010001
[    9.350323] mpp_rkvdec2 fdc38100.rkvdec-core: attach ccu as core 0
[    9.350448] mpp_rkvdec2 fdc38100.rkvdec-core: sram_start 0x00000000ff001000
[    9.350452] mpp_rkvdec2 fdc38100.rkvdec-core: rcb_iova 0x00000000fff00000
[    9.350455] mpp_rkvdec2 fdc38100.rkvdec-core: sram_size 491520
[    9.350458] mpp_rkvdec2 fdc38100.rkvdec-core: rcb_size 1048576
[    9.350462] mpp_rkvdec2 fdc38100.rkvdec-core: min_width 512
[    9.350487] mpp_rkvdec2 fdc38100.rkvdec-core: probing finish
[    9.350539] mpp_rkvdec2 fdc48100.rkvdec-core: Adding to iommu group 13
[    9.350548] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[    9.350731] mpp_rkvdec2 fdc48100.rkvdec-core: rkvdec-core, probing start
[    9.350815] mpp_rkvdec2 fdc48100.rkvdec-core: shared_niu_a is not found!
[    9.350819] rkvdec2_init:1008: No niu aclk reset resource define
[    9.350823] mpp_rkvdec2 fdc48100.rkvdec-core: shared_niu_h is not found!
[    9.350826] rkvdec2_init:1011: No niu hclk reset resource define
[    9.350848] mpp_rkvdec2 fdc48100.rkvdec-core: no regulator, devfreq is disabled
[    9.350882] mpp_rkvdec2 fdc48100.rkvdec-core: core_mask=00020002
[    9.350898] mpp_rkvdec2 fdc48100.rkvdec-core: attach ccu as core 1
[    9.351051] mpp_rkvdec2 fdc48100.rkvdec-core: sram_start 0x00000000ff079000
[    9.351055] mpp_rkvdec2 fdc48100.rkvdec-core: rcb_iova 0x00000000ffe00000
[    9.351058] mpp_rkvdec2 fdc48100.rkvdec-core: sram_size 487424
[    9.351061] mpp_rkvdec2 fdc48100.rkvdec-core: rcb_size 1048576
[    9.351065] mpp_rkvdec2 fdc48100.rkvdec-core: min_width 512
[    9.351088] mpp_rkvdec2 fdc48100.rkvdec-core: probing finish
[    9.351232] mpp_rkvenc2 rkvenc-ccu: probing start
[    9.351236] mpp_rkvenc2 rkvenc-ccu: probing finish
[    9.351325] mpp_rkvenc2 fdbd0000.rkvenc-core: Adding to iommu group 10
[    9.351333] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[    9.351480] mpp_rkvenc2 fdbd0000.rkvenc-core: probing start
[    9.351494] mpp_rkvenc2 fdbd0000.rkvenc-core: link mode task capacity 8
[    9.351606] mpp_rkvenc2 fdbd0000.rkvenc-core: attach ccu as core 0
[    9.351694] mpp_rkvenc2 fdbd0000.rkvenc-core: probing finish
[    9.351745] mpp_rkvenc2 fdbe0000.rkvenc-core: Adding to iommu group 11
[    9.351755] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[    9.351949] mpp_rkvenc2 fdbe0000.rkvenc-core: probing start
[    9.351964] mpp_rkvenc2 fdbe0000.rkvenc-core: link mode task capacity 8
[    9.352093] mpp_rkvenc2 fdbe0000.rkvenc-core: attach ccu as core 1
[    9.352182] mpp_rkvenc2 fdbe0000.rkvenc-core: probing finish
[    9.352595] mpp_av1dec: Adding child /av1d@fdc70000
[    9.352650] mpp_av1dec: register device av1d-master
[    9.352671] mpp_av1dec av1d-master: av1_iommu_of_xlate,784
[    9.352687] av1_iommu_probe_device,736, consumer : av1d-master, supplier : fdca0000.iommu
[    9.352712] mpp_av1dec av1d-master: Adding to iommu group 16
[    9.352721] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[    9.352903] mpp_av1dec av1d-master: probing start
[    9.353083] mpp_av1dec av1d-master: probing finish
[    9.353109] mpp_service mpp-srv: probe success
[    9.358869] dma-pl330 fea10000.dma-controller: Loaded driver for PL330 DMAC-241330
[    9.358876] dma-pl330 fea10000.dma-controller:       DBUFF-128x8bytes Num_Chans-8 Num_Peri-32 Num_Events-16
[    9.359552] dma-pl330 fea30000.dma-controller: Loaded driver for PL330 DMAC-241330
[    9.359558] dma-pl330 fea30000.dma-controller:       DBUFF-128x8bytes Num_Chans-8 Num_Peri-32 Num_Events-16
[    9.360211] dma-pl330 fed10000.dma-controller: Loaded driver for PL330 DMAC-241330
[    9.360216] dma-pl330 fed10000.dma-controller:       DBUFF-128x8bytes Num_Chans-8 Num_Peri-32 Num_Events-16
[    9.360510] rockchip-pvtm fda40000.pvtm: pvtm@0 probed
[    9.360554] rockchip-pvtm fda50000.pvtm: pvtm@1 probed
[    9.360594] rockchip-pvtm fda60000.pvtm: pvtm@2 probed
[    9.360633] rockchip-pvtm fdaf0000.pvtm: pvtm@3 probed
[    9.360671] rockchip-pvtm fdb30000.pvtm: pvtm@4 probed
[    9.361113] rockchip-system-monitor rockchip-system-monitor: system monitor probe
[    9.361302] rk-pcie fe150000.pcie: missing legacy IRQ resource
[    9.361329] rk-pcie fe150000.pcie: IRQ msi not found
[    9.361339] rk-pcie fe150000.pcie: use outband MSI support
[    9.361349] rk-pcie fe150000.pcie: Missing *config* reg space
[    9.361373] rk-pcie fe150000.pcie: host bridge /pcie@fe150000 ranges:
[    9.361408] rk-pcie fe150000.pcie:      err 0x00f0000000..0x00f00fffff -> 0x00f0000000
[    9.361438] rk-pcie fe150000.pcie:       IO 0x00f0100000..0x00f01fffff -> 0x00f0100000
[    9.361470] rk-pcie fe150000.pcie:      MEM 0x00f0200000..0x00f0ffffff -> 0x00f0200000
[    9.361491] rk-pcie fe150000.pcie:      MEM 0x0900000000..0x093fffffff -> 0x0900000000
[    9.361529] rk-pcie fe150000.pcie: Missing *config* reg space
[    9.361565] rk-pcie fe150000.pcie: invalid resource
[    9.362118] Serial: 8250/16550 driver, 10 ports, IRQ sharing disabled
[    9.362406] fd890000.serial: ttyS0 at MMIO 0xfd890000 (irq = 28, base_baud = 1500000) is a 16550A
[    9.362686] feb40000.serial: ttyS1 at MMIO 0xfeb40000 (irq = 93, base_baud = 1500000) is a 16550A
[    9.362873] feb90000.serial: ttyS6 at MMIO 0xfeb90000 (irq = 94, base_baud = 1500000) is a 16550A
[    9.363873] random: fast init done
[    9.363959] random: crng init done
[    9.364542] rockchip-vop2 fdd90000.vop: Adding to iommu group 15
[    9.364555] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[    9.375259] brd: module loaded
[    9.377972] loop: module loaded
[    9.378154] zram: Added device: zram0
[    9.378272] lkdtm: No crash points registered, enable through debugfs
[    9.380062] rockchip-spi feb20000.spi: no high_speed pinctrl state
[    9.381000] rk806 spi2.0: chip id: RK806,ver:0x2, 0x0
[    9.381223] rk806 spi2.0: ON: 0x40 OFF:0x0
[    9.382621] vdd_gpu_s0: supplied by vcc5v0_sys
[    9.383602] vdd_cpu_lit_s0: supplied by vcc5v0_sys
[    9.384115] vdd_log_s0: supplied by vcc5v0_sys
[    9.384624] vdd_vdenc_s0: supplied by vcc5v0_sys
[    9.385183] vdd_ddr_s0: supplied by vcc5v0_sys
[    9.385513] vdd2_ddr_s3: supplied by vcc5v0_sys
[    9.386020] vdd_2v0_pldo_s3: supplied by vcc5v0_sys
[    9.386479] vcc_3v3_s3: supplied by vcc5v0_sys
[    9.386918] vddq_ddr_s0: supplied by vcc5v0_sys
[    9.387431] vcc_1v8_s3: supplied by vcc5v0_sys
[    9.387896] vdd_0v75_s3: supplied by vcc_1v1_nldo_s3
[    9.388406] vdd_ddr_pll_s0: supplied by vcc_1v1_nldo_s3
[    9.388854] avdd_0v75_s0: supplied by vcc_1v1_nldo_s3
[    9.389302] vdd_0v85_s0: supplied by vcc_1v1_nldo_s3
[    9.389743] vdd_0v75_s0: supplied by vcc_1v1_nldo_s3
[    9.390226] avcc_1v8_s0: supplied by vdd_2v0_pldo_s3
[    9.390744] vcc_1v8_s0: supplied by vdd_2v0_pldo_s3
[    9.391259] avdd_1v2_s0: supplied by vdd_2v0_pldo_s3
[    9.391769] vcc_3v3_s0: supplied by vcc5v0_sys
[    9.392210] vccio_sd_s0: supplied by vcc5v0_sys
[    9.392666] pldo6_s3: supplied by vcc5v0_sys
[    9.393046] rk806 spi2.0: no sleep-setting state
[    9.393051] rk806 spi2.0: no reset-setting pinctrl state
[    9.393055] rk806 spi2.0: no dvs-setting pinctrl state
[    9.395122] register firefly_spi_init spi return v = :0
[    9.395380] wireguard: allowedips self-tests: pass
[    9.399662] wireguard: nonce counter self-tests: pass
[    9.551997] rk-pcie fe170000.pcie: PCIe Linking... LTSSM is 0x3
[    9.577539] rk-pcie fe170000.pcie: PCIe Linking... LTSSM is 0x3
[    9.604203] rk-pcie fe170000.pcie: PCIe Linking... LTSSM is 0x3
[    9.624205] rk-pcie fe150000.pcie: PCIe Link up, LTSSM is 0x130011
[    9.624367] rk-pcie fe150000.pcie: PCI host bridge to bus 0000:00
[    9.624383] pci_bus 0000:00: root bus resource [bus 00-0f]
[    9.624396] pci_bus 0000:00: root bus resource [??? 0xf0000000-0xf00fffff flags 0x0]
[    9.624410] pci_bus 0000:00: root bus resource [io  0x100000-0x1fffff] (bus address [0xf0100000-0xf01fffff])
[    9.624421] pci_bus 0000:00: root bus resource [mem 0xf0200000-0xf0ffffff]
[    9.624432] pci_bus 0000:00: root bus resource [mem 0x900000000-0x93fffffff pref]
[    9.624476] pci 0000:00:00.0: [1d87:3588] type 01 class 0x060400
[    9.624498] pci 0000:00:00.0: reg 0x10: [mem 0x00000000-0x3fffffff]
[    9.624513] pci 0000:00:00.0: reg 0x14: [mem 0x00000000-0x3fffffff]
[    9.624528] pci 0000:00:00.0: reg 0x38: [mem 0x00000000-0x0000ffff pref]
[    9.624602] pci 0000:00:00.0: supports D1 D2
[    9.624612] pci 0000:00:00.0: PME# supported from D0 D1 D3hot
[    9.630871] rk-pcie fe170000.pcie: PCIe Linking... LTSSM is 0x3
[    9.633356] pci_bus 0000:01: busn_res: can not insert [bus 01-ff] under [bus 00-0f] (conflicts with (null) [bus 00-0f])
[    9.633460] pci 0000:01:00.0: [10ee:7024] type 00 class 0x058000
[    9.633526] pci 0000:01:00.0: reg 0x10: [mem 0x00000000-0x000003ff]
[    9.633876] pci 0000:01:00.0: PME# supported from D0 D1 D2 D3hot
[    9.642500] pci 0000:00:00.0: BAR 0: no space for [mem size 0x40000000]
[    9.642523] pci 0000:00:00.0: BAR 0: failed to assign [mem size 0x40000000]
[    9.642536] pci 0000:00:00.0: BAR 1: no space for [mem size 0x40000000]
[    9.642547] pci 0000:00:00.0: BAR 1: failed to assign [mem size 0x40000000]
[    9.642560] pci 0000:00:00.0: BAR 8: assigned [mem 0xf0200000-0xf02fffff]
[    9.642573] pci 0000:00:00.0: BAR 6: assigned [mem 0xf0300000-0xf030ffff pref]
[    9.642589] pci 0000:01:00.0: BAR 0: assigned [mem 0xf0200000-0xf02003ff]
[    9.642613] pci 0000:00:00.0: PCI bridge to [bus 01-ff]
[    9.642626] pci 0000:00:00.0:   bridge window [mem 0xf0200000-0xf02fffff]
[    9.645326] pcieport 0000:00:00.0: PME: Signaling with IRQ 144
[    9.657539] rk-pcie fe170000.pcie: PCIe Linking... LTSSM is 0x3
[    9.684203] rk-pcie fe170000.pcie: PCIe Linking... LTSSM is 0x3
[    9.690453] wireguard: ratelimiter self-tests: pass
[    9.690535] wireguard: WireGuard 1.0.0 loaded. See www.wireguard.com for information.
[    9.690539] wireguard: Copyright (C) 2015-2019 Jason A. Donenfeld <Jason@zx2c4.com>. All Rights Reserved.
[    9.690869] tun: Universal TUN/TAP device driver, 1.6
[    9.691002] CAN device driver interface
[    9.692598] rk_gmac-dwmac fe1b0000.ethernet: IRQ eth_lpi not found
[    9.692727] rk_gmac-dwmac fe1b0000.ethernet: no regulator found
[    9.692732] rk_gmac-dwmac fe1b0000.ethernet: clock input or output? (output).
[    9.692737] rk_gmac-dwmac fe1b0000.ethernet: TX delay(0x45).
[    9.692742] rk_gmac-dwmac fe1b0000.ethernet: Can not read property: rx_delay.
[    9.692746] rk_gmac-dwmac fe1b0000.ethernet: set rx_delay to 0xffffffff
[    9.692760] rk_gmac-dwmac fe1b0000.ethernet: integrated PHY? (no).
[    9.692766] rk_gmac-dwmac fe1b0000.ethernet: cannot get clock mac_clk_rx
[    9.692770] rk_gmac-dwmac fe1b0000.ethernet: cannot get clock mac_clk_tx
[    9.692782] rk_gmac-dwmac fe1b0000.ethernet: cannot get clock clk_mac_speed
[    9.692999] rk_gmac-dwmac fe1b0000.ethernet: init for RGMII_RXID
[    9.693098] rk_gmac-dwmac fe1b0000.ethernet: User ID: 0x30, Synopsys ID: 0x51
[    9.693104] rk_gmac-dwmac fe1b0000.ethernet:         DWMAC4/5
[    9.693109] rk_gmac-dwmac fe1b0000.ethernet: DMA HW capability register supported
[    9.693113] rk_gmac-dwmac fe1b0000.ethernet: RX Checksum Offload Engine supported
[    9.693117] rk_gmac-dwmac fe1b0000.ethernet: TX Checksum insertion supported
[    9.693121] rk_gmac-dwmac fe1b0000.ethernet: Wake-Up On Lan supported
[    9.693151] rk_gmac-dwmac fe1b0000.ethernet: TSO supported
[    9.693155] rk_gmac-dwmac fe1b0000.ethernet: Enable RX Mitigation via HW Watchdog Timer
[    9.693160] rk_gmac-dwmac fe1b0000.ethernet: Enabled Flow TC (entries=2)
[    9.693164] rk_gmac-dwmac fe1b0000.ethernet: TSO feature enabled
[    9.693168] rk_gmac-dwmac fe1b0000.ethernet: Using 32 bits DMA width
[    9.710872] rk-pcie fe170000.pcie: PCIe Linking... LTSSM is 0x3
[    9.737536] rk-pcie fe170000.pcie: PCIe Linking... LTSSM is 0x3
[    9.764201] rk-pcie fe170000.pcie: PCIe Linking... LTSSM is 0x3
[    9.790870] rk-pcie fe170000.pcie: PCIe Linking... LTSSM is 0x3
[    9.827925] rk_gmac-dwmac fe1c0000.ethernet: IRQ eth_lpi not found
[    9.828052] rk_gmac-dwmac fe1c0000.ethernet: no regulator found
[    9.828057] rk_gmac-dwmac fe1c0000.ethernet: clock input or output? (output).
[    9.828062] rk_gmac-dwmac fe1c0000.ethernet: TX delay(0x42).
[    9.828067] rk_gmac-dwmac fe1c0000.ethernet: Can not read property: rx_delay.
[    9.828071] rk_gmac-dwmac fe1c0000.ethernet: set rx_delay to 0xffffffff
[    9.828078] rk_gmac-dwmac fe1c0000.ethernet: integrated PHY? (no).
[    9.828083] rk_gmac-dwmac fe1c0000.ethernet: cannot get clock mac_clk_rx
[    9.828087] rk_gmac-dwmac fe1c0000.ethernet: cannot get clock mac_clk_tx
[    9.828098] rk_gmac-dwmac fe1c0000.ethernet: cannot get clock clk_mac_speed
[    9.828312] rk_gmac-dwmac fe1c0000.ethernet: init for RGMII_RXID
[    9.828415] rk_gmac-dwmac fe1c0000.ethernet: User ID: 0x30, Synopsys ID: 0x51
[    9.828420] rk_gmac-dwmac fe1c0000.ethernet:         DWMAC4/5
[    9.828425] rk_gmac-dwmac fe1c0000.ethernet: DMA HW capability register supported
[    9.828429] rk_gmac-dwmac fe1c0000.ethernet: RX Checksum Offload Engine supported
[    9.828433] rk_gmac-dwmac fe1c0000.ethernet: TX Checksum insertion supported
[    9.828437] rk_gmac-dwmac fe1c0000.ethernet: Wake-Up On Lan supported
[    9.828461] rk_gmac-dwmac fe1c0000.ethernet: TSO supported
[    9.828465] rk_gmac-dwmac fe1c0000.ethernet: Enable RX Mitigation via HW Watchdog Timer
[    9.828469] rk_gmac-dwmac fe1c0000.ethernet: Enabled Flow TC (entries=2)
[    9.828473] rk_gmac-dwmac fe1c0000.ethernet: TSO feature enabled
[    9.828478] rk_gmac-dwmac fe1c0000.ethernet: Using 32 bits DMA width
[    9.963167] phy_rtl8211f_led_fixup in
[    9.983815] hcq :  phy_rtl8211e_eee_fixup in
[   10.005929] usbcore: registered new interface driver asix
[   10.005957] usbcore: registered new interface driver ax88179_178a
[   10.005969] usbcore: registered new interface driver cdc_ether
[   10.005981] usbcore: registered new interface driver net1080
[   10.005993] usbcore: registered new interface driver cdc_subset
[   10.006006] usbcore: registered new interface driver zaurus
[   10.006023] usbcore: registered new interface driver cdc_ncm
[   10.006037] usbcore: registered new interface driver qmi_wwan_q
[   10.006049] usbcore: registered new interface driver qmi_wwan
[   10.013335] ehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver
[   10.013348] ehci-pci: EHCI PCI platform driver
[   10.013380] ehci-platform: EHCI generic platform driver
[   10.013627] ohci_hcd: USB 1.1 'Open' Host Controller (OHCI) Driver
[   10.013634] ohci-platform: OHCI generic platform driver
[   10.013957] usbcore: registered new interface driver cdc_acm
[   10.013961] cdc_acm: USB Abstract Control Model driver for USB modems and ISDN adapters
[   10.013973] usbcore: registered new interface driver cdc_wdm
[   10.014005] usbcore: registered new interface driver usbserial_generic
[   10.014015] usbserial: USB Serial support registered for generic
[   10.014028] usbcore: registered new interface driver ch341
[   10.014036] usbserial: USB Serial support registered for ch341-uart
[   10.014048] usbcore: registered new interface driver cp210x
[   10.014057] usbserial: USB Serial support registered for cp210x
[   10.014069] usbcore: registered new interface driver ftdi_sio
[   10.014077] usbserial: USB Serial support registered for FTDI USB Serial Device
[   10.014089] usbcore: registered new interface driver keyspan
[   10.014097] usbserial: USB Serial support registered for Keyspan - (without firmware)
[   10.014105] usbserial: USB Serial support registered for Keyspan 1 port adapter
[   10.014116] usbserial: USB Serial support registered for Keyspan 2 port adapter
[   10.014124] usbserial: USB Serial support registered for Keyspan 4 port adapter
[   10.014136] usbcore: registered new interface driver option
[   10.014144] usbserial: USB Serial support registered for GSM modem (1-port)
[   10.014155] usbcore: registered new interface driver oti6858
[   10.014163] usbserial: USB Serial support registered for oti6858
[   10.014185] usbcore: registered new interface driver pl2303
[   10.014194] usbserial: USB Serial support registered for pl2303
[   10.014206] usbcore: registered new interface driver qcserial
[   10.014214] usbserial: USB Serial support registered for Qualcomm USB modem
[   10.014227] usbcore: registered new interface driver sierra
[   10.014234] usbserial: USB Serial support registered for Sierra USB modem
[   10.014604] [HXTP] himax_hx83102_init
[   10.014609] [HXTP] himax_hx83102_probe:Enter
[   10.014612] [HXTP] Himax common touch panel driver init
[   10.014651] usbcore: registered new interface driver usbtouchscreen
[   10.015536] input: rk805 pwrkey as /devices/platform/feb20000.spi/spi_master/spi2/spi2.0/rk805-pwrkey.2.auto/input/input0
[   10.015789] i2c /dev entries driver
[   10.019201] vdd_cpu_big0_s0: supplied by vcc5v0_sys
[   10.027649] vdd_cpu_big1_s0: supplied by vcc5v0_sys
[   10.036496] vdd_npu_s0: supplied by vcc5v0_sys
[   10.043042] pca953x 6-0021: supply vcc not found, using dummy regulator
[   10.043092] pca953x 6-0021: using no AI
[   10.044626] rtc-hym8563 6-0051: rtc information is valid
[   10.046085] rtc-hym8563 6-0051: registered as rtc0
[   10.046358] rtc-hym8563 6-0051: setting system clock to 2021-01-09T10:25:38 UTC (1610187938)
[   10.048258] rkcifhw fdce0000.rkcif: Adding to iommu group 14
[   10.048275] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[   10.048522] rkcifhw fdce0000.rkcif: No reserved memory region assign to CIF
[   10.048591] rkcif rkcif-mipi-lvds2: Adding to iommu group 14
[   10.048607] rkcif rkcif-mipi-lvds2: rkcif driver version: v00.01.0a
[   10.048643] rkcif rkcif-mipi-lvds2: attach to cif hw node
[   10.048647] rkcif rkcif-mipi-lvds2: rkcif wait line 0
[   10.048652] : terminal subdev does not exist
[   10.048656] : terminal subdev does not exist
[   10.048659] : terminal subdev does not exist
[   10.048662] : terminal subdev does not exist
[   10.048667] : get_remote_sensor: video pad[0] is null
[   10.048671] : rkcif_update_sensor_info: stream[0] get remote sensor_sd failed!
[   10.048675] : get_remote_sensor: video pad[0] is null
[   10.048679] : rkcif_update_sensor_info: stream[0] get remote sensor_sd failed!
[   10.048683] : get_remote_sensor: video pad[0] is null
[   10.048686] : rkcif_update_sensor_info: stream[0] get remote sensor_sd failed!
[   10.048690] : get_remote_sensor: video pad[0] is null
[   10.048693] : rkcif_update_sensor_info: stream[0] get remote sensor_sd failed!
[   10.049475] rkcif rkcif-mipi-lvds2: No memory-region-thunderboot specified
[   10.050155] rkcif rkcif-mipi-lvds2: Entity type for entity rockchip-mipi-csi2 was not initialized!
[   10.050162] rockchip-mipi-csi2: Async registered subdev
[   10.050169] rockchip-mipi-csi2: probe success, v4l2_dev:rkcif-mipi-lvds2!
[   10.051573] rk_hdmirx fdee0000.hdmirx-controller: No reserved memory for HDMIRX, use default CMA
[   10.051593] rk_hdmirx fdee0000.hdmirx-controller: hdmirx_probe: cpu_aff:0x400, Bound_cpu:4, wdt_cfg_bound_cpu:5
[   10.052076] rk_hdmirx fdee0000.hdmirx-controller: hdmirx_audio_interrupts_setup: 0
[   10.052719] rk_hdmirx fdee0000.hdmirx-controller: rk_hdmirx_hdcp_register success
[   10.052736] rk_hdmirx fdee0000.hdmirx-controller: fdee0000.hdmirx-controller driver probe ok!
[   10.052812] usbcore: registered new interface driver uvcvideo
[   10.052816] USB Video Class driver (1.1.1)
[   10.054486] rockchip-thermal fec00000.tsadc: Missing rockchip,grf property
[   10.054931] rockchip-thermal fec00000.tsadc: tsadc is probed successfully!
[   10.055473] device-mapper: ioctl: 4.44.0-ioctl (2021-02-01) initialised: dm-devel@redhat.com
[   10.055622] Bluetooth: HCI UART driver ver 2.3
[   10.055627] Bluetooth: HCI UART protocol H4 registered
[   10.055631] Bluetooth: HCI UART protocol ATH3K registered
[   10.055651] usbcore: registered new interface driver bfusb
[   10.056286] cpu cpu0: bin=0
[   10.056458] cpu cpu0: leakage=11
[   10.057862] cpu cpu0: pvtm=1461
[   10.057926] cpu cpu0: pvtm-volt-sel=3
[   10.059802] cpu cpu4: bin=0
[   10.059972] cpu cpu4: leakage=9
[   10.066410] cpu cpu4: pvtm=1680
[   10.070313] cpu cpu4: pvtm-volt-sel=4
[   10.072930] cpu cpu6: bin=0
[   10.073102] cpu cpu6: leakage=9
[   10.079557] cpu cpu6: pvtm=1683
[   10.083475] cpu cpu6: pvtm-volt-sel=4
[   10.084952] cpu cpu0: avs=0
[   10.085525] cpu cpu4: avs=0
[   10.086098] cpu cpu6: avs=0
[   10.086294] cpu cpu0: EM: created perf domain
[   10.086323] cpu cpu0: l=10000 h=85000 hyst=5000 l_limit=0 h_limit=1608000000 h_table=0
[   10.086863] cpu cpu4: EM: created perf domain
[   10.086888] cpu cpu4: l=10000 h=85000 hyst=5000 l_limit=0 h_limit=2208000000 h_table=0
[   10.095306] cpu cpu6: EM: created perf domain
[   10.095673] cpu cpu6: l=10000 h=85000 hyst=5000 l_limit=0 h_limit=2208000000 h_table=0
[   10.111808] sdhci: Secure Digital Host Controller Interface driver
[   10.111829] sdhci: Copyright(c) Pierre Ossman
[   10.111836] Synopsys Designware Multimedia Card Interface Driver
[   10.112184] sdhci-pltfm: SDHCI platform and OF driver helper
[   10.114434] arm-scmi firmware:scmi: Failed. SCMI protocol 17 not active.
[   10.114495] SMCCC: SOC_ID: ARCH_SOC_ID not implemented, skipping ....
[   10.115423] cryptodev: driver 1.12 loaded.
[   10.115482] hid: raw HID events driver (C) Jiri Kosina
[   10.115758] usbcore: registered new interface driver usbhid
[   10.115767] usbhid: USB HID core driver
[   10.124320] Firefly adc init
[   10.124330] Firefly adc-->FIREFLY_ADC_SAMPLE_JIFFIES:  16
[   10.124335] Firefly adc-->MSEC_PER_SEC:  1000
[   10.124339] Firefly adc-->HZ:  300
[   10.124511] Firefly adc-->ret:  0
[   10.124643] optee: probing for conduit method.
[   10.124660] optee: revision 3.13 (4542e1ef)
[   10.125108] optee: initialized driver
[   10.125653] usbcore: registered new interface driver snd-usb-audio
[   10.132551] debugfs: File 'Capture' in directory 'dapm' already present!
[   10.133412] input: rockchip-dp0 rockchip-dp0 as /devices/platform/dp0-sound/sound/card0/input1
[   10.134453] firefly-multicodecs es8388-sound: Failed to get hw ver
[   10.146156] ES8323 3-0011: ASoC: error at soc_component_write_no_lock on ES8323.3-0011: -5
[   10.150085] mmc0: SDHCI controller on fe2e0000.mmc [fe2e0000.mmc] using ADMA
[   10.182006] mmc0: new HS400 Enhanced strobe MMC card at address 0001
[   10.182496] mmcblk0: mmc0:0001 Y2P032 29.1 GiB
[   10.182623] mmcblk0boot0: mmc0:0001 Y2P032 partition 1 4.00 MiB
[   10.182747] mmcblk0boot1: mmc0:0001 Y2P032 partition 2 4.00 MiB
[   10.182895] mmcblk0rpmb: mmc0:0001 Y2P032 partition 3 16.0 MiB, chardev (234:0)
[   10.195795] input: rockchip-es8388 Headset as /devices/platform/es8388-sound/sound/card1/input2
[   10.197316] Initializing XFRM netlink socket
[   10.197551] NET: Registered protocol family 10
[   10.198160] Segment Routing with IPv6
[   10.198291] NET: Registered protocol family 17
[   10.198306] NET: Registered protocol family 15
[   10.198339] Bridge firewalling registered
[   10.198345] can: controller area network core
[   10.198370] NET: Registered protocol family 29
[   10.198376] can: raw protocol
[   10.198382] can: broadcast manager protocol
[   10.198390] can: netlink gateway - max_hops=1
[   10.198565] Bluetooth: RFCOMM TTY layer initialized
[   10.198574] Bluetooth: RFCOMM socket layer initialized
[   10.198594] Bluetooth: RFCOMM ver 1.11
[   10.198603] Bluetooth: BNEP (Ethernet Emulation) ver 1.3
[   10.198608] Bluetooth: BNEP filters: protocol multicast
[   10.198615] Bluetooth: BNEP socket layer initialized
[   10.198621] Bluetooth: HIDP (Human Interface Emulation) ver 1.2
[   10.198627] Bluetooth: HIDP socket layer initialized
[   10.198654] 8021q: 802.1Q VLAN Support v1.8
[   10.198670] [BT_RFKILL]: Enter rfkill_rk_init
[   10.198675] [WLAN_RFKILL]: Enter rfkill_wlan_init
[   10.199212] [WLAN_RFKILL]: Enter rfkill_wlan_probe
[   10.199232] [WLAN_RFKILL]: can't find rockchip,grf property
[   10.199238] [WLAN_RFKILL]: wlan_platdata_parse_dt: wifi_chip_type = ap6275p
[   10.199243] [WLAN_RFKILL]: wlan_platdata_parse_dt: enable wifi power control.
[   10.199248] [WLAN_RFKILL]: wlan_platdata_parse_dt: wifi power controled by gpio.
[   10.199299] [WLAN_RFKILL]: wlan_platdata_parse_dt: WIFI,poweren_gpio = 20 flags = 0.
[   10.199317] [WLAN_RFKILL]: wlan_platdata_parse_dt: The ref_wifi_clk not found !
[   10.199323] [WLAN_RFKILL]: rfkill_wlan_probe: init gpio
[   10.199329] [WLAN_RFKILL]: rfkill_set_wifi_bt_power: 1
[   10.199334] [WLAN_RFKILL]: Exit rfkill_wlan_probe
[   10.199843] [BT_RFKILL]: bluetooth_platdata_parse_dt: get property: uart_rts_gpios = 34.
[   10.199861] [BT_RFKILL]: bluetooth_platdata_parse_dt: get property: BT,reset_gpio = 22.
[   10.199871] [BT_RFKILL]: bluetooth_platdata_parse_dt: get property: BT,wake_gpio = 21.
[   10.199882] [BT_RFKILL]: bluetooth_platdata_parse_dt: get property: BT,wake_host_irq = 0.
[   10.199936] [BT_RFKILL]: Request irq for bt wakeup host
[   10.199991] [BT_RFKILL]: ** disable irq
[   10.200042] [BT_RFKILL]: bt_default device registered.
[   10.200103] Key type dns_resolver registered
[   10.200884] vendor storage:20190527 ret = 0
[   10.201377] xc7160 3-001b: T-chip firefly camera driver version: 00.01.04
[   10.201432] xc7160 3-001b: Failed to get power-gpios, maybe no use
[   10.201546] xc7160 3-001b: supply avdd not found, using dummy regulator
[   10.201676] xc7160 3-001b: supply dovdd not found, using dummy regulator
[   10.201751] xc7160 3-001b: supply dvdd not found, using dummy regulator
[   10.201787] xc7160 3-001b: could not get default pinstate
[   10.201796] xc7160 3-001b: could not get sleep pinstate
[   10.201817] xc7160 3-001b: Success to get xc7160 endpoint data lanes, dts uses 4 lanes
[   10.217329] xc7160 3-001b: write XC7160_REG_HIGH_SELECT failed
[   10.217712] xc7160: probe of 3-001b failed with error -5
[   10.218217] registered taskstats version 1
[   10.218231] Loading compiled-in X.509 certificates
[   10.219575] Btrfs loaded, crc32c=crc32c-generic
[   10.219698] pstore: Using crash dump compression: deflate
[   10.220263] rga3_core0 fdb60000.rga: Adding to iommu group 2
[   10.220286] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[   10.220474] rga: rga3_core0_irq, irq = 34, match scheduler
[   10.220747] rga: rga3_core0 hardware loaded successfully, hw_version:3.0.76831.
[   10.220809] rga: rga3_core0 probe successfully
[   10.221232] rga3_core1 fdb70000.rga: Adding to iommu group 3
[   10.221253] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[   10.221425] rga: rga3_core1_irq, irq = 35, match scheduler
[   10.221656] rga: rga3_core1 hardware loaded successfully, hw_version:3.0.76831.
[   10.221712] rga: rga3_core1 probe successfully
[   10.222092] rga: rga2_irq, irq = 36, match scheduler
[   10.222307] rga: rga2 hardware loaded successfully, hw_version:3.2.63318.
[   10.222320] rga: rga2 probe successfully
[   10.222554] rga2_mmu: IOMMU binding successfully, default mapping core[0x1]
[   10.222706] rga: Module initialized. v1.2.20
[   10.222715]
[   10.222720] ********************************************************************
[   10.222726] **     NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE           **
[   10.222731] **                                                                **
[   10.222736] **  WRITEABLE clk DebugFS SUPPORT HAS BEEN ENABLED IN THIS KERNEL **
[   10.222741] **                                                                **
[   10.222746] ** This means that this kernel is built to expose clk operations  **
[   10.222751] ** such as parent or rate setting, enabling, disabling, etc.      **
[   10.222756] ** to userspace, which may compromise security on your system.    **
[   10.222761] **                                                                **
[   10.222766] ** If you see this message and you are not debugging the          **
[   10.222771] ** kernel, report this immediately to your vendor!                **
[   10.222775] **                                                                **
[   10.222780] **     NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE           **
[   10.222785] ********************************************************************
[   10.254295] mali fb000000.gpu: Kernel DDK version g13p0-01eac0
[   10.254397] vcc5v0_host: supplied by vcc5v0_usb
[   10.255114] vcc5v0_host3: supplied by vcc5v0_usb
[   10.255239] mali fb000000.gpu: leakage=14
[   10.260896] debugfs: Directory 'fb000000.gpu-mali' with parent 'vdd_gpu_s0' already present!
[   10.265273] mali fb000000.gpu: pvtm=869
[   10.265322] mali fb000000.gpu: pvtm-volt-sel=3
[   10.266117] mali fb000000.gpu: avs=0
[   10.266212] W : [File] : drivers/gpu/arm/bifrost/platform/rk/mali_kbase_config_rk.c; [Line] : 136; [Func] : kbase_platform_rk_init(); power-off-delay-ms not available.
[   10.266690] mali fb000000.gpu: GPU hardware issue table may need updating:
[   10.266690] r0p0 status 5 is unknown; treating as r0p0 status 0
[   10.266702] mali fb000000.gpu: GPU identified as 0x7 arch 10.8.6 r0p0 status 0
[   10.266792] mali fb000000.gpu: No priority control manager is configured
[   10.266802] mali fb000000.gpu: No memory group manager is configured
[   10.266827] mali fb000000.gpu: Protected memory allocator not available
[   10.267186] mali fb000000.gpu: Capping CSF_FIRMWARE_TIMEOUT to CSF_FIRMWARE_PING_TIMEOUT
[   10.267819] mali fb000000.gpu: Couldn't find power_model DT node matching 'arm,mali-simple-power-model'
[   10.267832] mali fb000000.gpu: Error -22, no DT entry: mali-simple-power-model.static-coefficient = 1*[0]
[   10.267983] mali fb000000.gpu: Error -22, no DT entry: mali-simple-power-model.dynamic-coefficient = 1*[0]
[   10.268136] mali fb000000.gpu: Error -22, no DT entry: mali-simple-power-model.ts = 4*[0]
[   10.268292] mali fb000000.gpu: Error -22, no DT entry: mali-simple-power-model.thermal-zone = ''
[   10.269742] pcie30_avdd1v8: supplied by avcc_1v8_s0
[   10.270623] mali fb000000.gpu: Using configured power model mali-lodx-power-model, and fallback mali-simple-power-model
[   10.270722] pcie30_avdd0v75: supplied by avdd_0v75_s0
[   10.270751] mali fb000000.gpu: l=10000 h=85000 hyst=5000 l_limit=0 h_limit=800000000 h_table=0
[   10.279064] mali fb000000.gpu: Probed as mali0
[   10.279782] rockchip-dmc dmc: leakage=35
[   10.279799] rockchip-dmc dmc: leakage-volt-sel=1
[   10.280332] rockchip-dmc dmc: avs=0
[   10.280353] rockchip-dmc dmc: current ATF version 0x100
[   10.280480] rockchip-dmc dmc: normal_rate = 1560000000
[   10.280492] rockchip-dmc dmc: reboot_rate = 2112000000
[   10.280503] rockchip-dmc dmc: suspend_rate = 528000000
[   10.280513] rockchip-dmc dmc: video_4k_rate = 1560000000
[   10.280523] rockchip-dmc dmc: video_4k_10b_rate = 1560000000
[   10.280533] rockchip-dmc dmc: video_svep_rate = 1560000000
[   10.280543] rockchip-dmc dmc: boost_rate = 2112000000
[   10.280553] rockchip-dmc dmc: fixed_rate(isp|cif0|cif1|dualview) = 2112000000
[   10.280563] rockchip-dmc dmc: performance_rate = 2112000000
[   10.280573] rockchip-dmc dmc: hdmirx_rate = 2112000000
[   10.280587] rockchip-dmc dmc: failed to get vop bandwidth to dmc rate
[   10.280596] rockchip-dmc dmc: failed to get vop pn to msch rl
[   10.280742] rockchip-dmc dmc: l=10000 h=2147483647 hyst=5000 l_limit=0 h_limit=0 h_table=0
[   10.280804] rockchip-dmc dmc: could not find power_model node
[   10.293266] rockchip-vop2 fdd90000.vop: [drm:vop2_bind] vp0 assign plane mask: 0x5, primary plane phy id: 2
[   10.293291] rockchip-vop2 fdd90000.vop: [drm:vop2_bind] vp1 assign plane mask: 0xa, primary plane phy id: 3
[   10.293311] rockchip-vop2 fdd90000.vop: [drm:vop2_bind] vp2 assign plane mask: 0x140, primary plane phy id: 8
[   10.293322] rockchip-vop2 fdd90000.vop: [drm:vop2_bind] vp3 assign plane mask: 0x280, primary plane phy id: 9
[   10.293615] [drm] failed to init overlay plane Cluster0-win1
[   10.293653] [drm] failed to init overlay plane Cluster1-win1
[   10.293688] [drm] failed to init overlay plane Cluster2-win1
[   10.293723] [drm] failed to init overlay plane Cluster3-win1
[   10.300899] rk-pcie fe170000.pcie: PCIe Link up, LTSSM is 0x30011
[   10.301087] rk-pcie fe170000.pcie: PCI host bridge to bus 0002:20
[   10.301105] pci_bus 0002:20: root bus resource [bus 20-2f]
[   10.301119] pci_bus 0002:20: root bus resource [??? 0xf2000000-0xf20fffff flags 0x0]
[   10.301135] pci_bus 0002:20: root bus resource [io  0x0000-0xfffff] (bus address [0xf2100000-0xf21fffff])
[   10.301150] pci_bus 0002:20: root bus resource [mem 0xf2200000-0xf2ffffff]
[   10.301162] pci_bus 0002:20: root bus resource [mem 0x980000000-0x9bfffffff pref]
[   10.301209] pci 0002:20:00.0: [1d87:3588] type 01 class 0x060400
[   10.301239] pci 0002:20:00.0: reg 0x38: [mem 0x00000000-0x0000ffff pref]
[   10.301307] pci 0002:20:00.0: supports D1 D2
[   10.301318] pci 0002:20:00.0: PME# supported from D0 D1 D3hot
[   10.309318] rockchip-drm display-subsystem: bound fdd90000.vop (ops 0xffffffc011721660)
[   10.311069] pci 0002:20:00.0: Primary bus is hard wired to 0
[   10.311094] pci 0002:20:00.0: bridge configuration invalid ([bus 01-ff]), reconfiguring
[   10.311375] pci 0002:21:00.0: [14e4:449d] type 00 class 0x028000
[   10.311467] pci 0002:21:00.0: reg 0x10: [mem 0x00000000-0x0000ffff 64bit]
[   10.311521] pci 0002:21:00.0: reg 0x18: [mem 0x00000000-0x003fffff 64bit]
[   10.312032] pci 0002:21:00.0: supports D1 D2
[   10.312039] pci 0002:21:00.0: PME# supported from D0 D1 D2 D3hot D3cold
[   10.313021] dwhdmi-rockchip fde80000.hdmi: registered ddc I2C bus driver
[   10.313474] rockchip-drm display-subsystem: bound fde80000.hdmi (ops 0xffffffc011729568)
[   10.314965] dwhdmi-rockchip fdea0000.hdmi: registered ddc I2C bus driver
[   10.315310] rockchip-drm display-subsystem: bound fdea0000.hdmi (ops 0xffffffc011729568)
[   10.315413] rockchip-drm display-subsystem: bound fde50000.dp (ops 0xffffffc01172bb38)
[   10.315476] rockchip-drm display-subsystem: bound fde60000.dp (ops 0xffffffc01172bb38)
[   10.317068] rockchip-drm display-subsystem: route-hdmi0: failed to get logo,offset
[   10.317091] rockchip-drm display-subsystem: route-hdmi1: failed to get logo,offset
[   10.317099] rockchip-drm display-subsystem: can't not find any logo display
[   10.317110] rockchip-drm display-subsystem: failed to show kernel logo
[   10.317209] rockchip-drm display-subsystem: [drm] Cannot find any crtc or sizes
[   10.317291] rockchip-drm display-subsystem: [drm] Cannot find any crtc or sizes
[   10.317323] rockchip-drm display-subsystem: [drm] Cannot find any crtc or sizes
[   10.318331] [drm] Initialized rockchip 3.0.0 20140818 for display-subsystem on minor 0
[   10.327270] pci_bus 0002:21: busn_res: [bus 21-2f] end is updated to 21
[   10.327315] pci 0002:20:00.0: BAR 8: assigned [mem 0xf2200000-0xf27fffff]
[   10.327326] pci 0002:20:00.0: BAR 6: assigned [mem 0xf2800000-0xf280ffff pref]
[   10.327339] pci 0002:21:00.0: BAR 2: assigned [mem 0xf2400000-0xf27fffff 64bit]
[   10.327387] pci 0002:21:00.0: BAR 0: assigned [mem 0xf2200000-0xf220ffff 64bit]
[   10.327433] pci 0002:20:00.0: PCI bridge to [bus 21]
[   10.327443] pci 0002:20:00.0:   bridge window [mem 0xf2200000-0xf27fffff]
[   10.327748] phy phy-fd5d4000.syscon:usb2-phy@4000.10: illegal mode
[   10.327768] xhci-hcd xhci-hcd.11.auto: xHCI Host Controller
[   10.327959] xhci-hcd xhci-hcd.11.auto: new USB bus registered, assigned bus number 1
[   10.328115] xhci-hcd xhci-hcd.11.auto: hcc params 0x0220fe64 hci version 0x110 quirks 0x0000080002010010
[   10.328167] xhci-hcd xhci-hcd.11.auto: irq 146, io mem 0xfc400000
[   10.328470] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 5.10
[   10.328483] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[   10.328492] usb usb1: Product: xHCI Host Controller
[   10.328501] usb usb1: Manufacturer: Linux 5.10.110 xhci-hcd
[   10.328510] usb usb1: SerialNumber: xhci-hcd.11.auto
[   10.329241] hub 1-0:1.0: USB hub found
[   10.329277] hub 1-0:1.0: 1 port detected
[   10.329510] pcieport 0002:20:00.0: PME: Signaling with IRQ 161
[   10.329597] xhci-hcd xhci-hcd.11.auto: xHCI Host Controller
[   10.329752] xhci-hcd xhci-hcd.11.auto: new USB bus registered, assigned bus number 2
[   10.329771] xhci-hcd xhci-hcd.11.auto: Host supports USB 3.0 SuperSpeed
[   10.329830] usb usb2: We don't know the algorithms for LPM for this host, disabling LPM.
[   10.329924] usb usb2: New USB device found, idVendor=1d6b, idProduct=0003, bcdDevice= 5.10
[   10.329936] usb usb2: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[   10.329946] usb usb2: Product: xHCI Host Controller
[   10.329955] usb usb2: Manufacturer: Linux 5.10.110 xhci-hcd
[   10.329965] usb usb2: SerialNumber: xhci-hcd.11.auto
[   10.330381] hub 2-0:1.0: USB hub found
[   10.330413] hub 2-0:1.0: 1 port detected
[   10.331293] input: adc-keys as /devices/platform/adc-keys/input/input3
[   10.339784] input: rockchip-hdmi0 rockchip-hdmi0 as /devices/platform/hdmi0-sound/sound/card3/input4
[   10.341497] input: rockchip-hdmi1 rockchip-hdmi1 as /devices/platform/hdmi1-sound/sound/card4/input5
[   10.347023] ohci-platform fc8c0000.usb: Generic Platform OHCI controller
[   10.347263] ohci-platform fc8c0000.usb: new USB bus registered, assigned bus number 3
[   10.347364] ohci-platform fc8c0000.usb: irq 23, io mem 0xfc8c0000
[   10.405346] usb usb3: New USB device found, idVendor=1d6b, idProduct=0001, bcdDevice= 5.10
[   10.405375] usb usb3: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[   10.405386] usb usb3: Product: Generic Platform OHCI controller
[   10.405395] usb usb3: Manufacturer: Linux 5.10.110 ohci_hcd
[   10.405404] usb usb3: SerialNumber: fc8c0000.usb
[   10.405924] hub 3-0:1.0: USB hub found
[   10.405998] hub 3-0:1.0: 1 port detected
[   10.406957] ehci-platform fc880000.usb: EHCI Host Controller
[   10.407271] ehci-platform fc880000.usb: new USB bus registered, assigned bus number 4
[   10.407389] ehci-platform fc880000.usb: irq 22, io mem 0xfc880000
[   10.421000] ehci-platform fc880000.usb: USB 2.0 started, EHCI 1.00
[   10.421440] usb usb4: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 5.10
[   10.421465] usb usb4: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[   10.421485] usb usb4: Product: EHCI Host Controller
[   10.421503] usb usb4: Manufacturer: Linux 5.10.110 ehci_hcd
[   10.421521] usb usb4: SerialNumber: fc880000.usb
[   10.422566] hub 4-0:1.0: USB hub found
[   10.422629] hub 4-0:1.0: 1 port detected
[   10.427145] ohci-platform fc840000.usb: Generic Platform OHCI controller
[   10.427746] ohci-platform fc840000.usb: new USB bus registered, assigned bus number 5
[   10.427916] ohci-platform fc840000.usb: irq 21, io mem 0xfc840000
[   10.488467] usb usb5: New USB device found, idVendor=1d6b, idProduct=0001, bcdDevice= 5.10
[   10.488499] usb usb5: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[   10.488511] usb usb5: Product: Generic Platform OHCI controller
[   10.488523] usb usb5: Manufacturer: Linux 5.10.110 ohci_hcd
[   10.488533] usb usb5: SerialNumber: fc840000.usb
[   10.489155] hub 5-0:1.0: USB hub found
[   10.489195] hub 5-0:1.0: 1 port detected
[   10.490380] ehci-platform fc800000.usb: EHCI Host Controller
[   10.490635] ehci-platform fc800000.usb: new USB bus registered, assigned bus number 6
[   10.490780] ehci-platform fc800000.usb: irq 20, io mem 0xfc800000
[   10.580994] usb 1-1: new high-speed USB device number 2 using xhci-hcd
[   10.671058] usb 4-1: new high-speed USB device number 2 using ehci-platform
[   10.724971] usb 1-1: New USB device found, idVendor=05e3, idProduct=0610, bcdDevice=93.91
[   10.725048] usb 1-1: New USB device strings: Mfr=1, Product=2, SerialNumber=0
[   10.725076] usb 1-1: Product: USB2.1 Hub
[   10.725101] usb 1-1: Manufacturer: GenesysLogic
[   10.778290] hub 1-1:1.0: USB hub found
[   10.778588] hub 1-1:1.0: 4 ports detected
[   10.807645] ehci-platform fc800000.usb: USB 2.0 started, EHCI 1.00
[   10.807924] usb usb6: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 5.10
[   10.807967] usb usb6: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[   10.807984] usb usb6: Product: EHCI Host Controller
[   10.807998] usb usb6: Manufacturer: Linux 5.10.110 ehci_hcd
[   10.808011] usb usb6: SerialNumber: fc800000.usb
[   10.808729] hub 6-0:1.0: USB hub found
[   10.808777] hub 6-0:1.0: 1 port detected
[   10.811651] register spi return v = :0
[   10.813152] rkcif rkcif-mipi-lvds2: clear unready subdev num: 1
[   10.813176] rockchip-csi2-dphy0: No link between dphy and sensor
[   10.813862] rockchip-csi2-dphy0: No link between dphy and sensor
[   10.813899] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[0] get remote terminal sensor failed!
[   10.813945] rkcif-mipi-lvds2: Async subdev notifier completed
[   10.813958] rockchip-csi2-dphy0: No link between dphy and sensor
[   10.813984] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[0] get remote terminal sensor failed!
[   10.813996] rkcif-mipi-lvds2: There is not terminal subdev, not synchronized with ISP
[   10.814045] rockchip-csi2-dphy0: No link between dphy and sensor
[   10.814086] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[0] get remote terminal sensor failed!
[   10.814098] rkcif-mipi-lvds2: There is not terminal subdev, not synchronized with ISP
[   10.816173] RKNPU fdab0000.npu: Adding to iommu group 0
[   10.816238] iommu: Failed to allocate default IOMMU domain of type 4 for group (null) - Falling back to IOMMU_DOMAIN_DMA
[   10.816527] RKNPU fdab0000.npu: RKNPU: rknpu iommu is enabled, using iommu mode
[   10.818252] usb 4-1: New USB device found, idVendor=1a40, idProduct=0101, bcdDevice= 1.00
[   10.818291] usb 4-1: New USB device strings: Mfr=0, Product=1, SerialNumber=0
[   10.818306] usb 4-1: Product: USB 2.0 Hub [MTT]
[   10.818569] RKNPU fdab0000.npu: can't request region for resource [mem 0xfdab0000-0xfdabffff]
[   10.818614] RKNPU fdab0000.npu: can't request region for resource [mem 0xfdac0000-0xfdacffff]
[   10.818832] RKNPU fdab0000.npu: can't request region for resource [mem 0xfdad0000-0xfdadffff]
[   10.819134] hub 4-1:1.0: USB hub found
[   10.819316] hub 4-1:1.0: 4 ports detected
[   10.821292] [drm] Initialized rknpu 0.8.2 20220829 for fdab0000.npu on minor 1
[   10.822642] dwmmc_rockchip fe2c0000.mmc: IDMAC supports 32-bit address mode.
[   10.822667] dwmmc_rockchip fe2c0000.mmc: Using internal DMA controller.
[   10.822682] dwmmc_rockchip fe2c0000.mmc: Version ID is 270a
[   10.822727] dwmmc_rockchip fe2c0000.mmc: DW MMC controller at irq 80,32 bit host data width,256 deep fifo
[   10.825286] RKNPU fdab0000.npu: leakage=8
[   10.825400] debugfs: Directory 'fdab0000.npu-rknpu' with parent 'vdd_npu_s0' already present!
[   10.832337] RKNPU fdab0000.npu: pvtm=876
[   10.836878] RKNPU fdab0000.npu: pvtm-volt-sel=3
[   10.838527] RKNPU fdab0000.npu: avs=0
[   10.838872] RKNPU fdab0000.npu: l=10000 h=85000 hyst=5000 l_limit=0 h_limit=800000000 h_table=0
[   10.838966] mmc_host mmc1: Bus speed (slot 0) = 400000Hz (slot req 400000Hz, actual 400000HZ div = 0)
[   10.844497] usb 2-1: new SuperSpeed Gen 1 USB device number 2 using xhci-hcd
[   10.848766] RKNPU fdab0000.npu: failed to find power_model node
[   10.848810] RKNPU fdab0000.npu: RKNPU: failed to initialize power model
[   10.848828] RKNPU fdab0000.npu: RKNPU: failed to get dynamic-coefficient
[   10.851224] cfg80211: Loading compiled-in X.509 certificates for regulatory database
[   10.860311] cfg80211: Loaded X.509 cert 'sforshee: 00b28ddf47aef9cea7'
[   10.861703] platform regulatory.0: Direct firmware load for regulatory.db failed with error -2
[   10.861717] cfg80211: failed to load regulatory.db
[   10.862238] rockchip-pm rockchip-suspend: not set pwm-regulator-config
[   10.863565] I : [File] : drivers/gpu/arm/mali400/mali/linux/mali_kernel_linux.c; [Line] : 405; [Func] : mali_module_init(); svn_rev_string_from_arm of this mali_ko is '', rk_ko_ver is '5', built at '15:56:48', on 'Dec  2 2022'.
[   10.864084] Mali:
[   10.864087] Mali device driver loaded
[   10.865021] ret 1024 1
[   10.865266] ALSA device list:
[   10.865276]   #0: rockchip-dp0
[   10.865284]   #1: rockchip-es8388
[   10.865292]   #2: rockchip,hdmiin
[   10.865300]   #3: rockchip-hdmi0
[   10.865308]   #4: rockchip-hdmi1
[   10.866266] usb 2-1: New USB device found, idVendor=05e3, idProduct=0620, bcdDevice=93.91
[   10.866277] usb 2-1: New USB device strings: Mfr=1, Product=2, SerialNumber=0
[   10.866288] usb 2-1: Product: USB3.2 Hub
[   10.866298] usb 2-1: Manufacturer: GenesysLogic
[   10.871949] Freeing unused kernel memory: 7616K
[   10.890495] hub 2-1:1.0: USB hub found
[   10.890936] hub 2-1:1.0: 4 ports detected
[   10.899396] mmc_host mmc1: Bus speed (slot 0) = 148500000Hz (slot req 150000000Hz, actual 148500000HZ div = 0)
[   10.924553] Run /init as init process
Starting syslogd: OK
Starting klogd: OK
Running sysctl: OK
Populating /dev using udev: [   10.988219] udevd[290]: starting version 3.2.10
[   10.993639] udevd[291]: starting eudev-3.2.10
[   11.114000] rockchip-csi2-dphy0: No link between dphy and sensor
[   11.114083] rockchip-csi2-dphy0: No link between dphy and sensor
[   11.114087] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[2] get remote terminal sensor failed!
[   11.114091] rkcif_tools_id2: update sensor info failed -19
[   11.114107] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[2] get remote terminal sensor failed!
[   11.114112] stream_cif_mipi_id2: update sensor info failed -19
[   11.114566] rockchip-csi2-dphy0: No link between dphy and sensor
[   11.114589] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[3] get remote terminal sensor failed!
[   11.114597] rkcif_scale_ch3: update sensor info failed -19
[   11.114613] rockchip-csi2-dphy0: No link between dphy and sensor
[   11.114625] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[0] get remote terminal sensor failed!
[   11.114628] rkcif_scale_ch0: update sensor info failed -19
[   11.114742] rockchip-csi2-dphy0: No link between dphy and sensor
[   11.114752] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[0] get remote terminal sensor failed!
[   11.114757] stream_cif_mipi_id0: update sensor info failed -19
[   11.115261] rockchip-csi2-dphy0: No link between dphy and sensor
[   11.115279] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[2] get remote terminal sensor failed!
[   11.115284] rkcif_scale_ch2: update sensor info failed -19
[   11.115290] rockchip-csi2-dphy0: No link between dphy and sensor
[   11.115309] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[1] get remote terminal sensor failed!
[   11.115320] rkcif_scale_ch1: update sensor info failed -19
[   11.116267] rockchip-csi2-dphy0: No link between dphy and sensor
[   11.116285] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[1] get remote terminal sensor failed!
[   11.116289] rkcif_tools_id1: update sensor info failed -19
[   11.116894] rockchip-csi2-dphy0: No link between dphy and sensor
[   11.116927] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[1] get remote terminal sensor failed!
[   11.116935] stream_cif_mipi_id1: update sensor info failed -19
[   11.118215] rockchip-csi2-dphy0: No link between dphy and sensor
[   11.118260] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[3] get remote terminal sensor failed!
[   11.118267] stream_cif_mipi_id3: update sensor info failed -19
[   11.120585] rockchip-csi2-dphy0: No link between dphy and sensor
[   11.120612] rkcif-mipi-lvds2: rkcif_update_sensor_info: stream[0] get remote terminal sensor failed!
[   11.120616] rkcif_tools_id0: update sensor info failed -19
[   11.150949] es8323_line1_line2_line2diff_switch:2
done
Saving random seed: OK
realpath: /dev/block/by-name: No such file or directory
Will now mount all partitions in /etc/fstab
strings: : No such file or directory
Note: Will skip fsck, remove /.skip_fsck to enable
[   11.230204] dwmmc_rockchip fe2c0000.mmc: Successfully tuned phase to 270
[   11.230259] mmc1: new ultra high speed SDR104 SDHC card at address 0001
[   11.230962] mmcblk1: mmc1:0001 SD16G 29.5 GiB
[   11.237097]  mmcblk1: p1 p2 p3
Handling uboot: /dev/mmcblk1p1 /mnt/external_sd vfat defaults 0
You may need to enable BR2_PACKAGE_DOSFSTOOLS_FATLABE
Log saved to /tmp/mountall.log
Starting network: cmdline=storagemedia=sd androidboot.storagemedia=sd androidboot.mode=normal  storagenode=/mmc@fe2c0000 androidboot.verifiedbootstate=orange ro rootwait earlycon=uart8250,mmio32,0xfeb50000 console=ttyFIQ0 irqchip.gicv3_pseudo_nmi=0 root=PARTLABEL=rootfs rootfstype=ext4 overlayroot=device:dev=PARTLABEL=userdata,fstype=ext4,mkfs=1 coherent_pool=1m systemd.gpt_auto=0 cgroup_enable=memory swapaccount=1

read console from cmdline is /dev/ttyFIQ0
Starting recovery on Sat Jan  9 10:25:39 2021

Recovery System have UI defined.
failed to read font: res=-1, fall back to the compiled-in font
cannot find/open a drm device: No such file or directory
recovery filesystem table
=========================
  0 (null) /tmp ramdisk (null) (null) (null)
  1 /dev/root / ext4 rw,noauto 0 1
  2 proc /proc proc defaults 0 0
  3 devpts /dev/pts devpts defaults,gid=5,mode=620 0 0
  4 tmpfs /dev/shm tmpfs mode=0777 0 0
  5 tmpfs /tmp tmpfs mode=1777 0 0
  6 tmpfs /run tmpfs mode=0755,nosuid,nodev 0 0
  7 sysfs /sys sysfs defaults 0 0
  8 /dev/block/by-name/misc /misc emmc defaults 0 0
  9 /dev/block/by-name/userdata /userdata ext4 defaults 0 0
  10 /dev/block/by-name/oem /oem ext2 defaults 0 0
  11 /dev/sda1 /mnt/usb_storage vfat defaults 0 0
  12 /dev/mmcblk1p1 /mnt/external_sd vfat defaults 0 0
  13 /dev/block/by-name/oem /oem ext2 defaults 0 2
  14 /dev/block/by-name/userdata /userdata ext4 defaults 0 2

executing '/usr/bin/relink-block.sh'
OK
Debug: configfs_init
mkdir: can't create directory '/sys/kernel/config/usb_gadget/rockchip/functions/uac1.gs0': No such file or directory
mkdir: can't create directory '/sys/kernel/config/usb_gadget/rockchip/functions/uac2.gs0': No such file or directory
[   11.453066] file system registered
mkdir: can't create directory '/sys/kernel/config/usb_gadget/rockchip/functions/mtp.gs0': No such file or directory
[   11.457770] using random self ethernet address
[   11.457803] using random host ethernet address
[   11.460674] Mass Storage Function, version: 2009/09/11
[   11.460708] LUN: removable file: (no medium)
mkdir: can't create directory '/sys/kernel/config/usb_gadget/rockchip/functions/hid.usb0': No such file or directory
executed '/usr/bin/relink-block.sh' done
executed '/usr/bin/relink-block.sh' return 0
stat /dev/block/by-name/misc try 1: No such file or directory
[   11.484908] read descriptors
[   11.484978] read strings
[   11.504690] EXT4-fs (mmcblk1p3): mounted filesystem with ordered data mode. Opts: (null)
[   12.225640] rk_hdmirx fdee0000.hdmirx-controller: hdmirx_cancel_cpu_limit_freq freq qos nod add
stat /dev/block/by-name/misc try 2: No such file or directory
Starting input-event-daemon: input-event-daemon: Start parsing /etc/input-event-daemon.conf...
input-event-daemon: Adding device: /dev/input/event0...
input-event-daemon: Adding device: /dev/input/event1...
input-event-daemon: Adding device: /dev/input/event2...
input-event-daemon: Adding device: /dev/input/event3...
input-event-daemon: Adding device: /dev/input/event4...
input-event-daemon: Adding device: /dev/input/event5...
input-event-daemon: Start listening on 6 devices...
done
[root@RK3588:/]# [   12.622263] android_work: did not send uevent (0 0 0000000000000000)
stat /dev/block/by-name/misc try 3: No such file or directory
stat /dev/block/by-name/misc try 4: No such file or directory
stat /dev/block/by-name/misc try 5: No such file or directory
stat /dev/block/by-name/misc try 6: No such file or directory
stat /dev/block/by-name/misc try 7: No such file or directory
stat /dev/block/by-name/misc try 8: No such file or directory
stat /dev/block/by-name/misc try 9: No such file or directory
stat /dev/block/by-name/misc try 10: No such file or directory
failed to stat /dev/block/by-name/misc
emmc_point is /dev/mmcblk0
sd_point is /dev/mmcblk1p1
sd_point_2 is /dev/mmcblk1
Recovery start....................
read cmdline
>>> Boot from non-SDcard
executing '/usr/bin/relink-block.sh'
executed '/usr/bin/relink-block.sh' done
executed '/usr/bin/relink-block.sh' return 0
Now is SD.
[I/]RECOVERY devices is not MTD.
stat /dev/block/by-name/misc try 1: No such file or directory
stat /dev/block/by-name/misc try 2: No such file or directory
stat /dev/block/by-name/misc try 3: No such file or directory
stat /dev/block/by-name/misc try 4: No such file or directory
stat /dev/block/by-name/misc try 5: No such file or directory
stat /dev/block/by-name/misc try 6: No such file or directory
stat /dev/block/by-name/misc try 7: No such file or directory
stat /dev/block/by-name/misc try 8: No such file or directory
stat /dev/block/by-name/misc try 9: No such file or directory
stat /dev/block/by-name/misc try 10: No such file or directory
failed to stat /dev/block/by-name/misc
[E/]RECOVERY Can't open /dev/block/by-name/misc
(No such file or directory)
executing '/usr/bin/relink-block.sh'
executed '/usr/bin/relink-block.sh' done
executed '/usr/bin/relink-block.sh' return 0
[E/]RECOVERY failed to mount /userdata (No such file or directory)
[E/]RECOVERY Can't mount /userdata/recovery/command
executing '/usr/bin/relink-block.sh'
executed '/usr/bin/relink-block.sh' done
executed '/usr/bin/relink-block.sh' return 0
Now is SD.
[I/]RECOVERY devices is not MTD.
Command: "/usr/bin/recovery"

finish_recovery Enter.....
executing '/usr/bin/relink-block.sh'
executed '/usr/bin/relink-block.sh' done
executed '/usr/bin/relink-block.sh' return 0
[E/]RECOVERY failed to mount /userdata (No such file or directory)
[E/]RECOVERY Can't mount /userdata/recovery/log
[E/]RECOVERY Can't open /userdata/recovery/log
executing '/usr/bin/relink-block.sh'
executed '/usr/bin/relink-block.sh' done
executed '/usr/bin/relink-block.sh' return 0
[E/]RECOVERY failed to mount /userdata (No such file or directory)
[E/]RECOVERY Can't mount /userdata/recovery/last_log
[E/]RECOVERY Can't open /userdata/recovery/last_log
executing '/usr/bin/relink-block.sh'
executed '/usr/bin/relink-block.sh' done
executed '/usr/bin/relink-block.sh' return 0
Now is SD.
[I/]RECOVERY devices is not MTD.
executing '/usr/bin/relink-block.sh'
executed '/usr/bin/relink-block.sh' done
executed '/usr/bin/relink-block.sh' return 0
[E/]RECOVERY failed to mount /userdata (No such file or directory)
[W/]RECOVERY Can't unlink /userdata/recovery/command
```