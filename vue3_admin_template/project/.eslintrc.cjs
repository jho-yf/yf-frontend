module.exports = {
  // 工作环境
  env: {
    browser: true, // 浏览器端
    es2021: true, // es2021
    node: true,
    jest: true,
  },
  // 规则继承：全部规则默认关闭
  extends: [
    // 开启推荐规则
    "eslint:recommended",
    // 使用TS语法规则
    "plugin:@typescript-eslint/recommended",
    // 使用vue3语法规则
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
  ],
  // 为特定类型的文件指定处理器
  overrides: [],
  // 解析器选项
  parserOptions: {
    // 校验ECMA最新版本
    ecmaVersion: "latest",
    // 指定TS解析器
    // Esprima                      默认解析器
    // Babel-ESLint                 babel解析器
    // @typescript-eslint/parser    TS解析器
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 第三方插件，在使用插件之前必须用`npm`命令安装
  plugins: ["@typescript-eslint", "vue"],
  /*
     eslint规则 
        "off" 或 0      表示关闭规则
        "warn" 或 1     表示打开的规则作为警告（不影响代码执行）
        "error" 或 2    表示规则作为一个错误（代码不能执行，界面报错）
    
     */
  rules: {
    // eslint (https://eslint.org/docs/latest/use/configure/rules)
    // 要求使用 let 或 const 而不是 var
    "no-var": "error",
    // 不允许多个空行
    "no-multiple-empty-lines": ["warn", { max: 1 }],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 禁止空余的多行
    "no-unexpected-multiline": "error",
    // 禁止不必要的转义字符
    "no-useless-escape": "off",

    // typeScript (https://typescript-eslint.io/rules)
    // 禁止定义未使用的变量
    "@typescript-eslint/no-unused-vars": "error",
    // 禁止使用 @ts-ignore
    "@typescript-eslint/prefer-ts-expect-error": "error",
    // 禁止使用 any 类型
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    // 禁止使用自定义 TypeScript 模块和命名空间。
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/semi": "off",

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    // 要求组件名称始终为 “-” 链接的单词
    "vue/multi-word-component-names": "off",
    // 防止<script setup>使用的变量<template>被标记为未使用
    "vue/script-setup-uses-vars": "error",
    // 不允许组件 prop的改变
    "vue/no-mutating-props": "off",
    // 对模板中的自定义组件强制执行属性命名样式
    "vue/attribute-hyphenation": "off",
  },
};
