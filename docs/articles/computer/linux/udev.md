## udev

- 属性

  `KERNEL=="ttyUSB0"`、`SUBSYSTEM=="tty"`、`ATTRS{idVendor}=="1a86"` 这些都是属性，是用来匹配有这些属性的设备的

- 操作

  `SYMLINK+="ttyUSB_A"`：再添加一个 `/dev/ttyUSB_A` 的链接指向这个 ttyusb
  `MODE="0666"`：权限为 0666
  `OWNER="abc"`：所属用户为 abc

## 示例

usb 串口需要权限才能使用

这个的意思是对于同时有 `SUBSYSTEM=="tty"` 和 `SUBSYSTEMS=="usb"` 属性的设备，其所属用户为 abc，这样就不用把该用户加到 `dialout` 用户组也能使用这个设备

```sh
cat << EOF | sudo tee /etc/udev/rules.d/50-usb-serial.rules
SUBSYSTEM=="tty", SUBSYSTEMS=="usb", OWNER="abc"
EOF
```

或者

```sh
cat << EOF | sudo tee /etc/udev/rules.d/50-usb-serial.rules
KERNEL=="ttyUSB*", MODE="0666"
KERNEL=="ttyACM*", MODE="0666"
EOF
```

## 查看属性信息

查看一个 usb 转串口的设备的信息 `udevadm info -a /dev/ttyUSB0`

```
Udevadm info starts with the device specified by the devpath and then
walks up the chain of parent devices. It prints for every device
found, all possible attributes in the udev rules key format.
A rule to match, can be composed by the attributes of the device
and the attributes from one single parent device.

  looking at device '/devices/pci0000:00/0000:00:08.1/0000:04:00.3/usb1/1-2/1-2.2/1-2.2:1.0/ttyUSB0/tty/ttyUSB0':
    KERNEL=="ttyUSB0"
    SUBSYSTEM=="tty"
    DRIVER==""
    ATTR{power/control}=="auto"
    ATTR{power/runtime_active_time}=="0"
    ATTR{power/runtime_status}=="unsupported"
    ATTR{power/runtime_suspended_time}=="0"

  looking at parent device '/devices/pci0000:00/0000:00:08.1/0000:04:00.3/usb1/1-2/1-2.2/1-2.2:1.0/ttyUSB0':
    KERNELS=="ttyUSB0"
    SUBSYSTEMS=="usb-serial"
    DRIVERS=="ch341-uart"
    ATTRS{port_number}=="0"
    ATTRS{power/control}=="auto"
    ATTRS{power/runtime_active_time}=="0"
    ATTRS{power/runtime_status}=="unsupported"
    ATTRS{power/runtime_suspended_time}=="0"

  looking at parent device '/devices/pci0000:00/0000:00:08.1/0000:04:00.3/usb1/1-2/1-2.2/1-2.2:1.0':
    KERNELS=="1-2.2:1.0"
    SUBSYSTEMS=="usb"
    DRIVERS=="ch341"
    ATTRS{authorized}=="1"
    ATTRS{bAlternateSetting}==" 0"
    ATTRS{bInterfaceClass}=="ff"
    ATTRS{bInterfaceNumber}=="00"
    ATTRS{bInterfaceProtocol}=="02"
    ATTRS{bInterfaceSubClass}=="01"
    ATTRS{bNumEndpoints}=="03"
    ATTRS{supports_autosuspend}=="1"

  looking at parent device '/devices/pci0000:00/0000:00:08.1/0000:04:00.3/usb1/1-2/1-2.2':
    KERNELS=="1-2.2"
    SUBSYSTEMS=="usb"
    DRIVERS=="usb"
    ATTRS{authorized}=="1"
    ATTRS{avoid_reset_quirk}=="0"
    ATTRS{bConfigurationValue}=="1"
    ATTRS{bDeviceClass}=="ff"
    ATTRS{bDeviceProtocol}=="00"
    ATTRS{bDeviceSubClass}=="00"
    ATTRS{bMaxPacketSize0}=="8"
    ATTRS{bMaxPower}=="104mA"
    ATTRS{bNumConfigurations}=="1"
    ATTRS{bNumInterfaces}==" 1"
    ATTRS{bcdDevice}=="8134"
    ATTRS{bmAttributes}=="80"
    ATTRS{busnum}=="1"
    ATTRS{configuration}==""
    ATTRS{devnum}=="31"
    ATTRS{devpath}=="2.2"
    ATTRS{idProduct}=="7523"
    ATTRS{idVendor}=="1a86"
    ATTRS{ltm_capable}=="no"
    ATTRS{maxchild}=="0"
    ATTRS{power/active_duration}=="738205"
    ATTRS{power/autosuspend}=="2"
    ATTRS{power/autosuspend_delay_ms}=="2000"
    ATTRS{power/connected_duration}=="738205"
    ATTRS{power/control}=="on"
...
```
