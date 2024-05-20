<<template>
    <div class="app">
        <h1>{{ title }}</h1>
        <School />
        <hr>
        <Student name="张三" sex="男" />
    </div>
</template>

<script>
    import Student from './components/Student'
    import School from './components/School'

    export default {
        name: 'App',
        data() {
            return {
                title: 'Hello Vue!'
            }
        },
        components: {Student, School},
        methods: {
            
        }
    };
</script>

<style scoped>
    .app {
        background-color: #42b983;
        padding: 10px;
    }
</style>