<template lang="html">
  <div id="location">
    <h1 id="h1a">Getting Here</h1>

      <div id="direction">

  <p>We are at 8 Somapah Road, Singapore 487372</p>
  <p>By Train</br>
Alight at Upper Changi MRT Station (DT34) and take Exit B – our campus will be on your left when you exit the station</p>
<p>By Bus</br>
Alight at one of the bus stops along Somapah Road and walk to our Campus. Buses available:</br>
Buses 20, 2, 5, 24</p>
</div>
<div id="map" class="well">
    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.724908687625!2d103.96194377917459!3d1.3414140115758566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssutd!5e0!3m2!1sen!2ssg!4v1525927478994" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
<h1 id="h1b">Contact</h1>
<p>For any queries, you can contact us at</br><a href="mailto:queries@sutdwth.com?Subject='Queries about What The Hack'">queries@sutdwth.com</a></p>


<footer>WHAT THE HACK 2018</footer>

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

#location {
  font-family: 'Nunito', 'sans-serif';
  text-align: center;
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

a {
  color: #a3d6f3;
}
footer{
  margin-top: 50px;
}
</style>
