import type { RouteMeta, Router } from "vue-router";
import { useAuthStore } from "../store/auth";

export const checkAuth = (router: Router) => {
  router.beforeEach((to, _, next) => {
    const authStore = useAuthStore();
    if (authStore.isAuthenticated) {
      next();
      return;
    }
    const meta = to.meta as RouteMeta;
    if (meta.requiresAuth === false) {
      next();
    } else {
      next({ name: "Login" });
    }
  });
};
