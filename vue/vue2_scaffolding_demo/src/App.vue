<<template>
    <div id="root">
        <div class="todo-container">
            <h1>Todo List</h1>
            <div class="todo-wrap">
                <MyHeader @addTodo="addTodo"></MyHeader>
                <MyList :todoList="todoList" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
                <MyFooter :todoList="todoList" @clearAllDoneTodo="clearAllDoneTodo" @checkAllTodo="checkAllTodo"></MyFooter>
            </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from './components/MyHeader.vue'
    import MyFooter from './components/MyFooter'
    import MyList from './components/MyList'

    export default {
        name: 'App',
        components: {MyHeader, MyFooter, MyList},
        data() {
            return {
                todoList: JSON.parse(localStorage.getItem('todoList')) || []
            }
        },
        methods: {
            addTodo(todo) {
                this.todoList.unshift(todo)
            },
            checkTodo(id) {
                this.todoList.forEach((item) => {
                    if (item.id === id) {
                        item.done = !item.done
                    }
                })
            },
            deleteTodo(id) {
                this.todoList = this.todoList.filter(item => item.id !== id)
            },
            updateTodo(id, title) {
                this.todoList.forEach((item) => {
                    if (item.id === id) {
                        item.title = title
                    }
                })
            },
            checkAllTodo(isChecked) {
                this.todoList.forEach(todo => todo.done = isChecked)
            },  
            clearAllDoneTodo() {
                this.todoList = this.todoList.filter(item => !item.done)
            }
        },
        watch: {
            todoList: {
                deep: true,
                handler: function (val) {
                    localStorage.setItem('todoList', JSON.stringify(val))
                }
            }
        },
        mounted() {
            this.$bus.$on('todoChecked', this.checkTodo)
            this.$bus.$on('deleteTodo', this.deleteTodo)
            this.$bus.$on('updateTodo', this.updateTodo)
        },
        beforeDestroy() {
            this.$bus.$off('todoChecked')
            this.$bus.$off('deleteTodo')
            this.$bus.$off('updateTodo')
        }
    };
</script>

<style>
    /* base */
    body {
        background-color: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-edit {
        color: #fff;
        background-color: skyblue;
        border: 1px solid rgb(103, 165, 189);
        margin-right: 5px;
    }

    .btn-danger {
        color: #fff;
        background-color: #d9534f;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }
    
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>