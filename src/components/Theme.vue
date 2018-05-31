<template>
    <section class="themes">
        <h1 class="section-title">Themes</h1>
        <div class="theme__container">
            <ul class="theme__list">
                <li class="theme">
                    <div class="theme__image"></div>
                    <p class="theme-category">Education</p>
                </li><li class="theme">
                    <div class="theme__image"></div>
                    <p class="theme-category">Smart Cities</p>
                </li>
                <li class="theme">
                    <div class="theme__image"></div>
                    <p class="theme-category">Art & Design</p>
                </li><li class="theme">
                    <div class="theme__image"></div>
                    <p class="theme-category">The Third World</p>
                </li>
                <li class="theme">
                    <div class="theme__image"></div>
                    <p class="theme-category">Human Interaction</p>
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

.themes {
    margin: 2rem 0;
    width: 30vw;
}

.section-title {
    font-family: 'Quicksand', sans-serif;
    font-size: 3rem;
    margin: 0;
    color: #ff7bac;
    text-align: center;
}

.theme__container {
    font-family: 'Nunito', sans-serif;
    background-color: #ffebf1;
    box-shadow: 0 1rem #ffa6c7;
    border-radius: 3rem;
    padding: 2rem 1rem;
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
    width: 13vw;
    margin: 0 auto;
    display: inline-block;
    vertical-align: top;
}

.theme__image {
    height: 120px;
    width: 120px;
    background-color: white;
    margin: auto;
}

.theme-category {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    margin: 1rem auto;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .themes {
        margin: 1rem auto;
        width: 80%;
    }

    .section-title {
        margin-bottom: 1.2rem;
    }

    .theme__container {
        box-shadow: 1rem 1rem #ffa6c7;
    }

    .theme__list {
        display: block;
    }

    .theme {
        width: 100%;
        margin: auto;
    }

    .theme__image {
        height: 128px;
        width: 128px;
    }

    .theme-category {
        margin: 0.5rem 0;
    }
}

@media only screen and (min-device-width:768px) and (max-device-width:1024px) {
    .themes {
        width: 37vw;
    }

    .theme__container {
        padding: 1.5rem 1rem;
    }

    .theme {
        width: 15vw;
        margin: 0 calc((100% - 30vw) / 4);
        margin-top: 1rem;
    }

    .theme__image {
        height: 12vw;
        width: 12vw;
    }

    .theme-category {
        font-size: 1.5rem;
        margin-bottom: 0;
    }

}
</style>