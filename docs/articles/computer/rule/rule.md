## 命名分类

命名分类需要符合模块化，即每个部分都可以简单的一并加入和删除，可以分成几块但不能东一句西一句再在中间夹一句，会导致漏看。基于这点，命名的排版划分就符合从整体对象到具体参数、属性或动作

- 程序

  项目|文字规则|排版划分
  ---|---|---
  普通变量|单词小写，用`_`分隔
  全局/静态 变量|单词大写，用`_`分隔
  方法|单词小写，用`_`分隔
  结构体|单词首字母大写

- 文件夹

  ```
  linux // 系统名
  |- data
  |  |- espressif
  |  |- inovance
  |  |- kicad
  |  |- music
  |
  |- project
     |- backup
     |- tempctrl
     |  |- pcb
     |  |  |- project
     |  |     |- project.kicad_pcb
     |  |        project.kicad_prl
     |  |        project.kicad_pro
     |  |        ...
     |  |
     |  |- program_esp32c2 // 如果一个项目有多个子项目，那么就在前面加上子项目的名字
     |  |  |- project
     |  |     |- src
     |  |        |- module
     |  |        |  main.rs
     |  |        |  work.rs
     |  |        |
     |  |        build.rs
     |  |        Cargo.toml
     |  |        ...
     |  |
     |  |- shell
     |     |- project
     |        |- project.FCStd
     |           ...
     |
     |- xxx.github.io
  ```
