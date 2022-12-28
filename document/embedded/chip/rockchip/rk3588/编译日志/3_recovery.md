```
加了 cat $target_its_file

root@5e42e5e27730:~/sdk_linux/rk3588# ./build.sh recovery
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
+ '[' '!' -L /root/sdk_linux/rk3588/device/rockchip/.BoardConfig.mk -a recovery '!=' lunch ']'
+ unset_board_config_all
++ mktemp
+ local tmp_file=/tmp/tmp.FJV8FwNdlD
+ uniq
+ sort
++ find /root/sdk_linux/rk3588/device/rockchip -name 'Board*.mk' -type f
+ grep -o '^export.*RK_.*=' /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig_thunder_boot.mk /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig_ficial_gate.mk /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v11-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr4-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-robot64.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-robot64_no_gpu.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v11.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_multi.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick_emmc.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick_sfc.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3128-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3128-evb-ddr3-v10-debian.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10-debian.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10-slc-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig-minievb-v10-lock.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig-minievb-v10-cvr.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3229/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/cmcc_soundai/BoardConfig_soundai_cmcc.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_RK3308B_firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_robot64.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_soundai_cmcc.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308b_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308bs_64bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_robot32.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308b_64bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308hs_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308h_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308bs_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-sapphire-excavator-lp4.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-sapphire-excavator.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-evb-ind-lpddr4.mk /root/sdk_linux/rk3588/device/rockchip/px3se/BoardConfig_nand.mk /root/sdk_linux/rk3588/device/rockchip/px3se/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig_retro.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig_dongle.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-security-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb7-lp4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb3-lp5-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588s-evb1-lp4x-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb1-lp4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-robot64_no_gpu.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v12-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v12.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-robot64.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-security-base.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10-spi-nor-64M.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3566-evb2-lp4x-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-uvc-evb1-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3566-evb2-lp4x-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig-rk3288-firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig_rk3288-evb-act8846.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig-rk3288-evb-rk808.mk /root/sdk_linux/rk3588/device/rockchip/rk3358/BoardConfig-rk3358m-vehicle-ddr3.mk /root/sdk_linux/rk3588/device/rockchip/rk3358/BoardConfig-rk3358-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_v10-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig_rk3399pro_evb_v14-combine.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_npu-pcie.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_v11_v12-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_npu-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_lpd4_v11_v12-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig_rk3399pro_evb_v13_pcie.mk /root/sdk_linux/rk3588/device/rockchip/rk3128h/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-v10-v11.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-cvr.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-robot.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-sl.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-battery-evb.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-dualcam-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-facial_gate.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-trailcamera.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nor-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-snapshot.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc-spi-nor-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-spi-nand-ab.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-ramboot-uvc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-slc-nand-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-ab-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nor-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-tb-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-emmc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-sllock.mk /root/sdk_linux/rk3588/device/rockchip/rk3328/BoardConfig.mk -h
+ source /tmp/tmp.FJV8FwNdlD
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
+ rm -f /tmp/tmp.FJV8FwNdlD
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
+ echo recovery
+ grep -wqE 'help|-h'
+ OPTIONS=recovery
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rk3588/app-build.sh ']'
+ for option in ${OPTIONS}
+ echo 'processing option: recovery'
processing option: recovery
+ case $option in
+ build_recovery
+ '[' '' = true ']'
+ '[' '!' -z '' ']'
+ echo '==========Start building recovery=========='
==========Start building recovery==========
+ echo TARGET_RECOVERY_CONFIG=
TARGET_RECOVERY_CONFIG=
+ echo ========================================
========================================
+ /usr/bin/time -f 'you take %E to build recovery' /root/sdk_linux/rk3588/device/rockchip/common/mk-ramdisk.sh recovery.img
+ set -e
+++ dirname /root/sdk_linux/rk3588/device/rockchip/common/mk-ramdisk.sh
++ cd /root/sdk_linux/rk3588/device/rockchip/common
++ pwd
+ COMMON_DIR=/root/sdk_linux/rk3588/device/rockchip/common
+ '[' -h /root/sdk_linux/rk3588/device/rockchip/common/mk-ramdisk.sh ']'
+ cd /root/sdk_linux/rk3588/device/rockchip/common
+ cd ../../..
++ pwd
+ TOP_DIR=/root/sdk_linux/rk3588
+ RAMDISK_IMG=recovery.img
+ RAMDISK_CFG=
+ RAMDISK_TYPE=
+ echo 'config is '
config is
+ BOARD_CONFIG=/root/sdk_linux/rk3588/device/rockchip/.BoardConfig.mk
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
+ '[' -z ']'
+ KERNEL_IMAGE=/root/sdk_linux/rk3588/kernel/arch/arm64/boot/Image
+ KERNEL_DTB=/root/sdk_linux/rk3588/kernel/resource.img
+ '[' -z ']'
+ '[' -n rk3588-recovery-arm64.cpio.gz ']'
+ ROOTFS_IMAGE=/root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz
+ TARGET_IMAGE=/root/sdk_linux/rk3588/rockdev/recovery.img
+ rm -f /root/sdk_linux/rk3588/rockdev/recovery.img
+ echo 'use prebuilt rk3588-recovery-arm64.cpio.gz for CPIO image'
use prebuilt rk3588-recovery-arm64.cpio.gz for CPIO image
+ '[' -f /root/sdk_linux/rk3588/kernel/arch/arm64/boot/Image ']'
+ echo 'found kernel image'
found kernel image
+ '[' -n '' ']'
+ echo -n 'pack recovery.img...'
pack recovery.img...+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rk3588/boot4recovery.its ']'
+ '[' '' = true ']'
+ /root/sdk_linux/rk3588/device/rockchip/common/mk-fitimage.sh /root/sdk_linux/rk3588/rockdev/recovery.img /root/sdk_linux/rk3588/device/rockchip/rk3588/boot4recovery.its /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz /root/sdk_linux/rk3588/kernel/arch/arm64/boot/Image
+ set -e
+++ realpath /root/sdk_linux/rk3588/device/rockchip/common/mk-fitimage.sh
++ dirname /root/sdk_linux/rk3588/device/rockchip/common/mk-fitimage.sh
+ SCRIPT_DIR=/root/sdk_linux/rk3588/device/rockchip/common
++ realpath /root/sdk_linux/rk3588/device/rockchip/common/../../..
+ TOP_DIR=/root/sdk_linux/rk3588
+ cd /root/sdk_linux/rk3588
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
+ ROCKDEV=/root/sdk_linux/rk3588/rockdev
+ fdt=0
+ kernel=0
+ ramdisk=0
+ resource=0
+ OUTPUT_TARGET_IMAGE=/root/sdk_linux/rk3588/rockdev/recovery.img
+ src_its_file=/root/sdk_linux/rk3588/device/rockchip/rk3588/boot4recovery.its
+ ramdisk_file_path=/root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz
+ kernel_image=/root/sdk_linux/rk3588/kernel/arch/arm64/boot/Image
+ target_its_file=/root/sdk_linux/rk3588/rockdev/.tmp_its
+ '[' -z /root/sdk_linux/rk3588/kernel/arch/arm64/boot/Image ']'
+ '[' '!' -f /root/sdk_linux/rk3588/device/rockchip/rk3588/boot4recovery.its ']'
+ '[' arm64 == arm ']'
+ kernel_dtb_file=kernel/arch/arm64/boot/dts/rockchip/rk3588-firefly-itx-3588j.dtb
+ rm -f /root/sdk_linux/rk3588/rockdev/.tmp_its
++ dirname /root/sdk_linux/rk3588/rockdev/.tmp_its
+ mkdir -p /root/sdk_linux/rk3588/rockdev
+ read line
+ '[' 0 -eq 1 ']'
+ echo /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /media /mnt /opt /parameter.txt /proc /root /run /sbin /srv /sys /tmp /usr /var
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /media /mnt /opt /parameter.txt /proc /root /run /sbin /srv /sys /tmp /usr /var
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /media /mnt /opt /parameter.txt /proc /root /run /sbin /srv /sys /tmp /usr /var
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /media /mnt /opt /parameter.txt /proc /root /run /sbin /srv /sys /tmp /usr /var
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo '/*'
+ read line
+ '[' 0 -eq 1 ']'
+ echo Makefile app build.sh buildroot debian device docs envsetup.sh external firefly-update.sh kernel mkfirmware.sh prebuilts rk3588-v1.0.2a-to-v1.0.2b rk3588-v1.0.2a-to-v1.0.2b.7z rk3588-v1.0.2b-to-v1.0.2c rk3588-v1.0.2b-to-v1.0.2c.7z rk3588-v1.0.2c-to-v1.0.4a rk3588-v1.0.2c-to-v1.0.4a.7z rk3588-v1.0.4a-to-v1.0.4b rk3588-v1.0.4a-to-v1.0.4b.7z rkbin rkflash.sh rockdev tools u-boot ubuntu_rootfs uefi update.sh Copyright '(C)' 2021 Rockchip Electronics Co., Ltd
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo Makefile app build.sh buildroot debian device docs envsetup.sh external firefly-update.sh kernel mkfirmware.sh prebuilts rk3588-v1.0.2a-to-v1.0.2b rk3588-v1.0.2a-to-v1.0.2b.7z rk3588-v1.0.2b-to-v1.0.2c rk3588-v1.0.2b-to-v1.0.2c.7z rk3588-v1.0.2c-to-v1.0.4a rk3588-v1.0.2c-to-v1.0.4a.7z rk3588-v1.0.4a-to-v1.0.4b rk3588-v1.0.4a-to-v1.0.4b.7z rkbin rkflash.sh rockdev tools u-boot ubuntu_rootfs uefi update.sh Copyright '(C)' 2021 Rockchip Electronics Co., Ltd
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ grep -w '^ramdisk'
+ echo Makefile app build.sh buildroot debian device docs envsetup.sh external firefly-update.sh kernel mkfirmware.sh prebuilts rk3588-v1.0.2a-to-v1.0.2b rk3588-v1.0.2a-to-v1.0.2b.7z rk3588-v1.0.2b-to-v1.0.2c rk3588-v1.0.2b-to-v1.0.2c.7z rk3588-v1.0.2c-to-v1.0.4a rk3588-v1.0.2c-to-v1.0.4a.7z rk3588-v1.0.4a-to-v1.0.4b rk3588-v1.0.4a-to-v1.0.4b.7z rkbin rkflash.sh rockdev tools u-boot ubuntu_rootfs uefi update.sh Copyright '(C)' 2021 Rockchip Electronics Co., Ltd
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo Makefile app build.sh buildroot debian device docs envsetup.sh external firefly-update.sh kernel mkfirmware.sh prebuilts rk3588-v1.0.2a-to-v1.0.2b rk3588-v1.0.2a-to-v1.0.2b.7z rk3588-v1.0.2b-to-v1.0.2c rk3588-v1.0.2b-to-v1.0.2c.7z rk3588-v1.0.2c-to-v1.0.4a rk3588-v1.0.2c-to-v1.0.4a.7z rk3588-v1.0.4a-to-v1.0.4b rk3588-v1.0.4a-to-v1.0.4b.7z rkbin rkflash.sh rockdev tools u-boot ubuntu_rootfs uefi update.sh Copyright '(C)' 2021 Rockchip Electronics Co., Ltd
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo '* Copyright (C) 2021 Rockchip Electronics Co., Ltd'
+ read line
+ '[' 0 -eq 1 ']'
+ echo Makefile app build.sh buildroot debian device docs envsetup.sh external firefly-update.sh kernel mkfirmware.sh prebuilts rk3588-v1.0.2a-to-v1.0.2b rk3588-v1.0.2a-to-v1.0.2b.7z rk3588-v1.0.2b-to-v1.0.2c rk3588-v1.0.2b-to-v1.0.2c.7z rk3588-v1.0.2c-to-v1.0.4a rk3588-v1.0.2c-to-v1.0.4a.7z rk3588-v1.0.4a-to-v1.0.4b rk3588-v1.0.4a-to-v1.0.4b.7z rkbin rkflash.sh rockdev tools u-boot ubuntu_rootfs uefi update.sh
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo Makefile app build.sh buildroot debian device docs envsetup.sh external firefly-update.sh kernel mkfirmware.sh prebuilts rk3588-v1.0.2a-to-v1.0.2b rk3588-v1.0.2a-to-v1.0.2b.7z rk3588-v1.0.2b-to-v1.0.2c rk3588-v1.0.2b-to-v1.0.2c.7z rk3588-v1.0.2c-to-v1.0.4a rk3588-v1.0.2c-to-v1.0.4a.7z rk3588-v1.0.4a-to-v1.0.4b rk3588-v1.0.4a-to-v1.0.4b.7z rkbin rkflash.sh rockdev tools u-boot ubuntu_rootfs uefi update.sh
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo Makefile app build.sh buildroot debian device docs envsetup.sh external firefly-update.sh kernel mkfirmware.sh prebuilts rk3588-v1.0.2a-to-v1.0.2b rk3588-v1.0.2a-to-v1.0.2b.7z rk3588-v1.0.2b-to-v1.0.2c rk3588-v1.0.2b-to-v1.0.2c.7z rk3588-v1.0.2c-to-v1.0.4a rk3588-v1.0.2c-to-v1.0.4a.7z rk3588-v1.0.4a-to-v1.0.4b rk3588-v1.0.4a-to-v1.0.4b.7z rkbin rkflash.sh rockdev tools u-boot ubuntu_rootfs uefi update.sh
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ grep -w '^resource'
+ echo Makefile app build.sh buildroot debian device docs envsetup.sh external firefly-update.sh kernel mkfirmware.sh prebuilts rk3588-v1.0.2a-to-v1.0.2b rk3588-v1.0.2a-to-v1.0.2b.7z rk3588-v1.0.2b-to-v1.0.2c rk3588-v1.0.2b-to-v1.0.2c.7z rk3588-v1.0.2c-to-v1.0.4a rk3588-v1.0.2c-to-v1.0.4a.7z rk3588-v1.0.4a-to-v1.0.4b rk3588-v1.0.4a-to-v1.0.4b.7z rkbin rkflash.sh rockdev tools u-boot ubuntu_rootfs uefi update.sh
+ grep -v ';'
+ '[' '' = true ']'
+ echo '*'
+ read line
+ '[' 0 -eq 1 ']'
+ echo Makefile app build.sh buildroot debian device docs envsetup.sh external firefly-update.sh kernel mkfirmware.sh prebuilts rk3588-v1.0.2a-to-v1.0.2b rk3588-v1.0.2a-to-v1.0.2b.7z rk3588-v1.0.2b-to-v1.0.2c rk3588-v1.0.2b-to-v1.0.2c.7z rk3588-v1.0.2c-to-v1.0.4a rk3588-v1.0.2c-to-v1.0.4a.7z rk3588-v1.0.4a-to-v1.0.4b rk3588-v1.0.4a-to-v1.0.4b.7z rkbin rkflash.sh rockdev tools u-boot ubuntu_rootfs uefi update.sh SPDX-License-Identifier: GPL-2.0
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo Makefile app build.sh buildroot debian device docs envsetup.sh external firefly-update.sh kernel mkfirmware.sh prebuilts rk3588-v1.0.2a-to-v1.0.2b rk3588-v1.0.2a-to-v1.0.2b.7z rk3588-v1.0.2b-to-v1.0.2c rk3588-v1.0.2b-to-v1.0.2c.7z rk3588-v1.0.2c-to-v1.0.4a rk3588-v1.0.2c-to-v1.0.4a.7z rk3588-v1.0.4a-to-v1.0.4b rk3588-v1.0.4a-to-v1.0.4b.7z rkbin rkflash.sh rockdev tools u-boot ubuntu_rootfs uefi update.sh SPDX-License-Identifier: GPL-2.0
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo Makefile app build.sh buildroot debian device docs envsetup.sh external firefly-update.sh kernel mkfirmware.sh prebuilts rk3588-v1.0.2a-to-v1.0.2b rk3588-v1.0.2a-to-v1.0.2b.7z rk3588-v1.0.2b-to-v1.0.2c rk3588-v1.0.2b-to-v1.0.2c.7z rk3588-v1.0.2c-to-v1.0.4a rk3588-v1.0.2c-to-v1.0.4a.7z rk3588-v1.0.4a-to-v1.0.4b rk3588-v1.0.4a-to-v1.0.4b.7z rkbin rkflash.sh rockdev tools u-boot ubuntu_rootfs uefi update.sh SPDX-License-Identifier: GPL-2.0
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo Makefile app build.sh buildroot debian device docs envsetup.sh external firefly-update.sh kernel mkfirmware.sh prebuilts rk3588-v1.0.2a-to-v1.0.2b rk3588-v1.0.2a-to-v1.0.2b.7z rk3588-v1.0.2b-to-v1.0.2c rk3588-v1.0.2b-to-v1.0.2c.7z rk3588-v1.0.2c-to-v1.0.4a rk3588-v1.0.2c-to-v1.0.4a.7z rk3588-v1.0.4a-to-v1.0.4b rk3588-v1.0.4a-to-v1.0.4b.7z rkbin rkflash.sh rockdev tools u-boot ubuntu_rootfs uefi update.sh SPDX-License-Identifier: GPL-2.0
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo '* SPDX-License-Identifier: GPL-2.0'
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ grep -v ';'
+ echo app/ buildroot/ debian/ device/ docs/ external/ kernel/ prebuilts/ rk3588-v1.0.2a-to-v1.0.2b/ rk3588-v1.0.2b-to-v1.0.2c/ rk3588-v1.0.2c-to-v1.0.4a/ rk3588-v1.0.4a-to-v1.0.4b/ rkbin/ rockdev/ tools/ u-boot/ ubuntu_rootfs/ uefi/
+ '[' 0 -eq 1 ']'
+ echo app/ buildroot/ debian/ device/ docs/ external/ kernel/ prebuilts/ rk3588-v1.0.2a-to-v1.0.2b/ rk3588-v1.0.2b-to-v1.0.2c/ rk3588-v1.0.2c-to-v1.0.4a/ rk3588-v1.0.4a-to-v1.0.4b/ rkbin/ rockdev/ tools/ u-boot/ ubuntu_rootfs/ uefi/
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo app/ buildroot/ debian/ device/ docs/ external/ kernel/ prebuilts/ rk3588-v1.0.2a-to-v1.0.2b/ rk3588-v1.0.2b-to-v1.0.2c/ rk3588-v1.0.2c-to-v1.0.4a/ rk3588-v1.0.4a-to-v1.0.4b/ rkbin/ rockdev/ tools/ u-boot/ ubuntu_rootfs/ uefi/
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo app/ buildroot/ debian/ device/ docs/ external/ kernel/ prebuilts/ rk3588-v1.0.2a-to-v1.0.2b/ rk3588-v1.0.2b-to-v1.0.2c/ rk3588-v1.0.2c-to-v1.0.4a/ rk3588-v1.0.4a-to-v1.0.4b/ rkbin/ rockdev/ tools/ u-boot/ ubuntu_rootfs/ uefi/
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo '*/'
+ read line
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo ''
+ read line
+ '[' 0 -eq 1 ']'
+ echo '/dts-v1/;'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '/dts-v1/;'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo '/dts-v1/;'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '/dts-v1/;'
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo '/dts-v1/;'
+ read line
+ '[' 0 -eq 1 ']'
+ echo / '{'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo / '{'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo / '{'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo / '{'
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo '/ {'
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ grep -v ';'
+ echo description = '"U-Boot' FIT source file for 'arm";'
+ '[' 0 -eq 1 ']'
+ echo description = '"U-Boot' FIT source file for 'arm";'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo description = '"U-Boot' FIT source file for 'arm";'
+ grep -v ';'
+ grep -w '^ramdisk'
+ '[' 0 -eq 1 ']'
+ echo description = '"U-Boot' FIT source file for 'arm";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'description = "U-Boot FIT source file for arm";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo ''
+ read line
+ '[' 0 -eq 1 ']'
+ echo images '{'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo images '{'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo images '{'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo images '{'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'images {'
+ read line
+ '[' 0 -eq 1 ']'
+ echo fdt '{'
+ grep -v ';'
+ grep -w '^fdt'
fdt {
+ fdt=1
+ echo 'fdt {'
+ continue
+ read line
+ '[' 1 -eq 1 ']'
+ echo 'data = /incbin/("/root/sdk_linux/rk3588/kernel/arch/arm64/boot/dts/rockchip/rk3588-firefly-itx-3588j.dtb");'
+ fdt=0
+ continue
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ echo type = '"flat_dt";'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo type = '"flat_dt";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo type = '"flat_dt";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo type = '"flat_dt";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'type = "flat_dt";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo 'arch = "arm64";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo compression = '"none";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ grep -w '^kernel'
+ grep -v ';'
+ echo compression = '"none";'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo compression = '"none";'
+ grep -v ';'
+ grep -w '^ramdisk'
+ '[' 0 -eq 1 ']'
+ echo compression = '"none";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'compression = "none";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo load = '<0xffffff00>;'
+ grep -v ';'
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo load = '<0xffffff00>;'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo load = '<0xffffff00>;'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo load = '<0xffffff00>;'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'load = <0xffffff00>;'
+ read line
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo ''
+ read line
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -v ';'
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'hash {'
+ read line
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -v ';'
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'algo = "sha256";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo '};'
+ read line
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ grep -w '^ramdisk'
+ grep -v ';'
+ echo '};'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo '};'
+ read line
+ '[' 0 -eq 1 ']'
+ grep -v ';'
+ echo
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo ''
+ read line
+ '[' 0 -eq 1 ']'
+ echo kernel '{'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo kernel '{'
+ grep -w '^kernel'
+ grep -v ';'
kernel {
+ kernel=1
+ echo 'kernel {'
+ continue
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ grep -v ';'
+ echo data = '/incbin/("kernel/arch/arm64/boot/Image");'
+ '[' 1 -eq 1 ']'
+ echo 'data = /incbin/("/root/sdk_linux/rk3588/kernel/arch/arm64/boot/Image");'
+ kernel=0
+ continue
+ read line
+ '[' 0 -eq 1 ']'
+ echo type = '"kernel";'
+ grep -v ';'
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo type = '"kernel";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo type = '"kernel";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo type = '"kernel";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'type = "kernel";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'arch = "arm64";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo os = '"linux";'
+ grep -v ';'
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo os = '"linux";'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo os = '"linux";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo os = '"linux";'
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo 'os = "linux";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo compression = '"none";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo compression = '"none";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo compression = '"none";'
+ grep -v ';'
+ grep -w '^ramdisk'
+ '[' 0 -eq 1 ']'
+ grep -w '^resource'
+ echo compression = '"none";'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'compression = "none";'
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ grep -v ';'
+ echo entry = '<0xffffff01>;'
+ '[' 0 -eq 1 ']'
+ echo entry = '<0xffffff01>;'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo entry = '<0xffffff01>;'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo entry = '<0xffffff01>;'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'entry = <0xffffff01>;'
+ read line
+ '[' 0 -eq 1 ']'
+ echo load = '<0xffffff01>;'
+ grep -v ';'
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo load = '<0xffffff01>;'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo load = '<0xffffff01>;'
+ grep -v ';'
+ grep -w '^ramdisk'
+ '[' 0 -eq 1 ']'
+ echo load = '<0xffffff01>;'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'load = <0xffffff01>;'
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ grep -v ';'
+ echo
+ '[' 0 -eq 1 ']'
+ echo
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo ''
+ read line
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -v ';'
+ grep -w '^ramdisk'
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'hash {'
+ read line
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'algo = "sha256";'
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ grep -v ';'
+ echo '};'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo '};'
+ read line
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo '};'
+ read line
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo ''
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ grep -v ';'
+ echo ramdisk '{'
+ '[' 0 -eq 1 ']'
+ echo ramdisk '{'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo ramdisk '{'
+ grep -v ';'
+ grep -w '^ramdisk'
ramdisk {
+ ramdisk=1
+ echo 'ramdisk {'
+ continue
+ read line
+ '[' 0 -eq 1 ']'
+ echo data = '/incbin/("out/ramdisk");'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo data = '/incbin/("out/ramdisk");'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 1 -eq 1 ']'
+ echo 'data = /incbin/("/root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz");'
+ ramdisk=0
+ continue
+ read line
+ '[' 0 -eq 1 ']'
+ echo type = '"ramdisk";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo type = '"ramdisk";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ grep -w '^ramdisk'
+ grep -v ';'
+ echo type = '"ramdisk";'
+ '[' 0 -eq 1 ']'
+ echo type = '"ramdisk";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'type = "ramdisk";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -v ';'
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'arch = "arm64";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo os = '"linux";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo os = '"linux";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo os = '"linux";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo os = '"linux";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'os = "linux";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo compression = '"none";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo compression = '"none";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo compression = '"none";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo compression = '"none";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'compression = "none";'
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ echo load = '<0xffffff02>;'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo load = '<0xffffff02>;'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo load = '<0xffffff02>;'
+ grep -v ';'
+ grep -w '^ramdisk'
+ '[' 0 -eq 1 ']'
+ echo load = '<0xffffff02>;'
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo 'load = <0xffffff02>;'
+ read line
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo ''
+ read line
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ grep -w '^kernel'
+ echo hash '{'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'hash {'
+ read line
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ grep -w '^kernel'
+ echo algo = '"sha256";'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'algo = "sha256";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -v ';'
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo '};'
+ read line
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo '};'
+ read line
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo ''
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ echo resource '{'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo resource '{'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo resource '{'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ grep -w '^resource'
+ grep -v ';'
+ echo resource '{'
resource {
+ resource=1
+ echo 'resource {'
+ continue
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ grep -v ';'
+ echo data = '/incbin/("kernel/resource.img");'
+ '[' 0 -eq 1 ']'
+ echo data = '/incbin/("kernel/resource.img");'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ grep -v ';'
+ grep -w '^ramdisk'
+ echo data = '/incbin/("kernel/resource.img");'
+ '[' 1 -eq 1 ']'
+ echo 'data = /incbin/("/root/sdk_linux/rk3588/kernel/resource.img");'
+ resource=0
+ continue
+ read line
+ '[' 0 -eq 1 ']'
+ echo type = '"multi";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo type = '"multi";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo type = '"multi";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo type = '"multi";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'type = "multi";'
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ grep -v ';'
+ echo arch = '"arm64";'
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ grep -w '^ramdisk'
+ grep -v ';'
+ echo arch = '"arm64";'
+ '[' 0 -eq 1 ']'
+ echo arch = '"arm64";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'arch = "arm64";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo compression = '"none";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo compression = '"none";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo compression = '"none";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ grep -w '^resource'
+ echo compression = '"none";'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'compression = "none";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ grep -w '^kernel'
+ grep -v ';'
+ echo
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo ''
+ read line
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -v ';'
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo hash '{'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'hash {'
+ read line
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ grep -w '^kernel'
+ grep -v ';'
+ echo algo = '"sha256";'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'algo = "sha256";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo '};'
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ grep -v ';'
+ echo '};'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ grep -w '^resource'
+ echo '};'
+ grep -v ';'
+ '[' '' = true ']'
+ echo '};'
+ read line
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -v ';'
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo '};'
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ grep -v ';'
+ echo
+ '[' 0 -eq 1 ']'
+ echo
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -v ';'
+ grep -w '^ramdisk'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo ''
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ grep -v ';'
+ echo configurations '{'
+ '[' 0 -eq 1 ']'
+ grep -v ';'
+ grep -w '^kernel'
+ echo configurations '{'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo configurations '{'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo configurations '{'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'configurations {'
+ read line
+ '[' 0 -eq 1 ']'
+ echo default = '"conf";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo default = '"conf";'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo default = '"conf";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo default = '"conf";'
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo 'default = "conf";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ grep -v ';'
+ echo
+ grep -w '^ramdisk'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo ''
+ read line
+ '[' 0 -eq 1 ']'
+ echo conf '{'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo conf '{'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo conf '{'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo conf '{'
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo 'conf {'
+ read line
+ '[' 0 -eq 1 ']'
+ echo rollback-index = '<0x00>;'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo rollback-index = '<0x00>;'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo rollback-index = '<0x00>;'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo rollback-index = '<0x00>;'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'rollback-index = <0x00>;'
+ read line
+ '[' 0 -eq 1 ']'
+ echo fdt = '"fdt";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo fdt = '"fdt";'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo fdt = '"fdt";'
+ grep -v ';'
+ grep -w '^ramdisk'
+ '[' 0 -eq 1 ']'
+ echo fdt = '"fdt";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'fdt = "fdt";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo kernel = '"kernel";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo kernel = '"kernel";'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo kernel = '"kernel";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo kernel = '"kernel";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'kernel = "kernel";'
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ echo ramdisk = '"ramdisk";'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo ramdisk = '"ramdisk";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ grep -w '^ramdisk'
+ echo ramdisk = '"ramdisk";'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo ramdisk = '"ramdisk";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'ramdisk = "ramdisk";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo multi = '"resource";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo multi = '"resource";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo multi = '"resource";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo multi = '"resource";'
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo 'multi = "resource";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo ''
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ echo signature '{'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo signature '{'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo signature '{'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo signature '{'
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo 'signature {'
+ read line
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256,rsa2048";'
+ grep -v ';'
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256,rsa2048";'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256,rsa2048";'
+ grep -v ';'
+ grep -w '^ramdisk'
+ '[' 0 -eq 1 ']'
+ echo algo = '"sha256,rsa2048";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'algo = "sha256,rsa2048";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo padding = '"pss";'
+ grep -v ';'
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo padding = '"pss";'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo padding = '"pss";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo padding = '"pss";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'padding = "pss";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo key-name-hint = '"dev";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo key-name-hint = '"dev";'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo key-name-hint = '"dev";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo key-name-hint = '"dev";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'key-name-hint = "dev";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo sign-images = '"fdt",' '"kernel",' '"ramdisk",' '"multi";'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo sign-images = '"fdt",' '"kernel",' '"ramdisk",' '"multi";'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo sign-images = '"fdt",' '"kernel",' '"ramdisk",' '"multi";'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo sign-images = '"fdt",' '"kernel",' '"ramdisk",' '"multi";'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo 'sign-images = "fdt", "kernel", "ramdisk", "multi";'
+ read line
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -v ';'
+ grep -w '^kernel'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -v ';'
+ grep -w '^resource'
+ '[' '' = true ']'
+ echo '};'
+ read line
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -v ';'
+ grep -w '^fdt'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ grep -w '^resource'
+ grep -v ';'
+ echo '};'
+ '[' '' = true ']'
+ echo '};'
+ read line
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^fdt'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo '};'
+ read line
+ '[' 0 -eq 1 ']'
+ grep -w '^fdt'
+ grep -v ';'
+ echo '};'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^kernel'
+ grep -v ';'
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz ']'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^ramdisk'
+ grep -v ';'
+ '[' 0 -eq 1 ']'
+ echo '};'
+ grep -w '^resource'
+ grep -v ';'
+ '[' '' = true ']'
+ echo '};'
+ read line
+ /root/sdk_linux/rk3588/rkbin/tools/mkimage -f /root/sdk_linux/rk3588/rockdev/.tmp_its -E -p 0x800 /root/sdk_linux/rk3588/rockdev/recovery.img
FIT description: U-Boot FIT source file for arm
Created:         Sat Dec 10 21:39:50 2022
 Image 0 (fdt)
  Description:  unavailable
  Created:      Sat Dec 10 21:39:50 2022
  Type:         Flat Device Tree
  Compression:  uncompressed
  Data Size:    162205 Bytes = 158.40 KiB = 0.15 MiB
  Architecture: AArch64
  Load Address: 0xffffff00
  Hash algo:    sha256
  Hash value:   764950c02ef4226fc48fa5acef115814093d67b4dab50e4dc9765b6a7f19827b
 Image 1 (kernel)
  Description:  unavailable
  Created:      Sat Dec 10 21:39:50 2022
  Type:         Kernel Image
  Compression:  uncompressed
  Data Size:    41753088 Bytes = 40774.50 KiB = 39.82 MiB
  Architecture: AArch64
  OS:           Linux
  Load Address: 0xffffff01
  Entry Point:  0xffffff01
  Hash algo:    sha256
  Hash value:   fd27762d4205ce9031ee0dee5b4b20cf6affb9510e1ad90bb2337d45adfbfab1
 Image 2 (ramdisk)
  Description:  unavailable
  Created:      Sat Dec 10 21:39:50 2022
  Type:         RAMDisk Image
  Compression:  uncompressed
  Data Size:    36932945 Bytes = 36067.33 KiB = 35.22 MiB
  Architecture: AArch64
  OS:           Linux
  Load Address: 0xffffff02
  Entry Point:  unavailable
  Hash algo:    sha256
  Hash value:   993174280a559715c65c49c171ee705cba9c0043aa3dcea430d4bae4a474bb1e
 Image 3 (resource)
  Description:  unavailable
  Created:      Sat Dec 10 21:39:50 2022
  Type:         Multi-File Image
  Compression:  uncompressed
  Data Size:    420352 Bytes = 410.50 KiB = 0.40 MiB
  Hash algo:    sha256
  Hash value:   f68013a5560ae95967fea9da43a288db6139fe1721274df0409837f18e40c5ed
 Default Configuration: 'conf'
 Configuration 0 (conf)
  Description:  unavailable
  Kernel:       kernel
  Init Ramdisk: ramdisk
  FDT:          fdt
+ cat /root/sdk_linux/rk3588/rockdev/.tmp_its
/*
* Copyright (C) 2021 Rockchip Electronics Co., Ltd
*
* SPDX-License-Identifier: GPL-2.0
*/

/dts-v1/;
/ {
description = "U-Boot FIT source file for arm";

images {
fdt {
data = /incbin/("/root/sdk_linux/rk3588/kernel/arch/arm64/boot/dts/rockchip/rk3588-firefly-itx-3588j.dtb");
type = "flat_dt";
arch = "arm64";
compression = "none";
load = <0xffffff00>;

hash {
algo = "sha256";
};
};

kernel {
data = /incbin/("/root/sdk_linux/rk3588/kernel/arch/arm64/boot/Image");
type = "kernel";
arch = "arm64";
os = "linux";
compression = "none";
entry = <0xffffff01>;
load = <0xffffff01>;

hash {
algo = "sha256";
};
};

ramdisk {
data = /incbin/("/root/sdk_linux/rk3588/device/rockchip/rockimg/rk3588-recovery-arm64.cpio.gz");
type = "ramdisk";
arch = "arm64";
os = "linux";
compression = "none";
load = <0xffffff02>;

hash {
algo = "sha256";
};
};

resource {
data = /incbin/("/root/sdk_linux/rk3588/kernel/resource.img");
type = "multi";
arch = "arm64";
compression = "none";

hash {
algo = "sha256";
};
};
};

configurations {
default = "conf";

conf {
rollback-index = <0x00>;
fdt = "fdt";
kernel = "kernel";
ramdisk = "ramdisk";
multi = "resource";

signature {
algo = "sha256,rsa2048";
padding = "pss";
key-name-hint = "dev";
sign-images = "fdt", "kernel", "ramdisk", "multi";
};
};
};
};
+ rm -f /root/sdk_linux/rk3588/rockdev/.tmp_its
+ echo done.
done.
you take 0:01.55 to build recovery
+ '[' 0 -eq 0 ']'
+ echo '====Build recovery ok!===='
====Build recovery ok!====
+ '[' -n '' ']'
+ finish_build
+ echo 'Running build_recovery succeeded.'
Running build_recovery succeeded.
+ cd /root/sdk_linux/rk3588
```