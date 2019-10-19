import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Custom Booking components
import BuiVue from "@bookingcom/bui-vue";
import "@bookingcom/bui-vue/dist/bui-vue.min.css";
import "@bookingcom/bui/lib/bui-variables.css";

Vue.config.productionTip = false;
Vue.use(BuiVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
