<<template>
    <div class="container">
        <Category title="食物">
            <h2 slot="center">无</h2>
            <a slot="footer" href="http://www.baidu.com">更多</a>
        </Category> 
        <Category title="电影">
            <img slot="center" src="https://avatars.githubusercontent.com/u/25262160?v=4" />
            <div slot="footer">
                <a href="http://www.baidu.com">百度搜素</a>&nbsp;&nbsp;&nbsp;
                <a href="http://www.baidu.com">豆瓣搜索</a>&nbsp;&nbsp;&nbsp;
                <a href="http://www.baidu.com">更多</a>
            </div>
        </Category> 
        <Category title="音乐">
            <template v-slot:center>
                <ul>
                    <li v-for="(item, index) in music" :key="index">{{item}}</li>
                </ul>
            </template>
        </Category> 
        <Category />
    </div>
</template>

<script>
    import Category from './components/Category.vue';
    export default {
        name: 'App',
        components: {
            Category,
        },
        data() {
            return {
                music: ["周杰伦","林俊杰"]
            };
        },
        methods: {
        }
    };
</script>

<style>
    .container {
        display: flex;
        justify-content: space-around;
    }
</style>