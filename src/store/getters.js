/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-10-29 14:54:10
 * @LastEditors: ahao
 * @LastEditTime: 2021-10-29 20:52:21
 */
const getters = {
    token: state => state.user.token,
    name: state => state.user.name,
    alreadyLoginState: state => state.user.alreadyLoginState
}
export default getters
