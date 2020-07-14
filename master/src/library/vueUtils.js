function changeStr(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // 当前路径  是否匹配下面的文件   查找什么样的的文件
  // keys()返回上下模块匹配到的数组
  const requireComponent = require.context('./', false, /\.vue$/);
  const install = (Vue) => {
    requireComponent.keys().forEach(fileName => {
      // 获取第i个
      let config = requireComponent(fileName);
      console.log(config);
      let componentName = changeStr(
        fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
      )
      console.log(componentName);
      Vue.component(componentName, config.defalut || config);
    });
  }
  
  export default {
    install
  };