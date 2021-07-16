<style>
body {
    color: #ddd;
    background-color: #333;
}
a {
    color: hotpink;
}
</style>

# [Vue](https://github.com/zhmhbest/HelloVue)

[TOC]

## Demonstrate

- [Hello](demo/demo-template.html)
  - 没有模板
  - 使用模板
- [生命周期](demo/demo-life.html)
  - beforeCreate
  - created
  - beforeMount
  - mounted
  - beforeUpdate
  - updated
  - beforeDestroy
  - destroyed
- [绑定](demo/demo-bind.html)
  - [绑定内容](demo/demo-bind.html#绑定内容)
  - [绑定属性](demo/demo-bind.html#绑定属性)
  - [双向绑定](demo/demo-bind.html#双向绑定)
  - [绑定方法](demo/demo-bind.html#%E7%BB%91%E5%AE%9A%E6%96%B9%E6%B3%95)
- [数据](demo/demo-data.html)
  - [监听改变](demo/demo-data.html#监听改变)
  - [计算属性](demo/demo-data.html#计算属性)
- [条件](demo/demo-control.html)
  - [v-show](demo/demo-control.html#v-show)
  - [v-if](demo/demo-control.html#v-if)
  - [v-for](demo/demo-control.html#v-for)
- [组件](demo/demo-com.html)
  - 全局组建
  - 局部组建
- [指令](demo/demo-directive.html)
  - 全局指令
  - 局部指令
- [Ajax](demo/demo-ajax.html)
- [Router](demo/demo-router.html)
- [Vuex](demo/demo-vuex.html)

## Loader

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
