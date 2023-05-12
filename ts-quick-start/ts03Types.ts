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

