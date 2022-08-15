// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let List = []
export default {
    getStatisticalData: () => {
        //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            code: 20000,
            data: {
                // 饼图
                videoData: [
                    {
                        name: '小米',
                        value: Mock.Random.float(1000, 5000, 0, 0),
                    },
                    {
                        name: '苹果',
                        value: Mock.Random.float(1000, 5000, 0, 0),
                    },
                    {
                        name: 'vivo',
                        value: Mock.Random.float(1000, 5000, 0, 0),
                    },
                    {
                        name: 'oppo',
                        value: Mock.Random.float(1000, 5000, 0, 0),
                    },
                    {
                        name: '魅族',
                        value: Mock.Random.float(1000, 5000, 0, 0),
                    },
                    {
                        name: '三星',
                        value: Mock.Random.float(1000, 5000, 0, 0),
                    }
                ],
                // 柱状图
                userData: [
                    {
                        date: '周一',
                        new: Mock.Random.float(1, 800, 0, 0),
                        active: Mock.Random.float(1, 800, 0, 0)
                    },
                    {
                        date: '周二',
                        new: Mock.Random.float(1, 800, 0, 0),
                        active: Mock.Random.float(1, 800, 0, 0)
                    },
                    {
                        date: '周三',
                        new: Mock.Random.float(1, 800, 0, 0),
                        active: Mock.Random.float(1, 800, 0, 0)
                    },
                    {
                        date: '周四',
                        new: Mock.Random.float(1, 800, 0, 0),
                        active: Mock.Random.float(1, 800, 0, 0)
                    },
                    {
                        date: '周五',
                        new: Mock.Random.float(1, 800, 0, 0),
                        active: Mock.Random.float(1, 800, 0, 0)
                    },
                    {
                        date: '周六',
                        new: Mock.Random.float(1, 800, 0, 0),
                        active: Mock.Random.float(1, 800, 0, 0)
                    },
                    {
                        date: '周日',
                        new: Mock.Random.float(1, 800, 0, 0),
                        active: Mock.Random.float(1, 800, 0, 0)
                    }
                ],
                // 折线图
                orderData: {
                    date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
                    data: List
                },
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22000
                    },
                    {
                        name: 'vivo',
                        todayBuy: 300,
                        monthBuy: 2200,
                        totalBuy: 24000
                    },
                    {
                        name: '苹果',
                        todayBuy: 800,
                        monthBuy: 4500,
                        totalBuy: 65000
                    },
                    {
                        name: '小米',
                        todayBuy: 1200,
                        monthBuy: 6500,
                        totalBuy: 45000
                    },
                    {
                        name: '三星',
                        todayBuy: 300,
                        monthBuy: 2000,
                        totalBuy: 34000
                    },
                    {
                        name: '魅族',
                        todayBuy: 350,
                        monthBuy: 3000,
                        totalBuy: 22000
                    }
                ]
            }
        }
    }
}