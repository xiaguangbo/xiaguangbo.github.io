## 优化

```toml
[profile.release]
lto=true
strip = true
codegen-units = 1
panic = "abort"
```

## 依赖

**添加依赖**

```toml
[dependencies]
log = { version = "*", default-features = false }

component = { path = "../../../../data/esp/component" }

tokio = { version = "*", features = ["sync", "time"] }

serde = "*"
```

**指定依赖来源**

```toml
[patch.crates-io]
embuild = { git = "https://github.com/esp-rs/embuild" }
```

