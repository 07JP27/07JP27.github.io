<template>
<div>
  <b-container>
    <b-card-group deck>
      <b-col md="6">
        <div v-b-toggle.Azure class="collapse-btn card-header">
          Microsoft Azure
        </div>
        <b-collapse visible id="Azure">
          <b-card class="collapse-card">
            <Skill :rate="4">Compute</Skill>
            <hr />
            <Skill :rate="5">Web & Mobile</Skill>
            <hr />
            <Skill :rate="4">Data & Storage</Skill>
            <hr />
            <Skill :rate="3">Analytics</Skill>
            <hr />
            <Skill :rate="5">Intelligence & IoT</Skill>
            <hr />
            <Skill :rate="2">Media & CDN</Skill>
            <hr />
            <Skill :rate="3">Identity & Access Management</Skill>
            <hr />
            <Skill :rate="3">Management</Skill>
            <hr />
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
            <hr />
            <Skill :rate="4">MS Excel</Skill>
            <hr />
            <Skill :rate="5">MS Power Point</Skill>
            <hr />
            <Skill :rate="4">MS Outlook</Skill>
            <hr />
            <Skill :rate="3">Apple Number</Skill>
            <hr />
            <Skill :rate="4">Apple Keynote</Skill>
            <hr />
            <Skill :rate="3">Apple Pages</Skill>
            <hr />
            <Skill :rate="4">MS Flow</Skill>
            <hr />
            <Skill :rate="3">MS PowerApps</Skill>
            <hr />
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
            <hr />
            <Skill :rate="4">JavaScript</Skill>
            <hr />
            <Skill :rate="5">HTML</Skill>
            <hr />
            <Skill :rate="3">CSS</Skill>
            <hr />
            <Skill :rate="3">PHP</Skill>
            <hr />
            <Skill :rate="3">VB.NET</Skill>
            <hr />
            <Skill :rate="4">SQL</Skill>
            <hr />
            <Skill :rate="1">Python</Skill>
            <hr />
            <Skill :rate="2">C</Skill>
            <hr />
            <Skill :rate="5">Japanese</Skill>
            <hr />
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
            <hr />
            <Skill :rate="4">Adobe Photoshop</Skill>
            <hr />
            <Skill :rate="4">Adobe Illustrator</Skill>
            <hr />
            <Skill :rate="4">Adobe Premiere</Skill>
            <hr />
            <Skill :rate="3">Adobe After Effects</Skill>
            <hr />
            <Skill :rate="3">Adobe Audition</Skill>
            <hr />
            <Skill :rate="4">Adobe InDesign</Skill>
            <hr />
            <Skill :rate="3">Adobe Lightroom</Skill>
            <hr />
            <Skill :rate="4">DaVinci Resolve</Skill>
            <hr />
            <Skill :rate="3">Apple Motion</Skill>
            <hr />
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
            <hr />
            <Skill :rate="2">Laravel</Skill>
            <hr />
            <Skill :rate="4">.NET</Skill>
            <hr />
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
            <hr />
            <Skill :rate="5">macOS</Skill>
            <hr />
            <Skill :rate="3">Ubuntu</Skill>
            <hr />
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
            <hr />
            <Skill :rate="4">GitHub</Skill>
            <hr />
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
            <hr />
            <Skill :rate="4">SolidWorks</Skill>
            <hr />
            <Skill :rate="4">Photography</Skill>
          </b-card>
        </b-collapse>
      </b-col>
    </b-card-group>
  </b-container>
</div>
</template>

<script>
import Skill from '../Organisms/Skill'

export default {
  name: 'Skillset',
  components: {
    Skill
  }
}
</script>

<style scoped>
hr {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
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