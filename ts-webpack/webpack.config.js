// 引入 path 包
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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

    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            // "title": "Hello~~~"
            // 指定网页模板
            "template": "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],

    // 用于设置应用模块，凡是以ts和js结尾的文件都可以作为引用模块使用
    resolve: {
        extensions: ['.ts', '.js']
    }

}