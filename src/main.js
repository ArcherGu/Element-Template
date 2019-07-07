import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import BootAxios from "@/boot/axios";
import BootAuth from "@/boot/auth";
import "@/plugins/element.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.config.productionTip = false;

// boot
BootAxios({ Vue });
BootAuth({ router, store, Vue });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
