class Dog {

    name: string
    age: number

    // 构造函数
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    bark() {
        console.log(this.name, 'wangwang...');
    }

}

class Fish {

    // 可以直接将属性定义在构造函数中
    constructor(public name: string, public age: number) {
    }

}

const dog = new Dog('hujing', 18)
console.log(dog);
dog.bark()

const fish = new Fish('fishhhh~', 19)
console.log(fish)
