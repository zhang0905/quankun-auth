import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from "qiankun";
import store from "../../store";
import appStore from "./utils/app-store";
import axios from 'axios';
import "../../mock/index";
import Components from "../../components/index";
import utilJS from "./utils/index";

const appContainer = "#subapp-viewport";
let props = {
    data: store.getters,
    components: Components,
    utils: utilJS
}
const dataInfo = () => {
    axios.get("/userInfo2")
      .then((response) => {
          let res = response.data;
        if (res.meta.status === 200) {
            store.dispatch('menu/setMenu', res.data);
            qianKunStart(res.data);   
        }
      })
      .catch((reject) => {
        console.log(reject);
      })
}
const qianKunStart = (list) => {
    let apps = []; // 子应用数组盒子
    let defaultApp = null; // 默认注册应用路由前缀
    let isDev = process.env.NODE_ENV === 'development'; // 根据开发环境|线上环境加载不同entry
    list.forEach(i => {
        apps.push({
        name: i.module,
        entry: isDev ? i.devEntry : i.depEntry,
        container: appContainer,
        activeRule: i.routerBase,
        props: { ...props, routes: i.data, routerBase: i.routerBase }
        })
        if (i.defaultRegister) defaultApp = i.routerBase;
    });
    //  注册子应用
    registerMicroApps(
        apps,
        {
            beforeLoad: [
                app => {
                    console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
                },
            ],
            beforeMount: [
                app => {
                    console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
                },
            ],
            afterUnmount: [
                app => {
                    console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
                },
            ],
        },
    )
    
    /**
       * @name 设置默认进入的子应用
       * @param {String} 需要进入的子应用路由前缀
       */
      setDefaultMountApp(defaultApp + '/');
    
      /**
       * @name 启动微前端
       */
      start();
    
      /**
       * @name 微前端启动进入第一个子应用后回调函数
       */
      runAfterFirstMounted(() => { });
    
      /**
     * @name 启动qiankun应用间通信机制
     */
      appStore(initGlobalState);    
}
export default dataInfo;


