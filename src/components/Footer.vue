<template lang='pug'>
  .footer
    .items
        a.item logo
        a.item Footer
        a.item navigate
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  background-color: navajowhite;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
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
