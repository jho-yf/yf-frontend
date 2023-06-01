function rand(min, max) {
    return Math.ceil(Math.random() * (max - min + 1)) + min - 1
}

const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = rand(1, 100)
        if (num <= 30) {
            resolve(num)
        } else {
            reject(num)
        }
    }, 1000)
})

pro.then((num) => {
    console.log('恭喜！随机数为:', num)
}, (num) => {
    console.log('再接再厉！随机数为:', num)
})