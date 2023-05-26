// 定义类
class Person {

    // 定义实例属性
    name: string = 'jho'

    // 只读属性
    readonly height: number = 170
    
    // 定义静态属性（类属性）
    static age: number = 18

    // 静态只读属性
    static readonly weight = 60

    // 定义方法
    sayHello() {
        console.log('hello, i am', this.name)
    }

    // 定义静态方法
    static getWeight(): number {
        return Person.weight
    }

}

const person = new Person()

console.log(person)
console.log(person.name, Person.age, Person.weight)

person.name = 'tom'
console.log(person)

person.sayHello()
console.log('Person.getWeight()', Person.getWeight())

