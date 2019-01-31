<template>
    <div>
        <router-link :to="url">
        <div class="button-3">
            <div class="eff-3"></div>
            <a><slot></slot></a>
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'MenuButton',
  props:['url']
}
</script>

<style scoped>
.button-3{
  width:140px;
  height:100px;
  border:2px solid #002560;
  float:left;
  text-align:center;
  cursor:pointer;
  position:relative;
  box-sizing:border-box;
  overflow:hidden;
  margin:0 0 40px 50px;
}
.button-3 a{
  font-family:arial;
  font-size:16px;
  color:#002560;
  text-decoration:none;
  line-height:100px;
  transition:all .2s ease;
  z-index:2;
  position:relative;
}
.eff-3{
  width:140px;
  height:100px;
  bottom:-100px;
  background:#002560;
  position:absolute;
  transition:all .2s ease;
  z-index:1;
}
.button-3:hover .eff-3{
  bottom:0;
}
.button-3:hover a{
  color:#fff;
}
</style>