<template>
    <div>
        <Rating :rate=rate></Rating><p style="margin-bottom:0;"><slot></slot></p>
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
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-flow: row wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
}

p{
    margin-left: 5px;
}
</style>