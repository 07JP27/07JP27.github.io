<template>
<div class="background">
    <div class="title">JP's Portfolio Site</div>
    <div class="menu-wrapper">
      <div>
      <MenuButton url="/Peofile">Profile</MenuButton>
      <MenuButton url="/Skillset">Skillset</MenuButton>
      <MenuButton url="/Posts">Posts</MenuButton>
      <MenuButton url="/Works">Works</MenuButton>
      </div>
    </div>
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

.title{
  color: white;
  text-align: center;
  margin: 0;
  font-size: 3rem;
}

.menu-wrapper{
   margin:  0 auto; 
}
</style>