import { customRef } from 'vue';

export default function(value:string, delay:number) {
    let timer:number
    let msg = customRef((track, trigger) => {
        return {
            get: () => {
                console.log('get invoked')
                // 跟踪msg,一旦msg变化就进行更新
                track()
                return value.toUpperCase()
            },
            set: (v:string) => {
                console.log('set invoked')
                clearTimeout(timer)
                timer = setTimeout(() => {
                    value = v
                    // 通知vue,msg数据变化了
                    trigger()
                }, delay)        
            }
        }
    })
    return { msg }
}
