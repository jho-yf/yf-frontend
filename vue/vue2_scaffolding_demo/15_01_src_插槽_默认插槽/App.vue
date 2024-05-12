<<template>
    <div class="container">
        <Category title="食物">
            <h2>无</h2>
        </Category> 
        <Category title="电影">
            <img src="https://avatars.githubusercontent.com/u/25262160?v=4" />
        </Category> 
        <Category title="音乐">
            <ul>
                <li v-for="(item, index) in music" :key="index">{{item}}</li>
            </ul>
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