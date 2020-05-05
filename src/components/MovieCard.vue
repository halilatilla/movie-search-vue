<template lang='pug'>
  .card(v-model='getMovies') card
    div movies =  {{ movies }}
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      movies: null
    };
  },
  computed: {
    getMovies() {
      this.movies = this.$store.state.movies;
    }
  }
};
</script>

<style scoped lang='scss'>
.card {
  background-color: thistle;
}
</style>