import type { Router } from "vue-router";
import { useAuthStore } from "../store/auth";

const whiteList: string[] = [];

export const checkAuth = (router: Router) => {
  router.beforeEach((to, _, next) => {
    const authStore = useAuthStore();
    if (authStore.isAuthenticated) {
      next();
      return;
    }
    const name = to.name as string;
    if (whiteList.includes(name)) {
      next();
    } else {
      next({ name: "Login" });
    }
  });
};
