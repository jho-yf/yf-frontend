# 项目环境

node 版本

```shell
node -v
# v19.1.0
```

全局安装pnpm

```shell
npm i -g pnpm
```

创建vite项目

```shell
pnpm create vite
```

初始化项目

```shell
pnpm i
```

运行项目

```shell
pnpm run dev
```

# eslint配置

eslint: JavaScript代码检测工具

安装eslint

```shell
pnpm i eslint -D
```

生成配置文件`.eslint.cjs`

```shell
npx eslint --init

# You can also run this command directly using 'npm init @eslint/config'.
# Need to install the following packages:
#   @eslint/create-config@0.4.6
# Ok to proceed? (y) y
# √ How would you like to use ESLint? · problems
# √ What type of modules does your project use? · esm
# √ Which framework does your project use? · vue
# √ Does your project use TypeScript? · No / Yes
# √ Where does your code run? · browser
# √ What format do you want your config file to be in? · JavaScript
# The config that you've selected requires the following dependencies:

# @typescript-eslint/eslint-plugin@latest eslint-plugin-vue@latest @typescript-eslint/parser@latest
# √ Would you like to install them now? · No / Yes
# √ Which package manager do you want to use? · pnpm
```

安装vue3环境校验插件

```shell
# 让所有的prettier规则存在冲突的Eslint rules失效，并使用prettier进行代码检查
# eslint-config-prettier
# eslint-plugin-node 
# eslint-plugin-import

# 运行更漂亮的eslint，使prettier规则优先级更高，eslint优先级低
# eslint-plugin-prettier

# vue.js的eslint插件：查找vue语法错误，发现错误指令，查找违规风格指南
# eslint-plugin-vue

# 允许使用eslint校验所有babel code
# @babel/eslint-parser

pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier @babel/eslint-parser
```

修改`.eslintrc.cjs`文件

```javascript
module.exports = {
    // 工作环境
    "env": {
        "browser": true,    // 浏览器端
        "es2021": true,      // es2021
        "node": true,
        "jest": true
    },
    // 规则继承：全部规则默认关闭
    "extends": [
        // 开启推荐规则
        "eslint:recommended",
        // 使用TS语法规则
        "plugin:@typescript-eslint/recommended",
        // 使用vue3语法规则
        "plugin:vue/vue3-essential",
        "plugin:prettier/recommended"
    ],
    // 为特定类型的文件指定处理器
    "overrides": [
    ],
    // 解析器选项
    "parserOptions": {
        // 校验ECMA最新版本
        "ecmaVersion": "latest",
        // 指定TS解析器
        // Esprima                      默认解析器
        // Babel-ESLint                 babel解析器
        // @typescript-eslint/parser    TS解析器
        "parser": "@typescript-eslint/parser",
        "sourceType": "module",
        "jsxPragma": 'React',
        "ecmaFeatures": {
            "jsx": true
        }
    },
    // 第三方插件，在使用插件之前必须用`npm`命令安装
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    /*
     eslint规则 
        "off" 或 0      表示关闭规则
        "warn" 或 1     表示打开的规则作为警告（不影响代码执行）
        "error" 或 2    表示规则作为一个错误（代码不能执行，界面报错）
    
     */
    "rules": {
        // eslint (https://eslint.org/docs/latest/use/configure/rules)
        // 要求使用 let 或 const 而不是 var
        'no-var': 'error', 
        // 不允许多个空行
        'no-multiple-empty-lines': ['warn', { max: 1 }], 
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 禁止空余的多行
        'no-unexpected-multiline': 'error', 
        // 禁止不必要的转义字符
        'no-useless-escape': 'off', 

        // typeScript (https://typescript-eslint.io/rules)
        // 禁止定义未使用的变量
        '@typescript-eslint/no-unused-vars': 'error',
        // 禁止使用 @ts-ignore
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        // 禁止使用 any 类型
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        // 禁止使用自定义 TypeScript 模块和命名空间。
        '@typescript-eslint/no-namespace': 'off', 
        '@typescript-eslint/semi': 'off',

        // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
        // 要求组件名称始终为 “-” 链接的单词
        'vue/multi-word-component-names': 'off',
        // 防止<script setup>使用的变量<template>被标记为未使用
        'vue/script-setup-uses-vars': 'error',
        // 不允许组件 prop的改变
        'vue/no-mutating-props': 'off',
        // 对模板中的自定义组件强制执行属性命名样式
        'vue/attribute-hyphenation': 'off',
    }
}
```

