<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import HomeSider from './components/HomeSider.vue';
</script>

<template>

  <HomeSider>
    <template v-slot>
      <img alt="logo" width="160" src="./assets/logo.jpg" />
      <HelloWorld msg="AUGUS" />
    </template>
  </HomeSider>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
