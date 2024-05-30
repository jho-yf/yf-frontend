import {  ref } from 'vue'

export default function() {
    let sum = ref(0)

    function incr() {
        sum.value++
    }

    return {
        sum,
        incr
    }
}
