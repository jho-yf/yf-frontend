// 描述对象类型
type myType = {
    name: string
    age: number

    func(): void
}

const obj: myType = {
    name: 'jho',
    age: 18,

    func(): void {
        console.log('do nothing');
    }
}

console.log(obj);
obj.func()


/*
    接口用于定义一个类结构
        用来定义一个类中应该包含哪些属性和方法，可以在定义类的时候限制类的结构
        也可以当作类型声明去使用
        接口之定义对象的结构，不考虑实际值
*/
interface myInterface {
    name: string
    age: number

    say(): void
}

interface myInterface {
    gender: boolean
}

const implObj: myInterface = {
    name: 'jho',
    age: 18,
    gender: false,

    say(): void {
        console.log('say something...')
    }
}

console.log(implObj)

// 定义类实现接口
class myClass implements myInterface {

    name: string
    age: number
    gender: boolean

    constructor(name: string, age: number, gender: boolean) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    say(): void {
        console.log('say something...')
    }

}
