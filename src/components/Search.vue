<template lang='pug'>
  .search 
    input(placeholder='enter a movie name' v-model='movie' @keyup='getMovies')
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
  border-radius: $border-radius;
  padding-left: 9px;
}
</style>