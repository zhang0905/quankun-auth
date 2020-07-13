<template>
  <div id="app">
    <template v-if="isQiankun">
      <router-link to="/">用户认证</router-link> |
      <router-link to="/password">密码修改</router-link>
      <router-view />
    </template>
    <template v-else>
      <!-- 登陆后视图 -->
      <div v-if="hasToken" class="main-container">
        <!-- 左侧菜单区 -->
        <the-menu class="main-menu-box"></the-menu>
        <!-- 右侧视图 -->
        <div class="main-container-content">
          <!-- 上部导航区 -->
          <the-nav></the-nav>
          <!-- 子应用渲染区 -->
          <div class="main-container-view">
            <el-scrollbar class="wl-scroll">
              <div id="subapp-viewport" class="app-view-box">
                <router-view />
              </div>
            </el-scrollbar>
          </div>
        </div>
      </div>
      <!-- 非登录视图 -->
      <div v-else id="subapp-viewport" class="app-view-box">
        <Login></Login>
      </div>
    </template>
  </div>
</template>
<script>
import TheMenu from "./components/TheMenu.vue";
import TheNav from "./components/TheNav.vue";
import Login from "./components/Login.vue";

export default {
  name: "app",
  data() {
    return {
      hasToken: window.sessionStorage.getItem("token") ? true : false
    }
  },
  components: {
    TheMenu,
    TheNav,
    Login
  },
  computed: {
    isQiankun() {
      return this.$store.getters.is_qiankun;
    }
  },
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.main-container {
  display: flex;
  width: 100%;
  height: 100%;
}
.main-container-content {
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  > .main-container-view {
    padding: 8px;
    width: 100%;
    height: calc(100% - 60px);
    background: $main-base-color;
    box-sizing: border-box;
    > .wl-scroll {
      width: 100%;
      height: 100%;
      background: #fff;
      border-radius: 4px;
      .el-scrollbar__wrap {
        overflow-x: hidden;
      }
    }

    .app-view-box {
      width: 100%;
      padding: 12px;
      box-sizing: border-box;
    }
  }
}
</style>
