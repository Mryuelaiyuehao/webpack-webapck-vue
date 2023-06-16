const Home = () => import("../components/Home.vue");
// 基础组件
const Cell = () => import("../views/CellDemo.vue");
const Button = () => import("../views/ButtonDemo.vue");
const Popup = () => import("../views/PopupDemo.vue");
// 导航组件
// const NavBar = () => import("../../src/components/nav-bar/demo");
// // 表单组件
// const Switch = () => import("../../src/components/switch/demo");
// const Radio = () => import("../../src/components/radio/demo");
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/cell",
    name: "cell",
    component: Cell,
  },
  {
    path: "/button",
    name: "button",
    component: Button,
  },
  {
    path: "/popup",
    name: "popup",
    component: Popup,
  },
];
export default routes;
