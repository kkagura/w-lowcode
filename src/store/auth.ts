import { defineStore } from "pinia";

interface AuthState {
  token: string;
  isAuthenticated: boolean;
}

const STORAGE_TOKEN_KEY = "access_token";

export const useAuthStore = defineStore<"auth", AuthState>("auth", {
  state: () => {
    return {
      token: localStorage.getItem(STORAGE_TOKEN_KEY) || "",
      isAuthenticated: false,
    };
  },
  actions: {
    setToken(token: string) {
      this.token = token;
      localStorage.setItem(STORAGE_TOKEN_KEY, token);
    },
  },
});
