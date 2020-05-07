<template lang='pug'>
  nav.header
    .items
        router-link(to='/')
          img(class='logo' src='../assets/logo.png')
        .item Find A Movie
        router-link(to='/Favorites')
          span.fav Favorites
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  background-color: teal;
  color: aliceblue;
  height: 60px;
  display: flex;
  align-items: center;
  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    max-width: 1180px;
    .logo {
      width: 30px;
    }
    .item {
      text-decoration: none;
      list-style: none;
    }
    .fav {
      border-radius: $border-radius;
      border: 1px solid white;
      padding: 3px 9px;
    }
  }
}
</style>
