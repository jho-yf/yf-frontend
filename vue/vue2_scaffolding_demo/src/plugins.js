export default {
    install(Vue, str, num) {
        console.log(str, num)
        
        Vue.filter('mySlice', function(value) {
            return value.slice(0, 4)
        })

        Vue.directive('uppercase', {
            bind(el, binding) {
                el.textContent = binding.value.toUpperCase()
            },
        });
    }
}