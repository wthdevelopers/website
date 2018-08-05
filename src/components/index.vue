<template lang="html">
  <div class="index">
  <h1 id="h1a">Getting Here</h1>
  <div class="location">
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.724908687625!2d103.96194377917459!3d1.3414140115758566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssutd!5e0!3m2!1sen!2ssg!4v1525927478994" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <div class="direction">
      <p>We are at 8 Somapah Road, Singapore 487372.</p>
      <p>By Train</br>
        Alight at Upper Changi MRT Station (DT34) and take Exit B – our campus will be on your left when you exit the station
      </p>
      <p>By Bus</br>
        Alight at one of the bus stops along Somapah Road and walk to our Campus. Buses available:
        <br>2, 5, 20, 24
      </p>
    </div>
  </div>
  <h1 id="h1b">Contact</h1>
  <div class="contact">
    <p>For any queries, you can contact us at</br>
      <a href="mailto:queries@sutdwth.com?Subject='Queries about What The Hack'">queries@sutdwth.com</a>
    </p>
    <footer>WHAT THE HACK 2018</footer>
  </div>
</div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("https://fonts.googleapis.com/css?family=Quicksand:700");
@import url("https://fonts.googleapis.com/css?family=Nunito");

h1 {
  font-size: 3.5vw;
  font-family: 'Quicksand', sans-serif;
  margin: 0 auto;
  background: white;
  border-radius: 5vw;
}

#h1a {
  color: #ff7bac;
  margin-bottom: 1.2vw;
  width: 30%
}

#h1b {
  color: #6eadff;
  width: 20%;
  margin-top: 6vw;
  margin-bottom: 1.2vw;
}

p {
  margin: 0;
  margin-bottom: 1.2vw;
  font-size: 2vw;
  font-family: 'Nunito', sans-serif;
}

iframe {
  width: 32vw;
  height: 32vw;
  margin: auto;
}

a {
  color: #6eadff;
}

footer {
  font-size: 1.8vw;
  font-family: 'Nunito', sans-serif;
}

.index {
  font-family: 'Nunito', 'sans-serif';
  text-align: center;
  align-content: center;
}

.location {
  margin: 2vw 0;
}

.location > * {
  vertical-align: middle;
}

.map {
  width: 49%;
  margin: 0 auto;
  display: inline-block;
}

.direction {
  width: 49%;
  margin: 0 auto;
  display: inline-block;
  text-align: left;
  background: white;
  border-radius: 1vw 10vw 10vw 1vw;
}

.contact {
  width: 45%;
  margin: 0 auto;
  margin-top: 2vw;
  background: white;
  border-radius: 10vw;
}

@media only screen and (min-device-width : 320px) and (max-device-width: 480px) {
  .index {
    margin: 0 auto;
    width: 90%;
  }

  #h1a {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    width: 65%;
  }

  .map {
    display: none;
  }

  .direction {
    width: 100%;
    border-radius: 0.8rem;
  }

  .contact {
    width: 100%;
    border-radius: 0.8rem;
  }

  p {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  #h1b {
    font-size: 2rem;
    margin-top: 4rem;
    margin-bottom: 0.5rem;
    width: 50%;
  }

  footer {
    font-size: 0.8rem;
  }
}
@media only screen and (min-device-width:768px) and (max-device-width:800px) {
  .index {
    margin: 0 auto;
    width: 90%;
  }

  #h1a {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    width: 60%;
  }

  .map {
    width: 100%;
  }

  iframe {
    width: 80vw;
    height: 50vw;
    margin: auto;
  }

  .direction {
    width: 100%;
    border-radius: 0.8rem;
  }

  .contact {
    width: 100%;
    border-radius: 0.8rem;
  }

  p {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  #h1b {
    font-size: 3.5rem;
    margin-top: 5rem;
    margin-bottom: 1rem;
    width: 40%;
  }

  footer {
    font-size: 1.5rem;
  }
}
</style>
