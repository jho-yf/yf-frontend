/**
 * 封装一个函数读取文件内容
 * 
 * @param {string} path 文件路径
 * @return promise对象
 */
function readFile(path) {
    return new Promise((resolve, reject) => {
        require('fs').readFile(path, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
} 


readFile('./res/content.txt').then(data => {
    console.log('成功', data.toString())
}, err => {
    console.log('失败', err)
})

readFile('./res/content.txt1111111111111').then(data => {
    console.log('成功', data.toString())
}, err => {
    console.log('失败', err)
})