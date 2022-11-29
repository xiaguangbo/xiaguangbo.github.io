## 简介

./abc.sh 和 source abc.sh 都可以执行，如果直接 abc.sh 会把该文件名当作命令来识别就不对了

## 语法

### 关键字

- unset

    删除变量或函数

- source

    导入脚本并执行

- shift

    用于对参数的移动(左移)，通常用于在不知道传入参数个数的情况下依次遍历每个参数然后进行相应处理

- set

    更改 shell 特性
    ```
    -a	标示已修改的变量，以供输出至环境变量
    -b	使被中止的后台程序立刻回报执行状态
    -C	转向所产生的文件无法覆盖已存在的文件
    -d	Shell预设会用杂凑表记忆使用过的指令，以加速指令的执行。使用-d 参数可取消
    -e	若指令传回值不等于0，则立即退出shell
    -f	取消使用通配符
    -h	自动记录函数的所在位置
    -H Shell	可利用!加<指令编号>的方式来执行history中记录的指令
    -k	指令所给的参数都会被视为此指令的环境变量
    -l	记录for循环的变量名称
    -m	使用监视模式
    -n	只读取指令，而不实际执行
    -p	启动优先顺序模式
    -P	启动-P参数后，执行指令时，会以实际的文件或目录来取代符号连接
    -t	执行完随后的指令，即退出shell
    -u	当执行时使用到未定义过的变量，则显示错误信息
    -v	显示shell所读取的输入值
    -x	执行指令后，会先显示该指令及所下的参数（+x取消）
    ```

### 运算符

#### 算数运算符

假设变量 a 为 10，变量 b 为 20

```
+ ：加法	expr $a + $b 结果为 30
- ：减法	expr $a - $b 结果为 -10
* ：乘法	expr $a \* $b 结果为 200
/ ：除法	expr $b / $a 结果为 2
% ：取余	expr $b % $a 结果为 0
= ：赋值	a=$b 把变量 b 的值赋给 a
==：相等。比较两个数字，相同则返回 true     [$a == $b] 返回 false
!=：不相等。比较两个数字，不相同则返回 true [$a != $b] 返回 true
```

#### 关系运算符

假设变量 a 为 10，变量 b 为 20

```
-eq	检测两个数是否相等，相等返回 true	              [ $a -eq $b ] 返回 false
-ne	检测两个数是否不相等，不相等返回 true	           [ $a -ne $b ] 返回 true
-gt	检测左边的数是否大于右边的，如果是，则返回 true	    [ $a -gt $b ] 返回 false
-lt	检测左边的数是否小于右边的，如果是，则返回 true	    [ $a -lt $b ] 返回 true
-ge	检测左边的数是否大于等于右边的，如果是，则返回 true	[ $a -ge $b ] 返回 false
-le	检测左边的数是否小于等于右边的，如果是，则返回 true [ $a -le $b ] 返回 true
```

#### 布尔运算符

假设变量 a 为 10，变量 b 为 20

```
!	非运算，表达式为 true 则返回 false，否则返回 true [ ! false ] 返回 true。
-o	或运算，有一个表达式为 true 则返回 true	          [ $a -lt 20 -o $b -gt 100 ] 返回 true。
-a	与运算，两个表达式都为 true 才返回 true	          [ $a -lt 20 -a $b -gt 100 ] 返回 false。
```

#### 逻辑运算符

假设变量 a 为 10，变量 b 为 20

```
&&	逻辑的 AND [[ $a -lt 100 && $b -gt 100 ]] 返回 false
||	逻辑的 OR  [[ $a -lt 100 || $b -gt 100 ]] 返回 true
```

#### 字符串运算符

假设变量 a 为 "abc"，变量 b 为 "efg"

```
=	检测两个字符串是否相等，相等返回 true	   [ $a = $b ] 返回 false
!=	检测两个字符串是否不相等，不相等返回 true  [ $a != $b ] 返回 true
-z	检测字符串长度是否为0，为0返回 true	       [ -z $a ] 返回 false
-n	检测字符串长度是否不为 0，不为 0 返回 true [ -n "$a" ] 返回 true
$	检测字符串是否不为空，不为空返回 true	   [ $a ] 返回 true
```

#### 文件测试运算符

```
-b file	检测文件是否是块设备文件，如果是，则返回 true             [ -b $file ] 返回 false
-c file	检测文件是否是字符设备文件，如果是，则返回 true           [ -c $file ] 返回 false
-d file	检测文件是否是目录，如果是，则返回 true                  [ -d $file ] 返回 false
-f file	检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true [ -f $file ] 返回 true
-g file	检测文件是否设置了 SGID 位，如果是，则返回 true           [ -g $file ] 返回 false
-k file	检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true [ -k $file ] 返回 false
-p file	检测文件是否是有名管道，如果是，则返回 true               [ -p $file ] 返回 false
-u file	检测文件是否设置了 SUID 位，如果是，则返回 true           [ -u $file ] 返回 false
-r file	检测文件是否可读，如果是，则返回 true                    [ -r $file ] 返回 true
-w file	检测文件是否可写，如果是，则返回 true                    [ -w $file ] 返回 true
-x file	检测文件是否可执行，如果是，则返回 true                   [ -x $file ] 返回 true
-s file	检测文件是否为空（文件大小是否大于0），不为空返回 true     [ -s $file ] 返回 true
-e file	检测文件（包括目录）是否存在，如果是，则返回 true          [ -e $file ] 返回 true
-S: 判断某文件是否 socket
-L：检测文件是否存在并且是一个符号链接
```