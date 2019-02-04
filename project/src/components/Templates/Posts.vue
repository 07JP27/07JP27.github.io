<template>
<div>
  <Loader v-if="loading"></Loader>
  <b-container>
    <transition-group appear tag="div" class="card-deck" @before-enter="beforeEnter" @after-enter="afterEnter" @enter-cancelled="afterEnter">
      <div :data-index="index" :key="post.id" v-for="(post, index) in posts">
        <QiitaCard :title="post.title" :url="post.url" img="static/qiita.png"></QiitaCard>
      </div>
    </transition-group>
  </b-container>
</div>
</template>

<script>
import QiitaCard from '../Organisms/QiitaCard'
import Loader from '../Atoms/Loader'

import axios from 'axios';

export default {
  name: 'Posts',
  components: {
    QiitaCard,
    Loader
  },
  data () {
    return {
      loading: true,
      posts:{}
    }
  },
  mounted () {
    axios.get( 'https://qiita.com/api/v2/users/07JP27/items?per_page=100' )
        .then( ( res ) => {
            this.loading = false
            this.posts = res.data
            console.log(res.data)
        } )
        .catch( ( res ) => {
            console.error( res )
            this.loading = false
        } );
  },
  methods: {
    beforeEnter (el) {
      el.style.transitionDelay = 150 * parseInt(el.dataset.index, 10) + 'ms'
    },
    afterEnter (el) {
      el.style.transitionDelay = ''
    }
  }
}
</script>

<style scoped>
.v-enter {
  transform: translateY(30px);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: transform 500ms ease-out, opacity 200ms ease-out;
}
</style>