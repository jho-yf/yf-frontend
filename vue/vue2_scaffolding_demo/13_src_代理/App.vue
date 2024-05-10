<<template>
    <div id="root">
        <button @click="getServer1Info">获取Server1信息</button>
        <br>
        <br>
        <button @click="getServer2Info">获取Server2信息</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'App',
        methods: {
            getServer1Info() {
                axios.get('http://localhost:8080/server1/info').then(
                    resp => {
                        console.log(resp.data)
                    }
                )
            },
            getServer2Info() {
                axios.get('http://localhost:8080/server2/info').then(
                    resp => {
                        console.log(resp.data)
                    }
                )
            }
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