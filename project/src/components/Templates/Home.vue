<template>
<div class="background">
  <b-container>
    <div class="title-container">
      <div class="title">JP's Portfolio Site</div>
      <b-row>
        <b-col class="button-wrap" :key='menuItem.link' v-for='menuItem in menuItems' transition="page-fade" stagger="100">
          <MenuButton :url="menuItem.link" :label="menuItem.label"></MenuButton>
        </b-col>
      </b-row>
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