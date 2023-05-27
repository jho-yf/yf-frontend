// 定义类
class Person {

    // 定义实例属性
    public name: string = 'jho'

    // 只读属性
    public readonly height: number = 170
    
    // 定义静态属性（类属性）
    public static age: number = 18

    // 静态只读属性
    public static readonly weight = 60

    // 私有属性
    private _money: number = 10000

    // 子类可访问
    protected _job: string = 'coder'

    // 定义方法
    sayHello() {
        console.log('hello, i am', this.name)
    }

    // 定义静态方法
    static getWeight(): number {
        return Person.weight
    }

    // getter
    get money(): number {
        return this._money
    }

    // setter
    set money(money: number) {
        if (money < 0) {
            throw new Error('money不能小于0')
        }
        this._money = money
    }

}

const person = new Person()

console.log(person)
console.log(person.name, Person.age, Person.weight)

person.name = 'tom'
console.log(person)

person.sayHello()
console.log('Person.getWeight()', Person.getWeight())

person.money = 1
console.log(person.money)