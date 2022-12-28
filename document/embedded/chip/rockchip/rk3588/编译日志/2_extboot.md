```
root@5e42e5e27730:~/sdk_linux/rk3588# ./build.sh extboot
+ export LC_ALL=C
+ LC_ALL=C
+ export LD_LIBRARY_PATH=
+ LD_LIBRARY_PATH=
+ unset RK_CFG_TOOLCHAIN
+ trap err_handler ERR
+ set -eE
++ realpath ./build.sh
+ CMD=/root/sdk_linux/rk3588/device/rockchip/common/build.sh
++ dirname /root/sdk_linux/rk3588/device/rockchip/common/build.sh
+ COMMON_DIR=/root/sdk_linux/rk3588/device/rockchip/common
++ realpath /root/sdk_linux/rk3588/device/rockchip/common/../../..
+ TOP_DIR=/root/sdk_linux/rk3588
+ IMGNAME=
+ BOARD_CONFIG=/root/sdk_linux/rk3588/device/rockchip/.BoardConfig.mk
+ TARGET_PRODUCT=/root/sdk_linux/rk3588/device/rockchip/.target_product
++ realpath /root/sdk_linux/rk3588/device/rockchip/.target_product
+ TARGET_PRODUCT_DIR=/root/sdk_linux/rk3588/device/rockchip/rk3588
+ '[' '!' -L /root/sdk_linux/rk3588/device/rockchip/.BoardConfig.mk -a extboot '!=' lunch ']'
+ unset_board_config_all
++ mktemp
+ local tmp_file=/tmp/tmp.ZGQy9bk9dH
+ uniq
+ sort
++ find /root/sdk_linux/rk3588/device/rockchip -name 'Board*.mk' -type f
+ grep -o '^export.*RK_.*=' /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig_thunder_boot.mk /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig_ficial_gate.mk /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v11-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr4-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-robot64.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-robot64_no_gpu.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v11.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_multi.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick_emmc.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick_sfc.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3128-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3128-evb-ddr3-v10-debian.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10-debian.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10-slc-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig-minievb-v10-lock.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig-minievb-v10-cvr.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3229/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/cmcc_soundai/BoardConfig_soundai_cmcc.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_RK3308B_firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_robot64.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_soundai_cmcc.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308b_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308bs_64bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_robot32.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308b_64bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308hs_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308h_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308bs_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-sapphire-excavator-lp4.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-sapphire-excavator.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-evb-ind-lpddr4.mk /root/sdk_linux/rk3588/device/rockchip/px3se/BoardConfig_nand.mk /root/sdk_linux/rk3588/device/rockchip/px3se/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig_retro.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig_dongle.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-security-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb7-lp4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb3-lp5-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588s-evb1-lp4x-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb1-lp4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-robot64_no_gpu.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v12-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v12.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-robot64.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-security-base.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10-spi-nor-64M.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3566-evb2-lp4x-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-uvc-evb1-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3566-evb2-lp4x-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig-rk3288-firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig_rk3288-evb-act8846.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig-rk3288-evb-rk808.mk /root/sdk_linux/rk3588/device/rockchip/rk3358/BoardConfig-rk3358m-vehicle-ddr3.mk /root/sdk_linux/rk3588/device/rockchip/rk3358/BoardConfig-rk3358-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_v10-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig_rk3399pro_evb_v14-combine.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_npu-pcie.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_v11_v12-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_npu-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_lpd4_v11_v12-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig_rk3399pro_evb_v13_pcie.mk /root/sdk_linux/rk3588/device/rockchip/rk3128h/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-v10-v11.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-cvr.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-robot.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-sl.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-battery-evb.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-dualcam-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-facial_gate.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-trailcamera.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nor-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-snapshot.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc-spi-nor-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-spi-nand-ab.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-ramboot-uvc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-slc-nand-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-ab-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nor-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-tb-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-emmc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-sllock.mk /root/sdk_linux/rk3588/device/rockchip/rk3328/BoardConfig.mk -h
+ source /tmp/tmp.ZGQy9bk9dH
++ export RK_ARCH=
++ RK_ARCH=
++ export RK_BOARD_PRE_BUILD_SCRIPT=
++ RK_BOARD_PRE_BUILD_SCRIPT=
++ export RK_BOOT_IMG=
++ RK_BOOT_IMG=
++ export RK_BUILD_OEM_ROOTFS=
++ RK_BUILD_OEM_ROOTFS=
++ export RK_CFG_BUILDROOT=
++ RK_CFG_BUILDROOT=
++ export RK_CFG_PCBA=
++ RK_CFG_PCBA=
++ export RK_CFG_RAMBOOT=
++ RK_CFG_RAMBOOT=
++ export RK_CFG_RECOVERY=
++ RK_CFG_RECOVERY=
++ export RK_CHIP=
++ RK_CHIP=
++ export RK_DEBIAN_VERSION=
++ RK_DEBIAN_VERSION=
++ export RK_DISTRO_DEFCONFIG=
++ RK_DISTRO_DEFCONFIG=
++ export RK_DISTRO_MODULE=
++ RK_DISTRO_MODULE=
++ export RK_EXTRA_PARTITIONS=
++ RK_EXTRA_PARTITIONS=
++ export RK_FACE_DETECTION_HEIGHT=
++ RK_FACE_DETECTION_HEIGHT=
++ export RK_FACE_DETECTION_OFFSET_X=
++ RK_FACE_DETECTION_OFFSET_X=
++ export RK_FACE_DETECTION_OFFSET_Y=
++ RK_FACE_DETECTION_OFFSET_Y=
++ export RK_FACE_DETECTION_WIDTH=
++ RK_FACE_DETECTION_WIDTH=
++ export RK_FACE_FOV_SCALE_FACTOR_X=
++ RK_FACE_FOV_SCALE_FACTOR_X=
++ export RK_FACE_FOV_SCALE_FACTOR_Y=
++ RK_FACE_FOV_SCALE_FACTOR_Y=
++ export RK_FIRST_START_APP=
++ RK_FIRST_START_APP=
++ export RK_HAS_DEPTH_CAMERA=
++ RK_HAS_DEPTH_CAMERA=
++ export RK_IDBLOCK_UPDATE_SPL=
++ RK_IDBLOCK_UPDATE_SPL=
++ export RK_JOBS=
++ RK_JOBS=
++ export RK_KERNEL_DEFCONFIG=
++ RK_KERNEL_DEFCONFIG=
++ export RK_KERNEL_DEFCONFIG_FRAGMENT=
++ RK_KERNEL_DEFCONFIG_FRAGMENT=
++ export RK_KERNEL_DTS=
++ RK_KERNEL_DTS=
++ export RK_KERNEL_FIT_ITS=
++ RK_KERNEL_FIT_ITS=
++ export RK_KERNEL_IMG=
++ RK_KERNEL_IMG=
++ export RK_KERNEL_SECOND_DTS=
++ RK_KERNEL_SECOND_DTS=
++ export RK_KERNEL_ZIMG=
++ RK_KERNEL_ZIMG=
++ export RK_LINUX_AB_ENABLE=
++ RK_LINUX_AB_ENABLE=
++ export RK_LOADER_BOOTPART_SELECT=
++ RK_LOADER_BOOTPART_SELECT=
++ export RK_LOADER_BUILD_TYPE=
++ RK_LOADER_BUILD_TYPE=
++ export RK_LOADER_EMMC_TURNING_DEGREE=
++ RK_LOADER_EMMC_TURNING_DEGREE=
++ export RK_LOADER_NAME=
++ RK_LOADER_NAME=
++ export RK_LOADER_POWER_HOLD_GPIO_GROUP=
++ RK_LOADER_POWER_HOLD_GPIO_GROUP=
++ export RK_LOADER_POWER_HOLD_GPIO_INDEX=
++ RK_LOADER_POWER_HOLD_GPIO_INDEX=
++ export RK_LOADER_PREISP_EN=
++ RK_LOADER_PREISP_EN=
++ export RK_LOADER_UPDATE_SPL=
++ RK_LOADER_UPDATE_SPL=
++ export RK_MISC=
++ RK_MISC=
++ export RK_MULTINPU_BOOT=
++ RK_MULTINPU_BOOT=
++ export RK_OEM_BUILDIN_BUILDROOT=
++ RK_OEM_BUILDIN_BUILDROOT=
++ export RK_OEM_DIR=
++ RK_OEM_DIR=
++ export RK_OEM_FS_TYPE=
++ RK_OEM_FS_TYPE=
++ export RK_OEM_NODE=
++ RK_OEM_NODE=
++ export RK_OEM_PARTITION_SIZE=
++ RK_OEM_PARTITION_SIZE=
++ export RK_PACKAGE_FILE=
++ RK_PACKAGE_FILE=
++ export RK_PACKAGE_FILE_AB=
++ RK_PACKAGE_FILE_AB=
++ export RK_PACKAGE_FILE_OTA=
++ RK_PACKAGE_FILE_OTA=
++ export RK_PARAMETER=
++ RK_PARAMETER=
++ export RK_RAMBOOT_TYPE=
++ RK_RAMBOOT_TYPE=
++ export RK_RAMDISK_SECURITY_BOOTUP=
++ RK_RAMDISK_SECURITY_BOOTUP=
++ export RK_RECOVERY_FIT_ITS=
++ RK_RECOVERY_FIT_ITS=
++ export RK_RKBOOT_INI=
++ RK_RKBOOT_INI=
++ export RK_ROOTFS_IMG=
++ RK_ROOTFS_IMG=
++ export RK_ROOTFS_TYPE=
++ RK_ROOTFS_TYPE=
++ export RK_ROOT_FILESYSTEM_SIZE=
++ RK_ROOT_FILESYSTEM_SIZE=
++ export RK_ROOT_FILESYSTEM_TYPE=
++ RK_ROOT_FILESYSTEM_TYPE=
++ export RK_SECURITY_OTP_DEBUG=
++ RK_SECURITY_OTP_DEBUG=
++ export RK_SETTING_INI=
++ RK_SETTING_INI=
++ export RK_SPL_DEFCONFIG=
++ RK_SPL_DEFCONFIG=
++ export RK_SPL_INI_CONFIG=
++ RK_SPL_INI_CONFIG=
++ export RK_STORAGE_TYPE=
++ RK_STORAGE_TYPE=
++ export RK_SYSTEM_CHECK_METHOD=
++ RK_SYSTEM_CHECK_METHOD=
++ export RK_TARGET_BOARD_VERSION=
++ RK_TARGET_BOARD_VERSION=
++ export RK_TARGET_PRODUCT=
++ RK_TARGET_PRODUCT=
++ export RK_TRUST_INI_CONFIG=
++ RK_TRUST_INI_CONFIG=
++ export RK_TRUST_SIZE_CONFIG=
++ RK_TRUST_SIZE_CONFIG=
++ export RK_UBI_BLOCK_SIZE=
++ RK_UBI_BLOCK_SIZE=
++ export RK_UBI_PAGE_SIZE=
++ RK_UBI_PAGE_SIZE=
++ export RK_UBOOT_DEFCONFIG=
++ RK_UBOOT_DEFCONFIG=
++ export RK_UBOOT_DEFCONFIG_FRAGMENT=
++ RK_UBOOT_DEFCONFIG_FRAGMENT=
++ export RK_UBOOT_FORMAT_TYPE=
++ RK_UBOOT_FORMAT_TYPE=
++ export RK_UBOOT_SIZE_CONFIG=
++ RK_UBOOT_SIZE_CONFIG=
++ export RK_UI_RESOLUTION=
++ RK_UI_RESOLUTION=
++ export RK_UPDATE_SDCARD_CFG_RECOVERY=
++ RK_UPDATE_SDCARD_CFG_RECOVERY=
++ export RK_USERDATA_DIR=
++ RK_USERDATA_DIR=
++ export RK_USERDATA_FILESYSTEM_SIZE=
++ RK_USERDATA_FILESYSTEM_SIZE=
++ export RK_USERDATA_FILESYSTEM_TYPE=
++ RK_USERDATA_FILESYSTEM_TYPE=
++ export RK_USERDATA_FS_TYPE=
++ RK_USERDATA_FS_TYPE=
++ export RK_USERDATA_NODE=
++ RK_USERDATA_NODE=
++ export RK_USERDATA_PARTITION_SIZE=
++ RK_USERDATA_PARTITION_SIZE=
++ export RK_UVC_USE_SL_MODULE=
++ RK_UVC_USE_SL_MODULE=
++ export RK_WIFIBT_CHIP=
++ RK_WIFIBT_CHIP=
++ export RK_WIFIBT_TTY=
++ RK_WIFIBT_TTY=
++ export RK_YOCTO_MACHINE=
++ RK_YOCTO_MACHINE=
+ rm -f /tmp/tmp.ZGQy9bk9dH
+ '[' -L /root/sdk_linux/rk3588/device/rockchip/.BoardConfig.mk ']'
+ source /root/sdk_linux/rk3588/device/rockchip/.BoardConfig.mk
+++ realpath /root/sdk_linux/rk3588/device/rockchip/.BoardConfig.mk
++ CMD=/root/sdk_linux/rk3588/device/rockchip/rk3588/itx-3588j-ubuntu.mk
+++ dirname /root/sdk_linux/rk3588/device/rockchip/rk3588/itx-3588j-ubuntu.mk     
++ CUR_DIR=/root/sdk_linux/rk3588/device/rockchip/rk3588
++ source /root/sdk_linux/rk3588/device/rockchip/rk3588/itx-3588j-buildroot.mk    
++++ realpath /root/sdk_linux/rk3588/device/rockchip/rk3588/itx-3588j-buildroot.mk
+++ CMD=/root/sdk_linux/rk3588/device/rockchip/rk3588/itx-3588j-buildroot.mk      
++++ dirname /root/sdk_linux/rk3588/device/rockchip/rk3588/itx-3588j-buildroot.mk 
+++ CUR_DIR=/root/sdk_linux/rk3588/device/rockchip/rk3588
+++ source /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig.mk
++++ export RK_ARCH=arm64
++++ RK_ARCH=arm64
++++ export RK_UBOOT_DEFCONFIG=rk3588
++++ RK_UBOOT_DEFCONFIG=rk3588
++++ export RK_UBOOT_FORMAT_TYPE=fit
++++ RK_UBOOT_FORMAT_TYPE=fit
++++ export RK_KERNEL_DEFCONFIG=rockchip_linux_defconfig
++++ RK_KERNEL_DEFCONFIG=rockchip_linux_defconfig
++++ export RK_KERNEL_DEFCONFIG_FRAGMENT=rk3588_linux.config
++++ RK_KERNEL_DEFCONFIG_FRAGMENT=rk3588_linux.config
++++ export RK_KERNEL_DTS=rk3588-evb3-lp5-v10-linux
++++ RK_KERNEL_DTS=rk3588-evb3-lp5-v10-linux
++++ export RK_BOOT_IMG=boot.img
++++ RK_BOOT_IMG=boot.img
++++ export RK_KERNEL_IMG=kernel/arch/arm64/boot/Image
++++ RK_KERNEL_IMG=kernel/arch/arm64/boot/Image
++++ export RK_KERNEL_FIT_ITS=boot.its
++++ RK_KERNEL_FIT_ITS=boot.its
++++ export RK_PARAMETER=parameter.txt
++++ RK_PARAMETER=parameter.txt
++++ export RK_CFG_BUILDROOT=rockchip_rk3588
++++ RK_CFG_BUILDROOT=rockchip_rk3588
++++ export RK_CFG_RECOVERY=rockchip_rk3588_recovery
++++ RK_CFG_RECOVERY=rockchip_rk3588_recovery
++++ export RK_RECOVERY_FIT_ITS=boot4recovery.its
++++ RK_RECOVERY_FIT_ITS=boot4recovery.its
++++ export RK_CFG_RAMBOOT=
++++ RK_CFG_RAMBOOT=
++++ export RK_CFG_PCBA=rockchip_rk3588_pcba
++++ RK_CFG_PCBA=rockchip_rk3588_pcba
++++ export RK_JOBS=12
++++ RK_JOBS=12
++++ export RK_TARGET_PRODUCT=rk3588
++++ RK_TARGET_PRODUCT=rk3588
++++ export RK_ROOTFS_TYPE=ext4
++++ RK_ROOTFS_TYPE=ext4
++++ export RK_DEBIAN_VERSION=bullseye
++++ RK_DEBIAN_VERSION=bullseye
++++ export RK_YOCTO_MACHINE=rockchip-rk3588-evb
++++ RK_YOCTO_MACHINE=rockchip-rk3588-evb
++++ export RK_ROOTFS_IMG=rockdev/rootfs.ext4
++++ RK_ROOTFS_IMG=rockdev/rootfs.ext4
++++ export RK_RAMBOOT_TYPE=
++++ RK_RAMBOOT_TYPE=
++++ export 'RK_EXTRA_PARTITIONS=       oem:/oem:ext2:defaults:oem_normal:auto:resize
        userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
'
++++ RK_EXTRA_PARTITIONS='      oem:/oem:ext2:defaults:oem_normal:auto:resize     
        userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
'
++++ export RK_MISC=wipe_all-misc.img
++++ RK_MISC=wipe_all-misc.img
++++ export RK_DISTRO_MODULE=
++++ RK_DISTRO_MODULE=
++++ export RK_BOARD_PRE_BUILD_SCRIPT=app-build.sh
++++ RK_BOARD_PRE_BUILD_SCRIPT=app-build.sh
++++ export RK_PACKAGE_FILE=rk3588-package-file
++++ RK_PACKAGE_FILE=rk3588-package-file
++++ export RK_WIFIBT_CHIP=ALL_AP
++++ RK_WIFIBT_CHIP=ALL_AP
++++ export RK_WIFIBT_TTY=ttyS8
++++ RK_WIFIBT_TTY=ttyS8
+++ export 'RK_KERNEL_DEFCONFIG_FRAGMENT=rk3588_linux.config firefly-linux.config'
+++ RK_KERNEL_DEFCONFIG_FRAGMENT='rk3588_linux.config firefly-linux.config'       
+++ export RK_UBOOT_DEFCONFIG_FRAGMENT=firefly-linux.config
+++ RK_UBOOT_DEFCONFIG_FRAGMENT=firefly-linux.config
+++ export RK_PARAMETER=parameter-ubuntu-fit.txt
+++ RK_PARAMETER=parameter-ubuntu-fit.txt
+++ export RK_KERNEL_DTS=rk3588-firefly-itx-3588j
+++ RK_KERNEL_DTS=rk3588-firefly-itx-3588j
+++ export RK_USERDATA_FS_TYPE=ext4
+++ RK_USERDATA_FS_TYPE=ext4
+++ export FF_EXTBOOT=true
+++ FF_EXTBOOT=true
+++ export FF_EXTBOOT_SIZE=256M
+++ FF_EXTBOOT_SIZE=256M
+++ export RK_PRODUCT_MODEL=ITX_3588J
+++ RK_PRODUCT_MODEL=ITX_3588J
+++ export RK_RECOVERY_RAMDISK=rk3588-recovery-arm64.cpio.gz
+++ RK_RECOVERY_RAMDISK=rk3588-recovery-arm64.cpio.gz
+++ export RK_CFG_RECOVERY=
+++ RK_CFG_RECOVERY=
+++ export RK_CFG_BUILDROOT=firefly_rk3588
+++ RK_CFG_BUILDROOT=firefly_rk3588
++ export RK_ROOTFS_TYPE=ext4
++ RK_ROOTFS_TYPE=ext4
++ export RK_ROOTFS_IMG=ubuntu_rootfs/rootfs.img
++ RK_ROOTFS_IMG=ubuntu_rootfs/rootfs.img
++ export RK_CFG_BUILDROOT=
++ RK_CFG_BUILDROOT=
++ export RK_OEM_DIR=
++ RK_OEM_DIR=
++ export RK_USERDATA_DIR=
++ RK_USERDATA_DIR=
++ export RK_ROOTFS_SYSTEM=ubuntu
++ RK_ROOTFS_SYSTEM=ubuntu
++ export RK_PACKAGE_FILE=rk3588-ubuntu-package-file
++ RK_PACKAGE_FILE=rk3588-ubuntu-package-file
+ CFG_DIR=/root/sdk_linux/rk3588/device/rockchip
+ ROCKDEV=/root/sdk_linux/rk3588/rockdev
+ PARAMETER=/root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt
+ SD_PARAMETER=/root/sdk_linux/rk3588/device/rockchip/rk3588/
++ nproc
+ NPROC=6
+ export RK_JOBS=6
+ RK_JOBS=6
+ '[' '!' -d /root/sdk_linux/rk3588/rockdev/pack ']'
+ BOOT_FIXED_CONFIGS='
        CONFIG_BLK_DEV_DM
        CONFIG_DM_CRYPT
        CONFIG_BLK_DEV_CRYPTOLOOP
        CONFIG_DM_VERITY'
+ BOOT_OPTEE_FIXED_CONFIGS='
        CONFIG_TEE
        CONFIG_OPTEE'
+ UBOOT_FIXED_CONFIGS='
        CONFIG_FIT_SIGNATURE
        CONFIG_SPL_FIT_SIGNATURE'
+ UBOOT_AB_FIXED_CONFIGS='
        CONFIG_ANDROID_AB'
+ ROOTFS_UPDATE_ENGINEBIN_CONFIGS='
        BR2_PACKAGE_RECOVERY
        BR2_PACKAGE_RECOVERY_UPDATEENGINEBIN'
+ ROOTFS_AB_FIXED_CONFIGS='

        BR2_PACKAGE_RECOVERY
        BR2_PACKAGE_RECOVERY_UPDATEENGINEBIN
        BR2_PACKAGE_RECOVERY_BOOTCONTROL'
+ echo extboot
+ grep -wqE 'help|-h'
+ OPTIONS=extboot
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rk3588/app-build.sh ']'
+ for option in ${OPTIONS}
+ echo 'processing option: extboot'
processing option: extboot
+ case $option in
+ build_extboot
+ check_config RK_KERNEL_DTS RK_KERNEL_DEFCONFIG
+ unset missing
+ for var in $@
+ eval '[' '$RK_KERNEL_DTS' ']'
++ '[' rk3588-firefly-itx-3588j ']'
+ continue
+ for var in $@
+ eval '[' '$RK_KERNEL_DEFCONFIG' ']'
++ '[' rockchip_linux_defconfig ']'
+ continue
+ '[' -z '' ']'
+ return 0
+ echo '============Start building kernel============'
============Start building kernel============
+ echo 'TARGET_ARCH          =arm64'
TARGET_ARCH          =arm64
+ echo 'TARGET_KERNEL_CONFIG =rockchip_linux_defconfig'
TARGET_KERNEL_CONFIG =rockchip_linux_defconfig
+ echo 'TARGET_KERNEL_DTS    =rk3588-firefly-itx-3588j'
TARGET_KERNEL_DTS    =rk3588-firefly-itx-3588j
+ echo 'TARGET_KERNEL_CONFIG_FRAGMENT =rk3588_linux.config firefly-linux.config'  
TARGET_KERNEL_CONFIG_FRAGMENT =rk3588_linux.config firefly-linux.config
+ echo ==========================================
==========================================
+ pwd
/root/sdk_linux/rk3588
+ build_check_cross_compile
+ case $RK_ARCH in
+ '[' -d /root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu ']'
++ realpath /root/sdk_linux/rk3588
+ CROSS_COMPILE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ export CROSS_COMPILE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-        
+ CROSS_COMPILE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ cd kernel
+ make ARCH=arm64 rockchip_linux_defconfig rk3588_linux.config firefly-linux.config
  HOSTCC  scripts/basic/fixdep
  HOSTCC  scripts/kconfig/conf.o
  HOSTCC  scripts/kconfig/confdata.o
  HOSTCC  scripts/kconfig/expr.o
  LEX     scripts/kconfig/lexer.lex.c
  YACC    scripts/kconfig/parser.tab.[ch]
  HOSTCC  scripts/kconfig/lexer.lex.o
  HOSTCC  scripts/kconfig/parser.tab.o
  HOSTCC  scripts/kconfig/preprocess.o
  HOSTCC  scripts/kconfig/symbol.o
  HOSTCC  scripts/kconfig/util.o
  HOSTLD  scripts/kconfig/conf
#
# configuration written to .config
#
Using .config as base
Merging ./arch/arm64/configs/rk3588_linux.config
Value of CONFIG_BCMDHD_PCIE is redefined by fragment ./arch/arm64/configs/rk3588_linux.config:
Previous value: # CONFIG_BCMDHD_PCIE is not set
New value: CONFIG_BCMDHD_PCIE=y

Value of CONFIG_MALI_CSF_SUPPORT is redefined by fragment ./arch/arm64/configs/rk3588_linux.config:
Previous value: # CONFIG_MALI_CSF_SUPPORT is not set
New value: CONFIG_MALI_CSF_SUPPORT=y

#
# merged configuration written to .config (needs make)
#
.config:7098:warning: override: BCMDHD_PCIE changes choice state
#
# configuration written to .config
#
Using .config as base
Merging ./arch/arm64/configs/firefly-linux.config
Value of CONFIG_GPIO_PCA953X is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_GPIO_PCA953X is not set
New value: CONFIG_GPIO_PCA953X=y

Value of CONFIG_VIDEO_XC7160 is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VIDEO_XC7160 is not set
New value: CONFIG_VIDEO_XC7160=y

Value of CONFIG_TOUCHSCREEN_HX83102 is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_TOUCHSCREEN_HX83102 is not set
New value: CONFIG_TOUCHSCREEN_HX83102=y

Value of CONFIG_CAN is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_CAN is not set
New value: CONFIG_CAN=y

Value of CONFIG_OVERLAY_FS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_OVERLAY_FS is not set
New value: CONFIG_OVERLAY_FS=y

Value of CONFIG_SND_SOC_FIREFLY_MULTICODECS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_SND_SOC_FIREFLY_MULTICODECS is not set
New value: CONFIG_SND_SOC_FIREFLY_MULTICODECS=y

Value of CONFIG_USB_USBNET is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_USB_USBNET is not set
New value: CONFIG_USB_USBNET=y

Value of CONFIG_USB_RTL8150 is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: CONFIG_USB_RTL8150=y
New value: CONFIG_USB_RTL8150=m

Value of CONFIG_USB_RTL8152 is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: CONFIG_USB_RTL8152=y
New value: CONFIG_USB_RTL8152=m

Value of CONFIG_LOCALVERSION_AUTO is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: CONFIG_LOCALVERSION_AUTO=y
New value: # CONFIG_LOCALVERSION_AUTO is not set

Value of CONFIG_SCSI is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: CONFIG_SCSI=y
New value: CONFIG_SCSI=y CONFIG_SCSI=m

Value of CONFIG_ATA is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: CONFIG_ATA=y
New value: CONFIG_ATA=m

Value of CONFIG_SATA_AHCI is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: CONFIG_SATA_AHCI=y
New value: CONFIG_SATA_AHCI=m

Value of CONFIG_SATA_AHCI_PLATFORM is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: CONFIG_SATA_AHCI_PLATFORM=y
New value: CONFIG_SATA_AHCI_PLATFORM=m

Value of CONFIG_SQUASHFS_XATTR is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_SQUASHFS_XATTR is not set
New value: CONFIG_SQUASHFS_XATTR=y

Value of CONFIG_USB_CONFIGFS_RNDIS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_USB_CONFIGFS_RNDIS is not set
New value: CONFIG_USB_CONFIGFS_RNDIS=y

Value of CONFIG_POSIX_MQUEUE is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_POSIX_MQUEUE is not set
New value: CONFIG_POSIX_MQUEUE=y

Value of CONFIG_CGROUP_PIDS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_CGROUP_PIDS is not set
New value: CONFIG_CGROUP_PIDS=y

Value of CONFIG_MEMCG is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_MEMCG is not set
New value: CONFIG_MEMCG=y

Value of CONFIG_CGROUP_PERF is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_CGROUP_PERF is not set
New value: CONFIG_CGROUP_PERF=y

Value of CONFIG_RT_GROUP_SCHED is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_RT_GROUP_SCHED is not set
New value: CONFIG_RT_GROUP_SCHED=y

Value of CONFIG_BLK_CGROUP is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_BLK_CGROUP is not set
New value: CONFIG_BLK_CGROUP=y

Value of CONFIG_INET_ESP is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_INET_ESP is not set
New value: CONFIG_INET_ESP=y

Value of CONFIG_NETFILTER_XT_MATCH_ADDRTYPE is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_NETFILTER_XT_MATCH_ADDRTYPE is not set
New value: CONFIG_NETFILTER_XT_MATCH_ADDRTYPE=y

Value of CONFIG_NETFILTER_XT_MARK is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_NETFILTER_XT_MARK is not set
New value: CONFIG_NETFILTER_XT_MARK=y

Value of CONFIG_IP_VS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_IP_VS is not set
New value: CONFIG_IP_VS=y CONFIG_IP_VS=m

Value of CONFIG_BRIDGE is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_BRIDGE is not set
New value: CONFIG_BRIDGE=y

Value of CONFIG_CGROUP_NET_PRIO is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_CGROUP_NET_PRIO is not set
New value: CONFIG_CGROUP_NET_PRIO=y

Value of CONFIG_BLK_DEV_DM is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_BLK_DEV_DM is not set
New value: CONFIG_BLK_DEV_DM=y

Value of CONFIG_DUMMY is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_DUMMY is not set
New value: CONFIG_DUMMY=y

Value of CONFIG_MACVLAN is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_MACVLAN is not set
New value: CONFIG_MACVLAN=y

Value of CONFIG_IPVLAN is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_IPVLAN is not set
New value: CONFIG_IPVLAN=y

Value of CONFIG_VXLAN is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VXLAN is not set
New value: CONFIG_VXLAN=y CONFIG_VXLAN=m

Value of CONFIG_VETH is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VETH is not set
New value: CONFIG_VETH=y CONFIG_VETH=m

Value of CONFIG_USB_SERIAL_CH341 is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_USB_SERIAL_CH341 is not set
New value: CONFIG_USB_SERIAL_CH341=y

Value of CONFIG_BTRFS_FS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_BTRFS_FS is not set
New value: CONFIG_BTRFS_FS=y

Value of CONFIG_NF_CONNTRACK is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_NF_CONNTRACK is not set
New value: CONFIG_NF_CONNTRACK=y

Value of CONFIG_IP_NF_FILTER is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_IP_NF_FILTER is not set
New value: CONFIG_IP_NF_FILTER=y

Value of CONFIG_NF_TABLES is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_NF_TABLES is not set
New value: CONFIG_NF_TABLES=y

Value of CONFIG_NET_SCHED is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_NET_SCHED is not set
New value: CONFIG_NET_SCHED=y

Value of CONFIG_SECURITY is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_SECURITY is not set
New value: CONFIG_SECURITY=y

Value of CONFIG_VLAN_8021Q is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VLAN_8021Q is not set
New value: CONFIG_VLAN_8021Q=y

Value of CONFIG_NETFILTER_XT_MATCH_COMMENT is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_NETFILTER_XT_MATCH_COMMENT is not set
New value: CONFIG_NETFILTER_XT_MATCH_COMMENT=y

Value of CONFIG_HUGETLBFS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_HUGETLBFS is not set
New value: CONFIG_HUGETLBFS=y

Value of CONFIG_VIDEO_GC2093 is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VIDEO_GC2093 is not set
New value: CONFIG_VIDEO_GC2093=y

Value of CONFIG_VIDEO_GC2053 is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VIDEO_GC2053 is not set
New value: CONFIG_VIDEO_GC2053=y

Value of CONFIG_VIDEO_FP5510 is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VIDEO_FP5510 is not set
New value: CONFIG_VIDEO_FP5510=y

Value of CONFIG_VIDEO_S5K3L6XX is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VIDEO_S5K3L6XX is not set
New value: CONFIG_VIDEO_S5K3L6XX=y

Value of CONFIG_CMA_INACTIVE is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_CMA_INACTIVE is not set
New value: CONFIG_CMA_INACTIVE=y

Value of CONFIG_SENSORS_PWM_FAN is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_SENSORS_PWM_FAN is not set
New value: CONFIG_SENSORS_PWM_FAN=y

Value of CONFIG_BT_RFCOMM_TTY is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_BT_RFCOMM_TTY is not set
New value: CONFIG_BT_RFCOMM_TTY=y

Value of CONFIG_BT_BNEP is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_BT_BNEP is not set
New value: CONFIG_BT_BNEP=y

Value of CONFIG_BT_RTKBTUSB is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_BT_RTKBTUSB is not set
New value: CONFIG_BT_RTKBTUSB=y CONFIG_BT_RTKBTUSB=m

Value of CONFIG_RTL8821CU is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_RTL8821CU is not set
New value: CONFIG_RTL8821CU=m

Value of CONFIG_BT_HCIBTUSB is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: CONFIG_BT_HCIBTUSB=y
New value: CONFIG_BT_HCIBTUSB=m

Value of CONFIG_FRAMEBUFFER_CONSOLE is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_FRAMEBUFFER_CONSOLE is not set
New value: CONFIG_FRAMEBUFFER_CONSOLE=y

Value of CONFIG_BLK_DEV_SD is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: CONFIG_BLK_DEV_SD=y
New value: CONFIG_BLK_DEV_SD=m

Value of CONFIG_BLK_DEV_SR is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: CONFIG_BLK_DEV_SR=y
New value: CONFIG_BLK_DEV_SR=m

Value of CONFIG_SCSI_SPI_ATTRS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: CONFIG_SCSI_SPI_ATTRS=y
New value: CONFIG_SCSI_SPI_ATTRS=m

Value of CONFIG_USB_STORAGE is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: CONFIG_USB_STORAGE=y
New value: CONFIG_USB_STORAGE=m

Value of CONFIG_USB_UAS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: CONFIG_USB_UAS=y
New value: CONFIG_USB_UAS=m

Value of CONFIG_IP_PNP is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_IP_PNP is not set
New value: CONFIG_IP_PNP=y

Value of CONFIG_NFSD is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_NFSD is not set
New value: CONFIG_NFSD=y

Value of CONFIG_PC9202_WATCHDOG is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_PC9202_WATCHDOG is not set
New value: CONFIG_PC9202_WATCHDOG=y

Value of CONFIG_WIREGUARD is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_WIREGUARD is not set
New value: CONFIG_WIREGUARD=y

Value of CONFIG_PSTORE_LZO_COMPRESS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_PSTORE_LZO_COMPRESS is not set
New value: CONFIG_PSTORE_LZO_COMPRESS=m

Value of CONFIG_SPI_WK2XXX is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_SPI_WK2XXX is not set
New value: CONFIG_SPI_WK2XXX=y

Value of CONFIG_AQTION is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_AQTION is not set
New value: CONFIG_AQTION=m

Value of CONFIG_TOUCHSCREEN_GT9XXX is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_TOUCHSCREEN_GT9XXX is not set
New value: CONFIG_TOUCHSCREEN_GT9XXX=y

Value of CONFIG_PARAVIRT is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_PARAVIRT is not set
New value: CONFIG_PARAVIRT=y

Value of CONFIG_PARAVIRT_TIME_ACCOUNTING is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_PARAVIRT_TIME_ACCOUNTING is not set
New value: CONFIG_PARAVIRT_TIME_ACCOUNTING=y

Value of CONFIG_VIRTUALIZATION is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VIRTUALIZATION is not set
New value: CONFIG_VIRTUALIZATION=y

Value of CONFIG_KSM is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_KSM is not set
New value: CONFIG_KSM=y

Value of CONFIG_VIRT_WIFI is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VIRT_WIFI is not set
New value: CONFIG_VIRT_WIFI=m

Value of CONFIG_VIRTIO_CONSOLE is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VIRTIO_CONSOLE is not set
New value: CONFIG_VIRTIO_CONSOLE=y

Value of CONFIG_DRM_VKMS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_DRM_VKMS is not set
New value: CONFIG_DRM_VKMS=m

Value of CONFIG_DRM_QXL is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_DRM_QXL is not set
New value: CONFIG_DRM_QXL=m

Value of CONFIG_DRM_CIRRUS_QEMU is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_DRM_CIRRUS_QEMU is not set
New value: CONFIG_DRM_CIRRUS_QEMU=m

Value of CONFIG_FB_VIRTUAL is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_FB_VIRTUAL is not set
New value: CONFIG_FB_VIRTUAL=y

Value of CONFIG_VIRT_DRIVERS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VIRT_DRIVERS is not set
New value: CONFIG_VIRT_DRIVERS=y

Value of CONFIG_VIRTIO_PCI is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VIRTIO_PCI is not set
New value: CONFIG_VIRTIO_PCI=y

Value of CONFIG_VIRTIO_MMIO is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VIRTIO_MMIO is not set
New value: CONFIG_VIRTIO_MMIO=y

Value of CONFIG_VIRTIO_DMA_SHARED_BUFFER is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VIRTIO_DMA_SHARED_BUFFER is not set
New value: CONFIG_VIRTIO_DMA_SHARED_BUFFER=y

Value of CONFIG_VDPA is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VDPA is not set
New value: CONFIG_VDPA=y

Value of CONFIG_VHOST_NET is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VHOST_NET is not set
New value: CONFIG_VHOST_NET=m

Value of CONFIG_VHOST_CROSS_ENDIAN_LEGACY is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VHOST_CROSS_ENDIAN_LEGACY is not set
New value: CONFIG_VHOST_CROSS_ENDIAN_LEGACY=y

Value of CONFIG_IOMMU_DEFAULT_PASSTHROUGH is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_IOMMU_DEFAULT_PASSTHROUGH is not set
New value: CONFIG_IOMMU_DEFAULT_PASSTHROUGH=y

Value of CONFIG_RPMSG_VIRTIO is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_RPMSG_VIRTIO is not set
New value: CONFIG_RPMSG_VIRTIO=y

Value of CONFIG_VIRTIO_FS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_VIRTIO_FS is not set
New value: CONFIG_VIRTIO_FS=y

Value of CONFIG_NF_REJECT_IPV4 is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_NF_REJECT_IPV4 is not set
New value: CONFIG_NF_REJECT_IPV4=y

Value of CONFIG_NF_REJECT_IPV6 is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_NF_REJECT_IPV6 is not set
New value: CONFIG_NF_REJECT_IPV6=y

Value of CONFIG_IP6_NF_IPTABLES is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_IP6_NF_IPTABLES is not set
New value: CONFIG_IP6_NF_IPTABLES=y

Value of CONFIG_TUN is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_TUN is not set
New value: CONFIG_TUN=y

Value of CONFIG_CIFS is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_CIFS is not set
New value: CONFIG_CIFS=y

Value of CONFIG_CRYPTO_MD4 is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_CRYPTO_MD4 is not set
New value: CONFIG_CRYPTO_MD4=y

Value of CONFIG_BPF_SYSCALL is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_BPF_SYSCALL is not set
New value: CONFIG_BPF_SYSCALL=y

Value of CONFIG_REGULATOR_FIXED_VOLTAGE_FIREFLY is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_REGULATOR_FIXED_VOLTAGE_FIREFLY is not set
New value: CONFIG_REGULATOR_FIXED_VOLTAGE_FIREFLY=y

Value of CONFIG_SENSORS_NTC_THERMISTOR is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_SENSORS_NTC_THERMISTOR is not set
New value: CONFIG_SENSORS_NTC_THERMISTOR=y

Value of CONFIG_DS18B20 is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_DS18B20 is not set
New value: CONFIG_DS18B20=y

Value of CONFIG_IP_MULTIPLE_TABLES is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_IP_MULTIPLE_TABLES is not set
New value: CONFIG_IP_MULTIPLE_TABLES=y

Value of CONFIG_NETFILTER_XT_MATCH_MAC is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_NETFILTER_XT_MATCH_MAC is not set
New value: CONFIG_NETFILTER_XT_MATCH_MAC=y

Value of CONFIG_DEBUG_SPINLOCK is redefined by fragment ./arch/arm64/configs/firefly-linux.config:
Previous value: # CONFIG_DEBUG_SPINLOCK is not set
New value: CONFIG_DEBUG_SPINLOCK=y

#
# merged configuration written to .config (needs make)
#
.config:7128:warning: override: reassigning to symbol BT_RTKBTUSB
.config:7132:warning: override: reassigning to symbol IP_VS
.config:7133:warning: override: reassigning to symbol VXLAN
.config:7136:warning: override: reassigning to symbol SCSI
.config:7173:warning: override: reassigning to symbol VETH
#
# configuration written to .config
#
+ make ARCH=arm64 rk3588-firefly-itx-3588j.img -j6
  SYNC    include/config/auto.conf.cmd
  UPD     include/config/kernel.release
  WRAP    arch/arm64/include/generated/uapi/asm/kvm_para.h
  WRAP    arch/arm64/include/generated/uapi/asm/ioctl.h
  WRAP    arch/arm64/include/generated/uapi/asm/errno.h
  WRAP    arch/arm64/include/generated/uapi/asm/ipcbuf.h
  WRAP    arch/arm64/include/generated/uapi/asm/poll.h
  WRAP    arch/arm64/include/generated/uapi/asm/ioctls.h
  WRAP    arch/arm64/include/generated/uapi/asm/msgbuf.h
  WRAP    arch/arm64/include/generated/uapi/asm/resource.h
  HOSTCC  scripts/dtc/flattree.o
  WRAP    arch/arm64/include/generated/uapi/asm/shmbuf.h
  HOSTCC  scripts/dtc/dtc.o
  WRAP    arch/arm64/include/generated/uapi/asm/siginfo.h
  UPD     include/generated/uapi/linux/version.h
  WRAP    arch/arm64/include/generated/uapi/asm/socket.h
  WRAP    arch/arm64/include/generated/uapi/asm/sockios.h
  WRAP    arch/arm64/include/generated/uapi/asm/stat.h
  WRAP    arch/arm64/include/generated/uapi/asm/sembuf.h
  WRAP    arch/arm64/include/generated/uapi/asm/swab.h
  WRAP    arch/arm64/include/generated/uapi/asm/termios.h
  WRAP    arch/arm64/include/generated/uapi/asm/types.h
  WRAP    arch/arm64/include/generated/uapi/asm/termbits.h
  HOSTCC  scripts/dtc/fstree.o
  HOSTCC  scripts/dtc/data.o
  HOSTCC  scripts/dtc/livetree.o
  UPD     include/generated/utsrelease.h
  WRAP    arch/arm64/include/generated/asm/early_ioremap.h
  WRAP    arch/arm64/include/generated/asm/mcs_spinlock.h
  WRAP    arch/arm64/include/generated/asm/qrwlock.h
  WRAP    arch/arm64/include/generated/asm/qspinlock.h
  WRAP    arch/arm64/include/generated/asm/set_memory.h
  WRAP    arch/arm64/include/generated/asm/user.h
  WRAP    arch/arm64/include/generated/asm/bugs.h
  WRAP    arch/arm64/include/generated/asm/delay.h
  WRAP    arch/arm64/include/generated/asm/div64.h
  WRAP    arch/arm64/include/generated/asm/dma-mapping.h
  WRAP    arch/arm64/include/generated/asm/dma.h
  WRAP    arch/arm64/include/generated/asm/emergency-restart.h
  WRAP    arch/arm64/include/generated/asm/hw_irq.h
  WRAP    arch/arm64/include/generated/asm/irq_regs.h
  WRAP    arch/arm64/include/generated/asm/kdebug.h
  WRAP    arch/arm64/include/generated/asm/kmap_types.h
  WRAP    arch/arm64/include/generated/asm/local.h
  WRAP    arch/arm64/include/generated/asm/local64.h
  WRAP    arch/arm64/include/generated/asm/mm-arch-hooks.h
  WRAP    arch/arm64/include/generated/asm/mmiowb.h
  WRAP    arch/arm64/include/generated/asm/msi.h
  WRAP    arch/arm64/include/generated/asm/serial.h
  WRAP    arch/arm64/include/generated/asm/switch_to.h
  WRAP    arch/arm64/include/generated/asm/trace_clock.h
  WRAP    arch/arm64/include/generated/asm/unaligned.h
  WRAP    arch/arm64/include/generated/asm/vga.h
  HOSTCC  scripts/dtc/checks.o
  HOSTCC  scripts/dtc/treesource.o
  HOSTCC  scripts/dtc/srcpos.o
  HOSTCC  scripts/dtc/util.o
  LEX     scripts/dtc/dtc-lexer.lex.c
  YACC    scripts/dtc/dtc-parser.tab.[ch]
  HOSTCC  scripts/dtc/dtc-lexer.lex.o
  HOSTCC  scripts/dtc/dtc-parser.tab.o
  HOSTLD  scripts/dtc/dtc
  HOSTCC  scripts/kallsyms
  HOSTCC  scripts/resource_tool
  HOSTCC  scripts/sorttable
  DTC     arch/arm64/boot/dts/rockchip/rk3588-firefly-itx-3588j.dtb
  HOSTCC  scripts/asn1_compiler
  HOSTCC  scripts/selinux/genheaders/genheaders
  HOSTCC  scripts/selinux/mdp/mdp
  HOSTCC  scripts/extract-cert
  CC      scripts/mod/empty.o
  HOSTCC  scripts/mod/mk_elfconfig
  CC      scripts/mod/devicetable-offsets.s
  MKELF   scripts/mod/elfconfig.h
  HOSTCC  scripts/mod/modpost.o
  HOSTCC  scripts/mod/sumversion.o
  UPD     scripts/mod/devicetable-offsets.h
  HOSTCC  scripts/mod/file2alias.o
  HOSTLD  scripts/mod/modpost
  CC      kernel/bounds.s
  CALL    scripts/atomic/check-atomics.sh
  UPD     include/generated/timeconst.h
  UPD     include/generated/bounds.h
  CC      arch/arm64/kernel/asm-offsets.s
  UPD     include/generated/asm-offsets.h
  CALL    scripts/checksyscalls.sh
  LDS     arch/arm64/kernel/vdso/vdso.lds
  CC      arch/arm64/kernel/vdso/vgettimeofday.o
  AS      arch/arm64/kernel/vdso/note.o
  AS      arch/arm64/kernel/vdso/sigreturn.o
  LD      arch/arm64/kernel/vdso/vdso.so.dbg
  VDSOSYM include/generated/vdso-offsets.h
  CC      init/main.o
  CC      init/do_mounts.o
  CHK     include/generated/compile.h
  HOSTCC  usr/gen_init_cpio
  OBJCOPY arch/arm64/kernel/vdso/vdso.so
  AS      arch/arm64/kernel/vdso/vdso.o
  CC      kernel/sched/core.o
  AR      arch/arm64/kernel/vdso/built-in.a
  CC      arch/arm64/kernel/probes/uprobes.o
  UPD     include/generated/compile.h
  GEN     usr/initramfs_data.cpio
  SHIPPED usr/initramfs_inc_data
  AS      usr/initramfs_data.o
  CC      arch/arm64/mm/dma-mapping.o
  AR      usr/built-in.a
  CC      certs/system_keyring.o
  EXTRACT_CERTS   
  CC      certs/common.o
  CC      arch/arm64/kernel/probes/decode-insn.o
  CC      arch/arm64/mm/extable.o
  AS      certs/system_certificates.o
  AR      certs/built-in.a
  CC      mm/filemap.o
  CC      arch/arm64/mm/fault.o
  CC      arch/arm64/kernel/probes/simulate-insn.o
  CC      init/do_mounts_rd.o
  CC      init/do_mounts_initrd.o
  AR      arch/arm64/kernel/probes/built-in.a
  AS      arch/arm64/kernel/head.o
  LDS     arch/arm64/kernel/vmlinux.lds
  CC      arch/arm64/kernel/debug-monitors.o
  CC      arch/arm64/mm/init.o
  CC      init/initramfs.o
  CC      init/calibrate.o
  CC      init/init_task.o
  AS      arch/arm64/kernel/entry.o
  CC      arch/arm64/kernel/irq.o
  AS      arch/arm64/mm/cache.o
  CC      init/version.o
  CC      arch/arm64/mm/copypage.o
  CC      kernel/locking/mutex.o
  AR      init/built-in.a
  AR      fs/notify/dnotify/built-in.a
  CC      fs/notify/inotify/inotify_fsnotify.o
  CC      arch/arm64/kernel/fpsimd.o
  CC      arch/arm64/mm/flush.o
  CC      fs/notify/inotify/inotify_user.o
  CC      mm/mempool.o
  CC      kernel/locking/semaphore.o
  CC      arch/arm64/mm/ioremap.o
  CC      kernel/locking/rwsem.o
  CC      arch/arm64/mm/mmap.o
  CC      mm/oom_kill.o
  CC      arch/arm64/kernel/entry-common.o
  CC      arch/arm64/mm/pgd.o
  AR      fs/notify/inotify/built-in.a
  AR      fs/notify/fanotify/built-in.a
  CC      fs/notify/fsnotify.o
  CC      kernel/locking/percpu-rwsem.o
  CC      arch/arm64/mm/mmu.o
  CC      kernel/locking/spinlock.o
  AS      arch/arm64/kernel/entry-fpsimd.o
  CC      arch/arm64/kernel/process.o
  CC      fs/notify/notification.o
  CC      kernel/sched/loadavg.o
  CC      kernel/locking/osq_lock.o
  CC      mm/fadvise.o
  CC      kernel/locking/qspinlock.o
  CC      fs/notify/group.o
  CC      kernel/locking/rtmutex.o
  CC      arch/arm64/mm/context.o
  CC      arch/arm64/kernel/ptrace.o
  CC      mm/maccess.o
  CC      kernel/sched/clock.o
  CC      fs/notify/mark.o
  AS      arch/arm64/mm/proc.o
  CC      arch/arm64/mm/pageattr.o
  CC      mm/page-writeback.o
  CC      kernel/locking/spinlock_debug.o
  CC      kernel/locking/qrwlock.o
  CC      kernel/sched/cputime.o
  CC      arch/arm64/mm/hugetlbpage.o
  CC      fs/notify/fdinfo.o
  AR      kernel/locking/built-in.a
  CC      kernel/power/qos.o
  AR      fs/notify/built-in.a
  CC      fs/nfs_common/nfsacl.o
  CC      arch/arm64/kernel/setup.o
  CC      arch/arm64/mm/mteswap.o
  CC      kernel/sched/idle.o
  CC      kernel/power/main.o
  CC      fs/nfs_common/grace.o
  CC      arch/arm64/kernel/signal.o
  AR      arch/arm64/mm/built-in.a
  AR      arch/arm64/net/built-in.a
  CC      arch/arm64/kvm/hyp/vhe/timer-sr.o
  CC      fs/nfs_common/nfs_ssc.o
  CC      mm/readahead.o
  CC      kernel/power/console.o
  CC      kernel/sched/fair.o
  CC      arch/arm64/kvm/hyp/vhe/sysreg-sr.o
  CC      kernel/power/process.o
  AR      fs/nfs_common/built-in.a
  CC      fs/iomap/trace.o
  CC      mm/swap.o
  CC      arch/arm64/kvm/hyp/vhe/debug-sr.o
  CC      arch/arm64/kernel/sys.o
  CC      kernel/power/suspend.o
  CC      fs/iomap/apply.o
  CC      arch/arm64/kvm/hyp/vhe/switch.o
  CC      arch/arm64/kernel/stacktrace.o
  CC      fs/iomap/buffered-io.o
  CC      kernel/power/poweroff.o
  CC      arch/arm64/kernel/time.o
  CC      kernel/power/wakeup_reason.o
  CC      arch/arm64/kvm/hyp/vhe/tlb.o
  CC      arch/arm64/kernel/traps.o
  CC      mm/truncate.o
  CC      kernel/power/energy_model.o
  CC      arch/arm64/kvm/hyp/vhe/../vgic-v3-sr.o
  CC      fs/iomap/direct-io.o
  AR      kernel/power/built-in.a
  CC      kernel/printk/printk.o
  CC      arch/arm64/kernel/io.o
  CC      mm/vmscan.o
  CC      arch/arm64/kernel/vdso.o
  CC      kernel/sched/rt.o
  CC      fs/iomap/fiemap.o
  CC      arch/arm64/kvm/hyp/vhe/../aarch32.o
  AS      arch/arm64/kernel/hyp-stub.o
  CC      fs/iomap/seek.o
  CC      arch/arm64/kernel/psci.o
  CC      arch/arm64/kvm/hyp/vhe/../vgic-v2-cpuif-proxy.o
  CC      arch/arm64/kernel/cpu_ops.o
  CC      fs/iomap/swapfile.o
  CC      kernel/printk/printk_safe.o
  AS      arch/arm64/kvm/hyp/vhe/../entry.o
  AS      arch/arm64/kvm/hyp/vhe/../fpsimd.o
  CC      arch/arm64/kernel/insn.o
  AS      arch/arm64/kvm/hyp/vhe/../hyp-entry.o
  CC      arch/arm64/kvm/hyp/vhe/../exception.o
  CC      kernel/printk/printk_ringbuffer.o
  AR      fs/iomap/built-in.a
  AR      fs/quota/built-in.a
  CC      kernel/sched/deadline.o
  CC      fs/proc/task_mmu.o
  AR      arch/arm64/kvm/hyp/vhe/built-in.a
  CC      arch/arm64/kvm/hyp/nvhe/timer-sr.nvhe.o
  AR      kernel/printk/built-in.a
  CC      kernel/irq/irqdesc.o
  CC      arch/arm64/kernel/return_address.o
  CC      arch/arm64/kvm/hyp/nvhe/sysreg-sr.nvhe.o
  CC      arch/arm64/kernel/cpuinfo.o
  CC      mm/shmem.o
  CC      kernel/irq/handle.o
  CC      fs/proc/inode.o
  CC      arch/arm64/kernel/cpu_errata.o
  CC      arch/arm64/kvm/hyp/nvhe/debug-sr.nvhe.o
  CC      kernel/irq/manage.o
  CC      arch/arm64/kernel/cpufeature.o
  CC      fs/proc/root.o
  CC      kernel/sched/wait.o
  CC      arch/arm64/kvm/hyp/nvhe/switch.nvhe.o
  CC      fs/proc/base.o
  CC      kernel/irq/spurious.o
  CC      arch/arm64/kvm/hyp/nvhe/tlb.nvhe.o
  CC      kernel/sched/wait_bit.o
  CC      kernel/irq/resend.o
  CC      mm/util.o
  CC      arch/arm64/kernel/alternative.o
  AS      arch/arm64/kvm/hyp/nvhe/hyp-init.nvhe.o
  AS      arch/arm64/kvm/hyp/nvhe/host.nvhe.o
  CC      arch/arm64/kvm/hyp/nvhe/hyp-main.nvhe.o
  CC      arch/arm64/kernel/cacheinfo.o
  CC      kernel/irq/chip.o
  CC      kernel/sched/swait.o
  CC      arch/arm64/kernel/smp.o
  CC      mm/mmzone.o
  CC      arch/arm64/kvm/hyp/nvhe/hyp-smp.nvhe.o
  CC      fs/proc/generic.o
  CC      kernel/irq/dummychip.o
  CC      mm/vmstat.o
  CC      arch/arm64/kvm/hyp/nvhe/psci-relay.nvhe.o
  CC      kernel/sched/completion.o
  CC      kernel/irq/devres.o
  CC      arch/arm64/kernel/smp_spin_table.o
  CC      fs/proc/array.o
  CC      arch/arm64/kvm/hyp/nvhe/early_alloc.nvhe.o
  CC      arch/arm64/kernel/topology.o
  CC      kernel/irq/generic-chip.o
  CC      mm/backing-dev.o
  CC      kernel/sched/cpupri.o
  CC      arch/arm64/kvm/hyp/nvhe/stub.nvhe.o
  AS      arch/arm64/kernel/smccc-call.o
  CC      arch/arm64/kernel/syscall.o
  CC      arch/arm64/kvm/hyp/nvhe/page_alloc.nvhe.o
  CC      fs/proc/fd.o
  CC      kernel/irq/autoprobe.o
  CC      arch/arm64/kernel/proton-pack.o
  CC      fs/proc/proc_tty.o
  AS      arch/arm64/kvm/hyp/nvhe/cache.nvhe.o
  CC      kernel/irq/irqdomain.o
  CC      kernel/sched/cpudeadline.o
  CC      arch/arm64/kvm/hyp/nvhe/setup.nvhe.o
  CC      mm/mm_init.o
  CC      fs/proc/cmdline.o
  CC      fs/proc/consoles.o
  CC      arch/arm64/kvm/hyp/nvhe/mm.nvhe.o
  CC      mm/percpu.o
  CC      arch/arm64/kernel/idreg-override.o
  CC      kernel/sched/topology.o
  CC      fs/proc/cpuinfo.o
  CC      kernel/irq/proc.o
  CC      arch/arm64/kernel/sys32.o
  CC      fs/proc/devices.o
  CC      arch/arm64/kvm/hyp/nvhe/mem_protect.nvhe.o
  CC      kernel/irq/cpuhotplug.o
  CC      arch/arm64/kernel/signal32.o
  CC      fs/proc/interrupts.o
  CC      kernel/irq/pm.o
  CC      arch/arm64/kvm/hyp/nvhe/../vgic-v3-sr.nvhe.o
  CC      fs/proc/loadavg.o
  CC      kernel/sched/stop_task.o
  CC      fs/proc/meminfo.o
  CC      kernel/irq/msi.o
  CC      arch/arm64/kernel/sys_compat.o
  CC      mm/slab_common.o
  CC      arch/arm64/kvm/hyp/nvhe/../aarch32.nvhe.o
  CC      kernel/irq/ipi.o
  AS      arch/arm64/kernel/sigreturn32.o
  AS      arch/arm64/kernel/kuser32.o
  CC      fs/proc/stat.o
  CC      kernel/sched/pelt.o
  CC      arch/arm64/kernel/ftrace.o
  CC      arch/arm64/kvm/hyp/nvhe/../vgic-v2-cpuif-proxy.nvhe.o
  CC      kernel/irq/affinity.o
  CC      fs/proc/uptime.o
  AS      arch/arm64/kernel/entry-ftrace.o
  CC      arch/arm64/kernel/module.o
  CC      mm/compaction.o
  AR      kernel/irq/built-in.a
  CC      kernel/rcu/update.o
  AS      arch/arm64/kvm/hyp/nvhe/../entry.nvhe.o
  CC      fs/proc/util.o
  AS      arch/arm64/kvm/hyp/nvhe/../fpsimd.nvhe.o
  AS      arch/arm64/kvm/hyp/nvhe/../hyp-entry.nvhe.o
  CC      arch/arm64/kvm/hyp/nvhe/../exception.nvhe.o
  CC      kernel/sched/stats.o
  CC      fs/proc/version.o
  CC      arch/arm64/kernel/module-plts.o
  CC      arch/arm64/kvm/hyp/nvhe/../pgtable.nvhe.o
  CC      fs/proc/softirqs.o
  CC      mm/vmacache.o
  CC      arch/arm64/kernel/perf_regs.o
  CC      fs/proc/namespaces.o
  CC      kernel/sched/debug.o
  CC      mm/interval_tree.o
  CC      arch/arm64/kernel/perf_callchain.o
  AS      arch/arm64/kvm/hyp/nvhe/../../../lib/clear_page.nvhe.o
  AS      arch/arm64/kvm/hyp/nvhe/../../../lib/copy_page.nvhe.o
  CC      fs/proc/self.o
  AS      arch/arm64/kvm/hyp/nvhe/../../../lib/memcpy.nvhe.o
  AS      arch/arm64/kvm/hyp/nvhe/../../../lib/memset.nvhe.o
  LDS     arch/arm64/kvm/hyp/nvhe/hyp.lds
  CC      kernel/rcu/sync.o
  HOSTCC  arch/arm64/kvm/hyp/nvhe/gen-hyprel
  CC      arch/arm64/kernel/perf_event.o
  CC      mm/list_lru.o
  LD      arch/arm64/kvm/hyp/nvhe/kvm_nvhe.tmp.o
  HYPREL  arch/arm64/kvm/hyp/nvhe/hyp-reloc.S
  AS      arch/arm64/kvm/hyp/nvhe/hyp-reloc.o
  LD      arch/arm64/kvm/hyp/nvhe/kvm_nvhe.rel.o
  HYPCOPY arch/arm64/kvm/hyp/nvhe/kvm_nvhe.o
  AR      arch/arm64/kvm/hyp/nvhe/built-in.a
  CC      arch/arm64/kvm/hyp/pgtable.o
  CC      kernel/rcu/srcutree.o
  CC      fs/proc/thread_self.o
  CC      fs/proc/proc_sysctl.o
  CC      mm/workingset.o
  CC      kernel/sched/cpuacct.o
  CC      arch/arm64/kernel/hw_breakpoint.o
  CC      arch/arm64/kvm/hyp/reserved_mem.o
  CC      kernel/rcu/tree.o
  CC      mm/debug.o
  AR      arch/arm64/kvm/hyp/built-in.a
  CC      arch/arm64/kvm/../../../virt/kvm/kvm_main.o
  AS      arch/arm64/kernel/sleep.o
  CC      fs/proc/proc_net.o
  CC      kernel/sched/cpufreq.o
  CC      arch/arm64/kernel/suspend.o
  CC      mm/gup.o
  CC      arch/arm64/kernel/cpuidle.o
  CC      fs/proc/kmsg.o
  CC      kernel/sched/cpufreq_schedutil.o
  CC      arch/arm64/kernel/efi.o
  CC      fs/proc/page.o
  AS      arch/arm64/kernel/efi-entry.o
  AS      arch/arm64/kernel/efi-rt-wrapper.o
  CC      arch/arm64/kernel/pci.o
  AR      fs/proc/built-in.a
  CC      mm/highmem.o
  CC      fs/kernfs/mount.o
  CC      kernel/sched/membarrier.o
  CC      arch/arm64/kernel/armv8_deprecated.o
  CC      mm/memory.o
  CC      fs/kernfs/inode.o
  CC      kernel/rcu/rcu_segcblist.o
  CC      kernel/sched/isolation.o
  AR      kernel/rcu/built-in.a
  CC      arch/arm64/kernel/paravirt.o
  AR      kernel/livepatch/built-in.a
  CC      kernel/dma/mapping.o
  CC      fs/kernfs/dir.o
  CC      arch/arm64/kernel/pointer_auth.o
  CC      arch/arm64/kvm/../../../virt/kvm/coalesced_mmio.o
  CC      kernel/dma/direct.o
  CC      arch/arm64/kernel/mte.o
  AR      kernel/sched/built-in.a
  AR      kernel/entry/built-in.a
  CC      kernel/time/time.o
  CC      fs/kernfs/file.o
  CC      arch/arm64/kvm/../../../virt/kvm/eventfd.o
  CC      kernel/dma/ops_helpers.o
  OBJCOPY arch/arm64/kernel/efi-entry.stub.o
  AR      arch/arm64/kernel/built-in.a
  CC      arch/arm64/crypto/sha1-ce-glue.o
  CC      kernel/time/timer.o
  CC      fs/kernfs/symlink.o
  CC      kernel/dma/dummy.o
  AS      arch/arm64/crypto/sha1-ce-core.o
  CC      arch/arm64/crypto/sha2-ce-glue.o
  CC      arch/arm64/kvm/../../../virt/kvm/vfio.o
  AR      fs/kernfs/built-in.a
  CC      fs/sysfs/file.o
  CC      kernel/dma/contiguous.o
  AS      arch/arm64/crypto/sha2-ce-core.o
  CC      arch/arm64/crypto/ghash-ce-glue.o
  CC      mm/mincore.o
  CC      arch/arm64/kvm/../../../virt/kvm/irqchip.o
  CC      fs/sysfs/dir.o
  CC      kernel/dma/coherent.o
  CC      kernel/time/hrtimer.o
  CC      fs/sysfs/symlink.o
  CC      mm/mlock.o
  AS      arch/arm64/crypto/ghash-ce-core.o
  AS      arch/arm64/crypto/aes-ce-core.o
  CC      arch/arm64/kvm/arm.o
  CC      arch/arm64/crypto/aes-ce-glue.o
  CC      kernel/dma/swiotlb.o
  CC      fs/sysfs/mount.o
  CC      arch/arm64/crypto/aes-ce-ccm-glue.o
  CC      fs/sysfs/group.o
  CC      kernel/time/timekeeping.o
  CC      mm/mmap.o
  CC      kernel/dma/pool.o
  AS      arch/arm64/crypto/aes-ce-ccm-core.o
  CC      arch/arm64/crypto/aes-glue-ce.o
  AR      fs/sysfs/built-in.a
  CC      fs/configfs/inode.o
  CC      kernel/dma/remap.o
  CC      fs/configfs/file.o
  AS      arch/arm64/crypto/aes-ce.o
  CC      arch/arm64/crypto/sha256-glue.o
  AR      kernel/dma/built-in.a
  CC      kernel/time/ntp.o
  CC      kernel/cgroup/cgroup.o
  CC      arch/arm64/kvm/mmu.o
  CC      fs/configfs/dir.o
  SHIPPED arch/arm64/crypto/sha256-core.S
  AS      arch/arm64/crypto/chacha-neon-core.o
  CC      kernel/time/clocksource.o
  CC      arch/arm64/crypto/chacha-neon-glue.o
  CC      mm/mmu_gather.o
  SHIPPED arch/arm64/crypto/poly1305-core.S
  CC      arch/arm64/crypto/poly1305-glue.o
  CC      kernel/time/jiffies.o
  CC      fs/configfs/symlink.o
  AS      arch/arm64/crypto/sha256-core.o
  AS      arch/arm64/crypto/poly1305-core.o
  CC      kernel/time/timer_list.o
  CC      arch/arm64/kvm/mmio.o
  CC      mm/mprotect.o
  AR      arch/arm64/crypto/built-in.a
  CC      fs/devpts/inode.o
  CC      fs/configfs/mount.o
  CC      kernel/time/timeconv.o
  AR      fs/devpts/built-in.a
  CC      arch/arm64/kvm/psci.o
  CC      fs/ext4/balloc.o
  CC      fs/configfs/item.o
  CC      kernel/time/timecounter.o
  CC      mm/mremap.o
  CC      kernel/time/alarmtimer.o
  AR      fs/configfs/built-in.a
  CC      fs/jbd2/transaction.o
  CC      arch/arm64/kvm/perf.o
  CC      kernel/time/posix-timers.o
  CC      fs/ext4/bitmap.o
  CC      arch/arm64/kvm/hypercalls.o
  CC      mm/msync.o
  CC      fs/ext4/block_validity.o
  CC      arch/arm64/kvm/pvtime.o
  CC      kernel/cgroup/rstat.o
  CC      mm/page_vma_mapped.o
  CC      fs/jbd2/commit.o
  CC      kernel/time/posix-cpu-timers.o
  CC      kernel/cgroup/namespace.o
  CC      arch/arm64/kvm/inject_fault.o
  CC      fs/ext4/dir.o
  CC      mm/pagewalk.o
  CC      kernel/cgroup/cgroup-v1.o
  CC      arch/arm64/kvm/va_layout.o
  CC      kernel/time/posix-clock.o
  CC      mm/pgtable-generic.o
  CC      fs/jbd2/recovery.o
  CC      fs/ext4/ext4_jbd2.o
  CC      arch/arm64/kvm/handle_exit.o
  CC      kernel/time/itimer.o
  CC      mm/rmap.o
  CC      kernel/cgroup/freezer.o
  CC      fs/jbd2/checkpoint.o
  CC      fs/ext4/extents.o
  CC      kernel/time/clockevents.o
  CC      kernel/cgroup/legacy_freezer.o
  CC      arch/arm64/kvm/guest.o
  CC      fs/jbd2/revoke.o
  CC      kernel/time/tick-common.o
  CC      mm/vmalloc.o
  CC      kernel/cgroup/pids.o
  CC      fs/jbd2/journal.o
  CC      arch/arm64/kvm/debug.o
  CC      kernel/cgroup/cpuset.o
  CC      kernel/time/tick-broadcast.o
  CC      arch/arm64/kvm/reset.o
  CC      kernel/time/tick-broadcast-hrtimer.o
  CC      kernel/time/sched_clock.o
  CC      arch/arm64/kvm/sys_regs.o
  CC      kernel/time/tick-oneshot.o
  AR      kernel/cgroup/built-in.a
  CC      kernel/trace/trace_clock.o
  AR      fs/jbd2/built-in.a
  CC      mm/ioremap.o
  CC      fs/squashfs/block.o
  CC      kernel/time/tick-sched.o
  CC      fs/ext4/extents_status.o
  CC      kernel/trace/ftrace.o
  CC      mm/process_vm_access.o
  CC      fs/squashfs/cache.o
  CC      kernel/time/vsyscall.o
  CC      mm/page_alloc.o
  CC      arch/arm64/kvm/vgic-sys-reg-v3.o
  CC      fs/squashfs/dir.o
  CC      kernel/time/timekeeping_debug.o
  CC      fs/squashfs/export.o
  CC      fs/ext4/file.o
  CC      arch/arm64/kvm/fpsimd.o
  CC      kernel/time/namespace.o
  CC      fs/squashfs/file.o
  AR      kernel/time/built-in.a
  CC      arch/arm64/kvm/pmu.o
  CC      fs/ext4/fsmap.o
  CC      kernel/bpf/core.o
  CC      fs/squashfs/fragment.o
  CC      kernel/trace/ring_buffer.o
  CC      arch/arm64/kvm/arch_timer.o
  CC      fs/squashfs/id.o
  CC      fs/squashfs/inode.o
  CC      fs/ext4/fsync.o
  CC      fs/squashfs/namei.o
  CC      arch/arm64/kvm/trng.o
  CC      fs/squashfs/super.o
  CC      fs/ext4/hash.o
  CC      mm/init-mm.o
  CC      arch/arm64/kvm/vgic/vgic.o
  CC      kernel/bpf/syscall.o
  CC      kernel/trace/trace.o
  CC      mm/memblock.o
  CC      fs/squashfs/symlink.o
  CC      fs/ext4/ialloc.o
  CC      fs/squashfs/decompressor.o
  CC      arch/arm64/kvm/vgic/vgic-init.o
  CC      fs/squashfs/file_cache.o
  CC      mm/madvise.o
  CC      fs/squashfs/decompressor_single.o
  CC      arch/arm64/kvm/vgic/vgic-irqfd.o
  CC      fs/squashfs/xattr.o
  CC      fs/ext4/indirect.o
  CC      arch/arm64/kvm/vgic/vgic-v2.o
  CC      mm/page_io.o
  CC      fs/squashfs/xattr_id.o
  CC      kernel/bpf/verifier.o
  CC      fs/squashfs/lzo_wrapper.o
  CC      arch/arm64/kvm/vgic/vgic-v3.o
  CC      mm/swap_state.o
  CC      fs/squashfs/xz_wrapper.o
  CC      fs/ext4/inline.o
  CC      kernel/trace/trace_output.o
  CC      fs/squashfs/zlib_wrapper.o
  CC      arch/arm64/kvm/vgic/vgic-v4.o
  CC      mm/swapfile.o
  AR      fs/squashfs/built-in.a
  CC      fs/ramfs/inode.o
  CC      kernel/trace/trace_seq.o
  CC      arch/arm64/kvm/vgic/vgic-mmio.o
  CC      kernel/trace/trace_stat.o
  CC      fs/ramfs/file-mmu.o
  CC      fs/ext4/inode.o
  AR      fs/ramfs/built-in.a
  CC      fs/hugetlbfs/inode.o
  CC      kernel/trace/trace_printk.o
  CC      arch/arm64/kvm/vgic/vgic-mmio-v2.o
  CC      mm/swap_slots.o
  CC      kernel/trace/trace_sched_switch.o
  CC      arch/arm64/kvm/vgic/vgic-mmio-v3.o
  AR      fs/hugetlbfs/built-in.a
  CC      fs/fat/cache.o
  CC      mm/dmapool.o
  CC      kernel/trace/trace_functions.o
  CC      fs/fat/dir.o
  CC      arch/arm64/kvm/vgic/vgic-kvm-device.o
  CC      mm/hugetlb.o
  CC      kernel/trace/trace_nop.o
  CC      arch/arm64/kvm/vgic/vgic-its.o
  CC      kernel/trace/trace_functions_graph.o
  CC      fs/fat/fatent.o
  CC      kernel/bpf/inode.o
  CC      fs/ext4/ioctl.o
  CC      kernel/trace/blktrace.o
  CC      fs/fat/file.o
  CC      kernel/bpf/helpers.o
  CC      arch/arm64/kvm/vgic/vgic-debug.o
  CC      fs/fat/inode.o
  CC      arch/arm64/kvm/pmu-emul.o
  CC      fs/ext4/mballoc.o
  CC      mm/sparse.o
  CC      kernel/bpf/tnum.o
  CC      kernel/trace/fgraph.o
  CC      kernel/bpf/bpf_iter.o
  CC      mm/sparse-vmemmap.o
  AR      arch/arm64/kvm/built-in.a
  AR      arch/arm64/built-in.a
  CC      ipc/compat.o
  CC      fs/fat/misc.o
  CC      kernel/trace/trace_events.o
  CC      mm/mmu_notifier.o
  CC      kernel/bpf/map_iter.o
  CC      fs/fat/nfs.o
  CC      ipc/util.o
  CC      fs/fat/namei_vfat.o
  CC      kernel/bpf/task_iter.o
  CC      mm/ksm.o
  CC      ipc/msgutil.o
  CC      kernel/bpf/prog_iter.o
  AR      fs/fat/built-in.a
  CC      fs/isofs/namei.o
  CC      ipc/msg.o
  CC      fs/ext4/migrate.o
  CC      kernel/trace/trace_export.o
  CC      fs/isofs/inode.o
  CC      kernel/bpf/hashtab.o
  CC      kernel/trace/trace_event_perf.o
  CC      fs/ext4/mmp.o
  CC      mm/slub.o
  CC      ipc/sem.o
  CC      kernel/trace/trace_events_filter.o
  CC      fs/isofs/dir.o
  CC      fs/ext4/move_extent.o
  CC      fs/isofs/util.o
  CC      kernel/bpf/arraymap.o
  CC      fs/isofs/rock.o
  CC      fs/ext4/namei.o
  CC      kernel/trace/trace_events_trigger.o
  CC      ipc/shm.o
  CC      fs/isofs/export.o
  CC      kernel/bpf/percpu_freelist.o
  CC      kernel/bpf/bpf_lru_list.o
  CC      fs/isofs/joliet.o
  CC      kernel/trace/bpf_trace.o
  CC      kernel/bpf/lpm_trie.o
  CC      fs/isofs/compress.o
  CC      mm/migrate.o
  CC      ipc/syscall.o
  AR      fs/isofs/built-in.a
  CC      fs/nfs/client.o
  CC      ipc/ipc_sysctl.o
  CC      kernel/bpf/map_in_map.o
  CC      fs/ext4/page-io.o
  CC      ipc/mqueue.o
  CC      kernel/bpf/local_storage.o
  CC      kernel/trace/error_report-traces.o
  CC      mm/page_counter.o
  CC      fs/ext4/readpage.o
  CC      mm/memcontrol.o
  CC      fs/nfs/dir.o
  CC      kernel/trace/power-traces.o
  CC      kernel/bpf/queue_stack_maps.o
  CC      fs/ext4/resize.o
  CC      ipc/namespace.o
  CC      kernel/bpf/ringbuf.o
  CC      ipc/mq_sysctl.o
  AR      ipc/built-in.a
  CC      security/keys/gc.o
  CC      kernel/trace/rpm-traces.o
  CC      kernel/bpf/disasm.o
  CC      kernel/bpf/btf.o
  CC      security/keys/key.o
  CC      fs/ext4/super.o
  CC      kernel/trace/trace_dynevent.o
  CC      fs/nfs/file.o
  CC      kernel/trace/trace_probe.o
  CC      security/keys/keyring.o
  CC      fs/nfs/getroot.o
  CC      security/keys/keyctl.o
  CC      kernel/trace/trace_uprobe.o
  CC      mm/vmpressure.o
  CC      fs/nfs/inode.o
  CC      mm/swap_cgroup.o
  CC      security/keys/permission.o
  CC      kernel/bpf/devmap.o
  AR      kernel/trace/built-in.a
  CC      kernel/events/core.o
  CC      security/keys/process_keys.o
  CC      mm/hugetlb_cgroup.o
  CC      kernel/bpf/cpumap.o
  CC      security/keys/request_key.o
  CC      fs/nfs/super.o
  CC      mm/page_isolation.o
  CC      security/keys/request_key_auth.o
  CC      mm/zsmalloc.o
  CC      kernel/bpf/bpf_local_storage.o
  CC      security/keys/user_defined.o
  CC      fs/nfs/io.o
  CC      security/keys/compat.o
  CC      mm/early_ioremap.o
  CC      kernel/bpf/offload.o
  CC      fs/nfs/direct.o
  CC      security/keys/proc.o
  CC      mm/cma.o
  CC      security/keys/sysctl.o
  CC      security/keys/keyctl_pkey.o
  CC      kernel/bpf/net_namespace.o
  CC      fs/nfs/pagelist.o
  CC      fs/ext4/symlink.o
  CC      mm/balloon_compaction.o
  AR      security/keys/built-in.a
  GEN     security/selinux/flask.h security/selinux/av_permissions.h
  CC      security/selinux/avc.o
  CC      fs/ext4/sysfs.o
  CC      kernel/bpf/stackmap.o
  CC      mm/frame_vector.o
  CC      kernel/events/ring_buffer.o
  CC      mm/memfd.o
  CC      fs/ext4/xattr.o
  CC      fs/nfs/read.o
  CC      kernel/bpf/cgroup.o
  CC      security/selinux/hooks.o
  CC      kernel/events/callchain.o
  CC      mm/page_reporting.o
  CC      kernel/events/hw_breakpoint.o
  AR      mm/built-in.a
  CC      fs/nfs/symlink.o
  CC      crypto/asymmetric_keys/asymmetric_type.o
  CC      fs/ext4/xattr_hurd.o
  CC      kernel/events/uprobes.o
  CC      crypto/asymmetric_keys/restrict.o
  CC      fs/nfs/unlink.o
  CC      kernel/bpf/reuseport_array.o
  CC      fs/ext4/xattr_trusted.o
  CC      crypto/asymmetric_keys/signature.o
  CC      crypto/asymmetric_keys/public_key.o
  CC      fs/ext4/xattr_user.o
  AR      kernel/bpf/built-in.a
  CC      kernel/fork.o
  CC      fs/nfs/write.o
  AR      kernel/events/built-in.a
  CC      kernel/exec_domain.o
  ASN.1   crypto/asymmetric_keys/x509.asn1.[ch]
  ASN.1   crypto/asymmetric_keys/x509_akid.asn1.[ch]
  CC      crypto/asymmetric_keys/x509_public_key.o
  CC      fs/ext4/fast_commit.o
  ASN.1   crypto/asymmetric_keys/pkcs7.asn1.[ch]
  CC      kernel/panic.o
  CC      crypto/asymmetric_keys/pkcs7_trust.o
  CC      security/selinux/selinuxfs.o
  CC      crypto/asymmetric_keys/pkcs7_verify.o
  CC      kernel/cpu.o
  CC      crypto/asymmetric_keys/x509.asn1.o
  CC      crypto/asymmetric_keys/x509_akid.asn1.o
  CC      crypto/asymmetric_keys/x509_cert_parser.o
  CC      crypto/asymmetric_keys/pkcs7.asn1.o
  CC      kernel/exit.o
  CC      crypto/asymmetric_keys/pkcs7_parser.o
  CC      fs/ext4/acl.o
  CC      fs/nfs/namespace.o
  CC      security/selinux/netlink.o
  AR      crypto/asymmetric_keys/built-in.a
  CC      crypto/api.o
  CC      fs/ext4/xattr_security.o
  CC      security/selinux/nlmsgtab.o
  CC      fs/nfs/mount_clnt.o
  CC      crypto/cipher.o
  AR      fs/ext4/built-in.a
  CC      fs/exportfs/expfs.o
  CC      kernel/softirq.o
  CC      kernel/resource.o
  CC      crypto/compress.o
  AR      fs/exportfs/built-in.a
  CC      fs/nfsd/trace.o
  CC      security/selinux/netif.o
  CC      crypto/memneq.o
  CC      fs/nfs/nfstrace.o
  CC      crypto/crypto_engine.o
  CC      kernel/sysctl.o
  CC      kernel/capability.o
  CC      crypto/algapi.o
  CC      security/selinux/netnode.o
  CC      kernel/ptrace.o
  CC      crypto/scatterwalk.o
  CC      security/selinux/netport.o
  CC      kernel/user.o
  CC      crypto/proc.o
  CC      kernel/signal.o
  CC      kernel/sys.o
  CC      fs/nfsd/nfssvc.o
  CC      crypto/aead.o
  CC      security/selinux/status.o
  CC      fs/nfs/export.o
  CC      crypto/geniv.o
  CC      security/selinux/ss/ebitmap.o
  CC      fs/nfsd/nfsctl.o
  CC      crypto/skcipher.o
  CC      fs/nfs/sysfs.o
  CC      kernel/umh.o
  CC      security/selinux/ss/hashtab.o
  CC      security/selinux/ss/symtab.o
  CC      kernel/workqueue.o
  CC      crypto/seqiv.o
  CC      fs/nfsd/nfsproc.o
  CC      fs/nfs/fs_context.o
  CC      security/selinux/ss/sidtab.o
  CC      kernel/pid.o
  CC      crypto/echainiv.o
  CC      crypto/ahash.o
  CC      fs/nfsd/nfsfh.o
  CC      security/selinux/ss/avtab.o
  CC      kernel/task_work.o
  CC      fs/nfs/nfsroot.o
  CC      crypto/shash.o
  CC      kernel/extable.o
  CC      fs/nfs/sysctl.o
  CC      security/selinux/ss/policydb.o
  CC      fs/nfsd/vfs.o
  CC      kernel/params.o
  CC      kernel/kthread.o
  CC      crypto/akcipher.o
  CC      fs/nfs/nfs2super.o
  CC      crypto/kpp.o
  CC      kernel/sys_ni.o
  CC      kernel/nsproxy.o
  ASN.1   crypto/rsapubkey.asn1.[ch]
  ASN.1   crypto/rsaprivkey.asn1.[ch]
  CC      crypto/rsa.o
  CC      kernel/notifier.o
  CC      fs/nfs/proc.o
  CC      fs/nfsd/export.o
  CC      crypto/rsa_helper.o
  CC      kernel/ksysfs.o
  CC      security/apparmor/apparmorfs.o
  CC      crypto/rsa-pkcs1pad.o
  CC      security/selinux/ss/services.o
  CC      kernel/cred.o
  CC      fs/nfs/nfs2xdr.o
  CC      crypto/acompress.o
  CC      kernel/reboot.o
  CC      crypto/scompress.o
  CC      fs/nfsd/auth.o
  CC      crypto/algboss.o
  CC      kernel/async.o
  CC      fs/nfs/nfs3super.o
  CC      fs/nfsd/lockd.o
  CC      kernel/range.o
  CC      security/apparmor/audit.o
  CC      security/selinux/ss/conditional.o
  CC      kernel/smpboot.o
  CC      crypto/testmgr.o
  CC      fs/nfs/nfs3client.o
  CC      kernel/ucount.o
  CC      crypto/cmac.o
  CC      fs/nfsd/nfscache.o
  CC      kernel/regset.o
  CC      security/selinux/ss/mls.o
  GEN     security/apparmor/capability_names.h
  CC      security/apparmor/task.o
  CC      crypto/hmac.o
  CC      kernel/kmod.o
  CC      fs/nfs/nfs3proc.o
  CC      crypto/crypto_null.o
  CC      kernel/groups.o
  CC      security/selinux/ss/context.o
  CC      fs/nfsd/nfsxdr.o
  CC      security/apparmor/ipc.o
  CC      crypto/md4.o
  CC      fs/nfs/nfs3xdr.o
  CC      kernel/kcmp.o
  CC      crypto/md5.o
  AR      security/selinux/built-in.a
  CC      security/integrity/iint.o
  CC      security/apparmor/lib.o
  CC      crypto/sha1_generic.o
  CC      fs/nfsd/stats.o
  CC      kernel/freezer.o
  CC      security/integrity/integrity_audit.o
  CC      crypto/sha256_generic.o
  AR      security/integrity/built-in.a
  CC      security/commoncap.o
  CC      kernel/profile.o
  CC      security/apparmor/match.o
  CC      fs/nfsd/filecache.o
  CC      fs/nfs/nfs3acl.o
  CC      crypto/sha512_generic.o
  CC      kernel/stacktrace.o
  CC      crypto/sm3_generic.o
  CC      security/apparmor/path.o
  CC      security/min_addr.o
  CC      kernel/futex.o
  CC      fs/nfs/nfs4proc.o
  CC      crypto/blake2b_generic.o
  CC      security/security.o
  CC      fs/nfsd/nfs3proc.o
  CC      security/apparmor/domain.o
  CC      crypto/gf128mul.o
  CC      crypto/ecb.o
  CC      fs/nfsd/nfs3xdr.o
  CC      kernel/smp.o
  CC      crypto/cbc.o
  CC      crypto/cfb.o
  CC      security/inode.o
  CC      kernel/uid16.o
  CC      crypto/xts.o
  CC      security/apparmor/policy.o
  CC      fs/nfsd/nfs4proc.o
  CC      security/lsm_audit.o
  CC      kernel/module.o
  CC      crypto/ctr.o
  CC      crypto/gcm.o
  CC      security/device_cgroup.o
  CC      fs/nfs/nfs4xdr.o
  CC      security/apparmor/policy_unpack.o
  CC      block/partitions/core.o
  CC      crypto/ccm.o
  CC      fs/nfsd/nfs4xdr.o
  CC      block/partitions/cmdline.o
  CC      crypto/des_generic.o
  CC      kernel/kallsyms.o
  CC      crypto/twofish_generic.o
  CC      security/apparmor/procattr.o
  CC      block/partitions/msdos.o
  CC      kernel/compat.o
  CC      crypto/twofish_common.o
  CC      block/partitions/efi.o
  CC      fs/nfs/nfs4state.o
  CC      security/apparmor/lsm.o
  CC      kernel/utsname.o
  CC      crypto/aes_generic.o
  AR      block/partitions/built-in.a
  CC      block/bio.o
  CC      kernel/user_namespace.o
  CC      fs/nfsd/nfs4state.o
  CC      crypto/sm4_generic.o
  CC      kernel/pid_namespace.o
  CC      crypto/deflate.o
  CC      fs/nfs/nfs4renewd.o
  CC      block/elevator.o
  CC      crypto/crc32c_generic.o
  UPD     kernel/config_data
  CC      kernel/stop_machine.o
  CC      crypto/crct10dif_common.o
  GEN     security/apparmor/rlim_names.h
  CC      security/apparmor/secid.o
  CC      fs/nfs/nfs4super.o
  CC      kernel/audit.o
  CC      crypto/crct10dif_generic.o
  CC      block/blk-core.o
  CC      crypto/authenc.o
  CC      fs/nfs/nfs4file.o
  CC      security/apparmor/file.o
  CC      crypto/authencesn.o
  CC      kernel/auditfilter.o
  CC      fs/nfs/delegation.o
  CC      crypto/lzo.o
  CC      security/apparmor/policy_ns.o
  CC      block/blk-sysfs.o
  CC      fs/nfsd/nfs4idmap.o
  CC      crypto/lzo-rle.o
  CC      crypto/xxhash_generic.o
  CC      kernel/auditsc.o
  CC      block/blk-flush.o
  CC      security/apparmor/label.o
  CC      crypto/rng.o
  CC      fs/nfsd/nfs4acl.o
  CC      fs/nfs/nfs4idmap.o
  CC      block/blk-settings.o
  CC      crypto/ansi_cprng.o
  CC      crypto/drbg.o
  CC      block/blk-ioc.o
  CC      fs/nfsd/nfs4callback.o
  CC      fs/nfs/callback.o
  CC      kernel/audit_watch.o
  CC      crypto/jitterentropy.o
  CC      block/blk-map.o
  CC      crypto/jitterentropy-kcapi.o
  CC      security/apparmor/mount.o
  CC      kernel/audit_fsnotify.o
  CC      fs/nfs/callback_xdr.o
  CC      crypto/ghash-generic.o
  CC      fs/nfsd/nfs4recover.o
  CC      kernel/audit_tree.o
  CC      block/blk-exec.o
  CC      crypto/af_alg.o
  CC      block/blk-merge.o
  GEN     security/apparmor/net_names.h
  GEN     security/apparmor/net_names.h
  CC      security/apparmor/crypto.o
  CC      fs/nfs/callback_proc.o
  CC      kernel/seccomp.o
  CC      crypto/algif_hash.o
  AR      fs/nfsd/built-in.a
  CC      fs/lockd/clntlock.o
  CC      security/apparmor/capability.o
  CC      fs/nfs/nfs4namespace.o
  CC      block/blk-timeout.o
  CC      block/blk-lib.o
  CC      crypto/algif_skcipher.o
  CC      fs/lockd/clntproc.o
  CC      kernel/relay.o
  CC      security/apparmor/resource.o
  CC      fs/nfs/nfs4getroot.o
  CC      block/blk-mq.o
  CC      crypto/zstd.o
  CC      kernel/utsname_sysctl.o
  CC      security/apparmor/net.o
  CC      kernel/delayacct.o
  CC      fs/nfs/nfs4client.o
  CC      fs/lockd/clntxdr.o
  CC      crypto/ofb.o
  CC      kernel/taskstats.o
  CC      crypto/ecc.o
  AR      security/apparmor/built-in.a
  CC      fs/lockd/host.o
  AR      security/built-in.a
  CC      drivers/irqchip/irqchip.o
  CC      fs/nfs/nfs4session.o
  CC      kernel/tsacct.o
  CC      drivers/irqchip/irq-gic.o
  CC      kernel/tracepoint.o
  CC      block/blk-mq-tag.o
  CC      crypto/ecdh.o
  CC      fs/lockd/svc.o
  CC      fs/nfs/dns_resolve.o
  CC      kernel/irq_work.o
  CC      drivers/irqchip/irq-gic-common.o
  CC      crypto/ecdh_helper.o
  CC      block/blk-stat.o
  CC      crypto/xor.o
  CC      kernel/cpu_pm.o
  CC      drivers/irqchip/irq-gic-v2m.o
  CC      fs/nfs/nfs4trace.o
  CC      fs/lockd/svclock.o
  CC      block/blk-mq-sysfs.o
  CC      kernel/iomem.o
  CC      crypto/hash_info.o
  CC      crypto/rsapubkey.asn1.o
  CC      crypto/rsaprivkey.asn1.o
  AR      crypto/built-in.a
  CC      sound/core/seq/seq.o
  CC      drivers/irqchip/irq-gic-v3.o
  CC      kernel/rseq.o
  CC      block/blk-mq-cpumap.o
  CC      sound/core/seq/seq_lock.o
  CC      block/blk-mq-sched.o
  CC      sound/core/seq/seq_clientmgr.o
  CC      fs/lockd/svcshare.o
  GZIP    kernel/config_data.gz
  CC      kernel/configs.o
  CC      drivers/irqchip/irq-gic-v3-mbi.o
  AR      kernel/built-in.a
  CC      net/core/sock.o
  CC      block/ioctl.o
  CC      fs/lockd/svcproc.o
  CC      drivers/irqchip/irq-gic-v3-its.o
  CC      sound/core/seq/seq_memory.o
  CC      fs/nfs/nfs4sysctl.o
  CC      block/genhd.o
  CC      sound/core/seq/seq_queue.o
  CC      fs/lockd/svcsubs.o
  AR      fs/nfs/built-in.a
  CC      fs/nls/nls_base.o
  CC      sound/core/seq/seq_fifo.o
  CC      fs/nls/nls_cp437.o
  CC      fs/lockd/mon.o
  CC      fs/nls/nls_cp936.o
  CC      sound/core/seq/seq_prioq.o
  CC      block/ioprio.o
  CC      net/core/request_sock.o
  CC      fs/nls/nls_ascii.o
  CC      sound/core/seq/seq_timer.o
  CC      drivers/irqchip/irq-gic-v3-its-platform-msi.o
  CC      block/badblocks.o
  CC      fs/nls/nls_iso8859-1.o
  CC      fs/lockd/xdr.o
  CC      sound/core/seq/seq_system.o
  CC      net/core/skbuff.o
  CC      drivers/irqchip/irq-gic-v4.o
  CC      fs/nls/nls_utf8.o
  CC      block/blk-rq-qos.o
  CC      sound/core/seq/seq_ports.o
  CC      drivers/irqchip/irq-gic-v3-its-pci-msi.o
  AR      fs/nls/built-in.a
  CC      sound/core/sound.o
  CC      fs/lockd/clnt4xdr.o
  CC      block/bounce.o
  CC      sound/core/seq/seq_info.o
  AR      drivers/bus/built-in.a
  AR      drivers/phy/allwinner/built-in.a
  AR      drivers/phy/amlogic/built-in.a
  CC      drivers/irqchip/irq-partition-percpu.o
  AR      drivers/phy/broadcom/built-in.a
  AR      drivers/phy/cadence/built-in.a
  AR      drivers/phy/freescale/built-in.a
  AR      drivers/phy/hisilicon/built-in.a
  AR      drivers/phy/intel/built-in.a
  AR      drivers/phy/lantiq/built-in.a
  AR      drivers/phy/marvell/built-in.a
  AR      drivers/phy/mediatek/built-in.a
  AR      drivers/phy/motorola/built-in.a
  AR      drivers/phy/mscc/built-in.a
  AR      drivers/phy/qualcomm/built-in.a
  AR      drivers/phy/ralink/built-in.a
  AR      drivers/phy/renesas/built-in.a
  CC      sound/core/seq/seq_dummy.o
  CC      drivers/phy/rockchip/phy-rockchip-csi2-dphy-hw.o
  CC      fs/lockd/xdr4.o
  AR      drivers/irqchip/built-in.a
  CC      net/llc/llc_core.o
  CC      block/scsi_ioctl.o
  CC      sound/core/seq/seq_midi.o
  CC      drivers/phy/rockchip/phy-rockchip-csi2-dphy.o
  CC      net/llc/llc_input.o
  CC      sound/core/seq/seq_midi_event.o
  CC      block/bsg.o
  CC      fs/lockd/svc4proc.o
  AR      sound/core/seq/built-in.a
  CC      sound/core/init.o
  CC      net/llc/llc_output.o
  CC      drivers/phy/rockchip/phy-rockchip-dp.o
  CC      block/blk-cgroup.o
  CC      sound/core/memory.o
  CC      fs/lockd/procfs.o
  AR      net/llc/built-in.a
  CC      net/ethernet/eth.o
  CC      drivers/phy/rockchip/phy-rockchip-emmc.o
  CC      net/core/datagram.o
  CC      sound/core/control.o
  AR      fs/lockd/built-in.a
  SHIPPED fs/unicode/utf8data.h
  CC      fs/unicode/utf8-core.o
  CC      drivers/phy/rockchip/phy-rockchip-inno-dsidphy.o
  CC      fs/unicode/utf8-norm.o
  AR      net/ethernet/built-in.a
  CC      net/802/p8022.o
  CC      block/blk-cgroup-rwstat.o
  CC      net/core/stream.o
  CC      drivers/phy/rockchip/phy-rockchip-inno-hdmi-phy.o
  AR      fs/unicode/built-in.a
  CC      fs/cifs/trace.o
  CC      net/802/psnap.o
  CC      block/blk-throttle.o
  CC      sound/core/misc.o
  CC      net/core/scm.o
  CC      sound/core/device.o
  CC      drivers/phy/rockchip/phy-rockchip-inno-usb2.o
  CC      net/802/stp.o
  CC      sound/core/info.o
  AR      net/802/built-in.a
  CC      net/sched/sch_generic.o
  CC      net/core/gen_stats.o
  CC      block/mq-deadline-main.o
  CC      sound/core/ctljack.o
  CC      fs/cifs/cifsfs.o
  CC      sound/core/jack.o
  CC      net/core/gen_estimator.o
  CC      drivers/phy/rockchip/phy-rockchip-inno-usb3.o
  CC      sound/core/hwdep.o
  CC      block/mq-deadline-cgroup.o
  CC      net/core/net_namespace.o
  CC      sound/core/timer.o
  CC      net/sched/sch_mq.o
  CC      drivers/phy/rockchip/phy-rockchip-mipi-rx.o
  CC      block/kyber-iosched.o
  CC      fs/cifs/cifssmb.o
  CC      net/sched/sch_api.o
  CC      drivers/phy/rockchip/phy-rockchip-naneng-combphy.o
  CC      net/core/secure_seq.o
  CC      block/cmdline-parser.o
  CC      sound/core/hrtimer.o
  CC      block/blk-mq-pci.o
  CC      sound/core/pcm.o
  CC      net/core/flow_dissector.o
  CC      drivers/phy/rockchip/phy-rockchip-naneng-edp.o
  CC      block/blk-mq-virtio.o
  CC      sound/core/pcm_native.o
  CC      net/sched/sch_blackhole.o
  CC      block/blk-mq-debugfs.o
  CC      drivers/phy/rockchip/phy-rockchip-pcie.o
  CC      net/sched/cls_api.o
  CC      drivers/phy/rockchip/phy-rockchip-samsung-dcphy.o
  CC      block/blk-pm.o
  CC      net/core/sysctl_net_core.o
  CC      fs/cifs/cifs_debug.o
  AR      block/built-in.a
  CC      virt/lib/irqbypass.o
  CC      drivers/phy/rockchip/phy-rockchip-samsung-hdptx.o
  CC      net/core/dev.o
  AR      virt/lib/built-in.a
  AR      virt/built-in.a
  AS      arch/arm64/lib/clear_page.o
  AS      arch/arm64/lib/clear_user.o
  AS      arch/arm64/lib/copy_from_user.o
  AS      arch/arm64/lib/copy_in_user.o
  AS      arch/arm64/lib/copy_page.o
  AS      arch/arm64/lib/copy_to_user.o
  CC      arch/arm64/lib/csum.o
  CC      sound/core/pcm_lib.o
  CC      arch/arm64/lib/delay.o
  CC      fs/cifs/connect.o
  AS      arch/arm64/lib/memchr.o
  AS      arch/arm64/lib/memcmp.o
  AS      arch/arm64/lib/memcpy.o
  AS      arch/arm64/lib/memmove.o
  CC      drivers/phy/rockchip/phy-rockchip-samsung-hdptx-hdmi.o
  AS      arch/arm64/lib/memset.o
  AS      arch/arm64/lib/strchr.o
  CC      net/sched/sch_fifo.o
  AS      arch/arm64/lib/strcmp.o
  AS      arch/arm64/lib/strlen.o
  AS      arch/arm64/lib/strncmp.o
  AS      arch/arm64/lib/strnlen.o
  AS      arch/arm64/lib/strrchr.o
  AS      arch/arm64/lib/tishift.o
  CC      arch/arm64/lib/xor-neon.o
  CC      net/sched/cls_cgroup.o
  CC      sound/core/pcm_misc.o
  AS      arch/arm64/lib/crc32.o
  AS      arch/arm64/lib/mte.o
  AR      arch/arm64/lib/lib.a
  AR      arch/arm64/lib/built-in.a
  CC      lib/math/div64.o
  CC      drivers/phy/rockchip/phy-rockchip-snps-pcie3.o
  CC      lib/math/gcd.o
  CC      lib/math/lcm.o
  CC      sound/core/pcm_memory.o
  CC      lib/math/int_pow.o
  CC      lib/math/int_sqrt.o
  CC      lib/math/reciprocal_div.o
  AR      net/sched/built-in.a
  CC      lib/math/rational.o
  CC      net/netlink/af_netlink.o
  CC      drivers/phy/rockchip/phy-rockchip-typec.o
  AR      lib/math/built-in.a
  CC      lib/crypto/chacha.o
  CC      sound/core/memalloc.o
  CC      lib/crypto/libchacha.o
  CC      sound/core/pcm_timer.o
  CC      lib/crypto/aes.o
  CC      drivers/phy/rockchip/phy-rockchip-usb.o
  CC      sound/core/pcm_drm_eld.o
  CC      lib/crypto/arc4.o
  CC      lib/crypto/blake2s-generic.o
  CC      fs/cifs/dir.o
  CC      sound/core/pcm_iec958.o
  CC      drivers/phy/rockchip/phy-rockchip-usbdp.o
  CC      sound/core/pcm_dmaengine.o
  CC      lib/crypto/blake2s.o
  CC      net/netlink/genetlink.o
  CC      sound/core/seq_device.o
  CC      lib/crypto/chacha20poly1305.o
  CC      net/core/dev_addr_lists.o
  AR      drivers/phy/rockchip/built-in.a
  AR      drivers/phy/samsung/built-in.a
  AR      drivers/phy/socionext/built-in.a
  CC      fs/cifs/file.o
  AR      drivers/phy/st/built-in.a
  CC      sound/core/rawmidi.o
  AR      drivers/phy/tegra/built-in.a
  AR      drivers/phy/ti/built-in.a
  AR      drivers/phy/xilinx/built-in.a
  CC      drivers/phy/phy-core.o
  CC      lib/crypto/curve25519-hacl64.o
  CC      net/netlink/policy.o
  CC      net/core/dst.o
  CC      drivers/phy/phy-core-mipi-dphy.o
  AR      net/netlink/built-in.a
  CC      net/bpf/test_run.o
  AR      sound/core/built-in.a
  AR      sound/i2c/other/built-in.a
  AR      sound/i2c/built-in.a
  AR      sound/drivers/opl3/built-in.a
  AR      sound/drivers/opl4/built-in.a
  AR      sound/drivers/mpu401/built-in.a
  AR      sound/drivers/vx/built-in.a
  AR      sound/drivers/pcsp/built-in.a
  AR      sound/drivers/built-in.a
  AR      sound/isa/ad1816a/built-in.a
  AR      sound/isa/ad1848/built-in.a
  AR      sound/isa/cs423x/built-in.a
  AR      sound/isa/es1688/built-in.a
  AR      sound/isa/galaxy/built-in.a
  AR      sound/isa/gus/built-in.a
  AR      sound/isa/msnd/built-in.a
  AR      sound/isa/opti9xx/built-in.a
  CC      net/core/netevent.o
  AR      sound/isa/sb/built-in.a
  AR      sound/isa/wavefront/built-in.a
  AR      drivers/phy/built-in.a
  AR      sound/isa/wss/built-in.a
  AR      drivers/pinctrl/actions/built-in.a
  AR      sound/isa/built-in.a
  AR      drivers/pinctrl/bcm/built-in.a
  AR      drivers/pinctrl/freescale/built-in.a
  AR      drivers/pinctrl/mvebu/built-in.a
  AR      sound/pci/ac97/built-in.a
  AR      sound/pci/ali5451/built-in.a
  AR      drivers/pinctrl/nomadik/built-in.a
  AR      sound/pci/asihpi/built-in.a
  AR      drivers/pinctrl/sprd/built-in.a
  AR      sound/pci/au88x0/built-in.a
  AR      drivers/pinctrl/ti/built-in.a
  AR      sound/pci/aw2/built-in.a
  AR      drivers/pinctrl/mediatek/built-in.a
  AR      sound/pci/ctxfi/built-in.a
  AR      drivers/pinctrl/cirrus/built-in.a
  AR      sound/pci/ca0106/built-in.a
  CC      drivers/pinctrl/core.o
  AR      sound/pci/cs46xx/built-in.a
  AR      sound/pci/cs5535audio/built-in.a
  AR      sound/pci/lola/built-in.a
  AR      sound/pci/lx6464es/built-in.a
  AR      sound/pci/echoaudio/built-in.a
  AR      sound/pci/emu10k1/built-in.a
  AR      sound/pci/hda/built-in.a
  AR      sound/pci/ice1712/built-in.a
  AR      sound/pci/korg1212/built-in.a
  AR      sound/pci/mixart/built-in.a
  AR      sound/pci/nm256/built-in.a
  AR      sound/pci/oxygen/built-in.a
  AR      sound/pci/pcxhr/built-in.a
  AR      sound/pci/riptide/built-in.a
  AR      sound/pci/rme9652/built-in.a
  AR      sound/pci/trident/built-in.a
  AR      sound/pci/ymfpci/built-in.a
  AR      sound/pci/vx222/built-in.a
  AR      sound/pci/built-in.a
  AR      sound/ppc/built-in.a
  AR      sound/arm/built-in.a
  AR      sound/sh/built-in.a
  CC      net/core/neighbour.o
  AR      sound/synth/emux/built-in.a
  AR      sound/synth/built-in.a
  AR      sound/usb/misc/built-in.a
  AR      sound/usb/usx2y/built-in.a
  AR      sound/usb/caiaq/built-in.a
  AR      sound/usb/6fire/built-in.a
  AR      sound/usb/hiface/built-in.a
  AR      sound/usb/bcd2000/built-in.a
  CC      sound/usb/card.o
  AR      net/bpf/built-in.a
  CC      net/ethtool/ioctl.o
  CC      lib/crypto/curve25519-generic.o
  CC      drivers/pinctrl/pinctrl-utils.o
  CC      lib/crypto/curve25519.o
  CC      sound/usb/clock.o
  CC      lib/crypto/des.o
  CC      drivers/pinctrl/pinmux.o
  CC      sound/usb/endpoint.o
  CC      drivers/pinctrl/pinconf.o
  CC      lib/crypto/sha256.o
  CC      drivers/pinctrl/devicetree.o
  CC      net/ethtool/common.o
  CC      fs/cifs/inode.o
  CC      net/core/rtnetlink.o
  CC      sound/usb/format.o
  CC      drivers/pinctrl/pinconf-generic.o
  AR      lib/crypto/built-in.a
  CC      lib/zlib_inflate/inffast.o
  CC      net/ethtool/netlink.o
  CC      lib/zlib_inflate/inflate.o
  CC      drivers/pinctrl/pinctrl-rockchip.o
  CC      sound/usb/helper.o
  CC      lib/zlib_inflate/infutil.o
  CC      sound/usb/mixer.o
  CC      lib/zlib_inflate/inftrees.o
  CC      net/ethtool/bitset.o
  CC      lib/zlib_inflate/inflate_syms.o
  AR      lib/zlib_inflate/built-in.a
  CC      lib/zlib_deflate/deflate.o
  CC      drivers/pinctrl/pinctrl-rk805.o
  CC      net/ethtool/strset.o
  CC      lib/zlib_deflate/deftree.o
  CC      fs/cifs/link.o
  CC      sound/usb/mixer_quirks.o
  CC      drivers/pinctrl/pinctrl-rk806.o
  CC      lib/zlib_deflate/deflate_syms.o
  CC      net/core/utils.o
  AR      lib/zlib_deflate/built-in.a
  CC      lib/reed_solomon/reed_solomon.o
  CC      net/ethtool/linkinfo.o
  AR      drivers/pinctrl/built-in.a
  CC      drivers/gpio/gpiolib.o
  CC      fs/cifs/misc.o
  CC      sound/usb/mixer_scarlett.o
  CC      net/core/link_watch.o
  AR      lib/reed_solomon/built-in.a
  CC      lib/lzo/lzo1x_compress.o
  CC      net/ethtool/linkmodes.o
  CC      sound/usb/mixer_scarlett_gen2.o
  CC      lib/lzo/lzo1x_decompress_safe.o
  CC      net/core/filter.o
  AR      lib/lzo/built-in.a
  CC      lib/lz4/lz4_decompress.o
  CC      net/ethtool/linkstate.o
  CC      fs/cifs/netmisc.o
  CC      sound/usb/mixer_us16x08.o
  CC      drivers/gpio/gpiolib-devres.o
  CC      net/ethtool/debug.o
  CC      sound/usb/mixer_s1810c.o
  CC      fs/cifs/smbencrypt.o
  AR      lib/lz4/built-in.a
  CC      drivers/gpio/gpiolib-legacy.o
  CC      lib/zstd/fse_compress.o
  CC      sound/usb/pcm.o
  CC      net/ethtool/wol.o
  CC      drivers/gpio/gpiolib-of.o
  CC      lib/zstd/huf_compress.o
  CC      fs/cifs/transport.o
  CC      drivers/gpio/gpiolib-cdev.o
  CC      net/ethtool/features.o
  CC      lib/zstd/compress.o
  CC      sound/usb/power.o
  CC      sound/usb/proc.o
  CC      net/ethtool/privflags.o
  CC      sound/usb/quirks.o
  CC      drivers/gpio/gpiolib-sysfs.o
  CC      fs/cifs/asn1.o
  CC      net/ethtool/rings.o
  CC      sound/usb/stream.o
  CC      drivers/gpio/gpio-mmio.o
  CC      net/ethtool/channels.o
  CC      fs/cifs/cifs_unicode.o
  CC      net/core/sock_diag.o
  CC      drivers/gpio/gpio-pca953x.o
  CC      sound/usb/validate.o
  CC      net/ethtool/coalesce.o
  CC      sound/usb/media.o
  CC      net/core/dev_ioctl.o
  CC      fs/cifs/nterr.o
  CC      drivers/gpio/gpio-rockchip.o
  CC      sound/usb/midi.o
  CC      fs/cifs/cifsencrypt.o
  CC      net/ethtool/pause.o
  CC      drivers/gpio/gpio-firefly-gl3321g.o
  CC      net/core/tso.o
  CC      drivers/gpio/gpio-firefly.o
  CC      net/ethtool/eee.o
  AR      sound/usb/built-in.a
  AR      sound/firewire/built-in.a
  AR      sound/sparc/built-in.a
  AR      sound/spi/built-in.a
  AR      sound/parisc/built-in.a
  AR      sound/pcmcia/vx/built-in.a
  AR      sound/pcmcia/pdaudiocf/built-in.a
  AR      sound/pcmcia/built-in.a
  AR      sound/mips/built-in.a
  CC      sound/soc/codecs/dummy-codec.o
  CC      fs/cifs/readdir.o
  CC      drivers/gpio/gpio-sub-position.o
  CC      net/core/sock_reuseport.o
  CC      sound/soc/codecs/es7202.o
  AR      drivers/gpio/built-in.a
  CC      drivers/pwm/core.o
  CC      net/ethtool/tsinfo.o
  CC      net/core/fib_notifier.o
  CC      sound/soc/codecs/es7243e.o
  CC      net/ethtool/cabletest.o
  CC      fs/cifs/ioctl.o
  CC      drivers/pwm/sysfs.o
  CC      net/core/xdp.o
  CC      drivers/pwm/pwm-rockchip.o
  CC      sound/soc/codecs/es8311.o
  CC      net/ethtool/tunnels.o
  CC      fs/cifs/sess.o
  CC      drivers/pwm/pwm-firefly-demo.o
  CC      net/core/flow_offload.o
  CC      sound/soc/codecs/es8316.o
  AR      drivers/pwm/built-in.a
  CC      drivers/pci/pcie/portdrv_core.o
  AR      net/ethtool/built-in.a
  CC [M]  net/netfilter/ipvs/ip_vs_conn.o
  CC      drivers/pci/pcie/portdrv_pci.o
  CC      sound/soc/codecs/es8323.o
  CC      net/core/net-sysfs.o
  CC      fs/cifs/export.o
  CC      drivers/pci/pcie/err.o
  CC      lib/zstd/entropy_common.o
  CC      sound/soc/codecs/es8326.o
  CC      lib/zstd/fse_decompress.o
  CC      drivers/pci/pcie/aspm.o
  CC [M]  net/netfilter/ipvs/ip_vs_core.o
  CC      lib/zstd/zstd_common.o
  CC      fs/cifs/smb1ops.o
  CC      lib/zstd/huf_decompress.o
  CC      sound/soc/codecs/max98090.o
  CC      net/core/page_pool.o
  CC      drivers/pci/pcie/aspm_ext.o
  CC      sound/soc/codecs/hdmi-codec.o
  CC      net/core/net-procfs.o
  CC      drivers/pci/pcie/pme.o
  CC      fs/cifs/winucase.o
  CC      fs/cifs/smb2ops.o
  CC [M]  net/netfilter/ipvs/ip_vs_ctl.o
  CC      lib/zstd/decompress.o
  AR      drivers/pci/pcie/built-in.a
  CC      drivers/pci/controller/dwc/pcie-designware.o
  CC      sound/soc/codecs/rk3308_codec.o
  CC      net/core/fib_rules.o
  CC      drivers/pci/controller/dwc/pcie-designware-host.o
  CC      drivers/pci/controller/dwc/pcie-dw-rockchip.o
  AR      lib/zstd/built-in.a
  CC      net/core/net-traces.o
  CC      lib/xz/xz_dec_syms.o
  CC      lib/xz/xz_dec_stream.o
  CC      sound/soc/codecs/rk3328_codec.o
  CC [M]  net/netfilter/ipvs/ip_vs_sched.o
  CC      lib/xz/xz_dec_lzma2.o
  CC      sound/soc/codecs/rk817_codec.o
  CC [M]  net/netfilter/ipvs/ip_vs_xmit.o
  CC      lib/xz/xz_dec_bcj.o
  CC      drivers/pci/controller/dwc/pcie-al.o
  CC      fs/cifs/smb2maperror.o
  AR      lib/xz/built-in.a
  CC      lib/raid6/algos.o
  CC      sound/soc/codecs/rk_codec_digital.o
  CC      drivers/pci/controller/dwc/pcie-dw-rockchip-acpi.o
  CC      lib/raid6/recov.o
  CC      drivers/pci/controller/dwc/pcie-hisi.o
  CC      fs/cifs/smb2transport.o
  CC [M]  net/netfilter/ipvs/ip_vs_app.o
  HOSTCC  lib/raid6/mktables
  CC      sound/soc/codecs/rl6231.o
  UNROLL  lib/raid6/int1.c
  UNROLL  lib/raid6/int2.c
  UNROLL  lib/raid6/int4.c
  UNROLL  lib/raid6/int8.c
  UNROLL  lib/raid6/int16.c
  UNROLL  lib/raid6/int32.c
  CC      lib/raid6/neon.o
  AR      drivers/pci/controller/dwc/built-in.a
  AR      drivers/pci/controller/mobiveil/built-in.a
  CC      drivers/pci/controller/pcie-rockchip-host.o
  CC      sound/soc/codecs/rt5616.o
  UNROLL  lib/raid6/neon1.c
  CC      net/core/ptp_classifier.o
  UNROLL  lib/raid6/neon2.c
  UNROLL  lib/raid6/neon4.c
  UNROLL  lib/raid6/neon8.c
  CC      lib/raid6/recov_neon.o
  CC [M]  net/netfilter/ipvs/ip_vs_sync.o
  CC      lib/raid6/recov_neon_inner.o
  CC      fs/cifs/smb2misc.o
  CC      sound/soc/codecs/rt5640.o
  CC      drivers/pci/controller/pcie-rockchip.o
  CC      net/core/netprio_cgroup.o
  TABLE   lib/raid6/tables.c
  CC      lib/raid6/int1.o
  CC      drivers/pci/controller/pci-thunder-ecam.o
  CC      lib/raid6/int2.o
  CC      net/core/netclassid_cgroup.o
  CC      sound/soc/codecs/rt5645.o
  CC      drivers/pci/controller/pci-thunder-pem.o
  CC      fs/cifs/smb2pdu.o
  CC      lib/raid6/int4.o
  CC [M]  net/netfilter/ipvs/ip_vs_est.o
  CC      drivers/pci/controller/pci-xgene.o
  CC      lib/raid6/int8.o
  CC      net/core/dst_cache.o
  AR      drivers/pci/controller/built-in.a
  AR      drivers/pci/switch/built-in.a
  CC      drivers/pci/access.o
  CC [M]  net/netfilter/ipvs/ip_vs_proto.o
  CC      sound/soc/codecs/rt5651.o
  CC      lib/raid6/int16.o
  CC      net/core/gro_cells.o
  CC      drivers/pci/bus.o
  CC      lib/raid6/int32.o
  CC [M]  net/netfilter/ipvs/ip_vs_pe.o
  CC      sound/soc/codecs/spdif_receiver.o
  CC      lib/raid6/neon1.o
  CC      drivers/pci/probe.o
  CC      net/core/failover.o
  CC      lib/raid6/neon2.o
  CC      sound/soc/codecs/spdif_transmitter.o
  CC      lib/raid6/neon4.o
  CC [M]  net/netfilter/ipvs/ip_vs_proto_tcp.o
  CC      net/core/bpf_sk_storage.o
  CC      sound/soc/codecs/ts3a227e.o
  CC      lib/raid6/neon8.o
  CC      fs/cifs/smb2inode.o
  CC      drivers/pci/host-bridge.o
  CC      lib/raid6/tables.o
  AR      sound/soc/codecs/built-in.a
  CC      sound/soc/generic/simple-card-utils.o
  CC [M]  net/netfilter/ipvs/ip_vs_proto_udp.o
  CC      drivers/pci/remove.o
  AR      net/core/built-in.a
  CC      net/ipv4/netfilter/nf_defrag_ipv4.o
  AR      lib/raid6/built-in.a
  CC      lib/mpi/generic_mpih-lshift.o
  CC      sound/soc/generic/simple-card.o
  CC      drivers/pci/pci.o
  CC      lib/mpi/generic_mpih-mul1.o
  CC      fs/cifs/smb2file.o
  CC [M]  net/netfilter/ipvs/ip_vs_nfct.o
  CC      net/ipv4/netfilter/nf_socket_ipv4.o
  CC      lib/mpi/generic_mpih-mul2.o
  AR      sound/soc/generic/built-in.a
  AR      sound/soc/adi/built-in.a
  AR      sound/soc/amd/built-in.a
  AR      sound/soc/atmel/built-in.a
  AR      sound/soc/au1x/built-in.a
  AR      sound/soc/bcm/built-in.a
  AR      sound/soc/cirrus/built-in.a
  AR      sound/soc/dwc/built-in.a
  AR      sound/soc/fsl/built-in.a
  AR      sound/soc/hisilicon/built-in.a
  AR      sound/soc/jz4740/built-in.a
  AR      sound/soc/img/built-in.a
  AR      sound/soc/intel/common/built-in.a
  AR      sound/soc/intel/boards/built-in.a
  AR      sound/soc/intel/built-in.a
  AR      sound/soc/mediatek/built-in.a
  AR      sound/soc/meson/built-in.a
  AR      sound/soc/mxs/built-in.a
  AR      sound/soc/kirkwood/built-in.a
  AR      sound/soc/pxa/built-in.a
  AR      sound/soc/qcom/built-in.a
  CC      sound/soc/rockchip/rockchip_i2s.o
  CC      lib/mpi/generic_mpih-mul3.o
  CC [M]  net/netfilter/ipvs/ip_vs_rr.o
  CC      lib/mpi/generic_mpih-rshift.o
  CC      fs/cifs/cifsacl.o
  CC      net/ipv4/netfilter/nf_tproxy_ipv4.o
  CC      sound/soc/rockchip/rockchip_i2s_tdm.o
  CC      lib/mpi/generic_mpih-sub1.o
  LD [M]  net/netfilter/ipvs/ip_vs.o
  CC      lib/mpi/generic_mpih-add1.o
  CC      net/netfilter/core.o
  CC      net/ipv4/netfilter/nf_reject_ipv4.o
  CC      lib/mpi/ec.o
  CC      drivers/pci/pci-driver.o
  CC      sound/soc/rockchip/rockchip_pdm.o
  CC      fs/cifs/fs_context.o
  CC      net/ipv4/netfilter/nft_reject_ipv4.o
  CC      net/netfilter/nf_log.o
  CC      sound/soc/rockchip/rockchip_spdif.o
  CC      lib/mpi/mpicoder.o
  CC      drivers/pci/search.o
  CC      fs/cifs/xattr.o
  CC      net/ipv4/netfilter/nft_fib_ipv4.o
  CC      sound/soc/rockchip/rockchip_spdifrx.o
  CC      net/netfilter/nf_queue.o
  CC      drivers/pci/pci-sysfs.o
  CC      lib/mpi/mpi-add.o
  CC      sound/soc/rockchip/rockchip_hdmi.o
  CC      lib/mpi/mpi-bit.o
  CC      fs/cifs/cifs_spnego.o
  CC      net/ipv4/netfilter/nft_dup_ipv4.o
  CC      drivers/pci/rom.o
  CC      sound/soc/rockchip/rockchip_max98090.o
  CC      net/netfilter/nf_sockopt.o
  CC      lib/mpi/mpi-cmp.o
  CC      net/ipv4/netfilter/ip_tables.o
  CC      lib/mpi/mpi-sub-ui.o
  CC      drivers/pci/setup-res.o
  CC      sound/soc/rockchip/rockchip_multicodecs.o
  CC      fs/cifs/dns_resolve.o
  CC      net/netfilter/utils.o
  CC      lib/mpi/mpi-div.o
  CC      drivers/pci/irq.o
  CC      sound/soc/rockchip/firefly_multicodecs.o
  CC      lib/mpi/mpi-inv.o
  CC      drivers/pci/vpd.o
  CC      fs/cifs/cifs_dfs_ref.o
  CC      net/netfilter/nfnetlink.o
  CC      lib/mpi/mpi-mod.o
  CC      net/ipv4/netfilter/iptable_filter.o
  CC      sound/soc/rockchip/rockchip_rt5645.o
  CC      drivers/pci/setup-bus.o
  CC      lib/mpi/mpi-mul.o
  AR      sound/soc/rockchip/built-in.a
  AR      sound/soc/samsung/built-in.a
  AR      sound/soc/sh/built-in.a
  AR      sound/soc/sirf/built-in.a
  CC      net/netfilter/nfnetlink_osf.o
  CC      lib/mpi/mpih-cmp.o
  CC      net/ipv4/netfilter/iptable_mangle.o
  AR      sound/soc/sof/built-in.a
  AR      sound/soc/spear/built-in.a
  AR      sound/soc/sprd/built-in.a
  AR      sound/soc/sti/built-in.a
  AR      sound/soc/stm/built-in.a
  AR      sound/soc/sunxi/built-in.a
  CC      fs/cifs/dfs_cache.o
  AR      sound/soc/tegra/built-in.a
  AR      sound/soc/ti/built-in.a
  AR      sound/soc/txx9/built-in.a
  AR      sound/soc/uniphier/built-in.a
  AR      sound/soc/ux500/built-in.a
  AR      sound/soc/xilinx/built-in.a
  AR      sound/soc/xtensa/built-in.a
  AR      sound/soc/zte/built-in.a
  CC      sound/soc/soc-core.o
  CC      lib/mpi/mpih-div.o
  CC      net/ipv4/netfilter/iptable_nat.o
  CC      drivers/pci/vc.o
  CC      net/netfilter/nf_conntrack_core.o
  CC      lib/mpi/mpih-mul.o
  CC      drivers/pci/mmap.o
  CC      lib/mpi/mpi-pow.o
  CC      net/ipv4/netfilter/ipt_REJECT.o
  AR      fs/cifs/built-in.a
  CC      fs/ntfs/aops.o
  CC      drivers/pci/setup-irq.o
  CC      lib/mpi/mpiutil.o
  CC      sound/soc/soc-dapm.o
  CC      drivers/pci/proc.o
  CC      net/ipv4/netfilter/nf_dup_ipv4.o
  CC      fs/ntfs/attrib.o
  AR      lib/mpi/built-in.a
  CC      lib/fonts/fonts.o
  CC      net/netfilter/nf_conntrack_standalone.o
  CC      drivers/pci/slot.o
  CC      lib/fonts/font_8x8.o
  CC      lib/fonts/font_8x16.o
  AR      net/ipv4/netfilter/built-in.a
  CC      net/ipv4/route.o
  AR      lib/fonts/built-in.a
  CC      lib/argv_split.o
  CC      fs/ntfs/collate.o
  CC      drivers/pci/of.o
  CC      lib/bug.o
  CC      net/netfilter/nf_conntrack_expect.o
  CC      fs/ntfs/compress.o
  CC      lib/clz_tab.o
  CC      drivers/pci/quirks.o
  CC      lib/cmdline.o
  CC      lib/cpumask.o
  CC      sound/soc/soc-jack.o
  CC      lib/ctype.o
  CC      lib/dec_and_lock.o
  CC      fs/ntfs/debug.o
  CC      net/netfilter/nf_conntrack_helper.o
  CC      lib/decompress.o
  CC      lib/decompress_bunzip2.o
  CC      sound/soc/soc-utils.o
  CC      fs/ntfs/dir.o
  CC      net/ipv4/inetpeer.o
  CC      lib/decompress_inflate.o
  CC      sound/soc/soc-dai.o
  CC      lib/decompress_unlz4.o
  CC      net/netfilter/nf_conntrack_proto.o
  CC      fs/ntfs/file.o
  CC      sound/soc/soc-component.o
  CC      lib/decompress_unlzma.o
  CC      net/ipv4/protocol.o
  CC      fs/ntfs/index.o
  CC      lib/decompress_unlzo.o
  CC      drivers/pci/msi.o
  CC      net/netfilter/nf_conntrack_proto_generic.o
  CC      sound/soc/soc-pcm.o
  CC      fs/ntfs/inode.o
  CC      net/ipv4/ip_input.o
  CC      lib/decompress_unxz.o
  CC      lib/decompress_unzstd.o
  CC      net/netfilter/nf_conntrack_proto_tcp.o
  CC      lib/dump_stack.o
  CC      drivers/pci/pci-label.o
  CC      fs/ntfs/mft.o
  CC      net/ipv4/ip_fragment.o
  CC      lib/earlycpio.o
  CC      lib/extable.o
  CC      drivers/pci/syscall.o
  CC      sound/soc/soc-devres.o
  CC      lib/fdt.o
  CC      fs/ntfs/mst.o
  CC      lib/fdt_addresses.o
  CC      lib/fdt_empty_tree.o
  CC      net/netfilter/nf_conntrack_proto_udp.o
  AR      drivers/pci/built-in.a
  CC      lib/fdt_ro.o
  CC      drivers/video/console/dummycon.o
  CC      fs/ntfs/namei.o
  CC      sound/soc/soc-ops.o
  CC      net/ipv4/ip_forward.o
  CC      lib/fdt_rw.o
  AR      drivers/video/console/built-in.a
  CC      drivers/video/backlight/backlight.o
  CC      fs/ntfs/runlist.o
  CC      lib/fdt_strerror.o
  CC      lib/fdt_sw.o
  CC      sound/soc/soc-link.o
  CC      net/netfilter/nf_conntrack_proto_icmp.o
  CC      lib/fdt_wip.o
  CC      lib/flex_proportions.o
  CC      net/ipv4/ip_options.o
  CC      drivers/video/backlight/pwm_bl.o
  CC      fs/ntfs/super.o
  CC      lib/idr.o
  CC      sound/soc/soc-card.o
  CC      net/netfilter/nf_conntrack_extend.o
  CC      lib/irq_regs.o
  CC      sound/soc/soc-generic-dmaengine-pcm.o
  CC      lib/is_single_threaded.o
  AR      drivers/video/backlight/built-in.a
  CC      drivers/video/rockchip/rga3/rga_drv.o
  CC      net/ipv4/ip_output.o
  CC      lib/klist.o
  CC      fs/ntfs/sysctl.o
  CC      fs/ntfs/unistr.o
  CC      lib/kobject.o
  CC      net/netfilter/nf_conntrack_acct.o
  AR      sound/soc/built-in.a
  AR      sound/atmel/built-in.a
  AR      sound/hda/built-in.a
  AR      sound/x86/built-in.a
  AR      sound/xen/built-in.a
  CC      sound/sound_core.o
  CC      fs/ntfs/upcase.o
  CC      sound/last.o
  CC      drivers/video/rockchip/rga3/rga_common.o
  CC      lib/kobject_uevent.o
  AR      sound/built-in.a
  AR      fs/ntfs/built-in.a
  CC      fs/jffs2/compr.o
  CC      net/xfrm/xfrm_policy.o
  CC      net/netfilter/nf_conntrack_seqadj.o
  CC      drivers/video/rockchip/rga3/rga3_reg_info.o
  CC      fs/jffs2/dir.o
  CC      net/ipv4/ip_sockglue.o
  CC      lib/logic_pio.o
  CC      net/netfilter/nf_conntrack_proto_icmpv6.o
  CC      fs/jffs2/file.o
  CC      lib/memcat_p.o
  CC      lib/nmi_backtrace.o
  CC      drivers/video/rockchip/rga3/rga_iommu.o
  CC      fs/jffs2/ioctl.o
  CC      lib/nodemask.o
  CC      net/netfilter/nf_conntrack_proto_dccp.o
  CC      fs/jffs2/nodelist.o
  CC      net/ipv4/inet_hashtables.o
  CC      lib/plist.o
  CC      drivers/video/rockchip/rga3/rga_dma_buf.o
  CC      lib/radix-tree.o
  CC      fs/jffs2/malloc.o
  CC      net/netfilter/nf_conntrack_proto_sctp.o
  CC      drivers/video/rockchip/rga3/rga_job.o
  CC      fs/jffs2/read.o
  CC      net/xfrm/xfrm_state.o
  CC      lib/ratelimit.o
  CC      lib/rbtree.o
  CC      fs/jffs2/nodemgmt.o
  CC      net/ipv4/inet_timewait_sock.o
  CC      lib/seq_buf.o
  CC      net/netfilter/nf_conntrack_ftp.o
  CC      drivers/video/rockchip/rga3/rga_hw_config.o
  CC      lib/sha1.o
  CC      fs/jffs2/readinode.o
  CC      lib/show_mem.o
  CC      net/ipv4/inet_connection_sock.o
  CC      drivers/video/rockchip/rga3/rga2_reg_info.o
  CC      lib/siphash.o
  CC      net/netfilter/nf_conntrack_tftp.o
  CC      fs/jffs2/write.o
  CC      lib/string.o
  CC      net/xfrm/xfrm_hash.o
  CC      fs/jffs2/scan.o
  CC      drivers/video/rockchip/rga3/rga_policy.o
  CC      net/netfilter/nf_nat_core.o
  CC      net/xfrm/xfrm_input.o
  CC      net/ipv4/tcp.o
  CC      lib/timerqueue.o
  CC      lib/vsprintf.o
  CC      fs/jffs2/gc.o
  CC      drivers/video/rockchip/rga3/rga_mm.o
  CC      net/netfilter/nf_nat_proto.o
  CC      net/xfrm/xfrm_output.o
  CC      fs/jffs2/symlink.o
  CC      fs/jffs2/build.o
  CC      drivers/video/rockchip/rga3/rga_fence.o
  CC      fs/jffs2/erase.o
  CC      net/xfrm/xfrm_sysctl.o
  CC      net/netfilter/nf_nat_helper.o
  CC      drivers/video/rockchip/rga3/rga_debugger.o
  CC      lib/win_minmax.o
  CC      net/ipv4/tcp_input.o
  CC      fs/jffs2/background.o
  CC      lib/xarray.o
  CC      net/xfrm/xfrm_replay.o
  CC      fs/jffs2/fs.o
  CC      net/netfilter/nf_nat_redirect.o
  AR      drivers/video/rockchip/rga3/built-in.a
  CC      drivers/video/rockchip/iep/hw_iep_reg.o
  CC      lib/lockref.o
  CC      fs/jffs2/writev.o
  CC      lib/bcd.o
  CC      lib/sort.o
  CC      net/xfrm/xfrm_device.o
  CC      drivers/video/rockchip/iep/iep_drv.o
  CC      net/netfilter/nf_nat_masquerade.o
  CC      lib/parser.o
  CC      fs/jffs2/super.o
  CC      lib/debug_locks.o
  CC      lib/random32.o
  CC      net/xfrm/xfrm_algo.o
  CC      fs/jffs2/debug.o
  CC      drivers/video/rockchip/iep/iep_iommu_ops.o
  CC      net/netfilter/nf_nat_ftp.o
  CC      lib/bust_spinlocks.o
  CC      fs/jffs2/wbuf.o
  CC      drivers/video/rockchip/iep/iep_iommu_drm.o
  CC      lib/kasprintf.o
  CC      net/xfrm/xfrm_user.o
  CC      lib/bitmap.o
  AR      drivers/video/rockchip/iep/built-in.a
  CC      net/netfilter/nf_nat_tftp.o
  CC      drivers/video/rockchip/mpp/mpp_service.o
  CC      fs/jffs2/compr_rtime.o
  CC      net/ipv4/tcp_output.o
  CC      lib/scatterlist.o
  CC      drivers/video/rockchip/mpp/mpp_common.o
  CC      fs/jffs2/compr_zlib.o
  CC      net/netfilter/nf_conncount.o
  AR      fs/jffs2/built-in.a
  CC      fs/ubifs/shrinker.o
  CC      lib/list_sort.o
  CC      lib/uuid.o
  AR      net/xfrm/built-in.a
  CC      net/unix/af_unix.o
  CC      lib/iov_iter.o
  CC      fs/ubifs/journal.o
  CC      net/netfilter/nf_dup_netdev.o
  CC      drivers/video/rockchip/mpp/mpp_iommu.o
  CC      net/netfilter/nf_tables_core.o
  CC      fs/ubifs/file.o
  CC      drivers/video/rockchip/mpp/mpp_rkvdec.o
  CC      net/ipv4/tcp_timer.o
  CC      net/netfilter/nf_tables_api.o
  CC      net/unix/garbage.o
  CC      lib/clz_ctz.o
  CC      lib/bsearch.o
  CC      fs/ubifs/dir.o
  CC      drivers/video/rockchip/mpp/mpp_rkvdec2.o
  CC      lib/find_bit.o
  CC      lib/llist.o
  CC      net/ipv4/tcp_ipv4.o
  CC      lib/memweight.o
  CC      net/unix/sysctl_net_unix.o
  CC      lib/kfifo.o
  CC      fs/ubifs/super.o
  CC      drivers/video/rockchip/mpp/mpp_rkvdec2_link.o
  CC      net/unix/scm.o
  CC      lib/percpu-refcount.o
  CC      lib/rhashtable.o
  AR      net/unix/built-in.a
  CC      net/ipv6/netfilter/ip6_tables.o
  CC      fs/ubifs/sb.o
  CC      net/ipv4/tcp_minisocks.o
  CC      lib/once.o
  CC      drivers/video/rockchip/mpp/mpp_rkvenc.o
  CC      lib/refcount.o
  CC      lib/usercopy.o
  CC      fs/ubifs/io.o
  CC      lib/errseq.o
  CC      lib/bucket_locks.o
  CC      net/ipv4/tcp_cong.o
  CC      net/ipv6/netfilter/ip6table_filter.o
  CC      drivers/video/rockchip/mpp/mpp_rkvenc2.o
  CC      lib/generic-radix-tree.o
  CC      fs/ubifs/tnc.o
  CC      net/netfilter/nft_chain_filter.o
  CC      lib/string_helpers.o
  CC      net/ipv6/netfilter/ip6table_mangle.o
  CC      net/ipv4/tcp_metrics.o
  CC      lib/hexdump.o
  CC      lib/kstrtox.o
  CC      drivers/video/rockchip/mpp/mpp_vdpu1.o
  CC      net/netfilter/nf_tables_trace.o
  CC      net/ipv6/netfilter/ip6table_raw.o
  CC      lib/pci_iomap.o
  CC      net/ipv4/tcp_fastopen.o
  CC      drivers/video/rockchip/mpp/mpp_vepu1.o
  CC      fs/ubifs/master.o
  CC      lib/iomap_copy.o
  CC      net/netfilter/nft_immediate.o
  CC      net/ipv6/netfilter/ip6table_nat.o
  CC      lib/devres.o
  CC      drivers/video/rockchip/mpp/mpp_vdpu2.o
  CC      fs/ubifs/scan.o
  CC      net/netfilter/nft_cmp.o
  CC      net/ipv4/tcp_rate.o
  CC      lib/hweight.o
  CC      lib/interval_tree.o
  CC      net/ipv6/netfilter/nf_defrag_ipv6_hooks.o
  CC      lib/assoc_array.o
  CC      fs/ubifs/replay.o
  CC      drivers/video/rockchip/mpp/mpp_vepu2.o
  CC      net/netfilter/nft_range.o
  CC      net/ipv4/tcp_recovery.o
  CC      net/ipv6/netfilter/nf_conntrack_reasm.o
  CC      lib/bitrev.o
  CC      lib/linear_ranges.o
  CC      net/netfilter/nft_bitwise.o
  CC      drivers/video/rockchip/mpp/mpp_iep2.o
  CC      fs/ubifs/log.o
  CC      lib/crc-ccitt.o
  CC      net/ipv4/tcp_ulp.o
  CC      lib/crc16.o
  CC      net/netfilter/nft_byteorder.o
  CC      net/ipv6/netfilter/nf_socket_ipv6.o
  CC      lib/crc-t10dif.o
  CC      fs/ubifs/commit.o
  CC      drivers/video/rockchip/mpp/mpp_jpgdec.o
  CC      lib/crc-itu-t.o
  CC      net/ipv4/tcp_offload.o
  CC      net/netfilter/nft_payload.o
  HOSTCC  lib/gen_crc32table
  CC      lib/crc7.o
  CC      drivers/video/rockchip/mpp/mpp_av1dec.o
  CC      fs/ubifs/gc.o
  CC      net/ipv6/netfilter/nf_tproxy_ipv6.o
  CC      lib/libcrc32c.o
  CC      net/ipv4/datagram.o
  CC      lib/xxhash.o
  CC      net/netfilter/nft_lookup.o
  CC      fs/ubifs/orphan.o
  CC      drivers/video/rockchip/mpp/mpp_iommu_av1d.o
  CC      net/ipv6/netfilter/nf_reject_ipv6.o
  CC      lib/genalloc.o
  CC      net/ipv4/raw.o
  CC      net/netfilter/nft_dynset.o
  CC      lib/percpu_counter.o
  CC      drivers/video/rockchip/mpp/hack/mpp_hack_px30.o
  CC      fs/ubifs/budget.o
  CC      net/ipv6/netfilter/nft_reject_ipv6.o
  CC      lib/audit.o
  AR      drivers/video/rockchip/mpp/built-in.a
  AR      drivers/video/rockchip/built-in.a
  CC      drivers/video/fbdev/core/fb_cmdline.o
  CC      net/netfilter/nft_meta.o
  CC      lib/compat_audit.o
  CC      fs/ubifs/find.o
  CC      lib/syscall.o
  CC      net/ipv6/netfilter/ip6t_REJECT.o
  CC      drivers/video/fbdev/core/fb_notify.o
  CC      net/ipv4/udp.o
  CC      lib/dynamic_debug.o
  CC      drivers/video/fbdev/core/fbmem.o
  CC      fs/ubifs/tnc_commit.o
  CC      net/netfilter/nft_rt.o
  AR      net/ipv6/netfilter/built-in.a
  CC      net/ipv6/af_inet6.o
  CC      lib/errname.o
  CC      lib/nlattr.o
  CC      fs/ubifs/compress.o
  CC      net/netfilter/nft_exthdr.o
  CC      drivers/video/fbdev/core/fbmon.o
  CC      net/ipv6/anycast.o
  CC      fs/ubifs/lpt.o
  CC      drivers/video/fbdev/core/fbcmap.o
  CC      lib/checksum.o
  CC      net/netfilter/nft_chain_route.o
  CC      lib/cpu_rmap.o
  CC      net/ipv4/udplite.o
  CC      drivers/video/fbdev/core/fbsysfs.o
  CC      lib/dynamic_queue_limits.o
  CC      net/ipv6/ip6_output.o
  CC      lib/glob.o
  CC      drivers/video/fbdev/core/modedb.o
  CC      lib/strncpy_from_user.o
  CC      fs/ubifs/lprops.o
  CC      net/ipv4/udp_offload.o
  CC      net/netfilter/nf_tables_offload.o
  CC      lib/strnlen_user.o
  CC      drivers/video/fbdev/core/fbcvt.o
  CC      lib/net_utils.o
  CC      net/netfilter/nft_set_hash.o
  CC      fs/ubifs/recovery.o
  CC      drivers/video/fbdev/core/fb_defio.o
  CC      net/ipv4/arp.o
  CC      lib/sg_pool.o
  CC      net/ipv6/ip6_input.o
  CC      drivers/video/fbdev/core/fbcon.o
  CC      lib/asn1_decoder.o
  CC      fs/ubifs/ioctl.o
  CC      net/netfilter/nft_set_bitmap.o
  GEN     lib/oid_registry_data.c
  CC      lib/ucs2_string.o
  CC      net/ipv4/icmp.o
  CC      lib/sbitmap.o
  CC      fs/ubifs/lpt_commit.o
  CC      net/netfilter/nft_set_rbtree.o
  CC      net/ipv6/addrconf.o
  CC      drivers/video/fbdev/core/bitblit.o
  AR      lib/lib.a
  GEN     lib/crc32table.h
  CC      lib/oid_registry.o
  CC      lib/crc32.o
  CC      net/ipv4/devinet.o
  CC      net/netfilter/nft_set_pipapo.o
  CC      fs/ubifs/tnc_misc.o
  CC      drivers/video/fbdev/core/softcursor.o
  AR      lib/built-in.a
  LDS     scripts/module.lds
  AR      drivers/idle/built-in.a
  AR      drivers/char/ipmi/built-in.a
  CC      drivers/amba/bus.o
  CC      drivers/video/fbdev/core/cfbfillrect.o
  CC      fs/ubifs/debug.o
  CC      drivers/video/fbdev/core/cfbcopyarea.o
  AR      drivers/amba/built-in.a
  AR      drivers/clk/actions/built-in.a
  AR      drivers/clk/analogbits/built-in.a
  AR      drivers/clk/bcm/built-in.a
  AR      drivers/clk/imgtec/built-in.a
  AR      drivers/clk/imx/built-in.a
  AR      drivers/clk/ingenic/built-in.a
  CC      net/netfilter/nft_compat.o
  AR      drivers/clk/mediatek/built-in.a
  AR      drivers/clk/mvebu/built-in.a
  AR      drivers/clk/renesas/built-in.a
  CC      drivers/clk/rockchip/clk.o
  CC      net/ipv4/af_inet.o
  CC      drivers/video/fbdev/core/cfbimgblt.o
  CC      drivers/clk/rockchip/clk-pll.o
  CC      fs/ubifs/misc.o
  CC      drivers/video/fbdev/core/sysfillrect.o
  CC      net/ipv6/addrlabel.o
  CC      net/netfilter/nft_connlimit.o
  CC      fs/ubifs/xattr.o
  CC      drivers/video/fbdev/core/syscopyarea.o
  CC      drivers/clk/rockchip/clk-cpu.o
  CC      net/ipv4/igmp.o
  CC      drivers/clk/rockchip/clk-half-divider.o
  AR      fs/ubifs/built-in.a
  CC      net/ipv6/route.o
  CC      fs/fuse/dev.o
  CC      net/netfilter/nft_numgen.o
  CC      drivers/video/fbdev/core/sysimgblt.o
  CC      drivers/clk/rockchip/clk-mmc-phase.o
  CC      drivers/video/fbdev/core/fb_sys_fops.o
  CC      drivers/clk/rockchip/clk-muxgrf.o
  CC      net/netfilter/nft_ct.o
  CC      drivers/clk/rockchip/clk-ddr.o
  AR      drivers/video/fbdev/core/built-in.a
  AR      drivers/video/fbdev/omap2/omapfb/dss/built-in.a
  AR      drivers/video/fbdev/omap2/omapfb/displays/built-in.a
  AR      drivers/video/fbdev/omap2/omapfb/built-in.a
  AR      drivers/video/fbdev/omap2/built-in.a
  CC      drivers/video/fbdev/vfb.o
  CC      drivers/clk/rockchip/clk-inverter.o
  CC      fs/fuse/dir.o
  CC      drivers/clk/rockchip/clk-pvtm.o
  CC      net/ipv4/fib_frontend.o
  AR      drivers/video/fbdev/built-in.a
  CC      drivers/video/hdmi.o
  CC      net/netfilter/nft_flow_offload.o
  CC      drivers/clk/rockchip/softrst.o
  CC      drivers/video/display_timing.o
  CC      drivers/clk/rockchip/clk-link.o
  CC      drivers/video/videomode.o
  CC      drivers/video/of_display_timing.o
  CC      net/netfilter/nft_limit.o
  CC      drivers/clk/rockchip/clk-px30.o
  CC      fs/fuse/file.o
  CC      drivers/video/of_videomode.o
  CC      net/ipv4/fib_semantics.o
  AR      drivers/video/built-in.a
  AR      drivers/dma/mediatek/built-in.a
  AR      drivers/dma/qcom/built-in.a
  AR      drivers/dma/ti/built-in.a
  CC      drivers/clk/rockchip/clk-rk1808.o
  AR      drivers/dma/xilinx/built-in.a
  CC      drivers/dma/dmaengine.o
  CC      net/ipv6/ip6_fib.o
  CC      net/netfilter/nft_nat.o
  CC      drivers/clk/rockchip/clk-rk3328.o
  CC      drivers/clk/rockchip/clk-rk3399.o
  CC      net/netfilter/nft_objref.o
  CC      drivers/dma/of-dma.o
  CC      net/ipv4/fib_trie.o
  CC      drivers/clk/rockchip/clk-rk3568.o
  CC      drivers/dma/pl330.o
  CC      fs/fuse/inode.o
  CC      net/ipv6/ipv6_sockglue.o
  CC      net/netfilter/nft_quota.o
  CC      drivers/clk/rockchip/clk-rk3588.o
  AR      drivers/clk/rockchip/built-in.a
  AR      drivers/clk/sprd/built-in.a
  AR      drivers/clk/ti/built-in.a
  AR      drivers/clk/versatile/built-in.a
  CC      drivers/clk/clk-devres.o
  CC      net/netfilter/nft_reject.o
  CC      drivers/clk/clk-bulk.o
  CC      fs/fuse/control.o
  CC      net/ipv4/fib_notifier.o
  CC      net/ipv6/ndisc.o
  CC      drivers/clk/clkdev.o
  CC      net/netfilter/nft_reject_inet.o
  AR      drivers/dma/built-in.a
  AR      drivers/soc/bcm/built-in.a
  AR      drivers/soc/fsl/built-in.a
  AR      drivers/soc/imx/built-in.a
  AR      drivers/soc/mediatek/built-in.a
  AR      drivers/soc/amlogic/built-in.a
  AR      drivers/soc/qcom/built-in.a
  AR      drivers/soc/renesas/built-in.a
  CC      drivers/soc/rockchip/rockchip-cpuinfo.o
  CC      fs/fuse/xattr.o
  CC      drivers/clk/clk.o
  CC      drivers/soc/rockchip/grf.o
  CC      net/ipv4/inet_fragment.o
  CC      net/netfilter/nft_tunnel.o
  CC      fs/fuse/acl.o
  CC      drivers/soc/rockchip/io-domain.o
  CC      fs/fuse/readdir.o
  CC      net/ipv6/udp.o
  CC      drivers/soc/rockchip/pm_domains.o
  CC      net/netfilter/nft_counter.o
  CC      net/ipv4/ping.o
  CC      fs/fuse/passthrough.o
  CC      net/netfilter/nft_log.o
  CC      drivers/soc/rockchip/rk_fiq_debugger.o
  CC      fs/fuse/virtio_fs.o
  CC      net/ipv4/ip_tunnel_core.o
  CC      drivers/clk/clk-divider.o
  CC      net/ipv6/udplite.o
  CC      net/netfilter/nft_masq.o
  CC      drivers/soc/rockchip/rk_vendor_storage.o
  CC      drivers/clk/clk-fixed-factor.o
  CC      drivers/soc/rockchip/sdmmc_vendor_storage.o
  AR      fs/fuse/built-in.a
  CC      fs/overlayfs/super.o
  CC      net/ipv6/raw.o
  CC      drivers/clk/clk-fixed-rate.o
  CC      net/netfilter/nft_redir.o
  CC      net/ipv4/gre_offload.o
  CC      drivers/soc/rockchip/mtd_vendor_storage.o
  CC      drivers/clk/clk-gate.o
  CC      drivers/soc/rockchip/rockchip_ipa.o
  CC      fs/overlayfs/namei.o
  CC      net/ipv4/metrics.o
  CC      net/netfilter/nft_hash.o
  CC      drivers/clk/clk-multiplier.o
  CC      drivers/soc/rockchip/rockchip_opp_select.o
  CC      net/ipv6/icmp.o
  CC      drivers/clk/clk-mux.o
  CC      net/netfilter/nft_fib.o
  CC      fs/overlayfs/util.o
  CC      net/ipv4/netlink.o
  CC      drivers/clk/clk-composite.o
  CC      drivers/clk/clk-fractional-divider.o
  CC      net/netfilter/nft_socket.o
  CC      fs/overlayfs/inode.o
  CC      net/ipv4/nexthop.o
  CC      drivers/soc/rockchip/rockchip_pvtm.o
  CC      net/ipv6/mcast.o
  CC      drivers/clk/clk-gpio.o
  CC      drivers/clk/clk-conf.o
  CC      drivers/soc/rockchip/rockchip_pm_config.o
  CC      fs/overlayfs/file.o
  CC      net/netfilter/nft_osf.o
  CC      drivers/clk/clk-pwm.o
  CC      drivers/soc/rockchip/rockchip_system_monitor.o
  CC      drivers/clk/clk-rk808.o
  CC      fs/overlayfs/dir.o
  CC      net/netfilter/nft_tproxy.o
  CC      net/ipv4/udp_tunnel_stub.o
  CC      drivers/clk/clk-scmi.o
  CC      net/ipv6/reassembly.o
  CC      fs/overlayfs/readdir.o
  AR      drivers/clk/built-in.a
  CC      drivers/virtio/virtio.o
  CC      net/ipv4/ip_tunnel.o
  CC      drivers/soc/rockchip/rockchip_debug.o
  CC      net/netfilter/nft_chain_nat.o
  CC      drivers/soc/rockchip/rk_dmabuf_procfs.o
  CC      drivers/virtio/virtio_ring.o
  CC      fs/overlayfs/copy_up.o
  CC      net/ipv6/tcp_ipv6.o
  CC      net/netfilter/nft_dup_netdev.o
  AR      drivers/soc/rockchip/built-in.a
  AR      drivers/soc/sunxi/built-in.a
  AR      drivers/soc/ti/built-in.a
  AR      drivers/soc/xilinx/built-in.a
  AR      drivers/soc/built-in.a
  CC      drivers/vdpa/vdpa.o
  CC      fs/overlayfs/export.o
  CC      net/ipv4/sysctl_net_ipv4.o
  AR      drivers/vdpa/built-in.a
  CC      drivers/regulator/core.o
  CC      net/netfilter/nft_fwd_netdev.o
  CC      drivers/virtio/virtio_mmio.o
  AR      fs/overlayfs/built-in.a
  CC      fs/xfs/xfs_trace.o
  CC      drivers/virtio/virtio_pci_modern.o
  CC      net/netfilter/nf_flow_table_core.o
  CC      net/ipv4/proc.o
  CC      net/ipv6/ping.o
  CC      drivers/virtio/virtio_pci_common.o
  CC      net/ipv4/fib_rules.o
  CC      net/ipv6/exthdrs.o
  CC      net/netfilter/nf_flow_table_ip.o
  CC      drivers/virtio/virtio_pci_legacy.o
  CC      drivers/virtio/virtio_balloon.o
  CC      net/ipv4/ipmr.o
  CC      drivers/regulator/dummy.o
  CC      net/netfilter/nf_flow_table_offload.o
  CC      net/ipv6/datagram.o
  CC      drivers/regulator/fixed-helper.o
  CC      drivers/virtio/virtio_input.o
  CC      drivers/regulator/helpers.o
  CC      drivers/virtio/virtio_vdpa.o
  CC      net/netfilter/nf_flow_table_inet.o
  CC      net/ipv6/ip6_flowlabel.o
  CC      drivers/regulator/devres.o
  CC      drivers/virtio/virtio_dma_buf.o
  CC      net/ipv4/ipmr_base.o
  CC      net/netfilter/x_tables.o
  AR      drivers/virtio/built-in.a
  CC      drivers/regulator/of_regulator.o
  AR      drivers/reset/hisilicon/built-in.a
  CC      drivers/reset/core.o
  CC      net/ipv6/inet6_connection_sock.o
  CC      net/ipv4/udp_tunnel_core.o
  CC      drivers/reset/reset-scmi.o
  CC      drivers/regulator/fixed.o
  AR      drivers/reset/built-in.a
  CC      drivers/tty/vt/vt_ioctl.o
  CC      net/ipv6/udp_offload.o
  CC      net/netfilter/xt_tcpudp.o
  CC      drivers/regulator/fixed-firefly.o
  CC      net/ipv4/udp_tunnel_nic.o
  CC      drivers/regulator/act8865-regulator.o
  CC      net/ipv6/seg6.o
  CC      drivers/tty/vt/vc_screen.o
  CC      net/netfilter/xt_mark.o
  CC      drivers/regulator/fan53555.o
  CC      net/netfilter/xt_nat.o
  CC      net/ipv6/fib6_notifier.o
  CC      drivers/tty/vt/selection.o
  CC      net/ipv4/syncookies.o
  CC      drivers/regulator/gpio-regulator.o
  CC      drivers/tty/vt/keyboard.o
  CC      net/ipv6/rpl.o
  CC      net/netfilter/xt_REDIRECT.o
  CC      fs/xfs/libxfs/xfs_ag.o
  CC      net/ipv4/esp4.o
  CC      drivers/regulator/lp8752.o
  CC      net/ipv6/sysctl_net_ipv6.o
  CC      net/netfilter/xt_MASQUERADE.o
  CC      drivers/regulator/mp8865-regulator.o
  CC      drivers/tty/vt/consolemap.o
  CC      fs/xfs/libxfs/xfs_alloc.o
  CC      net/ipv6/xfrm6_policy.o
  CC      drivers/regulator/pwm-regulator.o
  CC      net/ipv4/ipconfig.o
  CC      net/netfilter/xt_addrtype.o
  HOSTCC  drivers/tty/vt/conmakehash
  CC      drivers/tty/vt/vt.o
  CC      drivers/regulator/rk806-regulator.o
  CC      net/ipv6/xfrm6_state.o
  CC      net/netfilter/xt_comment.o
  CC      net/ipv4/netfilter.o
  CC      drivers/regulator/rk808-regulator.o
  CC      net/ipv6/xfrm6_input.o
  CC      net/netfilter/xt_conntrack.o
  CC      fs/xfs/libxfs/xfs_alloc_btree.o
  CC      drivers/regulator/rk860x-regulator.o
  CC      net/ipv4/tcp_cubic.o
  SHIPPED drivers/tty/vt/defkeymap.c
  CC      net/netfilter/xt_mac.o
  CONMK   drivers/tty/vt/consolemap_deftbl.c
  CC      drivers/tty/vt/defkeymap.o
  CC      net/ipv6/xfrm6_output.o
  CC      drivers/tty/vt/consolemap_deftbl.o
  AR      drivers/tty/vt/built-in.a
  CC      drivers/tty/hvc/hvc_console.o
  CC      drivers/regulator/tps6586x-regulator.o
  CC      net/ipv4/xfrm4_policy.o
  CC [M]  net/netfilter/xt_ipvs.o
  AR      drivers/tty/hvc/built-in.a
  CC      drivers/tty/serial/8250/8250_core.o
  CC      net/ipv6/xfrm6_protocol.o
  CC      drivers/regulator/tps65132-regulator.o
  CC      fs/xfs/libxfs/xfs_attr.o
  CC      net/ipv4/xfrm4_state.o
  CC      drivers/regulator/xz3216.o
  AR      net/netfilter/built-in.a
  CC      drivers/tty/serial/8250/8250_port.o
  CC      net/packet/af_packet.o
  CC      net/ipv6/netfilter.o
  CC      net/ipv4/xfrm4_input.o
  AR      drivers/regulator/built-in.a
  CC      drivers/char/hw_random/core.o
  CC      net/ipv6/proc.o
  CC      fs/xfs/libxfs/xfs_attr_leaf.o
  CC      drivers/char/hw_random/virtio-rng.o
  CC      net/ipv4/xfrm4_output.o
  CC      drivers/tty/serial/8250/8250_dma.o
  CC      drivers/char/hw_random/optee-rng.o
  CC      net/ipv6/syncookies.o
  CC      drivers/tty/serial/8250/8250_dwlib.o
  CC      drivers/char/hw_random/rockchip-rng.o
  CC      net/ipv4/xfrm4_protocol.o
  AR      net/packet/built-in.a
  CC      net/key/af_key.o
  CC      drivers/tty/serial/8250/8250_early.o
  AR      drivers/char/hw_random/built-in.a
  AR      drivers/char/agp/built-in.a
  CC      drivers/char/tpm/tpm-chip.o
  CC      net/ipv6/addrconf_core.o
  CC      drivers/tty/serial/8250/8250_fsl.o
  AR      net/ipv4/built-in.a
  CC      net/bridge/netfilter/nft_reject_bridge.o
  CC      drivers/char/tpm/tpm-dev-common.o
  CC      drivers/tty/serial/8250/8250_dw.o
  CC      net/ipv6/exthdrs_core.o
  CC      fs/xfs/libxfs/xfs_attr_remote.o
  CC      drivers/char/tpm/tpm-dev.o
  CC      drivers/tty/serial/8250/8250_of.o
  AR      net/bridge/netfilter/built-in.a
  CC      net/bridge/br.o
  CC      drivers/char/tpm/tpm-interface.o
  CC      net/ipv6/ip6_checksum.o
  AR      net/key/built-in.a
  CC      net/can/af_can.o
  AR      drivers/tty/serial/8250/built-in.a
  CC      drivers/tty/serial/serial_core.o
  CC      drivers/char/tpm/tpm1-cmd.o
  CC      net/bridge/br_device.o
  CC      net/ipv6/ip6_icmp.o
  CC      fs/xfs/libxfs/xfs_bit.o
  CC      net/can/proc.o
  CC      drivers/char/tpm/tpm2-cmd.o
  CC      fs/xfs/libxfs/xfs_bmap.o
  CC      net/ipv6/output_core.o
  CC      net/bridge/br_fdb.o
  CC      net/can/raw.o
  CC      drivers/tty/serial/earlycon.o
  CC      drivers/char/tpm/tpmrm-dev.o
  CC      drivers/tty/serial/serial_mctrl_gpio.o
  CC      net/ipv6/protocol.o
  CC      drivers/char/tpm/tpm2-space.o
  AR      drivers/tty/serial/built-in.a
  AR      drivers/tty/ipwireless/built-in.a
  CC      drivers/tty/tty_io.o
  CC      net/can/bcm.o
  CC      net/bridge/br_forward.o
  CC      net/ipv6/ip6_offload.o
  CC      drivers/char/tpm/tpm-sysfs.o
  CC      drivers/char/tpm/eventlog/common.o
  CC      net/bridge/br_if.o
  CC      net/ipv6/tcpv6_offload.o
  CC      net/can/gw.o
  CC      drivers/char/tpm/eventlog/tpm1.o
  CC      drivers/tty/n_tty.o
  CC      fs/xfs/libxfs/xfs_bmap_btree.o
  CC      drivers/char/tpm/eventlog/tpm2.o
  CC      net/ipv6/exthdrs_offload.o
  CC      net/bridge/br_input.o
  CC      drivers/char/tpm/eventlog/efi.o
  AR      net/can/built-in.a
  CC      net/bluetooth/rfcomm/core.o
  CC      drivers/tty/tty_ioctl.o
  CC      net/ipv6/inet6_hashtables.o
  CC      drivers/char/tpm/eventlog/of.o
  CC      net/bridge/br_ioctl.o
  CC      drivers/char/tpm/tpm_i2c_infineon.o
  CC      drivers/tty/tty_ldisc.o
  CC      fs/xfs/libxfs/xfs_btree.o
  CC      net/ipv6/ip6_udp_tunnel.o
  CC      drivers/tty/tty_buffer.o
  CC      net/bridge/br_stp.o
  AR      drivers/char/tpm/built-in.a
  CC      drivers/char/mem.o
  CC      net/bluetooth/rfcomm/sock.o
  CC      drivers/tty/tty_port.o
  CC      net/ipv6/mcast_snoop.o
  CC      drivers/char/random.o
  CC      net/bridge/br_stp_bpdu.o
  CC      drivers/tty/tty_mutex.o
  CC      drivers/tty/tty_ldsem.o
  AR      net/ipv6/built-in.a
  CC      net/sunrpc/auth_gss/auth_gss.o
  CC      net/bluetooth/rfcomm/tty.o
  CC      net/bridge/br_stp_if.o
  CC      drivers/tty/tty_baudrate.o
  CC      drivers/tty/tty_jobctrl.o
  CC      drivers/char/misc.o
  CC      net/bridge/br_stp_timer.o
  CC      fs/xfs/libxfs/xfs_btree_staging.o
  CC      drivers/tty/n_null.o
  CC      drivers/char/virtio_console.o
  AR      net/bluetooth/rfcomm/built-in.a
  CC      net/bluetooth/bnep/core.o
  CC      drivers/tty/pty.o
  CC      net/sunrpc/auth_gss/gss_generic_token.o
  CC      net/bridge/br_netlink.o
  CC      fs/xfs/libxfs/xfs_da_btree.o
  CC      net/sunrpc/auth_gss/gss_mech_switch.o
  CC      drivers/tty/tty_audit.o
  CC      net/bridge/br_netlink_tunnel.o
  CC      net/bluetooth/bnep/sock.o
  AR      drivers/char/built-in.a
  AR      drivers/iommu/amd/built-in.a
  AR      drivers/iommu/intel/built-in.a
  AR      drivers/iommu/arm/arm-smmu/built-in.a
  CC      drivers/iommu/arm/arm-smmu-v3/arm-smmu-v3.o
  CC      drivers/tty/sysrq.o
  CC      net/bluetooth/bnep/netdev.o
  CC      net/bridge/br_arp_nd_proxy.o
  CC      net/sunrpc/auth_gss/svcauth_gss.o
  AR      drivers/tty/built-in.a
  AR      drivers/gpu/drm/arm/built-in.a
  CC      drivers/gpu/drm/rockchip/dw_hdcp2.o
  AR      drivers/iommu/arm/arm-smmu-v3/built-in.a
  AR      drivers/iommu/arm/built-in.a
  CC      drivers/iommu/iommu.o
  CC      drivers/gpu/drm/rockchip/rockchip_drm_drv.o
  AR      net/bluetooth/bnep/built-in.a
  CC      net/bluetooth/hidp/core.o
  CC      fs/xfs/libxfs/xfs_defer.o
  CC      net/bridge/br_sysfs_if.o
  CC      net/sunrpc/auth_gss/gss_rpc_upcall.o
  CC      drivers/gpu/drm/rockchip/rockchip_drm_fb.o
  CC      net/bridge/br_sysfs_br.o
  CC      net/bluetooth/hidp/sock.o
  CC      drivers/iommu/iommu-traces.o
  CC      drivers/gpu/drm/rockchip/rockchip_drm_gem.o
  CC      net/sunrpc/auth_gss/gss_rpc_xdr.o
  CC      fs/xfs/libxfs/xfs_dir2.o
  CC      drivers/iommu/iommu-sysfs.o
  AR      net/bluetooth/hidp/built-in.a
  CC      net/bridge/br_nf_core.o
  CC      net/bluetooth/af_bluetooth.o
  CC      drivers/gpu/drm/rockchip/rockchip_drm_logo.o
  CC      drivers/iommu/dma-iommu.o
  CC      net/sunrpc/auth_gss/trace.o
  CC      net/bridge/br_multicast.o
  CC      net/bluetooth/hci_core.o
  CC      drivers/iommu/io-pgtable.o
  CC      drivers/gpu/drm/rockchip/rockchip_drm_vop.o
  CC      fs/xfs/libxfs/xfs_dir2_block.o
  CC      drivers/iommu/io-pgtable-arm.o
  AR      net/sunrpc/auth_gss/built-in.a
  CC      net/sunrpc/clnt.o
  CC      drivers/iommu/iova.o
  CC      drivers/iommu/of_iommu.o
  CC      fs/xfs/libxfs/xfs_dir2_data.o
  CC      net/bridge/br_mdb.o
  CC      drivers/iommu/rockchip-iommu.o
  CC      net/bluetooth/hci_conn.o
  CC      net/sunrpc/xprt.o
  CC      fs/xfs/libxfs/xfs_dir2_leaf.o
  CC      net/bridge/br_vlan.o
  CC      drivers/iommu/virtio-iommu.o
  CC      net/bluetooth/hci_event.o
  AR      drivers/iommu/built-in.a
  CC      drivers/connector/cn_queue.o
  CC      net/sunrpc/socklib.o
  CC      drivers/connector/connector.o
  CC      net/sunrpc/xprtsock.o
  CC      fs/xfs/libxfs/xfs_dir2_node.o
  CC      net/bridge/br_vlan_tunnel.o
  CC      drivers/connector/cn_proc.o
  CC      drivers/gpu/drm/rockchip/rockchip_vop_reg.o
  CC      drivers/gpu/drm/rockchip/rockchip_drm_vop2.o
  CC      net/bridge/br_vlan_options.o
  AR      drivers/connector/built-in.a
  CC      drivers/base/power/sysfs.o
  CC      drivers/base/power/generic_ops.o
  CC      fs/xfs/libxfs/xfs_dir2_sf.o
  CC      net/sunrpc/sched.o
  CC      drivers/base/power/common.o
  CC      net/bridge/br_netfilter_hooks.o
  CC      drivers/base/power/qos.o
  CC      drivers/base/power/runtime.o
  CC      net/bluetooth/mgmt.o
  CC      fs/xfs/libxfs/xfs_dquot_buf.o
  CC      net/bridge/br_netfilter_ipv6.o
  CC      drivers/base/power/wakeirq.o
  CC      drivers/base/power/main.o
  CC      fs/xfs/libxfs/xfs_ialloc.o
  AR      net/bridge/built-in.a
  CC      net/8021q/vlan_core.o
  CC      drivers/base/power/wakeup.o
  CC      net/8021q/vlan.o
  CC      fs/xfs/libxfs/xfs_ialloc_btree.o
  CC      net/8021q/vlan_dev.o
  CC      drivers/base/power/wakeup_stats.o
  CC      drivers/base/power/domain.o
  CC      net/sunrpc/auth.o
  CC      net/8021q/vlan_netlink.o
  CC      net/bluetooth/hci_sock.o
  CC      drivers/gpu/drm/rockchip/rockchip_vop2_reg.o
  CC      net/8021q/vlanproc.o
  CC      drivers/gpu/drm/rockchip/rockchip_drm_fbdev.o
  CC      fs/xfs/libxfs/xfs_iext_tree.o
  CC      drivers/base/power/domain_governor.o
  CC      net/sunrpc/auth_null.o
  CC      drivers/gpu/drm/rockchip/analogix_dp-rockchip.o
  AR      net/8021q/built-in.a
  CC      net/wireless/core.o
  CC      drivers/base/power/clock_ops.o
  CC      net/bluetooth/hci_sysfs.o
  CC      net/sunrpc/auth_unix.o
  CC      drivers/gpu/drm/rockchip/cdn-dp-core.o
  CC      fs/xfs/libxfs/xfs_inode_fork.o
  AR      drivers/base/power/built-in.a
  AR      drivers/base/firmware_loader/builtin/built-in.a
  CC      drivers/base/firmware_loader/main.o
  CC      net/sunrpc/svc.o
  CC      net/bluetooth/l2cap_core.o
  CC      drivers/gpu/drm/rockchip/cdn-dp-reg.o
  CC      net/wireless/sysfs.o
  CC      drivers/gpu/drm/rockchip/dw_hdmi-rockchip.o
  CC      net/sunrpc/svcsock.o
  AR      drivers/base/firmware_loader/built-in.a
  CC      drivers/base/regmap/regmap.o
  CC      net/wireless/radiotap.o
  CC      fs/xfs/libxfs/xfs_inode_buf.o
  CC      net/wireless/util.o
  CC      drivers/gpu/drm/rockchip/dw-mipi-dsi-rockchip.o
  CC      fs/xfs/libxfs/xfs_log_rlimit.o
  CC      drivers/gpu/drm/rockchip/dw-mipi-dsi2-rockchip.o
  CC      fs/xfs/libxfs/xfs_ag_resv.o
  CC      net/bluetooth/l2cap_sock.o
  CC      net/sunrpc/svcauth.o
  CC      drivers/gpu/drm/rockchip/dw-dp.o
  CC      drivers/base/regmap/regcache.o
  CC      net/bluetooth/smp.o
  CC      fs/xfs/libxfs/xfs_rmap.o
  CC      net/wireless/reg.o
  CC      net/sunrpc/svcauth_unix.o
  CC      drivers/base/regmap/regcache-rbtree.o
  CC      drivers/gpu/drm/rockchip/inno_hdmi.o
  CC      drivers/base/regmap/regcache-flat.o
  CC      drivers/base/regmap/regmap-debugfs.o
  CC      net/sunrpc/addr.o
  CC      drivers/gpu/drm/rockchip/rockchip_lvds.o
  CC      net/bluetooth/lib.o
  CC      drivers/base/regmap/regmap-i2c.o
  CC      net/sunrpc/rpcb_clnt.o
  CC      drivers/gpu/drm/rockchip/rockchip_rgb.o
  CC      net/bluetooth/ecdh_helper.o
  CC      net/wireless/scan.o
  CC      fs/xfs/libxfs/xfs_rmap_btree.o
  CC      drivers/base/regmap/regmap-spi.o
  CC      net/bluetooth/hci_request.o
  CC      drivers/base/regmap/regmap-mmio.o
  AR      drivers/gpu/drm/rockchip/built-in.a
  AR      drivers/gpu/drm/rcar-du/built-in.a
  AR      drivers/gpu/drm/omapdrm/dss/built-in.a
  AR      drivers/gpu/drm/omapdrm/displays/built-in.a
  AR      drivers/gpu/drm/omapdrm/built-in.a
  AR      drivers/gpu/drm/tilcdc/built-in.a
  CC      drivers/gpu/drm/virtio/virtgpu_drv.o
  CC      net/sunrpc/timer.o
  CC      drivers/base/regmap/regmap-irq.o
  CC      drivers/gpu/drm/virtio/virtgpu_kms.o
  CC      fs/xfs/libxfs/xfs_refcount.o
  CC      net/sunrpc/xdr.o
  AR      drivers/base/regmap/built-in.a
  AR      drivers/base/test/built-in.a
  CC      drivers/base/component.o
  CC      drivers/gpu/drm/virtio/virtgpu_gem.o
  CC      net/wireless/nl80211.o
  CC      net/bluetooth/mgmt_util.o
  CC      drivers/gpu/drm/virtio/virtgpu_display.o
  CC      drivers/base/core.o
  CC      net/bluetooth/mgmt_config.o
  CC      drivers/gpu/drm/virtio/virtgpu_vq.o
  CC      net/sunrpc/sunrpc_syms.o
  CC      net/bluetooth/sco.o
  CC      drivers/gpu/drm/virtio/virtgpu_fence.o
  CC      fs/xfs/libxfs/xfs_refcount_btree.o
  CC      net/sunrpc/cache.o
  CC      drivers/gpu/drm/virtio/virtgpu_object.o
  CC      drivers/base/bus.o
  CC      drivers/gpu/drm/virtio/virtgpu_debugfs.o
  CC      net/bluetooth/hci_debugfs.o
  CC      drivers/gpu/drm/virtio/virtgpu_plane.o
  CC      drivers/base/dd.o
  CC      fs/xfs/libxfs/xfs_sb.o
  CC      drivers/gpu/drm/virtio/virtgpu_ioctl.o
  AR      net/bluetooth/built-in.a
  CC      net/mac80211/main.o
  CC      drivers/base/syscore.o
  CC      net/sunrpc/rpc_pipe.o
  CC      drivers/gpu/drm/virtio/virtgpu_prime.o
  CC      drivers/base/driver.o
  CC      fs/xfs/libxfs/xfs_symlink_remote.o
  CC      drivers/gpu/drm/virtio/virtgpu_trace_points.o
  CC      drivers/base/class.o
  CC      net/mac80211/status.o
  CC      fs/xfs/libxfs/xfs_trans_inode.o
  CC      net/sunrpc/svc_xprt.o
  AR      drivers/gpu/drm/virtio/built-in.a
  AR      drivers/gpu/drm/imx/built-in.a
  AR      drivers/gpu/drm/i2c/built-in.a
  CC      drivers/gpu/drm/panel/panel-simple.o
  CC      drivers/base/platform.o
  CC      fs/xfs/libxfs/xfs_trans_resv.o
  CC      drivers/base/cpu.o
  AR      drivers/gpu/drm/panel/built-in.a
  CC      drivers/gpu/drm/bridge/analogix/analogix_dp_core.o
  CC      fs/xfs/libxfs/xfs_types.o
  CC      net/mac80211/driver-ops.o
  CC      drivers/base/firmware.o
  CC      net/sunrpc/xprtmultipath.o
  CC      fs/xfs/xfs_aops.o
  CC      drivers/base/init.o
  CC      drivers/base/map.o
  CC      drivers/gpu/drm/bridge/analogix/analogix_dp_reg.o
  CC      net/sunrpc/stats.o
  CC      drivers/base/devres.o
  CC      net/mac80211/sta_info.o
  CC      drivers/base/attribute_container.o
  CC      fs/xfs/xfs_attr_inactive.o
  CC      drivers/gpu/drm/bridge/analogix/analogix-i2c-dptx.o
  CC      net/sunrpc/sysctl.o
  CC      net/wireless/mlme.o
  CC      drivers/base/transport_class.o
  AR      drivers/gpu/drm/bridge/analogix/built-in.a
  AR      drivers/gpu/drm/bridge/cadence/built-in.a
  AR      net/sunrpc/built-in.a
  CC      drivers/gpu/drm/bridge/synopsys/dw-hdmi.o
  CC      fs/xfs/xfs_attr_list.o
  CC      net/rfkill/core.o
  CC      drivers/base/topology.o
  CC      net/rfkill/rfkill-wlan.o
  CC      drivers/base/container.o
  CC      net/mac80211/wep.o
  CC      drivers/base/property.o
  CC      net/wireless/ibss.o
  CC      net/rfkill/rfkill-bt.o
  CC      fs/xfs/xfs_bmap_util.o
  CC      net/mac80211/aead_api.o
  CC      drivers/gpu/drm/bridge/synopsys/dw-hdmi-hdcp.o
  CC      drivers/base/cacheinfo.o
  CC      net/mac80211/wpa.o
  AR      net/rfkill/built-in.a
  CC      net/dns_resolver/dns_key.o
  CC      drivers/base/swnode.o
  CC      net/wireless/sme.o
  CC      drivers/gpu/drm/bridge/synopsys/dw-hdmi-qp.o
  CC      net/dns_resolver/dns_query.o
  CC      drivers/base/devtmpfs.o
  AR      net/dns_resolver/built-in.a
  CC      net/l3mdev/l3mdev.o
  CC      net/mac80211/scan.o
  CC      fs/xfs/xfs_bio_io.o
  CC      drivers/base/module.o
  AR      net/l3mdev/built-in.a
  CC      net/devres.o
  CC      net/wireless/chan.o
  CC      fs/xfs/xfs_buf.o
  CC      drivers/base/soc.o
  CC      drivers/gpu/drm/bridge/synopsys/dw-hdmi-i2s-audio.o
  CC      drivers/base/pinctrl.o
  CC      net/socket.o
  CC      drivers/base/devcoredump.o
  CC      drivers/gpu/drm/bridge/synopsys/dw-hdmi-qp-i2s-audio.o
  CC      net/wireless/ethtool.o
  CC      net/mac80211/offchannel.o
  CC      drivers/base/platform-msi.o
  CC      drivers/gpu/drm/bridge/synopsys/dw-hdmi-cec.o
  CC      drivers/base/arch_topology.o
  CC      drivers/gpu/drm/bridge/synopsys/dw-hdmi-qp-cec.o
  CC      net/wireless/mesh.o
  AR      drivers/base/built-in.a
  CC      drivers/block/zram/zcomp.o
  CC      fs/xfs/xfs_dir2_readdir.o
  CC      net/compat.o
  CC      drivers/block/zram/zram_drv.o
  CC      drivers/gpu/drm/bridge/synopsys/dw-mipi-dsi.o
  CC      net/mac80211/ht.o
  CC      net/wireless/ap.o
  AR      drivers/gpu/drm/bridge/synopsys/built-in.a
  CC      drivers/gpu/drm/bridge/display-connector.o
  CC      net/sysctl_net.o
  AR      drivers/block/zram/built-in.a
  CC      drivers/block/brd.o
  CC      net/mac80211/agg-tx.o
  CC      fs/xfs/xfs_discard.o
  CC      net/wireless/trace.o
  CC      drivers/gpu/drm/bridge/sii902x.o
  CC      drivers/block/loop.o
  AR      drivers/gpu/vga/built-in.a
  CC      drivers/gpu/arm/midgard/mali_kbase_device.o
  AR      drivers/gpu/drm/bridge/built-in.a
  AR      drivers/gpu/drm/hisilicon/built-in.a
  AR      drivers/gpu/drm/tiny/built-in.a
  CC [M]  drivers/gpu/drm/tiny/cirrus.o
  CC      drivers/gpu/arm/midgard/mali_kbase_cache_policy.o
  CC      net/mac80211/agg-rx.o
  CC      fs/xfs/xfs_error.o
  CC      drivers/block/virtio_blk.o
  CC      drivers/gpu/arm/midgard/mali_kbase_mem.o
  AR      drivers/gpu/drm/xlnx/built-in.a
  CC [M]  drivers/gpu/drm/ttm/ttm_memory.o
  CC      fs/xfs/xfs_export.o
  AR      drivers/block/built-in.a
  CC      drivers/misc/lkdtm/core.o
  CC      net/mac80211/vht.o
  CC [M]  drivers/gpu/drm/ttm/ttm_tt.o
  CC      fs/xfs/xfs_extent_busy.o
  CC      drivers/misc/lkdtm/bugs.o
  CC      drivers/gpu/arm/midgard/mali_kbase_mmu.o
  CC      drivers/misc/lkdtm/heap.o
  CC [M]  drivers/gpu/drm/ttm/ttm_bo.o
  CC      drivers/misc/lkdtm/perms.o
  CC      net/mac80211/he.o
  CC      drivers/misc/lkdtm/refcount.o
  CC [M]  drivers/gpu/drm/ttm/ttm_bo_util.o
  CC      drivers/misc/lkdtm/rodata.o
  CC      fs/xfs/xfs_file.o
  CC      drivers/misc/lkdtm/usercopy.o
  CC      drivers/gpu/arm/midgard/mali_kbase_ctx_sched.o
  CC      net/mac80211/s1g.o
  CC      drivers/misc/lkdtm/stackleak.o
  CC [M]  drivers/gpu/drm/ttm/ttm_bo_vm.o
  CC      drivers/misc/lkdtm/cfi.o
  CC      drivers/gpu/arm/midgard/mali_kbase_jd.o
  OBJCOPY drivers/misc/lkdtm/rodata_objcopy.o
  AR      drivers/misc/lkdtm/built-in.a
  AR      drivers/misc/eeprom/built-in.a
  AR      drivers/misc/cb710/built-in.a
  AR      drivers/misc/ti-st/built-in.a
  AR      drivers/misc/lis3lv02d/built-in.a
  AR      drivers/misc/cardreader/built-in.a
  CC      drivers/misc/sram.o
  CC [M]  drivers/gpu/drm/ttm/ttm_module.o
  CC      net/mac80211/ibss.o
  CC      drivers/misc/ds18b20.o
  CC [M]  drivers/gpu/drm/ttm/ttm_execbuf_util.o
  CC      drivers/gpu/arm/midgard/mali_kbase_jd_debugfs.o
  CC      fs/xfs/xfs_filestream.o
  AR      drivers/misc/built-in.a
  CC      drivers/mfd/mfd-core.o
  CC [M]  drivers/gpu/drm/ttm/ttm_page_alloc.o
  CC      drivers/gpu/arm/midgard/mali_kbase_jm.o
  CC      drivers/mfd/tps6586x.o
  CC [M]  drivers/gpu/drm/ttm/ttm_range_manager.o
  CC      net/mac80211/iface.o
  CC      drivers/gpu/arm/midgard/mali_kbase_gpuprops.o
  CC      net/wireless/ocb.o
  CC [M]  drivers/gpu/drm/ttm/ttm_resource.o
  CC      drivers/mfd/rk806-core.o
  CC      fs/xfs/xfs_fsmap.o
  CC [M]  drivers/gpu/drm/ttm/ttm_page_alloc_dma.o
  CC      drivers/gpu/arm/midgard/mali_kbase_js.o
  CC      drivers/mfd/rk806-spi.o
  CC      net/wireless/pmsr.o
  LD [M]  drivers/gpu/drm/ttm/ttm.o
  CC [M]  drivers/gpu/drm/vkms/vkms_drv.o
  CC      drivers/mfd/rk808.o
  CC      net/mac80211/rate.o
  CC [M]  drivers/gpu/drm/vkms/vkms_plane.o
  CC      fs/xfs/xfs_fsops.o
  CC      drivers/mfd/syscon.o
  CC      net/wireless/of.o
  CC      drivers/gpu/arm/midgard/mali_kbase_js_ctx_attr.o
  CC [M]  drivers/gpu/drm/vkms/vkms_output.o
  AR      drivers/mfd/built-in.a
  AR      drivers/nfc/built-in.a
  CC      fs/debugfs/inode.o
  CC [M]  drivers/gpu/drm/vkms/vkms_crtc.o
  CC      fs/xfs/xfs_globals.o
  GEN     net/wireless/shipped-certs.c
  CC      net/wireless/wext-core.o
  CC      drivers/gpu/arm/midgard/mali_kbase_event.o
  CC      net/mac80211/michael.o
  CC      fs/debugfs/file.o
  CC      fs/xfs/xfs_health.o
  CC [M]  drivers/gpu/drm/vkms/vkms_gem.o
  CC      drivers/gpu/arm/midgard/mali_kbase_context.o
  CC      net/mac80211/tkip.o
  CC      net/wireless/wext-proc.o
  AR      fs/debugfs/built-in.a
  CC      fs/tracefs/inode.o
  CC [M]  drivers/gpu/drm/vkms/vkms_composer.o
  CC      drivers/gpu/arm/midgard/mali_kbase_pm.o
  CC      net/wireless/wext-priv.o
  AR      fs/tracefs/built-in.a
  CC      fs/btrfs/super.o
  CC [M]  drivers/gpu/drm/vkms/vkms_writeback.o
  CC      drivers/gpu/arm/midgard/mali_kbase_config.o
  CC      net/mac80211/aes_cmac.o
  CC      fs/xfs/xfs_icache.o
  CC      net/wireless/shipped-certs.o
  LD [M]  drivers/gpu/drm/vkms/vkms.o
  CC [M]  drivers/gpu/drm/qxl/qxl_drv.o
  CC      drivers/gpu/arm/midgard/mali_kbase_vinstr.o
  AR      net/wireless/built-in.a
  CC      drivers/dma-buf/heaps/deferred-free-helper.o
  CC      net/mac80211/aes_gmac.o
  CC [M]  drivers/gpu/drm/qxl/qxl_kms.o
  CC      drivers/dma-buf/heaps/page_pool.o
  CC      drivers/gpu/arm/midgard/mali_kbase_softjobs.o
  CC [M]  drivers/gpu/drm/qxl/qxl_display.o
  CC      net/mac80211/fils_aead.o
  CC      drivers/dma-buf/heaps/rk_system_heap.o
  CC      fs/xfs/xfs_ioctl.o
  CC [M]  drivers/gpu/drm/qxl/qxl_ttm.o
  CC      drivers/gpu/arm/midgard/mali_kbase_10969_workaround.o
  CC      net/mac80211/cfg.o
  CC      drivers/dma-buf/heaps/rk_cma_heap.o
  CC [M]  drivers/gpu/drm/qxl/qxl_object.o
  CC      drivers/gpu/arm/midgard/mali_kbase_hw.o
  AR      drivers/dma-buf/heaps/built-in.a
  CC      drivers/dma-buf/dma-buf.o
  CC      fs/btrfs/ctree.o
  CC [M]  drivers/gpu/drm/qxl/qxl_gem.o
  CC      drivers/gpu/arm/midgard/mali_kbase_utility.o
  CC [M]  drivers/gpu/drm/qxl/qxl_cmd.o
  CC      drivers/dma-buf/dma-fence.o
  CC      drivers/gpu/arm/midgard/mali_kbase_debug.o
  CC      fs/xfs/xfs_iomap.o
  CC      drivers/gpu/arm/midgard/mali_kbase_trace_timeline.o
  CC [M]  drivers/gpu/drm/qxl/qxl_image.o
  CC      net/mac80211/ethtool.o
  CC      drivers/dma-buf/dma-fence-array.o
  CC      drivers/gpu/arm/midgard/mali_kbase_gpu_memory_debugfs.o
  CC      drivers/dma-buf/dma-fence-chain.o
  CC [M]  drivers/gpu/drm/qxl/qxl_draw.o
  CC      drivers/gpu/arm/midgard/mali_kbase_mem_linux.o
  CC      drivers/dma-buf/dma-resv.o
  CC [M]  drivers/gpu/drm/qxl/qxl_debugfs.o
  CC      net/mac80211/rx.o
  CC      fs/xfs/xfs_iops.o
  CC      fs/btrfs/extent-tree.o
  CC      drivers/dma-buf/seqno-fence.o
  CC [M]  drivers/gpu/drm/qxl/qxl_irq.o
  CC      drivers/dma-buf/dma-heap.o
  CC      drivers/gpu/arm/midgard/mali_kbase_core_linux.o
  CC [M]  drivers/gpu/drm/qxl/qxl_dumb.o
  CC      drivers/dma-buf/dma-buf-cache.o
  CC [M]  drivers/gpu/drm/qxl/qxl_ioctl.o
  CC      fs/xfs/xfs_inode.o
  CC      drivers/dma-buf/sync_file.o
  CC [M]  drivers/gpu/drm/qxl/qxl_release.o
  CC      drivers/dma-buf/sw_sync.o
  CC      drivers/gpu/arm/midgard/mali_kbase_replay.o
  CC      net/mac80211/spectmgmt.o
  CC      fs/btrfs/print-tree.o
  CC [M]  drivers/gpu/drm/qxl/qxl_prime.o
  CC      drivers/dma-buf/sync_debug.o
  CC      drivers/gpu/arm/midgard/mali_kbase_mem_profile_debugfs.o
  LD [M]  drivers/gpu/drm/qxl/qxl.o
  CC      drivers/gpu/drm/drm_bridge_connector.o
  CC      net/mac80211/tx.o
  CC      drivers/dma-buf/dma-buf-sysfs-stats.o
  CC      fs/btrfs/root-tree.o
  CC      drivers/gpu/arm/midgard/mali_kbase_mmu_mode_lpae.o
  CC      drivers/gpu/drm/drm_crtc_helper.o
  AR      drivers/dma-buf/built-in.a
  AR      drivers/macintosh/built-in.a
  CC      drivers/scsi/scsi_common.o
  CC [M]  drivers/scsi/scsi.o
  CC      drivers/gpu/arm/midgard/mali_kbase_mmu_mode_aarch64.o
  CC      fs/xfs/xfs_itable.o
  CC      fs/btrfs/dir-item.o
  CC      drivers/gpu/drm/drm_dsc.o
  CC      drivers/gpu/arm/midgard/mali_kbase_disjoint_events.o
  CC      fs/xfs/xfs_iwalk.o
  CC [M]  drivers/scsi/hosts.o
  CC      drivers/gpu/drm/drm_probe_helper.o
  CC      fs/btrfs/file-item.o
  CC      drivers/gpu/arm/midgard/mali_kbase_gator_api.o
  CC [M]  drivers/scsi/scsi_ioctl.o
  CC      drivers/gpu/drm/drm_plane_helper.o
  CC      drivers/gpu/arm/midgard/mali_kbase_debug_mem_view.o
  CC [M]  drivers/scsi/scsicam.o
  CC      drivers/gpu/drm/drm_atomic_helper.o
  CC      fs/btrfs/inode-item.o
  CC      net/mac80211/key.o
  CC      fs/xfs/xfs_message.o
  CC      drivers/gpu/arm/midgard/mali_kbase_debug_job_fault.o
  CC [M]  drivers/scsi/scsi_error.o
  CC      fs/xfs/xfs_mount.o
  CC      fs/btrfs/inode-map.o
  CC      drivers/gpu/arm/midgard/mali_kbase_smc.o
  CC      drivers/gpu/drm/drm_kms_helper_common.o
  CC      net/mac80211/util.o
  CC      drivers/gpu/arm/midgard/mali_kbase_mem_pool.o
  CC [M]  drivers/scsi/scsi_lib.o
  CC      fs/btrfs/disk-io.o
  CC      drivers/gpu/drm/drm_simple_kms_helper.o
  CC      drivers/gpu/arm/midgard/mali_kbase_mem_pool_debugfs.o
  CC      fs/xfs/xfs_mru_cache.o
  CC      drivers/gpu/drm/drm_modeset_helper.o
  CC      drivers/gpu/arm/midgard/mali_kbase_tlstream.o
  CC [M]  drivers/scsi/scsi_lib_dma.o
  CC      drivers/gpu/drm/drm_scdc_helper.o
  CC      fs/xfs/xfs_pwork.o
  CC      drivers/gpu/drm/drm_gem_framebuffer_helper.o
  CC [M]  drivers/scsi/scsi_scan.o
  CC      drivers/gpu/drm/drm_atomic_state_helper.o
  CC      fs/btrfs/transaction.o
  CC      drivers/gpu/arm/midgard/mali_kbase_strings.o
  CC      drivers/gpu/arm/midgard/mali_kbase_as_fault_debugfs.o
  GEN     drivers/scsi/scsi_devinfo_tbl.c
  CC [M]  drivers/scsi/scsi_devinfo.o
  CC      fs/xfs/xfs_reflink.o
  CC      net/mac80211/wme.o
  CC      drivers/gpu/drm/drm_damage_helper.o
  CC      drivers/gpu/arm/midgard/mali_kbase_regs_history_debugfs.o
  CC [M]  drivers/scsi/scsi_sysctl.o
  CC      drivers/gpu/drm/drm_format_helper.o
  CC [M]  drivers/scsi/scsi_proc.o
  CC      drivers/gpu/arm/midgard/platform/rk/mali_kbase_config_rk.o
  CC      net/mac80211/chan.o
  CC      drivers/gpu/drm/drm_self_refresh_helper.o
  CC      fs/btrfs/inode.o
  CC [M]  drivers/scsi/scsi_debugfs.o
  CC      drivers/gpu/drm/bridge/panel.o
  CC      drivers/gpu/arm/midgard/ipa/mali_kbase_ipa_simple.o
  CC      fs/xfs/xfs_stats.o
  CC [M]  drivers/scsi/scsi_trace.o
  CC      drivers/gpu/drm/drm_fb_helper.o
  CC      drivers/gpu/arm/midgard/ipa/mali_kbase_ipa.o
  CC      fs/xfs/xfs_super.o
  CC [M]  drivers/scsi/scsi_logging.o
  CC      net/mac80211/trace.o
  CC      drivers/gpu/arm/midgard/ipa/mali_kbase_ipa_debugfs.o
  CC [M]  drivers/scsi/scsi_pm.o
  CC      drivers/gpu/drm/drm_dp_helper.o
  CC [M]  drivers/scsi/scsi_transport_spi.o
  CC      drivers/gpu/arm/midgard/mali_kbase_sync_file.o
  CC      drivers/gpu/drm/drm_dp_mst_topology.o
  CC      fs/xfs/xfs_symlink.o
  CC      drivers/gpu/arm/midgard/mali_kbase_sync_common.o
  CC [M]  drivers/scsi/virtio_scsi.o
  CC      drivers/gpu/arm/midgard/mali_kbase_fence.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_cache_policy_backend.o
  CC [M]  drivers/scsi/sd.o
  CC      fs/xfs/xfs_sysfs.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_device_hw.o
  CC      fs/btrfs/file.o
  CC      drivers/gpu/drm/drm_dp_dual_mode_helper.o
  CC      fs/xfs/xfs_trans.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_gpu.o
  CC      drivers/gpu/drm/drm_dp_aux_dev.o
  CC [M]  drivers/scsi/sr.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_gpuprops_backend.o
  CC      drivers/gpu/drm/drm_auth.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_debug_job_fault_backend.o
  CC [M]  drivers/scsi/sr_ioctl.o
  CC      drivers/gpu/drm/drm_cache.o
  CC      fs/xfs/xfs_xattr.o
  CC      drivers/gpu/drm/drm_file.o
  CC      fs/btrfs/tree-defrag.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_irq_linux.o
  CC [M]  drivers/scsi/sr_vendor.o
  CC      fs/xfs/kmem.o
  CC      net/mac80211/mlme.o
  CC [M]  drivers/scsi/scsi_sysfs.o
  CC      drivers/gpu/drm/drm_gem.o
  CC      fs/btrfs/extent_map.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_instr_backend.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_jm_as.o
  LD [M]  drivers/scsi/sd_mod.o
  LD [M]  drivers/scsi/sr_mod.o
  AR      drivers/scsi/built-in.a
  LD [M]  drivers/scsi/scsi_mod.o
  CC      fs/btrfs/sysfs.o
  CC      drivers/nvme/host/core.o
  CC      drivers/gpu/drm/drm_ioctl.o
  CC      fs/xfs/xfs_log.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_jm_hw.o
  CC      drivers/gpu/drm/drm_irq.o
  CC      drivers/gpu/drm/drm_memory.o
  CC      fs/btrfs/struct-funcs.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_jm_rb.o
  CC      drivers/gpu/drm/drm_drv.o
  CC      net/mac80211/tdls.o
  CC      fs/btrfs/xattr.o
  CC      drivers/gpu/drm/drm_sysfs.o
  CC      fs/xfs/xfs_log_cil.o
  CC      drivers/nvme/host/trace.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_js_affinity.o
  CC      fs/btrfs/ordered-data.o
  CC      drivers/gpu/drm/drm_hashtab.o
  CC      drivers/nvme/host/pci.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_js_backend.o
  CC      drivers/gpu/drm/drm_mm.o
  CC      net/mac80211/ocb.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_mmu_hw_direct.o
  CC      fs/btrfs/extent_io.o
  CC      drivers/gpu/drm/drm_crtc.o
  CC      fs/xfs/xfs_bmap_item.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_pm_backend.o
  CC      net/mac80211/airtime.o
  AR      drivers/nvme/host/built-in.a
  AR      drivers/nvme/target/built-in.a
  AR      drivers/nvme/built-in.a
  CC      fs/pstore/inode.o
  CC      drivers/gpu/drm/drm_fourcc.o
  CC      fs/xfs/xfs_buf_item.o
  CC      drivers/gpu/drm/drm_modes.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_pm_driver.o
  CC      fs/pstore/platform.o
  CC      fs/pstore/ram.o
  CC      net/mac80211/pm.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_pm_metrics.o
  CC      drivers/gpu/drm/drm_encoder_slave.o
  CC      fs/xfs/xfs_buf_item_recover.o
  CC      fs/pstore/ram_core.o
  CC      drivers/gpu/drm/drm_trace_points.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_pm_ca.o
  CC      fs/btrfs/volumes.o
  CC      net/mac80211/rc80211_minstrel.o
  AR      fs/pstore/built-in.a
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_pm_ca_fixed.o
  CC      fs/efivarfs/inode.o
  CC      drivers/gpu/drm/drm_prime.o
  CC      fs/efivarfs/file.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_pm_always_on.o
  CC      drivers/gpu/drm/drm_rect.o
  CC      fs/efivarfs/super.o
  CC      net/mac80211/rc80211_minstrel_ht.o
  CC      fs/xfs/xfs_dquot_item_recover.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_pm_coarse_demand.o
  CC      drivers/gpu/drm/drm_vma_manager.o
  AR      fs/efivarfs/built-in.a
  CC      fs/open.o
  CC      drivers/gpu/drm/drm_flip_work.o
  CC      fs/xfs/xfs_extfree_item.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_pm_demand.o
  CC      drivers/gpu/drm/drm_modeset_lock.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_pm_policy.o
  AR      net/mac80211/built-in.a
  AR      net/built-in.a
  CC      fs/read_write.o
  CC      drivers/gpu/arm/mali400/mali/platform/rk/rk.o
  CC      drivers/gpu/drm/drm_atomic.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_time.o
  CC      fs/xfs/xfs_icreate_item.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_devfreq.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_atomics.o
  CC      fs/btrfs/async-thread.o
  CC      drivers/gpu/drm/drm_bridge.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_irq.o
  CC      drivers/gpu/arm/midgard/backend/gpu/mali_kbase_pm_ca_devfreq.o
  CC      fs/file_table.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_wq.o
  CC      fs/xfs/xfs_inode_item.o
  CC      fs/btrfs/ioctl.o
  CC      fs/super.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_locks.o
  CC      drivers/gpu/drm/drm_framebuffer.o
  AR      drivers/gpu/arm/midgard/built-in.a
  CC      drivers/gpu/arm/bifrost/mali_kbase_cache_policy.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_wait_queue.o
  CC      fs/char_dev.o
  CC      drivers/gpu/drm/drm_connector.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_low_level_mem.o
  CC      fs/xfs/xfs_inode_item_recover.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_ccswe.o
  CC      fs/stat.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_mem.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_math.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_memory.o
  CC      drivers/gpu/drm/drm_blend.o
  CC      fs/btrfs/locking.o
  CC      fs/exec.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_misc.o
  CC      drivers/gpu/drm/drm_encoder.o
  CC      fs/xfs/xfs_refcount_item.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_mali.o
  CC      drivers/gpu/drm/drm_mode_object.o
  CC      fs/btrfs/orphan.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_mem_pool_group.o
  CC      fs/xfs/xfs_rmap_item.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_notification.o
  CC      drivers/gpu/drm/drm_property.o
  CC      fs/pipe.o
  CC      fs/btrfs/export.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_time.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_native_mgm.o
  CC      fs/xfs/xfs_log_recover.o
  CC      drivers/gpu/drm/drm_plane.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_timers.o
  CC      fs/namei.o
  CC      fs/btrfs/tree-log.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_ctx_sched.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_bitmap.o
  CC      drivers/gpu/drm/drm_color_mgmt.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_memory.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_gpuprops.o
  CC      drivers/gpu/drm/drm_print.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_memory_os_alloc.o
  CC      drivers/gpu/drm/drm_dumb_buffers.o
  CC      fs/xfs/xfs_trans_ail.o
  CC      drivers/gpu/drm/drm_mode_config.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_memory_external.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_pm.o
  CC      fs/fcntl.o
  CC      drivers/gpu/drm/drm_vblank.o
  CC      fs/btrfs/free-space-cache.o
  CC      fs/xfs/xfs_trans_buf.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_memory_block_alloc.o
  CC      fs/ioctl.o
  CC      drivers/gpu/drm/drm_syncobj.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_config.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_memory_swap_alloc.o
  CC      fs/readdir.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_kinstr_prfcnt.o
  CC      fs/xfs/xfs_sysctl.o
  CC      drivers/gpu/drm/drm_lease.o
  CC      fs/btrfs/zlib.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_memory_manager.o
  CC      fs/xfs/xfs_ioctl32.o
  CC      fs/select.o
  CC      drivers/gpu/drm/drm_writeback.o
  CC      fs/btrfs/lzo.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_memory_virtual.o
  CC      drivers/gpu/drm/drm_client.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_vinstr.o
  CC      fs/btrfs/zstd.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_memory_util.o
  CC      fs/dcache.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_hwcnt.o
  CC      drivers/gpu/drm/drm_client_modeset.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_memory_cow.o
  CC      fs/btrfs/compression.o
  AR      fs/xfs/built-in.a
  CC      fs/inode.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_hwcnt_gpu.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_memory_defer_bind.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_hwcnt_gpu_narrow.o
  CC      drivers/gpu/drm/drm_atomic_uapi.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_ukk_mem.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_hwcnt_types.o
  CC      fs/attr.o
  CC      fs/btrfs/delayed-ref.o
  CC      fs/bad_inode.o
  CC      fs/file.o
  CC      drivers/gpu/drm/drm_hdcp.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_ukk_gp.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_hwcnt_virtualizer.o
  CC      fs/filesystems.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_hwcnt_watchdog_if_timer.o
  CC      drivers/gpu/drm/drm_managed.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_ukk_pp.o
  CC      fs/btrfs/relocation.o
  CC      fs/namespace.o
  CC      drivers/gpu/drm/drm_vblank_work.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_ukk_core.o
  CC      fs/seq_file.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_softjobs.o
  CC      drivers/gpu/drm/drm_edid.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_ukk_soft_job.o
  CC      fs/xattr.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_hw.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_ukk_timeline.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_devfreq.o
  CC      fs/libfs.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_debug.o
  CC      fs/fs-writeback.o
  CC      fs/btrfs/delayed-inode.o
  CC      drivers/gpu/drm/drm_ioc32.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_pm_metrics.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_gpu_memory_debugfs.o
  CC      fs/pnode.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_kernel_core.o
  CC      drivers/gpu/drm/drm_gem_cma_helper.o
  CC      fs/splice.o
  CC      fs/btrfs/scrub.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_mem_linux.o
  CC      drivers/gpu/drm/drm_gem_shmem_helper.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_kernel_linux.o
  CC      drivers/gpu/drm/drm_panel.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_session.o
  CC      fs/sync.o
  CC      fs/utimes.o
  CC      drivers/gpu/drm/drm_of.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_device_pause_resume.o
  CC      fs/d_path.o
  CC      fs/stack.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_kernel_vsync.o
  CC      drivers/gpu/drm/drm_pci.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_core_linux.o
  CC      fs/btrfs/reada.o
  CC      fs/fs_struct.o
  CC      fs/statfs.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_ukk_vsync.o
  CC      drivers/gpu/drm/drm_debugfs.o
  CC      fs/fs_pin.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_kernel_sysfs.o
  CC      fs/nsfs.o
  CC      fs/fs_types.o
  CC      drivers/gpu/drm/drm_debugfs_crc.o
  CC      fs/btrfs/backref.o
  CC      fs/fs_context.o
  CC      fs/fs_parser.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_mmu.o
  CC      drivers/gpu/drm/drm_edid_load.o
  CC      fs/fsopen.o
  CC      fs/init.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_mmu_page_directory.o
  CC      drivers/gpu/drm/drm_mipi_dsi.o
  CC      fs/kernel_read_file.o
  CC      fs/remap_range.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_mem_validation.o
  CC      fs/buffer.o
  CC      drivers/gpu/drm/drm_panel_orientation_quirks.o
  CC      fs/btrfs/ulist.o
  CC      fs/block_dev.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_hw_core.o
  CC [M]  drivers/gpu/drm/drm_gem_ttm_helper.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_gp.o
  AR      drivers/gpu/drm/built-in.a
  LD [M]  drivers/gpu/drm/drm_ttm_helper.o
  CC      drivers/mtd/parsers/cmdlinepart.o
  CC      fs/btrfs/qgroup.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_mem_profile_debugfs.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_pp.o
  CC      fs/direct-io.o
  CC      drivers/mtd/parsers/ofpart.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_pp_job.o
  AR      drivers/mtd/parsers/built-in.a
  CC      drivers/mtd/chips/chipreg.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_disjoint_events.o
  CC      fs/mpage.o
  CC      fs/proc_namespace.o
  AR      drivers/mtd/chips/built-in.a
  AR      drivers/mtd/lpddr/built-in.a
  AR      drivers/mtd/maps/built-in.a
  AR      drivers/mtd/devices/built-in.a
  CC      drivers/gpu/arm/mali400/mali/common/mali_gp_job.o
  AR      drivers/mtd/nand/onenand/built-in.a
  AR      drivers/mtd/nand/raw/ingenic/built-in.a
  AR      drivers/mtd/nand/raw/built-in.a
  CC      drivers/mtd/nand/spi/core.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_debug_mem_view.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_debug_mem_zones.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_soft_job.o
  CC      fs/eventpoll.o
  CC      fs/btrfs/send.o
  CC      drivers/mtd/nand/spi/gigadevice.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_scheduler.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_smc.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_mem_pool.o
  CC      drivers/mtd/nand/spi/macronix.o
  CC      drivers/mtd/nand/spi/micron.o
  CC      fs/anon_inodes.o
  CC      fs/signalfd.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_executor.o
  CC      drivers/mtd/nand/spi/paragon.o
  CC      fs/timerfd.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_mem_pool_debugfs.o
  CC      fs/eventfd.o
  CC      drivers/mtd/nand/spi/toshiba.o
  CC      fs/aio.o
  CC      drivers/mtd/nand/spi/winbond.o
  CC      fs/io_uring.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_group.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_debugfs_helper.o
  CC      drivers/mtd/nand/spi/biwin.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_strings.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_as_fault_debugfs.o
  CC      drivers/mtd/nand/spi/dosilicon.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_dlbu.o
  CC      fs/btrfs/dev-replace.o
  CC      drivers/mtd/nand/spi/esmt.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_regs_history_debugfs.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_broadcast.o
  CC      fs/io-wq.o
  CC      drivers/mtd/nand/spi/etron.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_pm.o
  CC      drivers/mtd/nand/spi/fmsh.o
  CC      fs/btrfs/raid56.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_dvfs_debugfs.o
  CC      drivers/mtd/nand/spi/foresee.o
  CC      fs/locks.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_pmu.o
  CC      drivers/mtd/nand/spi/hyf.o
  CC      drivers/gpu/arm/bifrost/mali_power_gpu_frequency_trace.o
  CC      drivers/mtd/nand/spi/jsc.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_user_settings_db.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_trace_gpu_mem.o
  CC      fs/btrfs/uuid-tree.o
  CC      drivers/mtd/nand/spi/silicongo.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_kernel_utilization.o
  CC      drivers/mtd/nand/spi/unim.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_control_timer.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_pbha.o
  CC      fs/btrfs/props.o
  CC      fs/binfmt_script.o
  CC      drivers/mtd/nand/spi/xtx.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_l2_cache.o
  CC      fs/binfmt_elf.o
  AR      drivers/mtd/nand/spi/built-in.a
  CC      drivers/mtd/nand/core.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_pbha_debugfs.o
  CC      fs/btrfs/free-space-tree.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_timeline.o
  CC      fs/compat_binfmt_elf.o
  CC      drivers/mtd/nand/bbt.o
  CC      drivers/mtd/nand/bbt_store.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_fence_ops.o
  CC      fs/mbcache.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_timeline_fence_wait.o
  AR      drivers/mtd/nand/built-in.a
  AR      drivers/mtd/tests/built-in.a
  AR      drivers/mtd/spi-nor/controllers/built-in.a
  CC      drivers/mtd/spi-nor/core.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_timeline_sync_fence.o
  CC      fs/btrfs/tree-checker.o
  CC      fs/posix_acl.o
  CC      fs/btrfs/space-info.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_sync_file.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_spinlock_reentrant.o
  CC      fs/coredump.o
  CC      drivers/gpu/arm/mali400/mali/common/mali_pm_domain.o
  CC      drivers/mtd/spi-nor/sfdp.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_sync_common.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_osk_pm.o
  CC      fs/btrfs/block-rsv.o
  CC      fs/btrfs/delalloc-space.o
  CC      drivers/mtd/spi-nor/atmel.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_pmu_power_up_down.o
  CC      fs/drop_caches.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_hwcnt_backend_csf.o
  CC      drivers/mtd/spi-nor/boya.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_memory_dma_buf.o
  CC      drivers/spi/spi.o
  CC      fs/fhandle.o
  CC      fs/btrfs/block-group.o
  CC      drivers/mtd/spi-nor/catalyst.o
  CC      drivers/gpu/arm/bifrost/mali_kbase_hwcnt_backend_csf_if_fw.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_memory_secure.o
  CC      fs/dcookies.o
  CC      drivers/mtd/spi-nor/dosilicon.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_sync.o
  CC      drivers/mtd/spi-nor/eon.o
  CC      drivers/spi/spi-mem.o
  CC      drivers/gpu/arm/bifrost/context/mali_kbase_context.o
  CC      drivers/mtd/spi-nor/esmt.o
  CC      drivers/gpu/arm/mali400/mali/linux/mali_internal_sync.o
  CC      drivers/spi/spidev.o
  CC      drivers/mtd/spi-nor/everspin.o
  CC      fs/btrfs/discard.o
  CC      drivers/spi/spi-bitbang.o
  CC      drivers/gpu/arm/mali400/mali/__malidrv_build_info.o
  CC      drivers/gpu/arm/bifrost/context/backend/mali_kbase_context_csf.o
  AR      drivers/gpu/arm/mali400/mali/built-in.a
  AR      drivers/gpu/arm/mali400/built-in.a
  CC      drivers/mtd/ubi/vtbl.o
  CC      drivers/mtd/spi-nor/fmsh.o
  CC      drivers/spi/spi-rockchip.o
  CC      drivers/net/ipvlan/ipvlan_core.o
  CC      drivers/mtd/spi-nor/fujitsu.o
  CC      drivers/mtd/ubi/vmt.o
  CC      fs/btrfs/reflink.o
  CC      drivers/gpu/arm/bifrost/debug/mali_kbase_debug_ktrace.o
  CC      drivers/mtd/spi-nor/gigadevice.o
  CC      drivers/spi/spi-rockchip-sfc.o
  CC      drivers/mtd/spi-nor/intel.o
  CC      drivers/mtd/ubi/upd.o
  CC      drivers/net/ipvlan/ipvlan_main.o
  CC      fs/btrfs/acl.o
  CC      drivers/mtd/spi-nor/issi.o
  CC      drivers/gpu/arm/bifrost/debug/backend/mali_kbase_debug_ktrace_csf.o     
  CC      drivers/spi/spi-wk2xxx.o
  CC      drivers/mtd/ubi/build.o
  CC      drivers/mtd/spi-nor/macronix.o
  AR      fs/btrfs/built-in.a
  AR      fs/built-in.a
  CC      drivers/mtd/mtdcore.o
  CC      drivers/mtd/spi-nor/micron-st.o
  CC      drivers/net/ipvlan/ipvlan_l3s.o
  CC      drivers/mtd/ubi/cdev.o
  CC      drivers/spi/spi-firefly-demo.o
  CC      drivers/gpu/arm/bifrost/device/mali_kbase_device.o
  CC      drivers/mtd/spi-nor/puya.o
  AR      drivers/spi/built-in.a
  AR      drivers/firewire/built-in.a
  CC      drivers/mtd/mtdsuper.o
  CC      drivers/mtd/spi-nor/spansion.o
  CC      drivers/net/ipvlan/ipvtap.o
  CC      drivers/mtd/ubi/kapi.o
  CC      drivers/mtd/mtdconcat.o
  CC      drivers/gpu/arm/bifrost/device/mali_kbase_device_hw.o
  CC      drivers/mtd/spi-nor/sst.o
  CC      drivers/mtd/mtdpart.o
  CC      drivers/mtd/ubi/eba.o
  AR      drivers/net/ipvlan/built-in.a
  CC      drivers/net/wireguard/main.o
  CC      drivers/mtd/spi-nor/winbond.o
  CC      drivers/mtd/mtdchar.o
  CC      drivers/mtd/mtd_blkdevs.o
  CC      drivers/gpu/arm/bifrost/device/backend/mali_kbase_device_csf.o
  CC      drivers/mtd/spi-nor/xilinx.o
  CC      drivers/net/wireguard/noise.o
  CC      drivers/mtd/mtdblock.o
  CC      drivers/mtd/ubi/io.o
  CC      drivers/mtd/spi-nor/xmc.o
  AR      drivers/cdrom/built-in.a
  CC [M]  drivers/cdrom/cdrom.o
  CC      drivers/gpu/arm/bifrost/device/backend/mali_kbase_device_hw_csf.o       
  CC      drivers/net/wireguard/device.o
  CC      drivers/mtd/spi-nor/xtx.o
  CC      drivers/mtd/ubi/wl.o
  AR      drivers/mtd/spi-nor/built-in.a
  CC      drivers/net/phy/mdio-boardinfo.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_cache_policy_backend.o   
  CC      drivers/net/wireguard/peer.o
  CC      drivers/mtd/ubi/attach.o
  CC      drivers/net/phy/mdio_devres.o
  CC      drivers/mtd/ubi/misc.o
  CC      drivers/net/wireguard/timers.o
  CC      drivers/mtd/ubi/debug.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_gpuprops_backend.o       
  CC      drivers/net/phy/phylink.o
  CC      drivers/net/mdio/of_mdio.o
  CC      drivers/net/wireguard/queueing.o
  AR      drivers/mtd/ubi/built-in.a
  AR      drivers/mtd/built-in.a
  AR      drivers/auxdisplay/built-in.a
  CC      drivers/usb/common/common.o
  CC      drivers/net/wireguard/send.o
  AR      drivers/net/mdio/built-in.a
  CC      drivers/net/pcs/pcs-xpcs.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_irq_linux.o
  CC      drivers/net/wireguard/receive.o
  CC      drivers/usb/common/debug.o
  AR      drivers/usb/common/built-in.a
  CC      drivers/usb/core/usb.o
  CC      drivers/net/phy/phy.o
  AR      drivers/net/pcs/built-in.a
  CC      drivers/net/can/dev/dev.o
  CC      drivers/net/wireguard/socket.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_js_backend.o
  CC      drivers/usb/core/hub.o
  CC      drivers/net/wireguard/peerlookup.o
  CC      drivers/net/wireguard/allowedips.o
  CC      drivers/net/phy/phy-c45.o
  CC      drivers/net/can/dev/rx-offload.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_pm_backend.o
  CC      drivers/net/phy/phy-core.o
  CC      drivers/net/wireguard/ratelimiter.o
  AR      drivers/net/can/dev/built-in.a
  AR      drivers/net/can/rcar/built-in.a
  CC      drivers/net/can/rockchip/rockchip_canfd.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_pm_driver.o
  CC      drivers/net/wireguard/cookie.o
  CC      drivers/net/phy/phy_device.o
  CC      drivers/net/wireguard/netlink.o
  AR      drivers/net/can/rockchip/built-in.a
  AR      drivers/net/can/spi/mcp251xfd/built-in.a
  AR      drivers/net/can/spi/built-in.a
  CC      drivers/input/keyboard/adc-keys.o
  AR      drivers/net/can/usb/built-in.a
  AR      drivers/net/can/softing/built-in.a
  AR      drivers/net/can/built-in.a
  AR      drivers/net/dsa/b53/built-in.a
  AR      drivers/net/dsa/microchip/built-in.a
  AR      drivers/net/dsa/mv88e6xxx/built-in.a
  AR      drivers/net/dsa/ocelot/built-in.a
  AR      drivers/net/dsa/qca/built-in.a
  AR      drivers/net/dsa/sja1105/built-in.a
  AR      drivers/net/dsa/built-in.a
  AR      drivers/net/ethernet/alacritech/built-in.a
  AR      drivers/net/ethernet/amazon/built-in.a
  CC [M]  drivers/net/ethernet/aquantia/atlantic/aq_main.o
  CC      drivers/usb/core/hcd.o
  AR      drivers/net/wireguard/built-in.a
  AR      drivers/net/wireless/admtek/built-in.a
  AR      drivers/net/wireless/ath/built-in.a
  CC      drivers/input/keyboard/gpio_keys.o
  AR      drivers/net/wireless/atmel/built-in.a
  AR      drivers/net/wireless/broadcom/built-in.a
  AR      drivers/net/wireless/cisco/built-in.a
  AR      drivers/net/wireless/intel/built-in.a
  AR      drivers/net/wireless/intersil/built-in.a
  AR      drivers/net/wireless/marvell/built-in.a
  CC      drivers/net/phy/linkmode.o
  AR      drivers/net/wireless/mediatek/built-in.a
  AR      drivers/net/wireless/microchip/built-in.a
  AR      drivers/net/wireless/ralink/built-in.a
  AR      drivers/net/wireless/realtek/built-in.a
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_pm_metrics.o
  AR      drivers/net/wireless/rsi/built-in.a
  AR      drivers/net/wireless/st/built-in.a
  AR      drivers/net/wireless/ti/built-in.a
  AR      drivers/net/wireless/zydas/built-in.a
  AR      drivers/net/wireless/quantenna/built-in.a
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_static_buf.o
  CC      drivers/net/phy/mdio_bus.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/aq_nic.o
  CC      drivers/input/keyboard/gpio_keys_polled.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/aiutils.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_pm_ca.o
  CC      drivers/usb/core/urb.o
  AR      drivers/input/keyboard/built-in.a
  CC      drivers/input/mouse/cyapa.o
  CC      drivers/net/phy/mdio_device.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_pm_always_on.o
  CC      drivers/usb/core/message.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/siutils.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/aq_pci_func.o
  CC      drivers/net/phy/swphy.o
  CC      drivers/input/mouse/cyapa_gen3.o
  CC      drivers/net/phy/fixed_phy.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_pm_coarse_demand.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/aq_vec.o
  CC      drivers/input/mouse/cyapa_gen5.o
  CC      drivers/usb/core/driver.o
  CC      drivers/net/phy/realtek.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/aq_ring.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_pm_policy.o
  CC      drivers/input/mouse/cyapa_gen6.o
  CC      drivers/net/phy/rockchip.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/sbutils.o
  CC      drivers/usb/core/config.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/aq_hw_utils.o
  CC      drivers/input/mouse/elan_i2c_core.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_time.o
  AR      drivers/net/phy/built-in.a
  CC      drivers/net/usb/asix_devices.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/bcmutils.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/aq_ethtool.o
  CC      drivers/usb/core/file.o
  CC      drivers/input/mouse/elan_i2c_i2c.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_l2_mmu_config.o
  CC      drivers/usb/core/buffer.o
  CC      drivers/net/usb/asix_common.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/aq_drvinfo.o
  AR      drivers/input/mouse/built-in.a
  CC      drivers/input/touchscreen/hxchipset/himax_ic_HX83102.o
  CC      drivers/usb/core/sysfs.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_clk_rate_trace_mgr.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/aq_filters.o
  CC      drivers/net/usb/ax88172a.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/bcmwifi_channels.o
  CC      drivers/usb/core/endpoint.o
  CC      drivers/input/touchscreen/hxchipset/himax_debug.o
  CC      drivers/usb/core/devio.o
  CC      drivers/net/usb/ax88179_178a.o
  CC      drivers/gpu/arm/bifrost/backend/gpu/mali_kbase_devfreq.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/aq_phy.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_linux.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/hw_atl/hw_atl_a0.o
  CC      drivers/input/touchscreen/hxchipset/himax_inspection.o
  CC      drivers/net/usb/cdc_ether.o
  CC      drivers/gpu/arm/bifrost/mmu/mali_kbase_mmu.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/hw_atl/hw_atl_b0.o
  CC      drivers/net/usb/net1080.o
  CC      drivers/usb/core/notify.o
  CC      drivers/input/touchscreen/hxchipset/himax_ic_incell_core.o
  CC      drivers/usb/core/generic.o
  CC      drivers/net/usb/cdc_subset.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/hw_atl/hw_atl_utils.o
  CC      drivers/usb/core/quirks.o
  CC      drivers/gpu/arm/bifrost/mmu/mali_kbase_mmu_hw_direct.o
  CC      drivers/net/usb/zaurus.o
  CC      drivers/usb/core/devices.o
  CC      drivers/input/touchscreen/hxchipset/himax_common.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/hw_atl/hw_atl_utils_fw2x.o
  CC      drivers/net/usb/usbnet.o
  CC      drivers/gpu/arm/bifrost/mmu/mali_kbase_mmu_mode_aarch64.o
  CC      drivers/usb/core/phy.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/hw_atl/hw_atl_llh.o
  CC      drivers/input/touchscreen/hxchipset/himax_platform.o
  CC      drivers/usb/core/port.o
  CC      drivers/gpu/arm/bifrost/mmu/backend/mali_kbase_mmu_csf.o
  CC      drivers/net/usb/cdc_ncm.o
  AR      drivers/input/touchscreen/hxchipset/built-in.a
  CC      drivers/input/touchscreen/gt1x/gt1x_extents.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/hw_atl2/hw_atl2.o
  CC      drivers/usb/core/of.o
  CC      drivers/input/touchscreen/gt1x/gt1x_generic.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_linux_platdev.o
  CC      drivers/gpu/arm/bifrost/tl/mali_kbase_timeline.o
  CC      drivers/usb/core/hcd-pci.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/hw_atl2/hw_atl2_utils.o
  CC      drivers/net/usb/qmi_wwan_q.o
  AR      drivers/usb/core/built-in.a
  CC      drivers/usb/phy/phy.o
  CC      drivers/input/touchscreen/gt1x/gt1x_tools.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_linux_sched.o
  CC      drivers/gpu/arm/bifrost/tl/mali_kbase_timeline_io.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/hw_atl2/hw_atl2_utils_fw.o       
  CC      drivers/usb/phy/of.o
  CC      drivers/input/touchscreen/gt1x/gt1x.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_pno.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/hw_atl2/hw_atl2_llh.o
  CC      drivers/gpu/arm/bifrost/tl/mali_kbase_tlstream.o
  AR      drivers/usb/phy/built-in.a
  CC      drivers/usb/dwc3/core.o
  CC      drivers/net/usb/qmi_wwan.o
  CC      drivers/input/touchscreen/gt1x/gt1x_update.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/macsec/macsec_api.o
  CC      drivers/gpu/arm/bifrost/tl/mali_kbase_tracepoints.o
  AR      drivers/input/touchscreen/gt1x/built-in.a
  CC      drivers/input/touchscreen/gt9xxx/gt9xx.o
  CC [M]  drivers/net/usb/rtl8150.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/aq_ptp.o
  CC      drivers/usb/dwc3/trace.o
  CC [M]  drivers/net/usb/r8152.o
  CC      drivers/input/touchscreen/gt9xxx/gt9xx_update.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_common.o
  CC      drivers/gpu/arm/bifrost/tl/backend/mali_kbase_timeline_csf.o
  LD [M]  drivers/net/ethernet/aquantia/atlantic/atlantic.o
  AR      drivers/net/ethernet/aquantia/built-in.a
  AR      drivers/net/ethernet/aurora/built-in.a
  AR      drivers/net/ethernet/cadence/built-in.a
  AR      drivers/net/ethernet/cortina/built-in.a
  AR      drivers/net/ethernet/google/built-in.a
  AR      drivers/net/ethernet/huawei/built-in.a
  AR      drivers/net/ethernet/mscc/built-in.a
  AR      drivers/net/ethernet/neterion/built-in.a
  AR      drivers/net/ethernet/netronome/built-in.a
  CC      drivers/usb/dwc3/host.o
  AR      drivers/net/ethernet/ni/built-in.a
  AR      drivers/net/ethernet/packetengines/built-in.a
  CC      drivers/net/ethernet/realtek/r8168/r8168_n.o
  CC      drivers/gpu/arm/bifrost/gpu/mali_kbase_gpu.o
  CC      drivers/usb/dwc3/gadget.o
  CC      drivers/input/touchscreen/gt9xxx/goodix_tool.o
  CC      drivers/gpu/arm/bifrost/gpu/backend/mali_kbase_gpu_fault_csf.o
  AR      drivers/input/touchscreen/gt9xxx/built-in.a
  CC      drivers/input/touchscreen/of_touchscreen.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_ip.o
  CC      drivers/input/touchscreen/atmel_mxt_ts.o
  CC      drivers/gpu/arm/bifrost/thirdparty/mali_kbase_mmap.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_linux_wq.o
  CC      drivers/gpu/arm/bifrost/platform/rk/mali_kbase_config_rk.o
  CC      drivers/usb/dwc3/ep0.o
  CC      drivers/input/touchscreen/elants_i2c.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_custom_gpio.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_firmware_cfg.o
  CC      drivers/usb/dwc3/drd.o
  CC      drivers/input/touchscreen/gsl3673.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/bcmevent.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_trace_buffer.o
  CC      drivers/input/touchscreen/gsl_point_id.o
  CC      drivers/usb/dwc3/debugfs.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/hndpmu.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/linux_osl.o
  AR      drivers/net/usb/built-in.a
  CC      drivers/net/dummy.o
  CC      drivers/usb/dwc3/dwc3-haps.o
  CC      drivers/input/touchscreen/usbtouchscreen.o
  CC      drivers/usb/dwc3/dwc3-of-simple.o
  CC      drivers/net/macvlan.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wldev_common.o
  AR      drivers/usb/dwc3/built-in.a
  CC      drivers/usb/dwc2/core.o
  AR      drivers/input/touchscreen/built-in.a
  CC      drivers/input/remotectl/rockchip_pwm_remotectl.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_scheduler.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wl_android.o
  AR      drivers/input/remotectl/built-in.a
  CC      drivers/input/misc/rk805-pwrkey.o
  CC      drivers/net/macvtap.o
  CC      drivers/usb/dwc2/core_intr.o
  CC      drivers/input/misc/uinput.o
  CC      drivers/net/mii.o
  CC      drivers/usb/dwc2/platform.o
  AR      drivers/input/misc/built-in.a
  CC      drivers/input/input.o
  CC      drivers/net/Space.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_debug_linux.o
  CC      drivers/usb/dwc2/drd.o
  CC      drivers/net/loopback.o
  CC      drivers/input/input-compat.o
  CC      drivers/usb/dwc2/params.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_debug.o
  CC      drivers/net/tun.o
  CC      drivers/input/input-mt.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_kcpu.o
  CC      drivers/usb/dwc2/hcd.o
  CC      drivers/input/input-poller.o
  CC      drivers/input/ff-core.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_mschdbg.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_dbg_ring.o
  CC      drivers/input/ff-memless.o
  CC      drivers/input/input-leds.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/hnd_pktq.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_tiler_heap.o
  CC      drivers/input/evdev.o
  CC      drivers/net/tap.o
  CC      drivers/usb/dwc2/hcd_intr.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/hnd_pktpool.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_timeout.o
  AR      drivers/input/built-in.a
  CC      drivers/rtc/lib.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/bcmxtlv.o
  CC      drivers/rtc/systohc.o
  CC      drivers/net/virtio_net.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_tl_reader.o
  CC      drivers/usb/dwc2/hcd_queue.o
  CC      drivers/rtc/class.o
  CC      drivers/rtc/interface.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/linux_pkt.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_heap_context_alloc.o
  CC      drivers/usb/dwc2/hcd_ddma.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/bcmstdlib_s.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_reset_gpu.o
  CC      drivers/rtc/nvmem.o
  CC      drivers/net/net_failover.o
  CC      drivers/usb/dwc2/gadget.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/frag.o
  CC      drivers/rtc/dev.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_csg_debugfs.o
  CC      drivers/rtc/proc.o
  CC [M]  drivers/net/veth.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_linux_exportfs.o   
  CC      drivers/rtc/sysfs.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_kcpu_debugfs.o
  CC      drivers/rtc/rtc-hym8563.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_linux_pktdump.o
  CC      drivers/rtc/rtc-rk808.o
  CC [M]  drivers/net/vxlan.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_protected_memory.o
  CC      drivers/usb/dwc2/debugfs.o
  AR      drivers/rtc/built-in.a
  CC      drivers/i2c/algos/i2c-algo-bit.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_tiler_heap_debugfs.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_config.o
  AR      drivers/usb/dwc2/built-in.a
  CC      drivers/usb/mon/mon_main.o
  AR      drivers/i2c/algos/built-in.a
  CC      drivers/i2c/busses/i2c-rk3x.o
  CC      drivers/usb/mon/mon_stat.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_cpu_queue_debugfs.o
  AR      drivers/i2c/busses/built-in.a
  AR      drivers/i2c/muxes/built-in.a
  CC      drivers/usb/mon/mon_text.o
  CC      drivers/i2c/i2c-boardinfo.o
  CC      drivers/i2c/i2c-core-base.o
  CC      drivers/usb/mon/mon_bin.o
  CC      drivers/net/ethernet/realtek/r8168/r8168_asf.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_event.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_ccode.o
  AR      drivers/usb/mon/built-in.a
  CC      drivers/usb/host/pci-quirks.o
  CC [M]  drivers/net/wireless/virt_wifi.o
  CC      drivers/gpu/arm/bifrost/csf/mali_kbase_csf_firmware.o
  CC      drivers/i2c/i2c-core-smbus.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wl_event.o
  CC      drivers/usb/host/ehci-hcd.o
  AR      drivers/i3c/built-in.a
  CC      drivers/media/i2c/rk628/rk628.o
  CC      drivers/i2c/i2c-core-of.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wl_android_ext.o
  CC      drivers/media/i2c/rk628/rk628_cru.o
  CC      drivers/i2c/i2c-dev.o
  CC      drivers/gpu/arm/bifrost/csf/ipa_control/mali_kbase_csf_ipa_control.o
  CC      drivers/media/i2c/rk628/rk628_hdmirx.o
  CC      drivers/i2c/i2c-mux.o
  AR      drivers/i2c/built-in.a
  AR      drivers/pps/clients/built-in.a
  CC      drivers/media/i2c/rk628/rk628_dsi.o
  AR      drivers/pps/generators/built-in.a
  CC      drivers/pps/pps.o
  CC      drivers/gpu/arm/bifrost/ipa/mali_kbase_ipa_simple.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wl_iapsta.o
  CC      drivers/pps/kapi.o
  CC      drivers/media/i2c/rk628/rk628_combrxphy.o
  CC      drivers/pps/sysfs.o
  CC      drivers/gpu/arm/bifrost/ipa/mali_kbase_ipa.o
  CC      drivers/usb/host/ehci-pci.o
  CC      drivers/media/i2c/rk628/rk628_combtxphy.o
  AR      drivers/pps/built-in.a
  CC      drivers/ptp/ptp_clock.o
  CC      drivers/usb/host/ehci-platform.o
  CC      drivers/media/i2c/rk628/rk628_csi_v4l2.o
  CC      drivers/net/ethernet/realtek/r8168/rtl_eeprom.o
  CC      drivers/ptp/ptp_chardev.o
  CC      drivers/gpu/arm/bifrost/ipa/mali_kbase_ipa_debugfs.o
  CC      drivers/usb/host/ohci-hcd.o
  CC      drivers/ptp/ptp_sysfs.o
  CC      drivers/net/ethernet/realtek/r8168/rtltool.o
  AR      drivers/ptp/built-in.a
  CC      drivers/power/reset/gpio-poweroff.o
  CC      drivers/gpu/arm/bifrost/ipa/backend/mali_kbase_ipa_counter_csf.o
  AR      drivers/net/ethernet/realtek/r8168/built-in.a
  AR      drivers/net/ethernet/realtek/built-in.a
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wl_escan.o
  AR      drivers/net/ethernet/sfc/built-in.a
  AR      drivers/net/ethernet/socionext/built-in.a
  CC      drivers/net/ethernet/stmicro/stmmac/stmmac_main.o
  CC      drivers/power/reset/gpio-restart.o
  CC      drivers/media/i2c/rk628/rk628_bt1120_v4l2.o
  CC      drivers/power/reset/reboot-mode.o
  CC      drivers/gpu/arm/bifrost/ipa/backend/mali_kbase_ipa_counter_common_csf.o
  CC      drivers/power/reset/syscon-reboot-mode.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wl_iw.o
  AR      drivers/power/reset/built-in.a
  CC      drivers/power/supply/power_supply_core.o
  AR      drivers/media/i2c/rk628/built-in.a
  CC      drivers/media/i2c/fp5510.o
  CC      drivers/usb/host/ohci-platform.o
  AR      drivers/gpu/arm/bifrost/built-in.a
  AR      drivers/gpu/arm/built-in.a
  AR      drivers/gpu/built-in.a
  CC      drivers/hwmon/hwmon.o
  CC      drivers/power/supply/power_supply_sysfs.o
  CC      drivers/usb/host/xhci.o
  CC      drivers/media/i2c/os04a10.o
  CC      drivers/power/supply/power_supply_hwmon.o
  CC      drivers/hwmon/ntc_thermistor.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wl_cfg80211.o
  CC      drivers/power/supply/cw2017_battery.o
  CC      drivers/net/ethernet/stmicro/stmmac/stmmac_mdio.o
  CC      drivers/hwmon/pwm-fan.o
  CC      drivers/media/i2c/ov4689.o
  CC      drivers/power/supply/sbs-battery.o
  AR      drivers/hwmon/built-in.a
  AR      drivers/thermal/broadcom/built-in.a
  AR      drivers/thermal/samsung/built-in.a
  AR      drivers/thermal/intel/built-in.a
  AR      drivers/thermal/st/built-in.a
  AR      drivers/thermal/tegra/built-in.a
  CC      drivers/thermal/thermal_core.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwmac_lib.o
  CC      drivers/power/supply/gpio-charger.o
  CC      drivers/power/supply/bq24735-charger.o
  CC      drivers/media/i2c/ov5695.o
  CC      drivers/net/ethernet/stmicro/stmmac/mmc_core.o
  CC      drivers/usb/host/xhci-mem.o
  CC      drivers/power/supply/bq25700_charger.o
  CC      drivers/net/ethernet/stmicro/stmmac/stmmac_hwtstamp.o
  CC      drivers/thermal/thermal_sysfs.o
  CC      drivers/media/i2c/ov7251.o
  CC      drivers/thermal/thermal_helpers.o
  CC      drivers/net/ethernet/stmicro/stmmac/stmmac_ptp.o
  CC      drivers/thermal/thermal_hwmon.o
  CC      drivers/power/supply/rk817_battery.o
  CC      drivers/usb/host/xhci-ext-caps.o
  CC      drivers/media/i2c/ov13850.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwmac4_descs.o
  CC      drivers/thermal/thermal_of.o
  CC      drivers/usb/host/xhci-ring.o
  CC      drivers/thermal/gov_fair_share.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwmac4_dma.o
  CC      drivers/thermal/gov_step_wise.o
  CC      drivers/media/i2c/s5k3l6xx.o
  CC      drivers/thermal/gov_user_space.o
  CC      drivers/power/supply/rk817_charger.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwmac4_lib.o
  CC      drivers/thermal/gov_power_allocator.o
  CC      drivers/media/i2c/lt6911uxc.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwmac4_core.o
  CC      drivers/thermal/cpufreq_cooling.o
  AR      drivers/power/supply/built-in.a
  AR      drivers/power/built-in.a
  CC      drivers/watchdog/watchdog_core.o
  CC      drivers/usb/host/xhci-hub.o
  CC      drivers/thermal/devfreq_cooling.o
  CC      drivers/media/i2c/lt7911d.o
  CC      drivers/watchdog/watchdog_dev.o
  CC      drivers/net/ethernet/stmicro/stmmac/hwif.o
  CC      drivers/thermal/rockchip_thermal.o
  CC      drivers/watchdog/dw_wdt.o
  CC      drivers/media/i2c/rk_ircut.o
  CC      drivers/net/ethernet/stmicro/stmmac/ring_mode.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wl_cfgscan.o
  CC      drivers/usb/host/xhci-dbg.o
  AR      drivers/thermal/built-in.a
  CC      drivers/md/persistent-data/dm-array.o
  CC      drivers/watchdog/pc9202_wdt.o
  CC      drivers/media/i2c/tc35874x.o
  CC      drivers/usb/host/xhci-trace.o
  CC      drivers/net/ethernet/stmicro/stmmac/chain_mode.o
  AR      drivers/watchdog/built-in.a
  CC      drivers/bluetooth/hci_vhci.o
  CC      drivers/md/persistent-data/dm-bitset.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwmac1000_core.o
  CC      drivers/md/persistent-data/dm-block-manager.o
  CC      drivers/media/i2c/gc2053.o
  CC      drivers/bluetooth/hci_ldisc.o
  CC      drivers/md/persistent-data/dm-space-map-common.o
  CC      drivers/usb/host/xhci-debugfs.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwmac1000_dma.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wl_cfgp2p.o
  CC      drivers/media/i2c/gc2093.o
  CC      drivers/md/persistent-data/dm-space-map-disk.o
  CC      drivers/bluetooth/hci_h4.o
  CC      drivers/usb/host/xhci-pci.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwmac100_core.o
  CC      drivers/md/persistent-data/dm-space-map-metadata.o
  CC      drivers/media/i2c/gc8034.o
  CC      drivers/usb/host/xhci-plat.o
  CC      drivers/bluetooth/hci_ath.o
  CC      drivers/md/persistent-data/dm-transaction-manager.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwmac100_dma.o
  AR      drivers/usb/host/built-in.a
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wl_linux_mon.o
  CC      drivers/usb/class/cdc-acm.o
  CC      drivers/net/ethernet/stmicro/stmmac/enh_desc.o
  CC      drivers/md/persistent-data/dm-btree.o
  CC      drivers/bluetooth/bfusb.o
  CC      drivers/media/i2c/imx415.o
  CC      drivers/net/ethernet/stmicro/stmmac/norm_desc.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wl_cfg_btcoex.o
  CC      drivers/md/persistent-data/dm-btree-remove.o
  CC      drivers/usb/class/cdc-wdm.o
  CC      drivers/bluetooth/btmrvl_main.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwmac5.o
  CC      drivers/media/i2c/imx464.o
  CC      drivers/md/persistent-data/dm-btree-spine.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wl_cfgvendor.o
  AR      drivers/usb/class/built-in.a
  AR      drivers/usb/storage/built-in.a
  CC [M]  drivers/usb/storage/uas.o
  AR      drivers/md/persistent-data/built-in.a
  CC      drivers/md/dm.o
  CC      drivers/net/ethernet/stmicro/stmmac/stmmac_tc.o
  CC      drivers/bluetooth/btmrvl_debugfs.o
  CC      drivers/media/i2c/xc7160.o
  CC [M]  drivers/usb/storage/scsiglue.o
  CC      drivers/bluetooth/btmrvl_sdio.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwxgmac2_core.o
  CC [M]  drivers/usb/storage/protocol.o
  CC      drivers/md/dm-table.o
  AR      drivers/media/i2c/built-in.a
  AR      drivers/media/tuners/built-in.a
  CC [M]  drivers/media/tuners/tuner-xc2028.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_cfg80211.o
  CC [M]  drivers/usb/storage/transport.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwxgmac2_dma.o
  CC [M]  drivers/bluetooth/btusb.o
  CC      drivers/md/dm-target.o
  CC [M]  drivers/media/tuners/tuner-simple.o
  CC [M]  drivers/usb/storage/usb.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/wl_cfgvif.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwxgmac2_descs.o
  CC      drivers/md/dm-linear.o
  CC      drivers/net/ethernet/stmicro/stmmac/stmmac_ethtool.o
  CC [M]  drivers/media/tuners/tuner-types.o
  CC [M]  drivers/usb/storage/initializers.o
  CC      drivers/md/dm-stripe.o
  CC [M]  drivers/media/tuners/mt20xx.o
  CC [M]  drivers/bluetooth/btintel.o
  CC [M]  drivers/usb/storage/sierra_ms.o
  CC      drivers/md/dm-ioctl.o
  CC      drivers/net/ethernet/stmicro/stmmac/stmmac_platform.o
  CC [M]  drivers/usb/storage/option_ms.o
  CC [M]  drivers/media/tuners/tda8290.o
  CC [M]  drivers/usb/storage/usual-tables.o
  CC [M]  drivers/bluetooth/btbcm.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwmac-rk.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_pcie.o
  CC      drivers/md/dm-io.o
  CC [M]  drivers/media/tuners/tea5767.o
  CC [M]  drivers/bluetooth/btrtl.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwmac-rk-tool.o
  CC      drivers/md/dm-kcopyd.o
  CC [M]  drivers/media/tuners/tea5761.o
  LD [M]  drivers/usb/storage/usb-storage.o
  CC      drivers/usb/serial/usb-serial.o
  CC [M]  drivers/media/tuners/tda9887.o
  CC [M]  drivers/bluetooth/rtk_btusb.o
  CC      drivers/md/dm-sysfs.o
  CC      drivers/net/ethernet/stmicro/stmmac/dwmac-generic.o
  CC      drivers/usb/serial/generic.o
  CC      drivers/md/dm-stats.o
  CC [M]  drivers/media/tuners/tda827x.o
  CC      drivers/usb/serial/bus.o
  AR      drivers/net/ethernet/stmicro/stmmac/built-in.a
  AR      drivers/net/ethernet/stmicro/built-in.a
  AR      drivers/net/ethernet/xilinx/built-in.a
  AR      drivers/net/ethernet/pensando/built-in.a
  AR      drivers/net/ethernet/built-in.a
  AR      drivers/net/wireless/rockchip_wlan/rkwifi/built-in.a
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_cmd.o
  CC [M]  drivers/media/tuners/tda18271-maps.o
  CC      drivers/usb/serial/ch341.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_pcie_linux.o       
  CC      drivers/md/dm-rq.o
  AR      drivers/bluetooth/built-in.a
  CC      drivers/opp/core.o
  CC [M]  drivers/media/tuners/tda18271-common.o
  CC      drivers/usb/serial/cp210x.o
  CC      drivers/md/dm-builtin.o
  CC [M]  drivers/media/tuners/tda18271-fe.o
  CC      drivers/md/dm-bufio.o
  CC      drivers/opp/cpu.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/pcie_core.o
  CC      drivers/usb/serial/ftdi_sio.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_security.o
  CC [M]  drivers/media/tuners/xc5000.o
  CC      drivers/opp/of.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_flowring.o
  CC      drivers/md/dm-bio-prison-v1.o
  CC      drivers/opp/debugfs.o
  CC [M]  drivers/media/tuners/xc4000.o
  CC      drivers/usb/serial/keyspan.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_debug.o
  AR      drivers/opp/built-in.a
  CC      drivers/cpufreq/cpufreq.o
  CC      drivers/md/dm-bio-prison-v2.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_msgbuf.o
  CC [M]  drivers/media/tuners/msi001.o
  CC      drivers/md/dm-thin.o
  CC      drivers/usb/serial/option.o
  CC [M]  drivers/media/tuners/mt2060.o
  CC      drivers/usb/serial/oti6858.o
  CC      drivers/cpufreq/freq_table.o
  CC [M]  drivers/media/tuners/mt2063.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_io.o
  CC      drivers/cpufreq/cpufreq_stats.o
  CC      drivers/usb/serial/pl2303.o
  CC      drivers/cpufreq/cpufreq_times.o
  CC      drivers/md/dm-thin-metadata.o
  CC [M]  drivers/media/tuners/mt2266.o
  CC      drivers/usb/serial/qcserial.o
  CC      drivers/cpufreq/cpufreq_performance.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_ioctl_query.o
  CC [M]  drivers/media/tuners/qt1010.o
  CC      drivers/usb/serial/sierra.o
  CC      drivers/cpufreq/cpufreq_powersave.o
  CC      drivers/md/dm-user.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_linux_lb.o
  CC      drivers/cpufreq/cpufreq_userspace.o
  CC [M]  drivers/media/tuners/mt2131.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_ioctl_set.o
  CC      drivers/usb/serial/usb_wwan.o
  CC      drivers/cpufreq/cpufreq_ondemand.o
  CC [M]  drivers/media/tuners/mxl5005s.o
  AR      drivers/md/built-in.a
  CC      drivers/cpuidle/governors/menu.o
  AR      drivers/cpuidle/governors/built-in.a
  CC      drivers/cpuidle/cpuidle.o
  CC      drivers/cpufreq/cpufreq_conservative.o
  AR      drivers/usb/serial/built-in.a
  CC      drivers/usb/misc/ezusb.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_rtt.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_ieee80211.o
  AR      drivers/usb/misc/built-in.a
  CC      drivers/usb/gadget/udc/core.o
  CC      drivers/cpufreq/cpufreq_interactive.o
  CC      drivers/cpuidle/driver.o
  CC      drivers/cpuidle/governor.o
  CC      drivers/usb/gadget/udc/trace.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_mlme.o
  CC      drivers/cpuidle/sysfs.o
  CC      drivers/cpufreq/cpufreq_governor.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/bcm_app_utils.o
  CC      drivers/cpuidle/dt_idle_states.o
  AR      drivers/usb/gadget/udc/built-in.a
  CC      drivers/usb/gadget/function/f_acm.o
  CC      drivers/cpufreq/cpufreq_governor_attr_set.o
  CC      drivers/cpuidle/cpuidle-arm.o
  CC [M]  drivers/media/tuners/mxl5007t.o
  CC      drivers/cpufreq/cpufreq-dt.o
  CC      drivers/usb/gadget/function/u_serial.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_gpio.o
  CC      drivers/cpuidle/cpuidle-psci.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_mlme_ext.o
  CC [M]  drivers/media/tuners/mc44s803.o
  CC      drivers/cpuidle/cpuidle-psci-domain.o
  CC      drivers/cpufreq/cpufreq-dt-platdev.o
  CC      drivers/usb/gadget/function/u_ether.o
  LD [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/bcmdhd.o
  CC      drivers/cpufreq/rockchip-cpufreq.o
  AR      drivers/net/wireless/rockchip_wlan/built-in.a
  CC      drivers/mmc/core/core.o
  AR      drivers/cpuidle/built-in.a
  CC [M]  drivers/media/tuners/max2165.o
  CC      drivers/leds/led-core.o
  CC [M]  drivers/media/tuners/tda18218.o
  CC      drivers/leds/led-class.o
  CC      drivers/usb/gadget/function/f_rndis.o
  AR      drivers/cpufreq/built-in.a
  CC      drivers/firmware/arm_scmi/bus.o
  CC      drivers/leds/leds-gpio.o
  CC [M]  drivers/media/tuners/tda18212.o
  CC      drivers/firmware/arm_scmi/driver.o
  CC      drivers/mmc/core/bus.o
  CC      drivers/usb/gadget/function/rndis.o
  CC [M]  drivers/media/tuners/e4000.o
  CC      drivers/leds/leds-is31fl32xx.o
  CC      drivers/mmc/core/host.o
  AR      drivers/leds/built-in.a
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_mi.o
  CC [M]  drivers/media/tuners/fc2580.o
  CC      drivers/usb/gadget/function/f_mass_storage.o
  CC      drivers/firmware/arm_scmi/notify.o
  CC      drivers/mmc/core/mmc.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_wlan_util.o
  CC [M]  drivers/media/tuners/tua9001.o
  CC      drivers/firmware/arm_scmi/base.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_vht.o
  CC [M]  drivers/media/tuners/si2157.o
  CC      drivers/firmware/arm_scmi/clock.o
  CC      drivers/mmc/core/mmc_ops.o
  CC      drivers/usb/gadget/function/storage_common.o
  CC [M]  drivers/media/tuners/fc0011.o
  CC      drivers/firmware/arm_scmi/perf.o
  CC      drivers/usb/gadget/function/f_fs.o
  CC      drivers/mmc/core/sd.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_pwrctrl.o
  CC [M]  drivers/media/tuners/fc0012.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_rf.o
  CC      drivers/firmware/arm_scmi/power.o
  CC [M]  drivers/media/tuners/fc0013.o
  CC      drivers/firmware/arm_scmi/reset.o
  CC      drivers/mmc/core/sd_ops.o
  CC      drivers/firmware/arm_scmi/sensors.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_chplan.o
  CC [M]  drivers/media/tuners/it913x.o
  CC      drivers/mmc/core/sdio.o
  CC      drivers/usb/gadget/function/f_uvc.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/monitor/rtw_radiotap.o
  CC      drivers/firmware/arm_scmi/system.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_recv.o
  CC [M]  drivers/media/tuners/r820t.o
  CC      drivers/firmware/arm_scmi/voltage.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_sta_mgt.o
  CC      drivers/mmc/core/sdio_ops.o
  CC      drivers/usb/gadget/function/uvc_queue.o
  CC      drivers/firmware/arm_scmi/shmem.o
  CC [M]  drivers/media/tuners/mxl301rf.o
  CC      drivers/mmc/core/sdio_bus.o
  CC      drivers/firmware/arm_scmi/mailbox.o
  CC      drivers/usb/gadget/function/uvc_v4l2.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_ap.o
  CC      drivers/firmware/arm_scmi/smc.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/wds/rtw_wds.o
  CC [M]  drivers/media/tuners/qm1d1c0042.o
  CC      drivers/mmc/core/sdio_cis.o
  CC      drivers/usb/gadget/function/uvc_video.o
  CC      drivers/firmware/arm_scmi/scmi_pm_domain.o
  CC [M]  drivers/media/tuners/qm1d1b0004.o
  CC      drivers/mmc/core/sdio_io.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/mesh/rtw_mesh.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/mesh/rtw_mesh_pathtbl.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/mesh/rtw_mesh_hwmp.o
  AR      drivers/firmware/arm_scmi/built-in.a
  CC      drivers/usb/gadget/function/uvc_configfs.o
  AR      drivers/firmware/broadcom/built-in.a
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_xmit.o
  AR      drivers/firmware/meson/built-in.a
  CC [M]  drivers/media/tuners/m88rs6000t.o
  CC      drivers/firmware/efi/libstub/efi-stub-helper.o
  CC      drivers/mmc/core/sdio_irq.o
  CC      drivers/firmware/efi/libstub/gop.o
  CC [M]  drivers/media/tuners/tda18250.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_p2p.o
  CC      drivers/mmc/core/slot-gpio.o
  CC      drivers/firmware/efi/libstub/secureboot.o
  AR      drivers/usb/gadget/function/built-in.a
  AR      drivers/usb/gadget/legacy/built-in.a
  CC      drivers/usb/gadget/usbstring.o
  LD [M]  drivers/media/tuners/tda18271.o
  CC      drivers/mmc/core/regulator.o
  CC [M]  drivers/media/dvb-frontends/drx39xyj/drxj.o
  CC      drivers/firmware/efi/libstub/tpm.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_rson.o
  CC      drivers/usb/gadget/config.o
  CC      drivers/mmc/core/pwrseq.o
  CC      drivers/firmware/efi/libstub/file.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_tdls.o
  CC      drivers/usb/gadget/epautoconf.o
  CC      drivers/mmc/core/debugfs.o
  CC      drivers/firmware/efi/libstub/mem.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_br_ext.o
  CC      drivers/usb/gadget/composite.o
  CC      drivers/firmware/efi/libstub/random.o
  CC      drivers/mmc/core/pwrseq_simple.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_iol.o
  CC      drivers/firmware/efi/libstub/randomalloc.o
  CC      drivers/mmc/core/pwrseq_emmc.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_sreset.o
  CC      drivers/firmware/efi/libstub/pci.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_btcoex_wifionly.o
  CC      drivers/mmc/core/block.o
  LD [M]  drivers/media/dvb-frontends/drx39xyj/drx39xyj.o
  CC [M]  drivers/media/dvb-frontends/cxd2880/cxd2880_common.o
  CC [M]  drivers/media/dvb-frontends/cxd2880/cxd2880_devio_spi.o
  CC      drivers/usb/gadget/functions.o
  CC      drivers/firmware/efi/libstub/skip_spaces.o
  CC      drivers/firmware/efi/libstub/lib-cmdline.o
  CC [M]  drivers/media/dvb-frontends/cxd2880/cxd2880_integ.o
  CC      drivers/firmware/efi/libstub/lib-ctype.o
  CC      drivers/firmware/efi/libstub/alignedmem.o
  CC [M]  drivers/media/dvb-frontends/cxd2880/cxd2880_io.o
  CC      drivers/usb/gadget/configfs.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_btcoex.o
  CC [M]  drivers/media/dvb-frontends/cxd2880/cxd2880_spi_device.o
  CC      drivers/mmc/host/sdhci.o
  CC      drivers/firmware/efi/libstub/relocate.o
  CC [M]  drivers/media/dvb-frontends/cxd2880/cxd2880_tnrdmd.o
  CC      drivers/firmware/efi/libstub/vsprintf.o
  CC      drivers/mmc/core/queue.o
  CC      drivers/firmware/efi/libstub/efi-stub.o
  CC      drivers/usb/gadget/u_f.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_beamforming.o
  CC      drivers/mmc/core/mmc_test.o
  CC      drivers/firmware/efi/libstub/fdt.o
  AR      drivers/usb/gadget/built-in.a
  CC      drivers/usb/typec/altmodes/displayport.o
  CC [M]  drivers/media/dvb-frontends/cxd2880/cxd2880_tnrdmd_dvbt2.o
  CC      drivers/firmware/efi/libstub/string.o
  CC      drivers/firmware/efi/libstub/lib-fdt_rw.o
  AR      drivers/usb/typec/altmodes/built-in.a
  CC      drivers/usb/typec/tcpm/tcpm.o
  CC [M]  drivers/media/dvb-frontends/cxd2880/cxd2880_tnrdmd_dvbt2_mon.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_odm.o
  CC      drivers/firmware/efi/libstub/lib-fdt_ro.o
  CC      drivers/mmc/host/dw_mmc.o
  CC      drivers/firmware/efi/libstub/lib-fdt_wip.o
  CC      drivers/firmware/efi/libstub/lib-fdt.o
  CC      drivers/firmware/efi/libstub/lib-fdt_empty_tree.o
  CC      drivers/firmware/efi/libstub/lib-fdt_sw.o
  AR      drivers/mmc/core/built-in.a
  CC [M]  drivers/media/dvb-frontends/cxd2880/cxd2880_tnrdmd_dvbt.o
  AR      drivers/firmware/imx/built-in.a
  CC      drivers/firmware/psci/psci.o
  CC      drivers/firmware/efi/libstub/arm64-stub.o
  STUBCPY drivers/firmware/efi/libstub/alignedmem.stub.o
  STUBCPY drivers/firmware/efi/libstub/arm64-stub.stub.o
  STUBCPY drivers/firmware/efi/libstub/efi-stub-helper.stub.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_rm.o
  STUBCPY drivers/firmware/efi/libstub/efi-stub.stub.o
  STUBCPY drivers/firmware/efi/libstub/fdt.stub.o
  STUBCPY drivers/firmware/efi/libstub/file.stub.o
  STUBCPY drivers/firmware/efi/libstub/gop.stub.o
  CC [M]  drivers/media/dvb-frontends/cxd2880/cxd2880_tnrdmd_dvbt_mon.o
  STUBCPY drivers/firmware/efi/libstub/lib-cmdline.stub.o
  STUBCPY drivers/firmware/efi/libstub/lib-ctype.stub.o
  STUBCPY drivers/firmware/efi/libstub/lib-fdt.stub.o
  STUBCPY drivers/firmware/efi/libstub/lib-fdt_empty_tree.stub.o
  STUBCPY drivers/firmware/efi/libstub/lib-fdt_ro.stub.o
  STUBCPY drivers/firmware/efi/libstub/lib-fdt_rw.stub.o
  STUBCPY drivers/firmware/efi/libstub/lib-fdt_sw.stub.o
  STUBCPY drivers/firmware/efi/libstub/lib-fdt_wip.stub.o
  STUBCPY drivers/firmware/efi/libstub/mem.stub.o
  STUBCPY drivers/firmware/efi/libstub/pci.stub.o
  STUBCPY drivers/firmware/efi/libstub/random.stub.o
  STUBCPY drivers/firmware/efi/libstub/randomalloc.stub.o
  STUBCPY drivers/firmware/efi/libstub/relocate.stub.o
  STUBCPY drivers/firmware/efi/libstub/secureboot.stub.o
  STUBCPY drivers/firmware/efi/libstub/skip_spaces.stub.o
  STUBCPY drivers/firmware/efi/libstub/string.stub.o
  STUBCPY drivers/firmware/efi/libstub/tpm.stub.o
  STUBCPY drivers/firmware/efi/libstub/vsprintf.stub.o
  AR      drivers/firmware/efi/libstub/lib.a
  CC      drivers/firmware/efi/efi.o
  AR      drivers/firmware/psci/built-in.a
  CC      drivers/media/mc/mc-device.o
  CC [M]  drivers/media/dvb-frontends/cxd2880/cxd2880_tnrdmd_mon.o
  CC      drivers/mmc/host/dw_mmc-pltfm.o
  CC [M]  drivers/media/dvb-frontends/cxd2880/cxd2880_top.o
  CC      drivers/firmware/efi/vars.o
  CC      drivers/usb/typec/tcpm/fusb302.o
  CC      drivers/media/mc/mc-devnode.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_rm_fsm.o
  CC      drivers/mmc/host/dw_mmc-rockchip.o
  CC      drivers/firmware/efi/reboot.o
  CC      drivers/media/mc/mc-entity.o
  LD [M]  drivers/media/dvb-frontends/cxd2880/cxd2880.o
  AR      drivers/media/dvb-frontends/built-in.a
  CC [M]  drivers/media/dvb-frontends/dvb-pll.o
  CC      drivers/mmc/host/rk_sdmmc_ops.o
  CC      drivers/usb/typec/tcpm/tcpci.o
  CC      drivers/firmware/efi/memattr.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_ft.o
  CC [M]  drivers/media/dvb-frontends/stv0299.o
  CC      drivers/firmware/efi/tpm.o
  CC      drivers/media/mc/mc-request.o
  CC      drivers/mmc/host/sdhci-pltfm.o
  CC      drivers/usb/typec/tcpm/tcpci_husb311.o
  CC      drivers/firmware/efi/capsule.o
  CC      drivers/media/mc/mc-dev-allocator.o
  CC [M]  drivers/media/dvb-frontends/stb0899_drv.o
  CC      drivers/mmc/host/sdhci-of-arasan.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_wnm.o
  AR      drivers/usb/typec/tcpm/built-in.a
  AR      drivers/usb/typec/mux/built-in.a
  CC      drivers/usb/typec/class.o
  CC      drivers/firmware/efi/memmap.o
  AR      drivers/media/mc/built-in.a
  CC      drivers/crypto/rockchip/cryptodev_linux/ioctl.o
  CC      drivers/firmware/efi/fdtparams.o
  CC [M]  drivers/media/dvb-frontends/stb0899_algo.o
  CC      drivers/mmc/host/sdhci-of-dwcmshc.o
  CC      drivers/usb/typec/mux.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_mbo.o
  CC      drivers/firmware/efi/esrt.o
  CC      drivers/crypto/rockchip/cryptodev_linux/main.o
  CC      drivers/usb/typec/bus.o
  CC      drivers/mmc/host/cqhci-core.o
  CC      drivers/firmware/efi/efi-pstore.o
  CC [M]  drivers/media/dvb-frontends/stb6100.o
  AR      drivers/usb/typec/built-in.a
  CC      drivers/usb/roles/class.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_rm_util.o
  CC      drivers/crypto/rockchip/cryptodev_linux/cryptlib.o
  CC      drivers/firmware/efi/runtime-wrappers.o
  CC [M]  drivers/media/dvb-frontends/sp8870.o
  AR      drivers/usb/roles/built-in.a
  AR      drivers/usb/built-in.a
  CC      drivers/clocksource/timer-of.o
  AR      drivers/mmc/host/built-in.a
  AR      drivers/mmc/built-in.a
  CC      drivers/hid/usbhid/hid-core.o
  CC [M]  drivers/media/dvb-frontends/cx22700.o
  CC      drivers/clocksource/timer-probe.o
  CC      drivers/firmware/efi/efi-init.o
  CC      drivers/crypto/rockchip/cryptodev_linux/authenc.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/efuse/rtw_efuse.o
  CC      drivers/clocksource/mmio.o
  CC [M]  drivers/media/dvb-frontends/s5h1432.o
  CC      drivers/firmware/efi/arm-runtime.o
  CC      drivers/clocksource/timer-rockchip.o
  CC      drivers/hid/usbhid/hiddev.o
  CC [M]  drivers/media/dvb-frontends/cx24110.o
  CC      drivers/firmware/efi/earlycon.o
  CC      drivers/crypto/rockchip/cryptodev_linux/zc.o
  CC      drivers/clocksource/arm_arch_timer.o
  AR      drivers/hid/usbhid/built-in.a
  AR      drivers/firmware/efi/built-in.a
  CC      drivers/hid/i2c-hid/i2c-hid-core.o
  CC      drivers/firmware/smccc/smccc.o
  CC [M]  drivers/media/dvb-frontends/tda8083.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_roch.o
  CC      drivers/firmware/smccc/soc_id.o
  CC      drivers/crypto/rockchip/cryptodev_linux/util.o
  AR      drivers/firmware/smccc/built-in.a
  AR      drivers/firmware/tegra/built-in.a
  AR      drivers/firmware/xilinx/built-in.a
  CC      drivers/firmware/dmi_scan.o
  CC      drivers/clocksource/dummy_timer.o
  CC [M]  drivers/media/dvb-frontends/l64781.o
  CC      drivers/crypto/rockchip/cryptodev_linux/rk_cryptodev.o
  AR      drivers/clocksource/built-in.a
  CC      drivers/of/base.o
  CC      drivers/hid/i2c-hid/i2c-hid-dmi-quirks.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/crypto/aes-internal.o
  CC [M]  drivers/media/dvb-frontends/dib3000mb.o
  AR      drivers/hid/i2c-hid/built-in.a
  CC      drivers/hid/hid-core.o
  CC      drivers/firmware/dmi-id.o
  CC      drivers/firmware/rockchip_sip.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/crypto/aes-internal-enc.o
  AR      drivers/crypto/rockchip/cryptodev_linux/built-in.a
  CC      drivers/crypto/rockchip/rk_crypto_core.o
  CC [M]  drivers/media/dvb-frontends/dib3000mc.o
  CC      drivers/of/device.o
  AR      drivers/firmware/built-in.a
  CC      drivers/vhost/vdpa.o
  CC      drivers/hid/hid-input.o
  CC      drivers/of/platform.o
  CC [M]  drivers/media/dvb-frontends/dibx000_common.o
  CC      drivers/crypto/rockchip/rk_crypto_utils.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/crypto/aes-gcm.o
  CC [M]  drivers/media/dvb-frontends/dib7000m.o
  CC      drivers/crypto/rockchip/rk_crypto_ahash_utils.o
  CC      drivers/of/property.o
  CC      drivers/vhost/vhost.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/crypto/aes-ccm.o
  CC      drivers/crypto/rockchip/rk_crypto_skcipher_utils.o
  CC [M]  drivers/media/dvb-frontends/dib7000p.o
  CC      drivers/hid/hid-quirks.o
  CC      drivers/of/kobj.o
  CC      drivers/crypto/rockchip/procfs.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/crypto/aes-omac1.o
  CC      drivers/hid/hid-debug.o
  CC      drivers/of/fdt.o
  CC      drivers/crypto/rockchip/rk_crypto_v1.o
  CC [M]  drivers/media/dvb-frontends/dib8000.o
  CC      drivers/hid/hidraw.o
  CC      drivers/vhost/iotlb.o
  CC      drivers/of/fdt_address.o
  CC      drivers/crypto/rockchip/rk_crypto_v1_ahash.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/crypto/ccmp.o
  CC      drivers/of/address.o
  CC [M]  drivers/vhost/net.o
  CC      drivers/hid/uhid.o
  CC      drivers/crypto/rockchip/rk_crypto_v1_skcipher.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/crypto/gcmp.o
  CC      drivers/hid/hid-generic.o
  CC      drivers/crypto/rockchip/rk_crypto_v2.o
  CC      drivers/of/irq.o
  CC      drivers/hid/hid-kensington.o
  CC      drivers/crypto/rockchip/rk_crypto_v2_ahash.o
  CC      drivers/of/of_net.o
  AR      drivers/vhost/built-in.a
  LD [M]  drivers/vhost/vhost_net.o
  AR      drivers/staging/media/built-in.a
  CC      drivers/hid/hid-multitouch.o
  AR      drivers/staging/iio/accel/built-in.a
  AR      drivers/staging/iio/adc/built-in.a
  AR      drivers/staging/iio/addac/built-in.a
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/crypto/aes-siv.o
  AR      drivers/staging/iio/cdc/built-in.a
  AR      drivers/staging/iio/frequency/built-in.a
  AR      drivers/staging/iio/impedance-analyzer/built-in.a
  AR      drivers/staging/iio/meter/built-in.a
  AR      drivers/staging/iio/resolver/built-in.a
  AR      drivers/staging/iio/built-in.a
  CC      drivers/crypto/rockchip/rk_crypto_v2_skcipher.o
  AR      drivers/staging/android/ion/heaps/built-in.a
  AR      drivers/staging/android/ion/built-in.a
  CC [M]  drivers/media/dvb-frontends/dib9000.o
  CC      drivers/staging/android/fiq_debugger/fiq_debugger.o
  CC      drivers/of/of_reserved_mem.o
  CC      drivers/crypto/rockchip/rk_crypto_v2_akcipher.o
  AR      drivers/hid/built-in.a
  AR      drivers/platform/built-in.a
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/crypto/aes-ctr.o
  CC      drivers/mailbox/mailbox.o
  AR      drivers/of/built-in.a
  CC      drivers/rpmsg/rpmsg_core.o
  AR      drivers/staging/android/fiq_debugger/built-in.a
  AR      drivers/staging/android/built-in.a
  AR      drivers/staging/hikey9xx/built-in.a
  AR      drivers/staging/built-in.a
  AR      drivers/virt/vboxguest/built-in.a
  AR      drivers/virt/built-in.a
  CC      drivers/devfreq/event/rockchip-dfi.o
  CC      drivers/crypto/rockchip/rk_crypto_v2_pka.o
  CC [M]  drivers/media/dvb-frontends/mt312.o
  AR      drivers/mailbox/built-in.a
  CC      drivers/media/v4l2-core/v4l2-fwnode.o
  CC      drivers/rpmsg/virtio_rpmsg_bus.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/crypto/sha256-internal.o
  CC      drivers/devfreq/event/rockchip-nocp.o
  CC      drivers/crypto/rockchip/rk_crypto_bignum.o
  CC [M]  drivers/media/dvb-frontends/ves1820.o
  AR      drivers/crypto/rockchip/built-in.a
  CC      drivers/crypto/virtio/virtio_crypto_algs.o
  AR      drivers/devfreq/event/built-in.a
  CC      drivers/devfreq/devfreq.o
  AR      drivers/rpmsg/built-in.a
  CC      drivers/extcon/extcon.o
  CC      drivers/media/v4l2-core/v4l2-dev.o
  CC [M]  drivers/media/dvb-frontends/ves1x93.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/crypto/sha256.o       
  CC      drivers/crypto/virtio/virtio_crypto_mgr.o
  CC      drivers/extcon/devres.o
  CC [M]  drivers/media/dvb-frontends/tda1004x.o
  CC      drivers/media/v4l2-core/v4l2-ioctl.o
  AR      drivers/extcon/built-in.a
  CC      drivers/crypto/virtio/virtio_crypto_core.o
  CC      drivers/devfreq/devfreq-event.o
  AR      drivers/iio/accel/built-in.a
  CC      drivers/iio/adc/rockchip_saradc.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/crypto/sha256-prf.o
  CC      drivers/devfreq/governor_simpleondemand.o
  CC [M]  drivers/media/dvb-frontends/sp887x.o
  AR      drivers/crypto/virtio/built-in.a
  AR      drivers/crypto/hisilicon/built-in.a
  AR      drivers/crypto/built-in.a
  CC      drivers/perf/arm_pmu.o
  CC      drivers/iio/adc/adc-firefly-demo.o
  CC      drivers/devfreq/governor_performance.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/crypto/rtw_crypto_wrap.o
  CC [M]  drivers/media/dvb-frontends/nxt6000.o
  AR      drivers/iio/adc/built-in.a
  AR      drivers/iio/afe/built-in.a
  CC      drivers/devfreq/governor_powersave.o
  AR      drivers/iio/amplifiers/built-in.a
  CC      drivers/iio/buffer/industrialio-triggered-buffer.o
  CC      drivers/perf/arm_pmu_platform.o
  CC      drivers/devfreq/governor_userspace.o
  CC      drivers/iio/buffer/kfifo_buf.o
  CC [M]  drivers/media/dvb-frontends/mt352.o
  CC      drivers/media/v4l2-core/v4l2-device.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_swcrypto.o
  CC      drivers/devfreq/rockchip_bus.o
  AR      drivers/perf/built-in.a
  AR      drivers/hwtracing/intel_th/built-in.a
  AR      drivers/android/built-in.a
  AR      drivers/iio/buffer/built-in.a
  CC      drivers/nvmem/core.o
  AR      drivers/iio/chemical/built-in.a
  AR      drivers/iio/common/cros_ec_sensors/built-in.a
  AR      drivers/iio/common/hid-sensors/built-in.a
  AR      drivers/iio/common/ms_sensors/built-in.a
  AR      drivers/iio/common/ssp_sensors/built-in.a
  AR      drivers/iio/common/st_sensors/built-in.a
  AR      drivers/iio/common/built-in.a
  CC      drivers/media/v4l2-core/v4l2-fh.o
  CC [M]  drivers/media/dvb-frontends/zl10036.o
  AR      drivers/iio/dac/built-in.a
  AR      drivers/iio/dummy/built-in.a
  AR      drivers/iio/gyro/built-in.a
  AR      drivers/iio/frequency/built-in.a
  AR      drivers/iio/health/built-in.a
  AR      drivers/iio/humidity/built-in.a
  AR      drivers/iio/imu/bmi160/built-in.a
  AR      drivers/iio/imu/inv_icm42600/built-in.a
  AR      drivers/iio/imu/inv_mpu6050/built-in.a
  AR      drivers/iio/imu/st_lsm6dsr/built-in.a
  AR      drivers/iio/imu/st_lsm6dsx/built-in.a
  AR      drivers/iio/imu/built-in.a
  CC      drivers/iio/light/isl29018.o
  CC      drivers/devfreq/rockchip_dmc.o
  CC      drivers/media/v4l2-core/v4l2-event.o
  CC [M]  drivers/media/dvb-frontends/zl10039.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/osdep_service.o
  CC      drivers/nvmem/rockchip-efuse.o
  CC      drivers/iio/light/tsl2563.o
  CC [M]  drivers/media/dvb-frontends/zl10353.o
  CC      drivers/media/v4l2-core/v4l2-ctrls.o
  CC      drivers/nvmem/rockchip-otp.o
  CC      drivers/iio/light/tsl2583.o
  CC [M]  drivers/media/dvb-frontends/cx22702.o
  CC      drivers/devfreq/rockchip_dmc_common.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/os_intfs.o
  AR      drivers/nvmem/built-in.a
  CC      drivers/tee/optee/core.o
  AR      drivers/iio/light/built-in.a
  AR      drivers/iio/magnetometer/built-in.a
  AR      drivers/iio/multiplexer/built-in.a
  AR      drivers/iio/orientation/built-in.a
  AR      drivers/iio/position/built-in.a
  AR      drivers/iio/potentiometer/built-in.a
  AR      drivers/iio/potentiostat/built-in.a
  AR      drivers/iio/pressure/built-in.a
  AR      drivers/iio/proximity/built-in.a
  AR      drivers/iio/resolver/built-in.a
  AR      drivers/iio/temperature/built-in.a
  CC      drivers/iio/trigger/iio-trig-sysfs.o
  AR      drivers/devfreq/built-in.a
  CC [M]  drivers/media/dvb-frontends/drxd_firm.o
  CC      drivers/headset_observe/rockchip_headset_core.o
  CC [M]  drivers/media/dvb-frontends/drxd_hard.o
  AR      drivers/iio/trigger/built-in.a
  CC      drivers/tee/optee/call.o
  CC      drivers/iio/industrialio-core.o
  CC      drivers/headset_observe/rk_headset.o
  CC      drivers/media/v4l2-core/v4l2-subdev.o
  CC      drivers/tee/optee/rpc.o
  CC      drivers/headset_observe/rk_headset_irq_hook_adc.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/usb_intf.o
  CC      drivers/iio/industrialio-event.o
  CC [M]  drivers/media/dvb-frontends/tda10021.o
  CC      drivers/tee/optee/supp.o
  AR      drivers/headset_observe/built-in.a
  CC      drivers/rknpu/rknpu_drv.o
  CC      drivers/media/v4l2-core/v4l2-clk.o
  CC [M]  drivers/media/dvb-frontends/tda10023.o
  CC      drivers/tee/optee/shm_pool.o
  CC      drivers/iio/inkern.o
  CC      drivers/media/v4l2-core/v4l2-async.o
  CC      drivers/tee/optee/device.o
  CC [M]  drivers/media/dvb-frontends/stv0297.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/usb_ops_linux.o
  CC      drivers/iio/industrialio-buffer.o
  CC      drivers/rknpu/rknpu_reset.o
  AR      drivers/tee/optee/built-in.a
  CC      drivers/tee/tee_core.o
  CC      drivers/media/v4l2-core/v4l2-common.o
  CC [M]  drivers/media/dvb-frontends/nxt200x.o
  CC      drivers/rknpu/rknpu_job.o
  CC      drivers/iio/industrialio-trigger.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/ioctl_linux.o
  CC      drivers/media/v4l2-core/v4l2-compat-ioctl32.o
  CC      drivers/tee/tee_shm.o
  CC [M]  drivers/media/dvb-frontends/or51211.o
  AR      drivers/iio/built-in.a
  CC [M]  drivers/ata/libata-core.o
  CC      drivers/rknpu/rknpu_debugger.o
  CC      drivers/tee/tee_shm_pool.o
  CC [M]  drivers/media/dvb-frontends/or51132.o
  AR      drivers/tee/built-in.a
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/xmit_linux.o  
  CC [M]  drivers/media/dvb-frontends/bcm3510.o
  CC      drivers/rknpu/rknpu_gem.o
  CC [M]  drivers/media/dvb-frontends/s5h1420.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/mlme_linux.o
  AR      drivers/rknpu/built-in.a
  CC      drivers/media/dvb-core/dvbdev.o
  CC      drivers/media/v4l2-core/v4l2-trace.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/recv_linux.o
  CC [M]  drivers/media/dvb-frontends/lgdt330x.o
  CC      drivers/media/dvb-core/dmxdev.o
  CC      drivers/media/v4l2-core/v4l2-mc.o
  CC [M]  drivers/ata/libata-scsi.o
  AR      drivers/media/rc/keymaps/built-in.a
  AR      drivers/media/rc/built-in.a
  CC      drivers/media/cec/core/cec-core.o
  CC [M]  drivers/media/dvb-frontends/lgdt3305.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/ioctl_cfg80211.o
  CC      drivers/media/v4l2-core/v4l2-spi.o
  CC      drivers/media/cec/core/cec-adap.o
  CC      drivers/media/dvb-core/dvb_demux.o
  CC [M]  drivers/media/dvb-frontends/lgdt3306a.o
  CC      drivers/media/v4l2-core/v4l2-i2c.o
  CC      drivers/media/dvb-core/dvb_ca_en50221.o
  CC      drivers/media/v4l2-core/v4l2-dv-timings.o
  CC [M]  drivers/ata/libata-eh.o
  CC [M]  drivers/media/dvb-frontends/lg2160.o
  CC      drivers/media/cec/core/cec-api.o
  CC      drivers/media/v4l2-core/v4l2-mem2mem.o
  CC      drivers/media/dvb-core/dvb_frontend.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/rtw_cfgvendor.o
  CC [M]  drivers/media/dvb-frontends/cx24123.o
  CC      drivers/media/cec/core/cec-notifier.o
  AR      drivers/media/cec/core/built-in.a
  AR      drivers/media/cec/i2c/built-in.a
  AR      drivers/media/cec/platform/built-in.a
  AR      drivers/media/cec/usb/built-in.a
  AR      drivers/media/cec/built-in.a
  AR      drivers/media/common/b2c2/built-in.a
  AR      drivers/media/common/saa7146/built-in.a
  AR      drivers/media/common/siano/built-in.a
  CC [M]  drivers/media/dvb-frontends/lnbh25.o
  AR      drivers/media/common/v4l2-tpg/built-in.a
  CC      drivers/media/common/videobuf2/videobuf2-core.o
  AR      drivers/media/v4l2-core/built-in.a
  AR      drivers/media/platform/ti-vpe/built-in.a
  AR      drivers/media/platform/stm32/built-in.a
  AR      drivers/media/platform/davinci/built-in.a
  CC      drivers/media/platform/rockchip/rga/rga.o
  CC [M]  drivers/ata/libata-transport.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/wifi_regd.o   
  CC      drivers/media/dvb-core/dvb_net.o
  CC [M]  drivers/media/dvb-frontends/lnbh29.o
  CC [M]  drivers/media/dvb-frontends/lnbp21.o
  CC      drivers/media/platform/rockchip/rga/rga-hw.o
  CC [M]  drivers/ata/libata-trace.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/rtw_android.o
  CC      drivers/media/dvb-core/dvb_ringbuffer.o
  CC [M]  drivers/media/dvb-frontends/lnbp22.o
  CC      drivers/media/common/videobuf2/vb2-trace.o
  CC      drivers/media/platform/rockchip/rga/rga-buf.o
  CC [M]  drivers/ata/libata-sata.o
  CC      drivers/media/dvb-core/dvb_math.o
  CC [M]  drivers/media/dvb-frontends/isl6405.o
  CC      drivers/media/common/videobuf2/videobuf2-v4l2.o
  AR      drivers/media/platform/rockchip/rga/built-in.a
  CC      drivers/media/platform/rockchip/cif/dev.o
  AR      drivers/media/dvb-core/built-in.a
  AR      drivers/media/pci/ttpci/built-in.a
  AR      drivers/media/pci/b2c2/built-in.a
  AR      drivers/media/pci/pluto2/built-in.a
  AR      drivers/media/pci/dm1105/built-in.a
  AR      drivers/media/pci/pt1/built-in.a
  AR      drivers/media/pci/pt3/built-in.a
  AR      drivers/media/pci/mantis/built-in.a
  AR      drivers/media/pci/ngene/built-in.a
  CC [M]  drivers/media/dvb-frontends/isl6421.o
  AR      drivers/media/pci/ddbridge/built-in.a
  AR      drivers/media/pci/saa7146/built-in.a
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/rtw_proc.o    
  AR      drivers/media/pci/smipcie/built-in.a
  AR      drivers/media/pci/netup_unidvb/built-in.a
  AR      drivers/media/pci/intel/ipu3/built-in.a
  AR      drivers/media/pci/intel/built-in.a
  AR      drivers/media/pci/built-in.a
  AR      drivers/media/usb/ttusb-dec/built-in.a
  CC [M]  drivers/ata/libata-pmp.o
  AR      drivers/media/usb/ttusb-budget/built-in.a
  AR      drivers/media/usb/dvb-usb/built-in.a
  AR      drivers/media/usb/dvb-usb-v2/built-in.a
  AR      drivers/media/usb/siano/built-in.a
  AR      drivers/media/usb/b2c2/built-in.a
  AR      drivers/media/usb/zr364xx/built-in.a
  AR      drivers/media/usb/stkwebcam/built-in.a
  AR      drivers/media/usb/s2255/built-in.a
  CC      drivers/media/usb/uvc/uvc_driver.o
  CC [M]  drivers/media/dvb-frontends/tda10086.o
  CC      drivers/media/common/videobuf2/videobuf2-memops.o
  CC [M]  drivers/ata/ahci.o
  CC      drivers/media/common/videobuf2/videobuf2-cma-sg.o
  CC      drivers/media/platform/rockchip/cif/capture.o
  CC [M]  drivers/media/dvb-frontends/tda826x.o
  CC [M]  drivers/media/dvb-frontends/tda8261.o
  CC      drivers/media/common/videobuf2/videobuf2-vmalloc.o
  CC      drivers/media/usb/uvc/uvc_queue.o
  CC [M]  drivers/ata/libahci.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/nlrtw.o
  CC [M]  drivers/media/dvb-frontends/dib0070.o
  CC      drivers/media/common/videobuf2/videobuf2-dma-contig.o
  CC      drivers/media/usb/uvc/uvc_v4l2.o
  CC [M]  drivers/media/dvb-frontends/dib0090.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/rtw_rhashtable.o
  CC      drivers/media/common/videobuf2/videobuf2-dma-sg.o
  CC [M]  drivers/ata/ahci_platform.o
  CC      drivers/media/usb/uvc/uvc_video.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/os_dep/linux/ioctl_mp.o
  AR      drivers/media/common/videobuf2/built-in.a
  AR      drivers/media/common/built-in.a
  AR      drivers/media/mmc/siano/built-in.a
  AR      drivers/media/mmc/built-in.a
  AR      drivers/media/firewire/built-in.a
  AR      drivers/media/spi/built-in.a
  CC [M]  drivers/media/spi/cxd2880-spi.o
  CC [M]  drivers/media/dvb-frontends/tua6100.o
  CC [M]  drivers/ata/libahci_platform.o
  CC [M]  drivers/media/dvb-frontends/s5h1409.o
  CC      drivers/media/usb/uvc/uvc_ctrl.o
  LD [M]  drivers/ata/libata.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/hal_intf.o
  AR      drivers/media/test-drivers/built-in.a
  AR      drivers/media/radio/built-in.a
  CC [M]  drivers/media/dvb-frontends/itd1000.o
  CC [M]  drivers/media/dvb-frontends/au8522_common.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/hal_com.o
  CC      drivers/media/platform/rockchip/cif/mipi-csi2.o
  CC      drivers/media/platform/rockchip/cif/cif-luma.o
  CC      drivers/media/usb/uvc/uvc_status.o
  CC [M]  drivers/media/dvb-frontends/au8522_dig.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/hal_com_phycfg.o
  CC      drivers/media/usb/uvc/uvc_isight.o
  CC      drivers/media/platform/rockchip/cif/hw.o
  CC [M]  drivers/media/dvb-frontends/au8522_decoder.o
  CC      drivers/media/platform/rockchip/cif/subdev-itf.o
  CC      drivers/media/usb/uvc/uvc_debugfs.o
  CC [M]  drivers/media/dvb-frontends/tda10048.o
  CC      drivers/media/platform/rockchip/cif/procfs.o
  CC      drivers/media/usb/uvc/uvc_metadata.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/hal_phy.o
  CC      drivers/media/platform/rockchip/cif/cif-scale.o
  CC      drivers/media/platform/rockchip/cif/common.o
  CC [M]  drivers/media/dvb-frontends/cx24113.o
  CC      drivers/media/usb/uvc/uvc_entity.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/hal_dm.o
  CC [M]  drivers/media/dvb-frontends/s5h1411.o
  CC      drivers/media/platform/rockchip/cif/cif-tools.o
  AR      drivers/media/usb/uvc/built-in.a
  AR      drivers/media/usb/built-in.a
  CC      drivers/media/platform/rockchip/isp1/rkisp1.o
  CC [M]  drivers/media/dvb-frontends/lgs8gl5.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/hal_dm_acs.o
  CC [M]  drivers/media/dvb-frontends/tda665x.o
  CC [M]  drivers/media/dvb-frontends/lgs8gxx.o
  AR      drivers/media/platform/rockchip/cif/built-in.a
  CC      drivers/media/platform/rockchip/isp/hw.o
  CC [M]  drivers/media/dvb-frontends/atbm8830.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/hal_btcoex_wifionly.o
  CC      drivers/media/platform/rockchip/isp1/dev.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/hal_btcoex.o
  CC      drivers/media/platform/rockchip/ispp/hw.o
  CC [M]  drivers/media/dvb-frontends/af9013.o
  CC      drivers/media/platform/rockchip/isp/dev.o
  CC      drivers/media/platform/rockchip/isp1/regs.o
  CC      drivers/media/platform/rockchip/ispp/dev.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/hal_mp.o
  CC      drivers/media/platform/rockchip/isp/rkisp.o
  CC [M]  drivers/media/dvb-frontends/cx24116.o
  CC      drivers/media/platform/rockchip/isp1/isp_stats.o
  CC      drivers/media/platform/rockchip/ispp/common.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/hal_mcc.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/hal_hci/hal_usb.o
  CC [M]  drivers/media/dvb-frontends/cx24117.o
  CC      drivers/media/platform/rockchip/isp1/isp_params.o
  CC      drivers/media/platform/rockchip/ispp/ispp.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/led/hal_led.o
  CC [M]  drivers/media/dvb-frontends/cx24120.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/led/hal_usb_led.o
  CC      drivers/media/platform/rockchip/ispp/stream.o
  CC      drivers/media/platform/rockchip/isp/regs.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/rtl8821c_halinit.o
  CC      drivers/media/platform/rockchip/isp1/capture.o
  CC [M]  drivers/media/dvb-frontends/si21xx.o
  CC      drivers/media/platform/rockchip/isp/common.o
  CC      drivers/media/platform/rockchip/ispp/params.o
  CC [M]  drivers/media/dvb-frontends/si2168.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/rtl8821c_mac.o
  CC      drivers/media/platform/rockchip/isp/isp_stats.o
  CC      drivers/media/platform/rockchip/isp1/dmarx.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/rtl8821c_cmd.o
  CC      drivers/media/platform/rockchip/ispp/stats.o
  CC [M]  drivers/media/dvb-frontends/stv0288.o
  CC      drivers/media/platform/rockchip/isp/isp_params.o
  AR      drivers/media/platform/rockchip/isp1/built-in.a
  CC      drivers/media/platform/rockchip/hdmirx/rk_hdmirx.o
  CC [M]  drivers/media/dvb-frontends/stb6000.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/rtl8821c_phy.o
  CC      drivers/media/platform/rockchip/ispp/procfs.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/rtl8821c_dm.o
  CC      drivers/media/platform/rockchip/isp/capture.o
  CC [M]  drivers/media/dvb-frontends/s921.o
  CC      drivers/media/platform/rockchip/ispp/stream_v20.o
  CC [M]  drivers/media/dvb-frontends/stv6110.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/rtl8821c_ops.o
  CC      drivers/media/platform/rockchip/ispp/params_v20.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/hal8821c_fw.o
  CC      drivers/media/platform/rockchip/isp/dmarx.o
  CC [M]  drivers/media/dvb-frontends/stv0900_core.o
  CC      drivers/media/platform/rockchip/hdmirx/rk_hdmirx_cec.o
  AR      drivers/media/platform/rockchip/ispp/built-in.a
  AR      drivers/media/platform/omap/built-in.a
  AR      drivers/media/platform/sunxi/sun4i-csi/built-in.a
  AR      drivers/media/platform/sunxi/sun6i-csi/built-in.a
  AR      drivers/media/platform/sunxi/sun8i-di/built-in.a
  AR      drivers/media/platform/sunxi/sun8i-rotate/built-in.a
  AR      drivers/media/platform/sunxi/built-in.a
  CC [M]  drivers/media/dvb-frontends/stv0900_sw.o
  CC      drivers/media/platform/rockchip/hdmirx/rk_hdmirx_hdcp.o
  CC      drivers/media/platform/rockchip/isp/csi.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/usb/rtl8821cu_halinit.o
  CC [M]  drivers/media/dvb-frontends/stv090x.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/usb/rtl8821cu_halmac.o
  AR      drivers/media/platform/rockchip/hdmirx/built-in.a
  CC [M]  drivers/media/dvb-frontends/stv6110x.o
  CC      drivers/media/platform/rockchip/isp/procfs.o
  CC [M]  drivers/media/dvb-frontends/m88ds3103.o
  CC [M]  drivers/media/dvb-frontends/mn88472.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/usb/rtl8821cu_io.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/usb/rtl8821cu_xmit.o
  CC [M]  drivers/media/dvb-frontends/mn88473.o
  CC      drivers/media/platform/rockchip/isp/isp_stats_v1x.o
  CC [M]  drivers/media/dvb-frontends/isl6423.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/usb/rtl8821cu_recv.o
  CC [M]  drivers/media/dvb-frontends/ec100.o
  CC      drivers/media/platform/rockchip/isp/isp_params_v1x.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/usb/rtl8821cu_led.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/rtl8821c/usb/rtl8821cu_ops.o
  CC [M]  drivers/media/dvb-frontends/ds3000.o
  CC [M]  drivers/media/dvb-frontends/ts2020.o
  CC [M]  drivers/media/dvb-frontends/mb86a16.o
  CC [M]  drivers/media/dvb-frontends/mb86a20s.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/efuse/rtl8821c/HalEfuseMask8821C_USB.o
  CC      drivers/media/platform/rockchip/isp/capture_v1x.o
  CC [M]  drivers/media/dvb-frontends/ix2505v.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/hal_halmac.o
  CC [M]  drivers/media/dvb-frontends/stv0367.o
  CC [M]  drivers/media/dvb-frontends/cxd2820r_core.o
  CC [M]  drivers/media/dvb-frontends/cxd2820r_c.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_api.o
  CC      drivers/media/platform/rockchip/isp/isp_stats_v21.o
  CC [M]  drivers/media/dvb-frontends/cxd2820r_t.o
  CC [M]  drivers/media/dvb-frontends/cxd2820r_t2.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_dbg.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_bb_rf_88xx.o
  CC [M]  drivers/media/dvb-frontends/cxd2841er.o
  CC      drivers/media/platform/rockchip/isp/isp_params_v21.o
  CC [M]  drivers/media/dvb-frontends/drxk_hard.o
  CC [M]  drivers/media/dvb-frontends/tda18271c2dd.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_cfg_wmac_88xx.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_common_88xx.o
  CC [M]  drivers/media/dvb-frontends/stv0910.o
  CC [M]  drivers/media/dvb-frontends/stv6111.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_efuse_88xx.o
  CC [M]  drivers/media/dvb-frontends/mxl5xx.o
  CC      drivers/media/platform/rockchip/isp/capture_v21.o
  CC [M]  drivers/media/dvb-frontends/si2165.o
  CC [M]  drivers/media/dvb-frontends/a8293.o
  CC [M]  drivers/media/dvb-frontends/sp2.o
  CC [M]  drivers/media/dvb-frontends/tda10071.o
  CC [M]  drivers/media/dvb-frontends/rtl2830.o
  CC [M]  drivers/media/dvb-frontends/rtl2832.o
  CC [M]  drivers/media/dvb-frontends/rtl2832_sdr.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_flash_88xx.o
  CC      drivers/media/platform/rockchip/isp/capture_v30.o
  CC [M]  drivers/media/dvb-frontends/m88rs2000.o
  CC [M]  drivers/media/dvb-frontends/af9033.o
  CC [M]  drivers/media/dvb-frontends/tc90522.o
  CC [M]  drivers/media/dvb-frontends/mn88443x.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_fw_88xx.o
  CC [M]  drivers/media/dvb-frontends/horus3a.o
  CC [M]  drivers/media/dvb-frontends/ascot2e.o
  CC      drivers/media/platform/rockchip/isp/isp_stats_v3x.o
  CC [M]  drivers/media/dvb-frontends/helene.o
  CC [M]  drivers/media/dvb-frontends/zd1301_demod.o
  CC [M]  drivers/media/dvb-frontends/cxd2099.o
  LD [M]  drivers/media/dvb-frontends/stb0899.o
  LD [M]  drivers/media/dvb-frontends/drxd.o
  LD [M]  drivers/media/dvb-frontends/stv0900.o
  LD [M]  drivers/media/dvb-frontends/cxd2820r.o
  LD [M]  drivers/media/dvb-frontends/drxk.o
  CC      drivers/media/platform/rockchip/isp/isp_params_v3x.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_gpio_88xx.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_init_88xx.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_mimo_88xx.o
  CC      drivers/media/platform/rockchip/isp/bridge.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_usb_88xx.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_8821c/halmac_cfg_wmac_8821c.o
  CC      drivers/media/platform/rockchip/isp/bridge_v30.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_8821c/halmac_common_8821c.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_8821c/halmac_gpio_8821c.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_8821c/halmac_init_8821c.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_8821c/halmac_phy_8821c.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_8821c/halmac_pwr_seq_8821c.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/halmac/halmac_88xx/halmac_8821c/halmac_usb_8821c.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_debug.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_antdiv.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_soml.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_smt_ant.o
  AR      drivers/media/platform/rockchip/isp/built-in.a
  AR      drivers/media/platform/built-in.a
  AR      drivers/media/built-in.a
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_antdect.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_interface.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_phystatus.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_hwconfig.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_dig.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_pathdiv.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_rainfo.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_dynamictxpower.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_adaptivity.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_cfotracking.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_noisemonitor.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_beamforming.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_direct_bf.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_dfs.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/txbf/halcomtxbf.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/txbf/haltxbfinterface.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/txbf/phydm_hal_txbf_api.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_adc_sampling.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_ccx.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_psd.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_primary_cca.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_cck_pd.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_rssi_monitor.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_auto_dbg.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_math_lib.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_api.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_pow_train.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_lna_sat.o  
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_pmac_tx_setting.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_mp.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/phydm_cck_rx_pathdiv.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/halrf/halrf.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/halrf/halrf_debug.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/halrf/halphyrf_ce.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/halrf/halrf_powertracking_ce.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/halrf/halrf_powertracking.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/halrf/halrf_kfree.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/halrf/halrf_psd.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/rtl8821c/halhwimg8821c_bb.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/rtl8821c/halhwimg8821c_mac.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/rtl8821c/phydm_hal_api8821c.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/rtl8821c/phydm_regconfig8821c.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/rtl8821c/phydm_rtl8821c.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/halrf/rtl8821c/halhwimg8821c_rf.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/halrf/rtl8821c/halrf_8821c.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/phydm/halrf/rtl8821c/halrf_iqk_8821c.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/btc/halbtc8821cwifionly.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/btc/halbtc8821c1ant.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/hal/btc/halbtc8821c2ant.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/platform/platform_ops.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/core/rtw_mp.o
  LD [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/8821cu.o
  AR      drivers/net/wireless/built-in.a
  AR      drivers/net/built-in.a
  AR      drivers/built-in.a
  GEN     .version
  CHK     include/generated/compile.h
  LD      vmlinux.o
  MODPOST vmlinux.symvers
  MODINFO modules.builtin.modinfo
  GEN     modules.builtin
  LD      .tmp_vmlinux.kallsyms1
  KSYMS   .tmp_vmlinux.kallsyms1.S
  AS      .tmp_vmlinux.kallsyms1.S
  LD      .tmp_vmlinux.kallsyms2
  KSYMS   .tmp_vmlinux.kallsyms2.S
  AS      .tmp_vmlinux.kallsyms2.S
  LD      vmlinux
  SORTTAB vmlinux
  SYSMAP  System.map
  OBJCOPY arch/arm64/boot/Image
  MODPOST modules-only.symvers
  LZ4C    arch/arm64/boot/Image.lz4
  GEN     Module.symvers
  CC [M]  drivers/ata/ahci.mod.o
  CC [M]  drivers/ata/ahci_platform.mod.o
  CC [M]  drivers/ata/libahci.mod.o
  CC [M]  drivers/ata/libata.mod.o
  CC [M]  drivers/ata/libahci_platform.mod.o
  CC [M]  drivers/bluetooth/btintel.mod.o
  CC [M]  drivers/bluetooth/btbcm.mod.o
  CC [M]  drivers/bluetooth/btrtl.mod.o
  CC [M]  drivers/bluetooth/btusb.mod.o
  CC [M]  drivers/bluetooth/rtk_btusb.mod.o
  CC [M]  drivers/cdrom/cdrom.mod.o
  CC [M]  drivers/gpu/drm/drm_ttm_helper.mod.o
  CC [M]  drivers/gpu/drm/qxl/qxl.mod.o
  CC [M]  drivers/gpu/drm/tiny/cirrus.mod.o
  CC [M]  drivers/gpu/drm/ttm/ttm.mod.o
  CC [M]  drivers/gpu/drm/vkms/vkms.mod.o
  CC [M]  drivers/media/dvb-frontends/a8293.mod.o
  CC [M]  drivers/media/dvb-frontends/af9013.mod.o
  CC [M]  drivers/media/dvb-frontends/af9033.mod.o
  CC [M]  drivers/media/dvb-frontends/ascot2e.mod.o
  CC [M]  drivers/media/dvb-frontends/atbm8830.mod.o
  CC [M]  drivers/media/dvb-frontends/au8522_common.mod.o
  CC [M]  drivers/media/dvb-frontends/au8522_decoder.mod.o
  CC [M]  drivers/media/dvb-frontends/au8522_dig.mod.o
  CC [M]  drivers/media/dvb-frontends/bcm3510.mod.o
  CC [M]  drivers/media/dvb-frontends/cx22700.mod.o
  CC [M]  drivers/media/dvb-frontends/cx22702.mod.o
  CC [M]  drivers/media/dvb-frontends/cx24110.mod.o
  CC [M]  drivers/media/dvb-frontends/cx24113.mod.o
  CC [M]  drivers/media/dvb-frontends/cx24116.mod.o
  CC [M]  drivers/media/dvb-frontends/cx24117.mod.o
  CC [M]  drivers/media/dvb-frontends/cx24120.mod.o
  CC [M]  drivers/media/dvb-frontends/cx24123.mod.o
  CC [M]  drivers/media/dvb-frontends/cxd2099.mod.o
  CC [M]  drivers/media/dvb-frontends/cxd2820r.mod.o
  CC [M]  drivers/media/dvb-frontends/cxd2841er.mod.o
  CC [M]  drivers/media/dvb-frontends/cxd2880/cxd2880.mod.o
  CC [M]  drivers/media/dvb-frontends/dib0070.mod.o
  CC [M]  drivers/media/dvb-frontends/dib0090.mod.o
  CC [M]  drivers/media/dvb-frontends/dib3000mb.mod.o
  CC [M]  drivers/media/dvb-frontends/dib3000mc.mod.o
  CC [M]  drivers/media/dvb-frontends/dib7000m.mod.o
  CC [M]  drivers/media/dvb-frontends/dib7000p.mod.o
  CC [M]  drivers/media/dvb-frontends/dib8000.mod.o
  CC [M]  drivers/media/dvb-frontends/dib9000.mod.o
  CC [M]  drivers/media/dvb-frontends/dibx000_common.mod.o
  CC [M]  drivers/media/dvb-frontends/drx39xyj/drx39xyj.mod.o
  CC [M]  drivers/media/dvb-frontends/drxd.mod.o
  CC [M]  drivers/media/dvb-frontends/drxk.mod.o
  CC [M]  drivers/media/dvb-frontends/ds3000.mod.o
  CC [M]  drivers/media/dvb-frontends/dvb-pll.mod.o
  CC [M]  drivers/media/dvb-frontends/ec100.mod.o
  CC [M]  drivers/media/dvb-frontends/helene.mod.o
  CC [M]  drivers/media/dvb-frontends/horus3a.mod.o
  CC [M]  drivers/media/dvb-frontends/isl6405.mod.o
  CC [M]  drivers/media/dvb-frontends/isl6421.mod.o
  CC [M]  drivers/media/dvb-frontends/itd1000.mod.o
  CC [M]  drivers/media/dvb-frontends/isl6423.mod.o
  CC [M]  drivers/media/dvb-frontends/ix2505v.mod.o
  CC [M]  drivers/media/dvb-frontends/l64781.mod.o
  CC [M]  drivers/media/dvb-frontends/lg2160.mod.o
  CC [M]  drivers/media/dvb-frontends/lgdt3305.mod.o
  CC [M]  drivers/media/dvb-frontends/lgdt3306a.mod.o
  CC [M]  drivers/media/dvb-frontends/lgdt330x.mod.o
  CC [M]  drivers/media/dvb-frontends/lgs8gl5.mod.o
  CC [M]  drivers/media/dvb-frontends/lgs8gxx.mod.o
  CC [M]  drivers/media/dvb-frontends/lnbh25.mod.o
  CC [M]  drivers/media/dvb-frontends/lnbh29.mod.o
  CC [M]  drivers/media/dvb-frontends/lnbp21.mod.o
  CC [M]  drivers/media/dvb-frontends/lnbp22.mod.o
  CC [M]  drivers/media/dvb-frontends/m88ds3103.mod.o
  CC [M]  drivers/media/dvb-frontends/m88rs2000.mod.o
  CC [M]  drivers/media/dvb-frontends/mb86a16.mod.o
  CC [M]  drivers/media/dvb-frontends/mb86a20s.mod.o
  CC [M]  drivers/media/dvb-frontends/mn88443x.mod.o
  CC [M]  drivers/media/dvb-frontends/mn88472.mod.o
  CC [M]  drivers/media/dvb-frontends/mn88473.mod.o
  CC [M]  drivers/media/dvb-frontends/mt312.mod.o
  CC [M]  drivers/media/dvb-frontends/mt352.mod.o
  CC [M]  drivers/media/dvb-frontends/mxl5xx.mod.o
  CC [M]  drivers/media/dvb-frontends/nxt200x.mod.o
  CC [M]  drivers/media/dvb-frontends/nxt6000.mod.o
  CC [M]  drivers/media/dvb-frontends/or51132.mod.o
  CC [M]  drivers/media/dvb-frontends/or51211.mod.o
  CC [M]  drivers/media/dvb-frontends/rtl2830.mod.o
  CC [M]  drivers/media/dvb-frontends/rtl2832.mod.o
  CC [M]  drivers/media/dvb-frontends/rtl2832_sdr.mod.o
  CC [M]  drivers/media/dvb-frontends/s5h1409.mod.o
  CC [M]  drivers/media/dvb-frontends/s5h1411.mod.o
  CC [M]  drivers/media/dvb-frontends/s5h1420.mod.o
  CC [M]  drivers/media/dvb-frontends/s5h1432.mod.o
  CC [M]  drivers/media/dvb-frontends/s921.mod.o
  CC [M]  drivers/media/dvb-frontends/si2165.mod.o
  CC [M]  drivers/media/dvb-frontends/si2168.mod.o
  CC [M]  drivers/media/dvb-frontends/si21xx.mod.o
  CC [M]  drivers/media/dvb-frontends/sp2.mod.o
  CC [M]  drivers/media/dvb-frontends/sp8870.mod.o
  CC [M]  drivers/media/dvb-frontends/sp887x.mod.o
  CC [M]  drivers/media/dvb-frontends/stb0899.mod.o
  CC [M]  drivers/media/dvb-frontends/stb6000.mod.o
  CC [M]  drivers/media/dvb-frontends/stb6100.mod.o
  CC [M]  drivers/media/dvb-frontends/stv0288.mod.o
  CC [M]  drivers/media/dvb-frontends/stv0297.mod.o
  CC [M]  drivers/media/dvb-frontends/stv0299.mod.o
  CC [M]  drivers/media/dvb-frontends/stv0367.mod.o
  CC [M]  drivers/media/dvb-frontends/stv0900.mod.o
  CC [M]  drivers/media/dvb-frontends/stv090x.mod.o
  CC [M]  drivers/media/dvb-frontends/stv0910.mod.o
  CC [M]  drivers/media/dvb-frontends/stv6110.mod.o
  CC [M]  drivers/media/dvb-frontends/stv6110x.mod.o
  CC [M]  drivers/media/dvb-frontends/stv6111.mod.o
  CC [M]  drivers/media/dvb-frontends/tc90522.mod.o
  CC [M]  drivers/media/dvb-frontends/tda10021.mod.o
  CC [M]  drivers/media/dvb-frontends/tda10023.mod.o
  CC [M]  drivers/media/dvb-frontends/tda10048.mod.o
  CC [M]  drivers/media/dvb-frontends/tda1004x.mod.o
  CC [M]  drivers/media/dvb-frontends/tda10071.mod.o
  CC [M]  drivers/media/dvb-frontends/tda10086.mod.o
  CC [M]  drivers/media/dvb-frontends/tda18271c2dd.mod.o
  CC [M]  drivers/media/dvb-frontends/tda665x.mod.o
  CC [M]  drivers/media/dvb-frontends/tda8083.mod.o
  CC [M]  drivers/media/dvb-frontends/tda8261.mod.o
  CC [M]  drivers/media/dvb-frontends/tda826x.mod.o
  CC [M]  drivers/media/dvb-frontends/ts2020.mod.o
  CC [M]  drivers/media/dvb-frontends/tua6100.mod.o
  CC [M]  drivers/media/dvb-frontends/ves1820.mod.o
  CC [M]  drivers/media/dvb-frontends/ves1x93.mod.o
  CC [M]  drivers/media/dvb-frontends/zd1301_demod.mod.o
  CC [M]  drivers/media/dvb-frontends/zl10036.mod.o
  CC [M]  drivers/media/dvb-frontends/zl10039.mod.o
  CC [M]  drivers/media/dvb-frontends/zl10353.mod.o
  CC [M]  drivers/media/spi/cxd2880-spi.mod.o
  CC [M]  drivers/media/tuners/e4000.mod.o
  CC [M]  drivers/media/tuners/fc0011.mod.o
  CC [M]  drivers/media/tuners/fc0012.mod.o
  CC [M]  drivers/media/tuners/fc0013.mod.o
  CC [M]  drivers/media/tuners/fc2580.mod.o
  CC [M]  drivers/media/tuners/it913x.mod.o
  CC [M]  drivers/media/tuners/m88rs6000t.mod.o
  CC [M]  drivers/media/tuners/max2165.mod.o
  CC [M]  drivers/media/tuners/mc44s803.mod.o
  CC [M]  drivers/media/tuners/msi001.mod.o
  CC [M]  drivers/media/tuners/mt2060.mod.o
  CC [M]  drivers/media/tuners/mt2063.mod.o
  CC [M]  drivers/media/tuners/mt20xx.mod.o
  CC [M]  drivers/media/tuners/mt2131.mod.o
  CC [M]  drivers/media/tuners/mt2266.mod.o
  CC [M]  drivers/media/tuners/mxl301rf.mod.o
  CC [M]  drivers/media/tuners/mxl5005s.mod.o
  CC [M]  drivers/media/tuners/mxl5007t.mod.o
  CC [M]  drivers/media/tuners/qm1d1b0004.mod.o
  CC [M]  drivers/media/tuners/qm1d1c0042.mod.o
  CC [M]  drivers/media/tuners/qt1010.mod.o
  CC [M]  drivers/media/tuners/r820t.mod.o
  CC [M]  drivers/media/tuners/si2157.mod.o
  CC [M]  drivers/media/tuners/tda18212.mod.o
  CC [M]  drivers/media/tuners/tda18218.mod.o
  CC [M]  drivers/media/tuners/tda18250.mod.o
  CC [M]  drivers/media/tuners/tda18271.mod.o
  CC [M]  drivers/media/tuners/tda827x.mod.o
  CC [M]  drivers/media/tuners/tda8290.mod.o
  CC [M]  drivers/media/tuners/tda9887.mod.o
  CC [M]  drivers/media/tuners/tea5761.mod.o
  CC [M]  drivers/media/tuners/tea5767.mod.o
  CC [M]  drivers/media/tuners/tua9001.mod.o
  CC [M]  drivers/media/tuners/tuner-simple.mod.o
  CC [M]  drivers/media/tuners/tuner-types.mod.o
  CC [M]  drivers/media/tuners/tuner-xc2028.mod.o
  CC [M]  drivers/media/tuners/xc4000.mod.o
  CC [M]  drivers/media/tuners/xc5000.mod.o
  CC [M]  drivers/net/ethernet/aquantia/atlantic/atlantic.mod.o
  CC [M]  drivers/net/usb/r8152.mod.o
  CC [M]  drivers/net/usb/rtl8150.mod.o
  CC [M]  drivers/net/veth.mod.o
  CC [M]  drivers/net/vxlan.mod.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/bcmdhd.mod.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_static_buf.mod.o
  CC [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/8821cu.mod.o
  CC [M]  drivers/net/wireless/virt_wifi.mod.o
  CC [M]  drivers/scsi/scsi_mod.mod.o
  CC [M]  drivers/scsi/scsi_transport_spi.mod.o
  CC [M]  drivers/scsi/sd_mod.mod.o
  CC [M]  drivers/scsi/sr_mod.mod.o
  CC [M]  drivers/scsi/virtio_scsi.mod.o
  CC [M]  drivers/usb/storage/uas.mod.o
  CC [M]  drivers/usb/storage/usb-storage.mod.o
  CC [M]  drivers/vhost/vhost_net.mod.o
  CC [M]  net/netfilter/ipvs/ip_vs.mod.o
  CC [M]  net/netfilter/ipvs/ip_vs_rr.mod.o
  CC [M]  net/netfilter/xt_ipvs.mod.o
  LD [M]  drivers/ata/ahci.ko
  LD [M]  drivers/ata/ahci_platform.ko
  LD [M]  drivers/ata/libahci.ko
  LD [M]  drivers/ata/libahci_platform.ko
  LD [M]  drivers/ata/libata.ko
  LD [M]  drivers/bluetooth/btbcm.ko
  LD [M]  drivers/bluetooth/btintel.ko
  LD [M]  drivers/bluetooth/btrtl.ko
  LD [M]  drivers/bluetooth/btusb.ko
  LD [M]  drivers/bluetooth/rtk_btusb.ko
  LD [M]  drivers/cdrom/cdrom.ko
  LD [M]  drivers/gpu/drm/qxl/qxl.ko
  LD [M]  drivers/gpu/drm/drm_ttm_helper.ko
  LD [M]  drivers/gpu/drm/tiny/cirrus.ko
  LD [M]  drivers/gpu/drm/ttm/ttm.ko
  LD [M]  drivers/gpu/drm/vkms/vkms.ko
  LD [M]  drivers/media/dvb-frontends/a8293.ko
  LD [M]  drivers/media/dvb-frontends/af9013.ko
  LD [M]  drivers/media/dvb-frontends/af9033.ko
  LD [M]  drivers/media/dvb-frontends/ascot2e.ko
  LD [M]  drivers/media/dvb-frontends/atbm8830.ko
  LD [M]  drivers/media/dvb-frontends/au8522_common.ko
  LD [M]  drivers/media/dvb-frontends/au8522_decoder.ko
  LD [M]  drivers/media/dvb-frontends/au8522_dig.ko
  LD [M]  drivers/media/dvb-frontends/bcm3510.ko
  LD [M]  drivers/media/dvb-frontends/cx22700.ko
  LD [M]  drivers/media/dvb-frontends/cx22702.ko
  LD [M]  drivers/media/dvb-frontends/cx24110.ko
  LD [M]  drivers/media/dvb-frontends/cx24113.ko
  LD [M]  drivers/media/dvb-frontends/cx24116.ko
  LD [M]  drivers/media/dvb-frontends/cx24120.ko
  LD [M]  drivers/media/dvb-frontends/cx24117.ko
  LD [M]  drivers/media/dvb-frontends/cx24123.ko
  LD [M]  drivers/media/dvb-frontends/cxd2099.ko
  LD [M]  drivers/media/dvb-frontends/cxd2820r.ko
  LD [M]  drivers/media/dvb-frontends/cxd2841er.ko
  LD [M]  drivers/media/dvb-frontends/cxd2880/cxd2880.ko
  LD [M]  drivers/media/dvb-frontends/dib0070.ko
  LD [M]  drivers/media/dvb-frontends/dib0090.ko
  LD [M]  drivers/media/dvb-frontends/dib3000mb.ko
  LD [M]  drivers/media/dvb-frontends/dib7000m.ko
  LD [M]  drivers/media/dvb-frontends/dib3000mc.ko
  LD [M]  drivers/media/dvb-frontends/dib7000p.ko
  LD [M]  drivers/media/dvb-frontends/dib8000.ko
  LD [M]  drivers/media/dvb-frontends/dib9000.ko
  LD [M]  drivers/media/dvb-frontends/dibx000_common.ko
  LD [M]  drivers/media/dvb-frontends/drx39xyj/drx39xyj.ko
  LD [M]  drivers/media/dvb-frontends/drxd.ko
  LD [M]  drivers/media/dvb-frontends/drxk.ko
  LD [M]  drivers/media/dvb-frontends/ds3000.ko
  LD [M]  drivers/media/dvb-frontends/dvb-pll.ko
  LD [M]  drivers/media/dvb-frontends/ec100.ko
  LD [M]  drivers/media/dvb-frontends/helene.ko
  LD [M]  drivers/media/dvb-frontends/horus3a.ko
  LD [M]  drivers/media/dvb-frontends/isl6405.ko
  LD [M]  drivers/media/dvb-frontends/isl6423.ko
  LD [M]  drivers/media/dvb-frontends/isl6421.ko
  LD [M]  drivers/media/dvb-frontends/itd1000.ko
  LD [M]  drivers/media/dvb-frontends/ix2505v.ko
  LD [M]  drivers/media/dvb-frontends/l64781.ko
  LD [M]  drivers/media/dvb-frontends/lg2160.ko
  LD [M]  drivers/media/dvb-frontends/lgdt3305.ko
  LD [M]  drivers/media/dvb-frontends/lgdt3306a.ko
  LD [M]  drivers/media/dvb-frontends/lgdt330x.ko
  LD [M]  drivers/media/dvb-frontends/lgs8gl5.ko
  LD [M]  drivers/media/dvb-frontends/lgs8gxx.ko
  LD [M]  drivers/media/dvb-frontends/lnbh25.ko
  LD [M]  drivers/media/dvb-frontends/lnbp21.ko
  LD [M]  drivers/media/dvb-frontends/lnbh29.ko
  LD [M]  drivers/media/dvb-frontends/m88ds3103.ko
  LD [M]  drivers/media/dvb-frontends/m88rs2000.ko
  LD [M]  drivers/media/dvb-frontends/lnbp22.ko
  LD [M]  drivers/media/dvb-frontends/mb86a16.ko
  LD [M]  drivers/media/dvb-frontends/mb86a20s.ko
  LD [M]  drivers/media/dvb-frontends/mn88443x.ko
  LD [M]  drivers/media/dvb-frontends/mn88472.ko
  LD [M]  drivers/media/dvb-frontends/mn88473.ko
  LD [M]  drivers/media/dvb-frontends/mt312.ko
  LD [M]  drivers/media/dvb-frontends/mt352.ko
  LD [M]  drivers/media/dvb-frontends/nxt200x.ko
  LD [M]  drivers/media/dvb-frontends/mxl5xx.ko
  LD [M]  drivers/media/dvb-frontends/nxt6000.ko
  LD [M]  drivers/media/dvb-frontends/or51132.ko
  LD [M]  drivers/media/dvb-frontends/or51211.ko
  LD [M]  drivers/media/dvb-frontends/rtl2830.ko
  LD [M]  drivers/media/dvb-frontends/rtl2832.ko
  LD [M]  drivers/media/dvb-frontends/rtl2832_sdr.ko
  LD [M]  drivers/media/dvb-frontends/s5h1411.ko
  LD [M]  drivers/media/dvb-frontends/s5h1409.ko
  LD [M]  drivers/media/dvb-frontends/s5h1420.ko
  LD [M]  drivers/media/dvb-frontends/s5h1432.ko
  LD [M]  drivers/media/dvb-frontends/s921.ko
  LD [M]  drivers/media/dvb-frontends/si2165.ko
  LD [M]  drivers/media/dvb-frontends/si2168.ko
  LD [M]  drivers/media/dvb-frontends/sp2.ko
  LD [M]  drivers/media/dvb-frontends/si21xx.ko
  LD [M]  drivers/media/dvb-frontends/sp8870.ko
  LD [M]  drivers/media/dvb-frontends/sp887x.ko
  LD [M]  drivers/media/dvb-frontends/stb0899.ko
  LD [M]  drivers/media/dvb-frontends/stb6000.ko
  LD [M]  drivers/media/dvb-frontends/stb6100.ko
  LD [M]  drivers/media/dvb-frontends/stv0288.ko
  LD [M]  drivers/media/dvb-frontends/stv0297.ko
  LD [M]  drivers/media/dvb-frontends/stv0299.ko
  LD [M]  drivers/media/dvb-frontends/stv0367.ko
  LD [M]  drivers/media/dvb-frontends/stv0900.ko
  LD [M]  drivers/media/dvb-frontends/stv090x.ko
  LD [M]  drivers/media/dvb-frontends/stv0910.ko
  LD [M]  drivers/media/dvb-frontends/stv6110x.ko
  LD [M]  drivers/media/dvb-frontends/stv6110.ko
  LD [M]  drivers/media/dvb-frontends/stv6111.ko
  LD [M]  drivers/media/dvb-frontends/tc90522.ko
  LD [M]  drivers/media/dvb-frontends/tda10023.ko
  LD [M]  drivers/media/dvb-frontends/tda10021.ko
  LD [M]  drivers/media/dvb-frontends/tda10048.ko
  LD [M]  drivers/media/dvb-frontends/tda1004x.ko
  LD [M]  drivers/media/dvb-frontends/tda10071.ko
  LD [M]  drivers/media/dvb-frontends/tda10086.ko
  LD [M]  drivers/media/dvb-frontends/tda18271c2dd.ko
  LD [M]  drivers/media/dvb-frontends/tda665x.ko
  LD [M]  drivers/media/dvb-frontends/tda8083.ko
  LD [M]  drivers/media/dvb-frontends/tda8261.ko
  LD [M]  drivers/media/dvb-frontends/tda826x.ko
  LD [M]  drivers/media/dvb-frontends/tua6100.ko
  LD [M]  drivers/media/dvb-frontends/ts2020.ko
  LD [M]  drivers/media/dvb-frontends/ves1820.ko
  LD [M]  drivers/media/dvb-frontends/ves1x93.ko
  LD [M]  drivers/media/dvb-frontends/zd1301_demod.ko
  LD [M]  drivers/media/dvb-frontends/zl10039.ko
  LD [M]  drivers/media/dvb-frontends/zl10036.ko
  LD [M]  drivers/media/dvb-frontends/zl10353.ko
  LD [M]  drivers/media/spi/cxd2880-spi.ko
  LD [M]  drivers/media/tuners/e4000.ko
  LD [M]  drivers/media/tuners/fc0013.ko
  LD [M]  drivers/media/tuners/fc0011.ko
  LD [M]  drivers/media/tuners/fc0012.ko
  LD [M]  drivers/media/tuners/fc2580.ko
  LD [M]  drivers/media/tuners/it913x.ko
  LD [M]  drivers/media/tuners/m88rs6000t.ko
  LD [M]  drivers/media/tuners/max2165.ko
  LD [M]  drivers/media/tuners/mc44s803.ko
  LD [M]  drivers/media/tuners/msi001.ko
  LD [M]  drivers/media/tuners/mt2060.ko
  LD [M]  drivers/media/tuners/mt2063.ko
  LD [M]  drivers/media/tuners/mt20xx.ko
  LD [M]  drivers/media/tuners/mt2131.ko
  LD [M]  drivers/media/tuners/mt2266.ko
  LD [M]  drivers/media/tuners/mxl5005s.ko
  LD [M]  drivers/media/tuners/mxl301rf.ko
  LD [M]  drivers/media/tuners/mxl5007t.ko
  LD [M]  drivers/media/tuners/qm1d1b0004.ko
  LD [M]  drivers/media/tuners/qm1d1c0042.ko
  LD [M]  drivers/media/tuners/qt1010.ko
  LD [M]  drivers/media/tuners/r820t.ko
  LD [M]  drivers/media/tuners/si2157.ko
  LD [M]  drivers/media/tuners/tda18212.ko
  LD [M]  drivers/media/tuners/tda18218.ko
  LD [M]  drivers/media/tuners/tda18250.ko
  LD [M]  drivers/media/tuners/tda18271.ko
  LD [M]  drivers/media/tuners/tda827x.ko
  LD [M]  drivers/media/tuners/tda9887.ko
  LD [M]  drivers/media/tuners/tda8290.ko
  LD [M]  drivers/media/tuners/tea5761.ko
  LD [M]  drivers/media/tuners/tea5767.ko
  LD [M]  drivers/media/tuners/tua9001.ko
  LD [M]  drivers/media/tuners/tuner-simple.ko
  LD [M]  drivers/media/tuners/tuner-types.ko
  LD [M]  drivers/media/tuners/tuner-xc2028.ko
  LD [M]  drivers/media/tuners/xc5000.ko
  LD [M]  drivers/media/tuners/xc4000.ko
  LD [M]  drivers/net/usb/rtl8150.ko
  LD [M]  drivers/net/ethernet/aquantia/atlantic/atlantic.ko
  LD [M]  drivers/net/usb/r8152.ko
  LD [M]  drivers/net/veth.ko
  LD [M]  drivers/net/vxlan.ko
  LD [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/bcmdhd.ko
  LD [M]  drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_static_buf.ko      
  LD [M]  drivers/net/wireless/rockchip_wlan/rtl8821cu/8821cu.ko
  LD [M]  drivers/net/wireless/virt_wifi.ko
  LD [M]  drivers/scsi/scsi_mod.ko
  LD [M]  drivers/scsi/scsi_transport_spi.ko
  LD [M]  drivers/scsi/sd_mod.ko
  LD [M]  drivers/scsi/sr_mod.ko
  LD [M]  drivers/scsi/virtio_scsi.ko
  LD [M]  drivers/usb/storage/uas.ko
  LD [M]  drivers/usb/storage/usb-storage.ko
  LD [M]  drivers/vhost/vhost_net.ko
  LD [M]  net/netfilter/ipvs/ip_vs.ko
  LD [M]  net/netfilter/ipvs/ip_vs_rr.ko
  LD [M]  net/netfilter/xt_ipvs.ko
  Image:  resource.img (with rk3588-firefly-itx-3588j.dtb logo.bmp logo_kernel.bmp) is ready
  Image:  boot.img (with Image ramdisk.img resource.img) is ready
  Image:  zboot.img (with Image.lz4 ramdisk.img resource.img) is ready
+ echo -e '\e[36m Generate extLinuxBoot image start\e[0m'
 Generate extLinuxBoot image start
+ EXTBOOT_IMG=/root/sdk_linux/rk3588/kernel/extboot.img
+ EXTBOOT_DIR=/root/sdk_linux/rk3588/kernel/extboot
+ rm -rf /root/sdk_linux/rk3588/kernel/extboot
+ mkdir -p /root/sdk_linux/rk3588/kernel/extboot/extlinux
++ cat /root/sdk_linux/rk3588/kernel/include/config/kernel.release
+ KERNEL_VERSION=5.10.110
+ echo 'label rk-kernel.dtb linux-5.10.110'
+ cp /root/sdk_linux/rk3588/kernel/arch/arm64/boot/Image /root/sdk_linux/rk3588/kernel/extboot/Image-5.10.110
+ echo -e '\tkernel /Image-5.10.110'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rk3588/.ITX_3588J ']'
++ cat /root/sdk_linux/rk3588/device/rockchip/rk3588/.ITX_3588J
+ dtblist='rk3588-firefly-itx-3588j
rk3588-firefly-itx-3588j-mipi101-M101014-BE45-A1
rk3588-firefly-itx-3588j-dual-mipi101-M101014-BE45-A1'
+ for i in $dtblist
+ '[' arm64 == arm64 ']'
+ make ARCH=arm64 rockchip/rk3588-firefly-itx-3588j.dtb -j6
+ cp /root/sdk_linux/rk3588/kernel/arch/arm64/boot/dts/rockchip/rk3588-firefly-itx-3588j.dtb /root/sdk_linux/rk3588/kernel/extboot
+ for i in $dtblist
+ '[' arm64 == arm64 ']'
+ make ARCH=arm64 rockchip/rk3588-firefly-itx-3588j-mipi101-M101014-BE45-A1.dtb -j6
  DTC     arch/arm64/boot/dts/rockchip/rk3588-firefly-itx-3588j-mipi101-M101014-BE45-A1.dtb
+ cp /root/sdk_linux/rk3588/kernel/arch/arm64/boot/dts/rockchip/rk3588-firefly-itx-3588j-mipi101-M101014-BE45-A1.dtb /root/sdk_linux/rk3588/kernel/extboot
+ for i in $dtblist
+ '[' arm64 == arm64 ']'
+ make ARCH=arm64 rockchip/rk3588-firefly-itx-3588j-dual-mipi101-M101014-BE45-A1.dtb -j6
  DTC     arch/arm64/boot/dts/rockchip/rk3588-firefly-itx-3588j-dual-mipi101-M101014-BE45-A1.dtb
+ cp /root/sdk_linux/rk3588/kernel/arch/arm64/boot/dts/rockchip/rk3588-firefly-itx-3588j-dual-mipi101-M101014-BE45-A1.dtb /root/sdk_linux/rk3588/kernel/extboot     
+ '[' arm64 == arm64 ']'
+ cp /root/sdk_linux/rk3588/kernel/arch/arm64/boot/dts/rockchip/rk3588-firefly-itx-3588j.dtb /root/sdk_linux/rk3588/kernel/extboot
+ ln -sf rk3588-firefly-itx-3588j.dtb /root/sdk_linux/rk3588/kernel/extboot/rk-kernel.dtb
+ echo -e '\tfdt /rk-kernel.dtb'
+ [[ -e /root/sdk_linux/rk3588/kernel/ramdisk.img ]]
+ cp /root/sdk_linux/rk3588/kernel/ramdisk.img /root/sdk_linux/rk3588/kernel/extboot/initrd-5.10.110
+ echo -e '\tinitrd /initrd-5.10.110'
+ cp /root/sdk_linux/rk3588/kernel/.config /root/sdk_linux/rk3588/kernel/extboot/config-5.10.110
+ cp /root/sdk_linux/rk3588/kernel/System.map /root/sdk_linux/rk3588/kernel/extboot/System.map-5.10.110
+ cp /root/sdk_linux/rk3588/kernel/logo.bmp /root/sdk_linux/rk3588/kernel/logo_kernel.bmp /root/sdk_linux/rk3588/kernel/extboot/
+ make ARCH=arm64 INSTALL_MOD_STRIP=1 INSTALL_MOD_PATH=/root/sdk_linux/rk3588/kernel/extboot modules_install
  INSTALL drivers/ata/ahci.ko
  INSTALL drivers/ata/ahci_platform.ko
  INSTALL drivers/ata/libahci.ko
  INSTALL drivers/ata/libahci_platform.ko
  INSTALL drivers/ata/libata.ko
  INSTALL drivers/bluetooth/btbcm.ko
  INSTALL drivers/bluetooth/btintel.ko
  INSTALL drivers/bluetooth/btrtl.ko
  INSTALL drivers/bluetooth/btusb.ko
  INSTALL drivers/bluetooth/rtk_btusb.ko
  INSTALL drivers/cdrom/cdrom.ko
  INSTALL drivers/gpu/drm/drm_ttm_helper.ko
  INSTALL drivers/gpu/drm/qxl/qxl.ko
  INSTALL drivers/gpu/drm/tiny/cirrus.ko
  INSTALL drivers/gpu/drm/ttm/ttm.ko
  INSTALL drivers/gpu/drm/vkms/vkms.ko
  INSTALL drivers/media/dvb-frontends/a8293.ko
  INSTALL drivers/media/dvb-frontends/af9013.ko
  INSTALL drivers/media/dvb-frontends/af9033.ko
  INSTALL drivers/media/dvb-frontends/ascot2e.ko
  INSTALL drivers/media/dvb-frontends/atbm8830.ko
  INSTALL drivers/media/dvb-frontends/au8522_common.ko
  INSTALL drivers/media/dvb-frontends/au8522_decoder.ko
  INSTALL drivers/media/dvb-frontends/au8522_dig.ko
  INSTALL drivers/media/dvb-frontends/bcm3510.ko
  INSTALL drivers/media/dvb-frontends/cx22700.ko
  INSTALL drivers/media/dvb-frontends/cx22702.ko
  INSTALL drivers/media/dvb-frontends/cx24110.ko
  INSTALL drivers/media/dvb-frontends/cx24113.ko
  INSTALL drivers/media/dvb-frontends/cx24116.ko
  INSTALL drivers/media/dvb-frontends/cx24117.ko
  INSTALL drivers/media/dvb-frontends/cx24120.ko
  INSTALL drivers/media/dvb-frontends/cx24123.ko
  INSTALL drivers/media/dvb-frontends/cxd2099.ko
  INSTALL drivers/media/dvb-frontends/cxd2820r.ko
  INSTALL drivers/media/dvb-frontends/cxd2841er.ko
  INSTALL drivers/media/dvb-frontends/cxd2880/cxd2880.ko
  INSTALL drivers/media/dvb-frontends/dib0070.ko
  INSTALL drivers/media/dvb-frontends/dib0090.ko
  INSTALL drivers/media/dvb-frontends/dib3000mb.ko
  INSTALL drivers/media/dvb-frontends/dib3000mc.ko
  INSTALL drivers/media/dvb-frontends/dib7000m.ko
  INSTALL drivers/media/dvb-frontends/dib7000p.ko
  INSTALL drivers/media/dvb-frontends/dib8000.ko
  INSTALL drivers/media/dvb-frontends/dib9000.ko
  INSTALL drivers/media/dvb-frontends/dibx000_common.ko
  INSTALL drivers/media/dvb-frontends/drx39xyj/drx39xyj.ko
  INSTALL drivers/media/dvb-frontends/drxd.ko
  INSTALL drivers/media/dvb-frontends/drxk.ko
  INSTALL drivers/media/dvb-frontends/ds3000.ko
  INSTALL drivers/media/dvb-frontends/dvb-pll.ko
  INSTALL drivers/media/dvb-frontends/ec100.ko
  INSTALL drivers/media/dvb-frontends/helene.ko
  INSTALL drivers/media/dvb-frontends/horus3a.ko
  INSTALL drivers/media/dvb-frontends/isl6405.ko
  INSTALL drivers/media/dvb-frontends/isl6421.ko
  INSTALL drivers/media/dvb-frontends/isl6423.ko
  INSTALL drivers/media/dvb-frontends/itd1000.ko
  INSTALL drivers/media/dvb-frontends/ix2505v.ko
  INSTALL drivers/media/dvb-frontends/l64781.ko
  INSTALL drivers/media/dvb-frontends/lg2160.ko
  INSTALL drivers/media/dvb-frontends/lgdt3305.ko
  INSTALL drivers/media/dvb-frontends/lgdt3306a.ko
  INSTALL drivers/media/dvb-frontends/lgdt330x.ko
  INSTALL drivers/media/dvb-frontends/lgs8gl5.ko
  INSTALL drivers/media/dvb-frontends/lgs8gxx.ko
  INSTALL drivers/media/dvb-frontends/lnbh25.ko
  INSTALL drivers/media/dvb-frontends/lnbh29.ko
  INSTALL drivers/media/dvb-frontends/lnbp21.ko
  INSTALL drivers/media/dvb-frontends/lnbp22.ko
  INSTALL drivers/media/dvb-frontends/m88ds3103.ko
  INSTALL drivers/media/dvb-frontends/m88rs2000.ko
  INSTALL drivers/media/dvb-frontends/mb86a16.ko
  INSTALL drivers/media/dvb-frontends/mb86a20s.ko
  INSTALL drivers/media/dvb-frontends/mn88443x.ko
  INSTALL drivers/media/dvb-frontends/mn88472.ko
  INSTALL drivers/media/dvb-frontends/mn88473.ko
  INSTALL drivers/media/dvb-frontends/mt312.ko
  INSTALL drivers/media/dvb-frontends/mt352.ko
  INSTALL drivers/media/dvb-frontends/mxl5xx.ko
  INSTALL drivers/media/dvb-frontends/nxt200x.ko
  INSTALL drivers/media/dvb-frontends/nxt6000.ko
  INSTALL drivers/media/dvb-frontends/or51132.ko
  INSTALL drivers/media/dvb-frontends/or51211.ko
  INSTALL drivers/media/dvb-frontends/rtl2830.ko
  INSTALL drivers/media/dvb-frontends/rtl2832.ko
  INSTALL drivers/media/dvb-frontends/rtl2832_sdr.ko
  INSTALL drivers/media/dvb-frontends/s5h1409.ko
  INSTALL drivers/media/dvb-frontends/s5h1411.ko
  INSTALL drivers/media/dvb-frontends/s5h1420.ko
  INSTALL drivers/media/dvb-frontends/s5h1432.ko
  INSTALL drivers/media/dvb-frontends/s921.ko
  INSTALL drivers/media/dvb-frontends/si2165.ko
  INSTALL drivers/media/dvb-frontends/si2168.ko
  INSTALL drivers/media/dvb-frontends/si21xx.ko
  INSTALL drivers/media/dvb-frontends/sp2.ko
  INSTALL drivers/media/dvb-frontends/sp8870.ko
  INSTALL drivers/media/dvb-frontends/sp887x.ko
  INSTALL drivers/media/dvb-frontends/stb0899.ko
  INSTALL drivers/media/dvb-frontends/stb6000.ko
  INSTALL drivers/media/dvb-frontends/stb6100.ko
  INSTALL drivers/media/dvb-frontends/stv0288.ko
  INSTALL drivers/media/dvb-frontends/stv0297.ko
  INSTALL drivers/media/dvb-frontends/stv0299.ko
  INSTALL drivers/media/dvb-frontends/stv0367.ko
  INSTALL drivers/media/dvb-frontends/stv0900.ko
  INSTALL drivers/media/dvb-frontends/stv090x.ko
  INSTALL drivers/media/tuners/tuner-types.ko
  INSTALL drivers/media/tuners/tuner-xc2028.ko
  INSTALL drivers/media/tuners/tuner-types.ko
  INSTALL drivers/media/tuners/tuner-xc2028.ko
  INSTALL drivers/media/tuners/xc4000.ko
  INSTALL drivers/media/tuners/xc5000.ko
  INSTALL drivers/net/ethernet/aquantia/atlantic/atlantic.ko
  INSTALL drivers/net/usb/r8152.ko
  INSTALL drivers/net/usb/rtl8150.ko
  INSTALL drivers/net/veth.ko
  INSTALL drivers/net/vxlan.ko  INSTALL drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/bcmdhd.ko
  INSTALL drivers/net/wireless/rockchip_wlan/rkwifi/bcmdhd/dhd_static_buf.ko      
  INSTALL drivers/net/wireless/rockchip_wlan/rtl8821cu/8821cu.ko
  INSTALL drivers/net/wireless/virt_wifi.ko
  INSTALL drivers/scsi/scsi_mod.ko
  INSTALL drivers/scsi/scsi_transport_spi.ko
  INSTALL drivers/scsi/sd_mod.ko
  INSTALL drivers/scsi/sr_mod.ko
  INSTALL drivers/scsi/virtio_scsi.ko
  INSTALL drivers/usb/storage/uas.ko
  INSTALL drivers/usb/storage/usb-storage.ko
  INSTALL drivers/vhost/vhost_net.ko
  INSTALL net/netfilter/ipvs/ip_vs.ko
  INSTALL net/netfilter/ipvs/ip_vs_rr.ko
  INSTALL net/netfilter/xt_ipvs.ko
  DEPMOD  5.10.110
+ '[' -n 256M ']'
+ EXTBOOT_IMG_SIZE=256M
+ rm -rf /root/sdk_linux/rk3588/kernel/extboot.img
+ truncate -s 256M /root/sdk_linux/rk3588/kernel/extboot.img+ fakeroot /root/sdk_linux/rk3588/device/rockchip/common/mkfs.ext4 -Fq -L boot -d /root/sdk_linux/rk3588/kernel/extboot /root/sdk_linux/rk3588/kernel/extboot.img   
+ finish_build
+ echo 'Running build_extboot succeeded.'
Running build_extboot succeeded.
+ cd /root/sdk_linux/rk3588
```