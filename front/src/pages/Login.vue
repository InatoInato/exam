<script>
export default{
    name: "Login"
}
</script>

<template>
<main>
    <div class="logs">
        <h1>Login</h1>
        <input type="email" placeholder="Enter your email">
        <input type="password" placeholder="Enter your password">
        <div class="button">
            <button type="submit" class="but">Login</button>
            <select id="login_as" class="but">
                <option selected disabled>Войти как</option>
                <option value="runner">Бегун</option>
                <option value="">Координатор</option>
                <option value="">Администратор</option>
            </select>
        </div>
    </div>
</main>
</template>

<style>
.but{
    margin: 10px 30px;
    width: 100px;
}
</style>