<template lang="html">
  <div class="index">
<h1 id="h1a">Getting Here</h1>
  <div class="location">
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.724908687625!2d103.96194377917459!3d1.3414140115758566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssutd!5e0!3m2!1sen!2ssg!4v1525927478994" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <div class="direction">
      <p>We are at 8 Somapah Road, Singapore 487372</p>
      <p>By Train</br>
Alight at Upper Changi MRT Station (DT34) and take Exit B – our campus will be on your left when you exit the station</p>
    <p>By Bus</br>
Alight at one of the bus stops along Somapah Road and walk to our Campus. Buses available: 2, 5, 20, 24</p>
    </div>
  </div>

  <h1 id="h1b">Contact</h1>
  <div class="contact">
    <p>For any queries, you can contact us at</br><a href="mailto:queries@sutdwth.com?Subject='Queries about What The Hack'">queries@sutdwth.com</a></p>

    <footer>WHAT THE HACK 2018</footer>
  </div>
</div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Quicksand:700");
@import url("https://fonts.googleapis.com/css?family=Nunito");

.index {
  font-family: 'Nunito', 'sans-serif';
  text-align: center;
  align-content: center;
}

.location{
  float: left;
  margin: 10px 20px 80px 70px;
}

.map {
  float: left;
  width: 50%;

}
.direction {
  text-align: left;
  margin: 20px 50px 20px 20px;
}
@media only screen and (max-device-width: 480px) {
  .map {
    display: none;
  }
}
@media only screen and (max-device-width: 800px) and (min-device-width: 490px){
  iframe {
    -webkit-transform:scale(0.8);
    -moz-transform: scale(0.8);
  }
  .map {
    margin: -20px 30px 0px -10px;
  }
}
h1{
  font-size: 300%;
}

h2{
  font: sans-serif;
  font-size: 200%;
}
#h1a {
  color: #ffa6c7;

}
#h1b {
  color: #a3d6f3;
}
p {
  font-size: 1.2em;
}
iframe {
  width: 400px;
  height: 400px;
}

a {
  color: #a3d6f3;
}
footer{
  margin-top: 50px;
}
</style>
