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

  <div class="silver">
    <h2>Gold Tier</h2>
    <div class="parent">
      <div class="sponsor round shadow"></div>
      <div class="sponsor round shadow"></div>
      <div class="sponsor round shadow"></div>
    </div>
  </div>

  <div class="platinum">
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

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito");

h1{
  font-size: 300%;
}

#h1b {
  color: #a3d6f3;
}

.parent{
  padding: 10px 10px 10px 10px;
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
  height: 200px;
  width: 200px;
  margin: 0px 40px 40px 40px;
  background-color: #dbebff;
  display: inline-block;

}

.round {
  /* Safari 3-4, iOS 1-3.2, Android 1.6- */
  -webkit-border-radius: 40px;

  /* Firefox 1-3.6 */
  -moz-border-radius: 40px;

  /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
  border-radius: 40px;
}
.shadow {
  -moz-box-shadow:    0px 10px 0 0 #a3d6f3;
  -webkit-box-shadow: 0px 10px 0 0 #a3d6f3;
  box-shadow:         0px 10px 0 0 #a3d6f3;
}
</style>
