import VueRouter from "vue-router";
import routes from "./routes.js";
const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach((to, from, next) => {
  // console.log("to", to.path);
  // console.log("from:", from.path);
  next();
});
export default router;
