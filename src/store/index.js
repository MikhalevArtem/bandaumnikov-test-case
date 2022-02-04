import { createStore } from "vuex";
import user from "./modules/user";
import beer from "./modules/beer";
import geocoding from "./modules/geocoding";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    user,
    beer,
    geocoding,
  },
});
