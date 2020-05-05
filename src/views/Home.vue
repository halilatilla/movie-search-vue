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
  background-color: thistle;
}
</style>