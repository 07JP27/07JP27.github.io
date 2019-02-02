<template>
<div>
  <Header></Header>
  <Loader v-if="loading"></Loader>
  <b-container>
    <b-card-group deck>
      <div v-for="post in posts" :key="post.key">
        <QiitaCard :title="post.title" :url="post.url" img="static/qiita.png"></QiitaCard>
      </div>
    </b-card-group>
  </b-container>
</div>
</template>

<script>
import Header from '../Organisms/Header'
import QiitaCard from '../Organisms/QiitaCard'
import Loader from '../Atoms/Loader'

import axios from 'axios';

export default {
  name: 'Posts',
  components: {
    Header,
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
            this.loading = false;
            this.posts = res.data
        } )
        .catch( ( res ) => {
            console.error( res )
            this.loading = false;
        } );
  }
}
</script>

<style scoped>
</style>