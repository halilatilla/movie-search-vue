<template lang='pug'>

  .card(v-if='getMovies')
    img(:src='getMovies.Poster')
    .information
      .title {{ getMovies.Title }}
      RatingCircle(:rating='getMovies.imdbRating')
      div {{ getMovies.Year }}
      div {{ getMovies.Genre }}
      div {{ getMovies.Country }}
      div {{ getMovies.Type }}
      div {{ getMovies.Plot }}
</template>

<script>
import RatingCircle from "./RatingCircle";
export default {
  components: {
    RatingCircle
  },
  computed: {
    getMovies() {
      return this.$store.state.movies;
    }
  }
};
</script>

<style scoped lang='scss'>
.card {
  display: flex;
  max-width: 900px;
  border-radius: 5px;
  overflow: hidden;
  background-color: rgb(235, 235, 235);
  img {
    border-right: 1px dotted;
    padding-right: 1rem;
  }
  .information {
    padding: 2rem;
    .title {
      font-size: 2rem;
      font-weight: bold;
    }
  }
}
</style>