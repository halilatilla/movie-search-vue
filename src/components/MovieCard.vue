<template lang='pug'>

  .card(v-if='getMovie')
    img(:src='getMovie.Poster' v-if='getMovie.Poster !== "N/A"')
    .information
      .title {{ getMovie.Title }}
      div.description
        div {{ getMovie.Year }}
        div {{ getMovie.Genre }}
        div {{ getMovie.Country }}
      RatingCircle(:rating='getMovie.imdbRating' )
      button(@click='setFavMovie' v-model='setFavMovie'  :class='isFav') add fav
      .pilot {{ getMovie.Plot }}
</template>

<script>
import RatingCircle from "./RatingCircle";
export default {
  props: ["getMovie"],
  components: {
    RatingCircle
  },
  methods: {
    setFavMovie() {
      let favMovies = localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites"))
        : [];

      if (favMovies.some(el => el.imdbID === this.getMovie.imdbID)) {
        const newMovies = favMovies.filter(mov => {
          return mov.imdbID !== this.getMovie.imdbID;
        });
        favMovies = newMovies;
        this.$store.commit("isFav", false);
      } else {
        favMovies = [...favMovies, this.getMovie];
        this.$store.commit("isFav", true);
      }
      localStorage.setItem("favorites", JSON.stringify(favMovies));
    }
  },
  computed: {
    isFav() {
      return this.$store.state.isFav ? "is-fav" : null;
    }
  }
};
</script>

<style scoped lang='scss'>
.card {
  display: flex;
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
        padding: 9px;
        border-radius: $border-radius;
      }
    }

    .pilot {
      line-height: 22px;
      margin-top: 12px;
    }
  }
  .is-fav {
    background-color: red;
  }
}
</style>