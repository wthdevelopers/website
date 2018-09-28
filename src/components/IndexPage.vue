<template>
<div class="container">
  <Landing></Landing>
  <div id="Backdrop1">
    <Backdrop ID="backdrop1"></Backdrop>
  </div>
  <section class="VRCat__container">
    <div class="VRCat">
        <VRCat></VRCat>
    </div>
  </section>
  <section class="filler">
      <div class=filler__container>
        <img src='../assets/FlippedCat.png'>
      </div>
  </section>
  <section class="container__info">
    <div id="About" class="subContainer">
      <textContainer :title="content1.title" :content="content1.content" :bkColor="tContainerColor.bkColor" :shadow-color="tContainerColor.shadowColor" shadow-align="left">
      </textContainer>
    </div>
    <div class="subContainer">
      <textContainer :title="content2.title" :content="content2.content" :bkColor="tContainerColor.bkColor" :shadow-color="tContainerColor.shadowColor" shadow-align="right">
      </textContainer>
    </div>
    <div id="Theme" class="subContainer">
      <Theme :themes="themes"></Theme>
    </div>
    <div id="Schedule" class="subContainer">
        <Schedule></Schedule>
    </div>
    <div id="Prizes" class="subContainer">
      <Prizes :prizes="prizes"></Prizes>
    </div>
    <div id="Sponsors" class="subContainer">
      <Sponsor :platiniums="sponsors.platinum" :golds="sponsors.gold" :silvers="sponsors.silver"></Sponsor>
    </div>
    <div id="FAQ" class="subContainer">
      <Faqs></Faqs>
    </div>
    <div id="Index" class="subContainer">
      <Index></Index>
    </div>
  </section>
</div>
</template>

<script>
import Landing from '@/components/Landing.vue'
import textContainer from '@/components/textContainer.vue'
import Theme from '@/components/Theme.vue'
import Schedule from '@/components/Schedule.vue'
import Prizes from '@/components/Prizes.vue'
import VRCat from '@/components/VRCat.vue'
import Sponsor from '@/components/sponsor.vue'
import index from '@/components/index.vue'
import Faqs from '@/components/Faqs.vue'
import Backdrop from '@/components/Backdrop.vue'

