<template>
<div>
  <Header></Header>
  <b-container>
    <b-card-group deck>
      <b-col md="6">
        <b-card header="Microsoft Azure">
          <Skill :rate="4">Compute</Skill>
          <Skill :rate="5">Web & Mobile</Skill>
          <Skill :rate="4">Data & Storage</Skill>
          <Skill :rate="3">Analytics</Skill>
          <Skill :rate="5">Intelligence & IoT</Skill>
          <Skill :rate="2">Media & CDN</Skill>
          <Skill :rate="3">Identity & Access Management</Skill>
          <Skill :rate="3">Management</Skill>
          <Skill :rate="3">Developer Service</Skill>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Office">
          <Skill :rate="4">MS Word</Skill>
          <Skill :rate="4">MS Excel</Skill>
          <Skill :rate="5">MS Power Point</Skill>
          <Skill :rate="4">MS Outlook</Skill>
          <Skill :rate="3">Apple Number</Skill>
          <Skill :rate="4">Apple Keynote</Skill>
          <Skill :rate="3">Apple Pages</Skill>
          <Skill :rate="4">MS Flow</Skill>
          <Skill :rate="3">MS PowerApps</Skill>
          <Skill :rate="4">MS Power BI</Skill>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Language">
          <Skill :rate="5">C#</Skill>
          <Skill :rate="4">JavaScript</Skill>
          <Skill :rate="5">HTML</Skill>
          <Skill :rate="3">CSS</Skill>
          <Skill :rate="3">PHP</Skill>
          <Skill :rate="3">VB.NET</Skill>
          <Skill :rate="4">SQL</Skill>
          <Skill :rate="2">Python</Skill>
          <Skill :rate="1">C</Skill>
          <Skill :rate="5">Japanese</Skill>
          <Skill :rate="2">English</Skill>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Media">
          <Skill :rate="5">Adobe XD</Skill>
          <Skill :rate="4">Adobe Photoshop</Skill>
          <Skill :rate="4">Adobe Illustrator</Skill>
          <Skill :rate="4">Adobe Premiere</Skill>
          <Skill :rate="3">Adobe After Effects</Skill>
          <Skill :rate="3">Adobe Audition</Skill>
          <Skill :rate="4">Adobe InDesign</Skill>
          <Skill :rate="3">Adobe Lightroom</Skill>
          <Skill :rate="4">DaVinci Resolve</Skill>
          <Skill :rate="3">Apple Motion</Skill>
          <Skill :rate="3">Apple iMovie</Skill>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Framework">
          <Skill :rate="4">Vue.js<small>(This site made with Vue.js)</small></Skill>
          <Skill :rate="2">Laravel</Skill>
          <Skill :rate="4">.NET</Skill>
          <Skill :rate="3">Xamarin</Skill>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="OS">
          <Skill :rate="4">Windows</Skill>
          <Skill :rate="5">macOS</Skill>
          <Skill :rate="3">Ubuntu</Skill>
          <Skill :rate="3">Cent OS</Skill>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="DevTools">
          <Skill :rate="5">MS AppCenter</Skill>
          <Skill :rate="4">GitHub</Skill>
          <Skill :rate="4">Azure DevOps</Skill>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="Other">
          <Skill :rate="4">Drone Piloting</Skill>
          <Skill :rate="4">SolidWorks</Skill>
          <Skill :rate="4">Photography</Skill>
        </b-card>
      </b-col>
    </b-card-group>
  </b-container>
</div>
</template>

<script>
import Header from '../Organisms/Header'
import Skill from '../Organisms/Skill'

export default {
  name: 'Skillset',
  components: {
    Header,
    Skill
  }
}
</script>

<style scoped>
.card{
  margin-bottom: 20px;
}
</style>