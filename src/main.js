import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VuesticPlugin } from "vuestic-ui"; // <-
import "vuestic-ui/dist/vuestic-ui.css"; // <-

createApp(App)
  .use(store)
  .use(router)
  .use(VuesticPlugin, {
    colors: {
      primary: "#2a79a3",
      secondary: "#FF7800",
    },
  })
  .mount("#app");
