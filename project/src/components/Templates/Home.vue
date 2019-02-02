<template>
<div class="background">
  <b-container>
    <div class="title-container">
      <div class="title">JP's Portfolio Site</div>
      <b-row>
        <b-col class="button-wrap">
          <MenuButton url="/Profile">Profile</MenuButton>
        </b-col>
        <b-col class="button-wrap">
          <MenuButton url="/Skillset">Skillset</MenuButton>
        </b-col>
        <b-col class="button-wrap">
          <MenuButton url="/Posts">Posts</MenuButton>
        </b-col>
        <b-col class="button-wrap">
          <MenuButton url="/Works">Works</MenuButton>
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
  }
}
</script>

<style scoped>
.background {
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background:linear-gradient(135deg, #13f1fc 0%,#0470dc 100%);
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