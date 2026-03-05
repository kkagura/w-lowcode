import type { RouteMeta, Router } from "vue-router";
import { useAuthStore } from "../store/auth";

export const checkAuth = (router: Router) => {
  router.beforeEach(async (to, _, next) => {
    const meta = to.meta as RouteMeta;
    const authStore = useAuthStore();
    if (authStore.token) {
      if (!authStore.isAuthenticated) {
        if (meta.requiresAuth !== false) {
          await authStore.getUserInfo();
        }
      }
      next();
      return;
    }
    if (meta.requiresAuth === false) {
      next();
    } else {
      next({ name: "Login" });
    }
  });
};
