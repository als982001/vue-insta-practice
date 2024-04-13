import { createApp } from "vue";
import mitt from "mitt";
import App from "./App.vue";
import store from "./store.js";

let emitter = mitt();
let app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.use(store).mount("#app");
