<template>
    <div>
        <ul>
            <li v-for="news in newsList" key="news.id">
                <!-- 字符串拼接写法 -->
                <!-- <RouterLink :to="`/news/details/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->
                <RouterLink :to="{
                    name: 'details',
                    params: {
                        id: news.id,
                        title: news.title,
                        content: news.content
                    }
                }"> 
                    {{ news.title }}
                </RouterLink>
                &nbsp;&nbsp;
                <button @click="showNewsDetails(news)">查看新闻详情</button>
            </li>
        </ul>
        <div class="new-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { reactive } from 'vue';
    import { RouterView, RouterLink, useRouter } from 'vue-router';

    const newsList = reactive([
        {id: 1, title: '万千气象看广东', content: '晴天'},
        {id: 2, title: '六一儿童节', content: '儿童节'},
        {id: 3, title: '中国杯', content: '中国杯'},
    ])

    const router = useRouter();

    interface INews {
        id: string;
        title: string;
        content: string;
    }

    function showNewsDetails(news:INews) {
        router.push({
            name: 'details',
            params: {
                id: news.id,
                title: news.title,
                content: news.content
            }
        })
        // router.replace({
        //     name: 'details',
        //     params: {
        //         id: news.id,
        //         title: news.title,
        //         content: news.content
        //     }
        // })
    }

</script>
