<<template>
    <div class="container">
        <Category title="无序列表">
            <template scope="data">
                <ul>
                    <li v-for="(item, index) in data.games" :key="index">{{ item }}</li>
                </ul>
            </template>
        </Category>
        <Category title="有序列表">
            <template scope="{ games }">
                <ol>
                    <li v-for="(item, index) in games" :key="index">{{ item }}</li>
                </ol>
            </template>
        </Category>
        <Category title="H6">
            <template scope="{ games }">
                <h6 v-for="(item, index) in games" :key="index">{{ item }}</h6>
            </template>
        </Category>
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