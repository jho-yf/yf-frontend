import axios from "axios"
import { nanoid } from "nanoid"

export default {
    namespaced: true,
    state: {
        persons: []
    },
    actions: {
        addFromServer(ctx) {
            axios.get('http://localhost:8080/data.txt').then(
                response => {
                    ctx.commit('addPerson', {id: nanoid(), name: response.data})
                }
            )
        }
    },
    mutations: {
        addPerson(state, value) {
            state.persons.unshift(value)
        }
    }
}