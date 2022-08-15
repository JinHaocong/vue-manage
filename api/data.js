/*
 * @Author: Jin Haocong
 * @Date: 2022-08-15 15:55:03
 * @LastEditTime: 2022-08-15 17:15:17
 */
import axios from "./axios";

export const getMenu = (param) => {
    return axios.request({
        url: '/permission/getMenu',
        method: "post",
        data: param
    })
}

export const getData = () => {
    return axios.request({
        url: '/home/getData',
        method: "get"
    })
}