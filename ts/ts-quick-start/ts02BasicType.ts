// 声明变量，同时指定它的类型
let num: number
let str: string

num = 0
num = 1

str = "Hello TS"

// 赋值为其他类型的时候，代码异常
// num = "aaa"
// str = 0

// 声明变量并赋值
let bool1: boolean = true
// 省略类型声明，自动推断类型
let bool2 = false

// 函数声明类型
function sum(num1: number, num2: number): number {
    return num1 + num2
}
let result = sum(1, 99);
console.log(result);


