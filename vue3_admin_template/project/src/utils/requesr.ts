import axios from 'axios'
import { ElMessage } from 'element-plus'

// 基础配置
const request = axios.create({
  baseURL: import.meta.env.BASE_API,
  timeout: 5000,
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use(
  (resp) => {
    return resp.data
  },
  (err) => {
    let msg = ''
    const status = err.response.status
    switch (status) {
      case 401:
        msg = 'Token过期'
        break
      case 403:
        msg = '无权限'
        break
      case 404:
        msg = '访问资源不存在'
        break
      case 500:
        msg = '服务器异常'
        break
      default:
        msg = '未知异常'
        break
    }
    // 提示错误信息
    ElMessage({
      type: 'error',
      message: msg,
    })

    return Promise.reject(err)
  },
)

export default request
