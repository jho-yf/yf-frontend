<template>
    666
</template>

<script lang="ts" setup name="Person">
    import { type IPerson, type Persons } from '@/types'

    let person:IPerson = { id: '1', name: '张三', age: 18 }
    console.log(person)

    let personList:Array<IPerson> = [
        { id: '1', name: '张三', age: 18 },
        { id: '2', name: '李四', age: 19 },
        { id: '3', name: '王五', age: 20 },
    ]
    console.log(personList)

    let personList2:IPerson[] = [
        { id: '1', name: '张三', age: 18 },
        { id: '2', name: '李四', age: 19 },
        { id: '3', name: '王五', age: 20 },
    ]
    console.log(personList2)

    let personList3:Persons = [
        { id: '1', name: '张三', age: 18 },
        { id: '2', name: '李四', age: 19 },
        { id: '3', name: '王五', age: 20 },
    ]
    console.log(personList3)
</script>
