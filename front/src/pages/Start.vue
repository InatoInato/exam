<script>
export default {
  name: "Start"
}
</script>

<template>
<header>
  <h1>Marathon Skills 2024</h1>
  <p>Almaty, Kazakhstan</p>
  <p>12 june 2024</p>
</header>
<main>
  <div class="buttons">
    <router-link to="/runner">Я хочу стать бегуном</router-link>
    <router-link to="/sponsor">Я хочу стать спонсором бегуна</router-link>
    <router-link to="/events">Я хочу узнать больше о событиях</router-link>
    <div>
      <router-link to="/login" class="log">Login</router-link>
    </div>
  </div>
</main>
</template>

<style>
.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.log{
  bottom: 0;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: rgb(206, 206, 206);
  padding: 10px;
  position: absolute;
  left: 750px;
}

</style>