添加`.eslintignore`忽略文件

```javascript
dist
node_modules
```

在`package.json`添加运行脚本

```json
"scripts": {
    // 运行时校验src目录下eslint规则
    "lint": "eslint src",
    // 自动修复不符合eslint规则的代码
    "fix": "eslint src --fix"
}
```


# prettier配置

prettier：代码格式化美观

安装依赖

```shell
pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
```

添加规则：`.prettierrc.json`

```json
{
    "singleQuote": true,	// 单引号字符串
    "semi": false,			// 不加分号
    "bracketSpacing": true,
    "htmlWhitespaceSensitivity": "ignore",
    "endOfLine": "auto",
    "trailingComma": "all",
    "tabWidth": 2			// 缩进
}
```

配置忽略文件`prettierignore`

```javascript
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```



# stylelint配置

stylelint：CSS的lint工具。用于可视化css代码，检查css语法错误与不合理的写法，指定css书写顺序

https://stylelint.bootcss.com/

安装依赖

```shell
pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
```

添加`.stylelintrc.cjs`配置文件

```cjs
// @see https://stylelint.bootcss.com/

module.exports = {
    extends: [
      'stylelint-config-standard', // 配置stylelint拓展插件
      'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
      'stylelint-config-standard-scss', // 配置stylelint scss插件
      'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
      'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
      'stylelint-config-prettier', // 配置stylelint和prettier兼容
    ],
    overrides: [
      {
        files: ['**/*.(scss|css|vue|html)'],
        customSyntax: 'postcss-scss',
      },
      {
        files: ['**/*.(html|vue)'],
        customSyntax: 'postcss-html',
      },
    ],
    ignoreFiles: [
      '**/*.js',
      '**/*.jsx',
      '**/*.tsx',
      '**/*.ts',
      '**/*.json',
      '**/*.md',
      '**/*.yaml',
    ],
    /**
     * null  => 关闭该规则
     * always => 必须
     */
    rules: {
      'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
      'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
      'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
      'no-empty-source': null, // 关闭禁止空源码
      'selector-class-pattern': null, // 关闭强制选择器类名的格式
      'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
      'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
      'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
      'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
      'selector-pseudo-class-no-unknown': [
        // 不允许未知的选择器
        true,
        {
          ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改element默认样式的时候能使用到
        },
      ],
    },
  }
```

添加忽略文件` .stylelintignore`

```javascript
/node_modules/*
/dist/*
/html/*
/public/*
```

在`package.json`添加运行脚本，配置统一的prettier格式html，css和js

```json
"scripts": {
    "dev": "vite --open",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src",
    "fix": "eslint src --fix",
    "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
    "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix"
  },
```



# husky配置

husky：在代码提交之前触发`git hook`（git客户端钩子），自动执行`pnpm run format`命令来自动格式化代码

安装husky

```shell
pnpm install -D husky
```

初始化，会在根目录下生成一个`.husky`目录，在目录下会有个`pre-commit`文件，在这个文件里面的命令会在执行`git commit`的时候执行

```shell
npx husky-init
```

在`.husky/pre-commit`文件中添加如下命令：

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm run format
```



# commitlint配置

commitlint：统一commit规范信息

安装commitlint

```shell
pnpm add @commitlint/config-conventional @commitlint/cli -D
```

添加`commitlint.config.cjs`配置文件

```cjs
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
  },
}
```

在`package.json`中配置scripts命令

```json
"scripts": {
    "commitlint": "commitlint --config commitlint.config.cjs -e -V"
}
```

配置husky

```shell
npx husky add .husky/commit-msg
```

在生成的commit-msg文件中添加命令

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm commitlint
```



# 统一包管理工具为pnpm

创建`scripts/preinstall.js`

```javascript
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
  )
  process.exit(1)
}
```

配置命令

```json
"scripts": {
	"preinstall": "node ./scripts/preinstall.js"
}
```



