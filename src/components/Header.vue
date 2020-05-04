<template lang='pug'>
  nav.header
    .items
        a.item logo
        a.item title
        a.item navigate
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: teal;
  .items {
    background-color: yellow;
    display: flex;
    justify-content: space-between;
    margin: 0;
    .item {
      text-decoration: none;
      list-style: none;
    }
  }
}
</style>
