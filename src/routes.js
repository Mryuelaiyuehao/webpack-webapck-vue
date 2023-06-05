const Home = () => import('@/views/home.vue');
const Nav = () => import('@/views/nav.vue');
export default [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/nav',
    component: Nav,
  },
];
