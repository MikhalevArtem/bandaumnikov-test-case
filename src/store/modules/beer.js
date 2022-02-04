import { BEER } from "@/api.js";

export default {
  state: () => ({
    isLoading: false,
    error: null,
    data: null,
  }),
  mutations: {
    fetchBeerRequest(state) {
      state.isLoading = true;
      state.error = null;
      state.data = null;
    },
    fetchBeerSuccess(state, data) {
      state.isLoading = false;
      state.data = data;
    },
    fetchBeerFailure(state, data) {
      state.isLoading = false;
      state.error = data;
    },
  },
  actions: {
    async fetchBeer({ commit }) {
      try {
        commit("fetchBeerRequest");
        let response = await fetch(BEER);
        if (!response.ok) {
          throw new Error("network error");
        }
        let result = await response.json();
        commit("fetchBeerSuccess", result);
      } catch (err) {
        commit("fetchBeerFailure", err.message);
      }
    },
  },
  getters: {
    getBeerData(state) {
      return state.data;
    },
    getBeerIsLoading(state) {
      return state.isLoading;
    },
    getBeerError(state) {
      return state.error;
    },
  },
};
