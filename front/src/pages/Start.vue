<script>
export default {
  name: "Start"
}
</script>

<template>
<header>
  <h1>Marathon Skills 2024</h1>
  <p>Almaty, Kazakhstan</p>
  <p>12 June 2024</p>
</header>
<main>
  <div class="buttons">
    <router-link to="/runner">Я хочу стать бегуном</router-link>
    <router-link to="/sponsor">Я хочу стать спонсором бегуна</router-link>
    <router-link to="/events">Я хочу узнать больше о событиях</router-link>
    <router-link to="/login" class="log">Войти</router-link>
  </div>
</main>
</template>

<style>

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons a, .log {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  padding: 10px;
  width: 250px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #ccc;
  text-align: center;
}

.buttons a:hover, .log:hover {
  background-color: #000;
  color: #fff;
}

main {
  display: flex;
  justify-content: center;
}

</style>
