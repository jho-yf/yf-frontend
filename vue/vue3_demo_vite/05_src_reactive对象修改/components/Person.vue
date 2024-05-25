<template>
    <div>
        <h1>汽车信息</h1>
        <h2>一辆{{ car.name }}车，价值{{ car.price }}w</h2>
        <button @click="changePrice">修改价格</button>&nbsp;
        <button @click="changeCar">修改汽车</button>
        <h1>游戏</h1>
        <ul>
            <li v-for="item in games" key="item.id">{{ item.name }}</li>
        </ul>
        <button @click="changeFirstGame">修改第一个游戏的名字</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { reactive } from 'vue'

    let car = reactive({
        name: 'BMW',
        price: 100,
        color: 'red'
    })
    console.log(car)

    let games = reactive([
        {
            id: '1',
            name: 'LOL',
            price: 100
        },
        {
            id: '2',
            name: 'CSGO',
            price: 200
        }
    ])
    console.log(games)

    function changePrice() {
        car.price += 10
    }

    function changeFirstGame() {
        games[0].name = 'LOL2'
    }

    function changeCar() {
        Object.assign(car, {
            name: 'Audi',
            price: 200
        })
    }
    
</script>
