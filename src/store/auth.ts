import { defineStore } from "pinia";
import { ref } from "vue";

const STORAGE_TOKEN_KEY = "access_token";

export const useAuthStore = defineStore("auth", () => {
  const token = ref("");
  const isAuthenticated = ref(false);
  return {
    token,
    isAuthenticated,
    setToken(accessToken: string) {
      token.value = accessToken;
      localStorage.setItem(STORAGE_TOKEN_KEY, accessToken);
    },
    setIsAuthenticated(isAuthenticated: boolean) {},
  };
});
