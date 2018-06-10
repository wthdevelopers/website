<template>
    <section class="prizes">
        <h1 class="section-title">Prizes</h1>
        <div class="prize__container">
            <ul class="prize__list">
                <li class="prize" v-for="prize in prizes">
                    <div class="prize__image"></div>
                    <h5 class="prize-category" v-html="prize[0]"></h5>
                    <h5 class="prize-amount">{{ prize[1] }}</h5>
                </li>
            </ul>
        </div>
      </section>
</template>

<script>
export default {
    name: 'Prize',
    data:() => {
        return {
            prizes: {
                prize1: ['BEST<br>EDUCATION', '$9999'],
                prize2: ['BEST<br>HUMAN INTERACTION', '$9999'],
                prize3: ['BEST<br>ART & DESIGN', '$9999'],
                prize4: ['BEST<br>SMART CITIES', '$9999'],
                prize5: ['BEST<br>THE THIRD WORLD', '$9999']
            }
        }
    },
    created: function() {
        if (window.screen.width >= 768 && window.screen.width <= 1024) {
            this.prizes.prize3[0] = 'BEST<br>ART &<br>DESIGN';
            this.prizes.prize4[0] = 'BEST<br>SMART<br>CITIES';
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("https://fonts.googleapis.com/css?family=Quicksand:700");
@import url("https://fonts.googleapis.com/css?family=Nunito");

/*section{
  padding:30px;
}*/

.prizes {
    width: 100%;
}

.section-title {
    font-family: 'Quicksand', sans-serif;
    font-size: 3rem;
    margin: 0;
    color: #ff7bac;
    text-align: center;
    margin-bottom: 1rem;
}

.prize__container {
    font-family: 'Nunito', sans-serif;
    background-color: #ffebf1;
    box-shadow: 0 1rem #ffa6c7;
    border-radius: 3rem;
    padding: 3rem 1rem;
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
    font-size: 1.5rem;
    height: 6rem;
}

.prize-amount {
    text-align: center;
    color: black;
    margin: 0.5rem 0;
    font-size: 1.5rem;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .prizes {
        margin: 2rem auto;
        width: 100%;
    }

    .section-title {
        margin-bottom: 0.5rem;
        font-size: 2rem;
    }

    .prize__container {
        box-shadow: 0 1rem #ffa6c7;
        padding: 3rem 1rem;
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
        height: 100px;
        width: 100px;
    }

    .prize-category {
        font-size: 1rem;
        margin: 0.5rem 0;
        height: auto;
    }

    .prize-amount {
        font-size: 1rem;
    }
}

@media only screen and (min-device-width:768px) and (max-device-width:1024px) {
    .prize-category {
        font-size: 1.2rem;
        margin-bottom: 0;
        height: 5rem;
    }

    .prize-amount {
        font-size: 1.2rem;
    }
}
</style>
