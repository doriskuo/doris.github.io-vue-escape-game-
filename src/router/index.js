import { createRouter, createWebHistory } from "vue-router";
import Game from "../components/Game.vue";
import About from "../components/About.vue";

const routes = [
  { path: "/", name: "Home", component: Game },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
