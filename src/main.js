import { createApp } from "vue";
import App from "@/App.vue";
import FontAwesomePlugin from "./plugins/fontawesome";
import router from "@/router/index.js";
import "@/app.css";

createApp(App).use(router, FontAwesomePlugin).mount("#app");
