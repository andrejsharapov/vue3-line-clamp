import { createApp } from "vue";
import App from "./App.vue";
import v3lc from "../index";

const app = createApp(App);

app.use(v3lc, {
  // useClass: false,
  // textOverflow: "ellipsis",
  // wordBreak: "break-word",
  // useImportant: false,
});

app.mount("#app");
