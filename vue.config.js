/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2021-10-25 14:18:19
 * @LastEditors: ahao
 * @LastEditTime: 2021-10-31 16:09:27
 */
const name = 'vue publive' // page title
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js')
module.exports = {
    publicPath: './',
    outputDir: 'official',
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('min-image')
            .test(/\.(png|jpe?g|gif)(\?.*)?$/)
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({ disable: process.env.NODE_ENV == 'development' ? true : false })//此处为ture的时候不会启用压缩处理,目的是为了开发模式下调试速度更快,网上错误示例直接写为disable:true,如果不去查看文档肯定是要被坑的
            .end()
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: bootstrapSassAbstractsImports.join('\n')
            },
            scss: {
                additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n')
            }
        }
    }
}