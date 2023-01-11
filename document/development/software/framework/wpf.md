## 要点

### 后台更新界面，asnyc await

```
无法跨线程更新界面，比如更改控件内容之类的，普通的绑定也没用，除非绑定的是 ObservableCollection（经测试，和 DispacherTimer 一样，很卡），或者在界面线程里用异步函数，异步函数等同于当前线程里的非阻塞循环，和非阻塞状态机一样。

异步函数
    // 窗口加载事件
    private async void window_initialized(object sender, EventArgs e)
    {   
        // 这样不行，报跨线程修改界面的错误。说明这个 Task 不在当前线程里，也就是不在窗口线程里
        //await Task.Run(async () =>
        //{
        //    while (true)
        //    {
        //        textblock_clock.Text = DateTime.Now.ToString();
        //        await Task.Delay(1000);
        //    }
        //});

        await clock_handle(); // 相当于新开一个线程，但能解决跨线程不能更改界面内容的问题
    }

    private async Task clock_handle()
    {
        string time = "";

        // 另开一个线程获取时间
        var thraed = new Thread(() =>
        {
            while (true)
            {
                time = DateTime.Now.ToString();
                Thread.Sleep(200);
            }
        });
        thraed.IsBackground = true; // 不加这个会导致关闭主窗口后该线程依然存在
        thraed.Start();

        // 如果使用 await Task.Run(async () => {...}); 的方法更新 string time，占用 cpu 会是 Thread 的数倍，不知为何

        while (true)
        {
            textblock_clock.Text = time;
            await Task.Delay(200);// 如果没有这个会把界面卡死，这足以证明当前的函数是作为窗口线程里的非阻塞状态机里的函数的。占用的内存、cpu 时间的压力都会加到窗口线程上。所以，在这种函数里不能用费时间的东西，否则就把窗口卡死了，应该把除更新界面的东西都放到别的线程里
        }
    }

ObservableCollection
    private var varList = new ObservableCollection<string>() 
    { 
        "var1","var2","var3","var4","var5","var6","var7","var8","var9","var10"
    };

    public ObservableCollection<string> VarList
    {
        get { return varList; }
        set { varList = value; }
    }
```

### 窗口加载事件

```
1.Window.Initialized
这个元素已经被构建出来,并且它的属性值都被设置好了,所以通常都是子元素先于父元素触发这个事件.当一个元素的 Initialized 事件被触发, 通常它的子树都已经初始化完成, 但是父元素还未初始化. 这个事件通常是在子树的 Xaml 被加载进来后触发的. 这个事件与 IsInitialized 属性相互绑定

2.Window.Activatied
获得焦点事件（会频繁触发）

3.Window.Loaded
这个元素不仅被构造并初始化完成,布局也运行完毕,数据也绑上来了,它现在连到了渲染面上(rendering surface),秒秒钟就要被渲染的节奏.到这个时候,就可以通过 Loaded 事件从根元素开始画出整棵树. 这个事件与 IsLoaded 属性绑定.

4.Window.ContentRendered
ContentRendered 事件在窗口的内容呈现完毕之后发生。如果该窗口不包含任何内容，则不会引发此事件。（窗体截图要用此事件）

5.Window.DeActivatied
失去焦点事件（会频繁触发）

6.Window.Closing
7.Window.UnLoad
8.Window.Closed
```

## 布局控件

```
直线划分型：Grid、UniformGrid。坐标型：Canvas。排列型：StackPanel、WrapPanel。靠边、填满型：DockPanel。带滚动条型：ScrollViewer。布局互相之间是可以包含和并列的，同类型也是。

一般情况下，窗口肯定是填满的，并且相同类型的控件都是一样大小的。先在自带的 Grid 里用 DockPanel 把工具栏什么的都贴边，然后剩下的大面积用 Grid 划分，再在这个 Grid 里进一步划分。如果有些控件不是单纯的堆叠，对位置有均匀性要求，就用 Grid 分。
```

### Grid

```
Grid通过自定义行列来进行布局，类似于表格。通过定义Grid的RowDifinitions和ColumnDifinitions来实现对于表格行和列的定义，元素根据附加属性Grid.Row和Grid.Column确定自己的位置。
默认平分边长
固定长度：值为一个确定的数字。
自动长度：值为Auto，取实际控件所需的最小值。
比例长度：*表示占用剩余的全部宽度；两行都是*，将平分剩余宽度；一个2*，一个*，则前者占剩余全部宽度的2/3，后者占1/3。

<Grid>
    <Grid.ColumnDefinitions>
        <ColumnDefinition Width="40"/>
        <ColumnDefinition Width="*"/>
        <ColumnDefinition Width="2*"/>
        <ColumnDefinition Width="Auto"/>
    </Grid.ColumnDefinitions>
    <Button Content="btn" Grid.Column="0"></Button>
    <Button Content="btn" Grid.Column="1"></Button>
    <Button Content="btn" Grid.Column="2"></Button>
    <Button Content="btn" Grid.Column="3"></Button>
</Grid>
```

### UniformGrid

```
UniformGrid是Grid的简化版，每个单元格的大小相同，不需要定义行列集合。每个单元格始终具有相同的大小，每个单元格只能容纳一个控件。UniformGrid中没有Row和Column附加属性，也没有空白单元格。
如果没有设置Rows或者Colums，则按照定义在其内部的元素个数，自动创建行列，并通常保持相同的行列数。若只设置Rows则固定行数，自动扩展列数。若只设置Colums则固定列数，自动扩展行数。

<UniformGrid>
    <Button Content="btn1"></Button>
    <Button Content="btn2"></Button>
    <Button Content="btn3"></Button>
    <Button Content="btn4"></Button>
    <Button Content="btn5"></Button>
    <Button Content="btn6"></Button>
    <Button Content="btn7"></Button>
    <Button Content="btn8"></Button>
    <Button Content="btn9"></Button>
</UniformGrid>
```

