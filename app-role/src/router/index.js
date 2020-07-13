import Vue from "vue";
import VueRouter from "vue-router";
import front from "../views/front.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "front",
    component: front
  },
  {
    path: "/front",
    name: "front",
    component: front
  },
  {
    path: "/back",
    name: "back",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "back" */ "../views/back.vue")
  }
];

// const router = new VueRouter({
//   routes
// });

export default routes;
