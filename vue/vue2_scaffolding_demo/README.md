# Vue脚手架

## 脚手架目录结构
    |-- node_modules
    |-- public
    |   |-- favicon.ico         // 页签图标
    |   |-- index.html          // 主页面
    |-- src
    |   |-- assets              // 静态资源
    |   |-- components          // 组件
    |   |-- App.vue             // 根组件
    |   |-- main.js             // 入口文件
    |-- babel.config.js         // babel配置文件
    |-- package.json            // 项目依赖
    |-- package-lock.json       // 包版本控制文件
    |-- README.md               // 项目说明
    |-- vue.config.js           // vue-cli配置文件
    |-- .gitignore              // git忽略文件
        
## 不同版本vue

- vue.js与vue.runtime.xxx.js区别:
    1. vue.js是完整版，包含开发时的模板编译功能，体积较大，且编译过程比较慢；
    2. vue.runtime.xxx.js是运行时版本，不包含模板编译功能，体积较小，且编译过程非常快；

- 因为vue.runtime.xxx.js是运行时版本，不包含模板编译功能，所以它不支持template标签，只能使用script标签中的template属性

## vue.config.js配置文件
> 使用`vue inspect > default.vue.config.js`可以查看vue脚手架默认配置
> 使用`vue.config.js`可以对脚手架进行个性化配置，详情见：[https://cli.vuejs.org/config/](https://cli.vuejs.org/config/)

## ref属性
1. 被用于给元素或子组件注册引用信息(id的替代者)
2. 应用在html标签上时候，获取的是真实的DOM信息。应用在组件上时候，获取的是组件实例`VueComponent`
3. 使用方式

```vue
<h1 ref="myRef">Hello</h1>
<MyComponent ref="myComponentRef" />

<script>
    export default {
        ...
        methods: {
            showDOM() {
                console.log(this.$refs)
                console.log(this.$refs.myRef)
                console.log(this.$refs.myComponentRef)
            }
        }
    };
</script>
```