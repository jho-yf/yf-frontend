<<template>
    <div>
        <MyComponent/>
        <MyComponent2/>
        <MyComponent3/>
    </div>
</template>

<script>
    import MyComponent from './components/MyComponent.vue'
    import MyComponent2 from './components/MyComponent2.vue'
    import MyComponent3 from './components/MyComponent3.vue'

    export default {
        name: 'App',
        components: {MyComponent, MyComponent2, MyComponent3},
        data() {
            return {
            }
        }
    };
</script>