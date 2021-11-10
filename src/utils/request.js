/*
 * @Descripttion: 对axios进行二次封装并添加拦截
 * @version: 
 * @Author: ahao
 * @Date: 2021-10-29 12:17:33
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-02 21:55:23
 */
import axios from 'axios'
// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        console.log(response)
        const res = response.data
        if (res.code !== 200) {


            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug

        return Promise.reject(error)
    }
)

export default service
