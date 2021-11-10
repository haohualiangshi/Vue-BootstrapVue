/*
 * @Descripttion: 用户信息的接口数据
 * @version: 
 * @Author: ahao
 * @Date: 2021-11-01 11:29:16
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-01 14:46:40
 */
import Mock from 'mockjs';
const getVerificationCode = {
    url: process.env.VUE_APP_BASE_API + '/userLogin/getVerificationCode',
    type: 'post',
    response: () => {
        console.log(" getVerificationCode response");
        return {
            code: 200,
            data: {
                code: Mock.mock('@string("number", 6)')
            }
        }
    }
};

export default {
    getVerificationCode
}