<template>
  <div class="sponsors">
    <h1 id="h1b">Sponsors</h1>

    <div class="platinum">
      <h2>Platinum Tier</h2>
      <div class="parent">
        <div class="sponsor round shadow"></div>
        <div class="sponsor round shadow"></div>
        <div class="sponsor round shadow"></div>
      </div>
  </div>

  <div class="gold">
    <h2>Gold Tier</h2>
    <div class="parent">
      <div class="sponsor round shadow"></div>
      <div class="sponsor round shadow"></div>
      <div class="sponsor round shadow"></div>
    </div>
  </div>

  <div class="sliver">
  <h2>Silver Tier</h2>
  <div class="parent">
    <div class="sponsor round shadow"></div>
    <div class="sponsor round shadow"></div>
    <div class="sponsor round shadow"></div>
  </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'sponsor'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("https://fonts.googleapis.com/css?family=Quicksand:700");
@import url("https://fonts.googleapis.com/css?family=Nunito");

h1 {
  font-size: 3.5vw;
  font-family: 'Quicksand', sans-serif;
  margin: 0;
}

#h1b {
  color: #6eadff;
}

h2 {
  font-size: 1.8vw;
  font-family: 'Nunito', sans-serif;
  margin: 1.2vw auto;
  margin-top: 2vw;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .sponsor {
    padding: 20px 20px 20px 20px;
    align-content: center;
  }
}
.sponsors{
  font-family: 'Nunito', sans-serif;
  text-align: center;
}

.sponsor{
  height: 23vw;
  width: 23vw;
  margin: 2vw;
  margin-top: 0;
  background-color: #dbebff;
  display: inline-block;

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
</style>
