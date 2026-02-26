import type { RouteRecordRaw } from "vue-router";

export interface RouteMeta {
  title?: string;
  requiresAuth?: boolean;
}

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
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
      {
        path: "demo",
        name: "Demo",
        component: () => import("@/views/demo/Demo.vue"),
      },
      {
        path: "error/:errorCode",
        name: "Error",
        component: () => import("@/views/error/Error.vue"),
        meta: { title: "错误页", requiresAuth: false },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    redirect: () => ({ name: "Error", params: { errorCode: "404" } }),
  },
];
