<template>
<div>
  <Header></Header>
  <div>
    hogehoge
  </div>
  <div class="wrapper">
    <div>
      <h1>Application</h1>
      <li>
        <Box title="イベントアプリケーション" url="post.url" img="/static/qiita.png"></Box>
      </li>
    </div>
    <div>
      <h1>Web</h1>
      <li>
        <Box title="PRツールダウンロードセンター" url="post.url" img="/static/qiita.png"></Box>
      </li>
      <li>
        <Box title="人形のかくに" url="post.url" img="/static/qiita.png"></Box>
      </li>
    </div>
    <div>
      <h1>Publish</h1>
      <li>
        <Box title="フライヤー" url="post.url" img="/static/qiita.png"></Box>
      </li>
    </div>
    <div>
      <h1>Other</h1>
      <li>
        <Box title="一眼レフカメラによる間接スキャン" url="post.url" img="/static/qiita.png"></Box>
        <Box title="ドローンによる高解像度航空写真生成" url="post.url" img="/static/qiita.png"></Box>
      </li>
    </div>
  </div>
</div>
</template>

<script>
import Header from '../Organisms/Header'
import Box from '../Organisms/Box'

export default {
  name: 'Works',
  components: {
    Header,
    Box
  }
}
</script>

<style scoped>
.wrapper{
    padding: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    list-style: none;
}
</style>