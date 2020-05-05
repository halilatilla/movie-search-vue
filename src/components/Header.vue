<template lang='pug'>
  nav.header
    .items
        a.item MyMovies
        a.item Find A Movie
        a.item Favorites
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: teal;
  .items {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1180px;
    .item {
      text-decoration: none;
      list-style: none;
    }
  }
}
</style>
