
<template>
  <div>
    <p>消息ID: {{ this.$route.params.id }}</p>
    <p>消息: {{ this.$route.query.title }}</p> 
  </div>
</template>

<script>
    export default {
        name: 'Details',
        mounted() {
            console.log(this.$route.query);
        },
    };
</script>