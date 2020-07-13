export default {
  namespaced: true,
  state: {
    is_collapse: false, // 折叠状态
    is_active: "1-1", //默认高亮
    menu: [] // 菜单数据
  },
  mutations: {
    // 推入用户菜单
    SET_MENU(state, data) {
      state.menu = data;
    },
    // 设置折叠状态
    SET_COLLAPSE_STATUS(state, data) {
      state.is_collapse = data;
    },
    // 设置高亮的状态
    SET_ACTIVE_STATUS(state, data) {
      state.is_active = data;
    }
  },
  actions: {
    // 推入用户菜单
    setMenu({ commit }, data) {
      commit('SET_MENU', data)
    },
    // 设置折叠状态
    setCollapseStatus({ commit }, data) {
      commit('SET_COLLAPSE_STATUS', data)
    },
    // 设置高亮状态
    setActiveStatus({ commit }, data) {
      commit('SET_ACTIVE_STATUS', data)
    }
  }
}