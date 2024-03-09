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

## props属性

让组件可以接收来自父组件的数据，props属性是父组件向子组件传递数据的唯一方法。

1. 传递数据

```vue
<Demo name="xxx" />
```

2. 接收数据

```vue
<script>
    // 方式一
    export default {
        props: ['name']
    }

    // 方式二
    export default {
        props: {
            name: String
        }
    }

    // 方式三
    export default {
        props: {
            name: {
                type: String,
                required: false,
                default: 'xxx'
            }
        }
    }
</script>
```

注意：
    1. props是只读的，Vue底层会监测对props的修改，如果修改了，Vue会抛出警告。
    2. 若业务需求需要修改，则建议将props数据赋值到data中，然后再去修改data中的数据。

## mixin

功能：可以将多个组件的共同属性和方法抽离到一个mixin对象中，然后在多个组件中使用mixin对象。

使用方式：

1. 定义混合

```vue
{
    data() {
        ....
    },
    methods: {
        ...
    }
}
```

2. 使用混合

```vue
// 全局
Vue.mixin(xxx)

// 局部
mixins: [xxx]
```

## plugins

- 功能：用于增强Vue

- 本质：包含install方法的一个对象，install的第一个参数是Vue，之后的参数是插件使用者传递的数据

- 定义插件

```js
export default {
    install(Vue, str, num...) {
        console.log(str, num)
        
        // 添加全局过滤器
        Vue.filter(...)

        // 添加全局自定义指令
        Vue.directive(...)

        // 添加全局混入
        Vue.mixin(...)

        // 添加实例方法
        Vue.prototype.$xxxMethod = function() {}
        Vue.prototype.$xxxProperty = xxx
    }
}
```

- 使用插件

```js
Vue.use(xxx)
```

## scoped样式

- 作用：让样式在局部生效，防止冲突

- 写法

```vue
<style scoped>
</style>
```

## 组件化编码规范

1. 流程
   - 拆分静态组件
   - 实现动态组件
   - 交互实现
2. `props`属性适用于
   - 父组件 -> 子组件 通信
   - 子组件 -> 父组件 通信(传递回调函数)
3. `v-model`绑定的值不能是`props`传递过来的值，因为`props`是不能修改的
4. props传过来的值若是对象类型，修改对象中的属性是不会报错的，但不推荐这样做

## 组件的自定义事件

1. 组件间的通信方式，用于子组件向父组件传递数据
2. 绑定自定义事件
    ```vue
        <!-- 静态绑定 -->
        <Demo @myEvent="myMethod" />
        <Demo v-on:myEvent="myMethod" />

        <!-- 动态绑定 -->
        <Demo ref="demo" />
        ...
        mounted() {
            this.$refs.demo.$on('myEvent', this.myMethod)
        }
    ```
3. 若想自定义组件只能触发一次，可以使用`once`修饰符，或者`$once`方法
4. 触发自定义事件

    ```js
        this.$emit('myEvent', data)
    ```

5. 解绑自定义事件

    ```js
        this.$off('myEvent')
    ```

6. 组件上也可以绑定原生DOM事件，需要使用`native`修饰符

    ```vue
        <Demo @click.native="show" />
    ```

## 全局事件总线

1. 作用：用于组件间的通信，可以实现组件间的通信

2. 配置全局事件总线

`main.js`

```js
new Vue({
  render: h => h(App),
  beforeCreate() {
    // 全局事件总线
    Vue.prototype.$bus = this
  },
}).$mount('#app')
```

3. 使用事件总线


```js
// 提供数据
this.$bus.$emit('myEvent', data)

// 接收数据

// 回调函数
methods: {
    onMyEvent(data) {
        console.log(data)
    }
}

// 挂载时，绑定事件
mounted() {
    this.$bus.$on('myEvent', this.onMyEvent)
}

// 销毁时，解绑事件
beforeDestroy() {
    this.$bus.$off('myEvent')
}
```