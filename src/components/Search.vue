<template lang='pug'>
  .search 
    input(placeholder='find a movie' v-model='movie' @keyup='getMovies')
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      movie: ""
    };
  },
  methods: {
    getMovies() {
      this.$store.dispatch({ type: "getMovies", amount: this.movie });
    }
  }
};
</script>

<style scoped lang='scss'>
</style>