import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: null,
  },
  mutations: {
    setMovies(state, result) {
      state.movies = result;
    },
  },
  actions: {
    async getMovies({ commit }, payload) {
      const url = `http://www.omdbapi.com/?t=${payload.amount}&apikey=${process.env.VUE_APP_API_KEY}`;
      const result = await axios.get(url);
      if (result.data.Error) return;
      commit("setMovies", result.data);
    },
  },
  modules: {},
});
