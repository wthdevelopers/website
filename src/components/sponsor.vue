<template>
  <div class="sponsors">
    <h1 id="h1b">Sponsors</h1>
<!--     <div class="platinum">
      <h2>Platinum Tier</h2>
      <div class="parent">
        <div class="sponsor round shadow" v-for="platinium in platiniums">
          <img :src="imgPath(platinium.image)" class="sponsor__image"></img>
        </div>
      </div>
    </div> -->
    <div class="gold">
<!--       <h2>Gold Tier</h2> -->
      <div class="parent">
        <div class="sponsor round shadow" v-for="gold in golds" >
          <img :src="imgPath(gold.image)" class="sponsor__image" :style="addRatio(gold.hfactor, gold.wfactor)"></img>
        </div>
      </div>
    </div>
<!--     <div class="sliver">
      <h2>Silver Tier</h2>
      <div class="parent">
        <div class="sponsor round shadow" v-for="silver in silvers">
          <img :src="imgPath(silver.image)" class="sponsor__image"></img>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'sponsor',
  props: ['platinums', 'golds', 'silvers'],
  methods: {
    imgPath: function(imgName) {
      return require('@/assets/' + imgName)
    },
    addRatio: function(hfactor, wfactor) {
      if (hfactor !== 1 || wfactor !== 1) {
        return {
          'height': 'calc(100% * ' + hfactor + ')',
          'width': 'calc(100% * ' + wfactor + ')',
          'margin': 'calc((100% - (100% * ' + hfactor + ')) / 2) 0'
        }
      }

      // if (window.screen.width >= 320 && window.screen.width <= 480) {
      //   return {
      //     'height': 'calc(100px * ' + hfactor + ')',
      //     'width': 'calc(100px * ' + wfactor + ')'
      //   }
      // }
      // else if (window.screen.width >= 768 && window.screen.width <= 800) {
      //   return {
      //     'height': 'calc(200px * ' + hfactor + ')',
      //     'width': 'calc(200px * ' + wfactor + ')'
      //   }
      // }
      // else {
      //   return {
      //     'height': 'calc(23vw * ' + hfactor + ')',
      //     'width': 'calc(23vw * ' + wfactor + ')'
      //   }
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("https://fonts.googleapis.com/css?family=Quicksand:700");
@import url("https://fonts.googleapis.com/css?family=Nunito");

h1 {
  font-size: 2.5vw;
  font-family: 'Quicksand', sans-serif;
  margin: 0 auto;
  background: white;
  border-radius: 5vw;
  width: 20%;
}

#h1b {
  color: #6eadff;
}

h2 {
  font-size: 2.5vw;
  font-family: 'Nunito', sans-serif;
  margin: 0 auto;
  margin-top: 2vw;
  background: white;
  border-radius: 5vw;
  width: 20%;
}

.sponsors {
  font-family: 'Nunito', sans-serif;
  text-align: center;
}

.sponsor {
  height: 23vw;
  width: 23vw;
  margin: 2vw;
  background-color: #dbebff;
  display: inline-block;
  padding: 3.5vw;
  vertical-align: middle;
}

.round {
  /* Safari 3-4, iOS 1-3.2, Android 1.6- */
  -webkit-border-radius: 6vw;
  /* Firefox 1-3.6 */
  -moz-border-radius: 6vw;
  /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
  border-radius: 6vw;
}

.shadow {
  -moz-box-shadow:    0 1.2vw #a3d6f3;
  -webkit-box-shadow: 0 1.2vw #a3d6f3;
  box-shadow:         0 1.2vw #a3d6f3;
}

.sponsor__image {
  height: 100%;
  width: 100%;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  h1 {
    width: 50%;
  }

  .sponsors {
    width: 100%;
    margin: 0 auto;
  }

  .sponsor {
    height: 8.5rem;
    width: 8.5rem;
    align-content: center;
    margin: 0.5rem;
    padding: 1.2rem;
  }

  #h1b {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.2rem;
    margin: 0.5rem auto;
    width: 45%;
  }

  .round {
    -webkit-border-radius: 2rem;
    -moz-border-radius: 2rem;
    border-radius: 2rem;
  }

  .shadow {
    -moz-box-shadow:    0 0.5rem #a3d6f3;
    -webkit-box-shadow: 0 0.5rem #a3d6f3;
    box-shadow:         0 0.5rem #a3d6f3;
  }

  .sponsor__image {
    height: 100%;
    width: 100%;
  }
}

@media only screen and (min-device-width:768px) and (max-device-width:800px) {
  h1 {
    width: 40%;
  }

  .sponsors {
    width: 100%;
    margin: 0 auto;
  }

  .sponsor {
    height: 35vw;
    width: 35vw;
    align-content: center;
    margin: 2rem;
    padding: 2.2rem;
  }

  #h1b {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2.5rem;
    margin: 1.5rem auto;
    margin-bottom: 1rem;
    width: 40%;
  }

  .round {
    -webkit-border-radius: 3rem;
    -moz-border-radius: 3rem;
    border-radius: 3rem;
  }

  .shadow {
    -moz-box-shadow:    0 0.8rem #a3d6f3;
    -webkit-box-shadow: 0 0.8rem #a3d6f3;
    box-shadow:         0 0.8rem #a3d6f3;
  }

  .sponsor__image {
    height: 100%;
    width: 100%;
  }
}
</style>
