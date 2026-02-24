import { createApp } from "vue";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "./assets/less";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { setApp } from "./utils/instance";
import Aura from "@primeuix/themes/aura";

const app = createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .use(ToastService)
  .use(router)
  .use(createPinia());

setApp(app);
app.mount("#app");
