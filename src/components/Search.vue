<template lang='pug'>
  .search 
    input(placeholder='find a movie' v-model='movie' @keyup='getMovies')
</template>

<script>
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
input {
  width: 400px;
  height: 42px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 9px;
}
</style>