## 命名

```
采用蛇形命名，也就是单词可以小写的就小写并用下划线隔开，例如 abc_def_ghi。

单词组织
    对外接口：
        直接使用的接口：“本体类别_本名_操作对象_动作”，相当于树形图分类，意义在于尽可能用更少的单词来表达意思，例如 driver_uart_data_transmit、driver_uart_data_receive、driver_uart_data_transmission。
        事件、回调接口：“操作对象_动作”，例如 link_button_click。

    内部接口：“动作_操作对象”，例如 read_data。
```

## 结构组织

```
目的、功能、组件，目的只能调用功能，功能只能调用组件
```