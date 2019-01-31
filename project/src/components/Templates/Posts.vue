<template>
<div>
  <Header></Header>
  <Loader v-if="loading"></Loader>
  <ul class="wrapper">
    <li v-for="post in posts" :key="post.key">
      <Box :title="post.title" :url="post.url" img="/static/qiita.png"></Box>
    </li>
  </ul>
</div>
</template>

<script>
import Header from '../Organisms/Header'
import Box from '../Organisms/Box'
import Loader from '../Atoms/Loader'

import axios from 'axios';

export default {
  name: 'Posts',
  components: {
    Header,
    Box,
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
            console.log(res.data)
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
.wrapper{
    padding: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    list-style: none;
}
</style>