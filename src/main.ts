import { createApp } from "vue";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "./assets/less";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

createApp(App)
  .use(PrimeVue)
  .use(ToastService)
  .use(router)
  .use(createPinia())
  .mount("#app");
