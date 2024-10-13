## 简介

使用 rust 标准库开发

## 安装

以下是 riscv 架构的工具链

- fedora

  ```sh
  sudo dnf install rustup
  rustup-init

  sudo dnf install gcc gcc-c++ clang-devel libudev-devel openssl-devel python3-devel

  cargo install ldproxy cargo-generate espflash
  ```

## 创建模板

```sh
cargo generate esp-rs/esp-idf-template cargo
cd ...
cargo build
cargo run
```

## 其他

- sdkconfig.defaults

工程默认是 40M 晶振，所有使用 26M 晶振的需要在 sdkconfig.defaults 里添加`CONFIG_XTAL_FREQ_26=y`，配置生效需要`cargo clean`再`cargo run`

建议添加`CONFIG_FREERTOS_HZ=1000`，默认的是 100

目前 esp32c2 2MB 版本需要修改`.cargo/config.toml`里的`runner`项为`runner = "espflash flash --monitor --flash-size 2mb"`，不然esp32c2会启动报错

26M 晶振的日志波特率是 74880，40M 的是 115200，若要修改则在程序里添加：`unsafe { esp_idf_svc::sys::uart_set_baudrate(esp_idf_svc::sys::uart_port_t_UART_NUM_0, 921600); }`

- espflash.toml：

  在项目下添加，方便更改参数

	```toml
	baudrate = 2000000 # 烧录用的波特率

	[flash]
	mode = "dio"
	size = "4MB"
	frequency = "60MHz"
	```

## 问题

- 若下载时无法打开串口则添加 udev
