import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "@/views/LoginView/LoginView.vue";
import indexView from "@/views/indexView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: LoginView,
  },
  // 登录、注册
  {
    path: "/LoginView",
    name: "LoginView",
    component: LoginView,
  },
  // 首页
  {
    path: "/indexView",
    name: "indexView",
    component: indexView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
