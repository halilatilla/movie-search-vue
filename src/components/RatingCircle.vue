<template lang='pug'>
    .rating-circle
      svg(class="round" viewbox="0 0 50 50" width="50" height="50"  :stroke-dasharray="setRating +' '+ '999'")
        circle(cx="25" cy="25" r="20")
      span {{ rating }} 
</template>

<script>
export default {
  data() {
    return {
      num: 200
    };
  },
  props: ["rating"],
  computed: {
    setRating() {
      const newRating = Math.round((this.rating * 120) / 10);
      return newRating;
    }
  }
};
</script>

<style scoped lang='scss'>
.rating-circle {
  position: relative;
  width: max-content;
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: teal;
    font-weight: bold;
  }
}
.round {
  transform: rotate(-90deg);
  transition: all 1s ease-in-out;

  /* SVG */
  fill: white;
  stroke: red;
  stroke-width: 5;
  stroke-linecap: round;
  // stroke-dasharray: 0 999;
}
</style>