### Canvas

```
Canvas是一个类似于坐标系的面板，所有的元素通过设置坐标来决定其在坐标系中的位置（Canvas.Left、Canvas.Top、Canvas.Right、Canvas.Bottom），Canvas中的元素不能自动调整大小。如果窗口大小小于Canvas面板大小，则一部分内容不可见。

<Canvas>
    <Button Canvas.Left="50" Canvas.Top="50" Content="Left=50 Top=50"/>
    <Button Canvas.Left="50" Canvas.Bottom="50" Content="Left=50 Bottom=50"/>
    <Button Canvas.Right="50" Canvas.Top="50" Content="Right=50 Top=50"/>
    <Button Canvas.Right="50" Canvas.Bottom="50" Content="Right=50 Bottom=50"/>
</Canvas>
```

### StackPanel

```
    StackPanel将控件按照行或列来顺序排列，但不会换行。通过设置面板的Orientation属性设置了两种排列方式：横排（Horizontal默认的）和竖排（Vertical），默认为竖排（Vertical）

    <StackPanel>
        <Button Content="btn1"></Button>
        <Button Content="btn2"></Button>
        <Button Content="btn3"></Button>
        <Button Content="btn4"></Button>
        <Button Content="btn5"></Button>
        <Button Content="btn6"></Button>
        <Button Content="btn7"></Button>
        <Button Content="btn8"></Button>
        <Button Content="btn9"></Button>
    </StackPanel>
```

### WrapPanel

```
    WrapPanel布局面板将各个控件按照一定方向罗列，当长度或高度不够时自动调整进行换行换列。
    Orientation="Horizontal"时各控件从左至右罗列，当面板长度不够时，子控件就会自动换行，继续按照从左至右的顺序排列。
    Orientation="Vertical"时各控件从上至下罗列，当面板高度不够时，子控件就会自动换列，继续按照从上至下的顺序排列。
    ItemHeight——所有子元素都一致的高度，任何比ItemHeight高的元素都将被截断。
    ItemWidth——所有子元素都一致的宽度，任何比ItemWidth高的元素都将被截断。

    <WrapPanel>
        <Button Content="btn1" Width="100"></Button>
        <Button Content="btn2" Width="100"></Button>
        <Button Content="btn3" Width="100"></Button>
        <Button Content="btn4" Width="100"></Button>
        <Button Content="btn5" Width="100"></Button>
        <Button Content="btn6" Width="100"></Button>
        <Button Content="btn7" Width="100"></Button>
        <Button Content="btn8" Width="100"></Button>
        <Button Content="btn9" Width="100"></Button>
    </WrapPanel>
```

### DockPanel

```
DockPanel支持让元素简单地停靠在整个面板的某一条边上，然后拉伸元素以填满全部宽度或高度。它也支持让一个元素填充其他已停靠元素没有占用的剩余空间。DockPanel有一个Dock附加属性，因此子元素用4个值来控制它们的停靠：Left、Top、Right、Bottom。
Dock没有Fill值作为替代，最后的子元素将加入一个DockPanel并填满所有剩余的空间，设置DockPanel的LastChildFill属性为false，则它将朝某个方向停靠。

<DockPanel>
    <Button Content="btn1" DockPanel.Dock="Left"></Button>
    <Button Content="btn2" DockPanel.Dock="Top"></Button>
    <Button Content="btn3" DockPanel.Dock="Right"></Button>
    <Button Content="btn4" DockPanel.Dock="Bottom"></Button>
</DockPanel>
```

### ScrollViewer

```
ScrollViewer是带有滚动条的面板。在ScrollViewer中只能有一个子控件，若要显示多个子控件，需要将一个附加的 Panel控件放置在父 ScrollViewer中，然后可以将子控件放置在该panel控件中。
通常设置HorizontalScrollBarVisibility="Auto"和VerticalScrollBarVisibility=“Auto”，当内容超出可视范围时，才显示横向/纵向滚动条。

<ScrollViewer>
    <Button Content="btn1" Height="460" Width="1000"></Button>
</ScrollViewer>
```

## 展示控件

### 按钮

```
button 的 background 的默认颜色是 LightGray。透明是 Transparent
```

### 隔断

```
<Separator></Separator>
```

### 工具栏

```
<ToolBarTray>
    <ToolBar>
        <Label>CPU:</Label>
        <ComboBox Name="combobox_cpu_type">
            <ComboBoxItem IsSelected="True">S7-1200</ComboBoxItem>
            <ComboBoxItem>S7-1500</ComboBoxItem>
        </ComboBox>

        <Label>IP:</Label>
        <TextBox Name="textbox_target_ip" Width="106"></TextBox>

        <Separator/>

        <Button Name="button_connect" Click="button_connect_click" Background="White">连接</Button>
        <Button Name="button_disconnect" Click="button_disconnect_click" Background="White">断开连接</Button>
    </ToolBar>
</ToolBarTray>
```

### 表格

```
WPF自带的DataGrid表格控件本身就支持增删改数据行，所以控件主体仍为DataGrid。要让DataGrid增加行，只需要将其CanUserAddRows属性设为true即可。
```