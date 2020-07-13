const getters = {
  msg: state => state.appstore.msg,
  is_qiankun: state => state.appstore.is_qiankun,
  is_collapse: state => state.appstore.is_collapse // 折叠状态
};

export default getters;
