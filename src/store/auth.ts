import { getUserInfo, type UserInfoResponse } from "@/api";
import { defineStore } from "pinia";
import { ref } from "vue";

const STORAGE_TOKEN_KEY = "access_token";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem(STORAGE_TOKEN_KEY) || "");
  const isAuthenticated = ref(false);
  const userInfo = ref<UserInfoResponse | null>(null);
  return {
    token,
    isAuthenticated,
    setToken(accessToken: string) {
      token.value = accessToken;
      localStorage.setItem(STORAGE_TOKEN_KEY, accessToken);
    },
    getUserInfo() {
      getUserInfo().then((res) => {
        isAuthenticated.value = true;
        userInfo.value = res;
      });
    },
  };
});
