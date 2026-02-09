import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/blank",
    name: "Blank",
    component: () =>
      import("@/components/layouts/blank-layout/BlankLayout.vue"),
    redirect: "/login",
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/login/Login.vue"),
      },
    ],
  },
];
