<template>
<div>
  <Header></Header>
  <b-container>
    <b-card-group deck>
      <b-col md="6">
        <div v-b-toggle.Azure class="collapse-btn card-header">
          Microsoft Azure
        </div>
        <b-collapse visible id="Azure">
          <b-card class="collapse-card">
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
        </b-collapse>
      </b-col>
      <b-col md="6">
        <div v-b-toggle.Office class="collapse-btn card-header">
          Office
        </div>
        <b-collapse visible id="Office">
          <b-card class="collapse-card">
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
        </b-collapse>
      </b-col>
      <b-col md="6">
        <div v-b-toggle.Language class="collapse-btn card-header">
          Language
        </div>
        <b-collapse visible id="Language">
          <b-card class="collapse-card">
            <Skill :rate="5">C#</Skill>
            <Skill :rate="4">JavaScript</Skill>
            <Skill :rate="5">HTML</Skill>
            <Skill :rate="3">CSS</Skill>
            <Skill :rate="3">PHP</Skill>
            <Skill :rate="3">VB.NET</Skill>
            <Skill :rate="4">SQL</Skill>
            <Skill :rate="1">Python</Skill>
            <Skill :rate="2">C</Skill>
            <Skill :rate="5">Japanese</Skill>
            <Skill :rate="3">English</Skill>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col md="6">
        <div v-b-toggle.Media class="collapse-btn card-header">
          Media
        </div>
        <b-collapse visible id="Media">
          <b-card class="collapse-card">
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
        </b-collapse>
      </b-col>
      <b-col md="6">
        <div v-b-toggle.Framework class="collapse-btn card-header">
          Framework
        </div>
        <b-collapse visible id="Framework">
          <b-card class="collapse-card">
            <Skill :rate="4">Vue.js<small>(This site made with Vue.js)</small></Skill>
            <Skill :rate="2">Laravel</Skill>
            <Skill :rate="4">.NET</Skill>
            <Skill :rate="3">Xamarin</Skill>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col md="6">
        <div v-b-toggle.OS class="collapse-btn card-header">
          OS
        </div>
        <b-collapse visible id="OS">
          <b-card class="collapse-card">
            <Skill :rate="4">Windows</Skill>
            <Skill :rate="5">macOS</Skill>
            <Skill :rate="3">Ubuntu</Skill>
            <Skill :rate="3">Cent OS</Skill>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col md="6">
        <div v-b-toggle.DevTools class="collapse-btn card-header">
          DevTools
        </div>
        <b-collapse visible id="DevTools">
          <b-card class="collapse-card">
            <Skill :rate="5">MS AppCenter</Skill>
            <Skill :rate="4">GitHub</Skill>
            <Skill :rate="4">Azure DevOps</Skill>
          </b-card>
        </b-collapse>
      </b-col>
      <b-col md="6">
        <div v-b-toggle.Other class="collapse-btn card-header">
          Other
        </div>
        <b-collapse visible id="Other">
          <b-card class="collapse-card">
            <Skill :rate="4">Drone Piloting</Skill>
            <Skill :rate="4">SolidWorks</Skill>
            <Skill :rate="4">Photography</Skill>
          </b-card>
        </b-collapse>
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
.collapse-btn{
  margin: 10px 15px 0 15px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  cursor: pointer;
}

.collapse-card{
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  border-top: none;
}

.card{
  margin-bottom: 20px;
}

/*スマートフォン*/
@media (max-width: 670px) {
  .collapse-btn{
    margin: 10px 0 0 0;
  }
}
</style>