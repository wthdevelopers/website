<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
    box-sizing: border-box;
}

html, body {
	height: 100%;
	width: 100%;
  margin: 0px;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
