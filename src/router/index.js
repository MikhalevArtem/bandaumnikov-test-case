import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index.js";
import Beer from "@/views/Beer.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";

const routes = [
  {
    path: "/",
    component: Beer,
    name: "Beer",
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
  {
    path: "/profile",
    component: Profile,
    name: "Profile",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!(to.name == "Login") && !store.getters.getUserData) {
    next({ name: "Login" });
  } else next();
});

export default router;
