# Promise

JS的异步解决方案。从语法上看，Promise是一个构造函数。从功能上看，Promise对用用于封装一个异步操作并可以获取其成功或失败的结果。

## 异步编程

fs 文件操作

```javascript
require('fs').readFile('./index.html', (err, data) => {})
```

ajax

```java
$.get('/server', (data) => {})
```

定时器

```javascript
setTimeout(()=>{}, 200)
```

数据库操作