import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Auth/loginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Auth/registerView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard/indexPage.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
