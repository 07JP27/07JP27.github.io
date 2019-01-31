<template>
  <a :href="url">
    <div class='box'>
      <img class="qiita-logo" :src="img">
      <h3 class="box-title">{{title}}</h3>
      <p><slot></slot></p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'box',
  props: ['title','url','img']
}
</script>

<style scoped>
a{
  text-decoration:none;
}

.box {
    overflow: hidden;
    width: 250px;
    padding: 0;
    margin: 24px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 8px 20px rgba(0,0,0,.1);
    cursor: pointer;
}

.box:hover {
    box-shadow: 0 1px 100px rgba(0,0,0,.1), 0 8px 200px rgba(0,0,0,.1);
}

.qiita-logo{
  width: 100%;
}

.box-title{
  margin: 10px;
  color: black;
}

</style>