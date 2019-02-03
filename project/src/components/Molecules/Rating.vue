<template>
    <div>
        <i class="fa fa-star" aria-hidden="true" v-for="n in rate" :key="n"></i>
        <i class="far fa-star" aria-hidden="true"  v-for="n in (5-rate)" :key="10+n"></i>
    </div>
</template>

<script>
export default {
  name: 'Rating',
  props:['rate']
}
</script>

<style scoped>
i{
    font-size: 1rem;
}

.fa-star{
    color: #ffbf00;
}
</style>