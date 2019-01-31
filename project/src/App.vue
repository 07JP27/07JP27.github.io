<template>
  <div id='app'>
    <transition name='page-fade' mode='out-in'>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import WebFont from 'webfontloader'

WebFont.load({
  custom: {
    families: ['Sawarabi Gothic'],
    urls: ['https://fonts.googleapis.com/css?family=Sawarabi+Gothic']
  }
})

export default {
  name: 'App'
}
</script>

<style>
@import url('https://use.fontawesome.com/releases/v5.7.0/css/all.css');

#app {
  font-family: 'Sawarabi Gothic';
}
body {
  margin: 0px;
}
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}
.page-fade-enter,
.page-fade-leave-to {
  opacity: 0;
}
</style>
