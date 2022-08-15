/*
 * @Author: Jin Haocong
 * @Date: 2022-08-15 14:25:38
 * @LastEditTime: 2022-08-15 14:35:29
 */
export default {
    state: {
        isCollapse: false
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}