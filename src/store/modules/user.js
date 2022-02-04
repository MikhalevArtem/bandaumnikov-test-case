import { USER } from "@/api.js";
import router from "@/router";

export default {
  state: () => ({
    user: null,
    isLoading: false,
    error: null,
  }),
  mutations: {
    fetchUserRequest(state) {
      state.user = null;
      state.isLoading = true;
      state.error = false;
    },
    fetchUserSuccess(state, data) {
      state.user = data;
      state.isLoading = false;
    },
    fetchUserFailure(state, data) {
      state.isLoading = false;
      state.error = data;
    },
    logoutUser(state) {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  actions: {
    async fetchUser({ commit, dispatch }) {
      try {
        commit("fetchUserRequest");
        let response = await fetch(USER);
        if (!response.ok) {
          throw new Error("network error");
        }
        let result = await response.json();
        commit("fetchUserSuccess", result);
        dispatch("fetchGeo", {
          lng: result.address.coordinates.lng,
          lat: result.address.coordinates.lat,
        });
        router.push("/");
      } catch (err) {
        commit("fetchUserFailure", err.message);
      }
    },
    logout({ commit }) {
      commit("logoutUser");
      router.push("/login");
    },
  },
  getters: {
    getUserData(state) {
      return state.user;
    },
    getUserIsLoading(state) {
      return state.isLoading;
    },
    getUserError(state) {
      return state.error;
    },
  },
};
