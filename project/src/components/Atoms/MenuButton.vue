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

.btn-outline-success:not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: #002560;
    border-color: #002560;
}

.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-success.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.5rem rgba(90, 153, 224, 0.548);
    box-shadow: 0 0 0 0.5rem rgba(90, 153, 224, 0.548);
}

.btn-outline-success:focus{
  -webkit-box-shadow: 0 0 0 0 rgba(96, 170, 255, 0.548);
  box-shadow: 0 0 0 0 rgba(96, 170, 255, 0.548);
}
</style>