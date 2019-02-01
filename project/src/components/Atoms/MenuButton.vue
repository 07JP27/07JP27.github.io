<template>
  <div>
    <router-link :to="url">
      <b-button size="lg" variant="outline-success">
        <slot></slot>
      </b-button>
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
.btn-lg{
  height: 12rem;
  width: 12rem;
  border-radius: 6rem;
}

.btn-outline-success {
  color: white;
  border-color: white;
}

.btn-outline-success:hover {
    color: #fff;
    background-color: #002560;
    border-color: #002560;
}
</style>