## 工具栏

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

## 表格

```
使用DataTemplate来显示数据，在DataTemplate里恰当地使用Border并为其BorderThickness和Column/Row/ColumnSpan/RowSpan设置恰当的Binding。
WPF自带的DataGrid表格控件本身就支持增删改数据行，所以控件主体仍为DataGrid。要让DataGrid增加行，只需要将其CanUserAddRows属性设为true即可。
```