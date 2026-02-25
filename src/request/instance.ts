import axios, { type InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../store/auth";

export interface RequestConfig<RequestData = any>
  extends InternalAxiosRequestConfig<RequestData> {
  needToken?: boolean;
  needLoading?: boolean;
  needMessage?: boolean;
}

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000 * 20, // 20 seconds
});

service.interceptors.request.use((config: RequestConfig) => {
  if (config.needToken !== false && !config.headers?.Authorization) {
    const authStore = useAuthStore();
    if (authStore.token) {
      config.headers.Authorization = `Bearer ${authStore.token}`;
    }
  }
  return config;
});

service.interceptors.response.use(
  (response: any) => {
    const data = response.data;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
