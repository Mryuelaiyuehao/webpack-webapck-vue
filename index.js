import Vue from 'vue';
import App from './src/App.vue';
// import VueRouter from 'vue-router';
// import routes from './src/routes.js';
// const router = new VueRouter({
//   mode: 'history',
//   routes,
// });
// Vue.use(VueRouter);
new Vue({
  // router,
  render: (h) => h(App),
}).$mount('#app');