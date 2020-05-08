import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movie: null,
    isFav: false,
  },
  mutations: {
    setMovies(state, movie) {
      state.movie = movie;
    },
    isFav(state, isFav) {
      state.isFav = isFav;
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
