查找文件里符合条件的字符串

## 参数

```
-n 或 --line-number : 在显示符合样式的那一行之前，标示出该行的列数编号。
-o 或 --only-matching : 只显示匹配PATTERN 部分。
```

## 例子

```
grep -n abc "*.txt"：在当前目录里的 txt 文件里找到 "abc" 字符串
grep -rn "update" ./：查找当前目录及其子目录下所有文件中的 "update" 字符串

-r：遍历
-n：带行数
```
