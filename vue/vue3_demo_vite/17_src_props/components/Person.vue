<template>
    <ul>
        <li v-for="item in list" :key="item.id">
            {{ item.name }} - {{ item.age }}
        </li>
    </ul>
    {{ msg }}
</template>

<script lang="ts" setup name="Person">
    import { defineProps,withDefaults } from 'vue';
    import { type Persons } from '@/types';

    // 接收props
    // let props = defineProps(['list'])
    // console.log(props)

    // 接收props并限制类型
    // let props = defineProps<{list:Persons}>()
    // console.log(props)
   
    // 接收props + 限制类型 + 限制必要性 + 默认值
    let props = withDefaults(defineProps<{
        list: Persons,
        msg?: string,
    }>(), {
        msg: () => 'hello',
    })
    console.log(props)
</script>
