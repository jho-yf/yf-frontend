<template>
  <div>
    <h1>人员列表</h1>
    <h1>Count组件总数：{{ count }}</h1>
    <input type="text" placeholder="输入名字" v-model="name">&nbsp;&nbsp;
    <button @click="add">添加</button>&nbsp;&nbsp;
    <button @click="addFromServer">从服务器添加</button>
    <ul>
      <li v-for="p in persons" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
    import { nanoid } from 'nanoid';
    import { mapState, mapMutations } from 'vuex';

    export default {
    name: 'Person',

    data() {
        return {
            name: '',
            persons: this.$store.state.personScope.persons
        };
    },

    computed: {
        ...mapState('countScope', ['count'])
    },

    methods: {
        ...mapMutations('personScope', ['addPerson']),
        add() {
            const p = {
                id: nanoid(),
                name: this.name
            }
            this.name = ''
            this.addPerson(p)
        },
        addFromServer() {
            this.$store.dispatch('personScope/addFromServer')
        }
    },
    };
</script>