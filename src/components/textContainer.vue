<template>
    <div class="text__container">
        <div class="text__container--title">
            virtual // reality
        </div>
        <div class="text__container--content">
            This year’s theme is virtual reality but by no means are you restricted solely to VR and AR hacks! The theme is divided into four categories, each with its own prize!
        </div>
    </div>
</template>

<script>
export default {
  name: 'textContainer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("https://fonts.googleapis.com/css?family=Quicksand:700");
@import url("https://fonts.googleapis.com/css?family=Nunito");


.text__container {
    width: 100vw;
}

.text__container--title{
    font-family: 'Nunito', sans-serif;
    font-size: 3rem;
    text-align: center;
    color: #ff7bac;
}

.text__container--content {
    font-family: 'Nunito', sans-serif;
    font-size: 1.5rem;
    text-align: justify;
    padding: 2rem;
    background-color: #fcfcfc;
    color: black;
    border-radius: 2rem;
    box-shadow: 0.5rem 1rem #d6d6d6;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    
    .text__container {
        background-color: #fcfcfc;
        border-radius: 2rem;
        box-shadow: -0.3rem 0.5rem #d6d6d6;
        margin: 0 2rem;
        padding: 1.5rem 1rem;
        width: auto;
    }

    .text__container--title {
        font-size: 2rem;
        text-align: left;
    }

    .text__container--content {
        font-size: 1rem;
        background-color: unset;
        border-radius: unset;
        box-shadow: unset;
        padding: 0.5rem 0 0 0;
    }
}

</style>
