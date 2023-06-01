// 引入 path 包
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack中所有的配置信息都应该卸载module.exports中
module.exports = {
    
    mode: 'development',

    // 指定入口文件
    entry: "./src/index.ts",
    
    // 指定打包输出
    output: {
        // 指定打包文件所在目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的文件名
        filename: "bundle.js",
        environment: {
            // 打包不使用箭头函数
            arrowFunction: false,
            // 不适用const关键字
            const: false
        }
    },

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 指的是规则生效的文件，支持正则表达式
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置预定义环境
                            presets: [
                                [
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "88",
                                            "ie": "11"
                                        },

                                        // 指定corejs版本
                                        "corejs": "3",
                                        // 使用corejs的方式：usage表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            },

            // 设置less文件处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // 引入postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
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
    },


    devServer: {
        static: "./src"
    }

}