/*
 * @Author: Jin Haocong
 * @Date: 2022-08-15 16:07:07
 * @LastEditTime: 2022-08-15 21:14:54
 */
import Mock from 'mockjs'

import homeApi from './mockServeData/home'

Mock.mock('/home/getData', homeApi.getStatisticalData)