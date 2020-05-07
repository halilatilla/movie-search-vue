<template lang='pug'>

  .card(v-if='getMovies')
    img(:src='getMovies.Poster')
    .information
      .title {{ getMovies.Title }}
      div.description
        div {{ getMovies.Year }}
        //div {{ getMovies.Type }}
        div {{ getMovies.Genre }}
        div {{ getMovies.Country }}
      RatingCircle(:rating='getMovies.imdbRating')
      .pilot {{ getMovies.Plot }}
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
  max-width: 800px;
  height: max-content;
  border-radius: $border-radius;
  overflow: hidden;
  color: aliceblue;
  box-shadow: 2px 3px 8px rgba($color: #fff, $alpha: 0.4);
  img {
    height: max-content;
    width: max-content;
  }
  .information {
    padding: 2rem;
    display: grid;
    grid-template-rows: repeat(4, max-content);
    gap: 18px;
    background-color: #040b1d;
    .title {
      font-size: 2rem;
      font-weight: bold;
    }
    .description {
      display: flex;
      align-items: center;
      font-size: 14px;
      div {
        margin-right: 12px;
        //border: 1px solid;
        padding: 9px;
        border-radius: $border-radius;
        //background-color: rgb(77, 117, 250);
        //color: #2c3e50;
      }
    }
    .pilot {
      //background-color: antiquewhite;
      //padding: 18px;
      //color: #2c3e50;
      //border-radius: 5px;
      //width: 80%;
      line-height: 22px;
      margin-top: 12px;
    }
  }
}
</style>