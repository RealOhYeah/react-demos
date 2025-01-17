/*
 * @Author: Oh...Yeah!!! 614988210@qq.com
 * @Date: 2024-10-09 17:27:06
 * @LastEditors: Oh...Yeah!!! 614988210@qq.com
 * @LastEditTime: 2024-10-11 16:52:03
 * @FilePath: \react-jike\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import { clearToken, getToken } from './token'
import router from '@/router'
const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/',
  timeout: 5000
})
 
// 添加请求拦截器
// 添加请求拦截器
http.interceptors.request.use(config => {
  // if not login add token
  const token = getToken()
  if (token) {
    // 在请求头中添加token（）
    
    // 作用是将一个名为Authorization的HTTP请求头设置为包含一个Bearer令牌的字符串。具体来说，它将token变量的值插入到字符串Bearer 之后，并将结果赋值给config.headers.Authorization。
    config.headers.Authorization = `Bearer ${token}`
    
  }
  return config
})

// 添加响应拦截器
http.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么

  console.dir(error)
  if (error.response.status === 401) {
    clearToken()
    router.navigate('/login')
  }

  return Promise.reject(error)
})

export { http }