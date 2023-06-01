const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts');
xhr.send()
// 处理响应结果
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('请求成功', xhr.responseText)
        } else {
            console.log('请求失败', xhr.status)
        }
    }
}

const pro = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts');
    xhr.send()
    // 处理响应结果
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.status)
            }
        }
    }
})

pro.then((response) => {
    console.log('请求成功', response)
}, (status) => {
    console.log('请求失败', status)
})