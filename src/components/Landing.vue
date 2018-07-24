<template>
<div class="canvas">
  <div class="canvas-small"></div>
  <div class="backdrop"></div>
  <header class="main-header">
    <div class="icon">
      <Logo></Logo>
    </div>
    <div>
      <button class="toggle-button">
        <span class="toggle-button__bar"></span>
        <span class="toggle-button__bar"></span>
        <span class="toggle-button__bar"></span>
      </button>
    </div>
    <nav class="nav">
      <ul class="nav__items">
        <li class="nav__item"><a href="#About">About</a></li>
        <li class="nav__item"><a href="#Schedule">Schedule</a></li>
        <li class="nav__item"><a href="#Prizes">Prizes</a></li>
        <li class="nav__item"><a href="#Sponsors">Sponsors</a></li>
        <li class="nav__item"><a href="#FAQ">FAQs</a></li>
        <li class="nav__item nav__item--register"><a href="#">Register</a></li>
      </ul>
    </nav>
  </header>
  <nav class="mobile-nav">
    <ul class="mobile-nav__items">
      <li class="mobile-nav__item"><a href="#About">About</a></li>
      <li class="mobile-nav__item"><a href="#Schedule">Schedule</a></li>
      <li class="mobile-nav__item"><a href="#Prizes">Prizes</a></li>
      <li class="mobile-nav__item"><a href="#Sponsors">Sponsors</a></li>
      <li class="mobile-nav__item"><a href="#FAQ">FAQs</a></li>
    </ul>
  </nav>
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
  },
  mounted() {
    var backdrop = document.querySelector(".backdrop");
    var mobileNav = document.querySelector(".mobile-nav");
    var toggleButton = document.querySelector(".toggle-button");

    backdrop.addEventListener("click", function() {
      mobileNav.classList.remove("open");
      backdrop.classList.remove("open");
      setTimeout(function() {
        backdrop.style.display = "none";
      }, 200);
    });
    toggleButton.addEventListener("click", function() {
      mobileNav.classList.add("open");
      backdrop.style.display = "block";
      setTimeout(function() {
        backdrop.classList.add("open");
      }, 10);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand:700");
@import url("https://fonts.googleapis.com/css?family=Nunito");

.canvas {
  width: 100vw;
  background: linear-gradient(135deg,#ffa6c7 40%, #6eadff 90%);
  height: calc(((9 / 16)) * 100vw); /* 16:9 screen ratio */
  position: relative;
  top: 0;
  left: 0;
}

.canvas-small {
  position: absolute;
  top: calc((100% - 30vw) / 2);
  left: calc((100% - 30vw) / 2);
  width: 30vw;
  height: 30vw;
  background: linear-gradient(-45deg, #ffa6c7 40%, #6eadff 60%);
  -webkit-mask-box-image: -webkit-radial-gradient(white 40%, transparent 70%);
  border-radius: 50%;
}

.backdrop {
  display: none;
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.2s linear;
}

.main-header {
  padding: 1.5vw 1vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toggle-button {
  display: none;
  width: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0 1.5rem;
  vertical-align: middle;
}

.toggle-button:focus {
  outline: none;
}

.toggle-button__bar {
  width: 100%;
  height: 3px;
  background: white;
  display: block;
  margin: 0.6rem 0;
}

.icon {
  vertical-align: middle;
  width: 8vw;
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
  margin: 0 1vw;
  font-weight: bold;
  color: white;
}

.nav__item a {
  font-size: 2.5vw;
  text-decoration: none;
  color: white;
}

.mobile-nav__item a {
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
}

.nav__item--register a {
  color: white;
  background: #ff7bac;
  padding: 0.5vw 1.5vw;
  border-radius: 2.5vw;
}

.nav__item--register a:hover,
.nav__item--register a:active {
  color: #ff7bac;
  background: white;
}

.main-logo {
  position: relative;
  top: calc((100% - 8vw)/3);
  left: calc(50vw - 20vw);
  width: 25vw;
  height: 7vw;
}

.main-logo svg {
  width: 100%;
  height: 100%;
}

.theme {
  font-family: 'Nunito', sans-serif;
  color: white;
  font-size: 2.5vw;
  font-weight: bolder;
  position: relative;
  top: calc((100% - 8vw)/3);
  left: 48vw;
  vertical-align: top;
}

.theme__items{
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Nunito', sans-serif;
  font-size: 1.5vw;
  font-weight: bold;
  color: white;
  position: relative;
  top: calc((100% - 8vw)/3);
  left: 48vw
}

.theme__item{
  display: block;
  margin: 0.5vw 0; 
}

.theme__item--register {
  margin: 1.5vw 0;
}

.theme__item--register a {
  color: white;
  background: #ff7bac;
  font-size: 2vw;
  padding: 0.5vw 3vw;
  border-radius: 2vw;
  text-decoration: none;
}

.theme__item--register a:hover,x
.theme__item--register a:active {
  color: #ff7bac;
  background: white;
}

.mobile-nav {
  transform: translateX(100%);
  font-family: 'Nunito', sans-serif;
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  background: #ff7bac;
  width:50%;
  height: 100%;
  transition: transform 300ms ease-out;
}

.mobile-nav__items {
  width: 90%;
  height: 100%;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mobile-nav__item {
  margin: 0.5rem 0;
  text-align: center;
  text-decoration: none;
}

.open {
    display: block !important;
    opacity: 1 !important;
    transform: translateY(0) !important;
}


@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .canvas {
    height: 100vh;
  }

  .canvas-small {
    top: 30%;
    left: calc((100% - 260px) / 2);
    width: 260px;
    height: 260px;
  }

  .main-header {
    padding: 1rem 0;
  }

  .toggle-button {
    display: inline-block;
  }

  .icon {
    width: 120px;
  }

  .nav {
    display: none;
  }

  .main-logo {
    top: 30%;
    left: calc((100% - 270px) / 2);
    width: 270px;
  }

  .theme {
    font-size: 1.5rem;
    top: 30%;
    left: unset;
    right: calc((100% - 270px) / 2);
    text-align: right;
  }

  .theme__items{
    font-size: 1rem;
    top: 35%;
    left: 0%;
  }

  .theme__item{
    text-align: center;
  }

  .theme__item--register a {
    color: white;
    background: #ff7bac;
    font-size: 1.5rem;
    padding: 0.5rem 2.5rem;
    border-radius: 2.5rem;
    text-decoration: none;
  }
}

@media only screen and (min-device-width:768px) and (max-device-width:800px) {
  .canvas {
    height: 100vh;
  }


  .canvas-small {
    top: 25%;
    left: calc((100% - 80vw) / 2);
    left: 10vw;
    width: 80vw;
    height: 80vw;
  }

  .main-header {
    padding: 1rem 0;
  }

  .icon svg {
    width: 15vw;
  }

  .main-header {
    padding: 2rem 1rem;
  }

  .nav__item{
    margin: 0 1.2vw;
  }

  .nav__item a {
    font-size: 2.8vw;
  }

  .main-logo {
    top: 35%;
    left: calc((100% - 60vw) / 2);
    width: 60vw;
  }

  .theme {
    font-size: 6vw;
    top: 35%;
    left: unset;
    right: calc((100% - 60vw) / 2);
    text-align: right;
  }

  .theme__items{
    font-size: 3.5vw;
    top: 40%;
    left: 0%;
  }

  .theme__item{
    text-align: center;
  }

  .theme__item--register a {
    color: white;
    background: #ff7bac;
    font-size: 5vw;
    padding: 0.5rem 2.5rem;
    border-radius: 2.5rem;
    text-decoration: none;
  }
}
</style>
