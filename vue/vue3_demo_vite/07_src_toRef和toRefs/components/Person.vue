<template>
    <div>
        <h2>姓名：{{ person.name }}, {{ name }}</h2>
        <h2>年龄：{{ person.age }}, {{ age }}, {{ age1 }}</h2>
        <button @click="changeName">修改姓名</button>&nbsp;
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { reactive, toRefs, toRef } from 'vue'

    let person = reactive({
        name: 'Tom',
        age: 18,
    })

    // toRefs() 方法可以将响应式对象转换为普通对象，普通对象中的每个属性都是指向响应式对象相应属性的引用。
    let {name, age} = toRefs(person)

    // toRef() 方法可以将响应式对象中的某个属性转换为普通对象，普通对象中的属性指向响应式对象相应属性的引用。
    let age1 = toRef(person, 'age')

    console.log(name, age, age1)

    function changeName() {
        name.value += "m"
    }

    function changeAge() {
        age.value += 1
    }
    
</script>
