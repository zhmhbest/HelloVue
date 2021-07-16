# Vue

- [View](https://zhmhbest.github.io/HelloVue/)

## Vue Loader

```bash
# 创建
npm init -y

npm -D i webpack@4 webpack-cli@3
npm -D i webpack-dev-server@3 html-webpack-plugin@4
npm -D i style-loader@2 css-loader@5
npm -D i vue-template-compiler@2 vue-loader@15
npm -S i vue@2

# 查看
npm ls
# loader@1.0.0
# ├── css-loader@5.2.7
# ├── html-webpack-plugin@4.5.2
# ├── style-loader@2.0.0
# ├── vue-loader@15.9.7
# ├── vue-template-compiler@2.6.14
# ├── vue@2.6.14
# ├── webpack-cli@3.3.12
# ├── webpack-dev-server@3.11.2
# └── webpack@4.46.0

# 启动
npx webpack-dev-server --inline --progress
```
