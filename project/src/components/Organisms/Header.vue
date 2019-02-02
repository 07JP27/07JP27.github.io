<template>
  <header>
  <b-btn v-b-toggle.menu class="humberger-btn"><i class="fas fa-bars"></i></b-btn>
  <b-collapse id="menu" class="humberger-menu">
    <ul>
      <li><router-link to='/' style="cuesor:pointer">Home</router-link></li>
      <li><router-link to='/profile'>Profile</router-link></li>
      <li><router-link to='/skillset'>Skillset</router-link></li>
      <li><router-link to='/posts'>Posts</router-link></li>
      <li><router-link to='/works'>Works</router-link></li>
    </ul>
  </b-collapse>
  <div class = 'link'>
    <router-link to='/' style="cuesor:pointer">Home</router-link>
    <router-link to='/profile'>Profile</router-link>
    <router-link to='/skillset'>Skillset</router-link>
    <router-link to='/posts'>Posts</router-link>
    <router-link to='/works'>Works</router-link>
  </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  width: 100%;
  text-align: center;
  background-color: #0470dc;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  top: 0px;
  margin-bottom:20px;
  cursor: pointer;
}

.humberger-btn{
  display: none;
  background-color: transparent;
  border: none;
  height: 7vh;
  font-size: 2rem;
}

.humberger-btn:hover{
  background-color: transparent;
}

.humberger-btn:active{
  background-color: transparent !important;
}

.humberger-btn:focus{
  box-shadow: none !important;
}

ul{
  list-style: none;
  padding: 0;
}

a {
  height: 7vh;
  line-height: 7vh;
  font-size: 18px;
  color: white;
  text-decoration: none;
  width: 150px;
  display: inline-block;
}

a:hover{
  color: white;
  text-decoration: none;
}

/*スマートフォン*/
@media (max-width: 670px) {
  .humberger-btn{
    display:block;
  }

  .link{
    display: none;
  }
}
</style>