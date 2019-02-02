<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
import WebFont from 'webfontloader'

WebFont.load({
  custom: {
    families: ['Noto Sans Japanese'],
    urls: ['https://fonts.googleapis.com/earlyaccess/notosansjapanese.css']
  }
})

export default {
  name: 'App'
}
</script>

<style>
@import url('https://use.fontawesome.com/releases/v5.7.0/css/all.css');

#app {
  font-family: 'Noto Sans Japanese';
}
body {
  margin: 0px;
}
</style>
