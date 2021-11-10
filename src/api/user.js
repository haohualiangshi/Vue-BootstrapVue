/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-10-29 14:45:58
 * @LastEditors: ahao
 * @LastEditTime: 2021-10-30 16:39:27
 */
import request from '@/utils/request'

export function login(data) {
    return request({
        url: 'userLogin/getVerificationCode',
        method: 'post',
        data
    })
}
export function logout(data) {
    return request({
        url: 'userLogin/logout',
        method: 'post',
        data
    })
}
export function getVerifyCode(data) {

    return request({
        url: 'userLogin/getVerificationCode',
        method: 'post',
        data,
        // 使用form data格式
        transformRequest: [
            function (data) {
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                ret = ret.substring(0, ret.lastIndexOf('&'));
                return ret
            }
        ],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'lan': 'en'
        }
    })
}

