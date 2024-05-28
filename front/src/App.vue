<script>
import NavBar from './components/NavBar.vue';
export default{
  name: 'App',
  components: {NavBar},
  computed: {
    isHome(){
        return this.$route.path === '/'
    }
  }
}
</script>

<template>
  <div id="app">
    <NavBar v-if="!isHome" />
    <router-view></router-view>
  </div>
</template>

<style>

</style>