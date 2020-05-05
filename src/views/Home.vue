<template lang='pug'>
  .home
    Search
    MovieCard
</template>

<script>
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
export default {
  components: {
    Search,
    MovieCard
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