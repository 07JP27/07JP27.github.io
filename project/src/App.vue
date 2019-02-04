<template>
  <div id='app'>
    <Header v-show="!this.isTopPage"></Header>
    <transition name='page-fade' mode='out-in'>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import WebFont from 'webfontloader'
import Header from './components/Organisms/Header'

WebFont.load({
  custom: {
    families: ['Noto Sans Japanese'],
    urls: ['https://fonts.googleapis.com/earlyaccess/notosansjapanese.css']
  }
})

export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    isTopPage () {
      return this.$route.path === '/'
    }
  }
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

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}
.page-fade-enter,
.page-fade-leave-to {
  opacity: 0;
}
</style>
