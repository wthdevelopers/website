<template>
<div class ='container'>
  <Landing></Landing>
  <section class="container__info">
    <div class="subContainer">
      <textContainer v-bind:title="content1.title" v-bind:content="content1.content" bkColor="tContainerColor.bkColor" shadowColor="tContainerColor.shadowColor"></textContainer>
    </div>
    <div class="subContainer">
      <textContainer v-bind:title="content2.title" v-bind:content="content2.content" bkColor="tContainerColor.bkColor" shadowColor="tContainerColor.shadowColor"></textContainer>
    </div>
  </section>
</div>
</template>
<script>
import Landing from '@/components/Landing.vue'
import Prizes from '@/components/Prizes.vue'
import textContainer from '@/components/textContainer.vue'
import Schedule from '@/components/Schedule.vue'

export default {
  components: {
    'Landing':Landing,
    'Prizes':Prizes,
    'textContainer': textContainer,
    'Schedule': Schedule
  },
  data:()=>{
    return{
        tContainerColor: {
          bkColor: '#ffebf1',
          shadowColor: '#ffa6c7'
        },
        content1: {
            title: 'What The Hack ?',
            content:'<strong>What The Hack</strong> @ SUTD is a 24 Hour hackathon that aims to bring together people of multiple disciplines\
                    and provide them with the resources to jumpstart their ideas.<br><br>\
                    <strong>Come solo or come as a team!</strong><br>\
                    Gather your fellow hackers into a team or come down and form teams on the day itself! Your team can have a <strong>maximum of 4 members</strong>.\
                    Alternatively, you can go at the themes solo too! Who knows? You might be able to win a prize all by yourself!<br><br>\
                    <strong>What you get out of What The Hack:</strong><br>\
                    <ul>\
                      <li>Bring crazy ideas to life</li>\
                      <li>Experience VR</li>\
                      <li>Network with our sponsors!</li>\
                    </ul>'
        },
        content2: {
          title: 'virtual // reality',
          content: 'This year’s theme is virtual reality but by no means are you restricted solely to VR and AR hacks!\
                    The theme is divided into four categories, each with its own prize!'
        }
      }
    }
}
</script>
<style scoped>
  *, *:before, *:after {
    box-sizing: border-box;
  }

  .container__info {
    margin: 15vh 8vw;
    display: grid;
    grid-template-columns: repeat(2, calc((100vw - 16vw - 5vw)/2));
    grid-template-rows: repeat(auto-fit, 60vh);
    grid-column-gap: 5vw;
  }

  .subContainer:nth-child(1) {
    width: 30vw;
    margin: 0;
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  }

  .subContainer:nth-child(2) {
    width:30vw;
    margin: 0;
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    align-self: flex-end;
    justify-self: flex-end;
  }
</style>
