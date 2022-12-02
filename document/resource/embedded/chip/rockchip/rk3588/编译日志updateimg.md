```
root@5e42e5e27730:~/sdk_linux/rk3588# ./build.sh updateimg
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
+ '[' '!' -L /root/sdk_linux/rk3588/device/rockchip/.BoardConfig.mk -a updateimg '!=' lunch ']'
+ unset_board_config_all
++ mktemp
+ local tmp_file=/tmp/tmp.S5XoYKCTt1
+ sort
++ find /root/sdk_linux/rk3588/device/rockchip -name 'Board*.mk' -type f
+ uniq
+ grep -o '^export.*RK_.*=' /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig_thunder_boot.mk /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig_ficial_gate.mk /root/sdk_linux/rk3588/device/rockchip/rk1806/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v11-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr4-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-robot64.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-robot64_no_gpu.mk /root/sdk_linux/rk3588/device/rockchip/px30/BoardConfig-px30-evb-ddr3-v11.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_multi.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick_emmc.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig_rk1808_compute_stick_sfc.mk /root/sdk_linux/rk3588/device/rockchip/rk1808/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3128-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3128-evb-ddr3-v10-debian.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10-debian.mk /root/sdk_linux/rk3588/device/rockchip/rk312x/BoardConfig-rk3126c-evb-ddr3-v10-slc-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig-minievb-v10-lock.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig-minievb-v10-cvr.mk /root/sdk_linux/rk3588/device/rockchip/rv1108/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3229/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/cmcc_soundai/BoardConfig_soundai_cmcc.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_RK3308B_firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_robot64.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_soundai_cmcc.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308b_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308bs_64bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_robot32.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308b_64bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308hs_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308h_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3308/BoardConfig_rk3308bs_32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-sapphire-excavator-lp4.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-sapphire-excavator.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3399/BoardConfig-rk3399-evb-ind-lpddr4.mk /root/sdk_linux/rk3588/device/rockchip/px3se/BoardConfig_nand.mk /root/sdk_linux/rk3588/device/rockchip/px3se/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig_retro.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig_dongle.mk /root/sdk_linux/rk3588/device/rockchip/rk3036/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-security-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb7-lp4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb3-lp5-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588s-evb1-lp4x-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-rk3588-evb1-lp4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3588/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-robot64_no_gpu.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v12-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-evb-lp3-v12.mk /root/sdk_linux/rk3588/device/rockchip/rk3326/BoardConfig-rk3326-robot64.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-security-base.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10-spi-nor-64M.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-ab-base.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3566-evb2-lp4x-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-uvc-evb1-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3566-evb2-lp4x-v10-32bit.mk /root/sdk_linux/rk3588/device/rockchip/rk356x/BoardConfig-rk3568-evb1-ddr4-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig-rk3288-firefly.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig_rk3288-evb-act8846.mk /root/sdk_linux/rk3588/device/rockchip/rk3288/BoardConfig-rk3288-evb-rk808.mk /root/sdk_linux/rk3588/device/rockchip/rk3358/BoardConfig-rk3358m-vehicle-ddr3.mk /root/sdk_linux/rk3588/device/rockchip/rk3358/BoardConfig-rk3358-evb-ddr3-v10.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_v10-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig_rk3399pro_evb_v14-combine.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_npu-pcie.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_v11_v12-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_npu-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig-rk3399pro_evb_lpd4_v11_v12-usb.mk /root/sdk_linux/rk3588/device/rockchip/rk3399pro/BoardConfig_rk3399pro_evb_v13_pcie.mk /root/sdk_linux/rk3588/device/rockchip/rk3128h/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-v10-v11.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-cvr.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-robot.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-sl.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-battery-evb.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-dualcam-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-facial_gate.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-trailcamera.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nor-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-snapshot.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-uvcc-spi-nor-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-spi-nand-ab.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-ramboot-uvc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-slc-nand-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-ab-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nor-tb-v13.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-spi-nand.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-tb-v12.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-38x38-emmc.mk /root/sdk_linux/rk3588/device/rockchip/rv1126_rv1109/BoardConfig-sllock.mk /root/sdk_linux/rk3588/device/rockchip/rk3328/BoardConfig.mk -h
+ source /tmp/tmp.S5XoYKCTt1
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
+ rm -f /tmp/tmp.S5XoYKCTt1
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
+ echo updateimg
+ grep -wqE 'help|-h'
+ OPTIONS=updateimg
+ '[' -f /root/sdk_linux/rk3588/device/rockchip/rk3588/app-build.sh ']'
+ for option in ${OPTIONS}
+ echo 'processing option: updateimg'
processing option: updateimg
+ case $option in
+ build_updateimg
+ packm=unpack
+ [[ -n '' ]]
+ [[ -n '' ]]
+ gen_file_name
++ date +%y%m%d
+ local day=221202
+ local 'os_all=buildroot debian ubuntu UnionTech UniKylin centos'
+++ realpath /root/sdk_linux/rk3588/device/rockchip/.BoardConfig.mk
++ basename /root/sdk_linux/rk3588/device/rockchip/rk3588/itx-3588j-ubuntu.mk .mk 
+ local model=itx-3588j-ubuntu
++ echo itx-3588j-ubuntu
++ egrep -io 'buildroot|debian|ubuntu|UnionTech|UniKylin|centos'
+ local os_mk=ubuntu
+ [[ -n ubuntu ]]
+ model=itx-3588j
+ IMGNAME=ITX-3588J
+++ realpath /root/sdk_linux/rk3588/rockdev/rootfs.img
++ basename /root/sdk_linux/rk3588/ubuntu_rootfs/rootfs.img
+ local rootfs=rootfs.img
++ echo rootfs
++ sed 's/[-_].*//'
+ local os_name=rootfs
+ [[ ROOTFS == \R\O\O\T\F\S ]]
+ os_name=ubuntu
+ [[ -z ubuntu ]]
++ echo ubuntu
++ sed 's/./\u&/'
+ IMGNAME+=_Ubuntu
++ echo rootfs.img
++ egrep -io 'gnome|xfce|minimal|server'
++ true
+ local os_mode=
+ [[ -n '' ]]
++ echo rootfs.img
++ sed -n 's/.*[-_]\([vV][0-9.a-zA-Z]*\(\-[0-9]\{1,\}\)\{,1\}\)[-_\.].*/\1/p'     
+ os_version=
+ [[ -z '' ]]
++ echo rootfs.img
++ sed -n 's/.*[-_]\(20[0-9]\{2,\}[-_.0-9]*\)[-_.].*/\1/p'
+ os_version=
+ [[ -n '' ]]
+ local sdk_version=
++ realpath /root/sdk_linux/rk3588/.repo/manifest.xml
+ local manifest=/root/sdk_linux/rk3588/.repo/manifests/rk3588/rk3588_linux_release_20221012_v1.0.2a.xml
+ [[ -f /root/sdk_linux/rk3588/.repo/manifests/rk3588/rk3588_linux_release_20221012_v1.0.2a.xml ]]
+++ realpath /root/sdk_linux/rk3588/.repo/manifest.xml
++ basename /root/sdk_linux/rk3588/.repo/manifests/rk3588/rk3588_linux_release_20221012_v1.0.2a.xml .xml
+ manifest=rk3588_linux_release_20221012_v1.0.2a
++ echo rk3588_linux_release_20221012_v1.0.2a
++ sed -n 's/.*[-_]\([vV][0-9.a-zA-Z]*\).*/\1/p'
+ sdk_version=v1.0.2a
+ IMGNAME+=_v1.0.2a
+ '[' -n '' ']'
+ IMGNAME+=_221202.img
+ echo -e 'File name is \e[36m ITX-3588J_Ubuntu_v1.0.2a_221202.img\e[0m'
File name is  ITX-3588J_Ubuntu_v1.0.2a_221202.img
+ '[' '' == 0 ']'
+ read -t 10 -e -p 'Rename the file? [N|y]' ANS
Rename the file? [N|y]n
+ ANS=n
+ case $ANS in
+ rename=0
+ [[ 0 == \1 ]]
+ '[' unpack == pack ']'
+ IMAGE_PATH=/root/sdk_linux/rk3588/rockdev
+ PACK_TOOL_DIR=/root/sdk_linux/rk3588/tools/linux/Linux_Pack_Firmware
+ cd /root/sdk_linux/rk3588/tools/linux/Linux_Pack_Firmware/rockdev
+ '[' -f '' ']'
+ echo 'Make update.img'
Make update.img
+ '[' '' = true ']'
+ '[' -f rk3588-ubuntu-package-file ']'
++ ls -lh package-file
++ awk -F ' ' '{print $NF}'
+ source_package_file_name=rk3588-ubuntu-package-file
+ ln -fs rk3588-ubuntu-package-file package-file
+ ./mkupdate.sh
+ echo 'start to make update.img...'
start to make update.img...
+ '[' '!' -f Image/parameter -a '!' -f Image/parameter.txt ']'
+ '[' '!' -f package-file ']'
+ ./afptool -pack ./ Image/update.img
Android Firmware Package Tool v2.0
------ PACKAGE ------
Add file: ./package-file
package-file,Add file: ./package-file done,offset=0x800,size=0xf4,userspace=0x1   
Add file: ./Image/MiniLoaderAll.bin
bootloader,Add file: ./Image/MiniLoaderAll.bin done,offset=0x1000,size=0x6d9c0,userspace=0xdc
Add file: ./Image/parameter.txt
parameter,Add file: ./Image/parameter.txt done,offset=0x6f000,size=0x1e2,userspace=0x1
Add file: ./Image/uboot.img
uboot,Add file: ./Image/uboot.img done,offset=0x6f800,size=0x800000,userspace=0x1000
Add file: ./Image/misc.img
misc,Add file: ./Image/misc.img done,offset=0x86f800,size=0xc000,userspace=0x18
Add file: ./Image/boot.img
boot,Add file: ./Image/boot.img done,offset=0x87b800,size=0x10000000,userspace=0x20000
Add file: ./Image/recovery.img
recovery,Add file: ./Image/recovery.img done,offset=0x1087b800,size=0x4b99800,userspace=0x9733
Add file: ./Image/rootfs.img
rootfs,Add file: ./Image/rootfs.img done,offset=0x15415000,size=0x5b30f000,userspace=0xb661e
Add CRC...
Make firmware OK!
------ OK ------
+ ./rkImageMaker -RK3588 Image/MiniLoaderAll.bin Image/update.img update.img -os_type:androidos
********rkImageMaker ver 2.0********
Generating new image, please wait...
Writing head info...
Writing boot file...
Writing firmware...
Generating MD5 data...
MD5 data generated successfully!
New image generated successfully!
Making ./Image/update.img OK.
+ ln -fs rk3588-ubuntu-package-file package-file
+ mv update.img /root/sdk_linux/rk3588/rockdev
+ mv /root/sdk_linux/rk3588/rockdev/update.img /root/sdk_linux/rk3588/rockdev/pack/ITX-3588J_Ubuntu_v1.0.2a_221202.img
+ rm -rf /root/sdk_linux/rk3588/rockdev/update.img
+ '[' 0 -eq 0 ']'
+ echo 'Make update image ok!'
Make update image ok!
+ echo -e '\e[36m /root/sdk_linux/rk3588/rockdev/pack/ITX-3588J_Ubuntu_v1.0.2a_221202.img \e[0m'
 /root/sdk_linux/rk3588/rockdev/pack/ITX-3588J_Ubuntu_v1.0.2a_221202.img
+ command -v ffgenswv.bin
+ finish_build
+ echo 'Running build_updateimg succeeded.'
Running build_updateimg succeeded.
+ cd /root/sdk_linux/rk3588
```