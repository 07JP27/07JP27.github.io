<template>
<div class="background">
  <b-container>
    <div class="title-container">
      <div class="title">JP's Portfolio Site</div>
        <transition-group appear tag="div" class="row" @before-enter="beforeEnter" @after-enter="afterEnter" @enter-cancelled="afterEnter">
          <b-col class="button-wrap" :data-index="index" :key='menuItem.link' v-for='(menuItem, index) in menuItems'>
            <MenuButton :url="menuItem.link" :label="menuItem.label"></MenuButton>
          </b-col>
        </transition-group>
    </div>
  </b-container>
</div>
</template>

<script>
import MenuButton from '../Atoms/MenuButton'

export default {
  name: 'Home',
  components:{
    MenuButton
  },
  data () {
    return {
      menuItems: [
        {
          label: 'Profile',
          link: '/profile'
        },
        {
          label: 'Skillset',
          link: '/skillset'
        },
        {
          label: 'Posts',
          link: '/posts'
        },
        {
          label: 'Works',
          link: '/works'
        },
      ]
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.transitionDelay = 150 * parseInt(el.dataset.index, 10) + 'ms'
    },
    afterEnter (el) {
      el.style.transitionDelay = ''
    }
  }
}
</script>

<style scoped>
.background {
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background:linear-gradient(120deg, #13f1fc 0%,#0470dc 60%,#02305e 100%);
}

.title-container{
  padding-top:15rem;
}

.title{
  color: white;
  text-align: center;
  margin: 0 0 5rem 0;
  font-size: 3rem;
}

.button-wrap{
  text-align: center;
  padding: 15px;
}

.v-enter {
  transform: scale(0.5);
  opacity: 0;
}
.v-enter-to {
  transform: scale(1);
  opacity: 1;
}
.v-enter-active {
  transition: transform 300ms ease-out, opacity 300ms ease-out;
}

/*スマートフォン*/
@media (max-width: 670px) {
  .title-container{
    padding-top:2rem;
  }

  .title{
    font-size: 2rem;
    margin: 0 0 2rem 0;
  }
}
</style>