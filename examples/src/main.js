import Vue from "vue";
import App from "./App.vue";
import watermark from "../../components/watermark";

Vue.config.productionTip = false;
Vue.use(watermark);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
