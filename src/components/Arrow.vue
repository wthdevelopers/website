<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.62 72.93">
    <title>arow</title>
      <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
      <path class="cls-1" :style="colorFill" d="M56.31,0H4.15C.46,0-1.39,5.39,1.22,8.54L53.38,71.46a3.66,3.66,0,0,0,5.86,0L111.4,8.54C114,5.39,112.16,0,108.47,0Z"/>
      </g>
      </g>
    </svg>
</template>

<script>
  export default {
    name: 'Arrow',
    data:()=> {
      return {
        color: this.arrowColor
      }
    },
    props: ['arrowColor'],
    computed: {
      colorFill: function() {
        return { 'fill': this.color}
      }
    }
  }
</script>

<style scoped>
  .cls-1 {
    fill: #ff7bac;
  }
</style>
