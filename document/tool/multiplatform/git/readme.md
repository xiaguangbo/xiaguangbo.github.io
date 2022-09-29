## 初始设置

```
git config --global user.name "user_name"
git config --global user.email "email@example.com"
```

- linux

    ```
    ssh-keygen -t rsa -C "email@example.com"
    cat /home/user_name/.ssh/id_rsa.pub
    ```

    复制输出的全部内容，在 github 里登上账号后，点头像进入 Settings/SSH and GPG keys，点 New SSH key，在 Key 里粘贴刚刚的内容，点 Add SSH key
    
    等待一会执行：
    ```
    ssh -T git@github.com
    ```

    如果输出“Hi user_name! You've successfully authenticated, but GitHub does not provide shell access.“就行了