import { createApp } from "vue";
import App from "./App.vue";
import "./global.css";
import router from "./router";

const app = createApp(App).use(router);
app.mount("#app");
