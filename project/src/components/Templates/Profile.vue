<template>
<div>
  <b-container>
    <b-card>
      <b-row>
        <b-col md="3" offset-md="0" sm="6" offset-sm="3">
          <b-img fluid rounded="circle" src="static/jp.jpg"></b-img>
        </b-col>
        <b-col>
          <h1>JP</h1>
          <b-button-toolbar>
            <a href="https://github.com/07JP27" target="_blank">
              <b-button class="mx-1 ghb-btn"><i class="fab fa-github"></i> GitHub</b-button>
            </a>
            <a href="https://qiita.com/07JP27" target="_blank">
              <b-button class="mx-1 qt-btn">Qiita</b-button>
            </a>
            <a href="https://www.linkedin.com/in/junpei-tsuchida-4631a6158/" target="_blank">
              <b-button class="mx-1 lnki-btn"><i class="fab fa-linkedin"></i> Linkedin</b-button>
            </a>
            <a href="https://twitter.com/07JP27" target="_blank">
              <b-button class="mx-1 twr-btn"><i class="fab fa-twitter"></i> Twitter</b-button>
            </a>
            <a href="https://www.facebook.com/junpei.tsuchida.5" target="_blank">
              <b-button class="mx-1 fb-btn"><i class="fab fa-facebook-square"></i> Facebook</b-button>
            </a>
          </b-button-toolbar>
          <h5>Licence/Qualification</h5>
          <ul>
            <li>日本ディープラーニング協会 E資格 2019#2</li>
            <li>基本情報技術者試験</li>
            <li>無人航空従事者試験３級</li>
            <li>普通自動車免許</li>
            <li>危険物取扱者試験 乙種 4類</li>
          </ul>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
.btn{
  margin: 10px 10px 10px 0 !important;
}

.ghb-btn{
  background-color: #222222;
  border-color: #222222;
  margin-left: 0 !important;
}

.ghb-btn:not(:disabled):not(.disabled):active{
  background-color: #222222;
  border-color: #222222;
}

.qt-btn{
  background-color: #4cb10d;
  border-color: #4cb10d;
}

.qt-btn:not(:disabled):not(.disabled):active{
  background-color: #4cb10d;
  border-color: #4cb10d;
}

.lnki-btn{
  background-color: #2867B2;
  border-color: #2867B2;
}

.lnki-btn:not(:disabled):not(.disabled):active{
  background-color: #2867B2;
  border-color: #2867B2;
}

.twr-btn{
  background-color: #55acee;
  border-color: #55acee;
}

.twr-btn:not(:disabled):not(.disabled):active{
  background-color: #55acee;
  border-color: #55acee;
}

.fb-btn{
  background-color: #3B5998;
  border-color: #3B5998;
}

.fb-btn:not(:disabled):not(.disabled):active{
  background-color: #3B5998;
  border-color: #3B5998;
}
</style>