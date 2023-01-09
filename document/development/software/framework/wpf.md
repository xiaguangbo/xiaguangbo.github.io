## 布局控件

```
直线划分型：Grid、UniformGrid。坐标型：Canvas。排列型：StackPanel、WrapPanel。靠边填满型：DockPanel。带滚动条型：ScrollViewer。布局互相之间是可以包含和并列的，同类型也是。

一般情况下，窗口肯定是填满的，并且控件都是
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

### 