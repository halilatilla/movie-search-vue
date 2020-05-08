<template lang='pug'>
  .home
    Search
    MovieCard(:getMovie='getMovie')
</template>

<script>
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import RatingCircle from "../components/RatingCircle";
export default {
  components: {
    Search,
    MovieCard,
    RatingCircle
  },
  computed: {
    getMovie() {
      return this.$store.state.movie;
    }
  }
};
</script>

<style scoped lang='scss'>
.home {
  padding-top: 2rem;
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 800px;
  margin: 0 auto;
  gap: 3rem;
  height: calc(100% - 40px);
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.2),
      rgba(36, 36, 36, 0.73)
    ),
    url("../assets/movie-bg.jpg");
}
</style>