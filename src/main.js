import { createApp } from "vue";
import mitt from "mitt";
import App from "./App.vue";

let emitter = mitt();
let app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.mount("#app");
