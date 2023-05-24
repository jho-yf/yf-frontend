# yf-ts

## TS编译

### TS编译某个文件

编译某个文件

```shell
tsc app.ts
```

编译并监视某个文件：当ts文件变化的时候，自动编译成js文件

```shell
tsc app.ts -w
```

### TS编译某个文件夹

在需要编译的文件夹下新建文件`tsconfig.json`

```json
{

}
```

命令

```shell
# 编译当前文件夹下的ts文件
tsc

# 编译并监视当前文件夹下的ts文件
tsc -w
```

### `tsconfig.js`的配置参数

`tsconfig.json`是TS编译器的配置文件，TS编译器可以根据它的信息来对ts代码进行编译

```json
{
    "include": [
        "./src/**/*",
        "./tests/**/*"
    ],
    "exclude": [
        "./src/exclude/**/*"
    ]
}
```

`include`: 用来指定哪些ts文件需要被编译
`exclude`: 排除不需要编译的ts文件

- 默认值：`[ "node_modules", "bower_components", "jspm_packages" ]`

`compilerOptions`：编译选项

- `target` 指定编译的es版本
- `module` 指定要使用的模块化的规范
- `lib` 指定项目中要使用的库
- `outDir` 用于指定编译后文件所在的目录
- `outFile` 将所有的全局作用域中的代码合并到同一个文件
- `strict` 所有严格检查的总开关
- `allowJs` 是否对js文件进行编译，默认false
- `checkJs` 是否检查js代码是否符合语法规范，默认false
- `removeComments` 是否移除注释
- `noEmit` 不生成编译后的文件
- `noEmitOnError` 发生错误的时候不生成编译文件
- `alwaysStrict` 编译后的文件是否使用严格模式，默认false
- `noImplicitAny` 是否不允许隐式any
- `noImplicitThis` 是否不允许隐式this
- `strictNullChecks` 是否严格的检查null值



## webpack

初始化项目，生成`package.json`，用于管理项目依赖和命令

```shell
npm init -y
```

安装基础依赖

```shell
# -D 表示开发依赖
cnpm i -D webpack webpack-cli typescript ts-loader
```

安装成功`package.json`，会生成以下配置

```json
{
    "devDependencies": {
        "ts-loader": "^9.4.3",
        "typescript": "^5.0.4",
        "webpack": "^5.83.1",
        "webpack-cli": "^5.1.1"
    }
}

```

新建`webpack.config.js`文件，进行以下基础配置

```js
// 引入 path 包
const path = require('path')

// webpack中所有的配置信息都应该卸载module.exports中
module.exports = {

    // 指定入口文件
    entry: "./src/index.ts",
    
    // 指定打包输出
    output: {
        // 指定打包文件所在目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的文件名
        filename: "bundle.js"
    },

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 指的是规则生效的文件，支持正则表达式
                test: /\.ts$/,
                // 要使用的loader
                use: 'ts-loader',
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },
    
    // 用于设置应用模块，凡是以ts和js结尾的文件都可以作为引用模块使用
    resolve: {
        extensions: ['.ts', '.js']
    }

}
```

新建`tsconfig.json`文件，并进行以下基础配置

```json
{
    "compilerOptions": {
        "module": "ES2015",
        "target": "ES2015",
        "strict": true
    }
}
```

在`package.json`配置`build`命令

```json
{
    ···
    "scripts": {
    	"test": "echo \"Error: no test specified\" && exit 1",
    	"build": "webpack"
  	}
	...
}
```

运行命令进行构建，编译完的包会输出在`dist`目录下

```shell
npm run build
```



### html-webpack-plugin

`html-webpack-plugin`可以自动将 webpack 打包生成的文件（比如 js 文件、css 文件）嵌入到 html 文件中。

安装依赖

```shell
cnpm i -D html-webpack-plugin
```

`webpack`插件配置

```js
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry: "...",
    output: {
       ...
    },
    module: {
       ...
    },
 	
    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            "template": "./src/index.html"
        }),
    ]

}
```

运行命令进行构建，编译完的包会输出在`dist`目录下，`dist`目录底下会生成一个`index.html`文件

```shell
npm run build
```



### webpack-dev-server

安装依赖

```shell
cnpm i -D webpack-dev-server
```

在`package.json`配置`start`命令

```js
{
    ···
    "scripts": {
    	"test": "echo \"Error: no test specified\" && exit 1",
    	"build": "webpack",
        "start": "webpack serve --open chrome.exe"
  	}
	...
}
```

运行命令启动

```shell
npm run start
```

