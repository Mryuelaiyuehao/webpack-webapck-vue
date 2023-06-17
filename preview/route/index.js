const Home = () => import("../views/Home.vue");
// 基础组件
const CellDemo = () => import("../views/CellDemo.vue");
const ButtonDemo = () => import("../views/ButtonDemo.vue");
const PopupDemo = () => import("../views/PopupDemo.vue");
// 导航组件
const NavBarDemo = () => import("../views/NavBarDemo.vue");
// // 表单组件
const SwitchDemo = () => import("../views/SwitchDemo.vue");
const RadioDemo = () => import("../views/RadioDemo.vue");
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "cell",
        component: CellDemo,
      },
      {
        path: "button",
        component: ButtonDemo,
      },
      {
        path: "popup",
        component: PopupDemo,
      },
      {
        path: "navBar",
        component: NavBarDemo,
      },
      {
        path: "switch",
        component: SwitchDemo,
      },
      {
        path: "radio",
        component: RadioDemo,
      },
    ],
  },
];
export default routes;
