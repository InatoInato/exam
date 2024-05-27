<script>
import routes from './routes/index.js';
export default{
  name: 'App'
}
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Start</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>

</style>