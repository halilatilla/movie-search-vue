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
  data() {
    return {
      num: "100"
    };
  },
  components: {
    Search,
    MovieCard,
    RatingCircle
  }
};
</script>

<style scoped lang='scss'>
.home {
  margin-top: 2rem;
  display: grid;
  justify-items: center;
  gap: 3rem;
}
</style>