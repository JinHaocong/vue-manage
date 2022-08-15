/*
 * @Author: Jin Haocong
 * @Date: 2022-08-12 09:32:28
 * @LastEditTime: 2022-08-15 21:08:11
 */
// 二次封装axios 拦截器

import axios from 'axios'
import config from '../config/index'
// 设置配置 根据开发 和 生产环境不一样 
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
class HttpRequst {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    //获取设置文件
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            header: {}
        }
        return config
    }
    //拦截器
    interceptors(instance) {
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            console.log('拦截处理请求');
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        instance.interceptors.response.use(function (response) {
            console.log('处理响应', response);
            // 对响应数据做点什么
            return response.data;
        }, function (error) {
            console.log('处理响应', error);
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
    // {
    //   baseURL:'/rApi'
    // }
    request(options) {
        // 请求
        // /api/getList  /api/getHome
        const instanse = axios.create()
        // 技巧
        // /api // api1
        options = { ...(this.getInsideConfig()), ...options }
        // console.log(options);
        this.interceptors(instanse)
        return instanse(options)
    }
}

export default new HttpRequst(baseUrl)