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
    margin: 0;
    width: 100%;
}

.section-title {
    font-family: 'Quicksand', sans-serif;
    font-size: 3rem;
    margin: 0;
    margin-bottom: 1rem;
    color: #ff7bac;
    text-align: center;
}

.theme__container {
    font-family: 'Nunito', sans-serif;
    background-color: #ffebf1;
    box-shadow: 0 1rem #ffa6c7;
    border-radius: 3rem;
    padding: 4rem 1rem;
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
    width: 50%;
    margin: 0;
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
        margin: 0 auto;
        width: 100%;
    }

    .section-title {
        margin-bottom: 0.5rem;
        font-size: 2rem;
    }

    .theme__container {
        box-shadow: 0 1rem #ffa6c7;
        padding: 3rem 1rem;
    }

    .theme__list {
        display: block;
    }

    .theme {
        width: 100%;
        margin: auto;
    }

    .theme__image {
        height: 100px;
        width: 100px;
    }

    .theme-category {
        margin: 0.5rem 0;
        font-size: 1.2rem;
    }
}

@media only screen and (min-device-width:768px) and (max-device-width:1024px) {

    .section-title {
        margin-bottom: 0.5rem;
        font-size: 2.5rem;
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