export default {
  components: {
    'Landing':Landing,
    'Prizes':Prizes,
    'textContainer': textContainer,
    'Schedule': Schedule,
    'Theme': Theme,
    'VRCat': VRCat,
    'Sponsor': Sponsor,
    'Index': index,
    'Faqs': Faqs,
    'Backdrop': Backdrop
  },
  data:()=>{
    return{
        tContainerColor: {
          bkColor: '#fcfcfc',
          shadowColor: '#d6d6d6'
        },
        content1: {
          title: 'What The Hack?',
          content: '<strong>What The Hack</strong> @ SUTD is a 24-hour hackathon that aims to bring together people of multiple disciplines\
                    and provide them with the opportunity and resources to jumpstart their ideas.<br><br>\
                    <strong>Come solo or come as a team!</strong><br>\
                    Gather your fellow hackers into a team, or form teams on the day itself! Your team can have a <strong>maximum of 4 members</strong>.\
                    Alternatively, you can go at the themes solo too! Who knows? You might be able to win a prize all by yourself!<br><br>'
        },
        content2: {
          title: 'Immersive Realities',
          content: "This year’s theme is <b><i>Immersive Realities</i></b>, an umbrella term for AR, VR, and MR<sup>#</sup>, and even more! While purists may use the term Extended Reality, we extend our scope to include realities that aren't strictly defined by these categories, so by no means are you restricted solely to VR and AR hacks!\
                    The theme is divided into three categories, each with its own prize!\
                    <br><br>\
                    <small><sup>#</sup> Augmented, Virtual and Mixed Realities</small>"
        },
        themes: {
          theme1: {
            image: 'education.svg',
            theme: 'Education',
            desc: 'Change the nature of learning as you inform, educate, and entertain using new forms of reality.'
          },
          theme2: {
            image: 'art_design.svg',
            theme: 'Design and Art',
            desc: 'Blur the line between reality and fantasy by building imaginary worlds and creating spectacular visual art.'
          },
          theme3: {
            image: 'smart_cities.svg',
            theme: 'Smart Cities',
            desc: 'Mastermind and architect liveable space by simulating your grand plan of tomorrow’s cities.'
          }
        },
        prizes: {
          prize1: {
            image: 'best_overall.svg',
            category: 'Best<br>Overall Hack',
            amount: 'S$1000 cash, and<br>4x AMD RX480 Graphics Cards'
          },
          prize2: {
            image: 'best_vr.svg',
            category: 'Best<br>VR Hack',
            amount: 'Trip to Shanghai,<br>Tickets to Global VR Hackathon,<br>and 2x AMD RX480 Graphics Cards'
          },
          prize3: {
            image: 'education.svg',
            category: 'Best<br>Education',
            amount: 'S$250 cash'
          },
          prize4: {
            image: 'art_design.svg',
            category: 'Best<br>Design and Art',
            amount: 'S$250 cash'
          },
          prize5: {
            image: 'smart_cities.svg',
            category: 'Best<br>Smart Cities',
            amount: 'S$250 cash'
          }
        },
        sponsors: {
          platinium: {
          },
          gold: {
            gold1: {
              image: 'htc.svg',
              hfactor: 1,
              wfactor: 1,
            },
            gold2: {
              image: 'AMD_logo.png',
              hfactor: 0.24,
              wfactor: 1
            },
            gold3: {
              image: 'IMDA_Logo.svg',
              hfactor: 1,
              wfactor: 1
            }
          },
          silver: {
          }
        }
      }
  },
  created: function() {
    if (window.screen.width > 800) {
      this.content1.content = this.content1.content + 
                              '<strong>What you get out of What The Hack:</strong><br>\
                              <ul>\
                              <li>Stand to win attractive prizes!</li>\
                              <li>Prototype your very own VR experience!</li>\
                              <li>Network with our sponsors from the industry!</li>\
                              </ul>'
    }
  }
}
</script>
<style scoped>
  *, *:before, *:after {
    box-sizing: border-box;
  }

  #Backdrop1 {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: -1;
  }

  .VRCat__container {
    display: inline;
    position: relative;
  }

  .VRCat {
    display: inline-block;
    position: absolute;
    top: 11vw;
    left: calc((100vw - 15vw) / 2 + 1.5vw);
    width: 15vw;
    background: white;
    border-radius: 15vw;
  }

  .filler {
    display: inline;
    position: relative;
  }

  .filler__container {
    display: inline-block;
    position: absolute;
    top: 100vw;
    left: 65vw;
  }
  
  .filler__container img {
    width: 15vw;
  }

  .container__info {
    margin: 8vw 8vw;
    display: grid;
    grid-template-columns: repeat(2, calc((100vw - 16vw - 5vw) / 2));
    grid-template-rows: repeat(12, auto);
    grid-column-gap: 5vw;
  }

  .subContainer:nth-child(1) { /* What The Hack ? */
    width: 90%;
    margin: 0;
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  }

  .subContainer:nth-child(2) { /* virtual // reallity */
    width: 80%;
    margin: 0;
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    align-self: flex-end;
    justify-self: flex-end;
  }
  
  .subContainer:nth-child(3) { /* Theme */
    margin-top: 15vw;
    width: 100%;
    grid-column: 2 / span 1;
    grid-row: 2 / span 2;
  }

  .subContainer:nth-child(4) { /* Schedule */
    margin-top: 6vw;
    width: 100%;
    grid-column: 1 / span 1;
    grid-row: 3 / span 2;
  }

  .subContainer:nth-child(5) { /* Prizes */
    margin-top: 6vw;
    grid-column: 1 / span 2;
    grid-row: 5 / span 1;
  }

  .subContainer:nth-child(6) { /* Sponsor */
    margin-top: 6vw;
    grid-column: 1 / span 2;
    grid-row: 6 / span 2;
  }

  .subContainer:nth-child(7) { /* FAQs */
    margin-top: 6vw;
    grid-column: 1 / span 2;
    grid-row: 8 / span 2;
  }

  .subContainer:nth-child(8) { /* Index */
    margin-top: 6vw;
    grid-column: 1 / span 2;
    grid-row: 10 / span 2;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .VRCat {
      top: 15rem;
      left: 65vw;
      height: 40vw;
      width: 30vw;
    }

    .filler {
      display: none;
    }

    .container__info {
      display: block;
      margin: 2.5rem 5vw;
      text-align: center;
    }

    .subContainer:nth-child(1) { /* What The Hack ? */
      width: 100%;
      text-align: left;
    }

    .subContainer:nth-child(1) > div {
      width: 60vw;
      display: inline-block;
      margin: 0 auto;
    }

    .subContainer:nth-child(2) { /* virtual // reallity */
      width: 100%;
      margin-top: 2rem;
    }

    .subContainer:nth-child(3) { /* Theme */
      width: 100%;
      margin-top: 4rem;
    }

    .subContainer:nth-child(4) { /* Schedule */
      width: 100%;
      margin-top: 4rem;
    }

    .subContainer:nth-child(4) > section {
      width: 90%;
    }

    .subContainer:nth-child(5) { /* Prizes */
      width: 100%;
      margin-top: 4rem;
    }

    .subContainer:nth-child(5) > section {
      width: 90%;
    }

    .subContainer:nth-child(6) { /* Sponsor */
      width: 100%;
      margin-top: 4rem;
    }

    .subContainer:nth-child(7) { /* FAQs */
      width: 100%;
      margin-top: 4rem;
    }

    .subContainer:nth-child(8) { /* Index */
      width: 100%;
      margin-top: 4rem;
    }
    
  }

  @media only screen and (min-device-width:768px) and (max-device-width:800px) {
    .VRCat {
      top: 20rem;
      left: 67vw;
      height: 40vw;
      width: 30vw;
    }

    .filler {
      display: none;
    }

    .container__info {
      display: block;
      margin: 2.5rem 5vw;
      text-align: center;
      margin: 5rem 5vw;
    }

    .subContainer:nth-child(1) { /* What The Hack ? */
      width: 100%;
      text-align: left;
      grid-area: unset;
    }
    
    .subContainer:nth-child(1) > div {
      width: 60vw;
      display: inline-block;
      margin: 0 auto;
    }
    
    .subContainer:nth-child(2) { /* virtual // reallity */
      width: 100%;
      margin-top: 5rem;
      grid-area: unset;
    }
    
    .subContainer:nth-child(3) { /* Theme */
      margin-top: 5rem;
      width: 100%;
      grid-area: unset;
    }
    
    .subContainer:nth-child(4) { /* Schedule */
      margin-top: 5rem;
      grid-area: unset;
    }

    .subContainer:nth-child(5) { /* Prizes */
      margin-top: 5rem;
      grid-area: unset;
    }

    .subContainer:nth-child(6) { /* Sponsor */
      margin-top: 5rem;
      grid-area: unset;
    }

    .subContainer:nth-child(7) { /* FAQs */
      margin-top: 5rem;
      grid-area: unset;
    }

    .subContainer:nth-child(8) { /* Index */
      margin-top: 5rem;
      grid-area: unset;
    }
  }
</style>
