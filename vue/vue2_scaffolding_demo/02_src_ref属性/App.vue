<<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM" ref="btn">点我展示DOM</button>
        <School ref="school" />
    </div>
</template>

<script>
    import School from './components/School'

    export default {
        name: 'App',
        components: {School},
        data() {
            return {
                msg: 'Hello Vue!'
            }
        },
        methods: {
            showDOM() {
                console.log(this.$refs)
                console.log(this.$refs.title)
                console.log(this.$refs.btn)
                console.log(this.$refs.school)
            }
        }
    };
</script>