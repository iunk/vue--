<template>
  <div id="app">
    app
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  components: {
    FooterGuide
  }
}
</script>

<style>
  #app{
    text-align: center;
    padding-top: 60px;
  }
</style>
