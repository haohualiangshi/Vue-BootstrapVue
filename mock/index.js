/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-01 11:28:33
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-01 15:19:36
 */
// index.js
const Mock = require('mockjs');
const mockFiles = require.context('./modules', false, /\.js$/);
let mocks = [];
mockFiles.keys().forEach(key => {
    for (let item in mockFiles(key).default) {
        mocks.push(mockFiles(key).default[item])
    }
})

mocks.forEach(item => {
    Mock.mock(item.url, item.type, item.response)
})