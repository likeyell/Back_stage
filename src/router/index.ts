import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "@/views/LoginView/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: LoginView,
  },
  {
    path: "/LoginView",
    name: "LoginView",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
