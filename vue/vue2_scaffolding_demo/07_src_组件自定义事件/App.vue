<<template>
    <div class="app">
        <h1>{{ title }}</h1>
        <!-- 通过父组件给子组件的props传递回调函数，实现子组件传递数据给父组件 -->
        <School :onNameReceived="onNameReceived" @click.native="show" />
        <hr>
        <!-- 通过父组件给子组件绑定一个自定义事件， 实现子组件传递数据给父组件 -->
        <Student name="张三" sex="男" @studentNameSend.once="onNameReceived" />
        <hr>
        <!-- 通过ref给子组件绑定一个ref，动态绑定自定义事件，实现子组件传递数据给父组件 -->
        <Student name="李四" sex="女" ref="student1" />
        <hr>
        <Student name="王五" sex="女" ref="student2" />
        <hr>
        <Student name="赵六" sex="男" ref="student3" />
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
            onNameReceived(name, ...params) {
                console.log(params)
                this.title = name
            },
            show() {
                alert('给组件绑定原生事件用@click.native="show"')
            }
        },
        mounted() {
            this.$refs.student1.$on('studentNameSend', this.onNameReceived)
            this.$refs.student2.$on('studentNameSend', () => {
                // 这里的this，指向App组件的VueComponent实例
                console.log(this)
            })
            this.$refs.student3.$on('studentNameSend', function (name, ...params) {
                // 这里的this，指向Student组件的VueComponent实例
                console.log(this)
            })
        }
    };
</script>

<style scoped>
    .app {
        background-color: #42b983;
        padding: 10px;
    }
</style>