/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-10-29 14:52:07
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-01 19:47:34
 */
import Cookies from 'js-cookie'

const TokenKey = 'user-admin-token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
