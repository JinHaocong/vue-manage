/*
 * @Author: Jin Haocong
 * @Date: 2022-08-15 14:21:22
 * @LastEditTime: 2022-08-15 22:27:51
 */
import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab.js'



Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        tab
    }
})