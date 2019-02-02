<template>
<div>
  <Header></Header>
  <b-container>
    <h1>Application</h1>
    <b-card-group deck>
      <WorkCard title="第17回日本スカウトジャンボリー大会アプリ" img="/static/17nsj.png">
        日本のボーイスカウト最大のキャンプ大会「第17回日本スカウトジャンボリー（17NSJ)」のアプリを開発・運用。
        Azure・AppCenter・Adobe XDを使用することにより効率的かつ少人数でプロジェクトを実現。
        アクティブユーザー数は13,000ユーザー。アプリのメンテナンスツールも併せて開発。<br />
        制作：2017~2018年<br />
        <b-link href="https://qiita.com/07JP27/items/7eb000c8e50b56ce8d08" target="_blank">開発・運用について詳しく見る</b-link><br />
        <b-link href="https://www.scout.or.jp/17nsj/app.html" target="_blank">アプリ紹介サイト</b-link><br />
        <b-link href="https://www.techsoupjapan.org/node/789162" target="_blank">テックスープジャパン事例</b-link>
      </WorkCard>
    </b-card-group>
    <hr />
    <h1>Web</h1>
    <b-card-group deck>
      <WorkCard title="ボーイスカウト日本連盟　PRツールダウンロードセンター" img="/static/saj-pr.png">
        ボーイスカウト日本連盟が発行する広報資材を誰でも自由にダウンロードできるサイトを制作。<br />
        データソースをGoogle Driveにすることでサーバー容量の削減を行った。<br />
        制作：2017年<br />
        <b-link href="https://www.scout.or.jp/download/" target="_blank">PRツールダウンロードセンター</b-link>
      </WorkCard>
      <WorkCard title="人形のかくに Webサイト" img="/static/doll-kakuni.png">
        山形県河北町に本店を構える創業百有余年の老舗人形専門店のWebサイトを制作。<br />
        制作：2010年<br />
        <b-link href="http://www.dolls-kakuni.jp/" target="_blank">人形のかくにWebサイト</b-link>
      </WorkCard>
    </b-card-group>
    <hr />
    <h1>Publish</h1>
    <b-card-group deck>
      <WorkCard title="ボーイスカウト寒河江第１団メンバー募集フライヤー" img="/static/sagae.jpg">
        ボーイスカウト寒河江第１団メンバー募集フライヤーをリニューアル制作。<br />
        制作：2019年<br />
      </WorkCard>
    </b-card-group>
    <hr />
    <h1>Other</h1>
    <b-card-group deck style="margin-bottom:20px;">
      <WorkCard title="大型印刷物間接スキャン" img="/static/scan.jpg">
        大型印刷物を一眼レフカメラで複数枚に分けて撮影し、１枚に合成したのちに台形・色彩補正を施してスキャンに近い形に加工。
      </WorkCard>
      <WorkCard title="ドローン高解像度航空写真生成" img="/static/17nsj-drone.jpg">
        ドローンのカメラを真下に向けて地表を連続撮影。それらを合成して一枚の航空写真を生成。
      </WorkCard>
      <WorkCard title="ドローンによる構造物(地形)３次元モデル生成" img="/static/dron-3d.png">
        構造物(地形)を連続撮影し点群モデルから3Dモデルを生成。
      </WorkCard>
    </b-card-group>
  </b-container>
</div>
</template>

<script>
import WorkCard from '../Organisms/WorkCard'
import Header from '../Organisms/Header'

export default {
  name: 'Works',
  components: {
    WorkCard,
    Header
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