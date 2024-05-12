<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyword" />
            &nbsp;
            <button @click="search">Search</button>
        </div>
    </section>
</template>

<script>
    export default {

        name: 'Search',
        data() {
            return {
                keyword: ''
            };
        },
        methods: {
            search() {
                this.$http.get(`https://api.github.com/search/users?q=${this.keyword}`).then(resp => {
                    this.$bus.$emit('searchResult', resp.data.items);
                });
            }
        }
    };
</script>