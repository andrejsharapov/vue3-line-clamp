import { createApp } from "vue";
import App from "./App.vue";
import vlc from "../index";

const app = createApp(App);

app.use(vlc, {
  // useClass: false,
  // textOverflow: "ellipsis",
  // wordBreak: "break-word",
  // useImportant: false,
});

app.mount("#app");