# 集成Element Plus

https://element-plus.org/



# src别名配置

`vite.config.ts`

```tsx
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 相对路径别名配置，使用 @ 代替 src
      '@': path.resolve('./src'),
    },
  },
})

```

`tsconfig.json`

```json
{
  "compilerOptions": {
    ...=

    // 解析非相对模块的根地址
    "baseUrl": "./",
    // 路径映射，先对于baseUrl
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```



# 环境变量配置

在项目根目录下新建`.env.development`、`.env.test`、`.env.production`文件

定义环境变量

```properties
NODE_ENV="dev"
```

配置运行命令：`package.json`

```json
"scripts": {
    "build:test": "vue-tsc && vite build --mode test",
    "build:pro": "vue-tsc && vite build --mode production"
  }
```

获取环境变量

```js
console.log(import.meta.env)
```



# SVG图标配置

安装SVG依赖

```shell
pnpm install vite-plugin-svg-icons -D
```

`vite.config.ts`

```js
import { createSvgIconsPlugin } from '@vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ]
})
```

`src/main.ts`

```tsx
import 'virtual:svg-icons-register'
```

将svg文件放在文件夹中`src/assets/icons/phone.svg`

使用svg

```vue
<svg style="width:30px; height:30px">
	<use xlink:href="#icon-phone" fill="yellow"></use>
</svg>
```

封装组件，新建文件`components/SvgIcon/index.vue`

```vue
<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
// 接收父组件传递的参数
defineProps({
  prefix: {
    // xlink:href属性值前缀
    type: String,
    default: '#icon-',
  },
  // 图标名字
  name: String,
  // 颜色
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped></style>
```

使用组件

```vue
<template>
  <div>
    <svg-icon name="test" color="yellow"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style scoped></style>
```

封装注册为全局组件

`src/main.ts`

```tsx
import { createApp } from 'vue'
import App from './App.vue'

// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components'

// 创建应用实例对象
const app = createApp(App)

// 安装自定义插件
app.use(globalComponent)
// 将应用挂载到挂载点
app.mount('#app')
```

`src/components/index.ts`

```tsx
// 引入自定义组件
import SvgIcon from './SvgIcon/index.vue'

const globalComponents = { SvgIcon }

// 对外暴漏插件对象
export default {
  install(app) {
    Object.keys(globalComponents).forEach((key) => {
      app.component(key, globalComponents[key])
    })
  },
}
```



# 集成scss

使用scss

```scss
<style scoped lang="scss">
div {
  h1 {
    color: red;
  }
}
</style>
```

添加全局样式

`src/styles/reset.scss`

```scss
*,
*:after,
*:before {
  box-sizing: border-box;

  outline: none;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  font: inherit;
  font-size: 100%;

  margin: 0;
  padding: 0;

  vertical-align: baseline;

  border: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
  &:before,
  &:after {
    content: '';
    content: none;
  }
}

sub,
sup {
  font-size: 75%;
  line-height: 0;

  position: relative;

  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}

table {
  border-spacing: 0;
  border-collapse: collapse;
}

input,
textarea,
button {
  font-family: inhert;
  font-size: inherit;

  color: inherit;
}

select {
  text-indent: 0.01px;
  text-overflow: '';

  border: 0;
  border-radius: 0;

  -webkit-appearance: none;
  -moz-appearance: none;
}
select::-ms-expand {
  display: none;
}

code,
pre {
  font-family: monospace, monospace;
  font-size: 1em;
}
```

`src/styles/index.scss`

```scss
// 引入reset.scss
@import './reset.scss'
```

`src/styles/variables.scss`

```scss
// 设置scss全局变量
$my-color: rgb(0, 255, 42);
```

`src/main.ts`

```tsx
// 引入模板的全局样式
import '@/styles/index.scss'
```

`vite.config.ts`

```js
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";',
      },
    },
  },
})
```

使用全局样式变量

```vue
<template>
  <div>
    <h1>Hello VUE</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
div {
  h1 {
    color: $my-color;
  }
}
</style>
```



# mock数据

https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md

安装依赖

```shell
pnpm install -D vite-plugin-mock mockjs
```



