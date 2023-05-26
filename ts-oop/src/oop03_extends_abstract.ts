// 抽象类
abstract class Animal {

    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // 抽象方法
    abstract sayHello(): void

}

class Bird extends Animal {

    fly(): void {
        console.log(`${this.name} fly...`)
    }

    sayHello(): void {
        console.log(`jijijiji~`)
    }

}

class Cat extends Animal {

    height: number

    constructor(name: string, age: number, height: number) {
        super(name, age)
        this.height = height
    }

    run(): void {
        console.log(`${this.name} run...`)
    }

    sayHello(): void {
        console.log(`maomaomao~`)
    }

}

const cat = new Cat('cat1', 1, 20)
cat.run()
cat.sayHello()

const bird = new Bird('bird1', 10)
bird.fly()
bird.sayHello()