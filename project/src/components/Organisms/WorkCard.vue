<template>
<b-card :title="title"
        :img-src="img"
        img-alt="Img"
        img-top
        style="max-width: 20rem;">
    <p class="card-text">
        <slot></slot>
    </p>
</b-card>
</template>

<script>
export default {
  name: 'WorkCard',
  props: ['title','img']
}
</script>

<style scoped>
</style>