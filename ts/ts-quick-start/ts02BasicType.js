// 声明变量，同时指定它的类型
var num;
var str;
num = 0;
num = 1;
str = "Hello TS";
// 赋值为其他类型的时候，代码异常
// num = "aaa"
// str = 0
// 声明变量并赋值
var bool1 = true;
var bool2 = false;
// 函数声明类型
function sum(num1, num2) {
    return num1 + num2;
}
var result = sum(1, 99);
console.log(result);
