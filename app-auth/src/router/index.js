import Vue from "vue";
import VueRouter from "vue-router";
import user from "../views/user.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "user",
    component: user
  },
  {
    path: "/user",
    name: "user",
    component: user
  },
  {
    path: "/password",
    name: "password",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "password" */ "../views/password.vue")
  }
];

// const router = new VueRouter({
//   routes
// });

export default routes;
