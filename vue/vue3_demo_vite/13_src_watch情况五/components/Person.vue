<template>
    <h1>情况四：监视reactive定义的对象类型数据的某个属性</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.cars.c1 }}, {{ person.cars.c2 }}</h2>
    <button @click="changeName">修改名字</button>&nbsp;
    <button @click="changeAge">修改年龄</button>&nbsp;
    <button @click="changeC1">修改第一台车</button>&nbsp;
    <button @click="changeC2">修改第二台车</button>&nbsp;
    <button @click="changeCar">修改所有车</button>
</template>

<script lang="ts" setup name="Person">
    import { reactive, watch } from 'vue'

    let person = reactive({
        name: 'zhangsan',
        age: 18,
        cars: {
            c1: "奔驰",
            c2: "宝马"
        }
    })

    function changeName() {
        person.name += 1
    }

    function changeAge() {
        person.age++
    }

    function changeC1() {
        person.cars.c1 = 'aodi'
    }

    function changeC2() {
        person.cars.c2 = 'dazong'
    }

    function changeCar() {
        person.cars = {
            c1: "奔驰1",
            c2: "宝马2"
        }
    }

    // 一次监听多个数据
    watch([
        () => person.name,
        () => person.cars.c1,
    ], (newValue, oldValue) => {
        console.log(newValue, oldValue)
    })
</script>
