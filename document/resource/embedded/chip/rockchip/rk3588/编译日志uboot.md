```
root@5e42e5e27730:~/sdk_linux/rk3588# ./build.sh uboot
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
+ '[' '!' -L /root/sdk_linux/rk3588/device/rockchip/.BoardConfig.mk -a uboot '!=' lunch ']'
+ unset_board_config_all
++ mktemp
+ local tmp_file=/tmp/tmp.4hf92lRAr0
+ sort
++ find /root/sdk_linux/rk3588/device/rockchip -name 'Board*.mk' -type f
+ uniq
+ grep -o '^export.*RK_.*=' /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig_thunder_boot.mk /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig_ficial_gate.mk /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v11-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr4-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-robot64.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-robot64_no_gpu.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v11.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_multi.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick_emmc.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick_sfc.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3128-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3128-evb-ddr3-v10-debian.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10-debian.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10-slc-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig-minievb-v10-lock.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig-minievb-v10-cvr.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3229/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/cmcc_soundai/BoardConfig_soundai_cmcc.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_RK3308B_firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_robot64.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_soundai_cmcc.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308b_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308bs_64bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_robot32.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308b_64bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308hs_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308h_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308bs_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-sapphire-excavator-lp4.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-sapphire-excavator.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-evb-ind-lpddr4.mk /root/sdk_linux/rk3588/device/rockchip/px3se/BoardConfig_nand.mk /root/sdk_linux/rk3588/device/rockchip/px3se/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig_retro.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig_dongle.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-security-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb7-lp4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb3-lp5-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588s-evb1-lp4x-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb1-lp4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-robot64_no_gpu.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v12-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v12.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-robot64.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-security-base.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10-spi-nor-64M.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3566-evb2-lp4x-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-uvc-evb1-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3566-evb2-lp4x-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig-rk3288-firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig_rk3288-evb-act8846.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig-rk3288-evb-rk808.mk /root/sdk_linux/rk3588/device/rockchip/rk3358/BoardConfig-rk3358m-vehicle-ddr3.mk /root/sdk_linux/rk3588/device/rockchip/rk3358/BoardConfig-rk3358-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_v10-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig_rk3399pro_evb_v14-combine.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_npu-pcie.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_v11_v12-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_npu-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_lpd4_v11_v12-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig_rk3399pro_evb_v13_pcie.mk /root/sdk_linux/rk3588/device/rockchip/rk3128h/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-v10-v11.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-cvr.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-robot.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-sl.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-battery-evb.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-dualcam-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-facial_gate.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-trailcamera.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nor-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-snapshot.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc-spi-nor-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-spi-nand-ab.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-ramboot-uvc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-slc-nand-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-ab-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nor-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-tb-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-emmc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-sllock.mk /root/sdk_linux/rk3588/device/rockchip/rk3328/BoardConfig.mk -h
+ source /tmp/tmp.4hf92lRAr0
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
+ rm -f /tmp/tmp.4hf92lRAr0
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
+ echo uboot
+ grep -wqE 'help|-h'
+ OPTIONS=uboot
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rk3588/app-build.sh ']'
+ for option in ${OPTIONS}
+ echo 'processing option: uboot'
processing option: uboot
+ case $option in
+ build_uboot
+ check_config RK_UBOOT_DEFCONFIG
+ unset missing
+ for var in $@
+ eval '[' '$RK_UBOOT_DEFCONFIG' ']'
++ '[' rk3588 ']'
+ continue
+ '[' -z '' ']'
+ return 0
+ build_check_cross_compile
+ case $RK_ARCH in
+ '[' -d /root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu ']'
++ realpath /root/sdk_linux/rk3588
+ CROSS_COMPILE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ export CROSS_COMPILE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ CROSS_COMPILE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ prebuild_uboot
+ UBOOT_COMPILE_COMMANDS='                                                                                              '
++ echo
+ UBOOT_COMPILE_COMMANDS=
+ '[' '' = true ']'
+ '[' '' = true ']'
+ prebuild_security_uboot
+ local mode=
+ '[' '' = true ']'
+ echo '============Start building uboot============'
============Start building uboot============
+ echo TARGET_UBOOT_CONFIG=rk3588
TARGET_UBOOT_CONFIG=rk3588
+ echo =========================================
=========================================
+ cd u-boot
+ rm -f '*_loader_*.bin'
+ '[' '' = true ']'
+ '[' -n firefly-linux.config ']'
+ '[' -f configs/rk3588_defconfig ']'
+ make rk3588_defconfig firefly-linux.config
  HOSTCC  scripts/basic/fixdep
  HOSTCC  scripts/kconfig/conf.o
  SHIPPED scripts/kconfig/zconf.tab.c
  SHIPPED scripts/kconfig/zconf.lex.c
  SHIPPED scripts/kconfig/zconf.hash.c
  HOSTCC  scripts/kconfig/zconf.tab.o
  HOSTLD  scripts/kconfig/conf
#
# configuration written to .config
#
Using .config as base
Merging ./arch/../configs/firefly-linux.config
Value of CONFIG_ROCKCHIP_EARLY_DISTRO_DTB is redefined by fragment ./arch/../configs/firefly-linux.config:
Previous value: # CONFIG_ROCKCHIP_EARLY_DISTRO_DTB is not set
New value: CONFIG_ROCKCHIP_EARLY_DISTRO_DTB=y

Value of CONFIG_SPL_GPIO_SUPPORT is redefined by fragment ./arch/../configs/firefly-linux.config:
Previous value: CONFIG_SPL_GPIO_SUPPORT=y
New value: CONFIG_SPL_GPIO_SUPPORT=n

Value of CONFIG_DM_PCA953X is redefined by fragment ./arch/../configs/firefly-linux.config:
Previous value: # CONFIG_DM_PCA953X is not set
New value: CONFIG_DM_PCA953X=y

Value of CONFIG_SPL_FIT_IMAGE_KB is redefined by fragment ./arch/../configs/firefly-linux.config:
Previous value: CONFIG_SPL_FIT_IMAGE_KB=2048
New value: CONFIG_SPL_FIT_IMAGE_KB=4096

#
# merged configuration written to .config (needs make)
#
scripts/kconfig/conf  --oldconfig Kconfig
#
# configuration written to .config
#
+ '[' -n /root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu- ']'
+ ./make.sh CROSS_COMPILE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ set -e
++ wc -l
++ sed -n 'N;/processor/p' /proc/cpuinfo
+ JOB=12
++ ls configs/android6.0-rk3399_defconfig configs/dserve_dsrv9703c_defconfig configs/evb-aarch32-rk3308_defconfig configs/evb-px30_defconfig configs/evb-rk3036_defconfig configs/evb-rk3066_defconfig configs/evb-rk3128_defconfig configs/evb-rk3229_defconfig configs/evb-rk3288-rk1608_defconfig configs/evb-rk3288_defconfig configs/evb-rk3308_defconfig configs/evb-rk3326_defconfig configs/evb-rk3328_defconfig configs/evb-rk3399_defconfig configs/evb-rv1108_defconfig configs/fennec-rk3288_defconfig configs/firefly-rk3288_defconfig configs/firefly-rk3399_defconfig configs/gva-rk3229_defconfig configs/kylin-rk3036_defconfig configs/lion-rk3368_defconfig configs/miqi-rk3288_defconfig configs/nokia_rx51_defconfig configs/phycore-rk3288_defconfig configs/popmetal-rk3288_defconfig configs/puma-rk3399_defconfig configs/px30-tb_defconfig configs/px30_defconfig configs/rk1806_defconfig configs/rk1808_defconfig configs/rk3036_defconfig configs/rk3126_defconfig configs/rk3128_defconfig configs/rk3128x_defconfig configs/rk322x_defconfig configs/rk3288_defconfig configs/rk3308-aarch32-amp_defconfig configs/rk3308-aarch32_defconfig configs/rk3308_defconfig configs/rk3326-aarch32_defconfig configs/rk3326_defconfig configs/rk3328_defconfig configs/rk3368_defconfig configs/rk3399_defconfig configs/rk3399pro_defconfig configs/rk3568-spl-spi-nand_defconfig configs/rk3568_defconfig configs/rk3588_defconfig configs/rv1106-emmc-tb_defconfig configs/rv1106-spi-nor-tb_defconfig configs/rv1106-spi-nor_defconfig configs/rv1106_defconfig configs/rv1126-spi-nor-tiny_defconfig configs/rv1126-spl-spi-nand_defconfig configs/rv1126_defconfig configs/sheep-rk3368_defconfig configs/tinker-rk3288_defconfig configs/vyasa-rk3288_defconfig
+ SUPPORT_LIST='configs/android6.0-rk3399_defconfig
configs/dserve_dsrv9703c_defconfig
configs/evb-aarch32-rk3308_defconfig
configs/evb-px30_defconfig
configs/evb-rk3036_defconfig
configs/evb-rk3066_defconfig
configs/evb-rk3128_defconfig
configs/evb-rk3229_defconfig
configs/evb-rk3288-rk1608_defconfig
configs/evb-rk3288_defconfig
configs/evb-rk3308_defconfig
configs/evb-rk3326_defconfig
configs/evb-rk3328_defconfig
configs/evb-rk3399_defconfig
configs/evb-rv1108_defconfig
configs/fennec-rk3288_defconfig
configs/firefly-rk3288_defconfig
configs/firefly-rk3399_defconfig
configs/gva-rk3229_defconfig
configs/kylin-rk3036_defconfig
configs/lion-rk3368_defconfig
configs/miqi-rk3288_defconfig
configs/nokia_rx51_defconfig
configs/phycore-rk3288_defconfig
configs/popmetal-rk3288_defconfig
configs/puma-rk3399_defconfig
configs/px30-tb_defconfig
configs/px30_defconfig
configs/rk1806_defconfig
configs/rk1808_defconfig
configs/rk3036_defconfig
configs/rk3126_defconfig
configs/rk3128_defconfig
configs/rk3128x_defconfig
configs/rk322x_defconfig
configs/rk3288_defconfig
configs/rk3308-aarch32-amp_defconfig
configs/rk3308-aarch32_defconfig
configs/rk3308_defconfig
configs/rk3326-aarch32_defconfig
configs/rk3326_defconfig
configs/rk3328_defconfig
configs/rk3368_defconfig
configs/rk3399_defconfig
configs/rk3399pro_defconfig
configs/rk3568-spl-spi-nand_defconfig
configs/rk3568_defconfig
configs/rk3588_defconfig
configs/rv1106-emmc-tb_defconfig
configs/rv1106-spi-nor-tb_defconfig
configs/rv1106-spi-nor_defconfig
configs/rv1106_defconfig
configs/rv1126-spi-nor-tiny_defconfig
configs/rv1126-spl-spi-nand_defconfig
configs/rv1126_defconfig
configs/sheep-rk3368_defconfig
configs/tinker-rk3288_defconfig
configs/vyasa-rk3288_defconfig'
+ CMD_ARGS=CROSS_COMPILE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ RKBIN_TOOLS=../rkbin/tools
+ CROSS_COMPILE_ARM32=../prebuilts/gcc/linux-x86/arm/gcc-linaro-6.3.1-2017.05-x86_64_arm-linux-gnueabihf/bin/arm-linux-gnueabihf-
+ CROSS_COMPILE_ARM64=../prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/bin/aarch64-linux-gnu-
+ RKCHIP=
+ RKCHIP_LABEL=
+ RKCHIP_LOADER=
+ RKCHIP_TRUST=
+ INI_TRUST=
+ INI_LOADER=
+ RKBIN=
+ TOOLCHAIN=
+ TOOLCHAIN_NM=
+ TOOLCHAIN_OBJDUMP=
+ TOOLCHAIN_ADDR2LINE=
+ PLAT_RSA=
+ PLAT_SHA=
+ PLAT_UBOOT_SIZE=
+ PLAT_TRUST_SIZE=
+ PLAT_TYPE=RKFW
++ pwd
+ SRCTREE=/root/sdk_linux/rk3588/u-boot
+ SCRIPT_FIT=/root/sdk_linux/rk3588/u-boot/scripts/fit.sh
+ SCRIPT_ATF=/root/sdk_linux/rk3588/u-boot/scripts/atf.sh
+ SCRIPT_TOS=/root/sdk_linux/rk3588/u-boot/scripts/tos.sh
+ SCRIPT_SPL=/root/sdk_linux/rk3588/u-boot/scripts/spl.sh
+ SCRIPT_UBOOT=/root/sdk_linux/rk3588/u-boot/scripts/uboot.sh
+ SCRIPT_LOADER=/root/sdk_linux/rk3588/u-boot/scripts/loader.sh
+ SCRIPT_DECOMP=/root/sdk_linux/rk3588/u-boot/scripts/decomp.sh
+ CC_FILE=.cc
+ REP_DIR=./rep
+ process_args CROSS_COMPILE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ '[' 1 -gt 0 ']'
+ case $1 in
+ ARG_COMPILE=y
+ CROSS_COMPILE_ARM32=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ CROSS_COMPILE_ARM64=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ '[' CROSS_COMPILE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu- == CROSS_COMPILE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu- ']'
+ shift 1
+ CMD_ARGS=
+ '[' 0 -gt 0 ']'
+ '[' '!' -f .config ']'
+ prepare
+ '[' -d ../rkbin/tools ']'
+++ dirname ../rkbin/tools
++ cd ../rkbin
++ pwd
+ absolute_path=/root/sdk_linux/rk3588/rkbin
+ RKBIN=/root/sdk_linux/rk3588/rkbin
+ grep -Eq '^CONFIG_ARM64=y|^CONFIG_ARM64_BOOT_AARCH32=y' .config
+ ARM64_TRUSTZONE=y
+ grep -q '^CONFIG_ROCKCHIP_FIT_IMAGE_PACK=y' .config
+ PLAT_TYPE=FIT
+ select_toolchain
+ '[' y '!=' y ']'
+ grep -q '^CONFIG_ARM64=y' .config
+ TOOLCHAIN=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ TOOLCHAIN_NM=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-nm
+ TOOLCHAIN_OBJDUMP=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-objdump
+ TOOLCHAIN_ADDR2LINE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-addr2line
++ which /root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-gcc
+ '[' '!' /root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-gcc ']'
+ '[' y == y ']'
+ echo /root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ select_chip_info
+ CHIP_PATTERN='^CONFIG_ROCKCHIP_[R,P][X,V,K][0-9ESX]{1,5}'
++ egrep -o '^CONFIG_ROCKCHIP_[R,P][X,V,K][0-9ESX]{1,5}' .config
+ RKCHIP=CONFIG_ROCKCHIP_RK3588
+ RKCHIP=RK3588
+ RKCHIP_LOADER=RK3588
+ RKCHIP_TRUST=RK3588
++ filt_val CONFIG_CHIP_NAME .config
++ sed -n /CONFIG_CHIP_NAME=/s/CONFIG_CHIP_NAME=//p .config
++ tr -d '\r'
++ tr -d '"'
+ RKCHIP_LABEL=
+ '[' -z '' ']'
+ RKCHIP_LABEL=RK3588
+ fixup_platform_configure
++ filt_val CONFIG_UBOOT_SIZE_KB .config
++ sed -n /CONFIG_UBOOT_SIZE_KB=/s/CONFIG_UBOOT_SIZE_KB=//p .config
++ tr -d '\r'
++ tr -d '"'
+ U_KB=
++ filt_val CONFIG_UBOOT_NUM .config
++ sed -n /CONFIG_UBOOT_NUM=/s/CONFIG_UBOOT_NUM=//p .config
++ tr -d '\r'
++ tr -d '"'
+ U_NUM=
++ filt_val CONFIG_TRUST_SIZE_KB .config
++ sed -n /CONFIG_TRUST_SIZE_KB=/s/CONFIG_TRUST_SIZE_KB=//p .config
++ tr -d '\r'
++ tr -d '"'
+ T_KB=
++ filt_val CONFIG_TRUST_NUM .config
++ sed -n /CONFIG_TRUST_NUM=/s/CONFIG_TRUST_NUM=//p .config
++ tr -d '"'
++ tr -d '\r'
+ T_NUM=
++ filt_val CONFIG_TRUST_SHA_MODE .config
++ sed -n /CONFIG_TRUST_SHA_MODE=/s/CONFIG_TRUST_SHA_MODE=//p .config
++ tr -d '\r'
++ tr -d '"'
+ SHA=
++ filt_val CONFIG_TRUST_RSA_MODE .config
++ sed -n /CONFIG_TRUST_RSA_MODE=/s/CONFIG_TRUST_RSA_MODE=//p .config
++ tr -d '\r'
++ tr -d '"'
+ RSA=
+ PLAT_UBOOT_SIZE='--size  '
+ PLAT_TRUST_SIZE='--size  '
+ PLAT_SHA='--sha '
+ PLAT_RSA='--rsa '
+ '[' '!' -z '' ']'
+ '[' '!' -z '' ']'
+ select_ini_file
+ INI_LOADER=/root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
+ '[' y == y ']'
+ INI_TRUST=/root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ filt_val CONFIG_LOADER_INI .config
++ sed -n /CONFIG_LOADER_INI=/s/CONFIG_LOADER_INI=//p .config
++ tr -d '"'
++ tr -d '\r'
+ NAME=RK3588MINIALL.ini
+ '[' '!' -z RK3588MINIALL.ini ']'
+ INI_LOADER=/root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
++ filt_val CONFIG_TRUST_INI .config
++ sed -n /CONFIG_TRUST_INI=/s/CONFIG_TRUST_INI=//p .config
++ tr -d '\r'
++ tr -d '"'
+ NAME=RK3588TRUST.ini
+ '[' '!' -z RK3588TRUST.ini ']'
+ INI_TRUST=/root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
+ '[' '!' -z '' ']'
+ '[' '!' -z '' ']'
+ handle_args_late
+ ARG_LIST_FIT=' --ini-trust /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini --ini-loader /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini'
+ sub_commands
+ [[ '' != --* ]]
+ CMD=
+ ARG=
+ '[' '' == tpl -o '' == spl ']'
+ ELF=u-boot
+ MAP=u-boot.map
+ SYM=u-boot.sym
+ case ${CMD} in
+ unwind_addr_or_continue
+ FUNCADDR=
+ RELOCOFF=
+ FUNCADDR=
++ echo
++ sed 's/[0-9,a-f,A-F,x,X,-]//g'
+ '[' -z ']'
+ '[' ']'
+ clean_files
+ rm spl/u-boot-spl.dtb tpl/u-boot-tpl.dtb u-boot.dtb -f
+ rm spl/u-boot-spl tpl/u-boot-tpl u-boot -f
+ make PYTHON=python2 CROSS_COMPILE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu- all --jobs=12
scripts/kconfig/conf  --silentoldconfig Kconfig
  CHK     include/config.h
  UPD     include/config.h
  CFG     u-boot.cfg
  GEN     include/autoconf.mk.dep
  CFG     tpl/u-boot.cfg
  CFG     spl/u-boot.cfg
  GEN     tpl/include/autoconf.mk
  GEN     include/autoconf.mk
  GEN     spl/include/autoconf.mk
  CHK     include/config/uboot.release
  CHK     include/generated/timestamp_autogenerated.h
  UPD     include/generated/timestamp_autogenerated.h
  HOSTCC  scripts/dtc/dtc.o
  HOSTCC  scripts/dtc/flattree.o
  HOSTCC  scripts/dtc/treesource.o
  HOSTCC  scripts/dtc/checks.o
  HOSTCC  scripts/dtc/data.o
  HOSTCC  scripts/dtc/livetree.o
  HOSTCC  scripts/dtc/srcpos.o
  SHIPPED scripts/dtc/dtc-lexer.lex.c
  HOSTCC  scripts/dtc/fstree.o
  HOSTCC  scripts/dtc/util.o
  SHIPPED scripts/dtc/dtc-parser.tab.h
  SHIPPED scripts/dtc/dtc-parser.tab.c
  HOSTCC  scripts/dtc/dtc-lexer.lex.o
  HOSTCC  scripts/dtc/dtc-parser.tab.o
  CHK     include/config.h
  CFG     u-boot.cfg
  HOSTLD  scripts/dtc/dtc
  UPD     include/config/uboot.release
  CHK     include/generated/version_autogenerated.h
  UPD     include/generated/version_autogenerated.h
  CC      lib/asm-offsets.s
  CC      arch/arm/lib/asm-offsets.s
  CHK     include/generated/generic-asm-offsets.h
  CHK     include/generated/asm-offsets.h
  UPD     include/generated/generic-asm-offsets.h
  UPD     include/generated/asm-offsets.h
  LDS     u-boot.lds
  HOSTCC  tools/gen_eth_addr
  HOSTCC  tools/gen_ethaddr_crc.o
  WRAP    tools/lib/crc8.c
  HOSTCC  tools/mkenvimage.o
  HOSTCC  tools/os_support.o
  HOSTCC  tools/atmelimage.o
  WRAP    tools/common/bootm.c
  HOSTCC  tools/default_image.o
  WRAP    tools/lib/fdtdec_common.c
  HOSTCC  tools/aisimage.o
  WRAP    tools/lib/crc32.c
  HOSTCC  tools/image-host.o
  HOSTCC  tools/fit_image.o
  WRAP    tools/common/image-fit.c
  WRAP    tools/lib/fdtdec.c
  WRAP    tools/common/image.c
  HOSTCC  tools/fit_common.o
  HOSTCC  tools/imagetool.o
  HOSTCC  tools/imximage.o
  HOSTCC  tools/kwbimage.o
  WRAP    tools/lib/md5.c
  HOSTCC  tools/lpc32xximage.o
  HOSTCC  tools/mxsimage.o
  HOSTCC  tools/omapimage.o
  HOSTCC  tools/pblimage.o
  HOSTCC  tools/pbl_crc32.o
  HOSTCC  tools/vybridimage.o
  WRAP    tools/lib/rc4.c
  HOSTCC  tools/rkcommon.o
  HOSTCC  tools/rkimage.o
  HOSTCC  tools/rknand.o
  HOSTCC  tools/rksd.o
  HOSTCC  tools/rkspi.o
  HOSTCC  tools/socfpgaimage.o
  WRAP    tools/lib/sha1.c
  WRAP    tools/lib/sha256.c
  WRAP    tools/common/hash.c
  HOSTCC  tools/ublimage.o
  HOSTCC  tools/zynqmpimage.o
  HOSTCC  tools/zynqimage.o
  HOSTCC  tools/libfdt/fdt_wip.o
  HOSTCC  tools/libfdt/fdt.o
  HOSTCC  tools/libfdt/fdt_sw.o
  HOSTCC  tools/libfdt/fdt_rw.o
  HOSTCC  tools/libfdt/fdt_strerror.o
  HOSTCC  tools/libfdt/fdt_empty_tree.o
  HOSTCC  tools/libfdt/fdt_addresses.o
  HOSTCC  tools/libfdt/fdt_overlay.o
  WRAP    tools/lib/libfdt/fdt_ro.c
  WRAP    tools/lib/libfdt/fdt_region.c
  HOSTCC  tools/gpimage-common.o
  HOSTCC  tools/dumpimage.o
  HOSTCC  tools/gpimage.o
  HOSTCC  tools/mkimage.o
  HOSTCC  tools/rockchip/boot_merger.o
  HOSTCC  tools/rockchip/trust_merger.o
  HOSTCC  tools/rockchip/sha2.o
  HOSTCC  tools/rockchip/loaderimage.o
  HOSTCC  tools/rockchip/sha.o
  HOSTCC  tools/rockchip/crc32_rk.o
  HOSTCC  tools/rockchip/resource_tool.o
  HOSTCC  tools/rockchip/bmp2gray16.o
  HOSTCC  tools/proftool
  HOSTCC  tools/relocate-rela
  HOSTCC  tools/fdtgrep.o
  HOSTCC  tools/lib/crc8.o
  HOSTCC  tools/lib/crc32.o
  HOSTCC  tools/common/bootm.o
  HOSTCC  tools/lib/fdtdec_common.o
  HOSTCC  tools/lib/fdtdec.o
  HOSTCC  tools/common/image-fit.o
  HOSTCC  tools/common/image.o
  HOSTCC  tools/lib/md5.o
  HOSTCC  tools/lib/rc4.o
  HOSTCC  tools/lib/sha1.o
  HOSTCC  tools/lib/sha256.o
  HOSTCC  tools/common/hash.o
  HOSTCC  tools/lib/libfdt/fdt_ro.o
  HOSTCC  tools/lib/libfdt/fdt_region.o
  HOSTLD  tools/bmp2gray16
  HOSTLD  tools/gen_ethaddr_crc
  HOSTLD  tools/mkenvimage
  HOSTLD  tools/fdtgrep
  HOSTLD  tools/boot_merger
  HOSTLD  tools/trust_merger
  HOSTLD  tools/loaderimage
  HOSTLD  tools/dumpimage
  HOSTLD  tools/mkimage
  HOSTLD  tools/resource_tool
  LD      arch/arm/cpu/built-in.o
  CC      board/rockchip/evb_rk3588/evb_rk3588.o
  CC      arch/arm/cpu/armv8/cache_v8.o
  AS      arch/arm/cpu/armv8/exceptions.o
  AS      arch/arm/cpu/armv8/tlb.o
  AS      arch/arm/cpu/armv8/cache.o
  CC      arch/arm/cpu/armv8/generic_timer.o
  CC      arch/arm/cpu/armv8/cpu.o
  CC      disk/part.o
  AS      arch/arm/cpu/armv8/transition.o
  CC      disk/part_dos.o
  AS      arch/arm/lib/crt0_64.o
  CC      arch/arm/cpu/armv8/fwcall.o
  CC      arch/arm/mach-rockchip/fit_misc.o
  CC      arch/arm/cpu/armv8/cpu-dt.o
  AS      arch/arm/lib/setjmp_aarch64.o
  LD      board/rockchip/evb_rk3588/built-in.o
  AS      arch/arm/cpu/armv8/smccc-call.o
  CC      disk/part_efi.o
  AS      arch/arm/lib/relocate_64.o
  CC      arch/arm/lib/bootm-fdt.o
  CC      arch/arm/cpu/armv8/../armv7/suspend.o
  CC      disk/part_rkram.o
  CC      arch/arm/lib/bootm.o
  CC      arch/arm/mach-rockchip/chip_info.o
  AS      arch/arm/cpu/armv8/sleep.o
  AS      arch/arm/cpu/armv8/start.o
  CC      arch/arm/lib/zimage.o
  CC      arch/arm/lib/sections.o
  AS      arch/arm/mach-rockchip/lowlevel_init.o
  CC      cmd/boot.o
  LD      arch/arm/cpu/armv8/built-in.o
  CC      arch/arm/mach-rockchip/boot_mode.o
  CC      arch/arm/mach-rockchip/boot_rkimg.o
  CC      arch/arm/lib/stack.o
  LD      drivers/cpu/built-in.o
  LD      drivers/dma/built-in.o
  CC      arch/arm/mach-rockchip/board.o
  AS      arch/arm/lib/gic_64.o
  CC      common/init/board_init.o
  CC      drivers/gpio/gpio-max96752f.o
  CC      arch/arm/lib/interrupts_64.o
  CC      cmd/bootm.o
  CC      arch/arm/lib/stacktrace_64.o
  CC      arch/arm/mach-rockchip/iomem.o
  CC      drivers/i2c/i2c-uclass.o
  LD      common/init/built-in.o
  CC      common/main.o
  CC      arch/arm/lib/cache.o
  CC      arch/arm/lib/psci-dt.o
  CC      drivers/gpio/gpio-uclass.o
  CC      arch/arm/mach-rockchip/memblk.o
  CC      arch/arm/mach-rockchip/hotkey.o
  CC      drivers/adc/adc-uclass.o
  CC      drivers/mtd/mtdcore.o
  AR      arch/arm/lib/lib.a
  CC      common/exports.o
  CC      drivers/i2c/rk_i2c.o
  LD      arch/arm/lib/built-in.o
  CC      arch/arm/mach-rockchip/kernel_dtb.o
  CC      cmd/help.o
  LD      drivers/mtd/onenand/built-in.o
  LD      disk/built-in.o
  CC      arch/arm/mach-rockchip/fit.o
  CC      common/hash.o
  CC      drivers/mtd/mtd_uboot.o
  CC      cmd/version.o
  CC      cmd/blk_common.o
  CC      drivers/mtd/spi/sf-uclass.o
  CC      drivers/i2c/muxes/i2c-mux-uclass.o
  CC      drivers/adc/rockchip-saradc-v2.o
  CC      arch/arm/mach-rockchip/rockchip_smccc.o
  CC      drivers/mtd/mtd-uclass.o
  CC      drivers/mtd/spi/sf_probe.o
  CC      cmd/blk.o
  CC      common/cli_hush.o
  CC      drivers/net/eth-phy-uclass.o
  CC      drivers/gpio/pca953x_gpio.o
  LD      drivers/adc/built-in.o
  CC      drivers/mtd/spi/spi-nor-ids.o
  CC      drivers/i2c/muxes/max96745.o
  LD      drivers/ata/built-in.o
  CC      drivers/mtd/mtd_blk.o
  CC      arch/arm/mach-rockchip/vendor.o
  CC      drivers/block/blk-uclass.o
  CC      drivers/mtd/nand/core.o
  CC      cmd/source.o
  CC      drivers/mtd/spi/spi-nor-core.o
  CC      arch/arm/mach-rockchip/vendor_misc.o
  CC      drivers/net/gmac_rockchip.o
  CC      drivers/i2c/muxes/max96752f.o
  CC      drivers/gpio/rk_gpio.o
  CC      drivers/net/phy/phy.o
  CC      arch/arm/mach-rockchip/resource_img.o
  CC      cmd/bdinfo.o
  CC      drivers/i2c/muxes/max96755f.o
  CC      drivers/mtd/nand/bbt.o
  CC      cmd/boot_android.o
  LD      drivers/gpio/built-in.o
  LD      drivers/block/built-in.o
  CC      drivers/net/dwc_eth_qos.o
  LD      drivers/pci/built-in.o
  CC      drivers/clk/clk-uclass.o
  CC      arch/arm/mach-rockchip/resource_logo.o
  CC      arch/arm/mach-rockchip/resource_hwid.o
  CC      drivers/power/charge-display-uclass.o
  LD      drivers/i2c/muxes/built-in.o
  CC      cmd/android.o
  LD      drivers/i2c/built-in.o
  CC      drivers/mtd/nand/spi/gigadevice.o
  CC      common/autoboot.o
  LD      drivers/power/battery/built-in.o
  CC      drivers/clk/clk_fixed_rate.o
  CC      cmd/bootfit.o
  CC      drivers/mtd/spi/sf_mtd.o
  CC      drivers/power/charge_animation.o
  CC      arch/arm/mach-rockchip/param.o
  CC      arch/arm/mach-rockchip/sdram.o
  LD      drivers/net/built-in.o
  CC      common/board_f.o
  CC      cmd/bootz.o
  LD      drivers/net/phy/built-in.o
  CC      drivers/power/charge/bq25700_charger.o
  LD      drivers/mtd/spi/spi-nor.o
  CC      drivers/mtd/nand/spi/macronix.o
  LD      drivers/power/domain/built-in.o
  CC      drivers/clk/rockchip/clk_pll.o
  LD      drivers/clk/tegra/built-in.o
  CC      drivers/core/device.o
  LD      drivers/mtd/spi/built-in.o
  CC      drivers/clk/clk_scmi.o
  CC      cmd/booti.o
  LD      drivers/power/dvfs/built-in.o
  CC      arch/arm/mach-rockchip/rk_atags.o
  CC      drivers/mtd/nand/spi/micron.o
  CC      arch/arm/mach-rockchip/rk3588/syscon_rk3588.o
  CC      drivers/power/fuel_gauge/fuel_gauge_uclass.o
  CC      drivers/mtd/nand/spi/toshiba.o
  CC      drivers/power/charge/bq25890_charger.o
  CC      cmd/console.o
  CC      common/board_r.o
  CC      arch/arm/mach-rockchip/rk3588/rk3588.o
  CC      drivers/core/fdtaddr.o
  CC      drivers/power/rockchip_pm.o
  CC      drivers/mtd/nand/spi/winbond.o
  CC      drivers/clk/rockchip/clk_rk3588.o
  CC      cmd/charge.o
  CC      drivers/power/charge/sc8551_charger.o
  CC      drivers/mtd/nand/spi/dosilicon.o
  LD      drivers/power/built-in.o
  CC      drivers/power/fuel_gauge/fg_cw201x.o
  CC      drivers/core/lists.o
  CC      drivers/core/root.o
  LD      drivers/power/io-domain/built-in.o
  CC      cmd/crypto_sum.o
  CC      arch/arm/mach-rockchip/rk3588/clk_rk3588.o
  CC      drivers/crypto/crypto-uclass.o
  CC      drivers/power/charge/sgm41542_charger.o
  CC      drivers/mtd/nand/spi/esmt.o
  CC      drivers/mtd/nand/spi/xtx.o
  CC      drivers/core/uclass.o
  CC      cmd/dtimg.o
  CC      common/board_info.o
  CC      drivers/mtd/nand/spi/hyf.o
  LD      arch/arm/mach-rockchip/rk3588/built-in.o
  CC      drivers/crypto/fsl/sec.o
  CC      arch/arm/mach-rockchip/pstore.o
  CC      common/bootm.o
  CC      cmd/echo.o
  CC      drivers/power/fuel_gauge/fg_cw221x.o
  CC      drivers/mtd/nand/spi/fmsh.o
  CC      drivers/core/util.o
  LD      drivers/crypto/fsl/built-in.o
  CC      cmd/exit.o
  CC      common/bootm_os.o
  LD      arch/arm/mach-rockchip/built-in.o
  CC      drivers/crypto/rockchip/crypto_v2.o
  CC      drivers/mtd/nand/spi/foresee.o
  LD      drivers/power/charge/built-in.o
  CC      drivers/crypto/rsa_mod_exp/mod_exp_uclass.o
  CC      drivers/core/device-remove.o
  LD      drivers/power/mfd/built-in.o
  CC      drivers/power/pmic/pmic-uclass.o
  CC      cmd/ext4.o
  LD      drivers/power/fuel_gauge/built-in.o
  LD      drivers/dfu/built-in.o
  CC      drivers/mtd/nand/spi/biwin.o
  CC      common/fdt_support.o
  LD      drivers/clk/rockchip/built-in.o
  CC      drivers/mtd/nand/spi/etron.o
  LD      drivers/clk/built-in.o
  CC      drivers/crypto/rsa_mod_exp/mod_exp_sw.o
  CC      drivers/power/pmic/rk8xx_spi.o
  CC      common/miiphyutil.o
  CC      drivers/firmware/firmware-uclass.o
  CC      cmd/ext2.o
  CC      drivers/mtd/nand/spi/jsc.o
  CC      drivers/mtd/nand/spi/silicongo.o
  CC      drivers/crypto/rockchip/crypto_hash_cache.o
  CC      drivers/core/simple-bus.o
  LD      drivers/crypto/rsa_mod_exp/built-in.o
  CC      cmd/fat.o
  CC      drivers/power/regulator/regulator-uclass.o
  CC      drivers/input/key-uclass.o
  CC      drivers/firmware/psci.o
  CC      cmd/fdt.o
  LD      drivers/power/pmic/built-in.o
  CC      drivers/mtd/nand/spi/unim.o
  CC      drivers/crypto/rockchip/crypto_v2_pka.o
  CC      common/usb.o
  CC      drivers/core/dump.o
  CC      drivers/mtd/nand/spi/skyhigh.o
  CC      drivers/serial/serial-uclass.o
  CC      cmd/fs.o
  CC      drivers/firmware/scmi/scmi_agent-uclass.o
  CC      drivers/input/input.o
  CC      drivers/core/regmap.o
  CC      drivers/power/regulator/pwm_regulator.o
  CC      drivers/mtd/nand/spi/core.o
  CC      drivers/crypto/rockchip/crypto_v2_util.o
  CC      cmd/load.o
  CC      drivers/firmware/scmi/smt.o
  CC      drivers/core/syscon-uclass.o
  CC      cmd/download.o
  CC      cmd/mem.o
  CC      drivers/firmware/scmi/smccc_agent.o
  CC      drivers/power/regulator/fixed.o
  CC      drivers/core/of_access.o
  CC      drivers/serial/ns16550.o
  CC      cmd/mii.o
  LD      drivers/firmware/scmi/built-in.o
  CC      cmd/mdio.o
  LD      drivers/firmware/built-in.o
  CC      common/usb_hub.o
  CC      drivers/irq/irq-gic.o
  CC      drivers/power/regulator/gpio-regulator.o
  LD      drivers/mailbox/built-in.o
  CC      drivers/input/key_matrix.o
  CC      common/usb_storage.o
  LD      drivers/serial/built-in.o
  LD      drivers/memory/built-in.o
  CC      cmd/mmc.o
  CC      drivers/input/rk8xx_pwrkey.o
  CC      cmd/mtd_blk.o
  CC      drivers/misc/misc-uclass.o
  CC      drivers/spi/spi-uclass.o
  LD      drivers/crypto/rockchip/built-in.o
  CC      drivers/power/regulator/rk860x_regulator.o
  LD      drivers/crypto/built-in.o
  CC      common/iomux.o
  CC      drivers/irq/irq-gpio-v2.o
  CC      drivers/core/of_addr.o
  CC      cmd/net.o
  LD      drivers/usb/cdns3/built-in.o
  LD      drivers/mtd/nand/spi/spinand.o
  CC      drivers/input/adc_key.o
  LD      drivers/mtd/nand/spi/built-in.o
  CC      drivers/misc/misc_otp.o
  LD      drivers/mtd/nand/nandcore.o
  LD      drivers/mtd/nand/built-in.o
  CC      drivers/spi/spi-mem.o
  CC      drivers/misc/misc_decompress.o
  CC      drivers/irq/irq-generic.o
  LD      drivers/mtd/built-in.o
  CC      cmd/part.o
  CC      common/edid.o
  CC      drivers/core/read.o
  CC      drivers/usb/common/common.o
  LD      drivers/input/built-in.o
  CC      drivers/irq/irq-gpio-switch.o
  CC      drivers/power/regulator/rk806.o
  CC      cmd/pcmcia.o
  CC      drivers/core/of_extra.o
  CC      drivers/spi/rk_spi.o
  CC      common/splash.o
  CC      drivers/mmc/mmc.o
  LD      drivers/usb/common/built-in.o
  CC      drivers/misc/rockchip-otp.o
  CC      cmd/pxe.o
  CC      drivers/usb/dwc3/core.o
  CC      drivers/core/ofnode.o
  CC      drivers/irq/virq.o
  CC      common/menu.o
  CC      cmd/rockusb.o
  CC      drivers/core/read_extra.o
  CC      drivers/misc/rockchip_decompress.o
  LD      drivers/power/regulator/built-in.o
  CC      drivers/spi/rockchip_sfc.o
  CC      drivers/usb/dwc3/gadget.o
  LD      drivers/usb/emul/built-in.o
  CC      common/cli_readline.o
  CC      cmd/sf.o
  LD      drivers/misc/built-in.o
  LD      drivers/pcmcia/built-in.o
  LD      drivers/usb/eth/built-in.o
  LD      drivers/irq/built-in.o
  CC      cmd/spi.o
  LD      drivers/phy/marvell/built-in.o
  CC      drivers/usb/dwc3/ep0.o
  CC      drivers/phy/phy-uclass.o
  LD      drivers/core/built-in.o
  CC      drivers/usb/gadget/epautoconf.o
  CC      drivers/mmc/mmc-uclass.o
  CC      cmd/test.o
  CC      drivers/pinctrl/pinctrl-uclass.o
  CC      common/cli_simple.o
  CC      cmd/usb.o
  CC      drivers/power/power_delivery/power_delivery_uclass.o
  LD      drivers/spi/built-in.o
  CC      drivers/usb/gadget/config.o
  CC      drivers/usb/gadget/udc/udc-core.o
  CC      drivers/phy/phy-rockchip-inno-usb2.o
  CC      cmd/disk.o
  CC      drivers/pinctrl/pinctrl-generic.o
  CC      drivers/power/power_delivery/tcpm.o
  CC      drivers/mmc/mmc_write.o
  CC      drivers/usb/dwc3/dwc3-generic.o
  CC      common/bouncebuf.o
  CC      drivers/usb/gadget/usbstring.o
  CC      cmd/fastboot.o
  LD      drivers/pinctrl/nxp/built-in.o
  CC      drivers/phy/phy-rockchip-samsung-hdptx.o
  CC      drivers/usb/gadget/udc/udc-uclass.o
  LD      drivers/usb/dwc3/dwc3.o
  CC      drivers/power/power_delivery/fusb302.o
  CC      cmd/usb_mass_storage.o
  CC      cmd/gpt.o
  CC      drivers/pinctrl/rockchip/pinctrl-rockchip-core.o
  CC      drivers/mmc/dw_mmc.o
  LD      drivers/usb/gadget/udc/built-in.o
  CC      drivers/usb/gadget/g_dnl.o
  LD      drivers/usb/dwc3/built-in.o
  CC      common/console.o
  CC      drivers/usb/host/usb-uclass.o
  CC      drivers/phy/phy-rockchip-usbdp.o
  CC      cmd/optee.o
  CC      cmd/rkimgtest.o
  CC      drivers/mmc/rockchip_dw_mmc.o
  CC      drivers/pinctrl/rockchip/pinctrl-rk3588.o
  CC      drivers/mmc/rpmb.o
  CC      drivers/usb/host/ohci-hcd.o
  CC      cmd/atags.o
  LD      drivers/pinctrl/rockchip/built-in.o
  CC      drivers/pinctrl/pinctrl-rockchip.o
  CC      drivers/mmc/sdhci.o
  CC      common/dlmalloc.o
  CC      drivers/usb/host/ohci-generic.o
  CC      drivers/mmc/rockchip_sdhci.o
  LD      drivers/usb/musb-new/built-in.o
  LD      drivers/usb/musb/built-in.o
  CC      drivers/usb/gadget/f_mass_storage.o
  CC      drivers/usb/gadget/f_fastboot.o
  LD      drivers/usb/phy/built-in.o
  CC      drivers/power/power_delivery/tcpci.o
  CC      cmd/nvedit.o
  LD      drivers/phy/built-in.o
  LD      drivers/usb/ulpi/built-in.o
  CC      drivers/pinctrl/pinctrl-max96745.o
  CC      drivers/pwm/pwm-uclass.o
  CC      drivers/power/power_delivery/tcpci_husb311.o
  LD      drivers/mmc/built-in.o
  CC      env/common.o
  CC      drivers/ram/ram-uclass.o
  CC      drivers/pwm/rk_pwm.o
  CC      env/env.o
  LD      drivers/power/power_delivery/built-in.o
  CC      drivers/usb/host/ehci-hcd.o
  CC      drivers/reset/reset-uclass.o
  CC      drivers/ram/rockchip/sdram_rk3588.o
  CC      common/malloc_simple.o
  CC      fs/fs.o
  CC      drivers/usb/host/ehci-generic.o
  LD      drivers/pwm/built-in.o
  LD      drivers/ram/rockchip/built-in.o
  CC      common/image.o
  CC      drivers/ram/ramdisk-uclass.o
  CC      env/attr.o
  CC      drivers/rng/rng-uclass.o
  CC      drivers/pinctrl/pinctrl-max96752f.o
  LD      cmd/built-in.o
  CC      drivers/ram/ramdisk_ro.o
  CC      drivers/reset/reset-rockchip.o
  CC      drivers/usb/host/xhci.o
  CC      env/callback.o
  CC      drivers/rng/rockchip_rng.o
  CC      drivers/pinctrl/pinctrl-max96755f.o
  LD      drivers/reset/built-in.o
  CC      drivers/rtc/date.o
  LD      drivers/ram/built-in.o
  CC      fs/ext4/ext4fs.o
  LD      drivers/scsi/built-in.o
  CC      env/flags.o
  CC      common/image-android.o
  LD      drivers/rtc/built-in.o
  CC      drivers/rng/rockchip_rand.o
  LD      drivers/soc/built-in.o
  LD      drivers/pinctrl/built-in.o
  CC      fs/fat/fat_write.o
  CC      fs/ext4/ext4_common.o
  LD      drivers/sound/built-in.o
  LD      drivers/spmi/built-in.o
  LD      drivers/rng/built-in.o
  CC      env/nowhere.o
  CC      fs/ext4/dev.o
  LD      drivers/thermal/built-in.o
  LD      drivers/tpm/built-in.o
  CC      drivers/sysreset/sysreset-uclass.o
  CC      fs/fs_internal.o
  LD      drivers/watchdog/built-in.o
  LD      env/built-in.o
  CC      common/android_bootloader.o
  CC      drivers/sysreset/sysreset-syscon-reboot.o
  CC      drivers/sysreset/sysreset_psci.o
  CC      drivers/video/display-uclass.o
  CC      drivers/usb/host/xhci-mem.o
  CC      common/image-fdt.o
  CC      net/checksum.o
  CC      drivers/sysreset/sysreset_rockchip.o
  LD      drivers/usb/gadget/built-in.o
  CC      lib/avb/libavb/avb_chain_partition_descriptor.o
  CC      drivers/video/backlight-uclass.o
  LD      fs/ext4/built-in.o
  LD      test/built-in.o
  CC      drivers/video/panel-uclass.o
  CC      net/arp.o
  LD      drivers/sysreset/built-in.o
  CC      lib/avb/libavb/avb_cmdline.o
  CC      drivers/usb/host/xhci-ring.o
  CC      lib/avb/libavb_atx/avb_atx_validate.o
  CC      drivers/video/simple_panel.o
  CC      test/dm/cmd_dm.o
  CC      common/image-fit.o
  CC      common/memsize.o
  CC      common/stdio.o
  CC      drivers/video/video-uclass.o
  CC      net/bootp.o
  LD      test/dm/built-in.o
  CC      drivers/usb/host/xhci-dwc3.o
  CC      common/image-android-dt.o
  CC      drivers/video/vidconsole-uclass.o
  CC      common/image-sparse.o
  LD      lib/avb/libavb_atx/built-in.o
  CC      lib/avb/libavb/avb_crc32.o
  CC      common/fb_mmc.o
  CC      drivers/video/video_bmp.o
  CC      lib/avb/libavb/avb_descriptor.o
  CC      lib/avb/libavb/avb_crypto.o
  CC      lib/avb/libavb_user/avb_ops_user.o
  LD      drivers/usb/host/built-in.o
  CC      net/eth-uclass.o
  CC      drivers/video/pwm_backlight.o
  CC      lib/avb/rk_avb_user/rk_avb_ops_user.o
  LD      fs/fat/built-in.o
  CC      drivers/video/console_normal.o
  CC      lib/avb/libavb_user/avb_user_verification.o
  LD      fs/built-in.o
  CC      lib/avb/libavb/avb_footer.o
  CC      net/eth_common.o
  CC      lib/avb/rk_avb_user/rk_ab_ops_user.o
  CC      lib/avb/libavb_user/avb_user_verity.o
  CC      lib/avb/libavb/avb_hash_descriptor.o
  CC      net/net.o
  CC      common/fb_common.o
  LD      lib/avb/libavb_user/built-in.o
  CC      drivers/video/bridge/video-bridge-uclass.o
  CC      lib/libfdt/fdt.o
  CC      lib/avb/libavb/avb_hashtree_descriptor.o
  CC      lib/avb/libavb/avb_kernel_cmdline_descriptor.o
  CC      common/cli.o
  CC      net/nfs.o
  LD      drivers/video/sunxi/built-in.o
  CC      lib/avb/libavb/avb_property_descriptor.o
  CC      net/ping.o
  LD      lib/avb/rk_avb_user/built-in.o
  CC      drivers/video/drm/drm_modes.o
  CC      lib/avb/libavb/avb_rsa.o
  CC      lib/libfdt/fdt_wip.o
  CC      lib/libxbc/libxbc.o
  CC      lib/avb/libavb/avb_sha256.o
  CC      common/command.o
  CC      net/tftp.o
  LD      drivers/video/bridge/built-in.o
  CC      common/s_record.o
  CC      lib/avb/libavb/avb_sha512.o
  CC      lib/libfdt/fdt_strerror.o
  CC      lib/avb/libavb/avb_sysdeps_posix.o
  LD      lib/libxbc/built-in.o
  CC      drivers/video/drm/rockchip_display.o
  CC      lib/libfdt/fdt_sw.o
  CC      lib/avb/libavb/avb_slot_verify.o
  CC      lib/lzma/LzmaDec.o
  CC      common/write_keybox.o
  CC      lib/avb/libavb/avb_util.o
  CC      common/keymaster.o
  CC      lib/lzma/LzmaTools.o
  CC      lib/avb/libavb/avb_vbmeta_image.o
  CC      common/attestation_key.o
  CC      lib/optee_clientApi/OpteeClientMem.o
  LD      net/built-in.o
  CC      lib/libfdt/fdt_rw.o
  CC      lib/libfdt/fdt_empty_tree.o
  CC      lib/rsa/rsa-mod-exp.o
  CC      drivers/video/drm/rockchip_crtc.o
  CC      lib/optee_clientApi/OpteeClientApiLib.o
  CC      lib/zlib/zlib.o
  CC      lib/avb/libavb/avb_version.o
  CC      lib/of_live.o
  CC      lib/libfdt/fdt_addresses.o
  LD      common/built-in.o
  CC      drivers/video/drm/rockchip_phy.o
  CC      lib/optee_clientApi/OpteeClientInterface.o
  CC      lib/libfdt/fdt_overlay.o
  CC      lib/charset.o
  CC      lib/libfdt/fdt_ro.o
  CC      lib/crc7.o
  CC      lib/libfdt/fdt_region.o
  CC      drivers/video/drm/rockchip_bridge.o
  LD      lib/rsa/built-in.o
  CC      lib/crc8.o
  CC      lib/crc16.o
  CC      lib/optee_clientApi/OpteeClientSMC.o
  CC      lib/errno_str.o
  CC      lib/optee_clientApi/OpteeClientRPC.o
  LD      lib/avb/libavb/built-in.o
  CC      lib/fdtdec_common.o
  CC      drivers/video/drm/rockchip_vop_reg.o
  CC      drivers/video/drm/rockchip_vop.o
  AS      lib/optee_clientApi/tee_smc-arm64.o
  CC      lib/initcall.o
  CC      lib/lmb.o
  CC      lib/optee_clientApi/OpteeClientRkFs_common.o
  CC      lib/optee_clientApi/OpteeClientRkNewFs_v1.o
  CC      drivers/video/drm/rockchip_vop2.o
  CC      lib/sysmem.o
  LD      lib/lzma/built-in.o
  CC      lib/optee_clientApi/OpteeClientRkNewFs_v2.o
  CC      lib/bidram.o
  CC      lib/ldiv.o
  LD      lib/libfdt/built-in.o
  CC      lib/lz4_wrapper.o
  CC      lib/qsort.o
  CC      lib/net_utils.o
  CC      drivers/video/drm/bmp_helper.o
  CC      lib/rc4.o
  CC      lib/list_sort.o
  CC      lib/sha256.o
  LD      lib/zlib/built-in.o
  CC      drivers/video/drm/rockchip_connector.o
  CC      lib/gunzip.o
  CC      drivers/video/drm/drm_mipi_dsi.o
  CC      lib/rational.o
  CC      drivers/video/drm/drm_dp_helper.o
  CC      lib/fdtdec.o
  CC      lib/hashtable.o
  CC      lib/errno.o
  CC      lib/display_options.o
  CC      drivers/video/drm/drm_dsc.o
  CC      lib/crc32.o
  CC      lib/ctype.o
  CC      drivers/video/drm/max96745.o
  CC      lib/div64.o
  CC      drivers/video/drm/max96752f.o
  CC      lib/hang.o
  LD      lib/optee_clientApi/built-in.o
  CC      lib/linux_compat.o
  CC      drivers/video/drm/dw_mipi_dsi2.o
  CC      drivers/video/drm/max96755f.o
  CC      drivers/video/drm/panel-maxim-deserializer.o
  CC      lib/linux_string.o
  CC      lib/slre.o
  CC      lib/membuff.o
  CC      lib/string.o
  CC      drivers/video/drm/rockchip_dw_hdmi_qp.o
  CC      lib/stdlib.o
  CC      lib/tables_csum.o
  CC      lib/time.o
  CC      lib/hexdump.o
  CC      drivers/video/drm/dw_hdmi_qp.o
  CC      lib/uuid.o
  CC      lib/vsprintf.o
  CC      lib/panic.o
  CC      drivers/video/drm/phy-rockchip-samsung-hdptx-hdmi.o
  CC      lib/strto.o
  CC      lib/strmhz.o
  CC      drivers/video/drm/analogix_dp.o
  CC      drivers/video/drm/dw-dp.o
  CC      drivers/video/drm/analogix_dp_reg.o
  CC      drivers/video/drm/rockchip_panel.o
  CC      drivers/video/drm/rohm-bu18tl82.o
  CC      drivers/video/drm/rohm-bu18rl82.o
  CC      drivers/video/drm/samsung_mipi_dcphy.o
  LD      lib/built-in.o
  LD      drivers/video/drm/built-in.o
  LD      drivers/video/built-in.o
  LD      drivers/built-in.o
  CC      examples/standalone/stubs.o
  CC      examples/standalone/hello_world.o
  LD      examples/standalone/libstubs.o
  LD      examples/standalone/hello_world
  OBJCOPY examples/standalone/hello_world.srec
  OBJCOPY examples/standalone/hello_world.bin
  LD      u-boot
  OBJCOPY u-boot.srec
  OBJCOPY u-boot-nodtb.bin
  SYM     u-boot.sym
start=$(/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-nm u-boot | grep __rel_dyn_start | cut -f 1 -d ' '); end=$(/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-nm u-boot | grep __rel_dyn_end | cut -f 1 -d ' '); tools/relocate-rela u-boot-nodtb.bin 0x00200000 $start $end
  DTC     arch/arm/dts/rk3126-evb.dtb
  DTC     arch/arm/dts/rk3128-evb.dtb
  DTC     arch/arm/dts/rk3036-sdk.dtb
  DTC     arch/arm/dts/rk3288-fennec.dtb
  DTC     arch/arm/dts/rk3066a-mk808.dtb
  DTC     arch/arm/dts/rk3288-evb.dtb
  DTC     arch/arm/dts/rk3288-firefly.dtb
  DTC     arch/arm/dts/rk3188-radxarock.dtb
  DTC     arch/arm/dts/rk3288-miqi.dtb
  DTC     arch/arm/dts/rk3288-phycore-rdk.dtb
  DTC     arch/arm/dts/rk3288-popmetal.dtb
arch/arm/dts/rk3126-evb.dtb: Warning (reg_format): "reg" property in /syscon@20008000/usb2-phy@17c has invalid length (8 bytes) (#address-cells == 2, #size-cells == 1)
arch/arm/dts/rk3126-evb.dtb: Warning (avoid_default_addr_size): Relying on default #address-cells value for /syscon@20008000/usb2-phy@17c
arch/arm/dts/rk3126-evb.dtb: Warning (avoid_default_addr_size): Relying on default #size-cells value for /syscon@20008000/usb2-phy@17c
  DTC     arch/arm/dts/rk3288-rock2-square.dtb
arch/arm/dts/rk3128-evb.dtb: Warning (reg_format): "reg" property in /syscon@20008000/usb2-phy@17c has invalid length (8 bytes) (#address-cells == 2, #size-cells == 1)
arch/arm/dts/rk3128-evb.dtb: Warning (avoid_default_addr_size): Relying on default #address-cells value for /syscon@20008000/usb2-phy@17c
arch/arm/dts/rk3128-evb.dtb: Warning (avoid_default_addr_size): Relying on default #size-cells value for /syscon@20008000/usb2-phy@17c
  DTC     arch/arm/dts/rk3288-tinker.dtb
  DTC     arch/arm/dts/rk3288-veyron-mickey.dtb
  DTC     arch/arm/dts/rk3288-veyron-jerry.dtb
  DTC     arch/arm/dts/rk3288-vyasa.dtb
  DTC     arch/arm/dts/rk3288-veyron-minnie.dtb
  DTC     arch/arm/dts/rk3308-evb.dtb
  DTC     arch/arm/dts/rk3368-geekbox.dtb
  DTC     arch/arm/dts/rk3368-lion.dtb
  DTC     arch/arm/dts/rk3368-sheep.dtb
  DTC     arch/arm/dts/rk3328-evb.dtb
  DTC     arch/arm/dts/rk3368-px5-evb.dtb
  DTC     arch/arm/dts/rk3399-evb.dtb
  DTC     arch/arm/dts/rk3399-puma-ddr1333.dtb
  DTC     arch/arm/dts/rk3399-firefly.dtb
  DTC     arch/arm/dts/rk3399-puma-ddr1600.dtb
  DTC     arch/arm/dts/rv1108-evb.dtb
  DTC     arch/arm/dts/rk3399-puma-ddr1866.dtb
  DTC     arch/arm/dts/rk3588-evb.dtb
  FDTGREP dts/dt.dtb
  FDTGREP dts/dt-spl.dtb
  FDTGREP dts/dt-tpl.dtb
  CAT     u-boot-dtb.bin
  MKIMAGE u-boot.img
  COPY    u-boot.dtb
  MKIMAGE u-boot-dtb.img
  LD      spl/arch/arm/cpu/built-in.o
  CC      spl/common/init/board_init.o
  CC      spl/board/rockchip/evb_rk3588/evb_rk3588.o
  CC      spl/cmd/nvedit.o
  CC      spl/common/spl/spl.o
  CC      spl/arch/arm/cpu/armv8/cpu.o
  CC      spl/arch/arm/mach-rockchip/fit_misc.o
  CC      spl/env/common.o
  CC      spl/common/common_fit.o
  COPY    u-boot.bin
  AS      spl/arch/arm/lib/crt0_64.o
  LD      spl/common/init/built-in.o
  ALIGN   u-boot.bin
  LD      spl/board/rockchip/evb_rk3588/built-in.o
  CC      spl/arch/arm/cpu/armv8/generic_timer.o
  CC      spl/arch/arm/mach-rockchip/spl_boot_mode.o
  CC      spl/env/env.o
  AS      spl/arch/arm/lib/setjmp_aarch64.o
  CC      spl/disk/part.o
  CC      spl/arch/arm/mach-rockchip/param.o
  CC      tpl/arch/arm/mach-rockchip/param.o
  CC      spl/common/fdt_support.o
  CC      spl/arch/arm/mach-rockchip/sdram.o
  AS      spl/arch/arm/lib/relocate_64.o
  LD      spl/cmd/built-in.o
  CC      spl/common/spl/spl_fit.o
  CC      spl/arch/arm/cpu/armv8/cache_v8.o
  CC      tpl/arch/arm/cpu/armv8/cpu.o
  CC      spl/arch/arm/lib/bootm-fdt.o
  LD      spl/env/built-in.o
  CC      spl/arch/arm/mach-rockchip/rk3588/syscon_rk3588.o
  CC      spl/lib/avb/rk_avb_user/rk_avb_ops_user.o
  CC      tpl/arch/arm/mach-rockchip/sdram.o
  LD      spl/dts/built-in.o
  CC      spl/arch/arm/mach-rockchip/bootrom.o
  LD      tpl/arch/arm/cpu/built-in.o
  CC      tpl/arch/arm/cpu/armv8/generic_timer.o
  CC      spl/disk/part_efi.o
  CC      spl/arch/arm/lib/bootm.o
  CC      spl/arch/arm/mach-rockchip/rk3588/rk3588.o
  CC      spl/arch/arm/mach-rockchip/spl.o
  CC      tpl/arch/arm/cpu/armv8/cache_v8.o
  CC      tpl/arch/arm/mach-rockchip/rk3588/rk3588.o
  AS      tpl/arch/arm/lib/crt0_64.o
  AS      tpl/arch/arm/lib/setjmp_aarch64.o
  CC      spl/arch/arm/lib/zimage.o
  CC      spl/lib/avb/rk_avb_user/rk_ab_ops_user.o
  AS      spl/arch/arm/cpu/armv8/exceptions.o
  CC      spl/arch/arm/mach-rockchip/rk3588/clk_rk3588.o
  CC      spl/common/spl/spl_mmc.o
  CC      tpl/arch/arm/lib/spl.o
  CC      spl/drivers/block/blk-uclass.o
  AS      spl/arch/arm/cpu/armv8/cache.o
  CC      spl/arch/arm/lib/sections.o
  CC      tpl/arch/arm/lib/zimage.o
  CC      spl/lib/libfdt/fdt.o
  LD      spl/arch/arm/mach-rockchip/rk3588/built-in.o
  AS      spl/arch/arm/cpu/armv8/tlb.o
  CC      spl/arch/arm/lib/stack.o
  CC      spl/arch/arm/mach-rockchip/spl-boot-order.o
  AS      spl/arch/arm/cpu/armv8/transition.o
  AS      tpl/arch/arm/cpu/armv8/exceptions.o
  CC      tpl/arch/arm/mach-rockchip/rk3588/clk_rk3588.o
  CC      tpl/arch/arm/lib/bootm-fdt.o
  CC      spl/lib/libfdt/fdt_wip.o
  AS      tpl/arch/arm/cpu/armv8/cache.o
  CC      spl/common/bouncebuf.o
  CC      spl/arch/arm/cpu/armv8/fwcall.o
  LD      spl/lib/avb/rk_avb_user/built-in.o
  CC      spl/arch/arm/mach-rockchip/rk_atags.o
  AS      spl/arch/arm/lib/gic_64.o
  AS      tpl/arch/arm/cpu/armv8/tlb.o
  LD      tpl/arch/arm/mach-rockchip/rk3588/built-in.o
  CC      spl/lib/libxbc/libxbc.o
  CC      tpl/arch/arm/lib/sections.o
  CC      spl/lib/libfdt/fdt_strerror.o
  CC      tpl/arch/arm/mach-rockchip/bootrom.o
  CC      spl/common/spl/spl_mtd_blk.o
  CC      spl/arch/arm/cpu/armv8/cpu-dt.o
  CC      spl/arch/arm/lib/interrupts_64.o
  AS      tpl/arch/arm/cpu/armv8/transition.o
  CC      tpl/arch/arm/lib/stack.o
  CC      spl/lib/libfdt/fdt_sw.o
  LD      spl/drivers/block/built-in.o
  CC      spl/common/console.o
  CC      tpl/arch/arm/cpu/armv8/fwcall.o
  LD      spl/lib/libxbc/built-in.o
  LD      spl/disk/built-in.o
  AS      spl/arch/arm/cpu/armv8/smccc-call.o
  AS      tpl/arch/arm/lib/gic_64.o
  CC      spl/lib/rsa/rsa-mod-exp.o
  CC      tpl/arch/arm/mach-rockchip/tpl.o
  CC      spl/fs/fs_internal.o
  CC      spl/drivers/clk/clk-uclass.o
  CC      tpl/arch/arm/cpu/armv8/cpu-dt.o
  CC      spl/arch/arm/mach-rockchip/pstore.o
  CC      spl/common/spl/spl_atf.o
  CC      tpl/arch/arm/lib/interrupts_64.o
  AS      spl/arch/arm/cpu/armv8/start.o
  CC      spl/arch/arm/lib/stacktrace_64.o
  LD      spl/fs/built-in.o
  LDS     spl/u-boot-spl.lds
  LD      spl/arch/arm/cpu/armv8/built-in.o
  CC      spl/lib/libfdt/fdt_rw.o
  AS      tpl/arch/arm/cpu/armv8/smccc-call.o
  COPY    spl/u-boot-spl.dtb
  CC      tpl/arch/arm/mach-rockchip/rk_atags.o
  CC      spl/lib/fdtdec_common.o
  CC      tpl/arch/arm/lib/stacktrace_64.o
  CC      tpl/board/rockchip/evb_rk3588/evb_rk3588.o
  LD      spl/arch/arm/mach-rockchip/built-in.o
  CC      spl/arch/arm/lib/cache.o
  CC      spl/drivers/clk/clk_fixed_rate.o
  LD      spl/lib/rsa/built-in.o
  CC      spl/common/dlmalloc.o
  CC      spl/lib/fdtdec.o
  AS      tpl/arch/arm/cpu/armv8/start.o
  CC      tpl/arch/arm/lib/cache.o
  LD      spl/common/spl/built-in.o
  LD      tpl/arch/arm/cpu/armv8/built-in.o
  CC      spl/arch/arm/lib/psci-dt.o
  CC      spl/lib/hashtable.o
  LD      tpl/board/rockchip/evb_rk3588/built-in.o
  CC      tpl/arch/arm/lib/psci-dt.o
  CC      spl/drivers/clk/rockchip/clk_pll.o
  CC      tpl/common/init/board_init.o
  CC      tpl/disk/part.o
  CC      spl/lib/libfdt/fdt_empty_tree.o
  CC      tpl/arch/arm/mach-rockchip/pstore.o
  CC      spl/lib/libfdt/fdt_addresses.o
  AR      spl/arch/arm/lib/lib.a
  AR      tpl/arch/arm/lib/lib.a
  LD      spl/arch/arm/lib/built-in.o
  CC      spl/drivers/core/device.o
  CC      spl/lib/errno.o
  LD      tpl/common/init/built-in.o
  CC      spl/lib/libfdt/fdt_overlay.o
  LD      tpl/arch/arm/lib/built-in.o
  LD      spl/drivers/clk/tegra/built-in.o
  LD      tpl/arch/arm/mach-rockchip/built-in.o
  LD      tpl/dts/built-in.o
  CC      spl/common/malloc_simple.o
  LD      tpl/disk/built-in.o
  CC      spl/lib/libfdt/fdt_ro.o
  CC      spl/drivers/crypto/crypto-uclass.o
  CC      tpl/drivers/ram/rockchip/sdram_rk3588.o
  CC      tpl/fs/fs_internal.o
  CC      spl/drivers/clk/rockchip/clk_rk3588.o
  CC      spl/lib/display_options.o
  CC      tpl/drivers/serial/serial-uclass.o
  CC      spl/lib/crc32.o
  CC      spl/drivers/firmware/firmware-uclass.o
  LD      tpl/drivers/ram/rockchip/built-in.o
  CC      spl/common/image.o
  LD      tpl/fs/built-in.o
  CC      spl/lib/ctype.o
  LD      tpl/drivers/ram/built-in.o
  LDS     tpl/u-boot-spl.lds
  CC      spl/lib/libfdt/fdt_region.o
  CC      spl/lib/div64.o
  CC      tpl/drivers/serial/ns16550.o
  CC      spl/drivers/firmware/psci.o
  CC      spl/drivers/misc/misc-uclass.o
  CC      spl/lib/hang.o
  CC      spl/drivers/crypto/fsl/sec.o
  CC      spl/drivers/firmware/scmi/scmi_agent-uclass.o
  CC      spl/lib/linux_compat.o
  CC      spl/lib/linux_string.o
  LD      spl/drivers/crypto/fsl/built-in.o
  CC      spl/drivers/core/fdtaddr.o
  CC      spl/drivers/crypto/rockchip/crypto_v2.o
  CC      spl/lib/membuff.o
  CC      spl/drivers/firmware/scmi/smt.o
  CC      spl/drivers/firmware/scmi/smccc_agent.o
  CC      spl/drivers/misc/misc_otp.o
  CC      spl/lib/slre.o
  CC      spl/common/image-fdt.o
  LD      spl/lib/libfdt/built-in.o
  CC      spl/drivers/core/lists.o
  CC      spl/drivers/crypto/rockchip/crypto_hash_cache.o
  CC      spl/drivers/mmc/mmc.o
  LD      tpl/drivers/serial/built-in.o
  LD      spl/drivers/firmware/scmi/built-in.o
  LD      spl/drivers/clk/rockchip/built-in.o
  LD      spl/drivers/firmware/built-in.o
  LD      spl/drivers/clk/built-in.o
  LD      tpl/drivers/built-in.o
  CC      spl/drivers/misc/misc_decompress.o
  CC      spl/drivers/mtd/mtdcore.o
  CC      spl/drivers/mtd/spi/sf-uclass.o
  CC      spl/drivers/crypto/rockchip/crypto_v2_pka.o
  CC      spl/drivers/crypto/rockchip/crypto_v2_util.o
  CC      spl/drivers/mmc/mmc-uclass.o
  CC      spl/drivers/pinctrl/pinctrl-uclass.o
  CC      spl/lib/string.o
  CC      spl/drivers/core/root.o
  CC      spl/common/image-fit.o
  CC      spl/drivers/mtd/spi/sf_probe.o
  CC      spl/drivers/misc/rockchip-otp.o
  CC      spl/drivers/pinctrl/pinctrl-generic.o
  CC      spl/drivers/crypto/rsa_mod_exp/mod_exp_uclass.o
  LD      tpl/u-boot-tpl
  CC      spl/drivers/core/uclass.o
  CC      spl/drivers/crypto/rsa_mod_exp/mod_exp_sw.o
  CC      spl/drivers/mmc/mmc_write.o
  OBJCOPY tpl/u-boot-tpl-nodtb.bin
  COPY    tpl/u-boot-tpl.bin
  CC      spl/drivers/mtd/spi/spi-nor-ids.o
  CC      spl/drivers/mtd/mtd_uboot.o
  CC      spl/lib/stdlib.o
  LD      spl/drivers/crypto/rsa_mod_exp/built-in.o
  CC      spl/drivers/mtd/mtd-uclass.o
  AS      spl/drivers/misc/rk3588-secure-otp.o
  LD      spl/drivers/crypto/rockchip/built-in.o
  CC      spl/drivers/misc/rockchip_decompress.o
  LD      spl/drivers/pinctrl/nxp/built-in.o
  CC      spl/lib/tables_csum.o
  LD      spl/drivers/crypto/built-in.o
  CC      spl/drivers/mtd/spi/spi-nor-core.o
  CC      spl/common/memsize.o
  CC      spl/drivers/mmc/dw_mmc.o
  CC      spl/drivers/pinctrl/rockchip/pinctrl-rockchip-core.o
  CC      spl/drivers/mtd/mtd_blk.o
  CC      spl/drivers/ram/ram-uclass.o
  CC      spl/drivers/mmc/rockchip_dw_mmc.o
  CC      spl/lib/time.o
  LD      spl/drivers/misc/built-in.o
  CC      spl/common/stdio.o
  CC      spl/drivers/mtd/nand/core.o
  CC      spl/drivers/core/util.o
  CC      spl/drivers/reset/reset-uclass.o
  CC      spl/lib/hexdump.o
  CC      spl/drivers/core/simple-bus.o
  CC      spl/drivers/ram/rockchip/sdram_rk3588.o
  CC      spl/drivers/mmc/rpmb.o
  CC      spl/drivers/mmc/sdhci.o
  LD      spl/drivers/ram/rockchip/built-in.o
  CC      spl/drivers/pinctrl/rockchip/pinctrl-rk3588.o
  CC      spl/common/image-android-dt.o
  CC      spl/lib/uuid.o
  CC      spl/drivers/core/dump.o
  CC      spl/drivers/mtd/spi/sf_mtd.o
  LD      spl/drivers/ram/built-in.o
  CC      spl/drivers/reset/reset-rockchip.o
  CC      spl/drivers/mtd/nand/bbt.o
  CC      spl/common/cli.o
  CC      spl/drivers/mmc/rockchip_sdhci.o
  CC      spl/drivers/serial/serial-uclass.o
  CC      spl/lib/panic.o
  CC      spl/lib/tiny-printf.o
  CC      spl/lib/strto.o
  LD      spl/drivers/reset/built-in.o
  CC      spl/drivers/core/regmap.o
  LD      spl/drivers/pinctrl/rockchip/built-in.o
  CC      spl/drivers/serial/ns16550.o
  CC      spl/drivers/spi/spi-uclass.o
  CC      spl/drivers/pinctrl/pinctrl-rockchip.o
  CC      spl/common/command.o
  CC      spl/drivers/core/syscon-uclass.o
  CC      spl/drivers/spi/spi-mem.o
  CC      spl/drivers/sysreset/sysreset-uclass.o
  LD      spl/drivers/mmc/built-in.o
  CC      spl/common/s_record.o
  CC      spl/drivers/core/of_access.o
  CC      spl/drivers/sysreset/sysreset_rockchip.o
  CC      spl/drivers/mtd/nand/spi/gigadevice.o
  LD      spl/drivers/mtd/spi/spi-nor.o
  LD      spl/lib/built-in.o
  LD      spl/drivers/mtd/spi/built-in.o
  CC      spl/drivers/spi/rk_spi.o
  CC      spl/drivers/core/of_addr.o
  CC      spl/drivers/mtd/nand/spi/macronix.o
  CC      spl/drivers/spi/rockchip_sfc.o
  LD      spl/common/built-in.o
  CC      spl/drivers/core/read.o
  LD      spl/drivers/sysreset/built-in.o
  CC      spl/drivers/mtd/nand/spi/micron.o
  CC      spl/drivers/mtd/nand/spi/toshiba.o
  CC      spl/drivers/core/of_extra.o
  CC      spl/drivers/mtd/nand/spi/winbond.o
  LD      spl/drivers/serial/built-in.o
  CC      spl/drivers/mtd/nand/spi/dosilicon.o
  CC      spl/drivers/core/ofnode.o
  CC      spl/drivers/mtd/nand/spi/esmt.o
  CC      spl/drivers/core/read_extra.o
  CC      spl/drivers/mtd/nand/spi/xtx.o
  CC      spl/drivers/mtd/nand/spi/hyf.o
  CC      spl/drivers/mtd/nand/spi/fmsh.o
  CC      spl/drivers/mtd/nand/spi/foresee.o
  CC      spl/drivers/mtd/nand/spi/biwin.o
  CC      spl/drivers/mtd/nand/spi/etron.o
  LD      spl/drivers/spi/built-in.o
  CC      spl/drivers/mtd/nand/spi/silicongo.o
  CC      spl/drivers/mtd/nand/spi/jsc.o
  CC      spl/drivers/mtd/nand/spi/unim.o
  CC      spl/drivers/mtd/nand/spi/skyhigh.o
  CC      spl/drivers/mtd/nand/spi/core.o
  LD      spl/drivers/pinctrl/built-in.o
  LD      spl/drivers/core/built-in.o
  LD      spl/drivers/mtd/nand/spi/spinand.o
  LD      spl/drivers/mtd/nand/spi/built-in.o
  LD      spl/drivers/mtd/nand/nandcore.o
  LD      spl/drivers/mtd/nand/built-in.o
  LD      spl/drivers/mtd/built-in.o
  LD      spl/drivers/built-in.o
  LD      spl/u-boot-spl
  OBJCOPY spl/u-boot-spl-nodtb.bin
  CAT     spl/u-boot-spl-dtb.bin
  COPY    spl/u-boot-spl.bin
  CFGCHK  u-boot.cfg
+ pack_images
+ '[' '' '!=' y ']'
+ '[' FIT == FIT ']'
+ pack_fit_image --ini-trust /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini --ini-loader /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
+ which dtc
+ '[' y == y ']'
+ which python2
+ '[' '' == y ']'
+ rm uboot.img 'trust*.img' -rf
+ /root/sdk_linux/rk3588/u-boot/scripts/fit.sh --ini-trust /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini --ini-loader /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini --chip RK3588
+ set -e
++ sed -n 'N;/processor/p' /proc/cpuinfo
++ wc -l
+ JOB=12
++ ls configs/android6.0-rk3399_defconfig configs/dserve_dsrv9703c_defconfig configs/evb-aarch32-rk3308_defconfig configs/evb-px30_defconfig configs/evb-rk3036_defconfig configs/evb-rk3066_defconfig configs/evb-rk3128_defconfig configs/evb-rk3229_defconfig configs/evb-rk3288-rk1608_defconfig configs/evb-rk3288_defconfig configs/evb-rk3308_defconfig configs/evb-rk3326_defconfig configs/evb-rk3328_defconfig configs/evb-rk3399_defconfig configs/evb-rv1108_defconfig configs/fennec-rk3288_defconfig configs/firefly-rk3288_defconfig configs/firefly-rk3399_defconfig configs/gva-rk3229_defconfig configs/kylin-rk3036_defconfig configs/lion-rk3368_defconfig configs/miqi-rk3288_defconfig configs/nokia_rx51_defconfig configs/phycore-rk3288_defconfig configs/popmetal-rk3288_defconfig configs/puma-rk3399_defconfig configs/px30-tb_defconfig configs/px30_defconfig configs/rk1806_defconfig configs/rk1808_defconfig configs/rk3036_defconfig configs/rk3126_defconfig configs/rk3128_defconfig configs/rk3128x_defconfig configs/rk322x_defconfig configs/rk3288_defconfig configs/rk3308-aarch32-amp_defconfig configs/rk3308-aarch32_defconfig configs/rk3308_defconfig configs/rk3326-aarch32_defconfig configs/rk3326_defconfig configs/rk3328_defconfig configs/rk3368_defconfig configs/rk3399_defconfig configs/rk3399pro_defconfig configs/rk3568-spl-spi-nand_defconfig configs/rk3568_defconfig configs/rk3588_defconfig configs/rv1106-emmc-tb_defconfig configs/rv1106-spi-nor-tb_defconfig configs/rv1106-spi-nor_defconfig configs/rv1106_defconfig configs/rv1126-spi-nor-tiny_defconfig configs/rv1126-spl-spi-nand_defconfig configs/rv1126_defconfig configs/sheep-rk3368_defconfig configs/tinker-rk3288_defconfig configs/vyasa-rk3288_defconfig
+ SUPPORT_LIST='configs/android6.0-rk3399_defconfig
configs/dserve_dsrv9703c_defconfig
configs/evb-aarch32-rk3308_defconfig
configs/evb-px30_defconfig
configs/evb-rk3036_defconfig
configs/evb-rk3066_defconfig
configs/evb-rk3128_defconfig
configs/evb-rk3229_defconfig
configs/evb-rk3288-rk1608_defconfig
configs/evb-rk3288_defconfig
configs/evb-rk3308_defconfig
configs/evb-rk3326_defconfig
configs/evb-rk3328_defconfig
configs/evb-rk3399_defconfig
configs/evb-rv1108_defconfig
configs/fennec-rk3288_defconfig
configs/firefly-rk3288_defconfig
configs/firefly-rk3399_defconfig
configs/gva-rk3229_defconfig
configs/kylin-rk3036_defconfig
configs/lion-rk3368_defconfig
configs/miqi-rk3288_defconfig
configs/nokia_rx51_defconfig
configs/phycore-rk3288_defconfig
configs/popmetal-rk3288_defconfig
configs/puma-rk3399_defconfig
configs/px30-tb_defconfig
configs/px30_defconfig
configs/rk1806_defconfig
configs/rk1808_defconfig
configs/rk3036_defconfig
configs/rk3126_defconfig
configs/rk3128_defconfig
configs/rk3128x_defconfig
configs/rk322x_defconfig
configs/rk3288_defconfig
configs/rk3308-aarch32-amp_defconfig
configs/rk3308-aarch32_defconfig
configs/rk3308_defconfig
configs/rk3326-aarch32_defconfig
configs/rk3326_defconfig
configs/rk3328_defconfig
configs/rk3368_defconfig
configs/rk3399_defconfig
configs/rk3399pro_defconfig
configs/rk3568-spl-spi-nand_defconfig
configs/rk3568_defconfig
configs/rk3588_defconfig
configs/rv1106-emmc-tb_defconfig
configs/rv1106-spi-nor-tb_defconfig
configs/rv1106-spi-nor_defconfig
configs/rv1106_defconfig
configs/rv1126-spi-nor-tiny_defconfig
configs/rv1126-spl-spi-nand_defconfig
configs/rv1126_defconfig
configs/sheep-rk3368_defconfig
configs/tinker-rk3288_defconfig
configs/vyasa-rk3288_defconfig'
+ CMD_ARGS=itb
+ RKBIN_TOOLS=../rkbin/tools
+ CROSS_COMPILE_ARM32=../prebuilts/gcc/linux-x86/arm/gcc-linaro-6.3.1-2017.05-x86_64_arm-linux-gnueabihf/bin/arm-linux-gnueabihf-
+ CROSS_COMPILE_ARM64=../prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/bin/aarch64-linux-gnu-
+ RKCHIP=
+ RKCHIP_LABEL=
+ RKCHIP_LOADER=
+ RKCHIP_TRUST=
+ INI_TRUST=
+ INI_LOADER=
+ RKBIN=
+ TOOLCHAIN=
+ TOOLCHAIN_NM=
+ TOOLCHAIN_OBJDUMP=
+ TOOLCHAIN_ADDR2LINE=
+ PLAT_RSA=
+ PLAT_SHA=
+ PLAT_UBOOT_SIZE=
+ PLAT_TRUST_SIZE=
+ PLAT_TYPE=RKFW
++ pwd
+ SRCTREE=/root/sdk_linux/rk3588/u-boot
+ SCRIPT_FIT=/root/sdk_linux/rk3588/u-boot/scripts/fit.sh
+ SCRIPT_ATF=/root/sdk_linux/rk3588/u-boot/scripts/atf.sh
+ SCRIPT_TOS=/root/sdk_linux/rk3588/u-boot/scripts/tos.sh
+ SCRIPT_SPL=/root/sdk_linux/rk3588/u-boot/scripts/spl.sh
+ SCRIPT_UBOOT=/root/sdk_linux/rk3588/u-boot/scripts/uboot.sh
+ SCRIPT_LOADER=/root/sdk_linux/rk3588/u-boot/scripts/loader.sh
+ SCRIPT_DECOMP=/root/sdk_linux/rk3588/u-boot/scripts/decomp.sh
+ CC_FILE=.cc
+ REP_DIR=./rep
+ process_args itb /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
+ '[' 2 -gt 0 ']'
+ case $1 in
+ '[' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini == spl -o /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini == tpl ']'
+ shift 1
+ '[' 1 -gt 0 ']'
+ case $1 in
+ '[' '!' -f /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini ']'
+ grep -q CODE471_OPTION /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
+ grep -Eq 'BL31_OPTION|TOS' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
+ ARG_INI_TRUST=/root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
+ shift 1
+ '[' 0 -gt 0 ']'
+ '[' '!' -f .config ']'
+ prepare
+ '[' -d ../rkbin/tools ']'
+++ dirname ../rkbin/tools
++ cd ../rkbin
++ pwd
+ absolute_path=/root/sdk_linux/rk3588/rkbin
+ RKBIN=/root/sdk_linux/rk3588/rkbin
+ grep -Eq '^CONFIG_ARM64=y|^CONFIG_ARM64_BOOT_AARCH32=y' .config
+ ARM64_TRUSTZONE=y
+ grep -q '^CONFIG_ROCKCHIP_FIT_IMAGE_PACK=y' .config
+ PLAT_TYPE=FIT
+ select_toolchain
+ '[' '' '!=' y ']'
+ '[' -f .cc ']'
++ cat .cc
+ CROSS_COMPILE_ARM32=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
++ cat .cc
+ CROSS_COMPILE_ARM64=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ grep -q '^CONFIG_ARM64=y' .config
+ TOOLCHAIN=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ TOOLCHAIN_NM=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-nm
+ TOOLCHAIN_OBJDUMP=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-objdump
+ TOOLCHAIN_ADDR2LINE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-addr2line
++ which /root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-gcc
+ '[' '!' /root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-gcc ']'
+ '[' '' == y ']'
+ select_chip_info
+ CHIP_PATTERN='^CONFIG_ROCKCHIP_[R,P][X,V,K][0-9ESX]{1,5}'
++ egrep -o '^CONFIG_ROCKCHIP_[R,P][X,V,K][0-9ESX]{1,5}' .config
+ RKCHIP=CONFIG_ROCKCHIP_RK3588
+ RKCHIP=RK3588
+ RKCHIP_LOADER=RK3588
+ RKCHIP_TRUST=RK3588
++ filt_val CONFIG_CHIP_NAME .config
++ sed -n /CONFIG_CHIP_NAME=/s/CONFIG_CHIP_NAME=//p .config
++ tr -d '\r'
++ tr -d '"'
+ RKCHIP_LABEL=
+ '[' -z '' ']'
+ RKCHIP_LABEL=RK3588
+ fixup_platform_configure
++ filt_val CONFIG_UBOOT_SIZE_KB .config
++ sed -n /CONFIG_UBOOT_SIZE_KB=/s/CONFIG_UBOOT_SIZE_KB=//p .config
++ tr -d '\r'
++ tr -d '"'
+ U_KB=
++ filt_val CONFIG_UBOOT_NUM .config
++ sed -n /CONFIG_UBOOT_NUM=/s/CONFIG_UBOOT_NUM=//p .config
++ tr -d '"'
++ tr -d '\r'
+ U_NUM=
++ filt_val CONFIG_TRUST_SIZE_KB .config
++ sed -n /CONFIG_TRUST_SIZE_KB=/s/CONFIG_TRUST_SIZE_KB=//p .config
++ tr -d '\r'
++ tr -d '"'
+ T_KB=
++ filt_val CONFIG_TRUST_NUM .config
++ tr -d '\r'
++ tr -d '"'
++ sed -n /CONFIG_TRUST_NUM=/s/CONFIG_TRUST_NUM=//p .config
+ T_NUM=
++ filt_val CONFIG_TRUST_SHA_MODE .config
++ sed -n /CONFIG_TRUST_SHA_MODE=/s/CONFIG_TRUST_SHA_MODE=//p .config
++ tr -d '\r'
++ tr -d '"'
+ SHA=
++ filt_val CONFIG_TRUST_RSA_MODE .config
++ sed -n /CONFIG_TRUST_RSA_MODE=/s/CONFIG_TRUST_RSA_MODE=//p .config
++ tr -d '"'
++ tr -d '\r'
+ RSA=
+ PLAT_UBOOT_SIZE='--size  '
+ PLAT_TRUST_SIZE='--size  '
+ PLAT_SHA='--sha '
+ PLAT_RSA='--rsa '
+ '[' '!' -z '' ']'
+ '[' '!' -z '' ']'
+ select_ini_file
+ INI_LOADER=/root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
+ '[' y == y ']'
+ INI_TRUST=/root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ filt_val CONFIG_LOADER_INI .config
++ sed -n /CONFIG_LOADER_INI=/s/CONFIG_LOADER_INI=//p .config
++ tr -d '\r'
++ tr -d '"'
+ NAME=RK3588MINIALL.ini
+ '[' '!' -z RK3588MINIALL.ini ']'
+ INI_LOADER=/root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
++ filt_val CONFIG_TRUST_INI .config
++ sed -n /CONFIG_TRUST_INI=/s/CONFIG_TRUST_INI=//p .config
++ tr -d '\r'
++ tr -d '"'
+ NAME=RK3588TRUST.ini
+ '[' '!' -z RK3588TRUST.ini ']'
+ INI_TRUST=/root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
+ '[' '!' -z /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini ']'
+ INI_TRUST=/root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
+ '[' '!' -z '' ']'
+ handle_args_late
+ ARG_LIST_FIT=' --ini-trust /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini --ini-loader /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini'
+ sub_commands
+ [[ itb != --* ]]
+ CMD=itb
+ ARG=itb
+ '[' '' == tpl -o '' == spl ']'
+ ELF=u-boot
+ MAP=u-boot.map
+ SYM=u-boot.sym
+ case ${CMD} in
+ pack_uboot_itb_image
+ INI=/root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
+ '[' '!' -f /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini ']'
+ '[' y == y ']'
++ sed -n /_bl31_/s/PATH=//p /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d '\r'
+ BL31_ELF=bin/rk35/rk3588_bl31_v1.30.elf
++ sed -n /_bl32_/s/PATH=//p /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d '\r'
+ BL32_BIN=bin/rk35/rk3588_bl32_v1.12.bin
+ rm bl31.elf tee.bin -rf
+ cp /root/sdk_linux/rk3588/rkbin/bin/rk35/rk3588_bl31_v1.30.elf bl31.elf
+ grep BL32_OPTION -A 1 /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
+ grep SEC=1
SEC=1
+ cp /root/sdk_linux/rk3588/rkbin/bin/rk35/rk3588_bl32_v1.12.bin tee.bin
++ grep BL32_OPTION -A 3 /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ grep ADDR=
++ tr -d '\r'
++ awk -F = '{ printf $2 }'
+ TEE_OFFSET=0x08400000
+ TEE_ARG='-t 0x08400000'
+ (( i=0 ))
+ (( i<5 ))
+ MCU_BIN=mcu0.bin
+ MCU_IDX=MCU0
++ awk -F, '/MCU=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' 0 -eq 0 ']'
++ awk -F, '/MCU=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' '!' -z ']'
++ awk -F , '/MCU0=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' '' == enabled -o '' == okay ']'
+ (( i++ ))
+ (( i<5 ))
+ MCU_BIN=mcu1.bin
+ MCU_IDX=MCU1
++ awk -F, '/MCU=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' 1 -eq 0 ']'
++ awk -F , '/MCU1=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' '' == enabled -o '' == okay ']'
+ (( i++ ))
+ (( i<5 ))
+ MCU_BIN=mcu2.bin
+ MCU_IDX=MCU2
++ awk -F, '/MCU=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' 2 -eq 0 ']'
++ awk -F , '/MCU2=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' '' == enabled -o '' == okay ']'
+ (( i++ ))
+ (( i<5 ))
+ MCU_BIN=mcu3.bin
+ MCU_IDX=MCU3
++ awk -F, '/MCU=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' 3 -eq 0 ']'
++ awk -F , '/MCU3=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' '' == enabled -o '' == okay ']'
+ (( i++ ))
+ (( i<5 ))
+ MCU_BIN=mcu4.bin
+ MCU_IDX=MCU4
++ awk -F, '/MCU=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' 4 -eq 0 ']'
++ awk -F , '/MCU4=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' '' == enabled -o '' == okay ']'
+ (( i++ ))
+ (( i<5 ))
+ (( i=0 ))
+ (( i<5 ))
+ LOAD_BIN=load0.bin
+ LOAD_IDX=LOAD0
++ awk -F , '/LOAD0=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' '' == enabled -o '' == okay ']'
+ (( i++ ))
+ (( i<5 ))
+ LOAD_BIN=load1.bin
+ LOAD_IDX=LOAD1
++ awk -F , '/LOAD1=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' '' == enabled -o '' == okay ']'
+ (( i++ ))
+ (( i<5 ))
+ LOAD_BIN=load2.bin
+ LOAD_IDX=LOAD2
++ awk -F , '/LOAD2=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' '' == enabled -o '' == okay ']'
+ (( i++ ))
+ (( i<5 ))
+ LOAD_BIN=load3.bin
+ LOAD_IDX=LOAD3
++ awk -F , '/LOAD3=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' '' == enabled -o '' == okay ']'
+ (( i++ ))
+ (( i<5 ))
+ LOAD_BIN=load4.bin
+ LOAD_IDX=LOAD4
++ awk -F , '/LOAD4=/  { printf $3 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
+ ENABLED=
+ '[' '' == enabled -o '' == okay ']'
+ (( i++ ))
+ (( i<5 ))
++ awk -F, '/COMPRESSION=/  { printf $1 }' /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ tr -d ' '
++ cut -c 13-
+ COMPRESSION=
+ '[' '!' -z '' -a '' '!=' none ']'
+ '[' -d ./rep ']'
++ filt_val CONFIG_SPL_FIT_SOURCE .config
++ sed -n /CONFIG_SPL_FIT_SOURCE=/s/CONFIG_SPL_FIT_SOURCE=//p .config
++ tr -d '"'
++ tr -d '\r'
+ SPL_FIT_SOURCE=
+ '[' '!' -z ']'
++ filt_val CONFIG_SPL_FIT_GENERATOR .config
++ sed -n /CONFIG_SPL_FIT_GENERATOR=/s/CONFIG_SPL_FIT_GENERATOR=//p .config
++ tr -d '\r'
++ tr -d '"'
+ SPL_FIT_GENERATOR=arch/arm/mach-rockchip/make_fit_atf.sh
+ [[ arch/arm/mach-rockchip/make_fit_atf.sh == *.py ]]
+ arch/arm/mach-rockchip/make_fit_atf.sh -t 0x08400000
++ source .//arch/arm/mach-rockchip/fit_args.sh
+++ srctree=/root/sdk_linux/rk3588/u-boot
+++ '[' 2 -eq 1 ']'
+++ '[' 2 -gt 0 ']'
+++ case $1 in
+++ TEE_OFFSET=0x08400000
+++ shift 2
+++ '[' 0 -gt 0 ']'
++++ sed -n /CONFIG_SYS_SDRAM_BASE=/s/CONFIG_SYS_SDRAM_BASE=//p /root/sdk_linux/rk3588/u-boot/include/autoconf.mk
++++ tr -d '\r'
+++ DARM_BASE=0
++++ sed -n /CONFIG_SYS_TEXT_BASE=/s/CONFIG_SYS_TEXT_BASE=//p /root/sdk_linux/rk3588/u-boot/include/autoconf.mk
++++ tr -d '\r'
+++ UBOOT_LOAD_ADDR=0x00200000
+++ U_ARCH=arm
+++ grep -q '^CONFIG_ARM64=y' .config
+++ ARCH=arm64
+++ U_ARCH=arm64
+++ '[' '!' -z 0x08400000 ']'
++++ echo 'obase=16;138412032'
++++ bc
+++ TEE_LOAD_ADDR=0x8400000
+++ '[' '!' -z '' ']'
+++ '[' '!' -z '' ']'
+++ '[' '!' -z '' ']'
+++ '[' '!' -z '' ']'
+++ '[' '!' -z '' ']'
+++ '[' '!' -z '' ']'
+++ '[' '!' -z '' ']'
+++ '[' '!' -z '' ']'
+++ '[' '!' -z '' ']'
+++ '[' '!' -z '' ']'
++ rm -f '/root/sdk_linux/rk3588/u-boot/*.digest' '/root/sdk_linux/rk3588/u-boot/*.bin.gz' '/root/sdk_linux/rk3588/u-boot/bl31_0x*.bin'
++ MAX_ADDR_VAL=4026531840
++ '[' '' == gzip ']'
++ '[' '' == lzma ']'
++ COMPRESSION=none
++ SUFFIX=
+ gen_header
+ echo '
/*
 * Copyright (C) 2020 Rockchip Electronic Co.,Ltd
 *
 * Simple U-boot fit source file containing ATF/OP-TEE/U-Boot/dtb/MCU
 */

/dts-v1/;

/ {
        description = "FIT Image with ATF/OP-TEE/U-Boot/MCU";
        #address-cells = <1>;

        images {
'
+ gen_uboot_node
+ UBOOT=u-boot-nodtb.bin
+ echo '                uboot {
                        description = "U-Boot";
                        data = /incbin/("u-boot-nodtb.bin");
                        type = "standalone";
                        arch = "arm64";
                        os = "U-Boot";
                        compression = "none";
                        load = <0x00200000>;'
+ '[' none '!=' none ']'
+ echo '                        hash {
                                algo = "sha256";
                        };
                };'
+ gen_bl31_node
+ /root/sdk_linux/rk3588/u-boot/arch/arm/mach-rockchip/decode_bl31.py
+ NUM=1
++ ls -l bl31_0x00040000.bin bl31_0x000f0000.bin bl31_0xff100000.bin
++ sort --key=5 -nr
++ awk '{ print $9 }'
+ for ATF in `ls -l bl31_0x*.bin | sort --key=5 -nr | awk '{ print $9 }'`
++ echo bl31_0x00040000.bin
++ awk -F _ '{ printf $2 }'
++ awk -F . '{ printf $1 }'
+ ATF_LOAD_ADDR=0x00040000
+ '[' none '!=' none -a 1 -eq 1 ']'
+ echo '                atf-1 {
                        description = "ARM Trusted Firmware";
                        data = /incbin/("./bl31_0x00040000.bin");
                        type = "firmware";
                        arch = "arm64";
                        os = "arm-trusted-firmware";
                        compression = "none";
                        load = <0x00040000>;
                        hash {
                                algo = "sha256";
                        };
                };'
+ '[' 1 -gt 1 ']'
++ expr 1 + 1
+ NUM=2
+ for ATF in `ls -l bl31_0x*.bin | sort --key=5 -nr | awk '{ print $9 }'`
++ echo bl31_0x000f0000.bin
++ awk -F _ '{ printf $2 }'
++ awk -F . '{ printf $1 }'
+ ATF_LOAD_ADDR=0x000f0000
+ '[' none '!=' none -a 2 -eq 1 ']'
+ echo '                atf-2 {
                        description = "ARM Trusted Firmware";
                        data = /incbin/("./bl31_0x000f0000.bin");
                        type = "firmware";
                        arch = "arm64";
                        os = "arm-trusted-firmware";
                        compression = "none";
                        load = <0x000f0000>;
                        hash {
                                algo = "sha256";
                        };
                };'
+ '[' 2 -gt 1 ']'
+ LOADABLE_ATF=', "atf-2"'
++ expr 2 + 1
+ NUM=3
+ for ATF in `ls -l bl31_0x*.bin | sort --key=5 -nr | awk '{ print $9 }'`
++ echo bl31_0xff100000.bin
++ awk -F _ '{ printf $2 }'
++ awk -F . '{ printf $1 }'
+ ATF_LOAD_ADDR=0xff100000
+ '[' none '!=' none -a 3 -eq 1 ']'
+ echo '                atf-3 {
                        description = "ARM Trusted Firmware";
                        data = /incbin/("./bl31_0xff100000.bin");
                        type = "firmware";
                        arch = "arm64";
                        os = "arm-trusted-firmware";
                        compression = "none";
                        load = <0xff100000>;
                        hash {
                                algo = "sha256";
                        };
                };'
+ '[' 3 -gt 1 ']'
+ LOADABLE_ATF=', "atf-2", "atf-3"'
++ expr 3 + 1
+ NUM=4
+ gen_bl32_node
+ '[' -z 0x8400000 ']'
+ '[' arm64 == arm ']'
+ TEE=tee.bin
+ echo '                optee {
                        description = "OP-TEE";
                        data = /incbin/("tee.bin");
                        type = "firmware";
                        arch = "arm64";
                        os = "op-tee";
                        compression = "none";

                        load = <0x8400000>;'
+ '[' none '!=' none ']'
+ echo '                        hash {
                                algo = "sha256";
                        };
                };'
+ LOADABLE_OPTEE=', "optee"'
+ FIRMWARE_OPTEE='firmware = "optee";'
+ FIRMWARE_SIGN=', "firmware"'
+ gen_mcu_node
+ (( i=0, n=0 ))
+ (( i<5 ))
+ '[' 0 -eq 0 ']'
+ MCU_ADDR=
+ '[' -z ']'
+ continue
+ (( i++ ))
+ (( i<5 ))
+ '[' 1 -eq 0 ']'
+ '[' 1 -eq 1 ']'
+ MCU_ADDR=
+ '[' -z ']'
+ continue
+ (( i++ ))
+ (( i<5 ))
+ '[' 2 -eq 0 ']'
+ '[' 2 -eq 1 ']'
+ '[' 2 -eq 2 ']'
+ MCU_ADDR=
+ '[' -z ']'
+ continue
+ (( i++ ))
+ (( i<5 ))
+ '[' 3 -eq 0 ']'
+ '[' 3 -eq 1 ']'
+ '[' 3 -eq 2 ']'
+ '[' 3 -eq 3 ']'
+ MCU_ADDR=
+ '[' -z ']'
+ continue
+ (( i++ ))
+ (( i<5 ))
+ '[' 4 -eq 0 ']'
+ '[' 4 -eq 1 ']'
+ '[' 4 -eq 2 ']'
+ '[' 4 -eq 3 ']'
+ '[' 4 -eq 4 ']'
+ MCU_ADDR=
+ '[' -z ']'
+ continue
+ (( i++ ))
+ (( i<5 ))
+ gen_loadable_node
+ (( i=0 ))
+ (( i<5 ))
+ '[' 0 -eq 0 ']'
+ LOAD_ADDR=
+ '[' -z ']'
+ continue
+ (( i++ ))
+ (( i<5 ))
+ '[' 1 -eq 0 ']'
+ '[' 1 -eq 1 ']'
+ LOAD_ADDR=
+ '[' -z ']'
+ continue
+ (( i++ ))
+ (( i<5 ))
+ '[' 2 -eq 0 ']'
+ '[' 2 -eq 1 ']'
+ '[' 2 -eq 2 ']'
+ LOAD_ADDR=
+ '[' -z ']'
+ continue
+ (( i++ ))
+ (( i<5 ))
+ '[' 3 -eq 0 ']'
+ '[' 3 -eq 1 ']'
+ '[' 3 -eq 2 ']'
+ '[' 3 -eq 3 ']'
+ LOAD_ADDR=
+ '[' -z ']'
+ continue
+ (( i++ ))
+ (( i<5 ))
+ '[' 4 -eq 0 ']'
+ '[' 4 -eq 1 ']'
+ '[' 4 -eq 2 ']'
+ '[' 4 -eq 3 ']'
+ '[' 4 -eq 4 ']'
+ LOAD_ADDR=
+ '[' -z ']'
+ continue
+ (( i++ ))
+ (( i<5 ))
+ gen_kfdt_node
++ tr -d '"'
++ sed -n /CONFIG_EMBED_KERNEL_DTB_PATH=/s/CONFIG_EMBED_KERNEL_DTB_PATH=//p .config
+ KERN_DTB=dts/kern.dtb
+ '[' -z dts/kern.dtb ']'
+ '[' -f /root/sdk_linux/rk3588/u-boot/dts/kern.dtb ']'
+ gen_fdt_node
+ echo '                fdt {
                        description = "U-Boot dtb";
                        data = /incbin/("./u-boot.dtb");
                        type = "flat_dt";
                        arch = "arm64";
                        compression = "none";
                        hash {
                                algo = "sha256";
                        };
                };'
+ gen_arm64_configurations
++ awk -F = '{ print $2 }'
++ tr -d '"'
++ sed -n /CONFIG_DEFAULT_DEVICE_TREE/p .config
+ PLATFORM=rk3588-evb
+ grep -q '^CONFIG_FIT_ENABLE_RSASSA_PSS_SUPPORT=y' .config
+ echo '        };

        configurations {
                default = "conf";
                conf {
                        description = "rk3588-evb";
                        rollback-index = <0x0>;
                        firmware = "atf-1";
                        loadables = "uboot", "atf-2", "atf-3", "optee";

                        fdt = "fdt";
                        signature {
                                algo = "sha256,rsa2048";

                                key-name-hint = "dev";
                                sign-images = "fdt", "firmware", "loadables";
                        };
                };
        };
};
'
+ ./tools/mkimage -f u-boot.its -E u-boot.itb
+ echo 'pack u-boot.itb okay! Input: /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini'
pack u-boot.itb okay! Input: /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
+ echo

+ exit 0
FIT description: FIT Image with ATF/OP-TEE/U-Boot/MCU
Created:         Wed Nov 30 21:31:29 2022
 Image 0 (uboot)
  Description:  U-Boot
  Created:      Wed Nov 30 21:31:29 2022
  Type:         Standalone Program
  Compression:  uncompressed
  Data Size:    1422080 Bytes = 1388.75 KiB = 1.36 MiB
  Architecture: AArch64
  Load Address: 0x00200000
  Entry Point:  unavailable
  Hash algo:    sha256
  Hash value:   ba064d73e5eb2cce14ad6008c9a7b9a5df6e5fa0f5b348a4f49315a1d137a5df
 Image 1 (atf-1)
  Description:  ARM Trusted Firmware
  Created:      Wed Nov 30 21:31:29 2022
  Type:         Firmware
  Compression:  uncompressed
  Data Size:    190308 Bytes = 185.85 KiB = 0.18 MiB
  Architecture: AArch64
  Load Address: 0x00040000
  Hash algo:    sha256
  Hash value:   ce2098067b1667968f9659047d0495e453529b15eb099db7268c8c28ed2ffe08
 Image 2 (atf-2)
  Description:  ARM Trusted Firmware
  Created:      Wed Nov 30 21:31:29 2022
  Type:         Firmware
  Compression:  uncompressed
  Data Size:    24576 Bytes = 24.00 KiB = 0.02 MiB
  Architecture: AArch64
  Load Address: 0x000f0000
  Hash algo:    sha256
  Hash value:   ebc45c531e8d34266bd5d692b0ed50c23436b2d33dfa1e91c574b564170a6c0b
 Image 3 (atf-3)
  Description:  ARM Trusted Firmware
  Created:      Wed Nov 30 21:31:29 2022
  Type:         Firmware
  Compression:  uncompressed
  Data Size:    20480 Bytes = 20.00 KiB = 0.02 MiB
  Architecture: AArch64
  Load Address: 0xff100000
  Hash algo:    sha256
  Hash value:   9ded9f3bb55d3bc8300ad06db1f41558099e64cf5b1afdfcc3f303da8daecba7
 Image 4 (optee)
  Description:  OP-TEE
  Created:      Wed Nov 30 21:31:29 2022
  Type:         Firmware
  Compression:  uncompressed
  Data Size:    461200 Bytes = 450.39 KiB = 0.44 MiB
  Architecture: AArch64
  Load Address: 0x08400000
  Hash algo:    sha256
  Hash value:   fde08608450331a80c98b86e21933df13ad84dd7647af5354f38381d9b42ab12
 Image 5 (fdt)
  Description:  U-Boot dtb
  Created:      Wed Nov 30 21:31:29 2022
  Type:         Flat Device Tree
  Compression:  uncompressed
  Data Size:    7829 Bytes = 7.65 KiB = 0.01 MiB
  Architecture: AArch64
  Hash algo:    sha256
  Hash value:   c07f4a4d713c2dde198a1c4fc7a980a98f5dc97665e3171dc7c319d7846dc381
 Default Configuration: 'conf'
 Configuration 0 (conf)
  Description:  rk3588-evb
  Kernel:       unavailable
  Firmware:     atf-1
  FDT:          fdt
  Loadables:    uboot
                atf-2
                atf-3
                optee
+ set -e
++ sed -n 'N;/processor/p' /proc/cpuinfo
++ wc -l
+ JOB=12
++ ls configs/android6.0-rk3399_defconfig configs/dserve_dsrv9703c_defconfig configs/evb-aarch32-rk3308_defconfig configs/evb-px30_defconfig configs/evb-rk3036_defconfig configs/evb-rk3066_defconfig configs/evb-rk3128_defconfig configs/evb-rk3229_defconfig configs/evb-rk3288-rk1608_defconfig configs/evb-rk3288_defconfig configs/evb-rk3308_defconfig configs/evb-rk3326_defconfig configs/evb-rk3328_defconfig configs/evb-rk3399_defconfig configs/evb-rv1108_defconfig configs/fennec-rk3288_defconfig configs/firefly-rk3288_defconfig configs/firefly-rk3399_defconfig configs/gva-rk3229_defconfig configs/kylin-rk3036_defconfig configs/lion-rk3368_defconfig configs/miqi-rk3288_defconfig configs/nokia_rx51_defconfig configs/phycore-rk3288_defconfig configs/popmetal-rk3288_defconfig configs/puma-rk3399_defconfig configs/px30-tb_defconfig configs/px30_defconfig configs/rk1806_defconfig configs/rk1808_defconfig configs/rk3036_defconfig configs/rk3126_defconfig configs/rk3128_defconfig configs/rk3128x_defconfig configs/rk322x_defconfig configs/rk3288_defconfig configs/rk3308-aarch32-amp_defconfig configs/rk3308-aarch32_defconfig configs/rk3308_defconfig configs/rk3326-aarch32_defconfig configs/rk3326_defconfig configs/rk3328_defconfig configs/rk3368_defconfig configs/rk3399_defconfig configs/rk3399pro_defconfig configs/rk3568-spl-spi-nand_defconfig configs/rk3568_defconfig configs/rk3588_defconfig configs/rv1106-emmc-tb_defconfig configs/rv1106-spi-nor-tb_defconfig configs/rv1106-spi-nor_defconfig configs/rv1106_defconfig configs/rv1126-spi-nor-tiny_defconfig configs/rv1126-spl-spi-nand_defconfig configs/rv1126_defconfig configs/sheep-rk3368_defconfig configs/tinker-rk3288_defconfig configs/vyasa-rk3288_defconfig
+ SUPPORT_LIST='configs/android6.0-rk3399_defconfig
configs/dserve_dsrv9703c_defconfig
configs/evb-aarch32-rk3308_defconfig
configs/evb-px30_defconfig
configs/evb-rk3036_defconfig
configs/evb-rk3066_defconfig
configs/evb-rk3128_defconfig
configs/evb-rk3229_defconfig
configs/evb-rk3288-rk1608_defconfig
configs/evb-rk3288_defconfig
configs/evb-rk3308_defconfig
configs/evb-rk3326_defconfig
configs/evb-rk3328_defconfig
configs/evb-rk3399_defconfig
configs/evb-rv1108_defconfig
configs/fennec-rk3288_defconfig
configs/firefly-rk3288_defconfig
configs/firefly-rk3399_defconfig
configs/gva-rk3229_defconfig
configs/kylin-rk3036_defconfig
configs/lion-rk3368_defconfig
configs/miqi-rk3288_defconfig
configs/nokia_rx51_defconfig
configs/phycore-rk3288_defconfig
configs/popmetal-rk3288_defconfig
configs/puma-rk3399_defconfig
configs/px30-tb_defconfig
configs/px30_defconfig
configs/rk1806_defconfig
configs/rk1808_defconfig
configs/rk3036_defconfig
configs/rk3126_defconfig
configs/rk3128_defconfig
configs/rk3128x_defconfig
configs/rk322x_defconfig
configs/rk3288_defconfig
configs/rk3308-aarch32-amp_defconfig
configs/rk3308-aarch32_defconfig
configs/rk3308_defconfig
configs/rk3326-aarch32_defconfig
configs/rk3326_defconfig
configs/rk3328_defconfig
configs/rk3368_defconfig
configs/rk3399_defconfig
configs/rk3399pro_defconfig
configs/rk3568-spl-spi-nand_defconfig
configs/rk3568_defconfig
configs/rk3588_defconfig
configs/rv1106-emmc-tb_defconfig
configs/rv1106-spi-nor-tb_defconfig
configs/rv1106-spi-nor_defconfig
configs/rv1106_defconfig
configs/rv1126-spi-nor-tiny_defconfig
configs/rv1126-spl-spi-nand_defconfig
configs/rv1126_defconfig
configs/sheep-rk3368_defconfig
configs/tinker-rk3288_defconfig
configs/vyasa-rk3288_defconfig'
+ CMD_ARGS=loader
+ RKBIN_TOOLS=../rkbin/tools
+ CROSS_COMPILE_ARM32=../prebuilts/gcc/linux-x86/arm/gcc-linaro-6.3.1-2017.05-x86_64_arm-linux-gnueabihf/bin/arm-linux-gnueabihf-
+ CROSS_COMPILE_ARM64=../prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/bin/aarch64-linux-gnu-
+ RKCHIP=
+ RKCHIP_LABEL=
+ RKCHIP_LOADER=
+ RKCHIP_TRUST=
+ INI_TRUST=
+ INI_LOADER=
+ RKBIN=
+ TOOLCHAIN=
+ TOOLCHAIN_NM=
+ TOOLCHAIN_OBJDUMP=
+ TOOLCHAIN_ADDR2LINE=
+ PLAT_RSA=
+ PLAT_SHA=
+ PLAT_UBOOT_SIZE=
+ PLAT_TRUST_SIZE=
+ PLAT_TYPE=RKFW
++ pwd
+ SRCTREE=/root/sdk_linux/rk3588/u-boot
+ SCRIPT_FIT=/root/sdk_linux/rk3588/u-boot/scripts/fit.sh
+ SCRIPT_ATF=/root/sdk_linux/rk3588/u-boot/scripts/atf.sh
+ SCRIPT_TOS=/root/sdk_linux/rk3588/u-boot/scripts/tos.sh
+ SCRIPT_SPL=/root/sdk_linux/rk3588/u-boot/scripts/spl.sh
+ SCRIPT_UBOOT=/root/sdk_linux/rk3588/u-boot/scripts/uboot.sh
+ SCRIPT_LOADER=/root/sdk_linux/rk3588/u-boot/scripts/loader.sh
+ SCRIPT_DECOMP=/root/sdk_linux/rk3588/u-boot/scripts/decomp.sh
+ CC_FILE=.cc
+ REP_DIR=./rep
+ process_args loader /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
+ '[' 2 -gt 0 ']'
+ case $1 in
+ '[' /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini == spl -o /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini == tpl ']'
+ shift 1
+ '[' 1 -gt 0 ']'
+ case $1 in
+ '[' '!' -f /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini ']'
+ grep -q CODE471_OPTION /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
+ ARG_INI_LOADER=/root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
+ shift 1
+ '[' 0 -gt 0 ']'
+ '[' '!' -f .config ']'
+ prepare
+ '[' -d ../rkbin/tools ']'
+++ dirname ../rkbin/tools
++ cd ../rkbin
++ pwd
+ absolute_path=/root/sdk_linux/rk3588/rkbin
+ RKBIN=/root/sdk_linux/rk3588/rkbin
+ grep -Eq '^CONFIG_ARM64=y|^CONFIG_ARM64_BOOT_AARCH32=y' .config
+ ARM64_TRUSTZONE=y
+ grep -q '^CONFIG_ROCKCHIP_FIT_IMAGE_PACK=y' .config
+ PLAT_TYPE=FIT
+ select_toolchain
+ '[' '' '!=' y ']'
+ '[' -f .cc ']'
++ cat .cc
+ CROSS_COMPILE_ARM32=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
++ cat .cc
+ CROSS_COMPILE_ARM64=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ grep -q '^CONFIG_ARM64=y' .config
+ TOOLCHAIN=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ TOOLCHAIN_NM=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-nm
+ TOOLCHAIN_OBJDUMP=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-objdump
+ TOOLCHAIN_ADDR2LINE=/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-addr2line
++ which /root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-gcc
+ '[' '!' /root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-gcc ']'
+ '[' '' == y ']'
+ select_chip_info
+ CHIP_PATTERN='^CONFIG_ROCKCHIP_[R,P][X,V,K][0-9ESX]{1,5}'
++ egrep -o '^CONFIG_ROCKCHIP_[R,P][X,V,K][0-9ESX]{1,5}' .config
+ RKCHIP=CONFIG_ROCKCHIP_RK3588
+ RKCHIP=RK3588
+ RKCHIP_LOADER=RK3588
+ RKCHIP_TRUST=RK3588
++ filt_val CONFIG_CHIP_NAME .config
++ sed -n /CONFIG_CHIP_NAME=/s/CONFIG_CHIP_NAME=//p .config
++ tr -d '\r'
++ tr -d '"'
+ RKCHIP_LABEL=
+ '[' -z '' ']'
+ RKCHIP_LABEL=RK3588
+ fixup_platform_configure
++ filt_val CONFIG_UBOOT_SIZE_KB .config
++ sed -n /CONFIG_UBOOT_SIZE_KB=/s/CONFIG_UBOOT_SIZE_KB=//p .config
++ tr -d '\r'
++ tr -d '"'
+ U_KB=
++ filt_val CONFIG_UBOOT_NUM .config
++ sed -n /CONFIG_UBOOT_NUM=/s/CONFIG_UBOOT_NUM=//p .config
++ tr -d '"'
++ tr -d '\r'
+ U_NUM=
++ filt_val CONFIG_TRUST_SIZE_KB .config
++ tr -d '\r'
++ tr -d '"'
++ sed -n /CONFIG_TRUST_SIZE_KB=/s/CONFIG_TRUST_SIZE_KB=//p .config
+ T_KB=
++ filt_val CONFIG_TRUST_NUM .config
++ tr -d '\r'
++ tr -d '"'
++ sed -n /CONFIG_TRUST_NUM=/s/CONFIG_TRUST_NUM=//p .config
+ T_NUM=
++ filt_val CONFIG_TRUST_SHA_MODE .config
++ tr -d '\r'
++ tr -d '"'
++ sed -n /CONFIG_TRUST_SHA_MODE=/s/CONFIG_TRUST_SHA_MODE=//p .config
+ SHA=
++ filt_val CONFIG_TRUST_RSA_MODE .config
++ sed -n /CONFIG_TRUST_RSA_MODE=/s/CONFIG_TRUST_RSA_MODE=//p .config
++ tr -d '\r'
++ tr -d '"'
+ RSA=
+ PLAT_UBOOT_SIZE='--size  '
+ PLAT_TRUST_SIZE='--size  '
+ PLAT_SHA='--sha '
+ PLAT_RSA='--rsa '
+ '[' '!' -z '' ']'
+ '[' '!' -z '' ']'
+ select_ini_file
+ INI_LOADER=/root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
+ '[' y == y ']'
+ INI_TRUST=/root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
++ filt_val CONFIG_LOADER_INI .config
++ sed -n /CONFIG_LOADER_INI=/s/CONFIG_LOADER_INI=//p .config
++ tr -d '"'
++ tr -d '\r'
+ NAME=RK3588MINIALL.ini
+ '[' '!' -z RK3588MINIALL.ini ']'
+ INI_LOADER=/root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
++ filt_val CONFIG_TRUST_INI .config
++ sed -n /CONFIG_TRUST_INI=/s/CONFIG_TRUST_INI=//p .config
++ tr -d '\r'
++ tr -d '"'
+ NAME=RK3588TRUST.ini
+ '[' '!' -z RK3588TRUST.ini ']'
+ INI_TRUST=/root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
+ '[' '!' -z '' ']'
+ '[' '!' -z /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini ']'
+ INI_LOADER=/root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
+ handle_args_late
+ ARG_LIST_FIT=' --ini-trust /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini --ini-loader /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini'
+ sub_commands
+ [[ loader != --* ]]
+ CMD=loader
+ ARG=loader
+ '[' '' == tpl -o '' == spl ']'
+ ELF=u-boot
+ MAP=u-boot.map
+ SYM=u-boot.sym
+ case ${CMD} in
+ pack_loader_image
+ rm -f '*loader*.bin' '*download*.bin' '*idblock*.img'
+ cd /root/sdk_linux/rk3588/rkbin
++ filt_val '^PATH' /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
++ sed -n '/^PATH=/s/^PATH=//p' /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
++ tr -d '\r'
++ tr -d '"'
+ DEF_PATH=/root/sdk_linux/rk3588/rkbin/rk3588_spl_loader_v1.08.111.bin
++ filt_val IDB_PATH /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
++ sed -n /IDB_PATH=/s/IDB_PATH=//p /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
++ tr -d '\r'
++ tr -d '"'
+ IDB_PATH=/root/sdk_linux/rk3588/rkbin/
+ /root/sdk_linux/rk3588/u-boot/scripts/loader.sh --ini /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
+ set -e
+ '[' 2 -eq 0 ']'
+ '[' 2 -gt 0 ']'
+ case $1 in
+ INI=/root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
+ shift 2
+ '[' 0 -gt 0 ']'
+ '[' '!' -f /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini ']'
++ cat /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
++ wc -l
+ COUNT=34
+ '[' 34 -eq 1 ']'
+ ./tools/boot_merger /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
********boot_merger ver 1.2********
Info:Pack loader ok.
+ echo 'pack loader okay! Input: /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini'
pack loader okay! Input: /root/sdk_linux/rk3588/rkbin/RKBOOT/RK3588MINIALL.ini
+ cd -
/root/sdk_linux/rk3588/u-boot
+ '[' -f /root/sdk_linux/rk3588/rkbin/rk3588_spl_loader_v1.08.111.bin ']'
+ mv /root/sdk_linux/rk3588/rkbin/rk3588_spl_loader_v1.08.111.bin ./
+ '[' -f /root/sdk_linux/rk3588/rkbin/ ']'
+ exit 0

Image(no-signed, version=0): uboot.img (FIT with uboot, trust...) is ready
Image(no-signed): rk3588_spl_loader_v1.08.111.bin (with spl, ddr...) is ready
+ rm ./rep -rf
+ echo 'pack uboot.img okay! Input: /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini'
pack uboot.img okay! Input: /root/sdk_linux/rk3588/rkbin/RKTRUST/RK3588TRUST.ini
+ finish
+ echo

+ '[' '' == '' ']'
+ echo 'Platform RK3588 is build OK, with exist .config'
Platform RK3588 is build OK, with exist .config
+ echo /root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
/root/sdk_linux/rk3588/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
+ date
Wed Nov 30 21:31:29 CST 2022
+ '[' '' = true ']'
+ '[' '' = true ']'
+ '[' '' = true ']'
+ '[' '' = true ']'
+ finish_build
+ echo 'Running build_uboot succeeded.'
Running build_uboot succeeded.
+ cd /root/sdk_linux/rk3588
```