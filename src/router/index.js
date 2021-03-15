/*
 * @Author: your name
 * @Date: 2021-03-15 15:38:11
 * @LastEditTime: 2021-03-15 15:43:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vsCodeProjects/demo/vue-study/blogs-admin/src/router/index.js
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/about.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
