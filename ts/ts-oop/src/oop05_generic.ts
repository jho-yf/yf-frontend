// 泛型函数
function fn<T>(a: T): T {
    return a;
}

function fn2<T, R>(t: T, r: R): R {
    console.log(t)
    return r
}

// 不指定泛型，自动推断返回值类型
console.log(fn(10))
console.log(typeof fn(10))

// 指定泛型
console.log(fn<string>('hello'))
console.log(typeof fn<string>('world'))

console.log(fn2<number, string>(1, 'str'))

interface Inter {
    iLength: number
}

function fn3<T extends Inter>(inter: T): void {
    console.log('length', inter.iLength);
}

fn3({
    iLength: 10
})


// 泛型类
interface InterA<T> {

    name: T

}

class MyClass implements InterA<string> {
    
    constructor(public name: string) {

    }

}

class MyClass2 implements InterA<number> {

    constructor(public name: number) {

    }

}

class MyClass3<T> {

    constructor(public name: T) {

    }

}

const myObj1 = new MyClass3('jho')
console.log(typeof myObj1.name)
const myObj2 = new MyClass3(1)
console.log(typeof myObj2.name)
