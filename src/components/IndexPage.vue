<template>
<div class ='container'>
  <Landing></Landing>
  <Prizes></Prizes>
</div>
</template>
<script>
import Landing from '@/components/Landing.vue'
import Prizes from '@/components/Prizes.vue'

export default {
  components: {
    'Landing':Landing,
    'Prizes':Prizes,
  },

}
</script>
<style scoped>
.container{
  width:100%;
}
</style>
