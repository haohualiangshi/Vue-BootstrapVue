/* eslint-disable no-unused-vars */
/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-10-29 14:54:10
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-02 10:52:46
 */
import { getVerifyCode, login, logout } from '@/api/user'
import { getToken, removeToken, setToken } from '@/utils/auth'
// import router from '@/router'

const state = {
    token: getToken(),
    name: getToken(),
    avatar: '',
    introduction: '',
    roles: [],
    alreadyLoginState: !!getToken(),
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    SET_ALREADY_LOGIN: (state, alreadyLoginState) => {
        state.alreadyLoginState = alreadyLoginState
    }
}

const actions = {

    login({ commit }, userInfo) {
        const { email, pwd } = userInfo
        return new Promise((resolve, reject) => {
            commit('SET_ALREADY_LOGIN', true);
            setToken(email);
            commit('SET_NAME', email.trim());
            resolve();
            // login({ phoneNumber: phoneNumber.trim(), verifyCode: verifyCode }).then(response => {
            //     const { data } = response
            //     // commit('SET_TOKEN', data.token)
            //     console.log(data);
            //     commit('SET_TOKEN', "9999999")
            //     // setToken(data.token)
            //     resolve()
            // }).catch(error => {
            //     reject(error)
            // })
        })
    },
    logout({ commit }, data) {
        return new Promise((resolve, reject) => {
            commit('SET_ALREADY_LOGIN', false);
            removeToken();
            resolve(data)
        })
    },
    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resolve()
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
