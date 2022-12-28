压缩解压

## 安装

- linux：包名为 p7zip-full

## 使用

支持多种压缩包格式

- 解压到当前位置：7z x compress_package.7z
- 解压到指定位置：7z x compress_package.7z -o./directory  
    -o 后面没有空格

- 压缩：7z a -r compress_package.7z ./directory