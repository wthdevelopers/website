<template>
<div class="canvas">
<div class="canvas-small"></div>
<header class="main-header">
  <div class="icon">
    <Logo></Logo>
  </div>
  <nav class="nav">
      <ul class="nav__items">
          <li class="nav__item">
              <a href="#">About</a>
          </li>
          <li class="nav__item">
              <a href="#">Schedule</a>
          </li>
          <li class="nav__item">
              <a href="#">Prizes</a>
          </li>
          <li class="nav__item">
              <a href="#">Sponsors</a>
          </li>
          <li class="nav__item">
              <a href="#">FAQs</a>
          </li>
          <li class="nav__item nav__item--register">
              <a href="#">Register</a>
          </li>
      </ul>
  </nav>
</header>
<div class="main-logo">
  <Logo></Logo>
</div>
<div class="theme">virtual // reality</div>
  <ul class="theme__items">
    <li class="theme__item">19 September - 20 September</li>
    <li class="theme__item">Singapore University of Technology and Design</li>
    <li class="theme__item theme__item--register">
      <a href="#">Register</a>
    </li>
  </ul>
</div>
</template>

<script>
import Logo from '@/components/WTH_logo.vue'

export default {
  name: 'Landing',
  components: {
    'Logo':Logo 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand:700");
@import url("https://fonts.googleapis.com/css?family=Nunito");

.canvas {
  background: linear-gradient(135deg,#ffa6c7 40%, #6eadff 90%);
  height: inherit;
}

.canvas-small {
  position: absolute;
  top: 20%;
  left: 30%;
  width: 560px;
  height: 560px;
  background: linear-gradient(-45deg, #ffa6c7 40%, #6eadff 60%);
  -webkit-mask-box-image: -webkit-radial-gradient(white 40%, transparent 70%);
  border-radius: 50%;
}

.main-header {
  padding: 1.8rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon {
  vertical-align: middle;
  width: 150px;
  margin: 0 1rem;
}

.nav {
  display: flex;
  font-family: 'Nunito', sans-serif;
  text-align: right;
  vertical-align: middle;
}

.nav__items {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

.nav__item {
  /* display: inline-block; */
  margin: 0 1.3rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.nav__item a {
  text-decoration: none;
  color: white;
}

.nav__item--register a {
  color: white;
  background: #ff7bac;
  padding: 0.5rem 2rem;
  border-radius: 2.5rem;
}

.nav__item--register a:hover,
.nav__item--register a:active {
  color: #ff7bac;
  background: white;
}

.main-logo {
  position: relative;
  top: 23%;
  left: 14%;
  width: 500px;
}

.theme {
  font-family: 'Nunito', sans-serif;
  color: white;
  font-size: 3.2rem;
  font-weight: bolder;
  position: relative;
  top: 25%;
  left: 45%;
  vertical-align: top;
}

.theme__items{
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Nunito', sans-serif;
  font-size:1.5rem;
  font-weight: bold;
  color: white;
  position: relative;
  top: 25%;
  left: 45%;
}

.theme__item{
  display: block;
  margin: 0.5rem 0rem; 
}

.theme__item--register {
  margin: 2rem 0rem;
}

.theme__item--register a {
  color: white;
  background: #ff7bac;
  font-size: 2.5rem;
  padding: 0.5rem 3.5rem;
  border-radius: 2.5rem;
  text-decoration: none;
}

.theme__item--register a:hover,
.theme__item--register a:active {
  color: #ff7bac;
  background: white;
}
</style>
