```
root@5e42e5e27730:~/sdk_linux/rk3588# ./mkfirmware.sh
+ set -e
+ which fakeroot
/usr/bin/fakeroot
+++ realpath ./mkfirmware.sh
++ dirname /root/sdk_linux/rk3588/device/rockchip/common/mkfirmware.sh
+ SCRIPT_DIR=/root/sdk_linux/rk3588/device/rockchip/common
++ realpath /root/sdk_linux/rk3588/device/rockchip/common/../../..
+ TOP_DIR=/root/sdk_linux/rk3588
+ cd /root/sdk_linux/rk3588
+ DEV_DIR=/root/sdk_linux/rk3588/device/rockchip
+ OUT_DIR=/root/sdk_linux/rk3588/buildroot/output
+ unset_board_config_all
++ mktemp
+ local tmp_file=/tmp/tmp.UVsLqKne6y
+ uniq
+ sort
++ find /root/sdk_linux/rk3588/device/rockchip -name 'Board*.mk' -type f
+ grep -o '^export.*RK_.*=' /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig_thunder_boot.mk /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig_ficial_gate.mk /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v11-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr4-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-robot64.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-robot64_no_gpu.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v11.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_multi.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick_emmc.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick_sfc.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3128-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3128-evb-ddr3-v10-debian.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10-debian.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10-slc-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig-minievb-v10-lock.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig-minievb-v10-cvr.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3229/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/cmcc_soundai/BoardConfig_soundai_cmcc.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_RK3308B_firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_robot64.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_soundai_cmcc.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308b_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308bs_64bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_robot32.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308b_64bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308hs_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308h_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308bs_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-sapphire-excavator-lp4.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-sapphire-excavator.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-evb-ind-lpddr4.mk /root/sdk_linux/rk3588/device/rockchip/px3se/BoardConfig_nand.mk /root/sdk_linux/rk3588/device/rockchip/px3se/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig_retro.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig_dongle.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-security-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb7-lp4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb3-lp5-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588s-evb1-lp4x-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb1-lp4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-robot64_no_gpu.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v12-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v12.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-robot64.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-security-base.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10-spi-nor-64M.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3566-evb2-lp4x-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-uvc-evb1-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3566-evb2-lp4x-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig-rk3288-firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig_rk3288-evb-act8846.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig-rk3288-evb-rk808.mk /root/sdk_linux/rk3588/device/rockchip/rk3358/BoardConfig-rk3358m-vehicle-ddr3.mk /root/sdk_linux/rk3588/device/rockchip/rk3358/BoardConfig-rk3358-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_v10-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig_rk3399pro_evb_v14-combine.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_npu-pcie.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_v11_v12-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_npu-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_lpd4_v11_v12-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig_rk3399pro_evb_v13_pcie.mk /root/sdk_linux/rk3588/device/rockchip/rk3128h/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-v10-v11.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-cvr.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-robot.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-sl.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-battery-evb.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-dualcam-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-facial_gate.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-trailcamera.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nor-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-snapshot.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc-spi-nor-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-spi-nand-ab.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-ramboot-uvc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-slc-nand-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-ab-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nor-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-tb-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-emmc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-sllock.mk /root/sdk_linux/rk3588/device/rockchip/rk3328/BoardConfig.mk -h
+ source /tmp/tmp.UVsLqKne6y
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
+ rm -f /tmp/tmp.UVsLqKne6y
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
+ IMG_DIR=/root/sdk_linux/rk3588/buildroot/output//images
+ ROCKDEV=/root/sdk_linux/rk3588/rockdev
+ PARAMETER=/root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt
+ MISC_IMG=/root/sdk_linux/rk3588/device/rockchip/rockimg/wipe_all-misc.img       
+ '[' '' = true ']'
+ ROOTFS_IMG=/root/sdk_linux/rk3588/ubuntu_rootfs/rootfs.img
+ ROOTFS_IMG_SOURCE=/root/sdk_linux/rk3588/buildroot/output//images/rootfs.ext4   
+ RAMBOOT_IMG=/root/sdk_linux/rk3588/buildroot/output//images/ramboot.img
+ '[' -n '' ']'
+ RECOVERY_IMG=/root/sdk_linux/rk3588/rockdev/recovery.img
+ TRUST_IMG=/root/sdk_linux/rk3588/u-boot/trust.img
+ UBOOT_IMG=/root/sdk_linux/rk3588/u-boot/uboot.img
+ '[' true = true ']'
+ BOOT_IMG=/root/sdk_linux/rk3588/kernel/extboot.img
++ echo /root/sdk_linux/rk3588/u-boot/rk3588_spl_loader_v1.08.111.bin
++ head -1
+ LOADER=/root/sdk_linux/rk3588/u-boot/rk3588_spl_loader_v1.08.111.bin
++ echo '/root/sdk_linux/rk3588/u-boot/*_loader_spl.bin'
++ head -1
+ SPL='/root/sdk_linux/rk3588/u-boot/*_loader_spl.bin'
+ MKIMAGE=/root/sdk_linux/rk3588/device/rockchip/common/mk-image.sh
+ mkdir -p /root/sdk_linux/rk3588/rockdev
+ '[' '!' -d '' ']'
+ message 'Source buildroot/build/envsetup.sh'
+ echo -e '\e[36m Source buildroot/build/envsetup.sh \e[0m'
 Source buildroot/build/envsetup.sh
+ '[' '' ']'
+ '[' '' ']'
++ legacy_partion oem '' '' ''
++ PART_NAME=oem
++ SRC=
++ FS_TYPE=
++ SIZE=0
++ MOUNT=/oem
++ OPT=
++ '[' '' ']'
++ return 0
++ legacy_partion userdata '' ext4 ''
++ PART_NAME=userdata
++ SRC=
++ FS_TYPE=ext4
++ SIZE=0
++ MOUNT=/userdata
++ OPT=
++ '[' ext4 ']'
++ '[' '' ']'
++ return 0
+ RK_LEGACY_PARTITIONS='

'
+ RK_EXTRA_PARTITIONS='         oem:/oem:ext2:defaults:oem_normal:auto:resize     
        userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
'
+ link_image_optional /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt parameter.txt
+ link_image /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt parameter.txt
+ SRC=/root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt      
+ DST=parameter.txt
+ FALLBACK=
+ message 'Linking parameter.txt from /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt...'
+ echo -e '\e[36m Linking parameter.txt from /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt... \e[0m'
 Linking parameter.txt from /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt...
+ '[' '!' -e /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt ']'
+ ln -rsf /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt /root/sdk_linux/rk3588/rockdev/parameter.txt
+ assert_size parameter.txt /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt
+ PART_NAME=parameter.txt
+ IMG=/root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt      
++ partition_size_kb parameter.txt
++ PART_NAME=parameter.txt
+++ grep -oE '[^,^:^\(]*\(parameter.txt[\)_:][^\)]*\)' /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt
++ PART_STR=
+++ echo
+++ grep -oE '^[^@^-]*'
++ PART_SIZE=
++ echo 0
+ PART_SIZE=0
+ '[' 0 -gt 0 ']'
+ return 0
+ message 'Done linking parameter.txt'
+ echo -e '\e[36m Done linking parameter.txt \e[0m'
 Done linking parameter.txt
+ link_image_optional /root/sdk_linux/rk3588/u-boot/uboot.img uboot.img
+ link_image /root/sdk_linux/rk3588/u-boot/uboot.img uboot.img
+ SRC=/root/sdk_linux/rk3588/u-boot/uboot.img
+ DST=uboot.img
+ FALLBACK=
+ message 'Linking uboot.img from /root/sdk_linux/rk3588/u-boot/uboot.img...'     
+ echo -e '\e[36m Linking uboot.img from /root/sdk_linux/rk3588/u-boot/uboot.img... \e[0m'
 Linking uboot.img from /root/sdk_linux/rk3588/u-boot/uboot.img...
+ '[' '!' -e /root/sdk_linux/rk3588/u-boot/uboot.img ']'
+ ln -rsf /root/sdk_linux/rk3588/u-boot/uboot.img /root/sdk_linux/rk3588/rockdev/uboot.img
+ assert_size uboot /root/sdk_linux/rk3588/u-boot/uboot.img
+ PART_NAME=uboot
+ IMG=/root/sdk_linux/rk3588/u-boot/uboot.img
++ partition_size_kb uboot
++ PART_NAME=uboot
+++ grep -oE '[^,^:^\(]*\(uboot[\)_:][^\)]*\)' /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt
++ PART_STR='0x00004000@0x00004000(uboot),0x00002000@0x00008000(misc)'
+++ echo '0x00004000@0x00004000(uboot),0x00002000@0x00008000(misc)'
+++ grep -oE '^[^@^-]*'
++ PART_SIZE=0x00004000
++ echo 8192
+ PART_SIZE=8192
+ '[' 8192 -gt 0 ']'
++ stat -c %s /root/sdk_linux/rk3588/u-boot/uboot.img
+ IMG_SIZE=8388608
+ '[' 8192 -lt 8192 ']'
+ message 'Done linking uboot.img'
+ echo -e '\e[36m Done linking uboot.img \e[0m'
 Done linking uboot.img
+ '[' fit '!=' fit ']'
+ link_image_optional /root/sdk_linux/rk3588/u-boot/rk3588_spl_loader_v1.08.111.bin MiniLoaderAll.bin '/root/sdk_linux/rk3588/u-boot/*_loader_spl.bin'
+ link_image /root/sdk_linux/rk3588/u-boot/rk3588_spl_loader_v1.08.111.bin MiniLoaderAll.bin '/root/sdk_linux/rk3588/u-boot/*_loader_spl.bin'
+ SRC=/root/sdk_linux/rk3588/u-boot/rk3588_spl_loader_v1.08.111.bin
+ DST=MiniLoaderAll.bin
+ FALLBACK='/root/sdk_linux/rk3588/u-boot/*_loader_spl.bin'
+ message 'Linking MiniLoaderAll.bin from /root/sdk_linux/rk3588/u-boot/rk3588_spl_loader_v1.08.111.bin...'
+ echo -e '\e[36m Linking MiniLoaderAll.bin from /root/sdk_linux/rk3588/u-boot/rk3588_spl_loader_v1.08.111.bin... \e[0m'
 Linking MiniLoaderAll.bin from /root/sdk_linux/rk3588/u-boot/rk3588_spl_loader_v1.08.111.bin...
+ '[' '!' -e /root/sdk_linux/rk3588/u-boot/rk3588_spl_loader_v1.08.111.bin ']'    
+ ln -rsf /root/sdk_linux/rk3588/u-boot/rk3588_spl_loader_v1.08.111.bin /root/sdk_linux/rk3588/rockdev/MiniLoaderAll.bin
+ assert_size MiniLoaderAll.bin /root/sdk_linux/rk3588/u-boot/rk3588_spl_loader_v1.08.111.bin
+ PART_NAME=MiniLoaderAll.bin
+ IMG=/root/sdk_linux/rk3588/u-boot/rk3588_spl_loader_v1.08.111.bin
++ partition_size_kb MiniLoaderAll.bin
++ PART_NAME=MiniLoaderAll.bin
+++ grep -oE '[^,^:^\(]*\(MiniLoaderAll.bin[\)_:][^\)]*\)' /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt
++ PART_STR=
+++ echo
+++ grep -oE '^[^@^-]*'
++ PART_SIZE=
++ echo 0
+ PART_SIZE=0
+ '[' 0 -gt 0 ']'
+ return 0
+ message 'Done linking MiniLoaderAll.bin'
+ echo -e '\e[36m Done linking MiniLoaderAll.bin \e[0m'
 Done linking MiniLoaderAll.bin
+ '[' boot.img ']'
+ link_image_optional /root/sdk_linux/rk3588/kernel/extboot.img boot.img
+ link_image /root/sdk_linux/rk3588/kernel/extboot.img boot.img
+ SRC=/root/sdk_linux/rk3588/kernel/extboot.img
+ DST=boot.img
+ FALLBACK=
+ message 'Linking boot.img from /root/sdk_linux/rk3588/kernel/extboot.img...'    
+ echo -e '\e[36m Linking boot.img from /root/sdk_linux/rk3588/kernel/extboot.img... \e[0m'
 Linking boot.img from /root/sdk_linux/rk3588/kernel/extboot.img...
+ '[' '!' -e /root/sdk_linux/rk3588/kernel/extboot.img ']'
+ ln -rsf /root/sdk_linux/rk3588/kernel/extboot.img /root/sdk_linux/rk3588/rockdev/boot.img
+ assert_size boot /root/sdk_linux/rk3588/kernel/extboot.img
+ PART_NAME=boot
+ IMG=/root/sdk_linux/rk3588/kernel/extboot.img
++ partition_size_kb boot
++ PART_NAME=boot
+++ grep -oE '[^,^:^\(]*\(boot[\)_:][^\)]*\)' /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt
++ PART_STR='0x00080000@0x0000a000(boot:bootable)'
+++ echo '0x00080000@0x0000a000(boot:bootable)'
+++ grep -oE '^[^@^-]*'
++ PART_SIZE=0x00080000
++ echo 262144
+ PART_SIZE=262144
+ '[' 262144 -gt 0 ']'
++ stat -c %s /root/sdk_linux/rk3588/kernel/extboot.img
+ IMG_SIZE=268435456
+ '[' 262144 -lt 262144 ']'
+ message 'Done linking boot.img'
+ echo -e '\e[36m Done linking boot.img \e[0m'
 Done linking boot.img
+ '[' ']'
+ '[' '' ']'
+ '[' wipe_all-misc.img ']'
+ link_image_optional /root/sdk_linux/rk3588/device/rockchip/rockimg/misc.img misc.img /root/sdk_linux/rk3588/device/rockchip/rockimg/wipe_all-misc.img
+ link_image /root/sdk_linux/rk3588/device/rockchip/rockimg/misc.img misc.img /root/sdk_linux/rk3588/device/rockchip/rockimg/wipe_all-misc.img
+ SRC=/root/sdk_linux/rk3588/device/rockchip/rockimg/misc.img
+ DST=misc.img
+ FALLBACK=/root/sdk_linux/rk3588/device/rockchip/rockimg/wipe_all-misc.img       
+ message 'Linking misc.img from /root/sdk_linux/rk3588/device/rockchip/rockimg/misc.img...'
+ echo -e '\e[36m Linking misc.img from /root/sdk_linux/rk3588/device/rockchip/rockimg/misc.img... \e[0m'
 Linking misc.img from /root/sdk_linux/rk3588/device/rockchip/rockimg/misc.img... 
+ '[' '!' -e /root/sdk_linux/rk3588/device/rockchip/rockimg/misc.img ']'
+ '[' -e /root/sdk_linux/rk3588/device/rockchip/rockimg/wipe_all-misc.img ']'     
+ SRC=/root/sdk_linux/rk3588/device/rockchip/rockimg/wipe_all-misc.img
+ message 'Fallback to /root/sdk_linux/rk3588/device/rockchip/rockimg/wipe_all-misc.img'
+ echo -e '\e[36m Fallback to /root/sdk_linux/rk3588/device/rockchip/rockimg/wipe_all-misc.img \e[0m'
 Fallback to /root/sdk_linux/rk3588/device/rockchip/rockimg/wipe_all-misc.img     
+ ln -rsf /root/sdk_linux/rk3588/device/rockchip/rockimg/wipe_all-misc.img /root/sdk_linux/rk3588/rockdev/misc.img
+ assert_size misc /root/sdk_linux/rk3588/device/rockchip/rockimg/wipe_all-misc.img
+ PART_NAME=misc
+ IMG=/root/sdk_linux/rk3588/device/rockchip/rockimg/wipe_all-misc.img
++ partition_size_kb misc
++ PART_NAME=misc
+++ grep -oE '[^,^:^\(]*\(misc[\)_:][^\)]*\)' /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt
++ PART_STR='0x00002000@0x00008000(misc),0x00080000@0x0000a000(boot:bootable)'    
+++ echo '0x00002000@0x00008000(misc),0x00080000@0x0000a000(boot:bootable)'       
+++ grep -oE '^[^@^-]*'
++ PART_SIZE=0x00002000
++ echo 4096
+ PART_SIZE=4096
+ '[' 4096 -gt 0 ']'
++ stat -c %s /root/sdk_linux/rk3588/device/rockchip/rockimg/wipe_all-misc.img    
+ IMG_SIZE=49152
+ '[' 4096 -lt 48 ']'
+ message 'Done linking misc.img'
+ echo -e '\e[36m Done linking misc.img \e[0m'
 Done linking misc.img
+ '[' ubuntu_rootfs/rootfs.img ']'
+ link_image_optional /root/sdk_linux/rk3588/ubuntu_rootfs/rootfs.img rootfs.img /root/sdk_linux/rk3588/buildroot/output//images/rootfs.ext4
+ link_image /root/sdk_linux/rk3588/ubuntu_rootfs/rootfs.img rootfs.img /root/sdk_linux/rk3588/buildroot/output//images/rootfs.ext4
+ SRC=/root/sdk_linux/rk3588/ubuntu_rootfs/rootfs.img
+ DST=rootfs.img
+ FALLBACK=/root/sdk_linux/rk3588/buildroot/output//images/rootfs.ext4
+ message 'Linking rootfs.img from /root/sdk_linux/rk3588/ubuntu_rootfs/rootfs.img...'
+ echo -e '\e[36m Linking rootfs.img from /root/sdk_linux/rk3588/ubuntu_rootfs/rootfs.img... \e[0m'
 Linking rootfs.img from /root/sdk_linux/rk3588/ubuntu_rootfs/rootfs.img...       
+ '[' '!' -e /root/sdk_linux/rk3588/ubuntu_rootfs/rootfs.img ']'
+ ln -rsf /root/sdk_linux/rk3588/ubuntu_rootfs/rootfs.img /root/sdk_linux/rk3588/rockdev/rootfs.img
+ assert_size rootfs /root/sdk_linux/rk3588/ubuntu_rootfs/rootfs.img
+ PART_NAME=rootfs
+ IMG=/root/sdk_linux/rk3588/ubuntu_rootfs/rootfs.img
++ partition_size_kb rootfs
++ PART_NAME=rootfs
+++ grep -oE '[^,^:^\(]*\(rootfs[\)_:][^\)]*\)' /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt
++ PART_STR='0x00c00000@0x000da000(rootfs),-@0x00cda000(userdata:grow)'
+++ echo '0x00c00000@0x000da000(rootfs),-@0x00cda000(userdata:grow)'
+++ grep -oE '^[^@^-]*'
++ PART_SIZE=0x00c00000
++ echo 6291456
+ PART_SIZE=6291456
+ '[' 6291456 -gt 0 ']'
++ stat -c %s /root/sdk_linux/rk3588/ubuntu_rootfs/rootfs.img
+ IMG_SIZE=1529933824
+ '[' 6291456 -lt 1494076 ']'
+ message 'Done linking rootfs.img'
+ echo -e '\e[36m Done linking rootfs.img \e[0m'
 Done linking rootfs.img
+ '[' '' = YES ']'
+ '[' '' = true ']'
+ pack_extra_partitions
+ for part in ${RK_EXTRA_PARTITIONS//@/ }
++ partition_arg oem:/oem:ext2:defaults:oem_normal:auto:resize 1
++ PART=oem:/oem:ext2:defaults:oem_normal:auto:resize
++ I=1
++ DEFAULT=
+++ cut -d: -f1
+++ echo oem:/oem:ext2:defaults:oem_normal:auto:resize
++ ARG=oem
++ echo oem
+ DEV=oem
+ '[' oem ']'
+ PART_NAME=oem
++ partition_arg oem:/oem:ext2:defaults:oem_normal:auto:resize 2 /oem
++ PART=oem:/oem:ext2:defaults:oem_normal:auto:resize
++ I=2
++ DEFAULT=/oem
+++ echo oem:/oem:ext2:defaults:oem_normal:auto:resize
+++ cut -d: -f2
++ ARG=/oem
++ echo /oem
+ MOUNT=/oem
++ partition_arg oem:/oem:ext2:defaults:oem_normal:auto:resize 3
++ PART=oem:/oem:ext2:defaults:oem_normal:auto:resize
++ I=3
++ DEFAULT=
+++ echo oem:/oem:ext2:defaults:oem_normal:auto:resize
+++ cut -d: -f3
++ ARG=ext2
++ echo ext2
+ FS_TYPE=ext2
++ partition_arg oem:/oem:ext2:defaults:oem_normal:auto:resize 5
++ PART=oem:/oem:ext2:defaults:oem_normal:auto:resize
++ I=5
++ DEFAULT=
+++ echo oem:/oem:ext2:defaults:oem_normal:auto:resize
+++ cut -d: -f5
++ ARG=oem_normal
++ echo oem_normal
+ SRC=oem_normal
+ case "$SRC" in
+ SRC=/root/sdk_linux/rk3588/device/rockchip/oem/oem_normal
++ partition_arg oem:/oem:ext2:defaults:oem_normal:auto:resize 6 auto
++ PART=oem:/oem:ext2:defaults:oem_normal:auto:resize
++ I=6
++ DEFAULT=auto
+++ echo oem:/oem:ext2:defaults:oem_normal:auto:resize
+++ cut -d: -f6
++ ARG=auto
++ echo auto
+ SIZE=auto
++ partition_arg oem:/oem:ext2:defaults:oem_normal:auto:resize 7
++ PART=oem:/oem:ext2:defaults:oem_normal:auto:resize
++ I=7
++ DEFAULT=
+++ echo oem:/oem:ext2:defaults:oem_normal:auto:resize
+++ cut -d: -f7
++ ARG=resize
++ echo resize
+ OPTS=resize
+ LABEL=oem
+ EXTRA_CMD=
+ '[' oem = oem ']'
+ '[' '' '!=' YES ']'
+ '[' -d /root/sdk_linux/rk3588/device/rockchip/oem/oem_normal/www ']'
+ echo resize
+ grep -wq fixed
+ touch /root/sdk_linux/rk3588/device/rockchip/oem/oem_normal/.fixed
+ pack_image /root/sdk_linux/rk3588/device/rockchip/oem/oem_normal oem.img ext2 auto oem ''
+ SRC=/root/sdk_linux/rk3588/device/rockchip/oem/oem_normal
+ DST=oem.img
+ FS_TYPE=ext2
+ SIZE=auto
+ LABEL=oem
+ EXTRA_CMD=
+ FAKEROOT_SCRIPT=/root/sdk_linux/rk3588/rockdev/oem.fs
+ message 'Packing oem.img from /root/sdk_linux/rk3588/device/rockchip/oem/oem_normal...'
+ echo -e '\e[36m Packing oem.img from /root/sdk_linux/rk3588/device/rockchip/oem/oem_normal... \e[0m'
 Packing oem.img from /root/sdk_linux/rk3588/device/rockchip/oem/oem_normal...    
+ '[' '!' -d /root/sdk_linux/rk3588/device/rockchip/oem/oem_normal ']'
+ cat
+ chmod a+x /root/sdk_linux/rk3588/rockdev/oem.fs
+ fakeroot -- /root/sdk_linux/rk3588/rockdev/oem.fs
Source buildroot/build/envsetup.sh
Top of tree: /root/sdk_linux/rk3588
No available configs for: /root/sdk_linux/rk3588/device/rockchip/oem/oem_normal
Making /root/sdk_linux/rk3588/rockdev/oem.img from /root/sdk_linux/rk3588/device/rockchip/oem/oem_normal (auto sized)
Making /root/sdk_linux/rk3588/rockdev/oem.img from /root/sdk_linux/rk3588/device/rockchip/oem/oem_normal with size(17048KB)
mke2fs 1.44.1 (24-Mar-2018)
Discarding device blocks: done
Creating filesystem with 17048 1k blocks and 4272 inodes
Filesystem UUID: bd738690-4abf-42fe-81c2-465b3364f31d
Superblock backups stored on blocks:
        8193

Allocating group tables: done
Writing inode tables: done
Copying files into the device: done
Writing superblocks and filesystem accounting information: done

tune2fs 1.44.1 (24-Mar-2018)
Setting maximal mount count to -1
Setting interval between checks to 0 seconds
+ rm -f /root/sdk_linux/rk3588/rockdev/oem.fs
+ assert_size oem /root/sdk_linux/rk3588/rockdev/oem.img
+ PART_NAME=oem
+ IMG=/root/sdk_linux/rk3588/rockdev/oem.img
++ partition_size_kb oem
++ PART_NAME=oem
+++ grep -oE '[^,^:^\(]*\(oem[\)_:][^\)]*\)' /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt
++ PART_STR=
+++ echo
+++ grep -oE '^[^@^-]*'
++ PART_SIZE=
++ echo 0
+ PART_SIZE=0
+ '[' 0 -gt 0 ']'
+ return 0
+ message 'Done packing oem.img'
+ echo -e '\e[36m Done packing oem.img \e[0m'
 Done packing oem.img
+ rm -rf /root/sdk_linux/rk3588/device/rockchip/oem/oem_normal/.fixed
+ for part in ${RK_EXTRA_PARTITIONS//@/ }
++ partition_arg userdata:/userdata:ext2:defaults:userdata_normal:auto:resize 1   
++ PART=userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
++ I=1
++ DEFAULT=
+++ echo userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
+++ cut -d: -f1
++ ARG=userdata
++ echo userdata
+ DEV=userdata
+ '[' userdata ']'
+ PART_NAME=userdata
++ partition_arg userdata:/userdata:ext2:defaults:userdata_normal:auto:resize 2 /userdata
++ PART=userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
++ I=2
++ DEFAULT=/userdata
+++ echo userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
+++ cut -d: -f2
++ ARG=/userdata
++ echo /userdata
+ MOUNT=/userdata
++ partition_arg userdata:/userdata:ext2:defaults:userdata_normal:auto:resize 3
++ PART=userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
++ I=3
++ DEFAULT=
+++ echo userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
+++ cut -d: -f3
++ ARG=ext2
++ echo ext2
+ FS_TYPE=ext2
++ partition_arg userdata:/userdata:ext2:defaults:userdata_normal:auto:resize 5   
++ PART=userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
++ I=5
++ DEFAULT=
+++ echo userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
+++ cut -d: -f5
++ ARG=userdata_normal
++ echo userdata_normal
+ SRC=userdata_normal
+ case "$SRC" in
+ SRC=/root/sdk_linux/rk3588/device/rockchip/userdata/userdata_normal
++ partition_arg userdata:/userdata:ext2:defaults:userdata_normal:auto:resize 6 auto
++ PART=userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
++ I=6
++ DEFAULT=auto
+++ echo userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
+++ cut -d: -f6
++ ARG=auto
++ echo auto
+ SIZE=auto
++ partition_arg userdata:/userdata:ext2:defaults:userdata_normal:auto:resize 7   
++ PART=userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
++ I=7
++ DEFAULT=
+++ echo userdata:/userdata:ext2:defaults:userdata_normal:auto:resize
+++ cut -d: -f7
++ ARG=resize
++ echo resize
+ OPTS=resize
+ LABEL=userdata
+ EXTRA_CMD=
+ '[' userdata = oem ']'
+ echo resize
+ grep -wq fixed
+ touch /root/sdk_linux/rk3588/device/rockchip/userdata/userdata_normal/.fixed    
+ pack_image /root/sdk_linux/rk3588/device/rockchip/userdata/userdata_normal userdata.img ext2 auto userdata ''
+ SRC=/root/sdk_linux/rk3588/device/rockchip/userdata/userdata_normal
+ DST=userdata.img
+ FS_TYPE=ext2
+ SIZE=auto
+ LABEL=userdata
+ EXTRA_CMD=
+ FAKEROOT_SCRIPT=/root/sdk_linux/rk3588/rockdev/userdata.fs
+ message 'Packing userdata.img from /root/sdk_linux/rk3588/device/rockchip/userdata/userdata_normal...'
+ echo -e '\e[36m Packing userdata.img from /root/sdk_linux/rk3588/device/rockchip/userdata/userdata_normal... \e[0m'
 Packing userdata.img from /root/sdk_linux/rk3588/device/rockchip/userdata/userdata_normal...
+ '[' '!' -d /root/sdk_linux/rk3588/device/rockchip/userdata/userdata_normal ']'  
+ cat
+ chmod a+x /root/sdk_linux/rk3588/rockdev/userdata.fs
+ fakeroot -- /root/sdk_linux/rk3588/rockdev/userdata.fs
Source buildroot/build/envsetup.sh
Top of tree: /root/sdk_linux/rk3588
No available configs for: /root/sdk_linux/rk3588/device/rockchip/userdata/userdata_normal
Making /root/sdk_linux/rk3588/rockdev/userdata.img from /root/sdk_linux/rk3588/device/rockchip/userdata/userdata_normal (auto sized)
Making /root/sdk_linux/rk3588/rockdev/userdata.img from /root/sdk_linux/rk3588/device/rockchip/userdata/userdata_normal with size(4368KB)
mke2fs 1.44.1 (24-Mar-2018)
Discarding device blocks: done
Creating filesystem with 4368 1k blocks and 1096 inodes

Allocating group tables: done
Writing inode tables: done
Copying files into the device: done
Writing superblocks and filesystem accounting information: done

tune2fs 1.44.1 (24-Mar-2018)
Setting maximal mount count to -1
Setting interval between checks to 0 seconds
+ rm -f /root/sdk_linux/rk3588/rockdev/userdata.fs
+ assert_size userdata /root/sdk_linux/rk3588/rockdev/userdata.img
+ PART_NAME=userdata
+ IMG=/root/sdk_linux/rk3588/rockdev/userdata.img
++ partition_size_kb userdata
++ PART_NAME=userdata
+++ grep -oE '[^,^:^\(]*\(userdata[\)_:][^\)]*\)' /root/sdk_linux/rk3588/device/rockchip/rk3588/parameter-ubuntu-fit.txt
++ PART_STR='-@0x00cda000(userdata:grow)'
+++ echo '-@0x00cda000(userdata:grow)'
+++ grep -oE '^[^@^-]*'
++ PART_SIZE=
++ echo 0
+ PART_SIZE=0
+ '[' 0 -gt 0 ']'
+ return 0
+ message 'Done packing userdata.img'
+ echo -e '\e[36m Done packing userdata.img \e[0m'
 Done packing userdata.img
+ rm -rf /root/sdk_linux/rk3588/device/rockchip/userdata/userdata_normal/.fixed   
+ message 'Images in /root/sdk_linux/rk3588/rockdev are ready!'
+ echo -e '\e[36m Images in /root/sdk_linux/rk3588/rockdev are ready! \e[0m'      
 Images in /root/sdk_linux/rk3588/rockdev are ready!
```