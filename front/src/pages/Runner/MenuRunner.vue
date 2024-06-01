<template>
<main>
    <div class="container">
        <h1>Menu</h1>
        <a href="/registermarathon">Регистрация на марафон</a>
        <a href="/results">Мои результаты</a>
        <a href="/editprofile">Редактирование профиля</a>
        <a href="/mysponsor">Мой спонсор</a>
        <a href="/contacts">Контакты</a>
    </div>
</main>
</template>

<style>
.container h1{
    padding: 0;
    margin-bottom: 30px;
}
</style>

<script>
export default{
    name: "MenuRunner"
}
</script>