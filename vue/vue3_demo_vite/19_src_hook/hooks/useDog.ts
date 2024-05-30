import { onMounted, reactive, ref } from 'vue'
import axios from 'axios';

export default function() {
    let dogs = reactive([])

    async function addDog() {
        let result = await axios.get('https://dog.ceo/api/breeds/image/random');
        dogs.push(result.data.message)
    }

    onMounted(() => {
        addDog()
    })

    return { dogs, addDog }
}
