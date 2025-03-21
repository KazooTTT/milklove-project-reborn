import { createApp } from "vue";
import App from "./App.vue";
import CustomNode from "./CustomNode.vue";
import "./assets/index.css";

const app = createApp(App);
app.component("CustomNode", CustomNode);
app.mount("#app");
