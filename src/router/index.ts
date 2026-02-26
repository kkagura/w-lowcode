import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { checkAuth } from "./router-hooks";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

checkAuth(router);

export default router;
