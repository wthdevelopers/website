<template>
    <section class="themes">
        <h1 class="section-title">Themes</h1>
        <div class="theme__container">
            <ul class="theme__list">
                <li class="theme" v-for="theme in themes">
                    <img :src="imgPath(theme.image)" class="theme__image"></img>
                    <p class="theme-category">{{ theme.theme }}</p>
                </li>
            </ul>
        </div>
      </section>
</template>

<script>
export default {
    name: 'Prize', 
    props: ['themes'],
    methods: {
        imgPath: function(imgName) {
            return require('@/assets/' + imgName)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("https://fonts.googleapis.com/css?family=Quicksand:700");
@import url("https://fonts.googleapis.com/css?family=Nunito");

.themes {
    margin: 0;
    width: 100%;
}

.section-title {
    font-family: 'Quicksand', sans-serif;
    font-size: 3.5vw;
    margin: 0;
    margin-bottom: 1.2vw;
    color: #ff7bac;
    text-align: center;
}

.theme__container {
    font-family: 'Nunito', sans-serif;
    background-color: #ffebf1;
    box-shadow: 1.2vw 1.2vw #ffa6c7;
    border-radius: 6vw;
    padding: 4.5vw 1.2vw;
}

.theme__list {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    display: inline-block;
}

.theme {
    width: 48%;
    margin: 0;
    display: inline-block;
    vertical-align: top;
}

.theme__image {
    height: 8.5vw;
    width: 8.5vw;
    margin: auto;
}

.theme-category {
    text-align: center;
    font-size: 1.8vw;
    font-weight: bold;
    color: black;
    margin: 1.2vw auto;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .themes {
        margin: 0 auto;
        width: 100%;
    }

    .section-title {
        margin-bottom: 0.5rem;
        font-size: 2.5rem;
    }

    .theme__container {
        border-radius: 4rem;
        padding: 4rem 1rem;
        box-shadow: 0 1.2rem #ffa6c7;
    }

    .theme__list {
        display: block;
    }

    .theme {
        width: 100%;
        margin: auto;
    }

    .theme__image {
        height: 150px;
        width: 150px;
    }

    .theme-category {
        margin: 0.5rem 0;
        font-size: 1.5rem;
    }
}

@media only screen and (min-device-width:768px) and (max-device-width:800px) {

    .themes {
        margin: 0 auto;
        width: 65%;
    }

    .section-title {
        font-size: 4rem;
        margin-bottom: 0.5rem;
    }

    .theme__container {
        box-shadow: 0 1.2rem #ffa6c7;
        padding: 5rem 1rem;
        border-radius: 6rem;
    }

    .theme__list {
        display: block;
    }

    .theme {
        width: 100%;
        margin: auto;
    }

    .theme__image {
        height: 250px;
        width: 250px;
    }

    .theme-category {
        font-size: 2.5rem;
        margin: 1.5rem 0;
    }

}
</style>