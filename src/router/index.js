import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
// import TodoList from "@/views/TodoList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todo",
    name: "Todo",
    // component: TodoList,
    component: () => import("@/views/TodoList.vue"),
  },
  
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import( "@/views/Contact.vue"),
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
