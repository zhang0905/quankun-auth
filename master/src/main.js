import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import store from './store';
import "./assets/js/http";
import "./mock/index";
// import components from "./components/index.js";

//引入样式组件
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/install';

Vue.use(ElementUI);

// Vue.use(components);


//引入qiankun注册的子应用
import dataInfo from './assets/js/register';


function vueRender() {
  Vue.config.productionTip = false;
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#container");
  return;
}
vueRender();

if (window.sessionStorage.getItem("token")) {
  dataInfo();
} 


