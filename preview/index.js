import Vue from "vue";
import VueRouter from "vue-router";
import VueI18n from "vue-i18n";
import App from "./app.vue";
import BaseView from "./components/BaseView.vue";
import Card from "./components/Card.vue";
import Popup from "./components/Popup.vue";
import "@/assets/font/index.js";
import "@/assets/css/normalize.css";
import "@/assets/css/reset.scss";
import router from "./route/index.js";
import { LANGUAGE } from "./statics/js/enums";
import messages from "./languages/index.js";

// 全局组件
Vue.component("BaseView", BaseView);
Vue.component("Card", Card);
Vue.component("Popup", Popup);
// 多语言(默认中文)
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: LANGUAGE.CHINESE,
  fallbackLocale: LANGUAGE.CHINESE,
  messages: messages,
});
window.$i18n = i18n;
// 路由
Vue.use(VueRouter);

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount("#app");
