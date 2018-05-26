<template>
    <div class="text__container" :style="mobileStyles">
        <div class="text__container--title">{{ title }}</div>
        <div id="test" class="text__container--content" :style="desktopStyles">{{ content }}</div>
    </div>
</template>

<script>
export default {
    name: 'textContainer',
    props: ['title', 'content', 'bkColor', 'shadowColor'],
    computed: {
        mobileStyles: function() {
            if (window.screen.width >= 320 && window.screen.width <= 480) {
                return {
                    'background-color': this.bkColor, 
                    'box-shadow': '-0.3rem 0.5rem ' + this.shadowColor
                }
            }
            else {
                return 'background-color: none';
            }
        },
        desktopStyles: function() {
            if (window.screen.width > 500) {
                return {
                    'background-color': this.bkColor, 
                    'box-shadow': '0.5rem 1rem ' + this.shadowColor
                }
            }
            else {
                return 'background-color: none';
            }
        }
    }
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
    font-family: 'Quicksand', sans-serif;
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
    box-shadow: 0.5rem 1rem #d6d6d6;
    color: black;
    border-radius: 2rem;
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
