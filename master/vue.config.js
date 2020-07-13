const { port } = require("./package");

module.exports = {
  // lintOnSave: false,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        "vue$": "vue/dist/vue.js"
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/css/variables.scss";`
      }
    }
  }
};
