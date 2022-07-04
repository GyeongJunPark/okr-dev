import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import router from "./router.js";

const app = createApp(App);

app.use(Antd).use(router).mount("#app");
