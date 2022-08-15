/*
 * @Author: Jin Haocong
 * @Date: 2022-08-15 14:25:38
 * @LastEditTime: 2022-08-15 23:19:43
 */
export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: '/home',
                name: "HomePage",
                label: '首页',
                icon: 'home'
            }

        ],
        currentMenu: null
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },

        selectMenu(state, value) {
            if (value.name !== "HomePage") {
                state.currentMenu = value
                const result = state.tabsList.findIndex(item => item.name === value.name)
                if (result === -1) {
                    state.tabsList.push(value)
                }
            } else {
                state.currentMenu = null
            }
        },

        closeTag(state, value) {
            const result = state.tabsList.findIndex(item => item.name === value.name)
            state.tabsList.splice(result, 1)
        }
    }
}