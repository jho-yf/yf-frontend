// Person 接口
export interface IPerson {
    id: string
    name: string
    age: number
}

// 自定义类型
export type Persons = Array<IPerson>