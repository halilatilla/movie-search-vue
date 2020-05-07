<template lang='pug'>
  .home
    Search
    MovieCard
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
  }
};
</script>

<style scoped lang='scss'>
.home {
  padding-top: 2rem;
  display: grid;
  justify-items: center;
  grid-template-rows: repeat(2, max-content);
  gap: 3rem;
  //background: url("../assets/movie-bg.jpg") no-repeat center center fixed;
  height: calc(100% - 40px);
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.2),
      rgba(36, 36, 36, 0.73)
    ),
    url("../assets/movie-bg.jpg");
}
</style>