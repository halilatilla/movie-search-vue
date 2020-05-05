<template lang='pug'>
  #app
    Header
    router-view  
    //Footer
</template>

<script>
import "./styles/normalize.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(45, 46, 45);
  color: #2c3e50;
  //max-width: 1180px;
  margin: 0 auto;
  position: relative;
  height: 100vh;
}
</style>
