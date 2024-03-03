export const myMixin = {
    data() {
        return {
            var: 1
        }
    },
    methods: {
        showName() {
            alert(this.name);
        }
    },
    mounted() {
        console.log('mixin mounted');
    },
}