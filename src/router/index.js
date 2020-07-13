import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Split from "@/views/Split.vue";
import Haven from "@/views/Haven.vue";
import Bind from "@/views/Bind.vue";
import Ascent from "@/views/Ascent.vue";
import Updates from "@/views/Updates.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/split",
    name: "Split",
    component: Split,
  },
  {
    path: "/haven",
    name: "Haven",
    component: Haven,
  },
  {
    path: "/bind",
    name: "Bind",
    component: Bind,
  },
  {
    path: "/ascent",
    name: "Ascent",
    component: Ascent,
  },
  {
    path: "/updates",
    name: "Updates",
    component: Updates,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
];

const router = new VueRouter({
  routes,
});

export default router;
