<template lang='pug'>
  .favorite()
    MovieCard(v-for='getMovie in getMovies' :getMovie='getMovie')
</template>

<script>
import MovieCard from "../components/MovieCard";
export default {
  components: {
    MovieCard
  },
  computed: {
    getMovies() {
      return JSON.parse(localStorage.getItem("favorites"));
    }
  }
};
</script>

<style scoped lang='scss'>
.favorite {
  margin-top: 2rem;
  display: grid;
  justify-items: center;
  grid-auto-columns: repeat(auto, minmax(200px, 1fr));
  grid-template-rows: 400px;
  gap: 3rem;
  color: wheat;
  span {
    background-color: wheat;
  }
}
</style>