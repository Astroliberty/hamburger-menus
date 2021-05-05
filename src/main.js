import { createApp } from "vue";
import App from "./App.vue";
import Toaster from "@meforma/vue-toaster";

const scssRequire = require.context("./scss/", true, /.scss$/);
const cssRequire = require.context("./css/", true, /.css$/);
const htmlRequire = require.context("./html/", true, /.txt$/);

const requireType = (type) => {
  type.keys().forEach((path) => {
    type(path);
  });
};

requireType(scssRequire);
requireType(cssRequire);
requireType(htmlRequire);

require("@/assets/scss/main.scss");

const app = createApp(App);
app.use(Toaster, {
  position: "bottom-right",
  duration: 1500,
  maxToasts: 2,
  useDefaultCss: false,
  className: "toast",
});
app.mount("#app");
