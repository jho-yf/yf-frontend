import mitt from 'mitt'

// emitter 用于绑定事件、触发事件
const emitter = mitt()

// 绑定事件
emitter.on('event1', (e) => {
    console.log('event1 received...', e)
})

let num = 0
setInterval(() => {
    // 触发事件
    emitter.emit('event1', { num: num++ })
}, 1000);


setTimeout(() => {
    // 移除事件
    console.log('所有事件', emitter.all)
    console.log('event1事件解绑')
    emitter.off('event1')
}, 10000);

export default emitter