<template>
<div>
  <Header></Header>
  <div class="wrapper">
    <div>
    <h1>Microsoft Azure</h1>
    <Skill :rate="4">Compute</Skill>
    <Skill :rate="5">Web & Mobile</Skill>
    <Skill :rate="4">Data & Storage</Skill>
    <Skill :rate="3">Analytics</Skill>
    <Skill :rate="5">Intelligence & IoT</Skill>
    <Skill :rate="2">Media & CDN</Skill>
    <Skill :rate="3">Identity & Access Management</Skill>
    <Skill :rate="3">Management</Skill>
    <Skill :rate="3">Developer Service</Skill>
    </div>
    <div>
    <h1>Language</h1>
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
    </div>
    <div>
    <h1>Framework</h1>
    <Skill :rate="4">Vue.js(This site also made with Vue.js)</Skill>
    <Skill :rate="2">Laravel</Skill>
    <Skill :rate="4">.NET</Skill>
    <Skill :rate="3">Xamarin</Skill>
    </div>
    <div>
    <h1>Media</h1>
    <Skill :rate="5">Adobe XD</Skill>
    <Skill :rate="4">Adobe Photoshop</Skill>
    <Skill :rate="4">Adobe Illustrator</Skill>
    <Skill :rate="4">Adobe Premiere</Skill>
    <Skill :rate="3">Adobe After Effects</Skill>
    <Skill :rate="3">Adobe Audition</Skill>
    <Skill :rate="4">Adobe InDesign</Skill>
    <Skill :rate="3">Adobe Lightroom</Skill>
    <Skill :rate="4">Blackmagic Desing DaVinci Resolve</Skill>
    <Skill :rate="3">Apple Motion</Skill>
    <Skill :rate="3">Apple iMovie</Skill>
    </div>
    <div>
    <h1>Office</h1>
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
    </div>
    <div>
    <h1>OS</h1>
    <Skill :rate="4">Windows</Skill>
    <Skill :rate="5">macOS</Skill>
    <Skill :rate="3">Ubuntu</Skill>
    <Skill :rate="3">Cent OS</Skill>
    </div>
    <div>
    <h1>Other</h1>
    <Skill :rate="4">Drone Piloting</Skill>
    <Skill :rate="4">SolidWorks</Skill>
    <Skill :rate="4">Photography</Skill>
    </div>
  </div>
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
.wrapper{
    padding: 0;
    display: -ms-flexbox;
    display: flex;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
</style>