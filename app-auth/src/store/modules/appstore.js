export default {
  namespaced: true,
  state: {
    msg: "",
    is_collapse: false, // 折叠状态
    is_qiankun: false
  },
  mutations: {
    // 设置父应用信息
    SET_MSG_VALUE(state, data) {
      state.msg = data;
    },
    // 设置折叠状态
    SET_COLLAPSE_STATUS(state, data) {
      state.is_collapse = data;
    },
    // 设置是否是qiankun环境
    SET_QIANKUN_VALUE(state, data) {
      state.is_qiankun = data;
    }
  },
  actions: {
    // 设置父应用信息
    setMsg({ commit }, data) {
      commit("SET_MSG_VALUE", data);
    },
    setQiankun({ commit }, data) {
      commit("SET_QIANKUN_VALUE", data);
    },
    // 设置折叠状态
    setCollapseStatus({ commit }, data) {
      commit('SET_COLLAPSE_STATUS', data)
    },
  }
};
