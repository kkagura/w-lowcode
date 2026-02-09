import { createApp } from "vue";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "./style.css";
import App from "./App.vue";

createApp(App).use(PrimeVue).use(ToastService).mount("#app");
