<template>
    <div>
        <Rating :rate=rate></Rating><h3><slot></slot></h3>
    </div>
</template>

<script>
import Rating from '../Molecules/Rating'

export default {
  name: 'Skill',
  components: {
    Rating
  },
  props:['rate']
}
</script>

<style scoped>
div{
    display: flex;
}

h3{
    margin: 0 0 0 10px;
}
</style>