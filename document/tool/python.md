## 源

```
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
```

## pip

ubuntu 安装 python3 的 pip：pyhton3-pip，python2 的 pip：pip

- 升级 pip：python -m pip install --upgrade pip
- 安装模块：pip install module_name、pip install module_name -i https://mirrors.aliyun.com/pypi/simple/
- 升级模块：pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --upgrade module_name
- 列出已安装模块：pip list
- 查找可安装模块：pip search module_name

## 错误

### 安装器出现语法错误

```
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --upgrade setuptools
```