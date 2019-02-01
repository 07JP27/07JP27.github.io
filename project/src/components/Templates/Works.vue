<template>
<div>
  <Header></Header>
  <b-container>
    <h1>Application</h1>
    <b-card-group deck>
      <WorkCard title="イベントアプリケーション" img="https://picsum.photos/300/300/?image=41">
        This is a wider card with supporting text below as a
        natural lead-in to additional content. This content
        is a little bit longer.
      </WorkCard>
    </b-card-group>
    <hr />
    <h1>Web</h1>
    <b-card-group deck>
      <WorkCard title="PRツールダウンロードセンター" img="https://picsum.photos/300/300/?image=41">
        This is a wider card with supporting text below as a
        natural lead-in to additional content. This content
        is a little bit longer.
      </WorkCard>
      <WorkCard title="人形のかくに" img="https://picsum.photos/300/300/?image=41">
        This is a wider card with supporting text below as a
        natural lead-in to additional content. This content
        is a little bit longer.
      </WorkCard>
    </b-card-group>
    <hr />
    <h1>Publish</h1>
    <b-card-group deck>
      <WorkCard title="フライヤー" img="https://picsum.photos/300/300/?image=41">
        This is a wider card with supporting text below as a
        natural lead-in to additional content. This content
        is a little bit longer.
      </WorkCard>
    </b-card-group>
    <hr />
    <h1>Other</h1>
    <b-card-group deck style="margin-bottom:20px;">
      <WorkCard title="一眼レフカメラによる間接スキャン" img="https://picsum.photos/300/300/?image=41">
        This is a wider card with supporting text below as a
        natural lead-in to additional content. This content
        is a little bit longer.
      </WorkCard>
      <WorkCard title="ドローンによる高解像度航空写真生成" img="https://picsum.photos/300/300/?image=41">
        This is a wider card with supporting text below as a
        natural lead-in to additional content. This content
        is a little bit longer.
      </WorkCard>
    </b-card-group>
  </b-container>
</div>
</template>

<script>
import Header from '../Organisms/Header'
import WorkCard from '../Organisms/WorkCard'

export default {
  name: 'Works',
  components: {
    Header,
    WorkCard
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