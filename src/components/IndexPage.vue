<template>
<div class ='container'>
  <Landing></Landing>
  <Prizes></Prizes>
  <div class="subContainer">
    <textContainer v-bind:title="content1.title" v-bind:content="content1.content" bkColor='red' shadowColor='black'></textContainer>
  </div>
</div>
</template>
<script>
import Landing from '@/components/Landing.vue'
import Prizes from '@/components/Prizes.vue'
import textContainer from '@/components/textContainer.vue'

export default {
  components: {
    'Landing':Landing,
    'Prizes':Prizes,
    'textContainer': textContainer
  },
  data:()=>{
    return{
      content1:{
          title: 'test',
          content:'This is a major release from 0.21.1 and includes a single, API-breaking change.We recommend that all users upgrade to this version after carefully reading the release note.'
        }
      }
    }
}
</script>
<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
}
.container{
}
.subContainer{
  margin: 30px;
}
</style>
