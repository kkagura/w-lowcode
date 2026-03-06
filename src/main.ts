import { createApp } from "vue";
import "./assets/less";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { setApp } from "./utils/instance";
import "element-plus/dist/index.css";

const app = createApp(App).use(router).use(createPinia());

setApp(app);
app.mount("#app");
