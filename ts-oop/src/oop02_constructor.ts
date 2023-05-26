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

const dog = new Dog('hujing', 18)
console.log(dog);
dog.bark()
