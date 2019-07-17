import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";

//Si lo tocás rompes todo porque es donde se "declara" el bootstrap. O sea NO TOQUES
import BlackDashboard from "./plugins/blackDashboard";
//esto tiene que ver con donde se guarda la información pero no sé bien como funciona
import i18n from "./i18n"
//Acá te dice como tenés que publicar cuando estás listo para pasar a producción
import './registerServiceWorker'
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
