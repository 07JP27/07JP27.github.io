<template>
  <transition>
    <header>
      <div class = 'link'>
        <router-link to='/'>Home</router-link>
        <router-link to='/Profile'>Profile</router-link>
        <router-link to='/Skillset'>Skillset</router-link>
        <router-link to='/Posts'>Posts</router-link>
        <router-link to='/Works'>Works</router-link>
        <div class='clear'></div>
      </div>
    </header>
  </transition>
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
  background-color: #009ED9;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 0px;
  z-index: 10;
}
a {
  height: 7vh;
  line-height: 7vh;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 18px;
  color: white;
  text-decoration: none;
  width: 150px;
  display: inline-block;
}

a:hover{
    background-color: darken(white, 5%);
}
.clear {
  clear: left;
}
</style>