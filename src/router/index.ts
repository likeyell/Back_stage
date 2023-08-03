import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "@/views/LoginView/LoginView.vue";
import result404 from "@/views/result404.vue";

const routes: Array<RouteRecordRaw> = [
  // 登录、注册
  {
    path: "/LoginView",
    name: "LoginView",
    component: LoginView,
    meta: {
      navigationDisplayHide: false,
      currentNavigationPage: "1",
    },
  },
  // 404
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: result404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
