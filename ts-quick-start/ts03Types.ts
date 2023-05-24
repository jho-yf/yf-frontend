// ================字面量================

// 此时a只能为10，不能赋其他值
let a: 10

// 使用 | 来连接多个值。此时b只能为male或者female，不能赋其他值
let b: "male" | "female"
b = "male"
b = "female"
// b = "other"

// ================字面量================


// ================联合类型================

// 使用 | 来连接多个类型（联合类型）
let c: boolean | string
c = false
c = "str"
// c = 1

// ================联合类型================


// ================any================

// any 表示任意类型，一个变量设置类型为any表示对该变量关闭了ts的类型检测
let d: any
d = 10
d = 'hello'
d = false

// 声明变量如果不指定类型，ts解析器自动判断变量类型为any（隐式any）
let e
e = 10
e = 'hello'
e = true

// any变量可以赋值给任何类型的变量
c = e
console.log(c)

// ================any================

// ================unknown================

// unknown表示未知类型
let f: unknown
f = 10
f = 'hello'
f = false

// unknown是一个类型安全的any，不能像any一样赋值给任何类型的变量，需要进行类型判断或者类型断言
// c = f

// 类型判断
if (typeof f === "boolean") {
    c = f
}

/*
    类型断言语法一：变量 as 类型
    类型断言语法二：<类型> 变量
*/
c = f as boolean
c = <boolean> f

// ================unknown================

// ================void================

// void 用来表示空，以函数为例就表示没有返回值的函数
function fn(): void {
    console.log("Hello Void")
}

// ================void================


// ================never================

// never表示永远不会返回结果
function fn2(): never {
    throw new Error('Error1')
}

// ================never================


// ================object================

// object表示一个js对象
let obj: object
obj = {}
obj = function () {

}

// 使用{}来指定对象中可以包含的属性。语法：{ k1:v1, k2:v2 } 
// 在属性后面加上?，表示属性为可选属性
// [props: string]: any 表示key为string类型，value为any类型
let person: { name: string, age?:number, [props: string]: any }
person = { name: "张三" }
person = { name: "李四", age: 18 }
person = { name: "王五", age: 18, gender: 'M', username: "wangwu" }

// lambda
let func: (num1: number, num2: number) => string
func = function (num1: number, num2: number) {
    return (num1 + num2) + "5555";
}
let strResult = func(1, 2)
console.log("strResult=", strResult)

// 数组两种声明方式
let arr1: string[]
e = ['a', 'b', 'c']

let arr2: Array<number>
arr2 = [1, 2, 3]

// 元组：固定长度的数组
let tulpe: [string, number]
tulpe = [ 'str', 1 ]

// 枚举
enum Gender {
    Male = 0,
    Female = 1
}
let student: { name: string, gender: Gender }
student = {
    name: 'jho',
    gender: Gender.Male
}

console.log(student.gender === Gender.Male)

// & 表示同时
let animal: { name: string } & { age:  number }
animal = { name: "狗子", age: 18 }
console.log("animal=", animal)

// 类型别名
type myType = 1 | 2 | 3 | 4 | 5 | object | string | number;
let myObj1: myType
let myObj2: myType
let myObj3: myType

// ================object================



