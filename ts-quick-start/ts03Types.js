// ================字面量================
// 此时a只能为10，不能赋其他值
var a;
// 使用 | 来连接多个值。此时b只能为male或者female，不能赋其他值
var b;
b = "male";
b = "female";
// b = "other"
// ================字面量================
// ================联合类型================
// 使用 | 来连接多个类型（联合类型）
var c;
c = false;
c = "str";
// c = 1
// ================联合类型================
// ================any================
// any 表示任意类型，一个变量设置类型为any表示对该变量关闭了ts的类型检测
var d;
d = 10;
d = 'hello';
d = false;
// 声明变量如果不指定类型，ts解析器自动判断变量类型为any（隐式any）
var e;
e = 10;
e = 'hello';
e = true;
// any变量可以赋值给任何类型的变量
c = e;
console.log(c);
// ================any================
// ================unknown================
// unknown表示未知类型
var f;
f = 10;
f = 'hello';
f = false;
// unknown是一个类型安全的any，不能像any一样赋值给任何类型的变量，需要进行类型判断或者类型断言
// c = f
// 类型判断
if (typeof f === "boolean") {
    c = f;
}
/*
    类型断言语法一：变量 as 类型
    类型断言语法二：<类型> 变量
*/
c = f;
c = f;
// ================unknown================
// ================void================
// void 用来表示空，以函数为例就表示没有返回值的函数
function fn() {
    console.log("Hello Void");
}
// ================void================
// ================never================
// never表示永远不会返回结果
function fn2() {
    throw new Error('Error1');
}
// ================never================
// ================object================
// object表示一个js对象
var obj;
obj = {};
obj = function () {
};
// 使用{}来指定对象中可以包含的属性。语法：{ k1:v1, k2:v2 } 
// 在属性后面加上?，表示属性为可选属性
// [props: string]: any 表示key为string类型，value为any类型
var person;
person = { name: "张三" };
person = { name: "李四", age: 18 };
person = { name: "王五", age: 18, gender: 'M', username: "wangwu" };
// lambda
var func;
func = function (num1, num2) {
    return (num1 + num2) + "5555";
};
var strResult = func(1, 2);
console.log("strResult=", strResult);
// 数组两种声明方式
var arr1;
e = ['a', 'b', 'c'];
var arr2;
arr2 = [1, 2, 3];
// 元组：固定长度的数组
var tulpe;
tulpe = ['str', 1];
// 枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var student;
student = {
    name: 'jho',
    gender: Gender.Male
};
console.log(student.gender === Gender.Male);
// ================object================
