<template>
    <div>
        姓：<input type="text" v-model="firstName">
        <br>
        名：<input type="text" v-model="lastName">
        <br>
        全名：<span>{{ fullName }}</span>
        <br>
        全名：<span>{{ fullName2 }}</span>
        <br>
        <button @click="changeFullName2">修改全名</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref, computed } from 'vue'

    let firstName = ref('zhang')
    let lastName = ref('san')

    // 计算属性，只读不可修改
    const fullName = computed(() => {
        return firstName.value + ' ' + lastName.value
    })
    console.log(fullName)

    let fullName2 = computed({
        get: () => {
            return firstName.value + '-' + lastName.value
        },
        set: (value) => {
            console.log('setter invoke', value)
            const [str1, str2] = value.split('-')
            firstName.value = str1
            lastName.value = str2
        }
    })

    function changeFullName2() {
        fullName2.value = 'li-si'
    }

</script>
