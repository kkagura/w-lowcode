import { type ToastMessageOptions } from "primevue";
import { getApp } from "./instance";

export const toast = (params: ToastMessageOptions) => {
  const app = getApp();
  if (!app) {
    return;
  }
  const toast = app.config.globalProperties.$toast;
  return toast.add(params);
};
