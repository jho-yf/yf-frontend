# yf-ts

## TS编译

### TS编译某个文件

编译某个文件

```shell
tsc app.ts
```

编译并监视某个文件

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
        "./src/**/*"
    ],
    "exclude": [
        "./src/exclude/**/*"
    ]
}
```

`include`: 用来指定哪些ts文件需要被编译
`exclude`: 排除不需要编译的ts文件
- 默认值：`[ "node_modules", "bower_components", "jspm_packages" ]`