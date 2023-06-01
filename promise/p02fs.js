const fs = require('fs')

fs.readFile('./res/content.txt', (err, data) => {
    if (err) {
        throw err
    }
    console.log('直接调用', data.toString())
})

const pro = new Promise((resolve, reject) => {
    fs.readFile('./res/content1.txt', (err, data) => {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
})

pro.then(data => {
    console.log('promise调用', data.toString())
}, err => {
    console.log('promise调用', err)
})