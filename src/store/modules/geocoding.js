import { GEOCODING } from "@/api.js";

export default {
  state: () => ({
    place: "",
    error: null,
    isLoading: false,
  }),
  mutations: {
    fetchGeoRequest(state) {
      state.place = "";
      state.isLoading = true;
      state.error = null;
    },
    fetchGeoSuccess(state, text) {
      state.place = text;
      state.isLoading = false;
    },
    fetchGeoFailure(state, error) {
      state.isLoading = false;
      state.error = error;
    },
  },
  actions: {
    async fetchGeo({ commit }, coordinates) {
      try {
        const { lng, lat } = coordinates;
        commit("fetchGeoRequest");
        let response = await fetch(GEOCODING(lng, lat));
        if (!response.ok) {
          throw new Error("network error");
        }
        let result = await response.json();
        commit(
          "fetchGeoSuccess",
          result?.features[0]?.place_name ?? "fog of war"
        );
      } catch (err) {
        commit("fetchGeoFailure", err.message);
      }
    },
  },
  getters: {
    getPlace(state) {
      return state.place;
    },
    getGeoIsLoading(state) {
      return state.isLoading;
    },
    getGeoError(state) {
      return state.error;
    },
  },
};
