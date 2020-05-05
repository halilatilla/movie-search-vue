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
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: cornsilk;
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
