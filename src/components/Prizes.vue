<template>
    <section class="prizes">
        <h1 class="section-title">Prizes</h1>
        <div class="prize__container">
            <ul class="prize__list">
                <li class="prize">
                    <div class="prize__image"></div>
                    <h5 class="prize-category">BEST<br>EDUCATION</h5>
                    <h5 class="prize-amount">$9999</h5>
                </li>
                <li class="prize">
                    <div class="prize__image"></div>
                    <h5 class="prize-category">BEST<br>HUMAN INTERACTION</h5>
                    <h5 class="prize-amount">$9999</h5>
                </li>
                <li class="prize">
                    <div class="prize__image"></div>
                    <h5 class="prize-category">BEST<br>ART & DESIGN</h5>
                    <h5 class="prize-amount">$9999</h5>
                </li>
                <li class="prize">
                    <div class="prize__image"></div>
                    <h5 class="prize-category">BEST<br>SMART CITIES</h5>
                    <h5 class="prize-amount">$9999</h5>
                </li>
                <li class="prize">
                    <div class="prize__image"></div>
                    <h5 class="prize-category">BEST<br>THE THIRD WORLD</h5>
                    <h5 class="prize-amount">$9999</h5>
                </li>
            </ul>
        </div>
      </section>
</template>

<script>
export default {
    name: 'Prize',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("https://fonts.googleapis.com/css?family=Quicksand:700");
@import url("https://fonts.googleapis.com/css?family=Nunito");
section{
  padding:30px;
}
.prizes {
    margin: 2rem 0;
}

.section-title {
    font-family: 'Quicksand', sans-serif;
    font-size: 3rem;
    margin: 0;
    color: #ff7bac;
    text-align: center;
}

.prize__container {
    font-family: 'Nunito', sans-serif;
    background-color: #ffebf1;
    box-shadow: 0 1rem #ffa6c7;
    border-radius: 3rem;
    padding: 1rem;
}

.prize__list {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    justify-content: center;
}

.prize {
    width: 30%;
    max-width: 25rem;
}

.prize__image {
    height: 120px;
    width: 120px;
    background-color: white;
    margin: auto;
    padding: 1rem;
}

.prize-category {
    text-align: center;
    color: black;
    margin: 1rem 0;
}

.prize-amount {
    text-align: center;
    color: black;
    margin: 0.5rem 0;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .prizes {
        margin: 2rem 2rem;
    }

    .section-title {
        margin-bottom: 1.2rem;
    }

    .prize__container {
        box-shadow: 0 1rem #ffa6c7;
        border-radius: 2rem;
        padding: 1.8rem 0.8rem;
    }

    .prize__list {
        display: block;
        width: 100%;
    }

    .prize {
        width: 100%;
        margin: auto;
    }

    .prize__image {
        height: 128px;
        width: 128px;
    }

    .prize-category {
        font-size: 1rem;
        margin: 0.5rem 0;
    }

    .prize-amount {
        font-size: 1rem;
    }
}

@media only screen and (min-device-width:768px) and (max-device-width:1024px) {
    .prize-category {
        font-size: 0.85rem;
        margin-bottom: 0;
    }

    .prize-amount {
        font-size: 0.85rem;
    }
}
</style>
