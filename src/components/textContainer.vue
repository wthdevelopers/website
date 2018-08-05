<template>
  <div class="text__container" :style="mobileStyles">
    <div class="text__container--title">{{ title }}</div>
    <div class="text__container--content" :style="desktopStyles" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: 'textContainer',
  props: ['title', 'content', 'bkColor', 'shadowColor', 'shadowAlign'],
  computed: {
    mobileStyles: function() {
      if (window.screen.width >= 320 && window.screen.width <= 480) {
        return {
          'background-color': this.bkColor,
          'box-shadow': '-0.3rem 0.5rem ' + this.shadowColor
        }
      }
      else {
        return 'background-color: unset'
      }
    },
    desktopStyles: function() {
      if (window.screen.width >= 768 && window.screen.width <= 800) {
        return {
          'background-color': this.bkColor,
          'box-shadow': '-0.8rem 1.2rem ' + this.shadowColor
        }

      }
      else if (window.screen.width > 800) {
        if (this.shadowAlign === 'left') {
          return {
            'background-color': this.bkColor,
            'box-shadow': '-0.8vw 1.2vw ' + this.shadowColor
          }
        }
        else {
          return {
            'background-color': this.bkColor,
            'box-shadow': '0.8vw 1.2vw ' + this.shadowColor
          }
        }
      }
      else {
        return 'background-color: unset';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("https://fonts.googleapis.com/css?family=Quicksand:700");
@import url("https://fonts.googleapis.com/css?family=Nunito");

.text__container {
  width: 100%;
}

.text__container--title{
  font-family: 'Quicksand', sans-serif;
  font-size: 3.5vw;
  text-align: center;
  color: #ff7bac;
  margin: 0 auto;
  margin-bottom: 1.2vw;
  background: white;
  border-radius: 5vw;
}

.text__container--content {
  font-family: 'Nunito', sans-serif;
  font-size: 1.7vw;
  text-align: justify;
  padding: 1.8vw;
  background-color: #fcfcfc;
  box-shadow: 0.8vw 1.2vw #d6d6d6;
  color: black;
  border-radius: 3vw;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .text__container {
    background-color: #fcfcfc;
    border-radius: 1.5rem;
    box-shadow: -0.3rem 0.5rem #d6d6d6;
    padding: 1.5rem 0.8rem;
    width: 100%;
  }

  .text__container--title {
    font-size: 1.5rem;
    text-align: left;
    background: unset;
    border-radius: unset;
  }

  .text__container--content {
    font-size: 1rem;
    background-color: unset;
    border-radius: unset;
    box-shadow: unset;
    padding: 0.5rem 0 0 0;
  }
}

@media only screen and (min-device-width:768px) and (max-device-width:800px) {
  .text__container--title {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .text__container--content {
    padding: 3rem 1.5rem;
    font-size: 1.8rem;
    box-shadow: 0.5rem 1rem #d6d6d6;
    border-radius: 4rem;
  }
}

</style>
