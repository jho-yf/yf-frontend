<<template>
    <div>
        <Student name="张三" :age="18" />
        <Student name="李四" sex="女" :age="20" />
        <Student name="王五" sex="男" :age="22" />
    </div>
</template>

<script>
    import Student from './components/Student'

    export default {
        name: 'App',
        components: {Student},
    };
</script>