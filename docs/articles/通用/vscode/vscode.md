## 操作

- 打开命令面板：Shift + Ctrl + P
- 打开用户配置文件：在 命令面板 里搜索`user json`

## flatpak

此方法安装的 vscode 使用集成终端需要添加这些到用户配置

```json
"terminal.integrated.defaultProfile.linux": "bash",
"terminal.integrated.profiles.linux": {
    "bash": {
    "path": "/app/bin/host-spawn",
    "args": ["bash"],
    "icon": "terminal-bash",
    "overrideName": true
    }
},
```

## 代理

添加到用户配置

```json
"http.proxy": "http://192.168.1.13:7890",
```

ip 和 port 根据具体情况配置
