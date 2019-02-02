<template>
  <div>
    <a :href="url" target="_blank">
    <b-card :title="title"
            :img-src="img"
            img-top
            class="box mb-5">
      <p class="card-text">
        <slot></slot>
      </p>
    </b-card>
    </a>
  </div>
</template>

<script>
export default {
  name: 'QiitaCard',
  props: ['title','url','img']
}
</script>

<style scoped>
a{
  text-decoration:none;
}

.box{
  color: black;
  max-width: 12rem;
}

.box:hover {
    box-shadow: 0 1px 100px rgba(0,0,0,.1), 0 8px 200px rgba(0,0,0,.1);
}

.card-title{
  font-size: 1rem;
}

@media (max-width: 670px) {
  .box{
    max-width: none;
  }
}
</style>