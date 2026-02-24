import type { App } from "vue";

let instance: App | null = null;

export const setApp = (app: App) => {
  instance = app;
};

export const getApp = () => {
  return instance;
};
