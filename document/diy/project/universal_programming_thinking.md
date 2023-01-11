具体情况具体分析。考虑无限大的项目应该怎么规划，就说明项目应该怎么规划，然后根据实际情况进行简化。

## 命名与分类

```
使用分部命名法，每一个部分用下划线隔开，所有的单词统一小写，如果某一部分由多个单词组合则不用下划线分开，而是第一个单词小写，后续单词开头字母用大写，比如 abc_abcAbc_abcAbcAbc。顺序是 隶属对象_作用_分支_事件/被调。

class uart
{
private:
    enum state{...};
    Thread receive_thread_thread;
public:
    state init();
    void receive_thread();
    void receive_complete(void (p*)());
};
```

## 编程路线和结构组织

```
自上而下。目的、功能、组件，目的只能调用功能，功能只能调用组件
```

## 编程方法

```
能用无阻塞状态机就用
```